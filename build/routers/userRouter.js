"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _userController = require("../controllers/userController.js");
var _middleware = require("../middleware.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userRouter = _express["default"].Router();
userRouter.get(":remove", _userController.remove);
userRouter.route("/edit").all(_middleware.protectorMiddleWare).get(_userController.getedit).post(_middleware.avatarUpload.single("avatar"), _userController.postedit);
userRouter.get("/logout", _middleware.protectorMiddleWare, _userController.logout);
userRouter.get("/github/start", _userController.startGitHubLogin);
userRouter.get("/github/finish", _userController.finishGithubLogin);
userRouter.get("/:id", _userController.see);
userRouter.route("/change-password").all(_middleware.protectorMiddleWare).get(_userController.getChagePassword).post(_userController.postChagePassword);
var _default = userRouter;
exports["default"] = _default;