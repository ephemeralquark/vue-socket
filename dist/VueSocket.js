'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VueSocket = function () {
    function VueSocket() {
        _classCallCheck(this, VueSocket);
    }

    _createClass(VueSocket, [{
        key: 'install',
        value: function install(Vue, url, options) {
            if (options === null) {
                options = {};
            }
            var socket = new _socket2.default(url, options);
            Vue.prototype.$socket = socket;
            Vue.socket = socket;
        }
    }]);

    return VueSocket;
}();

exports.default = VueSocket;