"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenvFlow = _interopRequireDefault(require("dotenv-flow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var result = _dotenvFlow["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT || 4040;
var isProduction = process.env.NODE_ENV === 'production';
console.log(isProduction);

if (!isProduction) {
  app.use((0, _morgan["default"])('dev'));
} else {
  app.use((0, _morgan["default"])('combined'));
}

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  return res.send({
    message: 'working!!!'
  });
});
app.listen(port, function () {
  return console.log("App listening on port ".concat(port));
});