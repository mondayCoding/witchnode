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
var ConfirmationDialog = (function (_super) {
    __extends(ConfirmationDialog, _super);
    function ConfirmationDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listenKeyboard = function (event) {
            if (event.key === 'Escape' || event.keyCode === 27) {
                _this.props.cancel();
            }
        };
        _this.onDialogClick = function (event) {
            event.stopPropagation();
        };
        return _this;
    }
    ConfirmationDialog.prototype.componentDidMount = function () {
        if (this.props.cancel) {
            window.addEventListener('keydown', this.listenKeyboard, true);
        }
    };
    ConfirmationDialog.prototype.componentWillUnmount = function () {
        if (this.props.cancel) {
            window.removeEventListener('keydown', this.listenKeyboard, true);
        }
    };
    ConfirmationDialog.prototype.onOverlayClick = function () {
        this.props.cancel();
    };
    ConfirmationDialog.prototype.render = function () {
        var _a = this.props, confirmation = _a.confirmation, show = _a.show, proceed = _a.proceed, dismiss = _a.dismiss, cancel = _a.cancel, heading = _a.heading;
        if (!this.props.show) {
            return null;
        }
        return (React.createElement("div", { className: "modal-fade", onClick: function () { return cancel(); } },
            React.createElement("div", { className: "modal-box", onClick: this.onDialogClick },
                React.createElement("div", { className: "modal-heading" },
                    heading && React.createElement("h3", { className: "heading" }, heading),
                    React.createElement("button", { onClick: function () { return cancel(); }, type: "button", className: "close-button light noborder" })),
                React.createElement("div", { className: "modal-content-wrap" }, confirmation),
                React.createElement("div", { className: "row-flex spaced" },
                    React.createElement("button", { className: "themebutton", onClick: function () { return cancel(); } }, "Cancel"),
                    React.createElement("button", { className: "themebutton", autoFocus: true, onClick: function () { return proceed(); } }, "Ok")))));
    };
    return ConfirmationDialog;
}(React.Component));
exports.ConfirmationDialog = ConfirmationDialog;
exports.default = ConfirmationDialog;
//# sourceMappingURL=confirm.js.map