const express = require("express");
const router = express.Router();
const questionController = require("../controllers/QuestionController");

router.get("/", questionController.index);
router.post("/create", questionController.create);

module.exports = router;