import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';

const SellerDetails = () => {
    const { sellerId } = useParams();
    const [seller, setSeller] = useState({});
    const [loading, setLoading] = useState(false);
    const [value, setValue] = React.useState(0);
    const [ratings, setRatings] = useState(4);
    const { user } = useAuth();


    useEffect(() => {
        fetch(`http://localhost:5000/sellerProfile/${sellerId}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data)
                setLoading(false);
            })
    }, []);


    if (loading)
        return (<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>)
    return (
        <div>
            <Navigation></Navigation>
            <div className="m-5 " style={{ textAlign: "left" }}>
                <h1>About The Seller</h1>
                <br />
                <div className="d-flex  my-4">
                    <div>
                        <img
                            src={`data:image/jpeg;base64,${seller.profilePic}`}
                            style={{ width: 100, height: 100, borderRadius: 50 }}
                            alt=""
                        />
                    </div>
                    <div className="ms-3 mt-2">
                        <h4>{seller.name}</h4>
                        <p>    <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                                setRatings(1);
                            }}
                        /><h5>{ratings}</h5></p>
                    </div>
                </div>
                <div className="all-info w-100 border   border-1 p-5">
                    <div className="row mb-3 ">
                        <div className="col-md-6 ">
                            <p>From</p>
                            <h3>{seller.country}</h3>
                        </div>
                        <div className="col-md-6">
                            <p>Demo Site Link</p>
                            <a target="blank" href={seller.demosite}><h3>{seller.demosite}</h3></a>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Speciality</p>
                            <h3>{seller.speciality}</h3>
                        </div>
                        <div className="col-md-6">
                            <p>Member Since</p>
                            <h3>FEB 2018</h3>
                        </div>
                    </div>
                    <div className="border border-1 my-5"></div>
                    <div>
                        <p>
                            {seller.about}
                        </p>
                        <p>
                            {seller.about}
                        </p>


                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SellerDetails;