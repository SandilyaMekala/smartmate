import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
    const location = useLocation();
    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${location.state.userId}`)
            .then((response) => {setUserData(response.data)})
            .catch((err) => {console.log(err); setUserData(null)})
    }, [location.state.userId]);

    return (
        <div>{
            userData !== null || undefined ?
                <div className="user-profile">
                    <label>Name</label>
                    <p>{userData.name}</p>
                    <label>Email</label>
                    <p>{userData.email}</p>
                    <label>Phone</label>
                    <p>{userData.phone}</p>
                    <Link to='/userActivities' state={{userId: location.state.userId}}>Click to view User Activities</Link>
                </div>
            : <div style={{textAlign: 'center'}}>
                <p style={{fontSize: '24px'}}>No user found</p>
                <Link to='/'>Go back</Link>
            </div>
        }</div>
    );
}

export default UserProfile;