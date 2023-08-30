import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async (id) => {
      try {
        const response = await fetch(`/api/movies/${id}`);
        const result = await response.json();

        setMovie(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie(movieId);
  }, []);

  console.log(movie);

  return (
    <section>
      <section>
        <img src={movie.poster} id="singleMoviePoster" />
        <h2>{movie.title}</h2>
        <p>{movie.rating}</p>
        <button>Add Review</button>
      </section>

      <section>
        <h1>{movie.title}</h1>
        <section id="movieInfo">
          <p>Director: {movie.director}</p>
          <p>Studio: {movie.studio}</p>
          <p>Language: {movie.language}</p>
        </section>
          
        <section>
          
        </section>

      </section>
    </section>
  );
};

export default SingleMovie;
