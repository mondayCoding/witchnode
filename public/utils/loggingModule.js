"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annoModule_1 = require("./annoModule");
var Logging = (function () {
    function Logging() {
    }
    Logging.LogErrorResponse = function (error) {
        if (error.response) {
            console.warn(error.response.data);
            console.warn(error.response.status);
            console.warn(error.response.headers);
            var status_1 = error.response.status;
            var encoded_data = encodeURI(error.response.data);
            var message = (encoded_data.length < 200) ? error.response.data.replace(/<\/?[^>]+(>|$)/g, "") : "";
            annoModule_1.default.announce("Encountered error on server side. <br> " + message, status_1.toString(), "error");
        }
        else if (error.request) {
            console.warn(error.request);
            annoModule_1.default.announce("Request made to server received no answer", null, "error");
        }
        else {
            console.warn('Error', error.message);
        }
    };
    return Logging;
}());
exports.default = Logging;
//# sourceMappingURL=loggingModule.js.map