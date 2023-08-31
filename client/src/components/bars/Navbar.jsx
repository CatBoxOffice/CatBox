// import { Link } from "react-router-dom";
// // import TopGenres from "./"; <-- component doesn't exist ye


// function NavBar() {
//   return (
//     <div id="navbar">
//       {/* ↓ We should add a logo here, if we're going to use one. ↓ */}
//       <Link to="/">Home</Link>
//       <Link to="/movies">All Movies</Link>
//       {/* <Link to="/">TopGenres</Link>   <-- component doesn't exist yet*/}
//       <Link to="/rubric">Rating Rubric</Link>
//       {/* ↓ The following needs to appear to admins, and only admins ↓ */}
//       <Link to="/users">All Users</Link>
//       {/* ↓ The following need to alternate according to whether the user is 
//         logged in. ↓ */}
//       <Link to="/login">Log In</Link>
//       <Link to="/profile">Profile Page</Link>
//       {/* We need a search bar here. */}
//     </div>
//   );
// }

// export default NavBar;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const navigate = useNavigate(); // Hook for navigation

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchQuery.trim() !== "") {
      // Navigate to search results page with the search query as a parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div id="navbar">
      {/* Links to various pages */}
      <Link to="/">Home</Link>
      <Link to="/movies">All Movies</Link>
      <Link to="/rubric">Rating Rubric</Link>
      {/* Links visible to admins only */}
      <Link to="/users">All Users</Link>
      {/* Conditional links based on user login status */}
      <Link to="/login">Log In</Link>
      <Link to="/profile">Profile Page</Link>

      {/* Search bar */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default NavBar;
