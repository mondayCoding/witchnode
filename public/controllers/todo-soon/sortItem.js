"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_sortable_hoc_1 = require("react-sortable-hoc");
var SortHandle = react_sortable_hoc_1.SortableHandle(function () { return React.createElement("i", { className: "fa fa-bars" }); });
var Row = function (_a) {
    var mission = _a.mission, toggle = _a.toggle, onActivation = _a.onActivation, onRemove = _a.onRemove;
    var createDate = new Date(mission.createDate).toDateString();
    var iconClass = (mission.complete) ? "fas fa-calendar" : "fas fa-calendar";
    var rowClass = (mission.complete) ? "complete table-row" : "table-row";
    return (React.createElement("div", { className: rowClass },
        React.createElement("div", { className: "cell-status" },
            React.createElement(SortHandle, null)),
        React.createElement("div", { className: "cell-status", onClick: toggle },
            React.createElement("i", { className: iconClass })),
        React.createElement("div", { className: "cell-auto" },
            React.createElement("a", { className: "item-link", onClick: onActivation }, mission.objective)),
        React.createElement("div", { className: "cell-auto" }, createDate),
        React.createElement("div", { className: "cell-60px", onClick: onRemove },
            React.createElement("div", { className: "close-button" }))));
};
var SortItem = react_sortable_hoc_1.SortableElement(Row);
exports.default = SortItem;
//# sourceMappingURL=sortItem.js.map