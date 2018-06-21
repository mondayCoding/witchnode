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
var input_1 = require("../../components/input");
var button_1 = require("../../components/button");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _a = this.props, value = _a.value, onKeyUp = _a.onKeyUp, onBtnClick = _a.onBtnClick, onChange = _a.onChange, disableState = _a.disableState, children = _a.children;
        return (React.createElement("div", null,
            React.createElement("div", { className: "line-thin" }),
            React.createElement("div", { className: "flex-row-table" },
                React.createElement(input_1.default, { id: "takeNewBtn", value: value, label: "description of new quest", onKeyUp: onKeyUp, onChange: onChange }),
                React.createElement(button_1.default, { onClick: onBtnClick, buttonText: "Add", className: (disableState) ? "btn-green disabled" : "btn-green" })),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "line-thin" }),
            React.createElement("div", { className: "flex-table" }, children),
            React.createElement("div", { className: "line-thin" })));
    };
    return Table;
}(React.Component));
exports.default = Table;
//# sourceMappingURL=Table.js.map