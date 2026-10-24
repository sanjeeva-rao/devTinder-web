import axios from "axios";
import { baseUrl } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConnectionsCard from "./ConnectionsCard";
import { addRequests } from "../utils/RequestSlice";

const Requests = () => {
    const requests = useSelector(store => store.requests);
    const dispatch = useDispatch()
    const fetchRequests = async () => {
        const requestsData = await axios.get(baseUrl+"/user/allRequests", {withCredentials: true})
        dispatch(addRequests(requestsData.data))
    }

    useEffect(()=>{
        fetchRequests()
    },[])
    
    if(!requests) return
    
    return !requests.length ? <div className="text-xl text-white py-2 px-2"> No Requests found</div>
     :<div>
        <div className="text-xl text-white text-center py-4">Requests</div>
        {
            requests.map(request => <ConnectionsCard user={request} key={request.id} showButtons={true}/>)
        }
    </div>
}
export default Requests;