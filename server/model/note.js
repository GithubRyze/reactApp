'use strict';
const db = require('../db/db');
const Sequelize = require('sequelize');

const Note = db.define('note', {
    id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    user_id: { type: Sequelize.INTEGER, allowNull: false },
    notename: { type: Sequelize.STRING, allowNull: false },
    notedescription: { type: Sequelize.STRING, allowNull: false }
}, { timestamps: true });
Note.sync();
module.exports = Note;