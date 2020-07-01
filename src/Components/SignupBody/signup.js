import React from 'react';
import { Link } from 'react-router-dom';
import './sighupBody.css';

class SignupBody extends React.Component {
    render() {
        return (
            <div className="SignUpContainer">
                <form className="signup_form">
                    <h1 className="SignupH1">Sign Up</h1>
                    <label className="firstName_label">First Name</label>
                    <input className="firstName_input" type="text" value={this.state.value} onChange={this.handleChange} />

                    <label className="lastName_label">Last Name</label>
                    <input className="lastName_input" type="text" value={this.state.value} onChange={this.handleChange} />

                    <label className="email_label">Email Address</label>
                    <input className="email_input" type="text" value={this.state.value} onChange={this.handleChange} />

                    <label className="password_label">Password (6 or more charecters)</label>
                    <input className="password_input" type="text" value={this.state.value} onChange={this.handleChange} />

                    <div className="UserAgreement">
                        <p >By clicking Join Now, you agree to Samnsungs <b>User Agreement</b>, <b>Privacy Policy</b>, and <b>Cookie Policy</b>.</p>
                    </div>

                    <button className="submit_input" type="submit">Join Now</button>

                    <p>Already Have An Account?</p>
                    <Link to="/Login" className="loginLink">Sign In</Link>
                </form>
            </div>
        )
    }
}

export default SignupBody;