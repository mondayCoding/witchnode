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
var userform_1 = require("../controllers/UserForm_validation/userform");
var langSelect_1 = require("../controllers/UserForm_validation/langSelect");
var timer_1 = require("../controllers/UserForm_validation/timer");
var annoModule_1 = require("../utils/annoModule");
var resourcess_1 = require("../localization/resourcess");
var WitchPage = (function (_super) {
    __extends(WitchPage, _super);
    function WitchPage(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangeHandler = function (e) {
            console.log("changed lang");
            _this.setState({
                lang: e.value
            });
            resourcess_1.default.setLanguage(e.value);
            annoModule_1.default.announce(resourcess_1.default.formatString(resourcess_1.default.changedLang, resourcess_1.default.lang), resourcess_1.default.changedLangTitle, "info");
        };
        _this.state = {
            lang: "en"
        };
        return _this;
    }
    WitchPage.prototype.componentDidMount = function () {
        resourcess_1.default.setLanguage(this.state.lang);
    };
    WitchPage.prototype.render = function () {
        return (React.createElement("div", { className: "page" },
            React.createElement("div", { className: "wrap-15 margin-1-0" },
                React.createElement("h2", null, resourcess_1.default.welcome),
                React.createElement(langSelect_1.default, { onChange: this.onChangeHandler, lang: this.state.lang })),
            React.createElement("h1", null, resourcess_1.default.header),
            React.createElement("p", null, resourcess_1.default.thisPageIs),
            React.createElement("div", { className: "content-centered" },
                React.createElement("div", { className: "time-wrap" },
                    React.createElement(timer_1.default, { lang: this.state.lang })),
                React.createElement("div", { className: "content-centered-sm" },
                    React.createElement(userform_1.default, { lang: this.state.lang, res: resourcess_1.default })))));
    };
    return WitchPage;
}(React.Component));
exports.default = WitchPage;
//# sourceMappingURL=witchpage.js.map