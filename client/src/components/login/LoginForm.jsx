import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ setLoginInfo }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    setLoginInfo({ username, password });
  };

  return (
    <>
      <form onSubmit={loginHandler}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <button>Login</button>
      </form>
      <Link to={`/register`} >Not a User? Register!</Link>
    </>
  );
};

export default LoginForm;
