var jwt = require("jsonwebtoken");
var accountModel = require("../models/accountModel");
module.exports = function checkLogin(req, res, next) {
  var data = jwt.verify(req.cookies.token, "pwd");
  if (data) res.locals.account = data;
  next();
};
