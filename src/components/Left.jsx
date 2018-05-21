import React from 'react';
import Profile from '../components/Profile';
import PageIndicate from '../components/PageIndicate';
export default class Left extends React.Component {
    constructor(props) {
        super(props);
        this.selectedUser = this.selectedUser.bind(this);
    }
    static defaultProps = {
        users: [],

    }

    selectedUser(user, index) {
        if (this.props.selectedUser) {
            this.props.selectedUser(user, index);
        }
    }

    render() {
        return (
            <div className="div-left">
                <span className="div-customer-profiles">Customer Profiles</span>
                {
                    this.props.users.map((user, i) => {
                        return (
                            <Profile key={i} user={user} selectUser={this.selectedUser} index={i} />
                        );
                    })
                }
                <PageIndicate pages={this.props.users.size} />
            </div>
        );
    }
}