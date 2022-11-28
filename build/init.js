"use strict";

require("regenerator-runtime");
require("dotenv/config");
require("./db.js");
require("./models/Video.js");
require("./models/User.js");
require("./models/Comment.js");
var _server = _interopRequireDefault(require("./server.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 4000;
var handleListening = function handleListening() {
  return console.log("");
};
_server["default"].listen(PORT, handleListening);