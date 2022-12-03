var accountModel = require("../models/accountModel");
var jwt = require("jsonwebtoken");
class AccountController {
  // [GET] /account
  index(req, res, next) {
    res.render("account/login");
  }

  // [POST] /account/ login
  login(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    accountModel
      .findOne({ username, password })
      .then((data) => {
        if (data) {
          var token = jwt.sign(
            { _id: data._id, username: data.username },
            "pwd"
          );
          res.cookie("token", token, {
            expires: new Date(Date.now() + 900000),
          });
          res.redirect("/");
        } else {
          res.json("tai khoan hoac mat khau khong dung");
        }
      })
      .catch((err) => res.json("dang nhap khong thanh cong"));
  }

  // [GET] /account/logout
  logout(req, res, next) {
    res.clearCookie("token");
    res.render("account/login");
  }

  // [GET] /account/create
  create(req, res, next) {
    res.render("account/register");
  }

  // [POST] /account/register
  register(req, res, next) {
    accountModel.findOne({ username: req.body.username }).then((data) => {
      if (data) {
        res.json("ten dang nhap da ton tai");
      }
    });
    accountModel.create(req.body).then((data) => {
      if (data) {
        res.redirect("/account/login");
      } else {
        res.json("dang ky khong thanh");
      }
    });
  }
}

module.exports = new AccountController();
