import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = ({ setRegisterInfo }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();
    password === confirmPassword
      ? setRegisterInfo({ username, password })
      : setMessage(`Passwords do not match`);
  };

  return (
    <>
      {message ? <p>{message}</p> : null}
      <form onSubmit={registerHandler}>
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
        <label>
          Confirm Password:{" "}
          <input
            type="password"
            name="confirmPassword"
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <button>Register</button>
      </form>
      <Link to={`/login`}>Already a User? Log In!</Link>
    </>
  );
};

export default RegisterForm;
