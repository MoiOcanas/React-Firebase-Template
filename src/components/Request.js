import React, { Component } from 'react';

//Styles
import './styles/request.css';

class Request extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        name="username"
                        className="input-form-signup"
                        onChange={this.onChange}
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        name="email"
                        className="input-form-signup"
                        type="text"
                        placeholder="Email Address"
                    />
                    <input
                        name="passwordOne"
                        className="input-form-signup"
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit" className="input-button-signup">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Request;