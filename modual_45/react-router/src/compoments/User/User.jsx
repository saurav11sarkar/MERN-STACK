import { useLoaderData } from "react-router-dom";
import UserData from "./UserData";

const User = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Our users: {users.length}</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    users.map(user => <UserData key={user.id} user={user}></UserData>)
                }
            </div>
        </div>
    );
};

export default User;