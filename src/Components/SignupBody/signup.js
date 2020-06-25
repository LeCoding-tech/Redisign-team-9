import React from 'react'


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
            <div className="container">
            <form className="signup_form">
                <label>Name
            <input type="text" placeholder="Enter Name Here..." value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>Email
                    <input type="text" placeholder="Enter Email Here..." value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button className="github_button">GitHub</button>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

export default SignupBody;