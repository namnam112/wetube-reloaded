"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoUpload = exports.publicOnlyMiddleWare = exports.protectorMiddleWare = exports.localsMiddleWare = exports.avatarUpload = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var localsMiddleWare = function localsMiddleWare(req, res, next) {
  // res.locals.loggedIn = Boolean(req.seesion.loggedIn)

  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.sexy = "you";
  res.locals.siteName = "WeTube";
  res.locals.loggedInUser = req.session.user || {};
  console.log(req.session.user);
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
};
exports.localsMiddleWare = localsMiddleWare;
var protectorMiddleWare = function protectorMiddleWare(req, res, next) {
  if (req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "Not authorized");
    return res.redirect("/login");
  }
};
exports.protectorMiddleWare = protectorMiddleWare;
var publicOnlyMiddleWare = function publicOnlyMiddleWare(req, res, next) {
  if (!req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "Not authroized");
    return res.redirect("/");
  }
};
exports.publicOnlyMiddleWare = publicOnlyMiddleWare;
var avatarUpload = (0, _multer["default"])({
  dest: "uploads/avatars/",
  limits: {
    fileSize: 300000
  }
});
exports.avatarUpload = avatarUpload;
var videoUpload = (0, _multer["default"])({
  dest: "uploads/vidoes/",
  limits: {
    fileSize: 10000000
  }
});
exports.videoUpload = videoUpload;