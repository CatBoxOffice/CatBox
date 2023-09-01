import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [loginInfo, setLoginInfo] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setMessage("");
    loginInfo.username ? attemptLogin() : null;
  }, [loginInfo]);

  const attemptLogin = async () => {
    try {
      const response = await fetch(`/auth/signIn`, {
        method: `POST`,
        headers: {
          "Content-Type": `application/json`,
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      if (result.token) {
        localStorage.setItem(`token`, result.token);
        setLoggedIn(true);
        navigate(`/`);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {message ? <p>{message}</p> : null}
      <LoginForm setLoginInfo={setLoginInfo} />
    </>
  );
};

export default Login;
