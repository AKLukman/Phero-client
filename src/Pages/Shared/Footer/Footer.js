import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div id="footer-main">
                    <div class="content container d-flex row">
                        <div class="column-wide column col-sm-4">
                            <h4>Help</h4>
                            <hr />
                            <div class="row">
                                <div class="col-xs-12">
                                    <ul>
                                        <li className="">
                                            <span><i class="fas fa-question"></i></span>
                                            <a href="/help_center" className="ms-2">Help center</a>
                                        </li>
                                        <li>
                                            <span><i class="fas fa-question"></i></span>
                                            <a href="faq/client" className="ms-2">Client FAQ</a>
                                        </li>
                                        <li>
                                            <span><i class="fas fa-question"></i></span>
                                            <a href="/faq/peep" className="ms-2">Peep FAQ</a>
                                        </li>
                                        <li>
                                            <span><i class="far fa-envelope"></i></span>
                                            <a href="/email" className="ms-2">
                                                abulkashemlukman@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="column-wide column col-sm-4 company">
                            <h4>Connect</h4>
                            <hr />
                            <div class="row">
                                <div class="col-5 contact-container">
                                    <ul>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/team">Team</a></li>
                                        <li><a href="/careers">Careers</a></li>
                                        <li><a href="/press">Press</a></li>
                                    </ul>
                                </div>
                                <div class="col-7 contact-container">
                                    <ul>
                                        <li><a href="/facebook">Facebook</a></li>
                                        <li><a href="/twitter">Twitter</a></li>
                                        <li><a href="/instagram">Instagram</a></li>
                                        <li><a href="/linkedin">LinkedIn</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="footer-bottom">
                    <div class="content container">
                        <div class="row">
                            <div class="col-4">
                                <p class="privacy-and-terms">
                                    <a href="/site-terms/privacy-policy" style={{
                                        color: '#636569',
                                        textDecoration: 'none'
                                    }}>Privacy |</a>
                                    |
                                    <a href="/site-terms/terms-of-service" style={{
                                        color: '#636569',
                                        textDecoration: 'none'
                                    }}>Terms of Service</a>
                                </p>
                            </div>

                            <div class="col-8">
                                <p class="copyright-and-location">
                                    &copy; 2021 Web Development Agency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;