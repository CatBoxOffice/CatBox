// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cheeseburger from "./images/Cheeseburger3.png";
import kittylitter from "./images/dirty_litter_box.png";

const Profile = ({ changesHappened, setChangesHappened }) => {
  const [userData, setUserData] = useState({});
  const [userReviews, setUserReviews] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [wantUpdate, setWantUpdate] = useState(false);
  const { id } = useParams();

  const token = localStorage.getItem(`token`);
  const tokenArr = token.split(`.`);
  const tokenId = JSON.parse(atob(tokenArr[1])).id;

  useEffect(() => {
    if (token) {
      checkIfAdmin(tokenId);
    }
    fetchUserData(id);
  }, [changesHappened]);

  const checkIfAdmin = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`);
      const result = await response.json();

      setIsAdmin(result.isAdmin);
    } catch (error) {
      console.log(error);
    }
  };

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

  const updatePost = async (id, updateBody) => {
    try {
      await fetch(`/api/reviews/${id}`, {
        method: `PUT`,
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateBody),
      });

      setChangesHappened(!changesHappened);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      await fetch(`/api/reviews/${id}`, {
        method: `DELETE`,
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`,
        },
      });

      setChangesHappened(!changesHappened);
    } catch (error) {
      console.log(error);
    }
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

  const deleteHandler = (id) => {
    deletePost(id);
  };

  return (
    <div id="profilePage" className="flex">
      <div>
        <img
          src={userData.avatar}
          alt="ProfilePic"
          style={{ width: "400px", height: "auto" }}
        />

        <h2>{userData.username}</h2>
        <p>Email: {userData.email}</p>
      </div>

      {/* Movie Reviews */}
      <div>
        <div>
          <h2>{userData.username}'s Reviews:</h2>

          {Number(id) === tokenId ? (
            (!wantUpdate && Number(id) === tokenId) || isAdmin ? (
              <button onClick={() => setWantUpdate(true)}>
                Update Reviews
              </button>
            ) : (
              <button onClick={() => setWantUpdate(false)}>Back</button>
            )
          ) : null}
        </div>

        <section>
          {userReviews.map((review) => (
            <section key={review.id}>
              <span>
                <b style={{ fontSize: "25px" }}>{review.movie.title}</b>
              </span>
              <span>
                {review.grade >= 75 ? (
                  <img
                    src={cheeseburger}
                    alt="Has Cheezburger"
                    style={{ height: "30px" }}
                  />
                ) : (
                  <img
                    src={kittylitter}
                    alt="Cat Scat"
                    style={{ height: "30px" }}
                  />
                )}
              </span>

              {!wantUpdate ? (
                <section>
                  <h4>Grade: {review.grade}</h4>
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
                  <button onClick={() => deleteHandler(review.id)}>
                    Delete Post
                  </button>
                </>
              )}
            </section>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Profile;
