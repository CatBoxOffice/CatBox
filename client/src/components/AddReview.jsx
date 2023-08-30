import React from "react";
import { useState } from 'react';
// import Home from "./Home";

const AddReview = () => {
  const [reviewData, setReviewData] = useState({
    title: '',
    content: '',
    user: '',
    // rating: '', <-- Not currently represented in the schema. 
    movie: '',
    Review_Tags: '',
  });

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
      const response = await fetch('./server/api/addReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        // Handle successful submission
        console.log('Review added successfully');
        setReviewData({
          title: '',
          description: '',
          // rating: '', <-- Not currently represented in the schema. 
          user: '',
          movie: '',
          content: '',
        });

        // Redirect to the original movie page after successful submission of a review for that movie.
        movie.push('./movies/:movieId');
      } else {
        console.error('Failed to add review');
      }
    } catch (error) {
      console.error('Error adding review', error);
    }
  };

  return (
    <div>
      <h2>Add Review</h2>
      <form onSubmit={handleSubmit}>
        <label>Movie:</label>
        <input
          type="text"
          name="title"
          value={reviewData.title}
          onChange={handleChange}
          required
        />
        <label>Review body:</label>
        <input
          type="text"
          name="content"
          value={reviewData.content}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default AddReview;