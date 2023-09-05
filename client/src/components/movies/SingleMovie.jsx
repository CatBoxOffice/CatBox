import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import cheeseburger from "../images/Cheeseburger3.png";
import kittylitter from "../images/dirty_litter_box.png";

const SingleMovie = () => {
  const [movie, setMovie] = useState({});
  const [movieOverallGrade, setMovieOverallGrade] = useState(0);
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    const movieGrades = [];
    const fetchMovie = async (id) => {
      try {
        const response = await fetch(`/api/movies/${id}`);
        const movie = await response.json();

        const reviewsWithUsername = await Promise.all(
          movie.reviews.map(async (review) => {
            const userResponse = await fetch(`/api/users/${review.userId}`);
            const userData = await userResponse.json();
            return {
              ...review,
              username: userData.username,
              avatar: userData.avatar,
            };
          })
        );

        movie.reviews.map((review) => movieGrades.push(review.grade));
        calculateAverage(movieGrades);

        setMovie({ ...movie, reviews: reviewsWithUsername });
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie(movieId);
  }, [movieId]);

  const calculateAverage = (numArr) => {
    let total = 0;
    let count = 0;

    numArr.forEach((num) => {
      total += num;
      count++;
    });

    setMovieOverallGrade(total / count);
  };

  const clickHandler = () => {
    navigate(`/add-review/${movie.id}`, {
      state: { referringPage: window.location.pathname },
    });
  };

  return (
    <section id="singleMoviePage" className="flex">
      <section>
        <img src={movie.poster} id="singleMoviePoster" />

        <section>
          <span>Overall Rating: </span>
          <br />
          {movieOverallGrade >= 75 ? (
            <img
              src={cheeseburger}
              alt="Has Cheezburger"
              style={{ width: "75px", height: "50px" }}
            />
          ) : (
            <img
              src={kittylitter}
              alt="Cat Scat"
              style={{ width: "75px", height: "50px" }}
            />
          )}
        </section>

        <p style={{ display: "inline" }}>
          <br />
          Genre:{" "}
          {movie.Movies_Genres && movie.Movies_Genres.length > 0
            ? movie.Movies_Genres.map((genre, index) => (
                <span key={index} style={{ display: "inline" }}>
                  {genre.genres.name}
                  {index < movie.Movies_Genres.length - 1 ? ", " : ""}
                </span>
              ))
            : "N/A"}
        </p>
        <p className="movie-description">{movie.description}</p>
        <p>Rated {movie.rating}</p>
        <p>Director: {movie.director}</p>
        <p>Released {movie.year}</p>
        <p>Studio: {movie.studio}</p>
        <p>Language: {movie.language}</p>
        <button className="add-review-button" onClick={clickHandler}>
          ADD REVIEW
        </button>
      </section>

      <section>
        <section id="singleMovieTitle">
          <h2>{movie.title}</h2>
        </section>

        <section id="reviewsSection">
          {movie.reviews ? (
            <div>
              {movie.reviews.map((review) => (
                <section key={review.id} className="movieReview">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to={`/profile/${review.userId}`}>
                      <img
                        src={review.avatar} // Use the avatar from userData
                        id="navbarAvatar"
                        alt="User Avatar"
                        style={{
                          width: "40px",
                          height: "40px",
                          marginRight: "10px",
                        }}
                      />
                    </Link>
                    <h2>{review.username}</h2>
                  </div>
                  <h3>{review.title}</h3>
                  <h3>Grade: {review.grade}</h3>
                  {review.grade >= 75 ? (
                    <img
                      src={cheeseburger}
                      alt="Has Cheezburger"
                      style={{ width: "120px", height: "100px" }}
                    />
                  ) : (
                    <img
                      src={kittylitter}
                      alt="Cat Scat"
                      style={{ width: "120px", height: "100px" }}
                    />
                  )}
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
