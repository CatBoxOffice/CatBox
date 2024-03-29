// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ loggedIn }) => {
  const [userData, setUserData] = useState({});
  const [movies, setMovies] = useState([]);
  const token = localStorage.getItem(`token`);

  useEffect(() => {
    fetchMovies();
    if (token) {
      const tokenArr = token.split(`.`);
      const tokenId = JSON.parse(atob(tokenArr[1])).id;
      fetchUserData(tokenId);
    }
  }, [loggedIn]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`/api/movies/`);
      const movieData = await response.json();

      movieData.sort((movie1, movie2) => {
        if (movie1.year < movie2.year) {
          return 1;
        } else if (movie1.year > movie2.year) {
          return -1;
        } else {
          return 0;
        }
      });

      const filteredMovies = movieData.filter((movie) => movie.year === 2023);

      setMovies(filteredMovies);
    } catch (error) {
      console.error(`Error fetching movies:`, error);
    }
  };

  const fetchUserData = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  // This part is needed for the Navigate button ( TO ADD REVIEW!)
  const navigate = useNavigate();

  //   const navigate = useNavigate();
  // const clickHandler = () => {
  //   navigate(`${movie.id}`)
  // }

  return (
    <div>
      {token ? <h1>Welcome {userData.username}!</h1> : <h1>Welcome</h1>}

      <h3>RECENT RELEASES</h3>
      {movies.map((movie) => (
        <div className="film-box" key={movie.id}>
          <div className="film-thumbnail">
            <img
              src={movie.poster}
              alt={`Thumbnail for ${movie.title}`}
              style={{ width: "240px", height: "345px" }}
              onClick={() => navigate(`/movies/${movie.id}`)}
            />
          </div>
          <div className="film-details">
            <h2>{movie.title}</h2>
            <p>
              <b>Genre:</b>{" "}
              {movie.Movies_Genres.map((genre) => (
                <span key={genre.genres.name}>{genre.genres.name} </span>
              ))}
            </p>
            <p>{movie.description}</p>
            <p>Rated {movie.rating}</p>
            <p>Released {movie.year}</p>
            <p>
              <b>Director:</b> {movie.director}
            </p>
            <p>
              <b>Studio:</b> {movie.studio}
            </p>
            <p>
              <b>Language:</b> {movie.language}
            </p>
            {token ? (
              <button
                className="add-review-button"
                onClick={() =>
                  navigate(
                    `/add-review/${movie.id}?title=${encodeURIComponent(
                      movie.title
                    )}`
                  )
                }
              >
                ADD REVIEW
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
