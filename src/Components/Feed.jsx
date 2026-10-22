import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../utils/constants";
import UserCard from "./UserCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addFeedUsers } from "../utils/feedSlice.js";

const Feed = () => {
    const [feedUsers, setFeedUsers] = useState([]);
    const dispatch = useDispatch();
    const feedDataFromRedux = useSelector(store => store.feed);

    const fetchFeedUsers = async()=>{
        try{
            const feedData = await axios.get(baseUrl+"/feed",{withCredentials: true});
            setFeedUsers(feedData.data);
            dispatch(addFeedUsers(feedData.data));
        }
        catch(error){
            // error
        }
    }

    useEffect(()=>{
        if(feedDataFromRedux){
            setFeedUsers(feedDataFromRedux);
        }
        else{
            fetchFeedUsers();
        }
    },[])

    return <div className="flex flex-wrap">
        {
            feedUsers.map(user => <UserCard user={user} key={user._id}/>)
        }
    </div>
}
export default Feed;