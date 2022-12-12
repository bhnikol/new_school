var infoModel = require('../models/infoModel');
const info_commentModel = require('../models/info_commentModel');

class InfoController {
    info(req, res, next) {
        infoModel
            .findWithDeleted({})
            .then((infos) => res.render('info', { infos}))
            .catch((err) => res.status(400).json({ err: 'loi server' }));
    }
    //Post data to db
    create(req, res, next) {
        req.body.user_id = res.locals.account._id;
        infoModel
          .create(req.body)
          .then(() => res.redirect("/info"))
          .catch((err) => {
            err;
          });
      }

    //GET data to client info/:id
    info_detail(req, res, next){
        var id = req.params.id;
        infoModel
            .findById(id)
            .then((detail) => res.json({
                id:detail._id,
                description : detail.description,
                image : detail.image,
                name: detail.name
            }) )
            .catch((err) => res.status(400).json({ err: "loi server" }));
    }

    //POST data to info comment
    info_comment(req, res, next){
        req.body.user_name = res.locals.account.username;
        info_commentModel
            .create(req.body)
            .then(() => {
                infoModel.findOne({_id :req.body.info_id })
                .then(info=> {
                    res.json({
                        status: true,
                        message:"Thêm comment info thành công"
                    })
                });
            }).catch((err) => {
                res.json({
                    status: false,
                    message:"Thêm comment info lỗi"
                });
            });
    }
    //Get comment của /info/:id/comments
    comments_by_info(req, res, next){

        info_commentModel
            .findWithDeleted({info_id: req.params.id})
            .then((comments) => res.json({
                status: true,
                message:"Tìm thấy dữ liệu",
                data: comments
            })).catch((err) => {
                res.json({
                    status: false,
                    message:"Thêm comment info lỗi"
                });
            });
    }
}   

module.exports = new InfoController();
