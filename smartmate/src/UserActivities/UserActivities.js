import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";

const UserActivities = (props) => {
    const location = useLocation();
    const [userActivities, setUserActivities] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${location.state.userId}`)
            .then((response) => {setUserActivities(response.data)})
            .catch((err) => console.log(err))
    }, []);

    return (
        <div>{userActivities.map((i) => 
            <div>
                <label>Title</label>
                <p>{i.title}</p>
                <label>Post</label>
                <p>{i.body}</p>
            </div>
        )}</div>
    );
}

export default UserActivities;