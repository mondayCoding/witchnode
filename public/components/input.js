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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var infotip_1 = require("../components/infotip");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var _a = this.props, id = _a.id, value = _a.value, label = _a.label, tooltipError = _a.tooltipError, tooltipInfo = _a.tooltipInfo, validation = _a.validation, rest = __rest(_a, ["id", "value", "label", "tooltipError", "tooltipInfo", "validation"]);
        var inputClass = (value === undefined || value.length > 0) ? "input-text hasContent" : "input-text";
        return (React.createElement("div", { className: inputClass, "data-tooltip-error": tooltipError },
            React.createElement("input", __assign({ type: "text", id: id }, rest, { value: value })),
            React.createElement("label", { htmlFor: id },
                " ",
                label,
                " "),
            React.createElement("span", { className: "bar" }),
            (tooltipInfo) && React.createElement(infotip_1.default, { message: tooltipInfo }),
            (validation) && React.createElement(infotip_1.default, { message: validation })));
    };
    return Input;
}(React.Component));
exports.default = Input;
//# sourceMappingURL=input.js.map