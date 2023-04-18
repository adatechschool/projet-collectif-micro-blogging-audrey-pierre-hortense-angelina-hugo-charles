import { useState } from "react";
import axios from "axios";

export default function RegistrationForm() {
const [nickName, setNickName] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
    
const sendUser = () => {
    console.log(nickName, lastName, firstName, email, password)
        axios.post("http://localhost:8000/api/users", {
            nickname : nickName,
            firstname : firstName,
            lastname : lastName,
            email : email,
            password : password,
        })
    }

    return (
        <div className="flex flex-col items-center">
        <h2 className="font-pacifico text-2xl py-4">Inscription</h2>
        <form className="flex flex-col gap-2">
            <label className="flex flex-col space-y-2">
            <div>Pseudo :</div>
            <input className="border border-pink-300" type="text" value={nickName} onChange={(e)=> setNickName(e.target.value)}></input>
            </label>
            <label className="flex flex-col space-y-2">
                <div>Email :</div>
                <input className="border border-pink-300" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </label>
            <label className="flex flex-col space-y-2">
                <div>Firstname :</div>
                <input className="border border-pink-300" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
            </label>
            <label className="flex flex-col space-y-2">
                <div>Lastname :</div>
                <input className="border border-pink-300" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
            </label>
            <label className="flex flex-col space-y-2">
                <div>Password :</div>
                <input className="border border-pink-300" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </label>
            <button onClick={sendUser} className="p-1 text-xl border text-white rounded-full my-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 font-pacifico hover:from-white hover:to-white hover:text-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text hover:border-pink-300" >S'inscrire</button>
        </form>
        </div>
    )
}