"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../controllers/userController.js");
var _videocontroller = require("../controllers/videocontroller.js");
var _middleware = require("../middleware.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rootRouter = _express["default"].Router();
rootRouter.get("/", _videocontroller.home);
rootRouter.route("/join").all(_middleware.publicOnlyMiddleWare).get(_userController.getJoin).post(_userController.postJoin);
rootRouter.route("/login").all(_middleware.publicOnlyMiddleWare).get(_userController.getLogin).post(_userController.postLogin);
rootRouter.get("/search", _videocontroller.search);
var _default = rootRouter;
exports["default"] = _default;