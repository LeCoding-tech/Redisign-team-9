import React from 'react';
import './contactBody.css';
import axios from 'axios';
import Maps from '../MapsApi/mapsApi'


// Intializing the state to default nothing
const initialState = {
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  };
  
  class ContactBody extends React.Component {
    state = initialState;

    // Using axios to post contact info to database
    submitHandler = event => {
      event.preventDefault()
      axios.post('/HomeApplicancesCard', initialState)
  }
  
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    validate = () => {
      let nameError = "";
      let emailError = "";
      let phonenumberError = "";
      let messageError = "";
  
      if (!this.state.name) {
        nameError = "*name cannot be blank";
      }
  
      if (!this.state.email.includes("@")) {
        emailError = "*invalid email";
      }
      if (!this.state.phonenumber) {
        phonenumberError = "*Phone number cannot be blank";
      }
      if (!this.state.message) {
        messageError = "* enter a message";
      }
      if (emailError || nameError || phonenumberError || messageError) {
        this.setState({ emailError, nameError, phonenumberError, messageError });
        return false;
      }
      return true;
    };
  
    handleSubmit = event => {
      // stops browers from posting and reloading page
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        // clear form : in production this is where email is sent then clears 
        this.setState(initialState);
      }
    };
  
    render() {
      return (
  
        <div className="contactMaincontainer">
        
          <div>
            <section id="contact-form">
              <h1 className="heading">Contact Us</h1>
  
  
              <form className="myForm" onSubmit={this.handleSubmit}>
                <div className="formAlignment">
                  <p className="label--center">Name</p>
                  <input
                    className="name--position"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
  
                  <div style={{ color: "red", fontSize: "bold" }}>
                    {this.state.nameError}
                  </div>
                </div>
                <div className="formAlignment">
                  <p className="label--center">Email Address</p>
                  <input
                    className="name--position"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
  
                  <div style={{ color: "red", fontSize: "bold" }}>
                    {this.state.emailError}
                  </div>
                </div>
                <div className="formAlignment">
                  <p className="label--center">Phone Number</p>
                  <input
                    className="name--position"
                    type="number"
                    name="phonenumber"
                    placeholder="Phone number"
                    value={this.state.phonenumber}
                    onChange={this.handleChange}
                  />
                  <div style={{ color: "red", fontSize: "bold" }}>
                    {this.state.phonenumberError}
                  </div>
  
                  <div>
                    <p className="label--center">Message</p>
                    <textarea
                      className="comments--position"
                      name="message"
                      type="text"
                      placeholder="Message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                    <div style={{ color: "red", fontSize: "bold" }}>
                      {this.state.messageError}
                    </div>
                  </div>
                </div>
                <button className="button--item"type="submit">submit</button>
              </form>
            </section>
          </div>
          <Maps/>
        </div>
      );
    }
  }
  
  export default ContactBody;