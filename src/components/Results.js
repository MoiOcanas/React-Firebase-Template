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
        let arryRes = [];
        let requestRef = firebase.database().ref('requests').orderByKey().limitToLast(100);
        requestRef.on('child_added', snapshot => {
            arryRes.push({
                name: snapshot.val().name,
                email: snapshot.val().email,
                message: snapshot.val().message
            })
            this.setState({
                results: arryRes
            })
        });
    }

    render() {
        const { results } = this.state;
        return (
            <div>
                <SideBar />
                <div className="main-container-results">
                    <table className="form-container-results">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    results.map((res, i) => {
                                    return <tr key={i}>
                                                <td>{res.name}</td>
                                                <td>{res.email}</td>
                                                <td>{res.message}</td>
                                            </tr>
                                    
                                })
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Results;