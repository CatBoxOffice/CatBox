import { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({});
  console.log(registerInfo);

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
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    registerInfo.username ? attemptRegister() : null;
  }, [registerInfo]);

  return (
    <>
      <RegisterForm setRegisterInfo={setRegisterInfo} />
    </>
  );
};

export default Register;
