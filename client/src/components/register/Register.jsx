import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const Register = ({ setLoggedIn }) => {
  const [registerInfo, setRegisterInfo] = useState({});
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const attemptRegister = async () => {
      try {
        const response = await fetch(`/auth/register`, {
          method: `POST`,
          headers: {
            "Content-Type": `application/json`,
          },
          body: JSON.stringify(registerInfo),
        });

        const result = await response.json();

        localStorage.setItem(`token`, result.token);
        setLoggedIn(true);
        navigate(`/`);
      } catch (error) {
        console.log(error);
        setMessage(`Could not register`);
      }
    };

    registerInfo.username ? attemptRegister() : null;
  }, [registerInfo]);

  return (
    <>
      {message ? <p>{message}</p> : null}
      <RegisterForm setRegisterInfo={setRegisterInfo} />
    </>
  );
};

export default Register;
