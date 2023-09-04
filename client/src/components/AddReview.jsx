// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import Home from "./Home";

const AddReview = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieTitle = queryParams.get("title");
  const navigate = useNavigate();
  const { movieId } = useParams();
  const token = localStorage.getItem("token");
  const tokenArr = token.split(`.`);

  const [reviewData, setReviewData] = useState({
    title: "",
    content: "",
    grade: 0,
    userId: JSON.parse(atob(tokenArr[1])).id,
    movieId: Number(movieId),
    // Review_Tags: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReviewData((prevData) => ({
      ...prevData,
      [name]: isNaN(+value) ? value : Number(value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!token) {
        console.error("JWT token is missing.");
        return;
      }

      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reviewData),
      });

      const result = await response.json();

      console.log("Server Response:", response);

      console.log(result.id);

      if (result.id) {
        // Handle successful submission
        console.log("Review added successfully");

        // Redirect to the original movie page after successful submission of a review for that movie.
        navigate(`/movies/${movieId}`)
      } else {
        console.error("Failed to add review");
      }
    } catch (error) {
      console.error("Error adding review", error);
    }
  };

  return (
    <div>
      <h2>Add Review for {movieTitle}</h2>
      <form onSubmit={handleSubmit}>
        <label>Review Title:</label>
        <input
          type="text"
          name="title"
          value={reviewData.title}
          onChange={handleChange}
          required
          placeholder="Tell us your initial thought"
        />
        <br />
        <label>Review Body:</label>
        <textarea
          name="content"
          value={reviewData.content}
          onChange={handleChange}
          required
          rows="4"
          cols="40"
          placeholder="Expand on your thoughts"
        ></textarea>
        <br />
        <label>Grade:</label>
        <input
          type="number"
          name="grade"
          value={reviewData.grade}
          onChange={handleChange}
          required
          placeholder="grade from 0-100"
        />
        <br />
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};

export default AddReview;
