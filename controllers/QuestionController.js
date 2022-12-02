var questionModel = require('../models/questionModel');
class QuestionController {
    question(req, res, next) {
        questionModel
            .findWithDeleted({})
            .then((questions) => res.render('question', { questions}))
            .catch((err) => res.status(400).json({ err: 'loi server' }));
    }
    
}

module.exports = new QuestionController();
