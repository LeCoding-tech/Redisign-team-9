import React from 'react';
import {Link} from 'react-router-dom';
import './sighupBody.css';

class SignupBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('Your Form Was Submitted!');
        event.preventDefault();
    }
    render() {
        return (
            <div className="SignUpContainer">
            <form className="signup_form">
                <label className="firstName_label">First Name
            <input className="firstName_input" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label className="lastName_label">Last Name
            <input className="lastName_input" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label className="email_label">Email Address
                    <input className="email_input" type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label className="password_label">Password (6 or more charecters)
            <input className="password_input" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <div className="UserAgreement">
                <p >By clicking Join Now, you agree to Samnsungs <b>User Agreement</b>, <b>Privacy Policy</b>, and <b>Cookie Policy</b>.</p>
                </div>
                
                <input className="submit_input" type="submit" value="Join Now" />
              
                <p>Already Have An Account?<Link to="/Login">Sign In</Link></p>
            </form>
            </div>
        )
    }
}

export default SignupBody;