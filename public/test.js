const User = require('../server/model/user');
User.bulkCreate([
    {username: 'John tam',email: 'John.tam@gmail.com',summary: 'good nice well great',avatar: 'john_tam.jpg'},
    {username: 'Tim chen',email: 'Tim.chen@gmail.com',summary: 'good nice well great',avatar: 'tim_chen.jpg'},
    {username: 'John Ha',email: 'John.Ha@gmail.com',summary: 'good nice well great',avatar: 'john_ha.jpg'},
    {username: 'Martin ye',email: 'Martin.ye@gmail.com',summary: 'good nice well great',avatar: 'marin_ye.jpg'},
    {username: 'Mr Wong',email: 'wongs@gmail.com',summary: 'good nice well great',avatar: 'mr_wong.jpg'}
]);
//2018-05-16T06:46:29.000Z
