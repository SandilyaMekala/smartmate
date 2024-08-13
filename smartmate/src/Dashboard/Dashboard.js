import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [userId, setUserId] = useState()

    return (
        <div>
            <label>Enter User ID:</label>
            <input value={userId} onChange={(e) => setUserId(e.target.value)}/>
            <button><Link to='/userProfile' state={{userId: userId}}>Submit</Link></button>
        </div>
    );
}

export default Dashboard;