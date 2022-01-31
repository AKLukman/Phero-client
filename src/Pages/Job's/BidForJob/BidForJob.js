import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Clock from "../../Clock/Clock";
import Navigation from "../../Shared/Navigation/Navigation";
import BidPost from "./BidPost/BidPost";

const BidForJob = () => {
  const { jobsDetails } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [value, setValue] = React.useState(0);
  const [ratings, setRatings] = useState(4);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${jobsDetails}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <div className="m-5 " style={{ textAlign: "left" }}>
        <h1 style={{ fontWeight: "700" }}>Job descriptions</h1>
        <br />
        <div className="d-flex  my-4">
          <div className="ms-3 mt-2">
            <h2
              style={{
                marginTop: "20px",
                marginRight: "20px",
                color: " #34495e ",
                fontWeight: "600",
              }}
            >
              {details.title}
            </h2>
            {/* <p><Rating name="half-rating-read" defaultValue={5} readOnly /><h5>(10)</h5></p> */}
          </div>
        </div>
        <div
          className="all-info w-100 border  border-1 p-5"
          style={{ backgroundColor: "#d5dbdb" }}
        >
          <div className="row mb-3 ">
            <div className="col-md-6 ">
              {/* <p>From</p> */}
              <h5 style={{ color: "black" }}>{details.type}</h5>
              <h6 style={{ color: "#FF7F50", fontWeight: "900" }}>
                Budget: ${details.budget}
              </h6>
            </div>
            <div className="col-md-6">{/* <Clock></Clock> */}</div>
          </div>
          <div className="row"></div>
          <div className="border border-1 my-5"></div>
          <div style={{ color: "black" }}>
            <p>
              A job description or JD is a written narrative that describes the
              general tasks, or other related duties, and responsibilities of a
              position. It may specify the functionary to whom the position
              reports, specifications such as the qualifications or skills
              needed by the person in the job, information about the equipment,
              tools and work aids used, working conditions, physical demands,
              and a salary range. Job descriptions are usually narrative,[1] but
              some may comprise a simple list of competencies; for instance,
              strategic human resource planning methodologies may be used to
              develop a competency architecture for an organization, from which
              job descriptions are built as a shortlist of competencies.
            </p>

            <p>
              Apart from web designing i offer different services like designing
              infographics, Photoshop, writing articles and blog posts. I always
              prefer customer's satisfaction.
            </p>
            {/* <button className="btn " style={{ backgroundColor: '#A3A9A4', marginTop: '5px' }} ><Link to={`/dashboard/updateSeller/${sll._id}`} style={{ textDecoration: 'none', color: 'white' }}>Update Profile</Link></button> */}
          </div>
        </div>
        <BidPost jobId={details._id}></BidPost>
      </div>
    </div>
  );
};

export default BidForJob;
