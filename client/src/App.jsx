import Router from "./components/Router";
import NavBar from "./components/bars/Navbar";
import FooterBar from "./components/bars/FooterBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Router />
      <FooterBar />
    </>
  );
};

export default App;
