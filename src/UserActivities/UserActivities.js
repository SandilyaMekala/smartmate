import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import "./UserActivities.css";

const UserActivities = () => {
    const location = useLocation();
    const [userActivities, setUserActivities] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${location.state.userId}`)
            .then((response) => {setUserActivities(response.data)})
            .catch((err) => console.log(err))
    }, [location.state.userId]);

    return (
        <div className="user-activities">{userActivities.map((i) => 
            <div key={i.id}>
                <label>Title</label>
                <p>{i.title}</p>
                <label>Post</label>
                <p>{i.body}</p>
            </div>
        )}</div>
    );
}

export default UserActivities;