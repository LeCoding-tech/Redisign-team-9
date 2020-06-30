import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="box bg-dark">
            {/* <div className ="img_box">
            </div> */}
            <Link to="/" className="footer_box1">
                <img className="footer_samsung" alt="android" src="img/Samsung2.jpg" />
            </Link>
            <div className="footer_box1">


                <Link to="/">
                    <h3 className="link">Home</h3>
                </Link>
                <Link to="/Products" >
                    <h3 className="link">Products</h3>
                </Link>
                <Link to="/Contact">
                    <h3 className="link">Contact Us</h3>
                </Link>

            </div>




            <div className="footer_box2">
                <Link to="/" >
                    <h3 className="link">Sign Up</h3>
                </Link>

                <h3 className="link">Personas</h3>

            </div>
            <div className="social_media">
                <a href="https://www.instagram.com/samsungmobile/?hl=en" rel="noopener" target="_blank"> <img className="instagram_footer" alt="IG" src="img/instagram.png" /> </a>
                <a href="https://twitter.com/samsung?lang=en" rel="noopener" target="_blank"><img className="twitter_footer" src="img/twitter.png" /></a>
                <a href="https://www.facebook.com/SamsungUS/" rel="noopener" target="_blank"> <img className="facebook_footer" alt="Facebook" src="img/facebook.jpg" /></a>
                <h3>Samsung &copy; 2020, All Rights Reserved </h3>
            </div>
        </div>
    )
}

export default Footer;