import React from 'react';

//Firebase
import { withFirebase } from '../components/Firebase';

//Styles
import './styles/sign-out.css';

const SignOutButton = ({ firebase }) => (
    <button type="button" onClick={firebase.doSignOut}>
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);