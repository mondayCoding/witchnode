"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toastr = require("toastr");
var Anno = (function () {
    function Anno() {
    }
    Anno.clear = function () {
        toastr.clear();
    };
    Anno.announce = function (msg, title, type, options) {
        if (title === void 0) { title = null; }
        if (type === void 0) { type = "success"; }
        if (options === void 0) { options = this.options; }
        toastr[type](msg, title, options);
    };
    Anno.announcePow = function (msg, type) {
        if (type === void 0) { type = "success"; }
        console.log(msg);
        toastr[type](msg);
    };
    Anno.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
    return Anno;
}());
exports.default = Anno;
//# sourceMappingURL=annoModule.js.map