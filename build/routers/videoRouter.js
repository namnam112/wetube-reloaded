"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _videocontroller = require("../controllers/videocontroller.js");
var _middleware = require("../middleware.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var videoRouter = _express["default"].Router();
videoRouter.get("/:id([0-9a-f]{24})", _videocontroller.watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").all(_middleware.protectorMiddleWare).get(_videocontroller.getEdit).post(_videocontroller.postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").all(_middleware.protectorMiddleWare).get(_videocontroller.deleteVideo);
videoRouter.route("/upload").all(_middleware.protectorMiddleWare).get(_videocontroller.getUpload).post(_middleware.videoUpload.fields([{
  name: "video"
}, {
  name: "thumb"
}]), _videocontroller.postUpload);
var _default = videoRouter;
exports["default"] = _default;