import React from 'react';
import { Link } from 'react-router-dom';

//Routee
import { withFirebase } from '../components/Firebase';
import * as ROUTES from '../constants/routes';

//Styles
import './styles/password-forget.css';

const PasswordForgetPage = () => (
    <div>
        <h1>Password Forget</h1>
        <PasswordForgetFormBase />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null
};

class PasswordForgetFormBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    render() {
        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit} className="form-password-forget">
                <input
                    name="email"
                    value={this.state.email}
                    className="input-form"
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />

                <button disabled={isInvalid} type="submit" className="input-button">
                    Reset
                    </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const PasswordForgetLink = () => (
    <p className="link-password">
        <Link to={ROUTES.PASSWORD_FORGET}> Forgot Password? </Link>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink }; 