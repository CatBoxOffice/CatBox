import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
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
      <Link to="/"><img src="https://github.com/CatBoxOffice/CatBox/blob/main/client/src/components/images/cinema_cat.png?raw=true" width="50"></img></Link>
      <Link to="/movies">All Movies</Link>
      <Link to="/rubric">Rating Rubric</Link>
      {/* Links visible to admins only */}
      <Link to="/users">All Users</Link>
      {/* Conditional links based on user login status */}
      <Link to="/login">Log In</Link>
      <Link to="/profile">Profile Page</Link>

<br></br><br></br>
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
