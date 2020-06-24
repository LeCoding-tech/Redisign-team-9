import React from "react";
import HomePage from '../HomePage/homePage';
import ProductsPage from '../ProductsBody/ProductsBody';
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
        <Route exact path='/Products' component={ProductsPage} />
        <Route exact path='/Contact' component={ContactPage} />
        <Route exact path='/signup' component={SignupPage} />
      </div>
      </Router>
    );
  }
}
 
export default Routes;
