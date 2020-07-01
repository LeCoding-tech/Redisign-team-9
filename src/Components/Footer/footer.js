import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";
import FBIcon from "../Footer/facebook.jpg";
import TwitterIcon from "../Footer/instagram.png";
import Instagramicon from "../Footer/twitter.png";
import SamusngFooterIcon from "../Footer/samsung2.jpg";

const Footer = () => {
    return (
        <div className="box bg-dark">
            
            <Link to="/" className="footer_box1">
                <img className="footer_samsung" alt="android" src={SamusngFooterIcon} />
            </Link>
            <div className="footer_box1">
                <h3><Link to="/" className="h3Footer">Home</Link></h3>
                <h3><Link to="/Products"  className="h3Footer">Products</Link></h3>
                <h3 ><Link to="/Contact"  className="h3Footer">Contact us</Link></h3>
            </div>




            <div className="footer_box2">
            
            <h3><Link to="/signup" className="h3Footer">Sign up</Link ></h3>
                <h3 className="h3Footer">Personas</h3>

            </div>
            <div className="social_media">
                <a href="https://www.instagram.com/samsungmobile/?hl=en" target="_blank" rel="noopener noreferrer"> <img className="instagram_footer" alt="IG" src={TwitterIcon} /> </a>

                <a href="https://twitter.com/samsung?lang=en" target="_blank"rel="noopener noreferrer"><img className="twitter_footer" src={Instagramicon} alt="instagram logo" /></a>
                
                <a href="https://www.facebook.com/SamsungUS/" target="_blank"rel="noopener noreferrer"> <img className="facebook_footer" alt="Facebook" src={FBIcon} /></a>
                <h3 className="h3Footer">Samsung &copy; 2020, All Rights Reserved </h3>
            </div>
        </div>
    )
}

export default Footer;