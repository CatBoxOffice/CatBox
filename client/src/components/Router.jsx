import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Rubric from "./Rubric";
import AddReview from "./AddReview";
import Register from "./register/Register";
import AllMovies from "./movies/AllMovies";
import AddMovie from "./movies/AddMovie";
import Profile from "./Profile";
import Users from "./Users";
import SingleMovie from "./movies/SingleMovie";
import Login from "./login/Login";
import SearchResults from "./bars/SearchResults";

const Router = ({ setLoggedIn, changesHappened, setChangesHappened }) => {
  return (
    <div id="router">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/movies" element={<AllMovies />} />
        <Route path="/movies/:movieId" element={<SingleMovie />} />
        <Route
          path="/register"
          element={<Register setLoggedIn={setLoggedIn} />}
        />
        <Route path="/add-review/:movieId" element={<AddReview />} />
        <Route
          path="/profile/:id"
          element={
            <Profile
              changesHappened={changesHappened}
              setChangesHappened={setChangesHappened}
            />
          }
        />
        <Route path="/rubric" element={<Rubric />} />
        <Route path="/users" element={<Users />} />
        {/*this is a new line */}
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
};

export default Router;
