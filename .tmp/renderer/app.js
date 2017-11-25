"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require("react-router-dom");

var _Login = require("./Login");

var _Login2 = _interopRequireDefault(_Login);

var _Signup = require("./Signup");

var _Signup2 = _interopRequireDefault(_Signup);

var _Rooms = require("./Rooms");

var _Rooms2 = _interopRequireDefault(_Rooms);

var _firebaseBrowser = require("firebase/firebase-browser");

var _firebaseBrowser2 = _interopRequireDefault(_firebaseBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoomList = function RoomList() {
    return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/rooms", component: _Rooms2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/rooms/:roomId", component: _Rooms2.default })
    );
};

var appRouting = _react2.default.createElement(
    _reactRouterDom.HashRouter,
    null,
    _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: "/login", component: _Login2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/signup", component: _Signup2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/rooms", component: RoomList })
    )
);

if (!location.hash.length) {
    location.hash = "#/login";
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvl92HhlyIdzgxfumUbSN9YqnJPHrx3Fk",
    authDomain: "electron-chat-f90d6.firebaseapp.com",
    databaseURL: "https://electron-chat-f90d6.firebaseio.com",
    projectId: "electron-chat-f90d6",
    storageBucket: "",
    messagingSenderId: "359946922364"
};
_firebaseBrowser2.default.initializeApp(config);

_reactDom2.default.render(appRouting, document.getElementById("app"));