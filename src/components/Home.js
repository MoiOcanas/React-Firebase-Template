import React from 'react';

//Auth
import { withAuthorization } from './Session';

//Components
import SideBar from './SideBar';

//Styles
import './styles/home.css';

const HomePage = () => (
    <div className="main-container-home">
    <SideBar />
        <h1>Home Page</h1>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);