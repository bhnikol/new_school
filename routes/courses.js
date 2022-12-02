const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/CoursesController");

// [GET] /courses
router.get("/", coursesController.index);

// [GET] /courses/create
router.get("/create", coursesController.create);

// [POST] /courses/store
router.post("/store", coursesController.store);

// [POST] /courses/handle-action-courses
router.post("/handle-action-courses", coursesController.handelActionCourses);
// [GET] /courses/:id/edit
router.get("/:id/edit", coursesController.edit);

// [GET] /courses/:id/restore
router.get("/:id/restore", coursesController.restore);

// [PUT] /courses/:id
router.put("/:id", coursesController.update);

// [DELETE] /courses/:id
router.delete("/:id", coursesController.delete);

// [DELETE] /courses/:id/forever
router.delete("/:id/forever", coursesController.foreverDelete);

// [GET] /courses/:slug
router.get("/:slug", coursesController.show);

module.exports = router;
