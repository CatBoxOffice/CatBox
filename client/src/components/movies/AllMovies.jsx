// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies(1)
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
      console.log("Fetched movie data:", movieData)
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
              style={{ width: "270px", height: "345px" }}
            />

          </div>
          <div className="film-details">
            <h2>{movie.title}</h2>
            <p style={{ display: "inline" }}>
          Genre:{" "}
          {movie.Movies_Genres && movie.Movies_Genres.length > 0
            ? movie.Movies_Genres.map((genre, index) => (
                <div key={index} style={{ display: "inline" }}>
                  {genre.genres.name}
                  {index < movie.Movies_Genres.length - 1 ? ", " : ""}
                </div>
              ))
            : "N/A"}
        </p>
            <p>{movie.description}</p>
            <p>Rated {movie.rating}</p>
            <p>Director: {movie.director}</p>
            <p>Year: {movie.year}</p>
            <p>Studio: {movie.studio}</p>
            <p>Language: {movie.language}</p>
            {/* <button onClick={() => navigate(`/add-review/`)}>ADD REVIEW</button> */}
            <button className="add-review-button" onClick={() => navigate(`/add-review/`)}>
              ADD REVIEW
            </button>

          </div>
        </div>
      ))}
    </div >
  );
};

export default AllMovies;