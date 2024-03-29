import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [changesHappened, setChangesHappened] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem(`token`);

  useEffect(() => {
    if (localStorage.getItem(`token`)) {
      const tokenArr = localStorage.getItem(`token`).split(`.`);
      const { id } = JSON.parse(atob(tokenArr[1]));

      checkIfAdmin(id);
      fetchUsers();
    }
  }, [changesHappened]);

  const checkIfAdmin = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`);
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

  const deleteUser = async (id) => {
    try {
      await fetch(`/api/users/${id}`, {
        method: `DELETE`,
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`,
        },
      });

      setChangesHappened(!changesHappened);
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = (id) => {
    navigate(`/profile/${id}`);
  };

  const deleteHandler = (id) => {
    deleteUser(id);
  };

  return (
    <section id="userPage" className="flex">
      <h1>Admin</h1>
      <button style={{ width: "100px", background: "black", color: "white"}}>Add Movie</button>
      <br></br>
      <h2>All Users</h2>
      {isAdmin ? (
        users.map((user) => (
          <section key={user.id} className="film-box">
            <section>
              <img
                src={user.avatar}
                className="userAvatar"
                style={{ width: "200px", height: "100%" }}
                onClick={() => clickHandler(user.id)}
              />
            </section>
            <section className="film-details">
              <h3>{user.username}</h3>
              <p>Email: {user.email}</p>
              <button onClick={() => deleteHandler(user.id)} style={{ background: "black", color: "white" }}>
                Delete User
              </button>
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
