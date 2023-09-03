// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Home from "./Home";

const AddReview = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieTitle = queryParams.get("title");
  const navigate = useNavigate();
  const referringPage = location.state && location.state.referringPage;

  const [reviewData, setReviewData] = useState({
    title: "",
    content: "",
    user: "",
    // rating: '', <-- Not currently represented in the schema.
    movie: "",
    Review_Tags: "",
  });

  useEffect(() => {}, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReviewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("jwtToken");

    if (!token) {
      console.error("JWT token is missing.");
      return;
    }
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(reviewData),
      });

      console.log("Server Response:", response);

      if (response.ok) {
        // Handle successful submission
        console.log("Review added successfully");
        setReviewData({
          title: "",
          description: "",
          // rating: '', <-- Not currently represented in the schema.
          user: "",
          movie: "",
          content: "",
        });

        // Redirect to the original movie page after successful submission of a review for that movie.
        if (referringPage) {
          navigate(referringPage);
        } else {
          navigate("/"); // If referringPage is not available, go back to the home page
        }
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
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};

export default AddReview;
