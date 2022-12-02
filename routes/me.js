const express = require('express');
const router = express.Router();
const meController = require('../controllers/MeController');

 //[GET] me/store/courses
router.get('/store/courses', meController.storeCourses);

//[GET] me/store/courses/api
router.get('/store/courses/api', meController.storeCoursesApi);

 //[GET] me/trash/courses
router.get('/trash/courses', meController.trashCourses);

//[GET] me/trash/courses/api
router.get('/trash/courses/api', meController.trashCoursesApi);

module.exports = router;

