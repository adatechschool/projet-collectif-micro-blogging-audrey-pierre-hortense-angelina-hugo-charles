
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Connexion from "./Pages/Connexion";

export default function App() {

    return (

       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<Create />}/>
            <Route path="/login" element={<Connexion/>}/>
        </Routes>
       </BrowserRouter>
    )
}
    
