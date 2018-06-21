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
var react_select_1 = require("react-select");
var LangSelect = (function (_super) {
    __extends(LangSelect, _super);
    function LangSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LangSelect.prototype.render = function () {
        var lang = this.props.lang;
        var onChange = this.props.onChange;
        return (React.createElement("div", { className: "spacing" },
            React.createElement(react_select_1.default, { name: "lang-field-name", value: lang, onChange: onChange, options: [
                    { value: 'en', label: 'english' },
                    { value: 'fi', label: 'finglish' },
                ] })));
    };
    return LangSelect;
}(React.Component));
exports.default = LangSelect;
//# sourceMappingURL=langSelect.js.map