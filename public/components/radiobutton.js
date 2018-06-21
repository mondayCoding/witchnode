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
var Radiobutton = (function (_super) {
    __extends(Radiobutton, _super);
    function Radiobutton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radiobutton.prototype.render = function () {
        var _a = this.props, id = _a.id, label = _a.label, rest = __rest(_a, ["id", "label"]);
        return (React.createElement("div", { className: "rb" },
            React.createElement("input", __assign({ type: "radio", id: id }, rest)),
            React.createElement("label", { htmlFor: id },
                " ",
                label,
                " ")));
    };
    return Radiobutton;
}(React.Component));
exports.default = Radiobutton;
//# sourceMappingURL=radiobutton.js.map