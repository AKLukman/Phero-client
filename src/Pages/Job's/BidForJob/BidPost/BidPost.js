import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import profilePhoto from "../../../../images/profile.png";
import "./BidPost.css";
import { SellRounded } from "@mui/icons-material";
import Clock from "../../../Clock/Clock";

const BidPost = ({ jobId }) => {
  const { user } = useAuth();
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState([]);
  const [success, setSuccess] = useState(false);
  const [seller, setSeller] = useState([]);
  const [commentStatus, setCommentStatus] = useState(false);
  const [status, setStatus] = useState(true);
  const userName = user.displayName;
  const userEmail = user.email;
  const userPhoto = user.photoURL;
  const handleComment = (e) => {
    e.preventDefault();
    const commentData = {
      comment,
      jobId,
      userName,
      userEmail,
      userPhoto,
      status: "pending",
    };

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("You bidded successfully");
          e.target.reset();
          setSuccess("You bidded successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/comments?jobId=${jobId}`)
      .then((res) => res.json())
      .then((data) => {
        setShowComments(data);
      });
  }, [showComments]);

  useEffect(() => {
    fetch(`http://localhost:5000/sellerProfile`)
      .then((res) => res.json())
      .then((data) => setSeller(data));
  }, []);

  const handleOption = (e, id) => {
    console.log(id);
    const updateStatus = e.target.value;
    let modifiedStatus = [];
    if (showComments._id === id) {
      showComments.status = e.target.value;
    }
    modifiedStatus.push(showComments);
    const modifiedStatusProducts = { id, updateStatus };
    fetch("http://localhost:5000/comments", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(modifiedStatusProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Order Status Change");
        }
      });
  };
  // console.log(commentStatus);

  return (
    <div>
      <div>
        {status ? (
          <form onSubmit={handleComment}>
            <h4>Bidding For Job: </h4>

            <textarea
              required
              className="form"
              type="text"
              placeholder="Write somthing to buyer.."
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              style={{ marginTop: "37.5px", marginLeft: "-85px" }}
              className="btn btn-primary btn-sm"
              type="submit"
            >
              Bid for Job
            </button>
          </form>
        ) : (
          <div>
            Already Approved: <Clock></Clock>
          </div>
        )}
        <div>
          <p>
            <b>{showComments.length}</b> people bided for this job
          </p>
          {showComments.map((commentt) => (
            <div
              key={commentt._id}
              className="single-bid"
              style={{ backgroundColor: " #e8daef " }}
            >
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
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/seller/${commentt._id}`}
                  >
                    <h6 style={{ color: "blue" }}>
                      {commentt.userName}
                      <span style={{ color: "blue", textDecoration: "none" }}>
                        ({commentt.userEmail})
                      </span>
                    </h6>
                  </Link>
                </div>
              </div>
              <hr />

              <h6>Bidding Message:</h6>
              <p>{commentt.comment}</p>
              <form
                size="md"
                defaultValue={showComments.status}
                onChange={(e) => {
                  handleOption(e, commentt._id);
                  setStatus(false);
                }}
                className="w-100"
              >
                <select>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  {/* <option value="Shipped">Shipped</option> */}
                </select>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BidPost;
