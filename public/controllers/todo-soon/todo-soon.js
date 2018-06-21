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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_sortable_hoc_1 = require("react-sortable-hoc");
var Table_1 = require("../todo-soon/Table");
var modal_1 = require("../../components/modal");
var sortableList_1 = require("./sortableList");
var ToDo_soon_1 = require("../../api/ToDo_soon");
var confirmUtilModule_1 = require("./../../utils/confirmUtilModule");
var ToDoSoon = (function (_super) {
    __extends(ToDoSoon, _super);
    function ToDoSoon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            quests: [],
            newQuest: "",
            isSubmitDisabled: true,
            modalIsOpen: false,
            modalContent: {
                title: "",
                content: "",
                remove: null
            }
        };
        _this.handleClose = function () {
            _this.setState({ modalIsOpen: false });
        };
        _this.onSortEnd = function (_a) {
            var oldIndex = _a.oldIndex, newIndex = _a.newIndex;
            _this.setState({ quests: react_sortable_hoc_1.arrayMove(_this.state.quests, oldIndex, newIndex) });
            console.log("sorted");
        };
        _this.updateModal = function (item) {
            _this.setState({
                modalContent: {
                    content: item.objective,
                    title: item.objective,
                    remove: function () { return _this.removeMission(item); }
                },
                modalIsOpen: true
            });
        };
        return _this;
    }
    ToDoSoon.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ToDo_soon_1.default.getTodoCollection()];
                    case 1:
                        data = _a.sent();
                        this.setState({ quests: data });
                        return [2];
                }
            });
        });
    };
    ToDoSoon.prototype.clickHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, confirmUtilModule_1.default("Add task called: " + this.state.newQuest)];
                    case 1:
                        if (!_a.sent()) return [3, 3];
                        return [4, ToDo_soon_1.default.addNewItemToCollection({ objective: this.state.newQuest })];
                    case 2:
                        data = _a.sent();
                        this.setState({ quests: data, newQuest: "" });
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    ToDoSoon.prototype.onChangeHandler = function (event) {
        this.setState({
            newQuest: event.target.value,
            isSubmitDisabled: ((event.target.value).length > 2 ? false : true)
        });
    };
    ToDoSoon.prototype.removeMission = function (mission) {
        return __awaiter(this, void 0, void 0, function () {
            var modalIsOpen, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modalIsOpen = this.state.modalIsOpen;
                        if (modalIsOpen) {
                            this.setState({ modalIsOpen: false });
                        }
                        return [4, confirmUtilModule_1.default("Really delete item: " + mission.objective, null, "heading")];
                    case 1:
                        if (!_a.sent()) return [3, 3];
                        return [4, ToDo_soon_1.default.removeFromCollection({ objective: mission.objective, createDate: mission.createDate })];
                    case 2:
                        data = _a.sent();
                        this.setState({ quests: data });
                        return [3, 4];
                    case 3:
                        if (modalIsOpen) {
                            this.setState({ modalIsOpen: true });
                        }
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    ToDoSoon.prototype.enterHandler = function (event) {
        if (event.key === "Enter") {
            this.clickHandler();
        }
    };
    ToDoSoon.prototype.toggleHandler = function (mission) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ToDo_soon_1.default.toggleHandler({ objective: mission.objective, createDate: mission.completeDate })];
                    case 1:
                        data = _a.sent();
                        this.setState({ quests: data });
                        return [2];
                }
            });
        });
    };
    ToDoSoon.prototype.render = function () {
        var _this = this;
        var newQuest = this.state.newQuest;
        var isSubmitDisabled = this.state.isSubmitDisabled;
        var quests = this.state.quests;
        var enterHandler = function (event) { return _this.enterHandler(event); };
        var onChange = function (event) { return _this.onChangeHandler(event); };
        var onBtnClick = function () { return _this.clickHandler(); };
        var removeItem = function (obj) { return _this.removeMission(obj); };
        var toggle = function (obj) { return _this.toggleHandler(obj); };
        var handleClose = this.handleClose;
        var modalIsOpen = this.state.modalIsOpen;
        var updateModal = this.updateModal;
        var content = this.state.modalContent.content;
        var title = this.state.modalContent.title;
        var remove = this.state.modalContent.remove;
        return (React.createElement(Table_1.default, { value: newQuest, disableState: isSubmitDisabled, onKeyUp: enterHandler, onChange: onChange, onBtnClick: onBtnClick },
            React.createElement(modal_1.default, { show: modalIsOpen, heading: title, onClose: handleClose },
                React.createElement("div", { className: "line-thin" }),
                React.createElement("span", null, "modal for testing modals"),
                React.createElement("br", null),
                React.createElement("span", null, "click button to dismiss"),
                React.createElement("br", null),
                React.createElement("span", null, "click fade (dark area) to dismiss"),
                React.createElement("br", null),
                React.createElement("span", null, "press esc (keyboard) to dismiss"),
                React.createElement("br", null),
                React.createElement("span", null, content),
                React.createElement("br", null),
                React.createElement("div", { className: "spacing" }),
                React.createElement("button", { className: "themebutton wide", onClick: remove }, "Remove this item")),
            React.createElement(sortableList_1.default, { lockAxis: "y", lockToContainerEdges: true, useDragHandle: true, onSortEnd: this.onSortEnd, items: quests, updateModal: updateModal, removeItem: removeItem, toggle: toggle })));
    };
    return ToDoSoon;
}(React.Component));
exports.default = ToDoSoon;
//# sourceMappingURL=todo-soon.js.map