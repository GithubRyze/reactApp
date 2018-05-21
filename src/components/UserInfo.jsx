import React, { Component } from 'react';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: props.user };
    }

    static defaultProps = {
        user: {
            name: 'username',
            avatar: '',
            email: 'email'
        }
    }
    format = function formatDate(date) {

        let time = new Date(date);
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        return day + '.' + month + '.' + year;
    }

    render() {
        let url = '../image/' + this.props.user.avatar;
        return (
            <div className="div-user-info-detail">
                <div className="user-profile-title">
                    <span className="span-customer-detail-text">Customer Profile Detail</span>
                </div>
                <div >
                    <div className="div-user-profile-avatar">
                        <img className="div-user-big-avatar" src={url} />
                    </div>
                    <div className="div-user-profile-information">
                        <div className="user-detail">
                            <div className="div-customer-name">
                                <lable>Name:</lable><span className="user-profile-customer-name">{this.props.user.username}</span>
                            </div>
                            <div className="div-customer-name">
                                <lable>Summary:</lable ><span className="user-profile-customer-name" >{this.props.user.summary}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div><lable className="update-lable">Last Updated by:</lable><span className="user-profile-customer-name">{
                    this.format(this.props.user.updatedAt)
                }</span></div>
            </div>
        );
    }
} 