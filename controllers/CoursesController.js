var coursesModel = require("../models/coursesModel");
var commentModel = require("../models/commentModel");
class CoursesController {
  // [GET] /courses
  index(req, res, next) {
    coursesModel
      .findWithDeleted({})
      .then((courses) => res.render("courses", { courses }))
      .catch((err) => res.status(400).json({ err: "loi server" }));
  }

  // [GET] /courses/:slug
  show(req, res, next) {
    var slug = req.params.slug;
    coursesModel
      .findOne({ slug })
      .then((course) => {
        commentModel
          .findWithDeleted({ course_id: course._id })
          .then((comments) => res.render("courses/show", { course, comments }))
          .catch((err) => res.status(400).json({ err: "loi server" }));
      })
      .catch((err) => res.status(400).json({ err: "loi server" }));
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  store(req, res, next) {
    coursesModel
      .create(req.body)
      .then(() => res.redirect("/me/store/courses"))
      .catch((err) => {
        err;
      });
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    coursesModel
      .findOne({ _id: req.params.id })
      .then((course) => res.render("courses/edit", { course }))
      .catch((err) => {
        err;
      });
  }
  // [PUT] /courses/:id
  update(req, res, next) {
    coursesModel
      .updateOne({ _id: req.params.id }, req.body)
      .then((course) => res.redirect("/me/store/courses"))
      .catch((err) => {
        err;
      });
  }

  // [DELETE] /courses/:id
  delete(req, res, next) {
    coursesModel
      .delete({ _id: req.params.id })
      .then((course) => res.json(course))
      .catch((err) => {
        err;
      });
  }

  // [DELETE] /courses/:id/forever
  foreverDelete(req, res, next) {
    coursesModel
      .deleteOne({ _id: req.params.id })
      .then((course) => res.json(course))
      .catch((err) => {
        err;
      });
  }
  // [GET] /courses/:id
  restore(req, res, next) {
    coursesModel
      .restore({ _id: req.params.id })
      .then((course) => res.redirect("back"))
      .catch((err) => {
        err;
      });
  }

  // [POST] /courses/handle-action-courses
  handelActionCourses(req, res, next) {
    switch (req.body.action) {
      case "delete":
        coursesModel
          .delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect("back"))
          .catch((err) => res.json(err));
        break;
      case "delete-forever":
        coursesModel
          .deleteOne({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect("back"))
          .catch((err) => res.json(err));
        break;
      case "restore":
        coursesModel
          .restore({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect("back"))
          .catch((err) => res.json(err));
        break;
      default:
        res.json("Hanh dong khong ton tai");
    }
  }
}

module.exports = new CoursesController();
