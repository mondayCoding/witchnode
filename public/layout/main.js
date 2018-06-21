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
var react_router_dom_1 = require("react-router-dom");
var chatPage_1 = require("../pages/chatPage");
var createCharPage_1 = require("../pages/createCharPage");
var dashboard_1 = require("../pages/dashboard");
var docsPage_1 = require("../pages/docsPage");
var missionpage_1 = require("../pages/missionpage");
var settingsPage_1 = require("../pages/settingsPage");
var soonpage_1 = require("../pages/soonpage");
var witchpage_1 = require("../pages/witchpage");
var apiMockPage_1 = require("../pages/apiMockPage");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasError: false
        };
        return _this;
    }
    Main.prototype.componentDidCatch = function (error, info) {
        this.setState({ hasError: true });
        console.error(error);
        console.error(info);
    };
    Main.prototype.render = function () {
        return (React.createElement("main", { className: "main", id: "wrapper" }, (!this.state.hasError) &&
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: dashboard_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/createchar", component: createCharPage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/soon", component: soonpage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/missions", component: missionpage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/witchchat", component: chatPage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/profile", component: witchpage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/settings", component: settingsPage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/docs", component: docsPage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/apimock", component: apiMockPage_1.default }),
                React.createElement(react_router_dom_1.Redirect, { to: "/" }))));
    };
    return Main;
}(React.Component));
exports.default = Main;
//# sourceMappingURL=main.js.map