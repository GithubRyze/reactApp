import React, { Component } from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="div-header">
                <span className="customer">Customer Profile</span>
                <label className="search">Search</label>
                <input className="input" />
            </div>

        );
    }
}