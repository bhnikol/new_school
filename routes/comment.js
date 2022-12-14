const express = require("express");
const router = express.Router();
const commentController = require("../controllers/CommentController");

router.post("/create/:id", commentController.create);

module.exports = router;
