import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ConnexionForm() {
    const [nickname, setnickname] = useState('');
    const [password, setPassword] = useState('');
    const [userList, setUserList] = useState('');
    const navigate = useNavigate();
    
    useEffect(async ()=>{
        const users = await axios.get("http://localhost:8000/api/users");
        setUserList(users);
    }, [userList]);

    const login = (e) => {
        e.preventDefault();
        try {
            userList.length > 0 ?? userList.map((user)=>{
                if (user.nickname == nickname) {
                    console.log('connected', nickname);
                    localStorage.setItem('connectedUser', nickname);
                    navigate('/');
                }
            })
            
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