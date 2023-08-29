import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});

  console.log(loginInfo);
  useEffect(() => {
    const attemptLogin = async () => {
      try {
        const response = await fetch(`/auth/signIn`, {
          method: `POST`,
          headers: {
            "Content-Type": `application/json`,
          },
          body: JSON.stringify(loginInfo)
        });

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    loginInfo.username ? attemptLogin() : null;
  }, [loginInfo]);

  return (
    <>
      <LoginForm setLoginInfo={setLoginInfo} />
    </>
  );
};

export default Login;
