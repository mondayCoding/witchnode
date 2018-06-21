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
var User = function (props) {
    var name = props.name, active = props.active, onClick = props.onClick, localUser = props.localUser;
    var userClass = "selectable-user takeable";
    if (active) {
        userClass = "selectable-user taken";
        if (name === localUser) {
            userClass = "selectable-user owned";
        }
    }
    else {
        userClass = "selectable-user takeable";
    }
    return (React.createElement("div", { className: userClass, onClick: function () { return onClick(name); } },
        React.createElement("div", { className: "user-initial" }, name.charAt(0)),
        React.createElement("div", { className: "user-name" }, name)));
};
var SelectUserMenu = (function (_super) {
    __extends(SelectUserMenu, _super);
    function SelectUserMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectUserMenu.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, statusList = _a.statusList, localUser = _a.localUser;
        return (React.createElement("article", { className: "user-selection" }, statusList.map(function (user, index) {
            return (React.createElement(User, { name: user.name, key: index, active: user.active, localUser: localUser, onClick: onClick }));
        })));
    };
    return SelectUserMenu;
}(React.Component));
exports.default = SelectUserMenu;
//# sourceMappingURL=selectUserMenu.js.map