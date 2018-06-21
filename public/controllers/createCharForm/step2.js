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
var input_1 = require("../../components/input");
var StepOne = (function (_super) {
    __extends(StepOne, _super);
    function StepOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepOne.prototype.render = function () {
        var _a = this.props, color = _a.color, count = _a.count, gender = _a.gender, location = _a.location, onChange = _a.onChange;
        return (React.createElement("section", null,
            React.createElement(input_1.default, { value: color, id: "colorID", label: "color", name: "color", onChange: onChange }),
            React.createElement(input_1.default, { value: count, id: "countID", label: "count", name: "count", onChange: onChange }),
            React.createElement(input_1.default, { value: gender, id: "genderID", label: "gender", name: "gender", onChange: onChange }),
            React.createElement(input_1.default, { value: location, id: "locationID", label: "location", name: "location", onChange: onChange })));
    };
    return StepOne;
}(React.Component));
exports.default = StepOne;
//# sourceMappingURL=step2.js.map