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


const NavigationAuth = () => {
    function showNav() {
        let x = document.getElementById("navTo");
        if (x.className === "main-navbar") {
            x.className += " responsive";
        } else {
            x.className = "main-navbar";
        }
    }

    return (

        <div>
            <ul id="navTo">
                <span><SignOutButton /></span>
                <span onClick={showNav}><Link to={ROUTES.HOME} id="navItem"> Home </Link></span>
                <span onClick={showNav}><Link to={ROUTES.ACCOUNT} id="navItem"> Account </Link></span>
                <span onClick={showNav}><Link to={ROUTES.ADMIN} id="navItem"> Admin Page </Link></span>
                <span onClick={showNav}><Link to={ROUTES.REQUEST} id="navItem"> Make a request </Link></span>
                <span onClick={showNav}><Link to={ROUTES.RESULTS} id="navItem"> Results </Link></span>
                <a href="javascript:void(0);" onClick={showNav} className="icon" id="navItem">
                    <i className="fas fa-bars"></i>
                </a>
            </ul>
        </div>

    );
};


const NavigationNonAuth = () => (
    <div>
        <ul>
            <i className="fab fa-react fa-2x" style={{ float: 'left', padding: '10px', marginLeft: '5px', marginTop: '5px' }}> </i>
            <span style={{ float: 'left', padding: '10px', marginTop: '10px' }}>React-Firebase</span>
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