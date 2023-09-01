import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleMovie = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async (id) => {
      try {
        const response = await fetch(`/api/movies/${id}`);
        const movie = await response.json();

        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie(movieId);
  }, []);

  const clickHandler = () => {
    navigate(`/add-review/${movie.id}`);
  };

  return (
    <section>
      <section>
        <img src={movie.poster} id="singleMoviePoster" />
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

        <p>Rated {movie.rating}</p>
        <button onClick={clickHandler}>Add Review</button>
      </section>

      <section>
        <h1>{movie.title}</h1>
        <section id="movieInfo">
          <p>Director: {movie.director}</p>
          <p>Studio: {movie.studio}</p>
          <p>Language: {movie.language}</p>
        </section>

        <section id="reviewsSection">
          {movie.reviews ? (
            <div>
              {movie.reviews.map((review) => (
                <section key={review.id}>
                  <h3>{review.title}</h3>
                  <p>{review.content}</p>
                </section>
              ))}
            </div>
          ) : null}
        </section>
      </section>
    </section>
  );
};

export default SingleMovie;
