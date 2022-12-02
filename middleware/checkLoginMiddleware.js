var jwt = require('jsonwebtoken');
var accountModel = require('../models/accountModel')
module.exports = function checkLogin(req, res, next) {
    console.log('check login middleware');
    try {
        var token = req.cookies.token;
        var data = jwt.verify(token, 'pwd');
        accountModel.findOne({ _id: data._id })
            .then((account) => {
                if (account) {
                    res.locals.account = account;;
                    next();
                } else {
                    res.json('tai khoan khong hop le');
                }
            })
            .catch((err) => {
                res.json('loi dang nhap');
            });
    } catch (error) {
        console.log(error)
        res.redirect('/account');
    }
}