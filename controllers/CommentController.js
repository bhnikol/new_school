var commentModel = require("../models/commentModel");
var coursesModel = require("../models/coursesModel");
class CommentController {
  // [POST] /comment/create/:id
  create(req, res, next) {
    req.body.user_id = res.locals.account._id;
    req.body.course_id = req.params.id;

    commentModel
      .create(req.body)
      .then(() => {
        coursesModel.findOne({ _id: req.params.id }).then((course) => {
          res.redirect(`/courses/${course.slug}`);
        });
      })
      .catch((err) => {
        err;
      });
  }
}

module.exports = new CommentController();
