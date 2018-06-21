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
var Row = (function (_super) {
    __extends(Row, _super);
    function Row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Row.prototype.render = function () {
        var mission = this.props.mission;
        var toggle = this.props.toggle;
        var createDate = new Date(mission.createDate).toDateString();
        var iconClass = (mission.complete) ? "fa fa-calendar-check-o" : "fa fa-calendar-o";
        var rowClass = (mission.complete) ? "complete table-row" : "table-row";
        return (React.createElement("div", { className: rowClass },
            React.createElement("div", { className: "cell-status", onClick: toggle },
                React.createElement("i", { className: iconClass })),
            React.createElement("div", { className: "cell-auto" }, mission.objective),
            React.createElement("div", { className: "cell-auto" }, createDate),
            React.createElement("div", { className: "cell-60px", onClick: this.props.onClick },
                React.createElement("div", { className: "close-button" }))));
    };
    return Row;
}(React.Component));
exports.default = Row;
//# sourceMappingURL=Row.js.map