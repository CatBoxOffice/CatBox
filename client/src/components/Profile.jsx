// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData(1)
    console.log(userData);
  }, []);

  const fetchUserData = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      // return data;
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data");
    }
  };
  
console.log(userData.avatar)
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
        <ul></ul>
      </div>
    </div>
  );
};

export default Profile;
