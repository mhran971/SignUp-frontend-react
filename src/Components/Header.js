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
        <div style={{ display: "flex", gap: "20px" }}>
          <h6>Home</h6>
          <h6>About</h6>
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
