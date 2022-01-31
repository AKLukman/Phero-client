import React, { useEffect, useState } from "react";
import Developer from "./Developer";

const Developers = () => {
  const [sellerProfile, setSellerProfile] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/sellerProfile`)
      .then((res) => res.json())
      .then((data) => setSellerProfile(data));
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <h2 className="text-center mt-5 text-bold">Developers</h2>
        <div className="row">
          {sellerProfile.map((seller) => (
            <Developer key={seller._id} seller={seller}></Developer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;
