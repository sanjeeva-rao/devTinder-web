import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../utils/constants";
import UserCard from "./UserCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addFeedUsers } from "../utils/feedSlice.js";

const Feed = () => {
    const dispatch = useDispatch();
    const feedUsers = useSelector(store => store.feed);

    const fetchFeedUsers = async()=>{
        try{
            const feedData = await axios.get(baseUrl+"/feed",{withCredentials: true});
            dispatch(addFeedUsers(feedData.data));
        }
        catch(error){
            // error
        }
    }

    useEffect(()=>{
        fetchFeedUsers()
    },[])

    if(!feedUsers) return <div></div>

    return !feedUsers.length ? <div>No New Users</div>
    : <UserCard user={feedUsers[0]}/>
}
export default Feed;