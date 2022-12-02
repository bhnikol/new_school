const express = require('express');
const router = express.Router();
const searchController = require('../controllers/SearchController');


router.get('/', searchController.index);


module.exports = router;
