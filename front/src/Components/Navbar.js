import { useNavigate } from "react-router-dom";


export default function Navbar () {

    const navigate = useNavigate();

    return (
        <header className="flex flex-col items-start px-8 pt-8 space-y-4 fixed">
            <p className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 font-pacifico pb-8">SnappyShots 🌴</p>
            <button onClick={()=>{navigate("/")}}>Accueil</button>
            <button onClick={()=>{navigate("/profile")}}>Profil</button>
            <button onClick={()=>{navigate("/create")}}>Créer</button>
            <button onClick={()=>{navigate("/login")}}>Connexion</button>
        </header>
    )
}