// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

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

      setMovies(movieData);
    } catch (error) {
      console.error(`Error fetching movies:`, error);
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <h3>Welcome User</h3>
      <h2>LIST OF RECENTLY RELEASED FILMS</h2>
      {movies.map((movie) => (
        <div className="film-box" key={movie.id}>
          <div className="film-thumbnail">
            <img
              src={movie.poster}
              alt={`Thumbnail for ${movie.title}`}
              style={{ width: "240px", height: "345px" }}
            />
          </div>
          <div className="film-details">
            <h2>{movie.title}</h2>
            <p>Genre: {movie.Movies_Genres.map((genre) => (
              <>{genre.genres.name} </>
            ))}</p>
            <p>{movie.description}</p>
            <p>Grade:</p>
            <p>Director: {movie.director}</p>
            <p>Year: {movie.year}</p>
            <p>Rated {movie.rating}</p>
            <p>Studio: {movie.studio}</p>
            <p>Language: {movie.language}</p>
            <button onClick={() => navigate(`/add-review/${movie.id}`)}>ADD REVIEW</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

