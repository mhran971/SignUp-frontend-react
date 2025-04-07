import { Route, Routes } from "react-router-dom";
import  SignUp  from "./SignUp";
import Login from "./Login";
import Header from "./Components/Header";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

      </Routes>
      
    </div>
  );
}
