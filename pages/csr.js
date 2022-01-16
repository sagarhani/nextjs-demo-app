import { useState, useEffect } from "react";

export default function ClientSideRendering() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!users.length) return <p>No users data available</p>;

  return (
    <div>
      <h3>
        <u>Users List</u>
      </h3>
      <ul>
        {users.map(user => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
