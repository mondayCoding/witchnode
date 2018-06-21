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
var createCharForm_1 = require("../controllers/CreateCharForm/createCharForm");
var infotip_1 = require("../components/infotip");
var imgCaption_1 = require("../components/imgCaption");
var CreateCharPage = (function (_super) {
    __extends(CreateCharPage, _super);
    function CreateCharPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateCharPage.prototype.render = function () {
        return (React.createElement("div", { className: "page" },
            React.createElement("div", { className: "content-centered-md" },
                React.createElement("h2", null, "Create Account"),
                React.createElement("h2", { className: "heading sm" }, "fill entire form before asking claiming it doesn't work")),
            React.createElement(createCharForm_1.default, null),
            React.createElement("div", { className: "content-centered-md" },
                React.createElement(infotip_1.default, { message: "This form is creation of it's time and repsesents no values of any kind" }),
                React.createElement(infotip_1.default, { message: "Another tip with no valuable content" }),
                React.createElement(infotip_1.default, { message: "Third one, still useless" }),
                React.createElement(infotip_1.default, { message: "Not even going to bother anymore" }),
                React.createElement(infotip_1.default, { message: "..." }),
                React.createElement(imgCaption_1.default, { src: "../images/blur.jpg", captionText: "This is caption sample for testing imgCaption component. Text here is caption content", size: "sm", captionTitle: "Blur by design" }),
                React.createElement("div", { className: "spacing" }),
                React.createElement(imgCaption_1.default, { src: "../images/abyss.jpg", captionText: "This is caption sample for testing imgCaption component. Text here is caption content", size: "md", captionTitle: "Blur by design" }))));
    };
    return CreateCharPage;
}(React.Component));
exports.default = CreateCharPage;
//# sourceMappingURL=createCharPage.js.map