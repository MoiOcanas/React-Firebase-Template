import React, { Component } from 'react';

//Styles
import './styles/results.css';

//Components
import SideBar from './SideBar';

//Firebase
import 'firebase/database';
import app from 'firebase/app';
import firebase from 'firebase';

class Results extends Component {
    constructor() {
        super();

        this.state = {
            results: []
        };

        this.db = app.database();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount = () => {
        let requestRef = firebase.database().ref('requests');
        requestRef.on('child_added', snapshot => {
            this.setState({ results: snapshot.val() });
            console.log(this.state.results)
        });
    }

    render() {
        return (
            <div>
                <SideBar />
                <div className="main-container-results">
                    <table className="form-container-results">
                        <h1 className="results-title">Results</h1>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Savings</th>
                        </tr>
                        <tr>
                            <td>Peter</td>
                            <td>Griffin</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>Lois</td>
                            <td>Griffin</td>
                            <td>$150</td>
                        </tr>
                        <tr>
                            <td>Joe</td>
                            <td>Swanson</td>
                            <td>$300</td>
                        </tr>
                        <tr>
                            <td>Cleveland</td>
                            <td>Brown</td>
                            <td>$250</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Results;