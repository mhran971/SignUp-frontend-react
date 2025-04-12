import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => {
        return res.json();
      })
      .then((data) => setUsers(data));
  }, []);

  const showUsers = users.map((user) => (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
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
          </tr>
        </thead>

        <tbody>{showUsers}</tbody>
      </table>
    </div>
  );
}
