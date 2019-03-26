import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import { AuthUserContext } from './Session';

//Components
import SignOutButton from './SignOut';

//Styles
import './styles/navigation.css';

const Navigation = ({ authUser }) => (
    <div>
        <AuthUserContext.Consumer>
            {
                authUser =>
                    authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);


const NavigationAuth = () => (
    <div>
        <ul>
            <li>
                <SignOutButton />
            </li>
        </ul>
    </div>
);


const NavigationNonAuth = () => (
    <div>
        <ul>
            <i className="fab fa-react fa-2x" style={{ float: 'left', padding: '10px', marginLeft: '5px', marginTop: '5px'}}> </i>
            <span style={{ float: 'left', padding: '10px', marginTop: '10px'}}>React-Firebase</span>
            <li>
                <Link to={ROUTES.SIGN_IN}> Sign In </Link>
            </li>
            <li>
                <Link to={ROUTES.LANDING}> Landing </Link>
            </li>
        </ul>
    </div>
);

export default Navigation;