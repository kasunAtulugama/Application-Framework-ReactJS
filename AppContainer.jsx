'use stirct'

import React, {Component} from 'react';

import AddUser from './AddUser.jsx';
import Users from './Users.jsx';

export default class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            users: [{
                id: Date.now(),
                name: 'Kasun'
            }]
        }
    }

    addUser(user){
        this.setState(state=>({
            users: state.users.concat({id: Date.now(),name:user.name})
        }))
    }

    render() {
        return <div>
            <h2>Users App</h2>
            <AddUser addUser={user => this.addUser(user)}/>
            <Users users={this.state.users}/>
        </div>
    }
}

