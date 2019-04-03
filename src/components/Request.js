import React, { Component } from 'react';

//Component
import Sidebar from './SideBar';

//Styles
import './styles/request.css';

class Request extends Component {
    constructor() {
        super();

        this.state = {
            newRequest: {
                name: "",
                email: "",
                message: "",
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        

    }

    render() {
        return (
            <div>
                <Sidebar />
                <div className="main-container-request">
                    <form onSubmit={this.onSubmit} className="form-container-request">
                        <h2 className="request-title">Make a request</h2>
                        <input
                            name="username"
                            className="input-form-request"
                            onChange={this.onChange}
                            type="text"
                            placeholder="Full Name"
                        />
                        <input
                            name="email"
                            className="input-form-request"
                            type="text"
                            placeholder="Email Address"
                        />
                        <input
                            name="message"
                            className="input-form-request"
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