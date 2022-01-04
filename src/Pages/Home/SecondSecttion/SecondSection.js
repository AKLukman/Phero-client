import React from 'react';
import './SecondSection.css'
import image1 from "./FB.jpg";
import image2 from "../../../images/FullSizeRender_7.jpg";
import image3 from "../../../images/IMG_20200309_140010_(1).jpg";
import image4 from "../../../images/passport_1.jpg";
import image5 from "../../../images/profile_photo_square_small.png";
import image6 from "../../../images/amy.png";


const SecondSection = () => {
    return (
        <div>
            <div class="container second-section">
                <div class="row">
                    <div class="col-md-5">
                        <h2 class="heading">
                            Trusted by over 20,000 customers in over 150 countries
                        </h2>
                        <p class="pp">
                            Find your perfect match for ongoing work and one-time projects.
                            Work on demand with local or remote professionals.
                        </p>
                        <div class="text-center">
                            <div class="talent-page-links">
                                <a href="h" class="btn btn-primary">
                                    Writers
                                </a>
                                <a href="h" class="btn btn-primary">
                                    Marketers
                                </a>
                                <a href="h" class="btn btn-primary">
                                    Social Media Managers
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="row">
                            <div class="col-6">
                                <div class="info d-flex">
                                    <div class="quality">
                                        <h5 className="name-color">Sarah Karp W.</h5>
                                        <span class="icon-color">
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </span>
                                        <p>Digital Marketer</p>
                                    </div>
                                    <div class="w-img">
                                        <img className="seller-img" src={image1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="info d-flex">
                                    <div class="quality">
                                        <h5 className="name-color">Chris K.</h5>
                                        <span class="icon-color">
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </span>
                                        <p>Data-driven</p>
                                    </div>
                                    <div class="w-img">
                                        <img className="seller-img" src={image2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="info d-flex">
                                    <div class="quality">
                                        <h5 className="name-color">Chris M.</h5>
                                        <span class="icon-color">
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </span>
                                        <p>Web developer</p>
                                    </div>
                                    <div class="w-img">
                                        <img className="seller-img" src={image3} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="info d-flex">
                                    <div class="quality">
                                        <h5 className="name-color">Sophia D.</h5>
                                        <span class="icon-color">
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </span>
                                        <p>Full-stack</p>
                                    </div>
                                    <div class="w-img">
                                        <img className="seller-img" src={image4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="info d-flex">
                                    <div class="quality">
                                        <h5 className="name-color">Jeanette M.</h5>
                                        <span class="icon-color">
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </span>
                                        <p>Editor</p>
                                    </div>
                                    <div class="w-img">
                                        <img className="seller-img" src={image5} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="info d-flex">
                                    <div class="quality">
                                        <h5 className="name-color">Chris H.</h5>
                                        <span class="icon-color">
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </span>
                                        <p>Saas Copywriter</p>
                                    </div>
                                    <div class="w-img">
                                        <img className="seller-img" src={image6} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;