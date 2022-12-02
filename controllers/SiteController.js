var coursesModel = require('../models/coursesModel')
class SiteController {
    //[GET] /
    index(req, res, next) {
        coursesModel.findWithDeleted({})
        .then(courses => res.render('courses', {courses})
        )
        .catch(err => res.status(400).json({err: 'loi server'}));
    }
}

module.exports = new SiteController;