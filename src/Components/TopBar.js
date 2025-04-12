import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="Top-Bar">
      <h1> TopBar</h1>
      <Link to="/" className="register-nav">
        Go To Web Site</Link>
    </div>
  );
}
