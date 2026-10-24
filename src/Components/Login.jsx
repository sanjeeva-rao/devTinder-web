import { useState } from "react"
import { baseUrl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [error,setError] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async() => {
        try{
            const response = await axios.post(baseUrl+"/login", {email, password}, {withCredentials: true})
            dispatch(addUser(response.data));
            navigate("/")
        }
        catch(error){
            setError(error?.response?.data || "Something went wrong")
        }
    }

    const handleSignup = async() => {
        try{
            const response = await axios.post(baseUrl+"/signUp",{firstName,lastName,email,password},{withCredentials:true});
            dispatch(addUser(response.data));
            navigate("/profile")
        }
        catch(error){
            setError(error?.response?.data || "Something went wrong")
        }
    }

    return <div className="card card-dash bg-base-300 w-96 mx-auto my-4">
        <div className="card-body">
            <h2 className="card-title mb-2">{isLogin ? "Login" : "Sign Up"}</h2>
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
                {
                    !isLogin && <div>
                        <label className="input validator my-2">
                            <input
                                type="text"
                                placeholder="First Name"
                                value = {firstName} onChange={(e)=>{setFirstName(e.target.value)}}
                            />
                        </label>
                        <label className="input validator">
                            <input
                                type="text"
                                placeholder="Last Name"
                                value = {lastName} onChange={(e)=>{setLastName(e.target.value)}}
                            />
                        </label>
                    </div>
                }
                <p className="text-red-500">{error}</p>
                <div className="w-full flex justify-center">
                    <button className="btn btn-primary my-2" onClick={isLogin ? handleLogin : handleSignup}>
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </div>
                <p className="cursor-pointer text-center" onClick={()=>setIsLogin(!isLogin)}>{isLogin ? "Don't have an account ? Click here to Sign Up" : "Already account exists? Click here to Login"}</p>
            </div>
        </div>
    </div>
}
export default Login