const siteRouter = require('./site');
const coursesRouter = require('./courses');
const accountRouter = require('./account');
const meRouter = require('./me');
const questionRouter = require('./question');
const infoRouter = require('./info');
const searchRouter = require('./search');
var jwt = require('jsonwebtoken');
const sortMiddleware = require('../middleware/sortMiddleware');
const setAccountLocal = require('../middleware/setAccountLocal');
const checkLoginMiddleware = require('../middleware/checkLoginMiddleware');
const helper = require('../views/helper');

function route(app) {
  //helper
  app.locals.account = ""
    app.locals.sum = helper.sum;
    app.locals.sortable = helper.sortable;
    app.locals.loginHeader = helper.loginHeader;

    //middleware
    app.use(sortMiddleware);
    // app.use(setAccountLocal);
   
    // [GET] /account
    app.use('/account',accountRouter);
    // [GET] /courses
    app.use(checkLoginMiddleware);
    app.use('/courses',coursesRouter);
    
    // [GET] /me
    app.use('/me', meRouter);

    // [GET] /question
    app.use('/question', questionRouter);

     // [GET] /info
    app.use('/info', infoRouter);

     // [GET] /search
     app.use('/search', searchRouter);

    // [GET] /
    app.use('/', siteRouter);
}
module.exports = route;
