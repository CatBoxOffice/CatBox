
import Router from "./components/Router";
import NavBar from "./components/bars/Navbar";
import FooterBar from "./components/bars/FooterBar";

const App = () => {
  return (
    <>
    <NavBar />
      <h1>App</h1>
      <Router />
      {/* <NavBar /> */}
      <FooterBar />
    </>
  );
};

export default App;

