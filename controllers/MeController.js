var coursesModel = require('../models/coursesModel');
class MeController {
    // [GET] /me/store/courses
    storeCourses(req, res, next) {
        coursesModel.countDeleted()
        .then((deleteCount) =>  res.render('me/store-courses', {deleteCount}))
        .catch(next)
    }

    // [GET] /me/store/courses/api
    storeCoursesApi(req, res, next) {
        let page = req.query.page;
        const PAGE_SIZE = 5;
        if (page) {
            page = parseInt(page);
            page = page ? page : 1;
            const PAGE_SKIP = (page - 1) * PAGE_SIZE;
            coursesModel
                .find({})
                .skip(PAGE_SKIP)
                .limit(PAGE_SIZE)
                .then((courses) => {
                    res.json({ courses, PAGE_SKIP });
                })
                .catch(next);
        } else {
            coursesModel
                .find({})
                .then((courses, PAGE_SIZE) => {
                    res.json(courses);
                })
                .catch(next);
        }
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        res.render('me/trash-courses');
    }
    // [GET] /me/trash/courses/api
    trashCoursesApi(req, res, next) {
        let page = req.query.page;
        const PAGE_SIZE = 5;
        if (page) {
            page = parseInt(page);
            page = page ? page : 1;
            const PAGE_SKIP = (page - 1) * PAGE_SIZE;
            coursesModel
                .findDeleted({})
                .skip(PAGE_SKIP)
                .limit(PAGE_SIZE)
                .then((courses) => {
                    res.json({ courses, PAGE_SKIP });
                })
                .catch(next);
        } else {
            coursesModel
                .findDeleted({})
                .then((courses) => {
                    res.json(courses);
                })
                .catch(next);
        }
    }
    Question(req, res, next) {
        return res.json({Name: "Quan"})
    }
    Info(req, res, next) {
        return res.json({Name: "Quan"})
    }

}

module.exports = new MeController();
