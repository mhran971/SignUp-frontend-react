import { Link } from "react-router-dom";
export default function Headers() {
  function handlogout(){
    window.localStorage.removeItem("email");
    window.location.pathname= "/";
  }


  
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "20px", textDecoration: "none" }}>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </div>
        {!window.localStorage.getItem("email") ? (
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/register" className="register-nav">
              Register
            </Link>
            <Link to="/login" className="register-nav">
              Login
            </Link>
          </div>
        ) : (
          <Link to="/logout" className="register-nav" onClick={handlogout}>
            Logout
          </Link>
        )}
      </nav>
    </div>
  );
}
