import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home";
import AllMovies from "./movies/AllMovies";
// import TopGenres from "./"; <-- component doesn't exist yet.
import RatingRubric from "./Rubric";
import AllUsers from "./Users";
import LogIn from "./login/Login";
import Profile from "./Profile";

function NavBar() {
  return (
    <div>
      <div id="navbar">
        {/* ↓ We should add a logo here, if we're going to use one. ↓ */}
        <Link to="/">Home</Link>
        <Link to="/">All Movies</Link>
        {/* <Link to="/">TopGenres</Link>   <-- component doesn't exist yet*/}
        <Link to="/">Rating Rubric</Link>
        {/* ↓ The following needs to appear to admins, and only admins ↓ */}
        <Link to="/">All Users</Link>
        {/* ↓ The following need to alternate according to whether the user is 
        logged in. ↓ */}
        <Link to="/">Log In</Link>
        <Link to="/">Profile Page</Link>
        {/* We need a search bar here. */}
      </div>
      <div id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<AllMovies />} /> */}
          <Route path="/" element={<AllMovies />}/>
          {/* <Route path="/" element={<TopGenres />} />    <-- component doesn't exist yet */}
          <Route path="/" element={<RatingRubric />} />
          {/* ↓ The following needs to appear to admins, and only admins ↓ */}
          <Route path="/" element={<AllUsers />} />        
          {/* ↓ The following need to alternate according to whether the user is 
          logged in. ↓ */}
          <Route path="/" element={<LogIn />} />
          <Route path="/" element={<Profile />} />
          {/* We need a search bar here. */}
        </Routes>
      </div>
    </div>
  );
}

export default NavBar;
