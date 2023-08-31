// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [userReviews, setUserReviews] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData(id);
  }, [id]);

  const fetchUserData = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      console.log(data.reviews)
      setUserData(data);
      setUserReviews(data.reviews);
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  const handleEditReview = (reviewId) => {
    navigate(`api/users/${id}`);
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setUserReviews((prevReviews) =>
          prevReviews.filter((review) => review.id !== reviewId)
        );
      }
    } catch (error) {
      console.error("Error deleting review", error);
    }
  };

  return (
    <div>
      <h1>{userData.username}'s Profile</h1>
      <img src={userData.avatar} alt="ProfilePic" />

      <div>
        <h2>{userData.username}'s Information</h2>
        <p>Email: {userData.email}</p>
      </div>

      {/* Movie Reviews */}
      <div>
        <h2>{userData.username}'s Reviews:</h2>
        <ul>
    {userReviews.map((review) => (
      <li key={review.id}>
        <h3>{review.movie.title}</h3>
        <p>{review.content}</p>
        <button onClick={() => handleEditReview(review.id)}>Edit</button>
        <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
      </li>
    ))}
  </ul>
      </div>
    </div>
  );
};

export default Profile;
