import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const fetchProfile = async()=>{
        try{
            const profile = await axios.get(baseUrl+"/profile/view", {withCredentials: true});
            console.log(profile,"profile")
            dispatch(addUser(profile.data));
        }
        catch(error){
            console.log(error);
            navigate("/login")
        }
    }
    
    useEffect(()=>{
        fetchProfile();
    },[])

    return <div className="min-h-screen flex flex-col">
        <NavBar/>
        <div className="flex-1">
            <Outlet/>
        </div>
        <Footer/>
    </div>
}
export default Body;