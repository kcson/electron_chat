"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RoomItem;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LINK_STYLE = {
    color: "inherit",
    textDecoration: "none"
};

function RoomItem(props) {
    var selected = props.selected;
    var _props$room = props.room,
        description = _props$room.description,
        key = _props$room.key;


    return _react2.default.createElement(
        "div",
        { className: selected ? "list-group-item selected" : "list-group-item" },
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/rooms/' + key, style: LINK_STYLE },
            _react2.default.createElement(
                "div",
                { className: "media-body" },
                _react2.default.createElement(
                    "strong",
                    null,
                    description
                )
            )
        )
    );
}