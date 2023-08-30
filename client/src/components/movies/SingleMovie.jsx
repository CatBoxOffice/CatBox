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
    <>
      <section>
        <img src={movie.poster} id="singleMoviePoster" />
      </section>
      <section></section>
    </>
  );
};

export default SingleMovie;
