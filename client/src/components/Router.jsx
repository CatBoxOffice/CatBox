// import React from "react"
import { Routes, Route } from "react-router-dom";
// import { useState } from 'react'
import Home from "./Home";
import Rubric from "./Rubric";
import AddReview from "./AddReview";
import Register from "./register/Register";
import AllMovies from "./movies/AllMovies";
import AddMovie from "./movies/AddMovie";
import Profile from "./Profile";
import Users from "./Users";
import SingleMovie from "./movies/SingleMovie";
import Login from "./login/Login";
import SearchResults from "./bars/SearchResults";


const Router = () => {
  // const [token, setToken] = useState(null)

  return (
    <div id="router">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/movies" element={<AllMovies />} />
        <Route path="/movies/:movieId" element={<SingleMovie />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-review/:movieId" element={<AddReview />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/rubric" element={<Rubric />} />
        <Route path="/users" element={<Users />} />
        {/*this is a new line */}
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
};

export default Router;