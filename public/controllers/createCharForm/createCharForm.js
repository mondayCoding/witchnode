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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var step1_1 = require("../../controllers/createCharForm/step1");
var step2_1 = require("../../controllers/createCharForm/step2");
var step3_1 = require("../../controllers/createCharForm/step3");
var step4_1 = require("../../controllers/createCharForm/step4");
var button_1 = require("../../components/button");
var annoModule_1 = require("../../utils/annoModule");
var CurrentStep = function (props) {
    var step = props.formstate.step;
    var formstate = props.formstate;
    var onChange = props.onChange;
    switch (step) {
        case 1:
            return (React.createElement(step1_1.default, __assign({}, formstate, { onChange: onChange })));
        case 2:
            return (React.createElement(step2_1.default, __assign({}, formstate, { onChange: onChange })));
        case 3:
            return (React.createElement(step3_1.default, __assign({}, formstate, { onChange: onChange })));
        case 4:
            return (React.createElement(step4_1.default, __assign({}, formstate, { onChange: onChange })));
        default:
            return (React.createElement(step1_1.default, __assign({}, formstate, { onChange: onChange })));
    }
};
var WizardPath = function (props) {
    var step = props.step, maxStep = props.maxStep;
    var steps = [];
    for (var i = 1; i < maxStep + 1; i++) {
        if (i === step) {
            steps.push(React.createElement("li", { className: "current", key: i },
                React.createElement("div", { className: "bullet" })));
        }
        else {
            steps.push(React.createElement("li", { key: i },
                React.createElement("div", { className: "bullet" })));
        }
    }
    return (React.createElement("ol", { className: "wizard-path" }, steps.map(function (item, index) { return item; })));
};
var UserForm = (function (_super) {
    __extends(UserForm, _super);
    function UserForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            step: 1,
            maxStep: 4,
            name: "",
            lastname: "",
            pass: "",
            passrepeat: "",
            location: "",
            color: "",
            count: "",
            gender: "",
            email: "",
            opinionCats: "",
            opinionDogs: "",
            opinionHouses: "",
            opinionLangues: "",
            youLikeRadio: "",
            selection: "en",
            allowMarketing: false
        };
        _this.onChangeHandler = function (event) {
            var _a;
            var target = event.target;
            var value = (target.type === "checkbox") ? target.checked : target.value;
            var name = target.name;
            _this.setState((_a = {},
                _a[name] = value,
                _a));
        };
        return _this;
    }
    UserForm.prototype.goToNext = function () {
        var step = this.state.step;
        if (step !== this.state.maxStep) {
            this.setState({ step: step + 1 });
        }
        else {
            annoModule_1.default.announce("form complete");
        }
    };
    UserForm.prototype.goToPrevious = function () {
        var step = this.state.step;
        if (step !== 1) {
            this.setState({ step: step - 1 });
        }
        else {
            annoModule_1.default.announce("returned to start");
        }
    };
    UserForm.prototype.onsubmitHandler = function (event) {
        event.preventDefault();
    };
    UserForm.prototype.render = function () {
        var _this = this;
        var onSubmit = function (event) { return _this.onsubmitHandler(event); };
        var step = this.state.step;
        var maxStep = this.state.maxStep;
        return (React.createElement("section", { className: "content-centered-md" },
            React.createElement("form", { className: "userform spacing", onSubmit: onSubmit },
                React.createElement("div", { className: "spacing" }),
                React.createElement(WizardPath, { step: step, maxStep: maxStep }),
                React.createElement("div", { className: "spacing" }),
                React.createElement("div", { className: "line-thin" }),
                React.createElement("div", { className: "row-flex spaced" },
                    React.createElement(button_1.default, { buttonText: "return", type: "button", onClick: function () { return _this.goToPrevious(); } }),
                    React.createElement(button_1.default, { buttonText: "next", type: "button", onClick: function () { return _this.goToNext(); } })),
                React.createElement("div", { className: "line-thin" }),
                React.createElement("div", { className: "spacing" }),
                React.createElement(CurrentStep, { formstate: this.state, onChange: this.onChangeHandler }),
                React.createElement("div", { className: "spacing" }),
                React.createElement("div", { className: "line-thin" }))));
    };
    return UserForm;
}(React.Component));
exports.default = UserForm;
//# sourceMappingURL=createCharForm.js.map