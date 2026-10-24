import axios from "axios"
import { useEffect } from "react"
import { baseUrl } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addConnections } from "../utils/connectionsSlice"
import ConnectionsCard from "./ConnectionsCard.jsx"

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector(store => store.connections)

    const fetchConnections = async ()=> {
        const connectionsData = await axios.get(baseUrl+"/user/connections", {withCredentials: true});
        dispatch(addConnections(connectionsData.data))
    }

    useEffect(()=>{
        fetchConnections()
    },[])

    if(!connections) return
    
    return !connections.length ? <div className="text-xl text-white py-2 px-2"> No Connections found</div>
     :<div>
        <div className="text-xl text-white text-center py-4">Connections</div>
        {
            connections.map(connection => <ConnectionsCard user={connection} key={connection.id}/>)
        }
    </div>
}
export default Connections