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
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            date: new Date()
        };
        return _this;
    }
    Timer.prototype.componentDidMount = function () {
        var _this = this;
        this.statetimer = setInterval(function () { return _this.tick(); }, 1000);
    };
    Timer.prototype.componentWillUnmount = function () {
        clearInterval(this.statetimer);
    };
    Timer.prototype.tick = function () {
        this.setState({
            date: new Date()
        });
    };
    Timer.prototype.render = function () {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var lang = (this.props.lang === "fi") ? "fi-FI" : "en-EN";
        return (React.createElement("div", { className: "time-block" },
            React.createElement("div", { className: "time-content" },
                React.createElement("h3", null, this.state.date.toLocaleDateString(lang, options)))));
    };
    return Timer;
}(React.Component));
exports.default = Timer;
;
//# sourceMappingURL=timer.js.map