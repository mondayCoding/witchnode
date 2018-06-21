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
var checkbox_1 = require("../components/checkbox");
var radiobutton_1 = require("../components/radiobutton");
var checkbox_slider_1 = require("../components/checkbox-slider");
var themes = [
    { value: "default", label: "Default UI theme (dark)" },
    { value: "violet", label: "Violet variant" },
    { value: "red", label: "Red variant" },
    { value: "light", label: "Light theme" },
];
var WitchPage = (function (_super) {
    __extends(WitchPage, _super);
    function WitchPage(props) {
        var _this = _super.call(this, props) || this;
        _this.handleThemeChange = function (event) {
            var selectTheme = event.target.value;
            console.log(selectTheme);
            document.getElementById("body").className = selectTheme;
            _this.setState({
                selectedTheme: selectTheme
            });
        };
        _this.state = {
            checkboxTwo: false,
            checkboxOne: true,
            checkboxThree: true,
            optionFour: true,
            selectedTheme: "default"
        };
        return _this;
    }
    WitchPage.prototype.cbHandleChange = function () {
        console.log("changed");
        this.setState({
            checkboxTwo: (this.state.checkboxTwo) ? false : true
        });
    };
    WitchPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "page" },
            React.createElement("h2", null, "this is settings page"),
            React.createElement("p", null, "it has very litle in terms of content"),
            React.createElement("div", { className: "config-wrap" },
                React.createElement("div", { className: "content-centered-md" },
                    React.createElement("h3", null, "select interface theme"),
                    React.createElement("div", { className: "spacing" }),
                    themes.map(function (theme, index) {
                        return React.createElement(radiobutton_1.default, { key: index, id: "themeselect" + index, label: theme.label, value: theme.value, name: "selectedTheme", onChange: _this.handleThemeChange });
                    }),
                    React.createElement("div", { className: "spacing" }),
                    React.createElement("div", { className: "line-thin" }),
                    React.createElement("kbd", { className: "shortcut" }, "Ctrl + D"),
                    React.createElement("kbd", { className: "shortcut" }, "Ctrl + S"),
                    React.createElement("kbd", { className: "shortcut" }, "Ctrl + A"),
                    React.createElement("div", { className: "line-thin" }),
                    React.createElement(checkbox_1.default, { label: "test label", id: "thisID1", defaultChecked: this.state.checkboxTwo, disabled: true, onChange: function () { return _this.cbHandleChange(); } }),
                    React.createElement(checkbox_1.default, { label: "bdfdf", id: "thisID2", defaultChecked: true }),
                    React.createElement(checkbox_1.default, { label: "bdfdf", id: "thisID3", defaultChecked: true }),
                    React.createElement("div", { className: "line-thin" }),
                    React.createElement(checkbox_slider_1.default, { label: "day/night mode", id: "thisID5", defaultChecked: true }),
                    React.createElement(checkbox_slider_1.default, { label: "default to no strings", id: "thisID6", defaultChecked: false }),
                    React.createElement(checkbox_slider_1.default, { label: "nullcheck all values", id: "thisID7", defaultChecked: false }),
                    React.createElement(checkbox_slider_1.default, { label: "null is disabled", id: "thisID8", defaultChecked: true, disabled: true }),
                    React.createElement("div", { className: "line-thin" }),
                    React.createElement(radiobutton_1.default, { id: "radioOne", label: "like cats?", name: "radioTestb" }),
                    React.createElement(radiobutton_1.default, { id: "radioTwo", label: "like dogs?", name: "radioTestb" }),
                    React.createElement(radiobutton_1.default, { id: "radioThree", label: "like gerbils?", name: "radioTestb" })))));
    };
    return WitchPage;
}(React.Component));
exports.default = WitchPage;
//# sourceMappingURL=settingsPage.js.map