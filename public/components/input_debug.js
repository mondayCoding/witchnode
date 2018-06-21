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
var annoModule_1 = require("../utils/annoModule");
var InputDEBUG = (function (_super) {
    __extends(InputDEBUG, _super);
    function InputDEBUG() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputDEBUG.prototype.onChange = function (event) {
        console.log("changed input: now => " + event.target.value);
        annoModule_1.default.announce("new state value: " + event.target.value, "this input has no custom onChange handler");
    };
    InputDEBUG.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, value = _a.value, name = _a.name, label = _a.label, onKeyUp = _a.onKeyUp, readonly = _a.readonly, required = _a.required, children = _a.children, disabled = _a.disabled;
        var onChange = this.props.onChange || (function (event) { _this.onChange(event); });
        var inputClass = (value === undefined || value.length > 0) ? "input-text hasContent" : "input-text";
        return (React.createElement("div", { className: inputClass },
            React.createElement("input", { type: "text", id: id, value: value, disabled: disabled, readOnly: readonly, required: required, name: name, onKeyUp: onKeyUp, onChange: onChange }),
            React.createElement("label", { htmlFor: id },
                " ",
                label,
                " "),
            React.createElement("span", { className: "bar" })));
    };
    return InputDEBUG;
}(React.Component));
exports.default = InputDEBUG;
//# sourceMappingURL=input_debug.js.map