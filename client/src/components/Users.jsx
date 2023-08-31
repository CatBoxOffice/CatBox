import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(`token`)) {
      const tokenArr = localStorage.getItem(`token`).split(`.`);
      const { id } = JSON.parse(atob(tokenArr[1]));

      checkIfAdmin(id);
      fetchUsers();
    }
  }, []);

  const checkIfAdmin = async (id) => {
    try {
      const response = await fetch(`api/users/${id}`);
      const result = await response.json();

      setIsAdmin(result.isAdmin);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <section id="userPage" className="flex">
      <h1>Users</h1>
      {isAdmin ? (
        users.map((user) => (
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
        ))
      ) : (
        <p>You do not have Access</p>
      )}
    </section>
  );
};

export default Users;
