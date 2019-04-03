import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Routes
import * as ROUTES from '../constants/routes';

import { withAuthentication } from './Session';

//Components
import Navigation from './Navigation';
import LandingPage from './Landing/Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Acount';
import AdminPage from './Admin';
import Request from './Request';
import Results from './Results';

const App = () => (
    <Router>
        <Navigation />
        
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
        <Route exact path={ROUTES.REQUEST} component={Request} />
        <Route exact path={ROUTES.RESULTS} component={Results} />
    </Router>
);

export default withAuthentication(App);