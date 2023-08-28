import React from "react"
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./Home";
import Rubric from "./Rubric";
import AddReview from "./AddReview";
import Register from "./register/Register";
import AllMovies from "./movies/AllMovies";
import SingleMovie from "./movies/SingleMovie";
import Login from "./login/Login";


const Router = () => {
  const [token, setToken] = useState(null)

  return (
    <div id="router">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/movies" element={<AllMovies />} />
        <Route path="/movies/:movieId" element={<SingleMovie />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rubric" element={<Rubric />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <p>hello</p>
    </div>
  );
};

export default Router;