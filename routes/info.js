const express = require('express');
const router = express.Router();
const infoController = require('../controllers/InfoController');


router.get('/', infoController.info);
router.post('/create', infoController.create);
router.get('/:id', infoController.info_detail);
router.post('/info_comment', infoController.info_comment);
router.get('/:id/comments', infoController.comments_by_info);
module.exports = router;
