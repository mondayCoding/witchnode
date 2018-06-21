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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = true;
        return _this;
    }
    Main.prototype.setTheme = function () {
        var link = document.getElementById("stylelink");
        if (this.theme) {
            link.href = "/stylesheets/style_light.min.css";
            this.theme = !this.theme;
        }
        else {
            link.href = "/stylesheets/style.min.css";
            this.theme = !this.theme;
        }
    };
    Main.prototype.render = function () {
        var _this = this;
        return (React.createElement("footer", { className: "footer" },
            React.createElement("a", { href: "https://github.com/mondayCoding/witchnode" },
                React.createElement("span", null, "code lives "),
                React.createElement("i", { className: "fas fa-heart" }),
                React.createElement("span", null, " and dies with ")),
            React.createElement("i", { onClick: function () { return _this.setTheme(); }, className: "fas fa-coffee" })));
    };
    return Main;
}(React.Component));
exports.default = Main;
//# sourceMappingURL=footer.js.map