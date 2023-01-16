import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
             <footer className='footer-area text-black'>
            <div className="footer-wave-box">
                <div className="footer-wave footer-animation">

                </div>
            </div>
            <div className="main">
                <div className="footer">
                    <div className="single-footer">
                        <h4 ><img style={{color:'white'}} className=' logo' src="https://demo.gridgum.com/templates/Travel-agency/images/logo.png" alt="" /></h4>
                        <h5>Traveling Internationally? </h5>
                        <p>Travel Requirements have changed. Find a COVID-19 vaccine. And take the VACCINE. Safety First</p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="single-footer">
                        <h4>Main Menu</h4>
                        <ul>
                            <li><i className="fas fa-chevron-right"></i>Home</li>
                            <li><i className="fas fa-chevron-right"></i>Services</li>
                            <li><i className="fas fa-chevron-right"></i>About Us</li>
                            <li><i className="fas fa-chevron-right"></i>Contact Us</li>
                        </ul>
                    </div>
                    <div className="single-footer">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><i className="fas fa-chevron-right"></i>Privacy</li>
                            <li><i className="fas fa-chevron-right"></i>Terms & Conditions</li>
                            <li><i className="fas fa-chevron-right"></i>Disclaim</li>
                        </ul>
                    </div>
                    <div className="single-footer">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i> Kolkata, India</li>
                            <li><i className="fas fa-mobile-alt"></i> +91 3424-372632</li>
                            <li><i className="far fa-envelope"></i>     saveo@gmail.com</li>
                            <li><i className="fas fa-globe-europe"></i>     www.saveo.com</li>
                        </ul>
                    </div>
                </div><hr />
                <div className="copy fw-bold">
                    <p><small>&copy; 2023 all rights reserved at TRAVEL Tourist Club</small></p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;