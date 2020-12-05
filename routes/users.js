const express = require('express');
const router = express.Router();
const Users = require('../models').Users;

/* GET users listing. */
router.get('/', function(req, res, next) {
    Users.findAll().then(e => {
        console.log(e);
        res.send('respond with a resource');
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;
