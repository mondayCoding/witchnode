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
var react_select_1 = require("react-select");
var input_1 = require("../../components/input");
var checkbox_1 = require("../../components/checkbox");
var radiobutton_1 = require("../../components/radiobutton");
var StepFour = (function (_super) {
    __extends(StepFour, _super);
    function StepFour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepFour.prototype.render = function () {
        var _a = this.props, email = _a.email, allowMarketing = _a.allowMarketing, onChange = _a.onChange, selection = _a.selection, youLikeRadio = _a.youLikeRadio;
        return (React.createElement("section", { className: "" },
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement(input_1.default, { value: email, id: "emailID", label: "Email", name: "email", onChange: onChange }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement(radiobutton_1.default, { id: "radioOne", value: "cats", checked: youLikeRadio === "cats", label: "like cats?", name: "youLikeRadio", onChange: onChange }),
            React.createElement(radiobutton_1.default, { id: "radioTwo", value: "dogs", checked: youLikeRadio === "dogs", label: "like dogs?", name: "youLikeRadio", onChange: onChange }),
            React.createElement(radiobutton_1.default, { id: "radioThree", value: "gerbil", checked: youLikeRadio === "gerbil", label: "like gerbils?", name: "youLikeRadio", onChange: onChange }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement(checkbox_1.default, { checked: allowMarketing, name: "allowMarketing", id: "marketingID", label: "Allow direct marketing (and spam)", onChange: onChange }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement(react_select_1.default, { name: "selection", options: [
                    { value: 'en', label: 'english' },
                    { value: 'fi', label: 'finglish' },
                ] })));
    };
    return StepFour;
}(React.Component));
exports.default = StepFour;
//# sourceMappingURL=step4.js.map