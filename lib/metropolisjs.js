"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var mathjs = _interopRequire(require("mathjs"));

var Metropolisjs = exports.Metropolisjs = (function () {
    function Metropolisjs() {
        var mindensity = arguments[0] === undefined ? 0 : arguments[0];
        var maxdensity = arguments[1] === undefined ? 10 : arguments[1];

        _classCallCheck(this, Metropolisjs);

        this.mindensity = 0;
        this.maxdensity = 10;
    }

    _createClass(Metropolisjs, {
        fit: {

            //state - initial state
            //startx - initial value
            //q - target distribution
            //n - number of sampels

            value: function fit(state, q, n) {
                var startx = arguments[3] === undefined ? -1 : arguments[3];

                var i = 0;
                var result = [];
                var xcurrent = startx;
                while (i != n) {
                    var x = q(xcurrent);
                    var u = Math.random();
                    var A = mathjs.min(1, state / x);
                    if (u <= A) {
                        xcurrent = x;
                    }
                }
            }
        }
    });

    return Metropolisjs;
})();