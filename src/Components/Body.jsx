import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Body = () => {
    return <div className="min-h-screen flex flex-col">
        <NavBar/>
        <div className="flex-1">
            <Outlet/>
        </div>
        <Footer/>
    </div>
}
export default Body;