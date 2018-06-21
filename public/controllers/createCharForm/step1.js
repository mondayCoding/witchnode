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
        var _a = this.props, name = _a.name, lastname = _a.lastname, pass = _a.pass, passrepeat = _a.passrepeat, onChange = _a.onChange;
        return (React.createElement("section", null,
            React.createElement(input_1.default, { value: name, id: "NameID", label: "Name", name: "name", onChange: onChange }),
            React.createElement(input_1.default, { value: lastname, id: "LastNameID", label: "Lastname", name: "lastname", onChange: onChange }),
            React.createElement(input_1.default, { value: pass, id: "PassID", label: "Password", name: "pass", onChange: onChange }),
            React.createElement(input_1.default, { value: passrepeat, id: "PassRepeatID", label: "Repeat password", name: "passrepeat", onChange: onChange })));
    };
    return StepOne;
}(React.Component));
exports.default = StepOne;
//# sourceMappingURL=step1.js.map