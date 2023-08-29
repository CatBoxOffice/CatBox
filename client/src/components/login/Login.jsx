import { useState } from "react";
import LoginForm from "./LoginForm"

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  
  console.log(loginInfo)

  return (
    <>
      <LoginForm setLoginInfo={setLoginInfo} />
    </>
  )
}

export default Login;