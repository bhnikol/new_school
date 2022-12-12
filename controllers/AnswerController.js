const answerModel = require("../models/answerModel");
const questionModel = require("../models/questionModel");

class AnswerController{
    //Post câu trả lời
    create(req, res, next) {
        req.body.user_id = res.locals.account._id;
        req.body.user_name = res.locals.account.username;
        req.body.question_id = req.params.id;
        
        answerModel
            .create(req.body)
            .then(() =>  {
                questionModel.findOne({_id : req.params.id})
                .then(question =>  {
                    res.redirect(`/question/answer/${question.slug}`);
            });
            })
            .catch((err) => {
                err;
            });
    }
}
module.exports = new AnswerController();