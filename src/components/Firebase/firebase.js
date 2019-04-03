import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyD_3l_vHaaKrmXoho9-49WICfH-OoZ77po",
  authDomain: "react-firebase-a93b8.firebaseapp.com",
  databaseURL: "https://react-firebase-a93b8.firebaseio.com",
  projectId: "react-firebase-a93b8",
  storageBucket: "react-firebase-a93b8.appspot.com",
  messagingSenderId: "535238636855"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  requests = () => this.db.ref('requests');
}

export default Firebase;