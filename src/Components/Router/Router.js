import React from "react";
import HomePage from '../HomePage/homePage';
import ProductMainPage from '../ProductsBody/ProductMainPage';
import MobilePage from '../ProductsBody/ProductsPage/Mobile';
import HomeAppliance from '../ProductsBody/ProductsPage/HomeAppliances';
import TvAudio from '../ProductsBody/ProductsPage/TvAudio';
import ContactPage from '../ContactPage/contactPage';
import LoginPage from '../LoginPage/LoginPage';
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
        <Route exact path='/Products/MobileProducts' component={MobilePage}/>
        <Route exact path='/Products/HomeAppliancePage' component={HomeAppliance}/>
        <Route exact path='/Products/TvAudioPage' component={TvAudio}/>
        <Route exact path='/Contact' component={ContactPage} />
        <Route exact path='/Login' component={LoginPage} />
        <Route exact path='/SignUp' component={SignupPage} />
      </div>
      </Router>
    );
  }
}
 
export default Routes;
