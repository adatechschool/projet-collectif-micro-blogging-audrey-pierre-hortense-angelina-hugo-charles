import ConnexionForm from "../Components/ConnexionForm"
import RegistrationForm from "../Components/RegistrationForm"

export default function Connexion(){
    return (
        <div className="flex flex-col items-center h-screen justify-center ">
          <p className="w-80 text-center font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 font-pacifico pb-16">SnoopyShots 🌴</p>
        <div className="flex space-x-24">
        <ConnexionForm/>
        <div className="w-1 h-auto bg-purple-300"></div>
        <RegistrationForm/>
        </div>
        </div>
    )
}