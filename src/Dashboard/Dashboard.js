import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    const [userId, setUserId] = useState()

    return (
        <div className="dashboard">
            <label>Enter User ID: </label>
            <input value={userId} onChange={(e) => setUserId(e.target.value)}/><br />
            <button><Link to='/userProfile' state={{userId: userId}}>Submit</Link></button><br />
        </div>
    );
}

export default Dashboard;