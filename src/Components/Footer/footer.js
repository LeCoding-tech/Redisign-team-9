import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <div className="box bg-dark">
            {/* <div className ="img_box">
            </div> */}
            <img className = "footer_samsung" alt="android" src = "img/Samsung2.jpg"/>
            <div className="footer_box1">
            <h3>Home</h3> 
            <h3>About Us</h3>
            <h3>Features</h3>
            <h3>Pricing</h3>
            <h3>Contact Us</h3>
            <h3>Samsung &copy; 2020, All Rights Reserved </h3>
            </div>
            <div className="footer_box2">
            <h3>Sign Up</h3>
            <h3>Blogs</h3>
            <h3>Personas</h3>
            <h3>News</h3>
            <h3>Our Community</h3>
            </div>
            <div className = "social_media">
                <h2>Feel Free To Check Out Our Social Media Sites!!!</h2>
                <a href="https://www.instagram.com/samsungmobile/?hl=en"  rel="noopener"> <img className = "instagram_footer" alt="IG" src = "img/instagram.png"/> </a>
            <a href="https://twitter.com/samsung?lang=en"  rel="noopener"><img className = "twitter_footer" src = "img/twitter.png"/></a>
            <a href="https://www.facebook.com/SamsungUS/"  rel="noopener"> <img className = "facebook_footer" alt="Facebook" src = "img/facebook.jpg"/></a>
            </div>
        </div>
    )}

export default Footer;