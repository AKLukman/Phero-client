import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import profilePhoto from "../../../../images/profile.png";

const BuyerDetails = () => {
  const [jobs, setJobs] = useState({});
  const [buyer, setBuyer] = useState([]);
  const [loading, setLoading] = useState(false);
  const { jobsId } = useParams();
  const { user } = useAuth();
  const [value, setValue] = React.useState(0);
  const [ratings, setRatings] = useState(0);
  const [reviews, setReviews] = useState("");
  const [showReviews, setShowReviews] = useState([]);

  const userName = user.displayName;
  const userEmail = user.email;

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${jobsId}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, [jobs.email]);

  useEffect(() => {
    fetch("http://localhost:5000/buyerProfile")
      .then((res) => res.json())
      .then((data) => setBuyer(data));
  }, []);

  // Reviews and Ratings

  const handleReviews = (e) => {
    e.preventDefault();
    const ReviewData = {
      reviews,
      jobsId,
      ratings,
      userName,
      userEmail,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ReviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("You Review successfully");
          e.target.reset();
          // setSuccess("You bidded successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?jobsId=${jobsId}`)
      .then((res) => res.json())
      .then((data) => setShowReviews(data));
  }, [showReviews]);

  if (loading)
    return (
      <div style={{}} className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  return (
    <div>
      <Navigation></Navigation>
      {buyer
        .filter((bl) => bl.email === jobs.email)
        .map((bll) => (
          <div className="m-5 " style={{ textAlign: "left" }}>
            <h1 style={{ fontWeight: "700" }}>About The Buyer</h1>
            <br />
            <div className="d-flex  my-4">
              <div>
                <img
                  src={`data:image/jpeg;base64,${bll.profilePic}`}
                  style={{ width: 100, height: 100, borderRadius: 50 }}
                  alt=""
                />
              </div>
              <div className="ms-3 mt-2">
                <h4 style={{ marginTop: "20px" }}>{bll.name}</h4>
                {/* <p><Rating name="half-rating-read" defaultValue={5} readOnly /><h5>(10)</h5></p> */}
                <p>
                  {" "}
                  <Rating
                    name="simple-controlled"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    value={showReviews.ratings}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                      // showReviews(newValue);
                    }}
                  />
                  <h5
                    style={{ cursor: "pointer" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    Reviws&Ratings({showReviews.length})
                  </h5>
                </p>
              </div>
            </div>
            <div
              className="all-info w-100 border   border-1 p-5"
              style={{ backgroundColor: " #a9cce3 " }}
            >
              <div className="row mb-3 ">
                <div className="col-md-6 ">
                  <p>From</p>
                  <h3>{bll.country}</h3>
                </div>
                {/* <div className="col-md-6">
                                    <p>Demo Site Link</p>
                                    <a target="blank" href={sll.demosite}><h3>{sll.demosite}</h3></a>

                                </div> */}
              </div>
              <div className="row">
                {/* <div className="col-md-6">
                                    <p>Speciality</p>
                                    <h3>{sll.speciality}</h3>
                                </div> */}
                {/* <div className="col-md-6">
                                    <p>Member Since</p>
                                    <h3>FEB 2018</h3>
                                </div> */}
              </div>
              <div className="border border-1 my-5"></div>
              <div>
                <p>
                  I hold masters degree in engineering . I am a professional
                  graphic designer and have designed many creative websites. So
                  if you want a creative and professional website for your
                  business, you are at the right place.
                </p>

                <p>
                  Apart from web designing i offer different services like
                  designing infographics, Photoshop, writing articles and blog
                  posts. I always prefer customer's satisfaction.
                </p>
                {/* <button className="btn " style={{ backgroundColor: '#A3A9A4', marginTop: '5px' }} ><Link to={`/dashboard/updateSeller/${sll._id}`} style={{ textDecoration: 'none', color: 'white' }}>Update Profile</Link></button> */}
              </div>
            </div>
          </div>
        ))}
      <Footer></Footer>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Please give the review and ratings about buyer
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleReviews}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Ratings
                  </label>
                  <input
                    required
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Ratings 1 to 5"
                    onChange={(e) => setRatings(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Review
                  </label>
                  <textarea
                    type="text"
                    required
                    class="form-control"
                    onChange={(e) => setReviews(e.target.value)}
                    id="message-text"
                  ></textarea>
                  {/* <input class="form-control" id="exampleInputPassword1" /> */}
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade modal-dialog-scrollable"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                About buyer <b>{showReviews.length}</b> Reviews
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center">
              <div>
                {showReviews.map((commentt) => (
                  <div key={commentt._id} className="single-bid">
                    <div style={{ alignItems: "center" }} className="d-flex ">
                      <div>
                        {commentt.userPhoto ? (
                          <img
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadious: "50%",
                            }}
                            src={commentt.userPhoto}
                            alt=""
                            className="img-fluid me-1"
                          />
                        ) : (
                          <img
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadious: "50%",
                            }}
                            src={profilePhoto}
                            alt=""
                            className="img-fluid me-1"
                          />
                        )}
                      </div>
                      <div>
                        <h6>
                          {commentt.userName}
                          <span style={{ color: "gray" }}>
                            ({commentt.userEmail})
                          </span>
                        </h6>
                      </div>
                    </div>
                    <hr />

                    <p>{commentt.reviews}</p>
                    <Rating
                      name="simple-controlled"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      value={commentt.ratings}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                        setRatings(1);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDetails;
