import React from 'react';
import './ThirdSection.css'

const ThirdSection = () => {
    return (
        <div>
            <section className="fourth-section">
                <div className="">
                    <div className="">
                        <h2 className="h2-title4">How it works</h2>
                        <h3 className="h3-title">CloudPeeps empowers clients and freelancers to do their best work.</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-4 step">
                            <div className="image-container">
                                <img className="step-image"
                                    src="https://d1b2g2ownqaryk.cloudfront.net/assets/home/job-icon-a9482aef0194fc65022499bcb6b6c2e1.png"
                                    alt="Job icon" />
                            </div>
                            <h4>1. List</h4>
                            <p>Let Peeps know what you<br />
                                need by posting a job.</p>
                        </div>
                        <div className="col-sm-4 step">
                            <div className="image-container">
                                <img className="step-image"
                                    src="https://d1b2g2ownqaryk.cloudfront.net/assets/home/pitches-icon-b49c289d7c95b1ccdd75acdae7569725.png"
                                    alt="Pitches icon" />
                            </div>
                            <h4>2. Match</h4>
                            <p>Receive hand-crafted proposals or<br />
                                search our community of Peeps.
                            </p>
                        </div>
                        <div className="col-sm-4 step">
                            <div className="image-container">
                                <img className="step-image"
                                    src="https://d1b2g2ownqaryk.cloudfront.net/assets/home/talent-icon-977ae7f4d2b45884b342420a8e71b5c7.png"
                                    alt="Talent icon" />
                            </div>
                            <h4>3. Hire</h4>
                            <p>Connect and hire Peeps <br />
                                to get started.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default ThirdSection;