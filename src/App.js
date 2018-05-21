import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import '../src/components/index.css';
import Left from '../src/components/Left';
import Right from '../src/components/Right';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user: {},
            index: 0,
            total: 0
        }
        this.setUsers = this.setUsers.bind(this);
        this.selectUser = this.selectUser.bind(this);
    }

    setUsers(data) {
        const list = JSON.parse(data);
        for (let index in list.rows) {
            if (index == 0) {
                list.rows[index].isChecked = true;
            } else {
                list.rows[index].isChecked = false;
            }
        }
        this.setState({
            users: list.rows,
            user: list.rows[0],
        });
    }
    componentDidMount() {
        const url = 'http://localhost:8001/getUsers';
        const req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    this.setUsers(req.response);
                }
            }
        };
        try {
            req.send();
        } catch (err) {
            alert('NetWork not work');
        }
    }


    selectUser(user, index) {
        const list = this.state.users;
        list[this.state.index].isChecked = false;
        list[index].isChecked = true;
        this.setState({
            user: user,
            users: list,
            index: index
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-content">
                    <Header />
                    <Left users={this.state.users} selectedUser={this.selectUser} total={this.state.total} />
                    <Right user={this.state.user} />
                </div>
            </div>
        );
    }
}
export default App;
