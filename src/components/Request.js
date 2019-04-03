import React, { Component } from 'react';

//Component
import Sidebar from './SideBar';

//Styles
import './styles/request.css';

//Firebase
import Firebase from './Firebase/firebase';

class Request extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            message: "",
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = event => {
        event.preventDefault();
        Firebase.requests.push({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        })

    }

    render() {
        return (
            <div>
                <Sidebar />
                <div className="main-container-request">
                    <form onSubmit={this.onSubmit} className="form-container-request">
                        <h2 className="request-title">Make a request</h2>
                        <input
                            name="name"
                            className="input-form-request"
                            onChange={this.handleChange}
                            value={this.state.name}
                            type="text"
                            placeholder="Full Name"
                        />
                        <input
                            name="email"
                            className="input-form-request"
                            onChange={this.handleChange}
                            value={this.state.email}
                            type="text"
                            placeholder="Email Address"
                        />
                        <input
                            name="message"
                            className="input-form-request"
                            onChange={this.handleChange}
                            value={this.state.message}
                            type="text"
                            placeholder="Message"
                        />
                        <button type="submit" className="input-button-request">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Request;