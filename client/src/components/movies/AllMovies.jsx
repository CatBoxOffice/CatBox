// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const token = localStorage.getItem(`token`);

  useEffect(() => {
    fetchMovies(1);
  }, []);

  // THE FETC PART

  const fetchMovies = async () => {
    try {
      const response = await fetch(`/api/movies`);
      const movieData = await response.json();

      movieData.sort((movie1, movie2) => {
        if (movie1.title < movie2.title) {
          return -1;
        } else if (movie1.title > movie2.title) {
          return 1;
        } else {
          return 0;
        }
      });

      setMovies(movieData);
    } catch (error) {
      console.error(`Error fetching movies:', error`);
    }
  };

  // This part is needed for the Navigate button ( TO ADD REVIEW!)

  const navigate = useNavigate();

  //The return has the MAP function in it and the details as well for the movies with the ADD REVIEW button

  return (
    <div>
      <h1>All Movies</h1>
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
            <p style={{ display: "inline" }}>
              <b>Genre:</b>{" "}
              {movie.Movies_Genres && movie.Movies_Genres.length > 0
                ? movie.Movies_Genres.map((genre, index) => (
                    <span key={index} style={{ display: "inline" }}>
                      {genre.genres.name}
                      {index < movie.Movies_Genres.length - 1 ? ", " : ""}
                    </span>
                  ))
                : "N/A"}
            </p>
            <p>{movie.description}</p>
            <p>Rated {movie.rating}</p>
            <p>Released {movie.year}</p>
            <p><b>Director:</b> {movie.director}</p>
            <p><b>Studio:</b> {movie.studio}</p>
            <p><b>Language:</b> {movie.language}</p>
            {/* <button onClick={() => navigate(`/add-review/`)}>ADD REVIEW</button> */}
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

export default AllMovies;
