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
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listenKeyboard = function (event) {
            if (event.key === 'Escape' || event.keyCode === 27) {
                _this.props.onClose();
            }
        };
        _this.onDialogClick = function (event) {
            event.stopPropagation();
        };
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        if (this.props.onClose) {
            window.addEventListener('keydown', this.listenKeyboard, true);
        }
    };
    Modal.prototype.componentWillUnmount = function () {
        if (this.props.onClose) {
            window.removeEventListener('keydown', this.listenKeyboard, true);
        }
    };
    Modal.prototype.onOverlayClick = function () {
        this.props.onClose();
    };
    Modal.prototype.render = function () {
        var onClose = this.props.onClose;
        var onDialogClick = this.onDialogClick;
        if (!this.props.show) {
            return null;
        }
        return (React.createElement("div", { className: "modal-fade", onClick: onClose },
            React.createElement("div", { className: "modal-box", onClick: onDialogClick },
                React.createElement("div", { className: "modal-heading" },
                    React.createElement("h3", { className: "heading" }, this.props.heading),
                    React.createElement("button", { onClick: onClose, type: "button", className: "close-button light noborder" })),
                React.createElement("div", { className: "modal-content-wrap" }, this.props.children))));
    };
    return Modal;
}(React.Component));
exports.default = Modal;
//# sourceMappingURL=modal.js.map