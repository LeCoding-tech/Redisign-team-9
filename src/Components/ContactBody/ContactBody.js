import React from 'react';
import './contactBody.css';
import axios from 'axios';

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
                <h1 className="heading">Contact Us if You Have Any Questions</h1>
                <form classsName="myForm" onSubmit={this.submitHandler} >
                    <label class="label--center">Name</label>
                    <input type="text" placeholder="Enter Name Here..." name="name" id="name--position" value="name" />
                    <label class="label--center">Email</label>
                    <input type="text" placeholder="Enter Email Here..." name="email" id="email--position" value="email" />
                    <label class="label--center">Comments</label>
                    <textarea rows="4" cols="50" placeholder="Enter comments Here..." id="comments--position"></textarea>
                    <div class="container">
                        <button class="button--item" type="submit" >Submit</button>
                        <input type="reset" class="button--item" value="comment" />
                    </div>
                </form>
            </>
        )
    }

}

export default ContactBody;