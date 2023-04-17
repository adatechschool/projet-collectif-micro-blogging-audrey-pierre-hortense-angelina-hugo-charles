import Navbar from "../Components/Navbar";
import Posts from "../Components/Posts";

export default function Home () {

    return (
        <>
        <div className="flex font-chivo relative">
            <Navbar />
            <Posts />        
            
        </div>
        </>
    )

}