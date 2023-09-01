import Router from "./components/Router";
import NavBar from "./components/bars/Navbar";
import FooterBar from "./components/bars/FooterBar";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Router setLoggedIn={setLoggedIn} />
      <FooterBar />
    </>
  );
};

export default App;
