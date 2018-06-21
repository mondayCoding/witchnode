"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Tip = function (props) {
    var message = props.message;
    return (React.createElement("div", { className: "tip" },
        React.createElement("i", { className: "fas fa-info", tabIndex: 0 }),
        React.createElement("div", { className: "tip-message", "data-tooltip-info": message })));
};
exports.default = Tip;
//# sourceMappingURL=infotip.js.map