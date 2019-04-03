import React from 'react';

//Password forms
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

//Auth
import { withAuthorization, AuthUserContext } from './Session';

//Components
import SideBar from './SideBar';

//Styles
import './styles/home.css';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {
            authUser => (
                <div className="main-container-home">
                    <SideBar />
                    <h1 className="title-form">Hello: {authUser.email}</h1>
                    <p className="title-form">Change your password</p>
                    <PasswordForgetForm />
                    <PasswordChangeForm />
                </div>
            )
        }
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);