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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ImgCaption = (function (_super) {
    __extends(ImgCaption, _super);
    function ImgCaption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImgCaption.prototype.render = function () {
        var _a = this.props, src = _a.src, captionText = _a.captionText, captionTitle = _a.captionTitle, size = _a.size, rest = __rest(_a, ["src", "captionText", "captionTitle", "size"]);
        var imageSize = size || "all";
        var captionClassname = "imageCaptionWrapper " + imageSize;
        return (React.createElement("figure", { className: captionClassname },
            React.createElement("img", __assign({ className: "imageWithCaption", alt: captionText, src: src }, rest)),
            React.createElement("figcaption", { className: "imageCaption" },
                captionTitle && React.createElement("b", null, captionTitle),
                captionText && React.createElement("span", null, captionText))));
    };
    return ImgCaption;
}(React.Component));
exports.default = ImgCaption;
//# sourceMappingURL=imgCaption.js.map