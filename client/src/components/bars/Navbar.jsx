import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ loggedIn, setLoggedIn, changesHappened, setChangesHappened }) {
  const [userData, setUserData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const token = localStorage.getItem(`token`);

    if (token) {
      const tokenArr = token.split(`.`);
      const { id } = JSON.parse(atob(tokenArr[1]));
      setUserId(id);
      fetchUserData(id);
    }
  }, [loggedIn]);

  const fetchUserData = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      setUserData(data);
      setIsAdmin(data.isAdmin);
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  const signOutHandler = () => {
    localStorage.removeItem(`token`);
    setUserId(null);
    setLoggedIn(false);
    setIsAdmin(false);
    navigate(`/`);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchQuery.trim() !== "") {
      // Navigate to search results page with the search query as a parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const profileClickHandler = () => {
    navigate(`/profile/${userId}`)
    setChangesHappened(!changesHappened);
  }

  return (
    <>
      <div id="navbar">
        {/* Links to various pages */}
        <Link to={"/"}>
          <img
            src="https://github.com/CatBoxOffice/CatBox/blob/main/client/src/components/images/cinema_cat.png?raw=true"
            width="50"
          ></img>
        </Link>
        <Link to={"/movies"}>All Movies</Link>
        <Link to={"/rubric"}>Grading Rubric</Link>
        {/* Links visible to admins only */}
        {isAdmin ? <Link to={"/users"}>All Users</Link> : null}

        <br></br>
        <br></br>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {userId ? (
          <section className="flex" id="navbarProfile">
            <button onClick={signOutHandler} style={{ width: 50, fontSize: 8 }}>
              Sign Out
            </button>
            <img
              src={userData.avatar}
              id="navbarAvatar"
              onClick={profileClickHandler}
            />
          </section>
        ) : (
          <Link to={"/login"}>Log In</Link>
        )}
      </div>
      <div className="spacer"></div>
    </>
  );
}

export default NavBar;
