import React from 'react';

//Firebase
import { withFirebase } from './Firebase';

//Styles
import './styles/sign-out.css';

const SignOutButton = ({ firebase }) => (
    <button type="button" id="sign-out-button" onClick={firebase.doSignOut}>
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);