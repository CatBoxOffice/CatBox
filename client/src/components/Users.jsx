import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`/api/users`);
      const result = await response.json();

      result.sort((user1, user2) => {
        if (user1.username < user2.username) {
          return -1;
        } else if (user1.username > user2.username) {
          return 1;
        } else {
          return 0;
        }
      });

      setUsers(result);
    };

    fetchUsers();
  }, []);

  const clickHandler = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <section id="userPage" className="flex">
      <h1>Users</h1>
      {users.map((user) => (
        <section
          key={user.id}
          className="flex"
          onClick={() => clickHandler(user.id)}
        >
          <section>
            <img src={user.avatar} className="userAvatar" />
          </section>
          <section>
            <h3>{user.username}</h3>
            <p>Email: {user.email}</p>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Users;
