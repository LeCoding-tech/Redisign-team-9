import React from 'react';
import { Link } from "react-router-dom";
import '../LoginBody/LoginBody.css'


class LoginBody extends React.Component {
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
            <div className="LoginContainer">

                <form className="Login_form">
                    <h1 className="LoginH1">Login</h1>
                    <label className="email_label">Email Address</label>
                    <input className="email_input" type="text" value={this.state.value} onChange={this.handleChange} />

                    <label className="password_label">Password (6 or more charecters)</label>
                    <input className="password_input" type="text" value={this.state.value} onChange={this.handleChange} />

                    <button className="loginSubmit_input" type="submit">Login</button>
                    
                    <p>Don't Have An Account?</p>
                    <Link to="/SignUp" className="signupLink">Sign Up</Link>
                    

                </form>
            </div>
        )
    }
}

export default LoginBody;