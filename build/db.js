"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//mongodb://localhost:27017

_mongoose["default"].connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var handleOpen = function handleOpen() {
  return console.log("Connected To DB");
};
var handleError = function handleError(error) {
  return console.log("DB error" + error);
};
var db = _mongoose["default"].connection;
db.on("error", handleError);
db.once("open", handleOpen);