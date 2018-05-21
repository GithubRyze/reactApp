import React, { Component } from 'react';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.selectUser = this.selectUser.bind(this);
        let color = '#f1f1f9';
        if (this.props.user.isChecked) {
            color = '#ffffff';
        }
        this.state = {
            style: {
                display: 'block',
                backgroundColor: color,
                height: 150,
                borderRightStyle: 'solid',
                borderRightWidth: 1,
                borderRightColor: '#b3b3b6',
                borderBottomStyle: 'solid',
                borderBottomWidth: 1,
                borderBottomColor: '#b3b3b6'
            },
        };
    }
    componentWillReceiveProps(preProps, nextProps) {
        let color = '#f1f1f9';
        if (preProps.user.isChecked) {
            color = '#ffffff';
        }
        this.setState({
            style: {
                display: 'block',
                backgroundColor: color,
                height: 150,
                borderRightStyle: 'solid',
                borderRightWidth: 1,
                borderRightColor: '#b3b3b6',
                borderBottomStyle: 'solid',
                borderBottomWidth: 1,
                borderBottomColor: '#b3b3b6'
            },
        })
    }

    static defaultProps = {
        user: {
            avatar: '',
            name: 'username',
            email: 'email'
        }
    }
    selectUser() {
        if (this.props.selectUser) {
            this.props.selectUser(this.props.user, this.props.index);
        }
    }
    render() {
        let url = 'http://localhost:8001/image/' + this.props.user.avatar;
        return (
            <div style={this.state.style} onClick={this.selectUser} >
                <div className="div-arrow">
                    <img className="arrow" />
                </div>
                <div className="div-avatar">
                    <img className="div-user-avatar" src={url} />
                </div>
                <div className="div-user-profile">
                    <span className="user-name">{this.props.user.username}</span>
                    <span className="user-email" >{this.props.user.email}</span>
                </div>
            </div>
        );
    }
} 