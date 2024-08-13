import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";

const UserProfile = () => {
    const location = useLocation();
    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${location.state.userId}`)
            .then((response) => {setUserData(response.data)})
            .catch((err) => console.log(err))
    }, []);

    return (
        <div>{
            userData !== null || undefined ?
                <div>
                    <label>Name:</label>
                    <p>{userData.name}</p>
                    <label>Email:</label>
                    <p>{userData.email}</p>
                    <label>Phone:</label>
                    <p>{userData.phone}</p>
                </div>
            : null}
            <Link to='/userActivities' state={{userId: location.state.userId}}>Activities</Link>
        </div>
    );
}

export default UserProfile;