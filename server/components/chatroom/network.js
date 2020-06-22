const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const auth = require('../../middleware/auth');

const router = express.Router();

router.get('/', auth, function(req, res) {
    controller.listChats(req.user.id)
    .then((users) => {
        response.success(req, res, users, 200);
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e);
    })
});

router.post('/', auth, function(req, res) {
    controller.addChat([req.user.id, ...req.body.users], req.body.chatname)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(e => {
        response.error(req, res, 'Invalid data', 400, 'Controller error');
    });
});


module.exports = router;