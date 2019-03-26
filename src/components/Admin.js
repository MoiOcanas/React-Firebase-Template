import React from 'react';

//Firebase
import { withFirebase } from '../components/Firebase';

//Styles
import './styles/home.css';

//Components
import SideBar from './SideBar';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: []
        };
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    componentDidMount() {
        this.setState({ loading: true });

        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false
            });
        });
    }

    render() {
        const { loading } = this.state;

        return(
            <div className="main-container-home">
                <SideBar />
                <h1>Admin Page</h1>
                {loading && <div>Loading...</div>}
            </div>
        );
    }
}

// const UserList = ({ users }) => (
//     <ul>
//         {
//             users.map(user => (
//                 <li key={users.uid}>
//                     <span>
//                         <strong>ID:</strong> {user.uid}
//                     </span>
//                     <span>
//                         <strong>E-mail:</strong> {user.email}
//                     </span>
//                     <span>
//                         <strong>Username:</strong> {user.username}
//                     </span>
//                 </li>
//             ))
//         }
//     </ul>
// );

export default withFirebase(AdminPage);