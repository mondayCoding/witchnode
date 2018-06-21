"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_sortable_hoc_1 = require("react-sortable-hoc");
var sortItem_1 = require("./sortItem");
var list = function (props) {
    return (React.createElement("div", { className: "flex-table" }, props.items.map(function (mission, index) { return (React.createElement(sortItem_1.default, { key: "item-" + index, index: index, mission: mission, onActivation: function () { return props.updateModal(mission); }, onRemove: function () { return props.removeItem(mission); }, toggle: function () { return props.toggle(mission); } })); })));
};
var SortableList = react_sortable_hoc_1.SortableContainer(list);
exports.default = SortableList;
//# sourceMappingURL=sortableList.js.map