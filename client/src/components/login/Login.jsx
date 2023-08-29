import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import Navbar from "../bars/Navbar";
import FooterBar from "../bars/FooterBar";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.getItem(`token`) ? setLoggedIn(true) : null;
    setMessage("");
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
        } else {
          setMessage(result.message);
        }
      } catch (error) {
        alert(error);
      }
    };
    loginInfo.username ? attemptLogin() : null;
  }, [loginInfo]);

  const signOutHandler = () => {
    localStorage.removeItem(`token`);
    setLoginInfo({});
    setLoggedIn(false);
  };

  return (
    <>
      <Navbar />
      {message ? <p>{message}</p> : null}
      {loggedIn ? (
        <button onClick={signOutHandler}>Sign Out</button>
      ) : (
        <LoginForm setLoginInfo={setLoginInfo} />
      )}
      <FooterBar />
    </>
  );
};

export default Login;
