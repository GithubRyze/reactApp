
const Note = require('../controller/note');
const User = require('../controller/user')
var express = require('express');
var router = express.Router();
router.post('/addNote', Note.addNote);
router.get('/deleteNote', Note.deleteNote);
router.get('/queryNotes', Note.queryNotes);
router.get('/getUsers', User.queryUsers);
module.exports = router;
