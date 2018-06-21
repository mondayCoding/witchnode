"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FormValidation = (function () {
    function FormValidation(validationRules) {
        this.validationRules = validationRules;
    }
    FormValidation.prototype.getDefaultValidatResult = function () {
        var validation = [];
        this.validationRules.map(function (rule) {
            validation[rule.field] = { isValid: true, message: "" };
        });
        return { formIsValid: true, validations: __assign({}, validation) };
    };
    FormValidation.prototype.validate = function (form) {
        var validatResult = this.getDefaultValidatResult();
        this.validationRules.forEach(function (rule) {
            var field = rule.field;
            var method = rule.method;
            if (field in form) {
                console.log("field found in rules we can work with this");
            }
            else {
                console.log("there was ValidationRule with no matching state-field");
            }
            if (validatResult.validations[field].isValid) {
                var formField = form[field];
                var result = rule.rule(formField);
                validatResult.validations[field] = {
                    isValid: result,
                    message: rule.message
                };
            }
        });
        for (var x in validatResult.validations) {
            if (!validatResult.validations[x].isValid) {
                validatResult.formIsValid = false;
            }
        }
        return validatResult;
    };
    return FormValidation;
}());
exports.default = FormValidation;
//# sourceMappingURL=validationModule.js.map