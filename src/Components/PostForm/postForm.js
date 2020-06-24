import React, { Component } from "react";
import axios from 'axios'

class postForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = event => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = event => {
        e.preventDefault()
        console.log(this.state)
        axios.post(endpoint, this.state)
        
    }

  render() {
      const { userId, title, body } = this.state
    return (
      <div>
        <div>
          <form onSubmit={this.submitHandler}>
            <div>
              <input
              type="text"
              name="userId"
              value={userId}
              onChange={onChange.changeHandler}
               />
            </div>

            <div>
              <input
              type="text"
              name="userId"
              value={title}
              onChange={onChange.changeHandler}
              />
            </div>

            <div>
              <input
              type="text"
              name="userId"
              value={body}
              onChange={onChange.changeHandler}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default postForm;
