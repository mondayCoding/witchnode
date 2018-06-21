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
var navigation_1 = require("./navigation");
var main_1 = require("./main");
var footer_1 = require("./footer");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.componentDidMount = function () {
        document.addEventListener("keyup", function (event) {
            if (event.altKey && event.keyCode === 75) {
                console.log("alt + k pressed");
            }
        });
    };
    Layout.prototype.render = function () {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", { className: "body-layout" },
                React.createElement("div", { className: "content-layout" },
                    React.createElement(navigation_1.default, null),
                    React.createElement(main_1.default, null)),
                React.createElement(footer_1.default, null))));
    };
    return Layout;
}(React.Component));
module.exports = Layout;
//# sourceMappingURL=layout.js.map