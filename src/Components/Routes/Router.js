import React from "react";
import HomePage from '../HomePage/homePage';
import ProductMainPage from '../ProductsBody/ProductMainPage';
import Products from '../ProductsBody/ProductSubPages/MobileProducts';
import HomeAppliancePage from '../ProductsBody/ProductSubPages/HomeAppliances';
import TvAudioPage from '../ProductsBody/ProductSubPages/TvAudioPage';
import ContactPage from '../ContactPage/contactPage';
import SignupPage from '../SignupPage/signupPage';

import {
  BrowserRouter as Router, Route} from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Products' component={ProductMainPage} />
        <Route exact path='/Products/MobileProducts' component={Products}/>
        <Route exact path='/Products/HomeAppliancePage' component={HomeAppliancePage}/>
        <Route exact path='/Products/TvAudioPage' component={TvAudioPage}/>
        <Route exact path='/Contact' component={ContactPage} />
        <Route exact path='/signup' component={SignupPage} />
      </div>
      </Router>
    );
  }
}

export default Routes;
