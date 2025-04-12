import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import  "./Components/Dashboard.css";
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Components/Dashboard";

export default function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}
