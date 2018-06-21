"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Line = (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.render = function () {
        var message = this.props.message;
        var userClass;
        switch (message.userType) {
            case 0:
                userClass = "line user-system";
                break;
            case 1:
                userClass = "line user-admin";
                break;
            default:
                userClass = "line";
                break;
        }
        var parsedTime = new Date(message.timestamp);
        var minutes = (parsedTime.getMinutes() < 10) ? "0" + parsedTime.getMinutes() : parsedTime.getMinutes();
        var hours = (parsedTime.getHours() < 10) ? "0" + parsedTime.getHours() : parsedTime.getHours();
        var stamp = hours + ":" + minutes;
        return (React.createElement("div", { className: userClass },
            React.createElement("div", { className: "line-user" },
                React.createElement("i", { className: "fa fa-user" }),
                message.user),
            React.createElement("div", { className: "line-message" }, message.content),
            React.createElement("div", { className: "line-timestamp" }, stamp)));
    };
    return Line;
}(React.Component));
exports.default = Line;
//# sourceMappingURL=line.js.map