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
var Table_1 = require("../todo-soon/Table");
var Row_1 = require("./Row");
var Todo_simple_1 = require("../../api/Todo_simple");
var TodoSimple = (function (_super) {
    __extends(TodoSimple, _super);
    function TodoSimple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            quests: [],
            newQuest: "",
            submitDisabled: true
        };
        _this.getTodoCollectionWithPromise = function () { return __awaiter(_this, void 0, void 0, function () {
            var tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Todo_simple_1.default.getTodoCollection()];
                    case 1:
                        tasks = _a.sent();
                        this.setState({ quests: tasks });
                        return [2];
                }
            });
        }); };
        _this.getTodoCollection = function () {
            Todo_simple_1.default.getTodoCollectionCallback(function (data) { return _this.setState({ quests: data }); });
        };
        return _this;
    }
    TodoSimple.prototype.componentDidMount = function () {
        this.getTodoCollection();
    };
    TodoSimple.prototype.clickHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Todo_simple_1.default.addNewItemToCollection({ objective: this.state.newQuest })];
                    case 1:
                        data = _a.sent();
                        this.setState({ quests: data, newQuest: "" });
                        return [2];
                }
            });
        });
    };
    TodoSimple.prototype.onChangeHandler = function (event) {
        this.setState({
            newQuest: event.target.value,
            submitDisabled: ((event.target.value).length > 2 ? false : true)
        });
    };
    TodoSimple.prototype.toggleHandler = function (mission) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Todo_simple_1.default.toggleHandler({ objective: mission.objective, createDate: mission.completeDate })];
                    case 1:
                        data = _a.sent();
                        this.setState({ quests: data });
                        return [2];
                }
            });
        });
    };
    TodoSimple.prototype.removeOnClick = function (mission) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Todo_simple_1.default.removeFromCollection({ objective: mission.objective, createDate: mission.createDate })];
                    case 1:
                        data = _a.sent();
                        this.setState({ quests: data });
                        return [2];
                }
            });
        });
    };
    TodoSimple.prototype.enterHandler = function (event) {
        if (event.key === "Enter") {
            this.clickHandler();
        }
    };
    TodoSimple.prototype.render = function () {
        var _this = this;
        var _a = this.state, newQuest = _a.newQuest, submitDisabled = _a.submitDisabled, quests = _a.quests;
        var onKeyUp = function (event) { return _this.enterHandler(event); };
        var onChange = function (event) { return _this.onChangeHandler(event); };
        var onBtnClick = function () { return _this.clickHandler(); };
        return (React.createElement(Table_1.default, { value: newQuest, disableState: submitDisabled, onKeyUp: onKeyUp, onChange: onChange, onBtnClick: onBtnClick, quests: quests }, quests.map(function (item, i) {
            return React.createElement(Row_1.default, { key: i, toggle: function () { return _this.toggleHandler(item); }, mission: item, onClick: function () { return _this.removeOnClick(item); } });
        })));
    };
    return TodoSimple;
}(React.Component));
exports.default = TodoSimple;
//# sourceMappingURL=todo-simple.js.map