module.exports = function setAccountLocal(req, res, next) {
    res.locals.account = '';
    next();
}