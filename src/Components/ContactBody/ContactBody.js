import React from 'react';
import './contactBody.css';
import axios from 'axios';
import Maps from '../MapsApi/mapsApi'

class ContactBody extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            comment: ''
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = event => {
        event.preventDefault()
        // axios.post(endpoint, this.state)
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <>
            <div className="contactMaincontainer">
                <h1 className="heading">Contact Us if You Have Any Questions</h1>
        <form className="myForm">
          <label className="label--center">Name:</label>
          <input type="text" placeholder="Enter Name Here..." name="name" className="name--position" />
          <label className="label--center">Email:</label>
          <input type="text" placeholder="Enter Email Here..." name="email" className="email--position" />
          <label className="label--center">Comments:</label>
          <textarea rows="4" cols="50" placeholder="Enter comments Here..." className="comments--position"></textarea>
          <div className="button--div">
            <button className="button--item">Submit</button>
            <input type="reset" className="button--item" />
            </div>
        </form>
        
                <h1>Find our locations</h1>
        <Maps />
                </div>
                
            </>
        )
    }

}

export default ContactBody;