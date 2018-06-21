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
var io = require("socket.io-client");
var annoModule_1 = require("../../utils/annoModule");
var line_1 = require("./line");
var selectUserMenu_1 = require("./selectUserMenu");
var input_plain_1 = require("../../components/input_plain");
var ChatWindow = (function (_super) {
    __extends(ChatWindow, _super);
    function ChatWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            messageHistory: [],
            message: "",
            localUser: "",
            statusList: []
        };
        return _this;
    }
    ChatWindow.prototype.componentDidMount = function () {
        var _this = this;
        this.socket = io.connect("http://localhost:4000");
        this.socket.on("connect", function () {
            console.log("socket reached server");
        })
            .on("joinedRoom", function (response) {
            annoModule_1.default.announce(response.message, null, "info");
            _this.setState({ statusList: response.roomStatus, messageHistory: response.messageHistory });
        })
            .on("warning", function (response) {
            annoModule_1.default.announce(response.message, null, "info");
        })
            .on("usernameGranted", function (response) {
            _this.setState({ localUser: response.username });
        })
            .on("roomRefresh", function (response) {
            annoModule_1.default.announce(response.message, null, "info");
            _this.setState({ statusList: response.roomStatus });
        })
            .on("roomIsFull", function (response) {
            annoModule_1.default.announce(response.message, null, "error");
        })
            .on("newMessages", function (recivedMessage) {
            var messages = _this.state.messageHistory;
            messages.push(recivedMessage);
            _this.setState({ messageHistory: messages });
        });
    };
    ChatWindow.prototype.componentWillUnmount = function () {
        if (this.socket) {
            this.socket.emit("leaveRoom");
        }
    };
    ChatWindow.prototype.connectToChatAs = function (username) {
        this.socket.emit("allowChatAccessAs", { requestToUseName: username });
    };
    ChatWindow.prototype.onKeyUphandler = function (event) {
        if (event.key === "Enter") {
            this.socket.emit("chat", {
                message: this.state.message,
            });
        }
    };
    ChatWindow.prototype.onChangeHandler = function (event) {
        var _a;
        this.setState((_a = {},
            _a[event.target.name] = event.target.value,
            _a));
    };
    ChatWindow.prototype.render = function () {
        var _this = this;
        var placeholder = "chat...";
        var _a = this.state, message = _a.message, statusList = _a.statusList, localUser = _a.localUser;
        var onKeyUp = function (event) { return _this.onKeyUphandler(event); };
        var onChange = function (event) { return _this.onChangeHandler(event); };
        return (React.createElement("article", { className: "chat" },
            React.createElement("section", { className: "chatwindow", id: "chatwindow" },
                React.createElement("div", { className: "chatlog", id: "chatlog" }, this.state.messageHistory.map(function (item, index) {
                    return React.createElement(line_1.default, { key: index, message: item });
                })),
                React.createElement(input_plain_1.default, { value: message, name: "message", onKeyUp: onKeyUp, onChange: onChange, placeholder: placeholder })),
            React.createElement(selectUserMenu_1.default, { onClick: function (data) { return _this.connectToChatAs(data); }, statusList: statusList, localUser: localUser })));
    };
    return ChatWindow;
}(React.Component));
exports.default = ChatWindow;
//# sourceMappingURL=liveSocketChat.js.map