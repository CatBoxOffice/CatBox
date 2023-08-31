// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [userReviews, setUserReviews] = useState([]);
  const [changesHappened, setChangesHappened] = useState(false);
  const [wantUpdate, setWantUpdate] = useState(false);
  const { id } = useParams();

  const token = localStorage.getItem(`token`);
  const tokenArr = token.split(`.`)
  const tokenId = JSON.parse(atob(tokenArr[1])).id;

  useEffect(() => {
    fetchUserData(id);
  }, [changesHappened]);

  const fetchUserData = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      setUserData(data);
      setUserReviews(data.reviews);
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  const updatePost = async (id, updateBody, token) => {
    await fetch(`/api/reviews/${id}`, {
      method: `PUT`,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updateBody),
    });

    setChangesHappened(!changesHappened);
  };

  const updateHandler = (event, id) => {
    event.preventDefault();
    const updateBody = {
      title: event.target.title.value,
      content: event.target.content.value,
    };

    updatePost(id, updateBody, token);
    setWantUpdate(false);
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
        {!wantUpdate && Number(id) === tokenId ? (
          <button onClick={() => setWantUpdate(true)}>Update Reviews</button>
        ) : null}
        {userReviews.map((review) => (
          <section key={review.id}>
            <h3>{review.movie.title}</h3>
            {!wantUpdate ? (
              <section>
                <h4>{review.title}</h4>
                <p>{review.content}</p>
              </section>
            ) : (
              <>
              <form onSubmit={() => updateHandler(event, review.id)}>
                <label>
                  Title:
                  <br />
                  <textarea
                    type="text"
                    name="title"
                    defaultValue={review.title}
                    />
                </label>
                <br />
                <label>
                  Content:
                  <br />
                  <textarea
                    type="text"
                    name="content"
                    style={{ height: 100 }}
                    defaultValue={review.content}
                    />
                </label>
                <br />
                <button>Update</button>
              </form>
              </>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Profile;
