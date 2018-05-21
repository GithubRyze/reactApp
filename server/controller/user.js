'use strict';
const User = require('../model/user');
module.exports = {
  queryUsers: function(req,res,next){
    console.log('queryUsers;;;;;;');
    const limit =  5;
    const offset = req.query.offset * limit || 0;
    User.findAndCountAll({
        limit: limit,
        offset: offset
    }).then(result => {
        if (result){
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
