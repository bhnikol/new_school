const siteRouter = require("./site");
const coursesRouter = require("./courses");
const accountRouter = require("./account");
const meRouter = require("./me");
const questionRouter = require("./question");
const commentRouter = require("./comment");
const infoRouter = require("./info");
const searchRouter = require("./search");
var jwt = require("jsonwebtoken");
const sortMiddleware = require("../middleware/sortMiddleware");
const checkLoginMiddleware = require("../middleware/checkLoginMiddleware");
const addUserMiddleware = require("../middleware/addUserMiddleware");
const helper = require("../views/helper");

function route(app) {
  //helper
  // app.locals.sum = helper.sum;
  app.locals.sortable = helper.sortable;
  app.locals.loginHeader = helper.loginHeader;

  //middleware
  app.use(sortMiddleware);
  // app.use(setAccountLocal);

  // [GET] /account
  app.use("/account", accountRouter);
  app.use(addUserMiddleware);
  app.get("/", siteRouter);
  // [GET] /courses
  app.use(checkLoginMiddleware);
  app.use("/courses", coursesRouter);

  // [GET] /me
  app.use("/me", meRouter);

  // [GET] /question
  app.use("/question", questionRouter);
  app.use("/comment", commentRouter);

  // [GET] /info
  app.use("/info", infoRouter);

  // [GET] /search
  app.use("/search", searchRouter);
}
module.exports = route;
