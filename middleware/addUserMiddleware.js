var jwt = require("jsonwebtoken");
function checkLogin(req, res, next) {
  if (req.cookies.token) {
    var data = jwt.verify(req.cookies.token, "pwd");
    if (data) res.locals.account = data;
    
  }
  next();
}
module.exports = checkLogin;
