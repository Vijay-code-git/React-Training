import React, {useState, useEffect} from "react";
import axios from "axios";

const Dashboard = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
            setProfile(response.data)
        })
    }, [])
    return(
        <div>
            <h2>User Page</h2>
            {profile.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                </tr>
            ))}
            
        </div>
    )
}
export {Dashboard}