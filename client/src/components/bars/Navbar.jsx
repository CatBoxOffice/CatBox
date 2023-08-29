import { Link } from "react-router-dom";
// import TopGenres from "./"; <-- component doesn't exist yet.

function NavBar() {
  return (
    <div id="navbar">
      {/* ↓ We should add a logo here, if we're going to use one. ↓ */}
      <Link to="/">Home</Link>
      <Link to="/movies">All Movies</Link>
      {/* <Link to="/">TopGenres</Link>   <-- component doesn't exist yet*/}
      <Link to="/rubric">Rating Rubric</Link>
      {/* ↓ The following needs to appear to admins, and only admins ↓ */}
      <Link to="/users">All Users</Link>
      {/* ↓ The following need to alternate according to whether the user is 
        logged in. ↓ */}
      <Link to="/login">Log In</Link>
      <Link to="/profile">Profile Page</Link>
      {/* We need a search bar here. */}
    </div>
  );
}

export default NavBar;
