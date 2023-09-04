import Router from "./components/Router";
import NavBar from "./components/bars/Navbar";
import FooterBar from "./components/bars/FooterBar";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [changesHappened, setChangesHappened] = useState(false);

  return (
    <>
      <NavBar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        changesHappened={changesHappened}
        setChangesHappened={setChangesHappened}
      />
      <section id="pageSection">
        <Router
          setLoggedIn={setLoggedIn}
          changesHappened={changesHappened}
          setChangesHappened={setChangesHappened}
        />
      </section>
      <FooterBar />
    </>
  );
};

export default App;
