import { Link } from "react-router-dom";
export default function Headers() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "20px" ,textDecoration:"none"}}>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/register" className="register-bar">
            Register
          </Link>
          <Link to="/login" className="register-bar">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
