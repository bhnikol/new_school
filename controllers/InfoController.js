var infoModel = require('../models/infoModel');
class InfoController {
    info(req, res, next) {
        infoModel
            .findWithDeleted({})
            .then((infos) => res.render('info', { infos}))
            .catch((err) => res.status(400).json({ err: 'loi server' }));
    }
    
}

module.exports = new InfoController();
