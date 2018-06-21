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
var $ = require("jquery");
var Announcement = (function (_super) {
    __extends(Announcement, _super);
    function Announcement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            pageWidth: ""
        };
        _this.updateDimensions = function () {
            _this.setState({
                pageWidth: $(window).width().toString()
            });
        };
        return _this;
    }
    Announcement.prototype.componentWillMount = function () {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    };
    Announcement.prototype.componentWillUnmount = function () {
        window.removeEventListener("resize", this.updateDimensions);
    };
    Announcement.prototype.render = function () {
        return (React.createElement("div", { className: "top-panel" },
            React.createElement("div", { className: "announcement" },
                React.createElement("span", { className: "message" }, this.props.message))));
    };
    return Announcement;
}(React.Component));
exports.default = Announcement;
//# sourceMappingURL=announcement.js.map