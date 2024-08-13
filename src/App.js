import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile/UserProfile";
import "./App.css";
import UserActivities from "./UserActivities/UserActivities";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter basename="/smartmate">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/userProfile" element={<UserProfile />}></Route>
          <Route path="/userActivities" element={<UserActivities />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
