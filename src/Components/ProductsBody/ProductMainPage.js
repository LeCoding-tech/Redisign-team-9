import React from "react";
import "./MainPage.css";
import Header from '../Navbar/Header';
import { Link } from "react-router-dom";
import HomeAppStar from "../ProductsBody/images/HomeAppStar.png";
import MobileStar from "../ProductsBody/images/MobileProdStar.png";
import TvAudioStar from "./images/TvAudioStar.png";
import Footer from "../Footer/footer"


const ProductMainPage = () => {
  return (
    <div>
      <Header/>
        <ul className="Container1">
          <div className="MobileContainer">
          <Link to="/Products/MobileProducts"><img className="Stars"src={MobileStar}/></Link>
          </div>
          <div className="HomeAppContainer">
          <Link to="/Products/HomeAppliancePage"><img className="Stars" src={HomeAppStar}/></Link>
          </div>
          <div className="TvAudioContainer">
          <Link to="/Products/TvAudioPage"><img className="Stars" src={TvAudioStar}/></Link>
          </div>
        </ul>
        <Footer/>
    </div>
  );
};

export default ProductMainPage;
