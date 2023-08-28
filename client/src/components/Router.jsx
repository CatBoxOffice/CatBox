import React from "react"
import { Routes, Route } from "react-router-dom";
// import { useState } from 'react'
import Home from "./Home";
import Rubric from "./Rubric";
import AddReview from "./AddReview";
import Register from "./register/Register";
import AllMovies from "./movies/AllMovies";
import RegisterForm from "./register/RegisterForm";
import SingleMovie from "./movies/SingleMovie";
import Login from "./login/Login";
import LoginForm from "./login/LoginForm";
import FooterBar from "./bars/FooterBar";
import Navbar from "./bars/Navbar";
import LoginForm from "./login/LoginForm";


const Router = () => {
  // const [token, setToken] = useState(null)

  return (
    <div id="router">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="bars/FooterBar" element={<FooterBar />} />
        <Route path="bars/Navbar" element={<Navbar />} />
        <Route path="login/Login" element={<Login />} />
        <Route path="login/LoginForm" element={<LoginForm />} />
        <Route path="movies/AddMovie" element={<AddMovie />} />
        <Route path="movies/AllMovies" element={<AllMovies />} />
        <Route path="movies/SingleMovie" element={<SingleMovie />} />
        <Route path="register/Register" element={<Register />} />
        <Route path="register/RegisterForm" element={<RegisterForm />} />
        <Route path="addreview" element={<AddReview />} />
        <Route path="profile" element={<Profile />} />
        <Route path="rubric" element={<Rubric />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Router;