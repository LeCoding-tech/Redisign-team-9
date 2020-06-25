import React from "react";
import "./MainPage.css";
import Navbar from '../Navbar/navbar';

import { Link } from "react-router-dom";

const ProductMainPage = () => {
  return (
    <div>
      <Navbar/>
        <ul>
          <li>
          <Link to="/Products/MobileProducts">Mobile Products</Link>
          </li>
          <li>
          <Link to="/Products/HomeAppliancePage">Home Appliances</Link>
          </li>
          <li>
          <Link to="/Products/TvAudioPage">Tv & Audio</Link>
          </li>
        </ul>
    </div>
  );
};

export default ProductMainPage;
