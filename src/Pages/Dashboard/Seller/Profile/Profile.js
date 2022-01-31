import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const {
    name,
    country,
    speciality,
    about,
    demosite,
    profilePic,
    gigone,
    _id,
  } = props.seller;
  const [value, setValue] = React.useState(5);
  const [ratings, setRatings] = useState(5);
  return (
    <div className="col-md-4 g-4">
      <div className="card mb-3" style={{ backgroundColor: "#DCDCDC" }}>
        <a href={demosite} target="blank">
          {" "}
          <img
            style={{ width: "100%", height: "200px" }}
            src={`data:image/jpeg;base64,${gigone}`}
            className="card-img-top"
            alt="..."
          />
        </a>
        <div className="card-body">
          <Link style={{ textDecoration: "none" }} to={`/sellerProfile/${_id}`}>
            {" "}
            <h5 className="card-title">
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                src={`data:image/jpeg;base64,${profilePic}`}
                alt="..."
              />{" "}
              {name}
            </h5>
          </Link>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              setRatings(+1);
            }}
          />
          <span>Ratings {ratings}</span>
          <p className="card-text">{about.slice(0, 200)}....</p>
          <h6 className="card-text">{speciality}</h6>
          <p className="card-text">
            <small className=" text-bold" style={{ color: "#008000" }}>
              {country}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// src={`data:image/jpeg;base64,${profilePic}`}
