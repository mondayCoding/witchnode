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
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigation.prototype.render = function () {
        return (React.createElement("nav", { className: "navigation" },
            React.createElement("ul", { className: "navi-list" },
                React.createElement("li", { className: "navi-item" },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/", activeClassName: "active", title: "Dashboard" },
                        React.createElement("i", { className: "fas fa-tachometer-alt" }),
                        React.createElement("span", { className: "pagename" }, "Dashboard"))),
                React.createElement("li", { className: "navi-item" },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/createchar", activeClassName: "active", title: "Create Character" },
                        React.createElement("i", { className: "fa fa-heart" }),
                        React.createElement("span", { className: "pagename" }, "Create Character"))),
                React.createElement("li", { className: "navi-item" },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/soon", activeClassName: "active", title: "Soon\u2122" },
                        React.createElement("i", { className: "fa fa-hashtag" }),
                        React.createElement("span", { className: "pagename" }, "Soon\u2122"))),
                React.createElement("li", { className: "navi-item" },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/missions", activeClassName: "active", title: "Missions" },
                        React.createElement("i", { className: "fa fa-exclamation" }),
                        React.createElement("span", { className: "pagename" }, "Missions"))),
                React.createElement("li", { className: "navi-item" },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/witchchat", activeClassName: "active", title: "covenChat" },
                        React.createElement("i", { className: "fas fa-comment-dots" }),
                        React.createElement("span", { className: "pagename" }, "covenChat"))),
                React.createElement("li", { className: "navi-item" },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/profile", activeClassName: "active", title: "Profile" },
                        React.createElement("i", { className: "fa fa-flask" }),
                        React.createElement("span", { className: "pagename" }, "Profile"))),
                React.createElement("li", { className: "navi-item" },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/settings", activeClassName: "active", title: "Settings" },
                        React.createElement("i", { className: "fa fa-cog" }),
                        React.createElement("span", { className: "pagename" }, "Settings"))),
                React.createElement("li", { className: "navi-item" },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/docs", activeClassName: "active", title: "Documentation" },
                        React.createElement("i", { className: "fa fa-book" }),
                        React.createElement("span", { className: "pagename" }, "Documentation"))),
                React.createElement("li", { className: "navi-item" },
                    React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/apimock", activeClassName: "active", title: "ApiMock" },
                        React.createElement("i", { className: "fa fa-book" }),
                        React.createElement("span", { className: "pagename" }, "Api Mocking"))))));
    };
    return Navigation;
}(React.Component));
exports.default = Navigation;
//# sourceMappingURL=navigation.js.map