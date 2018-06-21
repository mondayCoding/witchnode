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
var react_confirm_1 = require("react-confirm");
var modal_1 = require("./modal");
var Confirmation = (function (_super) {
    __extends(Confirmation, _super);
    function Confirmation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Confirmation.prototype.render = function () {
        var _this = this;
        var _a = this.props, confirmation = _a.confirmation, show = _a.show, proceed = _a.proceed, dismiss = _a.dismiss, cancel = _a.cancel;
        return (React.createElement(modal_1.default, { show: show, heading: "sdasdasd", onClose: cancel },
            confirmation,
            React.createElement("div", { className: "row-flex spaced" },
                React.createElement("button", { className: "themebutton", onClick: function () { return cancel('arguments will be passed to the callback'); } }, "CANCEL"),
                React.createElement("button", { className: "themebutton", onClick: function () { return proceed('same as cancel'); } }, "OK"),
                React.createElement("button", { className: "themebutton", onClick: function () { return console.log(_this.props); } }, "log"))));
    };
    return Confirmation;
}(React.Component));
exports.default = react_confirm_1.confirmable(Confirmation);
//# sourceMappingURL=modal_confirm.js.map