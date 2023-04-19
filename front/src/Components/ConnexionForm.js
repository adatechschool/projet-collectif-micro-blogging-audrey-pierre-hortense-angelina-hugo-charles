import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ConnexionForm() {
    const [nickname, setnickname] = useState('');
    const [password, setPassword] = useState('');
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();

    const fetchUsers = async () => {
        const users = await axios.get("http://localhost:8000/api/users");
        setUserList(users.data);
    }

    useEffect(()=> {
        fetchUsers();
    }, [])
    
    
    const login = (e) => {
        
        e.preventDefault();
        console.log(userList);

        try {
            for (let i = 0; i < userList.length; i++ ) {
                if (userList[i].nickname === nickname) {
                    axios.get(`http://localhost:8000/api/users/${userList[i].id}?nickname=${nickname}&password=${password}`).then((res)=>{
                        if (res.status === 200){
                            console.log('connected', nickname);
                            console.log('res.data.id = ', res.data)
                            localStorage.setItem('connectedUser', res.data.id);
                            navigate('/');
                        } else {
                            console.log('wrong!!!!!')
                        }
                    })
                    return userList[i].nickname;
                } else {
                    console.log('no match found');
                }
            }
            
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="flex flex-col items-center">
        <h2 className="font-pacifico text-2xl py-4">Connexion</h2>
        <form className="flex flex-col">
            <label className="flex flex-col space-y-2">
            <div>Pseudo :</div>
            <input className="border border-pink-300" type="text" value={nickname} onChange={(e)=>{setnickname(e.target.value); console.log(nickname)}}></input>
            </label>
            <label className="flex flex-col mt-2 space-y-2">
                <div>Password :</div>
                <input className="border border-pink-300" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </label>
            <button className="p-1 text-xl border text-white rounded-full my-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 font-pacifico hover:from-white hover:to-white hover:text-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text hover:border-pink-300" onClick={login}>Se connecter</button>
        </form>
        </div>
    )
}