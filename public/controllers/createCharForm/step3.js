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
var StepThree = (function (_super) {
    __extends(StepThree, _super);
    function StepThree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepThree.prototype.render = function () {
        var _a = this.props, opinionCats = _a.opinionCats, opinionDogs = _a.opinionDogs, opinionHouses = _a.opinionHouses, opinionLangues = _a.opinionLangues, onChange = _a.onChange;
        return (React.createElement("section", null,
            React.createElement(input_1.default, { value: opinionCats, id: "opinionCatsID", label: "Your opinion on cats?", name: "opinionCats", onChange: onChange, validation: (opinionCats === "love") ? null : "wrong answer" }),
            React.createElement(input_1.default, { value: opinionDogs, id: "opinionDogsID", label: "What about dogs?", name: "opinionDogs", onChange: onChange }),
            React.createElement(input_1.default, { value: opinionHouses, id: "opinionHousesID", label: "What dod you think about houses?", name: "opinionHouses", onChange: onChange }),
            React.createElement(input_1.default, { value: opinionLangues, id: "opinionLanguesID", label: "Best programming language?", name: "opinionLangues", onChange: onChange })));
    };
    return StepThree;
}(React.Component));
exports.default = StepThree;
//# sourceMappingURL=step3.js.map