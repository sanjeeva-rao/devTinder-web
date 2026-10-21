import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Profile = () => {
    const user = useSelector(store => store.user);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [skills, setSkills] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [error,setError] = useState("")
    const dispatch = useDispatch();
    const [showStatusMessage, setShowStatusMessage] = useState(false);

    useEffect(()=>{
        if(user){
            setFirstName(user.firstName || "");
            setLastName(user.lastName || "");
            setAge(user.age || "");
            setSkills(user.skills || "");
            setGender(user.gender || "");
            setPhotoUrl(user.photoUrl || "");
        }
    },[user])

    const saveUserDetials = async() => {
       try{
            setError("")
            const updatedUser = await axios.patch(baseUrl+"/profile/edit", 
                {firstName,lastName,age,skills,photoUrl,gender},
                {withCredentials: true}
            )
            dispatch(addUser(updatedUser.data));
            setShowStatusMessage(true);
            setTimeout(()=>{
                setShowStatusMessage(false)
            },2000)

       }
       catch(error){
        setError(error?.response?.data || "Something went wrong")
       }
    }
    return <div className="card card-dash bg-base-300 w-96 mx-auto my-6">
        <div className="card-body">
            <h2 className="card-title">Edit Profile</h2>
            <div className="card-actions">
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">First Name</legend>
                    <input type="text" className="input" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </fieldset>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend" >Last Name</legend>
                    <input type="text" className="input" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </fieldset>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Age</legend>
                    <input type="text" className="input" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </fieldset>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Gender</legend>
                    <input type="text" className="input" value={gender} onChange={(e)=>setGender(e.target.value)}/>
                </fieldset>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Photo Url</legend>
                    <input type="text" className="input" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)}/>
                </fieldset>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Skills</legend>
                    <input type="text" className="input" value={skills} onChange={(e)=>setSkills(e.target.value)}/>
                </fieldset>
                <p className="text-red-500">{error}</p>
                <button className="btn btn-primary flex justify-center items-center mx-auto my-2" onClick={saveUserDetials}>Save</button>
            </div>
        </div>
        {
            showStatusMessage && <div className="toast toast-end">
                <div className="alert alert-success">
                    <span>Profile Updatd successfully</span>
                </div>
            </div>
        }
    </div>
}

export default Profile;