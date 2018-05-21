'use strict';
const db = require('../db/db');
const Sequelize = require('sequelize');
const User = db.define('user', {
    id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    username: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: true },
    avatar: { type: Sequelize.STRING, allowNull: true },
    summary: { type: Sequelize.STRING, allowNull: true }
}, { timestamps: true });
User.sync();
module.exports = User;