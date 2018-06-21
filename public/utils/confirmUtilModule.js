"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_confirm_1 = require("react-confirm");
var confirm_1 = require("./../components/confirm");
var dialog = react_confirm_1.confirmable(confirm_1.default);
var confirm = react_confirm_1.createConfirmation(dialog);
function confirmFunction(confirmation, options, heading) {
    if (options === void 0) { options = {}; }
    if (heading === void 0) { heading = null; }
    return confirm({ confirmation: confirmation, options: options, heading: heading }).then(function () {
        return true;
    }, function () {
        return false;
    });
}
exports.default = confirmFunction;
//# sourceMappingURL=confirmUtilModule.js.map