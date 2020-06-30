import React from 'react';
import {Link} from "react-router-dom";
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
                <label className="email_label">Email Address
                    <input className="email_input" type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label className="password_label">Password (6 or more charecters)
            <input className="password_input" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="submit_input" type="submit" value="LogIn" />
                <p>Don't Have An Account?<Link to="/SignUp">Sign Up</Link></p>

            </form>
            </div>
        )
    }
}

export default LoginBody;