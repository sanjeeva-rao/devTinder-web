import axios from "axios";
import { baseUrl, defaultPhotoUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const ConnectionsCard = ({user, showButtons}) => {
    const requests = useSelector(store => store.requests);
    const dispatch = useDispatch()

    const handleRquests = async(type,connectionId) => {
        await axios.post(baseUrl+"/requests/review/"+type+"/"+connectionId, {}, {withCredentials: true});
        // Remove from requests
        const updatedData = requests.filter(req => req.connectionId !== connectionId);
        dispatch(addRequests(updatedData))
    }

    return <div className="card card-side bg-base-200 shadow-sm w-[60%] my-2 mx-auto">
        <figure className="w-36 h-36">
            <img
            src={user.photoUrl || defaultPhotoUrl}
            alt="Movie" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{user.firstName + " " + (user.lastName ? user.lastName : "")}</h2>
            {user.age && <div>Age: {user.age}</div>}
            {user.skills && <div>Skills: {user.skills}</div>}
            {user.gender && <div>Gender: {user.Gender}</div>}
            {showButtons &&
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={()=>{handleRquests("accepted", user.connectionId)}}>Accept</button>
                    <button className="btn btn-secondary" onClick={()=>{handleRquests("rejected", user.connectionId)}}>Reject</button>
                </div>
            }
        </div>
    </div>
}
export default ConnectionsCard;