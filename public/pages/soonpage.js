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
var todo_soon_1 = require("../controllers/todo-soon/todo-soon");
var SoonPage = (function (_super) {
    __extends(SoonPage, _super);
    function SoonPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoonPage.prototype.render = function () {
        return (React.createElement("div", { className: "page" },
            React.createElement("h2", null, "Soon\u2122 // WiP"),
            React.createElement(todo_soon_1.default, null)));
    };
    return SoonPage;
}(React.Component));
exports.default = SoonPage;
//# sourceMappingURL=soonpage.js.map