import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="box bg-dark">
            {/* <div className ="img_box">
            </div> */}
<<<<<<< HEAD
             <Link to="/" className="link2">
            <img className="footer_samsung" alt="android" src="img/Samsung2.jpg" />
=======
            <Link to="/" className="footer_box1">
                <img className="footer_samsung" alt="android" src="img/Samsung2.jpg" />
>>>>>>> ef9f05fd3f467c1afed3ac0a74da0a587b9d77d4
            </Link>
            <div className="footer_box1">


<<<<<<< HEAD
                <h3 className="h3Footer">Home</h3>
            </Link>
            <Link to="/Products" className="link">
                <h3 className="h3Footer">Products</h3>
            </Link>
            <Link to="/Contact" className="link">
                <h3 className="h3Footer">Contact Us</h3>
            </Link>
=======
                <Link to="/">
                    <h3 className="link">Home</h3>
                </Link>
                <Link to="/Products" >
                    <h3 className="link">Products</h3>
                </Link>
                <Link to="/Contact">
                    <h3 className="link">Contact Us</h3>
                </Link>
>>>>>>> ef9f05fd3f467c1afed3ac0a74da0a587b9d77d4

            </div>




            <div className="footer_box2">
<<<<<<< HEAD
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
=======
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
>>>>>>> ef9f05fd3f467c1afed3ac0a74da0a587b9d77d4
            </div>
        </div>
    )
}

export default Footer;