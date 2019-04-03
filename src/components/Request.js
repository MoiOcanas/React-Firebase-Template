import React, { Component } from 'react';

//Component
import Sidebar from './SideBar';

//Styles
import './styles/request.css';

class Request extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="main-container-request">
                    <form onSubmit={this.onSubmit} className="form-container-request">
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
                            name="passwordOne"
                            className="input-form-request"
                            type="password"
                            placeholder="Password"
                        />
                        <button type="submit" className="input-button-request">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Request;