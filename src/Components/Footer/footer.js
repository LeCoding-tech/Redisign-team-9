import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="box bg-dark">
            {/* <div className ="img_box">
            </div> */}
             <Link to="/" className="link2">
            <img className="footer_samsung" alt="android" src="img/Samsung2.jpg" />
            </Link>
            <div className="footer_box1">

            <Link>
                <h3 className="h3Footer">Home</h3>
            </Link>
            <Link to="/Products" className="link">
                <h3 className="h3Footer">Products</h3>
            </Link>
            <Link to="/Contact" className="link">
                <h3 className="h3Footer">Contact Us</h3>
            </Link>

            </div>




            <div className="footer_box2">
            <Link to="/signup" className="link">
            <h3 className="h3Footer">Sign Up</h3> 
            </Link>
                
                <h3 className="h3Footer">Personas</h3>

            </div>
            <div className="social_media">
                <a href="https://www.instagram.com/samsungmobile/?hl=en" target="_blank" rel="noopener"> <img className="instagram_footer" alt="IG" src="img/instagram.png" /> </a>
                <a href="https://twitter.com/samsung?lang=en" target="_blank"rel="noopener"><img className="twitter_footer" src="img/twitter.png" /></a>
                <a href="https://www.facebook.com/SamsungUS/" target="_blank"rel="noopener"> <img className="facebook_footer" alt="Facebook" src="img/facebook.jpg" /></a>
                <h3 className="h3Footer">Samsung &copy; 2020, All Rights Reserved </h3>
            </div>
        </div>
    )
}

export default Footer;