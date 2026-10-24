import axios from "axios";
import { baseUrl, defaultPhotoUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeedUsers } from "../utils/feedSlice";

const UserCard = ({user}) => {
    const feed = useSelector(store => store.feed);
    const dispatch = useDispatch();

    const handleSendRequest = async(id, type) => {
        try{
            console.log(id, type)
            await axios.post(baseUrl+"/requests/send/"+type+"/"+id,{},{withCredentials:true});
            const updatedFeed = feed.filter(user => user._id !== id);
            console.log(updatedFeed)
            dispatch(addFeedUsers(updatedFeed))
        }
        catch (err){
            console.log(err)
            //
        }
    }

    return <div className="card bg-base-200 w-72 shadow-sm my-2 mx-auto">
        <figure className="w-64 h-64 mx-auto">
            <img
            src={user.photoUrl?user.photoUrl: defaultPhotoUrl}
            alt="profile"/>
        </figure>
        <div className="card-body">
            <h2 className="card-title">{user.firstName + (user.lastName ? " " + user.lastName : "")}</h2>
            <p>{user.age ? "Age: " +user.age : ""}</p>
            <p>{user.gender ? "Gender: "+user.gender: ""}</p>
            <p>{user.skills ? "Skills: " +user.skills : ""}</p>
            <div className="card-actions mx-auto">
            <button className="btn btn-primary" onClick={()=>handleSendRequest(user._id, "interested")}>Interest</button>
            <button className="btn btn-secondary" onClick={()=>handleSendRequest(user._id, "ignored")}>Ignore</button>
            </div>
        </div>
    </div>
}
export default UserCard;