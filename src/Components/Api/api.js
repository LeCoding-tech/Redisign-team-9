import React from "react"
import axios from "axios"

class api extends React.Component {
    constructor() {
        super()
        this.state = {
            api: "not decided on"
        }
    }

    componentDidMount = () => {
        axios.get("/example").then(response => {
            console.log(response.data);
        })
    }
    render() {
        return (
            <>
                <div>api data</div>
            </>
        )
    }
}