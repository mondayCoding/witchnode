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
var axios_1 = require("axios");
var validator = require("validator");
var react_day_picker_1 = require("react-day-picker");
var SimpleReactValidator = require("simple-react-validator");
var input_1 = require("../../components/input");
var button_1 = require("../../components/button");
var annoModule_1 = require("../../utils/annoModule");
var UserForm = (function (_super) {
    __extends(UserForm, _super);
    function UserForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            form: {
                username: "",
                email: "",
                location: "",
                accountNum: "",
                color: ""
            },
            formIsValid: false
        };
        return _this;
    }
    UserForm.prototype.componentWillMount = function () {
        this.validate = new SimpleReactValidator();
        console.log(this.validate);
    };
    UserForm.prototype.onChangeHandler = function (event) {
        var newState = __assign({}, this.state.form);
        newState[event.target.name] = event.target.value;
        this.setState({
            form: newState
        });
        if (this.validate.allValid()) {
            alert('You submitted the form and stuff!');
        }
        else {
            this.validate.showMessages();
            this.forceUpdate();
        }
        if (event.target.name === "username") {
            if (validator.isLength(event.target.value, { min: 4, max: 16 }) || (event.target.value).length === 0) {
                document.querySelector("input[name=" + event.target.name + "]").classList.remove("invalid");
                document.querySelector("input[name=" + event.target.name + "]").parentElement.removeAttribute("data-tooltip-error");
            }
            else if ((event.target.value === "asdasd") || (event.target.value === "mario") || (event.target.value === "asd")) {
                document.querySelector("input[name=" + event.target.name + "]").classList.add("invalid");
                document.querySelector("input[name=" + event.target.name + "]").parentElement.setAttribute("data-tooltip-error", this.props.res.usernameIsTaken);
            }
            else {
                document.querySelector("input[name=" + event.target.name + "]").classList.add("invalid");
                document.querySelector("input[name=" + event.target.name + "]").parentElement.setAttribute("data-tooltip-error", this.props.res.usernameIsInvalid);
            }
        }
        if (event.target.name === "email") {
            if (validator.isEmail(event.target.value) || (event.target.value).length === 0) {
                document.querySelector("input[name=" + event.target.name + "]").classList.remove("invalid");
                document.querySelector("input[name=" + event.target.name + "]").parentElement.removeAttribute("data-tooltip-error");
            }
            else {
                document.querySelector("input[name=" + event.target.name + "]").classList.add("invalid");
                document.querySelector("input[name=" + event.target.name + "]").parentElement.setAttribute("data-tooltip-error", this.props.res.emailIsInvalid);
            }
        }
        if (event.target.name === "accountNum") {
            if (validator.isNumeric(event.target.value) || (event.target.value).length === 0) {
                document.querySelector("input[name=" + event.target.name + "]").classList.remove("invalid");
                document.querySelector("input[name=" + event.target.name + "]").parentElement.removeAttribute("data-tooltip-error");
            }
            else {
                document.querySelector("input[name=" + event.target.name + "]").classList.add("invalid");
                document.querySelector("input[name=" + event.target.name + "]").parentElement.setAttribute("data-tooltip-error", this.props.res.accNumIsInvalid);
            }
        }
    };
    UserForm.prototype.onsubmitHandler = function (event) {
        event.preventDefault();
        axios_1.default.post("/api/forms/userform", { form: this.state.form })
            .then(function (response) {
            annoModule_1.default.announce(response.data, "message from server");
        })
            .catch(function (error) {
            console.log(error.response);
            annoModule_1.default.announce(error.response.data, "Error", "error");
        });
    };
    UserForm.prototype.render = function () {
        var _this = this;
        var username = this.state.form.username;
        var email = this.state.form.email;
        var location = this.state.form.location;
        var accountNum = this.state.form.accountNum;
        var color = this.state.form.color;
        var onChange = function (event) { return _this.onChangeHandler(event); };
        var onSubmit = function (event) { return _this.onsubmitHandler(event); };
        var res = this.props.res;
        return (React.createElement("form", { className: "userform spacing", onSubmit: onSubmit },
            React.createElement("div", { className: "spacing" }),
            React.createElement(input_1.default, { name: "username", label: res.username, value: username, onChange: onChange, id: "nameID" }),
            React.createElement(input_1.default, { name: "email", tooltipInfo: "You wont actually recieve any emails form us... :)", label: res.email, value: email, onChange: onChange, id: "emailID" }),
            React.createElement(input_1.default, { name: "location", tooltipInfo: "Original home country", label: res.location, value: location, onChange: onChange, id: "locationID" }),
            React.createElement(input_1.default, { name: "accountNum", tooltipInfo: "Use only numbers", label: res.accountNum, value: accountNum, onChange: onChange, id: "accountNumID" }),
            React.createElement(input_1.default, { name: "color", label: res.color, value: color, onChange: onChange, id: "colorID" }),
            React.createElement(input_1.default, { name: "color", label: res.color, value: color, onChange: onChange, id: "colorID", validation: validator.isEmail(color) ? null : "this is not valid email" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement(button_1.default, { buttonText: res.submit, type: "submit" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "line-thin" }),
            React.createElement(react_day_picker_1.default, null)));
    };
    return UserForm;
}(React.Component));
exports.default = UserForm;
//# sourceMappingURL=userform.js.map