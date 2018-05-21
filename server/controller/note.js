'use strict';
const Note = require('../model/note');
module.exports = {

    addNote: function (req, res, next) {
        //console.log('addNote::'+ JSON.stringify(req.body));
        //console.log('addNote::'+ req.body.noteDescription );
        if (!req.body.noteName || !req.body.noteDescription) {
            res.status(200).end('noteName or noteDescription is empty');
            return;
        }
        const note = {
            user_id: req.body.user_id,
            notename: req.body.noteName,
            notedescription: req.body.noteDescription
        }
        Note.create(note).then(note => {
            if (note) {
                const result = {
                    code: 200,
                    msg: 'success',
                    data: note
                }
                res.status(200).end(JSON.stringify(result));
                return;
            }
            const result = {
                code: 205,
                msg: 'failed',
            }
            res.status(200).end(JSON.stringify(result));
        }).catch(err => {
            const result = {
                code: 205,
                msg: 'failed',
            }
            res.status(200).end(JSON.stringify(result));
            throw new Error(err);
        })

    },

    deleteNote: (req, res, next) => {
        let id = req.query.id;
        Note.destroy({
            where: { id: id }
        }).catch(err => {
            const result = {
                code: 205,
                msg: 'Delete failed',
            }
            res.status(200).end(JSON.stringify(result));
            throw new Error(err);
        }).then(note => {
            const result = {
                code: 200,
                msg: 'Delete success',
                date: note
            }
            res.status(200).end(JSON.stringify(result));
        });
    },

    queryNotes: function (req, res, next) {
        //console.log('addNote::'+ JSON.stringify(req.query) );
        const limit = 2;
        const offset = req.query.offset * limit || 0;
        Note.findAndCountAll({
            where: {
                user_id: req.query.user_id
            },
            limit: limit,
            offset: offset,
            order: [['id', 'DESC'],
            ]
        }).then(result => {
            if (result) {
                const rd = {
                    message: 'success',
                    total: result.count,
                    rows: result.rows
                };
                res.status(200).end(JSON.stringify(rd));
            } else {
                res.status(200).end('Not found records');
            }
        }).catch(err => {
            res.status(200).end(err.message);
        });
    }
};
