const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController');

//[GET] /
router.get('/', siteController.index);

module.exports = router;
