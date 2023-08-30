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
  }

  return (
    <section>
      <section>
        <img src={movie.poster} id="singleMoviePoster" />
        <h2>{movie.title}</h2>
        <p>{movie.rating}</p>
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
                  {console.log(`REVIEW`, review)}
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
