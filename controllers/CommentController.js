var commentModel = require("../models/commentModel");
class CommentController {
  // [GET] /comment/:id
  index(req, res, next) {
    commentModel
      .findWithDeleted({ course_id: req.params.id })
      .then((comment) => res.render("comment", { comment }))
      .catch((err) => res.status(400).json({ err: "loi server" }));
  }

  // [POST] /comment/create/:id
  create(req, res, next) {
    req.body.user_id = res.locals.account._id;
    req.course_id = req.params.id;
    commentModel
      .create(req.body)
      .then(() => res.redirect("/comment"))
      .catch((err) => {
        err;
      });
  }
}

module.exports = new CommentController();
