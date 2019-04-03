import React, { Component } from 'react';

class Request extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        name="username"
                        value={username}
                        className="input-form-signup"
                        onChange={this.onChange}
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        name="email"
                        value={email}
                        className="input-form-signup"
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <input
                        name="passwordOne"
                        value={passwordOne}
                        className="input-form-signup"
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        name="passwordTwo"
                        value={passwordTwo}
                        className="input-form-signup"
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <button disabled={isInvalid} type="submit" className="input-button-signup">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Request;