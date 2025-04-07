import { Route, Routes } from "react-router-dom";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import Header from "./Components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <SignUp />
    </div>
  );
}
