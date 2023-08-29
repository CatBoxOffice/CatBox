import { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({})
  console.log(registerInfo)

  useEffect(() => {
    
  }, [registerInfo])

  return (
    <>
      <RegisterForm setRegisterInfo={setRegisterInfo} />
    </>
  );
};

export default Register;
