import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

//Components
import { SignUpLink } from './SignUp';
import { withFirebase } from './Firebase'
import { PasswordForgetLink } from './PasswordForget';

//Routes 
import * as ROUTES from '../constants/routes';

//Styles
import './styles/sign-in.css';

const SignInPage = () => (
    <div className="main">
        <div className="form-container">
            <h1 className="title">Sign In</h1>
            <SignInForm />
            <PasswordForgetLink />
            <SignUpLink />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

class SignInFormBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={email}
                    className="input-form"
                    onChange={this.onChange}
                    type="email"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    className="input-form"
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input disabled={isInvalid} type="submit" className="input-button" value="Sign In" />

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignInForm = compose(
    withRouter, withFirebase
)(SignInFormBase);

export default SignInPage;
export { SignInForm };
