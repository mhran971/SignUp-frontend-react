import { useEffect, useState } from "react";
import "./all.min.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const showUsers = users.map((user, index) => (
    <tr key={index}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td style={{ display:"flex" ,justifyContent:"space-around"}}>
        <i style={{ color:"orange" }} class="fa-duotone fa-solid fa-pen-to-square"></i>
        <h1> </h1>
        <i style={{ color:"red" }} class="fa-solid fa-xmark"></i>
      </td>
    </tr>
  ));

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{showUsers}</tbody>
      </table>
    </div>
  );
}
