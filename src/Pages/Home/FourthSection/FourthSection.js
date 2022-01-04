import React from 'react';
import './FourthSection.css'

const FourthSection = () => {
    return (
        <div>
            <section id="get-started">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <div>
                                <h3 className="title1-h3">Join thousands of professionals using CloudPeeps to run their freelance business</h3>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <a class="get-started btn btn-lg btn-primary" href="/sign_up/peep">Get started</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FourthSection;