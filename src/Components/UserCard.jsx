import { defaultPhotoUrl } from "../utils/constants";

const UserCard = ({user}) => {
    return <div className="card bg-base-200 w-72 shadow-sm my-2 mx-2">
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
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Interest</button>
            <button className="btn btn-secondary">Ignore</button>
            </div>
        </div>
    </div>
}
export default UserCard;