const express = require('express');
const router = express.Router();
const accountController = require('../controllers/AccountController');


// [GET] /account
router.get('/', accountController.index);

// [POST] /account/create
router.post('/login', accountController.login);

// [GET] /account/logout
router.get('/logout', accountController.logout);

// [GET] /account/register
router.get('/create', accountController.create);

// [POST] /account/register
router.post('/register', accountController.register);

module.exports = router;
