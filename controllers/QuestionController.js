const answerModel = require("../models/answerModel");
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
    var question = new questionModel();
    question.user_id = res.locals.account._id;
    question.content = req.body.content;    
    questionModel
      .create(question)
      .then(() => res.redirect("/question"))
      .catch((err) => {
        err;
      });
  }

  //[GET] /question/answers/:slug
  // show câu hỏi và form trả lời
  answers(req, res, next) {
    var slug = req.params.slug;
    questionModel
      .findOne({ slug })
      .then((question) => {
        answerModel
          .findWithDeleted({ question_id: question._id })
          .then((answers) => res.render("question/answer",  { question, answers}))
          .catch((err) => res.status(400).json({ err: "loi server" }));
      })
      .catch((err) => res.status(400).json({ err: "loi server" }));
  }

  
}

module.exports = new QuestionController();
