import React from 'react';

//Router
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

//Firebase
import { withFirebase } from '../Firebase';

//Routes
import * as ROUTES from '../../constants/routes';

//Context
import AuthUserContext from './context';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if(!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return(
                <AuthUserContext.Consumer>
                    {
                        authUser => condition(authUser) ? <Component {...this.props} /> : null
                    }
                </AuthUserContext.Consumer>
            );
        }
    }
    return compose(
        withRouter, withFirebase
    )(WithAuthorization);
};

export default withAuthorization;