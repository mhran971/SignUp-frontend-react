import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="Side-Bar">
      <h1>  SideBar</h1>
      <Link to="/Dashboard/users" className="register-nav">
       Users
      </Link>
    </div>
  );
}
