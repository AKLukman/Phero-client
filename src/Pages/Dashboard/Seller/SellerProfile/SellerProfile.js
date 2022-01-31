import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import ChartTwo from "../ChartTwo/ChartTwo";
import "./SellerProfile.css";

const SellerProfile = () => {
  const [seller, setBuyer] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/sellerProfile")
      .then((res) => res.json())
      .then((data) => {
        setBuyer(data);
        console.log(data);
        setLoading(false);
      });
  }, [seller.email]);

  return (
    <div>
      {/* <h1>{seller.map(sel)=><h2></h2>}</h1> */}
      {seller
        .filter((sl) => sl.email === user.email)
        .map((sll) => (
          <div key={user.email} className="m-5 " style={{ textAlign: "left" }}>
            <br />
            <div className="d-flex  my-4">
              <div>
                <img
                  src={`data:image/jpeg;base64,${sll.profilePic}`}
                  style={{ width: 100, height: 100, borderRadius: 50 }}
                  alt=""
                />
              </div>

              <h1 style={{ color: "red" }}>{user.name}</h1>
              <div className="ms-3 mt-2">
                <h4 style={{ marginTop: "20px" }}>{sll.name}</h4>
                {/* <p><Rating name="half-rating-read" defaultValue={5} readOnly /><h5>(10)</h5></p> */}
              </div>
              <div style={{ marginTop: "-130px" }}>
                <ChartTwo></ChartTwo>
              </div>
            </div>
            <div className="all-info w-100 border   border-1 p-5">
              <div className="row mb-3 ">
                <div className="col-md-6 ">
                  <p>From</p>
                  <h3>{sll.country}</h3>
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
                <button className="update-button">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/dashboard/updateSeller/${sll._id}`}
                  >
                    Update Profile
                  </Link>
                </button>
                <Link to={`/dashboard/quizTest`}>
                  <button className="quiz-button">Skill Test</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SellerProfile;
