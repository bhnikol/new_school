const express = require("express");
const router = express.Router();
const AnswerController = require("../controllers/AnswerController");


router.post("/create/:id", AnswerController.create);

module.exports = router;