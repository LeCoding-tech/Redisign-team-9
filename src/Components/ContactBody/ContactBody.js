import React from 'react';
import './contactBody.css'

class ContactBody extends React.Component {
    render() {
        return (
            <>
                <h1 className="heading">Contact Us if You Have Any Questions</h1>
                <form classsName="myForm">
                    <label class="label--center">Name</label>
                    <input type="text" placeholder="Enter Name Here..." name="name" id="name--position" />
                    <label class="label--center">Email</label>
                    <input type="text" placeholder="Enter Email Here..." name="email" id="email--position" />
                    <label class="label--center">Comments</label>
                    <textarea rows="4" cols="50" placeholder="Enter comments Here..." id="comments--position"></textarea>
                    <div class="container">
                        <button class="button--item">Submit</button>
                        <input type="reset" class="button--item" />
                    </div>
                </form>
            </>
        )
    }

}

export default ContactBody;