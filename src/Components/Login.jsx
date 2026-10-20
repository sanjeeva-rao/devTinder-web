import { useState } from "react"
import { baseUrl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email,setEmail] = useState("Msd123456@gmail.com");
    const [password, setPassword] = useState("Msd123456@");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async() => {
        try{
            console.log(email,password);
            const response = await axios.post(baseUrl+"/login", {email, password}, {withCredentials: true})
            dispatch(addUser(response.data));
            navigate("/")
        }
        catch{
            console.log("Error: ")
        }
    }
    return <div className="card card-dash bg-base-300 w-96 mx-auto my-6">
        <div className="card-body">
            <h2 className="card-title mb-2">Login</h2>
            <div className="card-actions">
                <label className="input validator my-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </label>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <path
                            d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                        ></path>
                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                    />
                </label>
                <button className="btn btn-primary flex justify-center items-center mx-auto my-2" onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
}
export default Login