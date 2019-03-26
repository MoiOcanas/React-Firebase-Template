import React from 'react';

//Router
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

//Styles 
import './styles/side-bar.css';

const SideBar = () => (
    <div className="sidenav">      
        <Link to={ROUTES.HOME}> Home </Link>
        <Link to={ROUTES.ACCOUNT}> Account </Link> 
        <Link to={ROUTES.ADMIN}> Admin Page </Link>
    </div>
);

export default SideBar;