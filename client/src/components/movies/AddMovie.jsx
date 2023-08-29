import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const AddMovie = () => {
  // const history = useHistory();
  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
    year: '',
    rating: '',
    director: '',
    studio: '',
    language: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('./server/api/addMovie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData),
      });

      if (response.ok) {
        // Handle successful submission
        console.log('Movie added successfully');
        setMovieData({
          title: '',
          description: '',
          year: '',
          rating: '',
          director: '',
          studio: '',
          language: '',
        });

        // Redirect to AllMovies after successful submission
        history.push('./movies/AllMovies');
      } else {
        console.error('Failed to add movie');
      }
    } catch (error) {
      console.error('Error adding movie', error);
    }
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={movieData.title}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;

