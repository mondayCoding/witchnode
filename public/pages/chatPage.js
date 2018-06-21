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
var announcement_1 = require("../controllers/announcement/announcement");
var liveSocketChat_1 = require("../controllers/liveSocketChat/liveSocketChat");
var ChatPage = (function (_super) {
    __extends(ChatPage, _super);
    function ChatPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatPage.prototype.render = function () {
        return (React.createElement("div", { className: "page" },
            React.createElement(announcement_1.default, { message: "We are currently in live mode chat intended only for live users. \r\n                No reqistration required. Your chat history won't be used \r\n                for any nefarious purposes... mostly." }),
            React.createElement("div", { className: "spacing" }),
            React.createElement(liveSocketChat_1.default, null)));
    };
    return ChatPage;
}(React.Component));
exports.default = ChatPage;
//# sourceMappingURL=chatPage.js.map