var questionModel = require("../models/questionModel");
class QuestionController {
  // [GET] /question
  index(req, res, next) {
    questionModel
      .findWithDeleted({})
      .then((questions) => res.render("question", { questions }))
      .catch((err) => res.status(400).json({ err: "loi server" }));
  }

  // [POST] /question/create
  create(req, res, next) {
    req.body.user_id = res.locals.account._id;
    questionModel
      .create(req.body)
      .then(() => res.redirect("/question"))
      .catch((err) => {
        err;
      });
  }

  // [POST] /question/answer/:id
  answer(req, res, next) {
    questionModel
      .findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: {
            answer: {
              user_id: res.locals.account._id,
              content: req.body.content,
            },
          },
        }
      )
      .then(() => res.redirect("/question"))
      .catch((err) => {
        err;
      });
  }
}

module.exports = new QuestionController();
