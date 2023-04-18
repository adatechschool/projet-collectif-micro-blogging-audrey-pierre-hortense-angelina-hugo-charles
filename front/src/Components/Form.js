import { useState } from "react"
import axios from "axios";

export default function Form () {
    const [inputText, setInputText] = useState("");

    const sendPost = () => {
        axios.post('http://localhost:8000/api/posts', {
            description: inputText
        })
    }
    return (
        <>
        <form className="flex flex-col m-auto h-screen justify-center">
            <label className="flex flex-col">
                <p>Description :</p>
                <textarea className="border h-12 my-4" placeholder="Quoi de neuf ? #snoopy"
                value={inputText}
                onChange={(e)=> {setInputText(e.target.value); console.log(inputText); }}></textarea>
                <input className="text-gray-300" type="file"></input>
            </label>
            <button onClick={sendPost} className="p-1 text-2xl border text-white rounded-full my-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 font-pacifico hover:from-white hover:to-white hover:text-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text hover:border-pink-300" >Poster</button>
        </form>
        </>
    )
}