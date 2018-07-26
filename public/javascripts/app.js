/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/HOC/contextProviderHOC.tsx":
/*!****************************************!*\
  !*** ./src/HOC/contextProviderHOC.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var layout_1 = __webpack_require__(/*! ../layout/layout */ "./src/layout/layout.tsx");
var wrapInContext = function (WrappedComponent) {
    return function (props) {
        return (React.createElement(layout_1.IUserContext.Consumer, null, function (userContext) { return React.createElement(WrappedComponent, __assign({ userContext: userContext }, props)); }));
    };
};
exports.default = wrapInContext;


/***/ }),

/***/ "./src/components-stateful/CreateCharForm/createCharForm.tsx":
/*!*******************************************************************!*\
  !*** ./src/components-stateful/CreateCharForm/createCharForm.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var step1_1 = __webpack_require__(/*! ./step1 */ "./src/components-stateful/CreateCharForm/step1.tsx");
var step2_1 = __webpack_require__(/*! ./step2 */ "./src/components-stateful/CreateCharForm/step2.tsx");
var step3_1 = __webpack_require__(/*! ./step3 */ "./src/components-stateful/CreateCharForm/step3.tsx");
var step4_1 = __webpack_require__(/*! ./step4 */ "./src/components-stateful/CreateCharForm/step4.tsx");
var button_1 = __webpack_require__(/*! ../../components/button */ "./src/components/button.tsx");
var annoModule_1 = __webpack_require__(/*! ../../utils/annoModule */ "./src/utils/annoModule.ts");
var wizard_path_1 = __webpack_require__(/*! ../../components/wizard_path */ "./src/components/wizard_path.tsx");
var infotip_1 = __webpack_require__(/*! ../../components/infotip */ "./src/components/infotip.tsx");
var img_caption_1 = __webpack_require__(/*! ../../components/img_caption */ "./src/components/img_caption.tsx");
var CurrentStep = function (props) {
    var step = props.formstate.step;
    var formstate = props.formstate;
    var onChange = props.onChange;
    switch (step) {
        case 1:
            return (React.createElement(step1_1.default, __assign({}, formstate, { onChange: onChange })));
        case 2:
            return (React.createElement(step2_1.default, __assign({}, formstate, { onChange: onChange })));
        case 3:
            return (React.createElement(step3_1.default, __assign({}, formstate, { onChange: onChange })));
        case 4:
            return (React.createElement(step4_1.default, __assign({}, formstate, { onChange: onChange })));
        default:
            return (React.createElement(step1_1.default, __assign({}, formstate, { onChange: onChange })));
    }
};
var UserForm = (function (_super) {
    __extends(UserForm, _super);
    function UserForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            step: 1,
            maxStep: 4,
            name: "",
            lastname: "",
            pass: "",
            passrepeat: "",
            location: "",
            color: "",
            count: "",
            gender: "",
            email: "",
            opinionCats: "",
            opinionDogs: "",
            opinionHouses: "",
            opinionLangues: "",
            youLikeRadio: "",
            selection: "en",
            allowMarketing: false
        };
        _this.goToNext = function () {
            var step = _this.state.step;
            if (step !== _this.state.maxStep) {
                _this.setState({ step: step + 1 });
            }
            else {
                annoModule_1.default.announce("form complete");
            }
        };
        _this.goToPrevious = function () {
            var step = _this.state.step;
            if (step !== 1) {
                _this.setState({ step: step - 1 });
            }
            else {
                annoModule_1.default.announce("returned to start");
            }
        };
        _this.onChangeHandler = function (event) {
            var _a;
            var target = event.target;
            var value = (target.type === "checkbox") ? target.checked : target.value;
            var name = target.name;
            _this.setState((_a = {},
                _a[name] = value,
                _a));
        };
        _this.onsubmitHandler = function (event) {
            event.preventDefault();
            console.log("no submit handling as of now");
        };
        return _this;
    }
    UserForm.prototype.render = function () {
        var _a = this.state, step = _a.step, maxStep = _a.maxStep;
        return (React.createElement("section", { className: "content-centered-md" },
            React.createElement("form", { className: "userform", onSubmit: this.onsubmitHandler },
                React.createElement("div", { className: "spacing" }),
                React.createElement(wizard_path_1.default, { step: step, maxStep: maxStep }),
                React.createElement("div", { className: "spacing" }),
                React.createElement("div", { className: "line-thin" }),
                React.createElement("div", { className: "row-flex spaced" },
                    React.createElement(button_1.default, { buttonText: "return", type: "button", onClick: this.goToPrevious }),
                    React.createElement(button_1.default, { buttonText: "next", type: "button", onClick: this.goToNext })),
                React.createElement("div", { className: "line-thin" }),
                React.createElement("div", { className: "spacing" }),
                React.createElement(CurrentStep, { formstate: this.state, onChange: this.onChangeHandler }),
                React.createElement("div", { className: "spacing" }),
                React.createElement("div", { className: "line-thin" }),
                React.createElement(infotip_1.default, { message: "This form is creation of it's time and repsesents no values of any kind" }),
                React.createElement(infotip_1.default, { message: "Another tip with no valuable content" }),
                React.createElement(infotip_1.default, { message: "Third one, still useless" }),
                React.createElement(infotip_1.default, { message: "Not even going to bother anymore" }),
                React.createElement(infotip_1.default, { message: "..." }),
                React.createElement(img_caption_1.default, { src: "../images/blur.jpg", captionText: "This is caption sample for testing imgCaption component. Text here is caption content", size: "sm", captionTitle: "Blur by design" }),
                React.createElement(img_caption_1.default, { src: "../images/card.jpg", captionText: "This is caption sample for testing imgCaption component. Text here is caption content", size: "md", captionTitle: "Blur by design" }),
                React.createElement(img_caption_1.default, { src: "../images/orbs.png", captionText: "This is caption sample for testing imgCaption component. Text here is caption content", size: "md", captionTitle: "Blur by design" }),
                React.createElement(img_caption_1.default, { src: "../images/snek.jpg", captionText: "This is caption sample for testing imgCaption component. Text here is caption content", size: "md", captionTitle: "Blur by design" }),
                React.createElement(img_caption_1.default, { src: "../images/holo.jpg", captionText: "This is caption sample for testing imgCaption component.", size: "md", captionTitle: "Blur by design" }),
                React.createElement(img_caption_1.default, { src: "../images/abyss.jpg", captionText: "This is caption sample for testing imgCaption component.", size: "md", captionTitle: "Blur by design" }))));
    };
    return UserForm;
}(React.Component));
exports.default = UserForm;


/***/ }),

/***/ "./src/components-stateful/CreateCharForm/step1.tsx":
/*!**********************************************************!*\
  !*** ./src/components-stateful/CreateCharForm/step1.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var textinput_material_1 = __webpack_require__(/*! ../../components/textinput_material */ "./src/components/textinput_material.tsx");
var StepOne = (function (_super) {
    __extends(StepOne, _super);
    function StepOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepOne.prototype.render = function () {
        var _a = this.props, name = _a.name, lastname = _a.lastname, pass = _a.pass, passrepeat = _a.passrepeat, onChange = _a.onChange;
        return (React.createElement("section", null,
            React.createElement(textinput_material_1.default, { value: name, id: "NameID", label: "Name", name: "name", onChange: onChange }),
            React.createElement(textinput_material_1.default, { value: lastname, id: "LastNameID", label: "Lastname", name: "lastname", onChange: onChange }),
            React.createElement(textinput_material_1.default, { value: pass, id: "PassID", label: "Password", name: "pass", onChange: onChange }),
            React.createElement(textinput_material_1.default, { value: passrepeat, id: "PassRepeatID", label: "Repeat password", name: "passrepeat", onChange: onChange })));
    };
    return StepOne;
}(React.Component));
exports.default = StepOne;


/***/ }),

/***/ "./src/components-stateful/CreateCharForm/step2.tsx":
/*!**********************************************************!*\
  !*** ./src/components-stateful/CreateCharForm/step2.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var textinput_material_1 = __webpack_require__(/*! ../../components/textinput_material */ "./src/components/textinput_material.tsx");
var StepTwo = (function (_super) {
    __extends(StepTwo, _super);
    function StepTwo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepTwo.prototype.render = function () {
        var _a = this.props, color = _a.color, count = _a.count, gender = _a.gender, location = _a.location, onChange = _a.onChange;
        return (React.createElement("section", null,
            React.createElement(textinput_material_1.default, { value: color, id: "colorID", label: "color", name: "color", onChange: onChange }),
            React.createElement(textinput_material_1.default, { value: count, id: "countID", label: "count", name: "count", onChange: onChange }),
            React.createElement(textinput_material_1.default, { value: gender, id: "genderID", label: "gender", name: "gender", onChange: onChange }),
            React.createElement(textinput_material_1.default, { value: location, id: "locationID", label: "location", name: "location", onChange: onChange })));
    };
    return StepTwo;
}(React.Component));
exports.default = StepTwo;


/***/ }),

/***/ "./src/components-stateful/CreateCharForm/step3.tsx":
/*!**********************************************************!*\
  !*** ./src/components-stateful/CreateCharForm/step3.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var textinput_material_1 = __webpack_require__(/*! ../../components/textinput_material */ "./src/components/textinput_material.tsx");
var StepThree = (function (_super) {
    __extends(StepThree, _super);
    function StepThree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepThree.prototype.render = function () {
        var _a = this.props, opinionCats = _a.opinionCats, opinionDogs = _a.opinionDogs, opinionHouses = _a.opinionHouses, opinionLangues = _a.opinionLangues, onChange = _a.onChange;
        return (React.createElement("section", null,
            React.createElement(textinput_material_1.default, { value: opinionCats, id: "opinionCatsID", label: "Your opinion on cats?", name: "opinionCats", onChange: onChange, validation: (opinionCats === "love") ? null : "wrong answer" }),
            React.createElement(textinput_material_1.default, { value: opinionDogs, id: "opinionDogsID", label: "What about dogs?", name: "opinionDogs", onChange: onChange }),
            React.createElement(textinput_material_1.default, { value: opinionHouses, id: "opinionHousesID", label: "What dod you think about houses?", name: "opinionHouses", onChange: onChange }),
            React.createElement(textinput_material_1.default, { value: opinionLangues, id: "opinionLanguesID", label: "Best programming language?", name: "opinionLangues", onChange: onChange })));
    };
    return StepThree;
}(React.Component));
exports.default = StepThree;


/***/ }),

/***/ "./src/components-stateful/CreateCharForm/step4.tsx":
/*!**********************************************************!*\
  !*** ./src/components-stateful/CreateCharForm/step4.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_select_1 = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.es.js");
var textinput_material_1 = __webpack_require__(/*! ../../components/textinput_material */ "./src/components/textinput_material.tsx");
var checkbox_1 = __webpack_require__(/*! ../../components/checkbox */ "./src/components/checkbox.tsx");
var radiobutton_1 = __webpack_require__(/*! ../../components/radiobutton */ "./src/components/radiobutton.tsx");
var StepFour = (function (_super) {
    __extends(StepFour, _super);
    function StepFour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepFour.prototype.render = function () {
        var _a = this.props, email = _a.email, allowMarketing = _a.allowMarketing, onChange = _a.onChange, selection = _a.selection, youLikeRadio = _a.youLikeRadio;
        return (React.createElement("section", { className: "" },
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement(textinput_material_1.default, { value: email, id: "emailID", label: "Email", name: "email", onChange: onChange }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement(radiobutton_1.default, { id: "radioOne", value: "cats", checked: youLikeRadio === "cats", label: "like cats?", name: "youLikeRadio", onChange: onChange }),
            React.createElement(radiobutton_1.default, { id: "radioTwo", value: "dogs", checked: youLikeRadio === "dogs", label: "like dogs?", name: "youLikeRadio", onChange: onChange }),
            React.createElement(radiobutton_1.default, { id: "radioThree", value: "gerbil", checked: youLikeRadio === "gerbil", label: "like gerbils?", name: "youLikeRadio", onChange: onChange }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement(checkbox_1.default, { checked: allowMarketing, name: "allowMarketing", id: "marketingID", label: "Allow direct marketing (and spam)", onChange: onChange }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "spacing" }),
            React.createElement(react_select_1.default, { name: "selection", options: [
                    { value: 'en', label: 'english' },
                    { value: 'fi', label: 'finglish' },
                ] })));
    };
    return StepFour;
}(React.Component));
exports.default = StepFour;


/***/ }),

/***/ "./src/components-stateful/Documentation/documentation.tsx":
/*!*****************************************************************!*\
  !*** ./src/components-stateful/Documentation/documentation.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Mark = __webpack_require__(/*! mark.js */ "./node_modules/mark.js/dist/mark.js");
var textinput_material_1 = __webpack_require__(/*! ../../components/textinput_material */ "./src/components/textinput_material.tsx");
var clockModule_1 = __webpack_require__(/*! ../../utils/clockModule */ "./src/utils/clockModule.ts");
var ScrollNav = (function (_super) {
    __extends(ScrollNav, _super);
    function ScrollNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollNav.prototype.render = function () {
        return (React.createElement("nav", { className: "scrollNav", id: "js-scrollspy" },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: "#scrollOne" }, "link1")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#scrollTwo" }, "link2")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#scrollThree" }, "link3")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#scrollFour" }, "link4")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#scrollFive" }, "link5")))));
    };
    return ScrollNav;
}(React.Component));
var ScrollContent = (function (_super) {
    __extends(ScrollContent, _super);
    function ScrollContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollContent.prototype.render = function () {
        return (React.createElement("div", { className: "scrollContent" },
            React.createElement("h2", null,
                React.createElement("a", { id: "scrollOne", href: "#" }, "Cats")),
            React.createElement("p", { className: "cont" }, "The domestic cat (Felis silvestris catus or Felis catus)[1][5] is a small, typically furry, carnivorous mammal. They are often called house cats[6] when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. They are often valued by humans for companionship and for their ability to hunt vermin. There are more than seventy cat breeds recognized by various cat registries. Cats are similar in anatomy to the other felids, with a strong flexible body, quick reflexes, sharp retractable claws and teeth adapted to killing small prey. Cat senses fit a crepuscular and predatory ecological niche. Cats can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small animals. They can see in near darkness. Like most other mammals, cats have poorer color vision and a better sense of smell than humans. Cats, despite being solitary hunters, are a social species, and cat communication includes the use of a variety of vocalizations (mewing, purring, trilling, hissing, growling and grunting) as well as cat pheromones and types of cat-specific body language.[7] Cats have a high breeding rate.[8] Under controlled breeding, they can be bred and shown as registered pedigree pets, a hobby known as cat fancy. Failure to control the breeding of pet cats by neutering, as well as the abandonment of former household pets, has resulted in large numbers of feral cats worldwide, requiring population control.[9] In certain areas outside cats' native range, this has contributed, along with habitat destruction and other factors, to the extinction of many bird species. Cats have been known to extirpate a bird species within specific regions and may have contributed to the extinction of isolated island populations.[10] Cats are thought to be primarily responsible for the extinction of 33 species of birds, [better source needed] and the presence of feral and free-ranging cats makes some otherwise suitable locations unsuitable for attempted species reintroduction.[11] Because cats were venerated in ancient Egypt, they were commonly believed to have been domesticated there,[12] but there may have been instances of domestication as early as the Neolithic from around 9,500 years ago (7500 BC).[13] A genetic study in 2007[14] concluded that all domestic cats are descended from Near Eastern wildcats, having diverged around 8000 BC in the Middle East.[12][15] A 2016 study found that leopard cats were undergoing domestication independently in China around 5500 BC, though this line of partially domesticated cats leaves no trace in the domesticated populations of today.[16][17] A 2017 study confirmed that domestic cats are descendants of those first domesticated by farmers in the Near East around 9,000 years ago.[18][19] As of a 2007 study, cats are the second-most popular pet in the U.S. by number of pets owned, behind freshwater fish.[20] In a 2010 study, they were ranked the third-most popular pet in the UK, after fish and dogs, with around 8 million being owned.[21] "),
            React.createElement("p", { className: "cont" }, "The domestic cat is believed to have evolved from the Near Eastern wildcat, whose range covers vast portions of the Middle East westward to the Atlantic coast of Africa. [22][23] Between 70,000 and 100,000 years ago the animal gave rise to the genetic lineage that eventually produced all domesticated cats,[24] having diverged from the Near Eastern wildcat around 8,000 BC in the Middle East.[12][15] The felids are a rapidly evolving family of mammals that share a common ancestor only 10\u201315 million years ago[25] and include lions, tigers, cougars and many others. Within this family, domestic cats (Felis catus) are part of the genus Felis, which is a group of small cats containing about seven species (depending upon classification scheme).[1][26] Members of the genus are found worldwide and include the jungle cat (Felis chaus) of southeast Asia, European wildcat (F. silvestris silvestris), African wildcat (F. s. lybica), the Chinese mountain cat (F. bieti), and the Arabian sand cat (F. margarita), among others.[27]"),
            React.createElement("h2", null,
                React.createElement("a", { id: "scrollTwo", href: "#" }, "Taxonomy")),
            React.createElement("p", { className: "cont" }, "The domestic cat was first classified as Felis catus by Carl Linnaeus in the 10th edition of his Systema Naturae published in 1758.[1][2] Because of modern phylogenetics, domestic cats are usually regarded as another subspecies of the wildcat, F. silvestris.[1][28][29] This has resulted in mixed usage of the terms, as the domestic cat can be called by its subspecies name, Felis silvestris catus.[1][28][29] Wildcats have also been referred to as various subspecies of F. catus,[29] but in 2003, the International Commission on Zoological Nomenclature fixed the name for wildcats as F. silvestris.[30] The most common name in use for the domestic cat remains F. catus. Sometimes, the domestic cat has been called Felis domesticus[31] as proposed by German naturalist J.C.P. Erxleben in 1777,[32] but these are not valid taxonomic names and have been used only rarely in scientific literature.[33] A population of Transcaucasian black feral cats was once classified as Felis daemon (Satunin 1904) but now this population is considered to be a part of domestic cat.[34] All the cats in this genus share a common ancestor that is believed to have lived around 6\u20137 million years ago in the Near East (the Middle East).[35] The exact relationships within the Felidae are close but still uncertain,[36][37] e.g. the Chinese mountain cat is sometimes classified (under the name Felis silvestris bieti) as a subspecies of the wildcat, like the North African variety F. s. lybica.[28][36]"),
            React.createElement("h2", null,
                React.createElement("a", { id: "scrollThree", href: "#" }, "otsikko")),
            React.createElement("p", { className: "cont" }, "Domestic cats are similar in size to the other members of the genus Felis, typically weighing between 4 and 5 kg (9 and 10 lb).[36] Some breeds, such as the Maine Coon, can occasionally exceed 11 kg (24 lb). Conversely, very small cats, less than 2 kg (4 lb), have been reported.[59] The world record for the largest cat is 21 kg (50 lb).[60] The smallest adult cat ever officially recorded weighed around 1 kg (2 lb).[60] Feral cats tend to be lighter as they have more limited access to food than house cats. In the Boston area, the average feral adult male will weigh 4 kg (9 lb) and average feral female 3 kg (7 lb).[61] Cats average about 23\u201325 cm (9\u201310 in) in height and 46 cm (18 in) in head/body length (males being larger than females), with tails averaging 30 cm (12 in) in length.[62] "),
            React.createElement("h2", null,
                React.createElement("a", { id: "scrollFour", href: "#" }, "otsikko")),
            React.createElement("p", { className: "cont" }, "Curabitur aliquet semper molestie. Vivamus non faucibus dolor. Aliquam erat volutpat. Curabitur eget arcu turpis. Ut vitae consectetur turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vehicula finibus turpis. Maecenas suscipit et eros nec suscipit. Mauris placerat enim et ligula vulputate, at varius ligula condimentum. Integer volutpat tincidunt tincidunt. Integer molestie, metus at eleifend fringilla, odio orci ultrices ligula, in rhoncus metus metus vitae metus. Quisque volutpat laoreet tempus. Cras tincidunt mattis elit, nec scelerisque ipsum placerat eget. Praesent dapibus velit vestibulum neque euismod ultrices. Mauris tellus sapien, feugiat quis consectetur vel, convallis nec nisi. Curabitur vel blandit nulla. "),
            React.createElement("p", { className: "cont" }, " Curabitur aliquet semper molestie. Vivamus non faucibus dolor. Aliquam erat volutpat. Curabitur eget arcu turpis. Ut vitae consectetur turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vehicula finibus turpis. Maecenas suscipit et eros nec suscipit. Mauris placerat enim et ligula vulputate, at varius ligula condimentum. Integer volutpat tincidunt tincidunt. Integer molestie, metus at eleifend fringilla, odio orci ultrices ligula, in rhoncus metus metus vitae metus. kissa Quisque vompatti volutpat laoreet tempus. Cras tincidunt mattis elit, nec scelerisque ipsum placerat eget. Praesent dapibus velit vestibulum neque euismod ultrices. Mauris tellus sapien, feugiat quis consectetur vel, convallis nec nisi. Curabitur vel blandit nulla. "),
            React.createElement("p", { className: "cont" }, "Curabitur aliquet semper molestie. Vivamus non faucibus dolor. Aliquam erat volutpat. Curabitur eget arcu turpis. Ut vitae consectetur turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vehicula finibus turpis. Maecenas suscipit et eros nec suscipit. Mauris placerat enim et ligula vulputate, at varius ligula condimentum. Integer volutpat tincidunt tincidunt. Integer molestie, metus at eleifend fringilla, odio orci ultrices ligula, in rhoncus metus metus vitae metus. Quisque volutpat laoreet tempus. Cras tincidunt mattis elit, nec scelerisque ipsum placerat eget. Praesent dapibus velit vestibulum neque euismod ultrices. Mauris tellus sapien, feugiat quis consectetur vel, convallis nec nisi. Curabitur vel blandit nulla. "),
            React.createElement("h2", null,
                React.createElement("a", { id: "scrollFive", href: "#" }, "otsikko")),
            React.createElement("p", { className: "cont" }, "Curabitur aliquet semper molestie. Vivamus non faucibus dolor. Aliquam erat volutpat. Curabitur eget arcu turpis. Ut vitae consectetur turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vehicula finibus turpis. Maecenas suscipit et eros nec suscipit. Mauris placerat enim et ligula vulputate, at varius ligula condimentum. Integer volutpat tincidunt tincidunt. Integer molestie, metus at eleifend fringilla, odio orci ultrices ligula, in rhoncus metus metus vitae metus. Quisque volutpat laoreet tempus. Cras tincidunt mattis elit, nec scelerisque ipsum placerat eget. Praesent dapibus velit vestibulum neque euismod ultrices. Mauris tellus sapien, feugiat quis consectetur vel, convallis nec nisi. Curabitur vel blandit nulla. "),
            React.createElement("p", { className: "cont" }, "Curabitur aliquet semper molestie. Vivamus non faucibus dolor. Aliquam erat volutpat. Curabitur eget arcu turpis. Ut vitae consectetur turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vehicula finibus turpis. Maecenas suscipit et eros nec suscipit. Mauris placerat enim et ligula vulputate, at varius ligula condimentum. Integer volutpat tincidunt tincidunt. Integer molestie, metus at eleifend fringilla, odio orci ultrices ligula, in rhoncus metus metus vitae metus. koira Quisque volutpat laoreet tempus. Cras tincidunt mattis elit, nec scelerisque ipsum placerat eget. Praesent dapibus velit vestibulum neque euismod ultrices. Mauris tellus sapien, feugiat quis consectetur vel, convallis nec nisi. Curabitur vel blandit nulla. "),
            React.createElement("p", { className: "cont" }, "Curabitur aliquet semper molestie. Vivamus non faucibus dolor. Aliquam erat volutpat. Curabitur eget arcu turpis. Ut vitae consectetur turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vehicula finibus turpis. Maecenas suscipit et eros nec suscipit. Mauris placerat enim et ligula vulputate, at varius ligula condimentum. Integer volutpat tincidunt tincidunt. Integer molestie, metus at eleifend fringilla, odio orci ultrices ligula, in rhoncus metus metus vitae metus. Quisque volutpat laoreet tempus. Cras tincidunt mattis elit, nec scelerisque ipsum placerat eget. Praesent dapibus velit vestibulum neque euismod ultrices. Mauris tellus sapien, feugiat quis consectetur vel, convallis nec nisi. Curabitur vel blandit nulla. ")));
    };
    return ScrollContent;
}(React.Component));
var DocsPage = (function (_super) {
    __extends(DocsPage, _super);
    function DocsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocsPage.prototype.componentDidMount = function () {
    };
    DocsPage.prototype.timeStampSince = function () {
        var aDay = 24 * 60 * 60 * 1000;
        var toDay = new Date().getTime();
        return clockModule_1.default.Since((toDay - aDay));
    };
    DocsPage.prototype.render = function () {
        return (React.createElement("div", { className: "content--lg" },
            React.createElement("h2", null, "samplecontent"),
            React.createElement("p", null, "template content for demonstrating scrollspy functionality"),
            React.createElement("h3", { className: "timesince" }, this.timeStampSince()),
            React.createElement(SearchInput, { id: "filterField", label: "Seach for..." }),
            React.createElement("div", { className: "scrollspy" },
                React.createElement(ScrollContent, null),
                React.createElement(ScrollNav, null))));
    };
    return DocsPage;
}(React.Component));
exports.default = DocsPage;
var SearchInput = (function (_super) {
    __extends(SearchInput, _super);
    function SearchInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchInput.prototype.componentDidMount = function () {
        this.context = document.querySelectorAll(".cont");
        this.markContext = new Mark(this.context);
    };
    SearchInput.prototype.onChange = function (event) {
        this.setState({
            value: event.target.value
        });
        var lookfor = (event.target.value).toUpperCase();
        this.markContext.unmark();
        this.markContext.mark(lookfor);
        console.log("I'm filtering out results without... [ " + lookfor + " ]");
        for (var i = 0; i < document.querySelectorAll(".cont").length; i++) {
            var lookFrom = document.querySelectorAll(".cont")[i];
            if (lookFrom.innerHTML.toUpperCase().indexOf(lookfor) > -1) {
                lookFrom.style.display = "block";
            }
            else {
                lookFrom.style.display = "none";
            }
        }
    };
    return SearchInput;
}(textinput_material_1.default));


/***/ }),

/***/ "./src/components-stateful/Profile/Profile.tsx":
/*!*****************************************************!*\
  !*** ./src/components-stateful/Profile/Profile.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var userform_1 = __webpack_require__(/*! ../createNewUser/userform */ "./src/components-stateful/createNewUser/userform.tsx");
var langSelect_1 = __webpack_require__(/*! ../createNewUser/langSelect */ "./src/components-stateful/createNewUser/langSelect.tsx");
var timer_1 = __webpack_require__(/*! ../createNewUser/timer */ "./src/components-stateful/createNewUser/timer.tsx");
var ProgressBar_1 = __webpack_require__(/*! ../../components/ProgressBar */ "./src/components/ProgressBar.tsx");
var annoModule_1 = __webpack_require__(/*! ../../utils/annoModule */ "./src/utils/annoModule.ts");
var localization_1 = __webpack_require__(/*! ./localization */ "./src/components-stateful/Profile/localization.ts");
var Profile = (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lang: "en",
            progress: 0
        };
        _this.incrementProgress = function () {
            var progress = _this.state.progress + 3;
            _this.setState({ progress: progress });
        };
        _this.onChangeHandler = function (e) {
            console.log("changed lang");
            _this.setState({
                lang: e.value
            });
            localization_1.default.setLanguage(e.value);
            annoModule_1.default.announce(localization_1.default.formatString(localization_1.default.changedLang, localization_1.default.lang), localization_1.default.changedLangTitle, "info");
        };
        return _this;
    }
    Profile.prototype.componentDidMount = function () {
        localization_1.default.setLanguage(this.state.lang);
        this.timer = window.setInterval(this.incrementProgress, 500);
    };
    Profile.prototype.componentWillUnmount = function () {
        clearInterval(this.timer);
    };
    Profile.prototype.render = function () {
        return (React.createElement("div", { className: "content--md" },
            React.createElement("h2", null, localization_1.default.welcome),
            React.createElement(langSelect_1.default, { onChange: this.onChangeHandler, lang: this.state.lang }),
            React.createElement("h1", null, localization_1.default.header),
            React.createElement("p", null, localization_1.default.thisPageIs),
            React.createElement("div", { className: "time-wrap" },
                React.createElement(timer_1.default, { lang: this.state.lang })),
            React.createElement(ProgressBar_1.default, { percentage: this.state.progress }),
            React.createElement(userform_1.default, { lang: this.state.lang })));
    };
    return Profile;
}(React.Component));
exports.default = Profile;


/***/ }),

/***/ "./src/components-stateful/Profile/localization.ts":
/*!*********************************************************!*\
  !*** ./src/components-stateful/Profile/localization.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_localization_1 = __webpack_require__(/*! react-localization */ "./node_modules/react-localization/lib/LocalizedStrings.js");
var resoursefile = new react_localization_1.default({
    en: {
        lang: "english",
        changedLang: "Interface language switched. {0} is now system language",
        changedLangTitle: "System",
        welcome: "welcome to witchpage",
        header: "Localization test",
        thisPageIs: "test form + localization",
        username: "username",
        email: "email",
        location: "location",
        accountNum: "bank account number",
        color: "color of your underwear",
        emailIsInvalid: "This is not valid email address",
        accNumIsInvalid: "Incorrect format for a bank account",
        usernameIsInvalid: "Invalid name length, try different lenght",
        usernameIsTaken: "That user already exists",
        submit: "submit",
        age: "age"
    },
    fi: {
        lang: "finglish",
        changedLang: "Kieli saattoi vaihtua. {0} saattaa olla nyt käyttöjärjestelmän kieli",
        changedLangTitle: "Järjestelmä",
        welcome: "Tervetuloa",
        header: "Lokalisaatiotesti",
        thisPageIs: "testiformi ja lokalisoinnin testaus",
        username: "käyttäjänimi",
        email: "sähköposti",
        location: "sijainti",
        accountNum: "pankkitilin numero",
        color: "alusvaatteiden väri",
        emailIsInvalid: "Epäkelpo email, kokeile uudestaan",
        accNumIsInvalid: "Huono tilinumero, kokeile parempaa",
        usernameIsInvalid: "Väärän pituinen käyttäjänimi, kokeile toista pituutta",
        usernameIsTaken: "Käyttäjä on jo olemassa",
        submit: "lähetä",
        age: "ikä"
    }
});
exports.default = resoursefile;


/***/ }),

/***/ "./src/components-stateful/Settings/settingsPage.tsx":
/*!***********************************************************!*\
  !*** ./src/components-stateful/Settings/settingsPage.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var radiobutton_1 = __webpack_require__(/*! ../../components/radiobutton */ "./src/components/radiobutton.tsx");
var themes = [
    { value: "default", label: "Default UI theme (dark)" },
    { value: "violet", label: "Violet variant" },
    { value: "red", label: "Red variant" },
    { value: "light", label: "Light theme" },
];
var Settings = (function (_super) {
    __extends(Settings, _super);
    function Settings(props) {
        var _this = _super.call(this, props) || this;
        _this.handleThemeChange = function (event) {
            var selectTheme = event.target.value;
            console.log(selectTheme);
            document.getElementById("body").className = selectTheme;
            _this.setState({
                selectedTheme: selectTheme
            });
        };
        _this.state = {
            checkboxTwo: false,
            checkboxOne: true,
            checkboxThree: true,
            optionFour: true,
            selectedTheme: "default"
        };
        return _this;
    }
    Settings.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "content--md" },
            React.createElement("h2", null, "this is settings page"),
            React.createElement("p", null, "it has very litle in terms of content"),
            React.createElement("div", { className: "config-wrap" },
                React.createElement("div", { className: "content-centered-md" },
                    React.createElement("h3", null, "select interface theme"),
                    React.createElement("div", { className: "spacing" }),
                    themes.map(function (theme, index) {
                        return React.createElement(radiobutton_1.default, { key: index, id: "themeselect" + index, label: theme.label, value: theme.value, name: "selectedTheme", onChange: _this.handleThemeChange });
                    }),
                    React.createElement("div", { className: "spacing" }),
                    React.createElement("div", { className: "line-thin" }),
                    React.createElement("kbd", { className: "shortcut" }, "Ctrl + D"),
                    React.createElement("kbd", { className: "shortcut" }, "Ctrl + S"),
                    React.createElement("kbd", { className: "shortcut" }, "Ctrl + A"),
                    React.createElement("div", { className: "line-thin" })))));
    };
    return Settings;
}(React.Component));
exports.default = Settings;


/***/ }),

/***/ "./src/components-stateful/TaskManager/Row.tsx":
/*!*****************************************************!*\
  !*** ./src/components-stateful/TaskManager/Row.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Row = (function (_super) {
    __extends(Row, _super);
    function Row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Row.prototype.render = function () {
        var mission = this.props.mission;
        var toggle = this.props.toggle;
        var createDate = new Date(mission.createDate).toDateString();
        var iconClass = (mission.complete) ? "fa fa-calendar-check-o" : "fa fa-calendar-o";
        var rowClass = (mission.complete) ? "complete table-row" : "table-row";
        return (React.createElement("div", { className: rowClass },
            React.createElement("div", { className: "cell-status", onClick: toggle },
                React.createElement("i", { className: iconClass })),
            React.createElement("div", { className: "cell-auto" }, mission.objective),
            React.createElement("div", { className: "cell-auto" }, createDate),
            React.createElement("div", { className: "cell-60px", onClick: this.props.onClick },
                React.createElement("div", { className: "close-button" }))));
    };
    return Row;
}(React.Component));
exports.default = Row;


/***/ }),

/***/ "./src/components-stateful/TaskManager/Table.tsx":
/*!*******************************************************!*\
  !*** ./src/components-stateful/TaskManager/Table.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var textinput_material_1 = __webpack_require__(/*! ../../components/textinput_material */ "./src/components/textinput_material.tsx");
var button_1 = __webpack_require__(/*! ../../components/button */ "./src/components/button.tsx");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _a = this.props, value = _a.value, onKeyUp = _a.onKeyUp, onBtnClick = _a.onBtnClick, onChange = _a.onChange, disableState = _a.disableState, children = _a.children;
        return (React.createElement("div", null,
            React.createElement("div", { className: "line-thin" }),
            React.createElement("div", { className: "flex-row-table" },
                React.createElement(textinput_material_1.default, { id: "takeNewBtn", value: value, label: "description of new quest", onKeyUp: onKeyUp, onChange: onChange }),
                React.createElement(button_1.default, { onClick: onBtnClick, buttonText: "Add", className: (disableState) ? "themebutton disabled" : "themebutton" })),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "line-thin" }),
            React.createElement("div", { className: "flex-table" }, children),
            React.createElement("div", { className: "line-thin" })));
    };
    return Table;
}(React.Component));
exports.default = Table;


/***/ }),

/***/ "./src/components-stateful/TaskManager/TaskManager.tsx":
/*!*************************************************************!*\
  !*** ./src/components-stateful/TaskManager/TaskManager.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var todo_soon_1 = __webpack_require__(/*! ./todo-soon */ "./src/components-stateful/TaskManager/todo-soon.tsx");
var todo_simple_1 = __webpack_require__(/*! ./todo-simple */ "./src/components-stateful/TaskManager/todo-simple.tsx");
var SoonPage = (function (_super) {
    __extends(SoonPage, _super);
    function SoonPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoonPage.prototype.render = function () {
        return (React.createElement("div", { className: "content--xl" },
            React.createElement("h3", { className: "heading underlined" }, "Soon\u2122 | Sortable taskmanager"),
            React.createElement(todo_soon_1.default, null),
            React.createElement("div", { className: "spacing xl" }),
            React.createElement("h3", { className: "heading underlined" }, "Board | Simple unsortable tasklist"),
            React.createElement(todo_simple_1.default, null)));
    };
    return SoonPage;
}(React.Component));
exports.default = SoonPage;


/***/ }),

/***/ "./src/components-stateful/TaskManager/TaskManagerModal.tsx":
/*!******************************************************************!*\
  !*** ./src/components-stateful/TaskManager/TaskManagerModal.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Textinput_responsive_1 = __webpack_require__(/*! ../../components/Textinput_responsive */ "./src/components/Textinput_responsive.tsx");
var checkbox_slider_1 = __webpack_require__(/*! ../../components/checkbox_slider */ "./src/components/checkbox_slider.tsx");
var button_1 = __webpack_require__(/*! ../../components/button */ "./src/components/button.tsx");
var TaskManagerModal = (function (_super) {
    __extends(TaskManagerModal, _super);
    function TaskManagerModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            objective: _this.props.task.objective,
            longObjective: _this.props.task.longObjective,
            createDate: _this.props.task.createDate,
            complete: _this.props.task.complete,
            completeDate: _this.props.task.completeDate
        };
        _this.handleSave = function () {
            _this.props.onSave(_this.state);
        };
        _this.handleCancel = function () {
            _this.props.onCancel();
        };
        _this.handleOnChange = function (e) {
            var _a;
            var targetValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
            var targetName = e.target.name;
            _this.setState((_a = {}, _a[targetName] = targetValue, _a));
        };
        return _this;
    }
    TaskManagerModal.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Textinput_responsive_1.default, { value: this.state.objective, name: "objective", label: "Summary", onChange: this.handleOnChange }),
            React.createElement(Textinput_responsive_1.default, { value: this.state.longObjective, name: "longobjective", label: "Full description", onChange: this.handleOnChange }),
            React.createElement(checkbox_slider_1.default, { id: "sliderCBID", checked: this.state.complete, name: "complete", label: "Completed", onChange: this.handleOnChange }),
            React.createElement("div", { className: "line-thin" }),
            React.createElement("div", { className: "row-flex spaced" },
                React.createElement(button_1.default, { onClick: this.handleCancel, buttonText: "Cancel" }),
                React.createElement(button_1.default, { onClick: this.handleSave, buttonText: "Save" }))));
    };
    return TaskManagerModal;
}(React.Component));
exports.default = TaskManagerModal;


/***/ }),

/***/ "./src/components-stateful/TaskManager/sortItem.tsx":
/*!**********************************************************!*\
  !*** ./src/components-stateful/TaskManager/sortItem.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_sortable_hoc_1 = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/commonjs/index.js");
var SortHandle = react_sortable_hoc_1.SortableHandle(function () { return React.createElement("i", { className: "fa fa-bars" }); });
var Row = function (_a) {
    var mission = _a.mission, toggle = _a.toggle, onActivation = _a.onActivation, onRemove = _a.onRemove;
    var createDate = new Date(mission.createDate).toDateString();
    var iconClass = (mission.complete) ? "fas fa-calendar" : "fas fa-calendar";
    var rowClass = (mission.complete) ? "complete table-row" : "table-row";
    return (React.createElement("div", { className: rowClass },
        React.createElement("div", { className: "cell-status" },
            React.createElement(SortHandle, null)),
        React.createElement("div", { className: "cell-status", onClick: toggle },
            React.createElement("i", { className: iconClass })),
        React.createElement("div", { className: "cell-auto" },
            React.createElement("a", { className: "item-link", onClick: onActivation }, mission.objective)),
        React.createElement("div", { className: "cell-auto" }, createDate),
        React.createElement("div", { className: "cell-60px", onClick: onRemove },
            React.createElement("div", { className: "close-button" }))));
};
var SortItem = react_sortable_hoc_1.SortableElement(Row);
exports.default = SortItem;


/***/ }),

/***/ "./src/components-stateful/TaskManager/sortableList.tsx":
/*!**************************************************************!*\
  !*** ./src/components-stateful/TaskManager/sortableList.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_sortable_hoc_1 = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/commonjs/index.js");
var sortItem_1 = __webpack_require__(/*! ./sortItem */ "./src/components-stateful/TaskManager/sortItem.tsx");
var list = function (props) {
    return (React.createElement("div", { className: "flex-table" }, props.items.map(function (mission, index) {
        var update = function () { return props.updateModal(mission, index); };
        var remove = function () { return props.removeItem(mission); };
        var toggle = function () { return props.toggle(mission); };
        return (React.createElement(sortItem_1.default, { key: "item-" + index, index: index, mission: mission, onActivation: update, onRemove: remove, toggle: toggle }));
    })));
};
var SortableList = react_sortable_hoc_1.SortableContainer(list);
exports.default = SortableList;


/***/ }),

/***/ "./src/components-stateful/TaskManager/todo-simple.tsx":
/*!*************************************************************!*\
  !*** ./src/components-stateful/TaskManager/todo-simple.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Table_1 = __webpack_require__(/*! ./Table */ "./src/components-stateful/TaskManager/Table.tsx");
var Row_1 = __webpack_require__(/*! ./Row */ "./src/components-stateful/TaskManager/Row.tsx");
var Todo_simple_1 = __webpack_require__(/*! ../../services/Todo_simple */ "./src/services/Todo_simple.ts");
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
    TodoSimple.prototype.addNewTask = function () {
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
            this.addNewTask();
        }
    };
    TodoSimple.prototype.render = function () {
        var _this = this;
        var _a = this.state, newQuest = _a.newQuest, submitDisabled = _a.submitDisabled, quests = _a.quests;
        var onKeyUp = function (event) { return _this.enterHandler(event); };
        var onChange = function (event) { return _this.onChangeHandler(event); };
        var addNewTask = function () { return _this.addNewTask(); };
        return (React.createElement(Table_1.default, { value: newQuest, disableState: submitDisabled, onKeyUp: onKeyUp, onChange: onChange, onBtnClick: addNewTask, quests: quests }, quests.map(function (item, i) {
            return React.createElement(Row_1.default, { key: i, toggle: function () { return _this.toggleHandler(item); }, mission: item, onClick: function () { return _this.removeOnClick(item); } });
        })));
    };
    return TodoSimple;
}(React.Component));
exports.default = TodoSimple;


/***/ }),

/***/ "./src/components-stateful/TaskManager/todo-soon.tsx":
/*!***********************************************************!*\
  !*** ./src/components-stateful/TaskManager/todo-soon.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_sortable_hoc_1 = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/commonjs/index.js");
var Table_1 = __webpack_require__(/*! ./Table */ "./src/components-stateful/TaskManager/Table.tsx");
var modal_1 = __webpack_require__(/*! ../../components/modal */ "./src/components/modal.tsx");
var sortableList_1 = __webpack_require__(/*! ./sortableList */ "./src/components-stateful/TaskManager/sortableList.tsx");
var TaskManagerModal_1 = __webpack_require__(/*! ./TaskManagerModal */ "./src/components-stateful/TaskManager/TaskManagerModal.tsx");
var ToDo_soon_1 = __webpack_require__(/*! ../../services/ToDo_soon */ "./src/services/ToDo_soon.ts");
var confirmUtilModule_1 = __webpack_require__(/*! ../../utils/confirmUtilModule */ "./src/utils/confirmUtilModule.ts");
var ToDoSoon = (function (_super) {
    __extends(ToDoSoon, _super);
    function ToDoSoon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            quests: [],
            newQuest: "",
            activeItem: null,
            activeItemIndex: null,
            modalIsOpen: false,
            isLoading: true,
        };
        _this.handleAddNewTaskSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
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
        }); };
        _this.handleAddNewTaskOnChange = function (e) {
            _this.setState({ newQuest: e.target.value, });
        };
        _this.handleEnter = function (e) {
            if (e.key === "Enter") {
                _this.handleAddNewTaskSubmit();
            }
        };
        _this.closeModal = function () {
            _this.setState({ modalIsOpen: false });
        };
        _this.openModal = function () {
            _this.setState({ modalIsOpen: true });
        };
        _this.selectActiveItem = function (activeItem, activeItemIndex) {
            _this.setState({ activeItem: activeItem, activeItemIndex: activeItemIndex }, _this.openModal);
        };
        _this.updateTask = function (item) {
            var quests = _this.state.quests.slice(0);
            var index = _this.state.activeItemIndex;
            quests[index] = item;
            _this.setState({ quests: quests }, _this.closeModal);
        };
        _this.handleSortEnd = function (_a) {
            var oldIndex = _a.oldIndex, newIndex = _a.newIndex;
            _this.setState({ quests: react_sortable_hoc_1.arrayMove(_this.state.quests, oldIndex, newIndex) });
            console.log("sorted");
        };
        return _this;
    }
    ToDoSoon.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ToDo_soon_1.default.getDelayedCollection()];
                    case 1:
                        data = _a.sent();
                        this.setState({ quests: data, isLoading: false });
                        return [2];
                }
            });
        });
    };
    ToDoSoon.prototype.removeTask = function (mission) {
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
    ToDoSoon.prototype.handleTaskToggle = function (mission) {
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
    ToDoSoon.prototype.showLoader = function () {
        return (React.createElement("div", { className: "loader" }, "Loading..."));
    };
    ToDoSoon.prototype.render = function () {
        var _this = this;
        var _a = this.state, newQuest = _a.newQuest, quests = _a.quests, modalIsOpen = _a.modalIsOpen, isLoading = _a.isLoading, activeItem = _a.activeItem;
        var isSubmitDisabled = (newQuest.length < 5);
        var removeItem = function (obj) { return _this.removeTask(obj); };
        var toggle = function (obj) { return _this.handleTaskToggle(obj); };
        var heading = (this.state.activeItem) ? this.state.activeItem.objective : "";
        var closeModal = this.closeModal;
        return (React.createElement(Table_1.default, { value: newQuest, disableState: isSubmitDisabled, onKeyUp: this.handleEnter, onChange: this.handleAddNewTaskOnChange, onBtnClick: this.handleAddNewTaskSubmit },
            React.createElement(modal_1.default, { show: modalIsOpen, heading: heading, onClose: closeModal },
                React.createElement(TaskManagerModal_1.default, { task: activeItem, onCancel: closeModal, onSave: this.updateTask })),
            !isLoading ?
                React.createElement(sortableList_1.default, { lockAxis: "y", lockToContainerEdges: true, useDragHandle: true, onSortEnd: this.handleSortEnd, items: quests, updateModal: this.selectActiveItem, removeItem: removeItem, toggle: toggle })
                : this.showLoader()));
    };
    return ToDoSoon;
}(React.Component));
exports.default = ToDoSoon;


/***/ }),

/***/ "./src/components-stateful/announcement/announcement.tsx":
/*!***************************************************************!*\
  !*** ./src/components-stateful/announcement/announcement.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Announcement = (function (_super) {
    __extends(Announcement, _super);
    function Announcement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            pageWidth: ""
        };
        return _this;
    }
    Announcement.prototype.render = function () {
        return (React.createElement("div", { className: "top-panel" },
            React.createElement("div", { className: "announcement" },
                React.createElement("span", { className: "message" }, this.props.message))));
    };
    return Announcement;
}(React.Component));
exports.default = Announcement;


/***/ }),

/***/ "./src/components-stateful/apiResponseMock/apiResponseMock.tsx":
/*!*********************************************************************!*\
  !*** ./src/components-stateful/apiResponseMock/apiResponseMock.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Prism = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
__webpack_require__(/*! prismjs/components/prism-json.min.js */ "./node_modules/prismjs/components/prism-json.min.js");
var Todo_simple_1 = __webpack_require__(/*! ../../services/Todo_simple */ "./src/services/Todo_simple.ts");
var ToDo_soon_1 = __webpack_require__(/*! ../../services/ToDo_soon */ "./src/services/ToDo_soon.ts");
var ApiResponseMock = (function (_super) {
    __extends(ApiResponseMock, _super);
    function ApiResponseMock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.funcName = "to do simple API | JSON response";
        _this.funcName2 = "to do soon API | JSON response";
        _this.sampleJson = "{\"menu\": {\n      \"id\": \"file\",\n      \"value\": \"File\",\n      \"popup\": {\n         \"menuitem\": [\n         {\"value\": \"New\", \"onclick\": \"CreateNewDoc()\"},\n         {\"value\": \"Open\", \"onclick\": \"OpenDoc()\"},\n         {\"value\": \"Close\", \"onclick\": \"CloseDoc()\"}\n         ]\n      }\n   }}";
        return _this;
    }
    ApiResponseMock.prototype.componentDidMount = function () {
        Prism.highlightAll();
        this.fetchAPI();
    };
    ApiResponseMock.prototype.componentDidUpdate = function () {
        Prism.highlightAll();
    };
    ApiResponseMock.prototype.fetchAPI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4, Todo_simple_1.default.getTodoCollection()];
                    case 1:
                        _a.func = (_c.sent());
                        this.func = JSON.stringify(this.func, null, 3);
                        _b = this;
                        return [4, ToDo_soon_1.default.getTodoCollection()];
                    case 2:
                        _b.func2 = (_c.sent());
                        this.func2 = JSON.stringify(this.func2, null, 3);
                        this.forceUpdate();
                        return [2];
                }
            });
        });
    };
    ApiResponseMock.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", { className: "themeheading" }, "sample data"),
            React.createElement("pre", null,
                React.createElement("code", { className: "language-json" }, this.sampleJson)),
            React.createElement("h3", { className: "themeheading" }, this.funcName),
            React.createElement("pre", null,
                React.createElement("code", { className: "language-json" }, this.func && this.func)),
            React.createElement("h3", { className: "themeheading" }, this.funcName2 + "| JSON Response "),
            React.createElement("pre", null,
                React.createElement("code", { className: "language-json" }, this.func2 && this.func2))));
    };
    return ApiResponseMock;
}(React.Component));
exports.default = ApiResponseMock;


/***/ }),

/***/ "./src/components-stateful/avatarSelector/avatarSelector.tsx":
/*!*******************************************************************!*\
  !*** ./src/components-stateful/avatarSelector/avatarSelector.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var annoModule_1 = __webpack_require__(/*! ../../utils/annoModule */ "./src/utils/annoModule.ts");
var AvatarSelector = (function (_super) {
    __extends(AvatarSelector, _super);
    function AvatarSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selected: _this.props.selected,
            selectedIndex: _this.props.selected,
            avatarList: (_this.props.avatarList) ? _this.props.avatarList : defaultAvatars
        };
        return _this;
    }
    AvatarSelector.prototype.handleAvatarClick = function (avatar, index) {
        annoModule_1.default.announce("Selected " + avatar.name);
        var avatarList = this.state.avatarList.slice(0);
        var selected = avatarList[index];
        avatarList.forEach(function (x) { return x.selected = false; });
        selected.selected = true;
        this.setState({ avatarList: avatarList, selected: selected });
        this.handleAvatarSelection(avatarList[index]);
    };
    AvatarSelector.prototype.handleAvatarSelection = function (selected) {
        if (this.props.onSelection) {
            this.props.onSelection(selected);
        }
    };
    AvatarSelector.prototype.render = function () {
        var _this = this;
        return this.state.avatarList.map(function (avatar, index) {
            var selectedClass = (avatar.selected) ? "avatar selected" : "avatar";
            var onClick = function () { return _this.handleAvatarClick(avatar, index); };
            return (React.createElement("div", { key: name + index, onClick: onClick, className: selectedClass },
                React.createElement("img", { src: avatar.path, title: avatar.name })));
        });
    };
    return AvatarSelector;
}(React.Component));
exports.default = AvatarSelector;
var defaultAvatars = [
    { selected: false, name: "Blue", path: "../images/ava_blue.jpg" },
    { selected: false, name: "Cyan", path: "../images/ava_cyan.jpg" },
    { selected: false, name: "Forest", path: "../images/ava_forest.jpg" },
    { selected: false, name: "Greenish", path: "../images/ava_greenish.jpg" },
    { selected: false, name: "Magenta", path: "../images/ava_magenta.jpg" },
    { selected: false, name: "Orange", path: "../images/ava_orange.jpg" },
    { selected: false, name: "Pink", path: "../images/ava_pink.jpg" },
    { selected: false, name: "Red", path: "../images/ava_red.jpg" },
    { selected: false, name: "Green", path: "../images/ava_vibrantgreen.jpg" },
    { selected: false, name: "Yellow", path: "../images/ava_vibrantyellow.jpg" },
    { selected: false, name: "Violet", path: "../images/ava_violet.jpg" },
    { selected: false, name: "Yellowish", path: "../images/ava_yellow.jpg" },
];


/***/ }),

/***/ "./src/components-stateful/coinFlipper/coinFlip.tsx":
/*!**********************************************************!*\
  !*** ./src/components-stateful/coinFlipper/coinFlip.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var confirmUtilModule_1 = __webpack_require__(/*! ../../utils/confirmUtilModule */ "./src/utils/confirmUtilModule.ts");
var coinFlipModule_1 = __webpack_require__(/*! ../../utils/coinFlipModule */ "./src/utils/coinFlipModule.ts");
var button_1 = __webpack_require__(/*! ../../components/button */ "./src/components/button.tsx");
var tabs_1 = __webpack_require__(/*! ../../components/tabs */ "./src/components/tabs.tsx");
var tab_1 = __webpack_require__(/*! ../../components/tab */ "./src/components/tab.tsx");
var Flipper = (function (_super) {
    __extends(Flipper, _super);
    function Flipper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            coinFlipHistory: [],
            coinFlipCount: 0
        };
        _this.flipCoin = function () {
            _this.coinFlipper.flipCoin();
            _this.updateFlipState();
        };
        _this.resetCoinFlips = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, confirmUtilModule_1.default("Are you sure you want to reset flips?, this action cannot be undone", null, "Reset")];
                    case 1:
                        if (_a.sent()) {
                            this.coinFlipper.resetHistory();
                            this.updateFlipState();
                        }
                        return [2];
                }
            });
        }); };
        return _this;
    }
    Flipper.prototype.componentWillMount = function () {
        this.coinFlipper = new coinFlipModule_1.default();
    };
    Flipper.prototype.updateFlipState = function () {
        this.setState({
            coinFlipHistory: this.coinFlipper.flipHistory,
            coinFlipCount: this.coinFlipper.flipCount
        });
    };
    Flipper.prototype.getFlipHistory = function (isReversed) {
        var history = (isReversed) ? this.state.coinFlipHistory.slice().reverse() : this.state.coinFlipHistory;
        var classname = function (index) {
            if (isReversed && index === 0 || !isReversed && index === history.length - 1) {
                return "table-row animated-newItemFlash";
            }
            else {
                return "table-row";
            }
        };
        return (history.map(function (item, index) {
            var key = item.flipCounter + item.result;
            return (React.createElement("div", { key: key, className: classname(index) },
                React.createElement("div", { className: "cell-60px centered" },
                    React.createElement("b", null, "#" + ((isReversed) ? history.length - index : index + 1))),
                React.createElement("div", { className: "cell-auto" }, item.result)));
        }));
    };
    Flipper.prototype.render = function () {
        var total = this.state.coinFlipCount;
        var headCount = this.coinFlipper.getHeads();
        var tailCount = this.coinFlipper.getTails();
        var latest = this.coinFlipper.lastFlipResult;
        var count = 0;
        return (React.createElement("div", { className: "content-centered-md" },
            React.createElement("div", { className: "coinHeading" },
                React.createElement("h3", { className: "themeheading" }, "flipped " + total + " times")),
            React.createElement("div", { className: "coinFlipWrap" },
                React.createElement("div", { key: total, className: "coin " + latest, onClick: this.flipCoin }, latest)),
            React.createElement("div", { className: "row-flex spaced" },
                React.createElement(button_1.default, { buttonText: "Flip Coin?", onClick: this.flipCoin }),
                React.createElement(button_1.default, { buttonText: "Reset", onClick: this.resetCoinFlips })),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "row-flex spaced" },
                React.createElement("div", { className: "countHeading" },
                    React.createElement("div", null,
                        "Heads: ",
                        headCount),
                    React.createElement("div", { key: headCount, className: "animated-glow-once" }, this.coinFlipper.getHeadPercentage())),
                React.createElement("div", { className: "countHeading" },
                    React.createElement("div", null,
                        "Tails: ",
                        tailCount),
                    React.createElement("div", { key: tailCount, className: "animated-glow-once" }, this.coinFlipper.getTailPercentage()))),
            React.createElement("div", { className: "spacing" }),
            React.createElement("div", { className: "line-thin" }),
            React.createElement(tabs_1.default, null,
                React.createElement(tab_1.default, { title: "Latest to first" },
                    React.createElement("div", { className: "line-thin" }),
                    React.createElement("span", null, "Flip counter in anti-chronological order (latest to first):"),
                    React.createElement("div", { className: "flex-table" }, this.getFlipHistory(true))),
                React.createElement(tab_1.default, { title: "First to latest" },
                    React.createElement("div", { className: "line-thin" }),
                    React.createElement("span", null, "Flip counter in chronological order (first to latest):"),
                    React.createElement("div", { className: "flex-table" }, this.getFlipHistory(false)))),
            React.createElement("div", { className: "line-thin" })));
    };
    return Flipper;
}(React.Component));
exports.default = Flipper;


/***/ }),

/***/ "./src/components-stateful/complex/complex.tsx":
/*!*****************************************************!*\
  !*** ./src/components-stateful/complex/complex.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var productModel_1 = __webpack_require__(/*! ../../models/productModel */ "./src/models/productModel.ts");
var productTable_1 = __webpack_require__(/*! ./productTable */ "./src/components-stateful/complex/productTable.tsx");
var productForm_1 = __webpack_require__(/*! ../productForm/productForm */ "./src/components-stateful/productForm/productForm.tsx");
var button_1 = __webpack_require__(/*! ../../components/button */ "./src/components/button.tsx");
var modal_1 = __webpack_require__(/*! ../../components/modal */ "./src/components/modal.tsx");
var localization_1 = __webpack_require__(/*! ./localization */ "./src/components-stateful/complex/localization.ts");
var Complex = (function (_super) {
    __extends(Complex, _super);
    function Complex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            userType: 0,
            productTable: [],
            selectedIndex: 0,
            selectedProduct: null,
            isModalOpen: false,
        };
        _this.handleAddProduct = function () {
            var productTable = _this.state.productTable.slice(0);
            var newProduct = new productModel_1.default("New product");
            productTable.push(newProduct);
            _this.setState({ productTable: productTable });
        };
        _this.updateProduct = function (updatedProduct) {
            var productTable = _this.state.productTable.slice();
            var selectedIndex = _this.state.selectedIndex;
            productTable[selectedIndex] = updatedProduct;
            _this.setState({
                productTable: productTable,
                isModalOpen: false
            });
        };
        _this.handleProductSelection = function (selectedProduct, selectedIndex) {
            _this.setState({
                selectedIndex: selectedIndex,
                selectedProduct: selectedProduct,
                isModalOpen: true
            });
        };
        _this.handleProductRemove = function (index) {
            var productTable = _this.state.productTable;
            productTable.splice(index, 1);
            _this.setState({ productTable: productTable });
        };
        _this.closeModal = function () {
            _this.setState({ isModalOpen: false });
        };
        return _this;
    }
    Complex.prototype.isAuthorized = function () {
        return this.props.userContext.loggedRole === loggedRole.admin;
    };
    Complex.prototype.render = function () {
        var _a = this.state, productTable = _a.productTable, isModalOpen = _a.isModalOpen, selectedIndex = _a.selectedIndex;
        var selectedProduct = Object.assign({}, this.state.selectedProduct);
        var modalheading = (selectedProduct) ? selectedProduct.name : "no selected product";
        return (React.createElement("div", { className: "Complex--wrapper content-centered-lg" }, this.isAuthorized() ?
            React.createElement(React.Fragment, null,
                React.createElement("h2", { className: "heading underlined" }, localization_1.default.header),
                React.createElement("div", { className: "row-flex row-spacing" },
                    React.createElement(button_1.default, { className: "themebutton wide", buttonText: "Create new", onClick: this.handleAddProduct })),
                React.createElement(productTable_1.default, { productTable: productTable, onProductClick: this.handleProductSelection, onRemoveClick: this.handleProductRemove }),
                React.createElement(modal_1.default, { onClose: this.closeModal, show: isModalOpen, heading: modalheading, size: "lg" },
                    React.createElement(productForm_1.default, { product: selectedProduct, onSave: this.updateProduct, onCancel: this.closeModal })))
            :
                React.createElement(React.Fragment, null,
                    React.createElement("h2", { className: "heading underlined" }, localization_1.default.insufficientTitle),
                    React.createElement("p", null, localization_1.default.requireAdminRights))));
    };
    return Complex;
}(React.Component));
exports.default = Complex;
var userType;
(function (userType) {
    userType[userType["admin"] = 0] = "admin";
    userType[userType["user"] = 1] = "user";
    userType[userType["visitor"] = 2] = "visitor";
})(userType || (userType = {}));
var loggedRole;
(function (loggedRole) {
    loggedRole[loggedRole["admin"] = 0] = "admin";
    loggedRole[loggedRole["developer"] = 1] = "developer";
    loggedRole[loggedRole["user"] = 2] = "user";
    loggedRole[loggedRole["quest"] = 3] = "quest";
})(loggedRole || (loggedRole = {}));


/***/ }),

/***/ "./src/components-stateful/complex/localization.ts":
/*!*********************************************************!*\
  !*** ./src/components-stateful/complex/localization.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_localization_1 = __webpack_require__(/*! react-localization */ "./node_modules/react-localization/lib/LocalizedStrings.js");
var resoursefile = new react_localization_1.default({
    en: {
        header: "Product Management | DEMO",
        requireAdminRights: "You need admin rights to read or modify this page. ",
        insufficientTitle: "Insufficient rights",
    },
    fi: {
        header: "Tuotehallinta | DEMO",
        requireAdminRights: "You need admin rights to read or modify this page. ",
        insufficientTitle: "Insufficient rights ",
    }
});
exports.default = resoursefile;


/***/ }),

/***/ "./src/components-stateful/complex/productTable.tsx":
/*!**********************************************************!*\
  !*** ./src/components-stateful/complex/productTable.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ProductTable = (function (_super) {
    __extends(ProductTable, _super);
    function ProductTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductTable.prototype.getPlaceholder = function () {
        return (React.createElement("div", { className: "product-placeholder" }, "No products have been created yet. Please press \"Add-button\" to begin creating products"));
    };
    ProductTable.prototype.getMappedTypes = function (types) {
        return types.map(function (typename, index) {
            return (React.createElement("span", { key: index, className: "type-label shift-background" }, typename));
        });
    };
    ProductTable.prototype.render = function () {
        var _this = this;
        var productTable = this.props.productTable || [];
        var hasProducts = productTable.length > 0;
        return (React.createElement("div", { className: "flex-table" }, (hasProducts) ?
            productTable.map(function (product, index) {
                var name = product.name, id = product.id, description = product.description, hasPrice = product.hasPrice, price = product.price;
                var handleProductClick = function () { return _this.props.onProductClick(product, index); };
                var handleRemove = function () { return _this.props.onRemoveClick(index); };
                return (React.createElement("div", { className: "table-row", key: name + index },
                    React.createElement("div", { className: "cell-auto", title: description },
                        React.createElement("span", { className: "interactable", onClick: handleProductClick }, name),
                        React.createElement("span", null, _this.getMappedTypes(product.productType))),
                    React.createElement("div", { className: "cell-60px" },
                        React.createElement("b", null, hasPrice && price)),
                    React.createElement("div", { className: "cell-60px flex-center" },
                        React.createElement("button", { onClick: handleRemove, className: "close-button" }))));
            })
            : this.getPlaceholder()));
    };
    return ProductTable;
}(React.Component));
exports.default = ProductTable;


/***/ }),

/***/ "./src/components-stateful/createNewUser/langSelect.tsx":
/*!**************************************************************!*\
  !*** ./src/components-stateful/createNewUser/langSelect.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_select_1 = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.es.js");
var LangSelect = (function (_super) {
    __extends(LangSelect, _super);
    function LangSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LangSelect.prototype.render = function () {
        var lang = this.props.lang;
        var onChange = this.props.onChange;
        return (React.createElement("div", { className: "spacing" },
            React.createElement(react_select_1.default, { name: "lang-field-name", value: lang, onChange: onChange, options: [
                    { value: 'en', label: 'english' },
                    { value: 'fi', label: 'finglish' },
                ] })));
    };
    return LangSelect;
}(React.Component));
exports.default = LangSelect;


/***/ }),

/***/ "./src/components-stateful/createNewUser/timer.tsx":
/*!*********************************************************!*\
  !*** ./src/components-stateful/createNewUser/timer.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            date: new Date()
        };
        return _this;
    }
    Timer.prototype.componentDidMount = function () {
        var _this = this;
        this.statetimer = setInterval(function () { return _this.tick(); }, 1000);
    };
    Timer.prototype.componentWillUnmount = function () {
        clearInterval(this.statetimer);
    };
    Timer.prototype.tick = function () {
        this.setState({ date: new Date() });
    };
    Timer.prototype.render = function () {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var lang = (this.props.lang === "fi") ? "fi-FI" : "en-EN";
        return (React.createElement("div", { className: "time-block" },
            React.createElement("div", { className: "time-content" },
                React.createElement("h3", null, this.state.date.toLocaleDateString(lang, options)))));
    };
    return Timer;
}(React.Component));
exports.default = Timer;
;


/***/ }),

/***/ "./src/components-stateful/createNewUser/userform.tsx":
/*!************************************************************!*\
  !*** ./src/components-stateful/createNewUser/userform.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var localization_1 = __webpack_require__(/*! ../Profile/localization */ "./src/components-stateful/Profile/localization.ts");
var UserForm_1 = __webpack_require__(/*! ../../services/UserForm */ "./src/services/UserForm.ts");
var textinput_material_1 = __webpack_require__(/*! ../../components/textinput_material */ "./src/components/textinput_material.tsx");
var button_1 = __webpack_require__(/*! ../../components/button */ "./src/components/button.tsx");
var annoModule_1 = __webpack_require__(/*! ../../utils/annoModule */ "./src/utils/annoModule.ts");
var validation_1 = __webpack_require__(/*! ./validation */ "./src/components-stateful/createNewUser/validation.ts");
var UserForm = (function (_super) {
    __extends(UserForm, _super);
    function UserForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            form: {
                username: "",
                email: "",
                location: "",
                accountNum: "",
                color: "",
                age: "",
                date: Date.now()
            }
        };
        _this.validation = validation_1.default;
        _this.handleOnChange = function (e) {
            var newState = __assign({}, _this.state.form);
            newState[e.target.name] = e.target.value;
            _this.setState({ form: newState });
        };
        _this.handleOnBlur = function (e) {
            _this.validation.activateRule(e.target.name);
            _this.forceUpdate();
        };
        return _this;
    }
    UserForm.prototype.validateForm = function () {
        this.validation.validate(this.state.form);
    };
    UserForm.prototype.onsubmitHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        this.validation.activateAllRules();
                        this.forceUpdate();
                        return [4, UserForm_1.default.postUserForm(this.state.form)];
                    case 1:
                        data = _a.sent();
                        annoModule_1.default.announce("server message", data);
                        return [2];
                }
            });
        });
    };
    UserForm.prototype.render = function () {
        var _this = this;
        var _a = this.state.form, username = _a.username, email = _a.email, location = _a.location, accountNum = _a.accountNum, color = _a.color, age = _a.age;
        var validify = this.validation;
        var onSubmit = function (event) { return _this.onsubmitHandler(event); };
        this.validateForm();
        return (React.createElement("form", { className: "userform", onSubmit: onSubmit },
            React.createElement("div", { className: "spacing" }),
            React.createElement(textinput_material_1.default, { name: "username", label: localization_1.default.username, value: username, onChange: this.handleOnChange, onBlur: this.handleOnBlur, id: "nameID", validation: validify.getValidatedMessage("username") }),
            React.createElement(textinput_material_1.default, { name: "email", tooltip: "You wont actually recieve any emails form us... :)", label: localization_1.default.email, value: email, onChange: this.handleOnChange, onBlur: this.handleOnBlur, id: "emailID", validation: validify.getValidatedMessage("email") }),
            React.createElement(textinput_material_1.default, { name: "location", tooltip: "Original home country", label: localization_1.default.location, value: location, onChange: this.handleOnChange, onBlur: this.handleOnBlur, id: "locationID" }),
            React.createElement(textinput_material_1.default, { name: "accountNum", tooltip: "Use only numbers", label: localization_1.default.accountNum, value: accountNum, onChange: this.handleOnChange, onBlur: this.handleOnBlur, id: "accountNumID", validation: validify.getValidatedMessage("accountNum") }),
            React.createElement(textinput_material_1.default, { name: "color", label: localization_1.default.color, value: color, onChange: this.handleOnChange, onBlur: this.handleOnBlur, id: "colorID", validation: validify.getValidatedMessage("color") }),
            React.createElement(textinput_material_1.default, { name: "age", label: localization_1.default.age, value: age, onChange: this.handleOnChange, onBlur: this.handleOnBlur, id: "ageID", validation: validify.getValidatedMessage("age") }),
            React.createElement("div", { className: "spacing" }),
            React.createElement(button_1.default, { buttonText: localization_1.default.submit, type: "submit" }),
            React.createElement("div", { className: "line-thin" })));
    };
    return UserForm;
}(React.Component));
exports.default = UserForm;


/***/ }),

/***/ "./src/components-stateful/createNewUser/validation.ts":
/*!*************************************************************!*\
  !*** ./src/components-stateful/createNewUser/validation.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var validationModule_1 = __webpack_require__(/*! ../../utils/validationModule */ "./src/utils/validationModule.ts");
var localization_1 = __webpack_require__(/*! ../Profile/localization */ "./src/components-stateful/Profile/localization.ts");
var test = validationModule_1.default.test;
var validation = new validationModule_1.default([
    { field: "email", message: localization_1.default.emailIsInvalid, validIf: function (x) { return test.isEmail(x); } },
    { field: "accountNum", message: localization_1.default.accNumIsInvalid, validIf: function (x) { return test.isInt(x); } },
    { field: "username", message: "Name is required field", validIf: function (x) { return !test.isEmpty(x); } },
    { field: "username", message: localization_1.default.usernameIsTaken, validIf: function (x) { return (x !== "asd") && (x !== "Mario"); } },
    { field: "username", message: localization_1.default.usernameIsInvalid, validIf: function (x) { return test.isLength(x, { min: 3, max: 20 }); } },
    { field: "color", message: "must be red", validIf: function (x) { return x === "red"; } }
]);
exports.default = validation;


/***/ }),

/***/ "./src/components-stateful/dashboard/dashboard.tsx":
/*!*********************************************************!*\
  !*** ./src/components-stateful/dashboard/dashboard.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var Statistics_1 = __webpack_require__(/*! ../../services/Statistics */ "./src/services/Statistics.ts");
var navIcons_1 = __webpack_require__(/*! ../../layout/navIcons */ "./src/layout/navIcons.tsx");
var Dashboard = (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            startCount: "0"
        };
        return _this;
    }
    Dashboard.prototype.componentDidMount = function () {
        this.updateServerStartCount();
    };
    Dashboard.prototype.updateServerStartCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var serverStartCount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Statistics_1.default.getServerStartCount()];
                    case 1:
                        serverStartCount = (_a.sent()).serverStartCount;
                        this.setState({ startCount: serverStartCount });
                        return [2];
                }
            });
        });
    };
    Dashboard.prototype.render = function () {
        return (React.createElement("div", { className: "content--full" },
            React.createElement("section", { className: "server-statistics" },
                React.createElement("div", { className: "statistic" },
                    React.createElement("span", { className: "phrase" },
                        "Server has been started ",
                        React.createElement("span", { className: "counter" }, this.state.startCount),
                        " times"))),
            React.createElement("section", { className: "dashboard" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/", activeClassName: "active", className: "dash-item" },
                    React.createElement("div", { className: "pagesymbol" }, navIcons_1.default.dashboard),
                    React.createElement("div", { className: "pagetitle" }, "Dashboard")),
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/createchar", activeClassName: "active", className: "dash-item" },
                    React.createElement("div", { className: "pagesymbol" }, navIcons_1.default.createchar),
                    React.createElement("div", { className: "pagetitle" }, "Create Character")),
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/soon", activeClassName: "active", className: "dash-item" },
                    React.createElement("div", { className: "pagesymbol" }, navIcons_1.default.soon),
                    React.createElement("div", { className: "pagetitle" }, "Soon\u2122")),
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/missions", activeClassName: "active", className: "dash-item" },
                    React.createElement("div", { className: "pagesymbol" }, navIcons_1.default.missions),
                    React.createElement("div", { className: "pagetitle" }, "Missions")),
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/witchchat", activeClassName: "active", className: "dash-item" },
                    React.createElement("div", { className: "pagesymbol" }, navIcons_1.default.covenchat),
                    React.createElement("div", { className: "pagetitle" }, "covenChat")),
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/profile", activeClassName: "active", className: "dash-item" },
                    React.createElement("div", { className: "pagesymbol" }, navIcons_1.default.profile),
                    React.createElement("div", { className: "pagetitle" }, "Profile")),
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/settings", activeClassName: "active", className: "dash-item" },
                    React.createElement("div", { className: "pagesymbol" }, navIcons_1.default.settings),
                    React.createElement("div", { className: "pagetitle" }, "Settings")),
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/docs", activeClassName: "active", className: "dash-item" },
                    React.createElement("div", { className: "pagesymbol" }, navIcons_1.default.documentation),
                    React.createElement("div", { className: "pagetitle" }, "Documentation")),
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/apimock", activeClassName: "active", className: "dash-item" },
                    React.createElement("div", { className: "pagesymbol" }, navIcons_1.default.apimocking),
                    React.createElement("div", { className: "pagetitle" }, "Apimock")),
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/coinflip", activeClassName: "active", className: "dash-item" },
                    React.createElement("div", { className: "pagesymbol" }, navIcons_1.default.apimocking),
                    React.createElement("div", { className: "pagetitle" }, "Coinflipper")),
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/complex", activeClassName: "active", className: "dash-item" },
                    React.createElement("div", { className: "pagesymbol" }, navIcons_1.default.complex),
                    React.createElement("div", { className: "pagetitle" }, "Complex")))));
    };
    return Dashboard;
}(React.Component));
exports.default = Dashboard;


/***/ }),

/***/ "./src/components-stateful/gallery/codeSamples.tsx":
/*!*********************************************************!*\
  !*** ./src/components-stateful/gallery/codeSamples.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var UsageSamples = (function () {
    function UsageSamples() {
    }
    UsageSamples.Tabs = "\n   <Tabs>\n      <Tab title=\"Tab#1\">\n         Sample content \"tab 1\"\n      </Tab>\n      <Tab title=\"Tab#2\">\n         Sample content \"tab 2\"\n      </Tab>\n      <Tab title=\"Tab#3\">\n         Sample content \"tab 3\"\n      </Tab>\n   </Tabs>\n   ";
    UsageSamples.Select = "\n   <Select \n      id=\"selectMultipleValue\" \n      multi={true}\n      simpleValue={true}\n      value={jobList}\n      onChange={this.handleMultipleSelectOnChange}\n      options={jobs}\n   />\n\n   <Select \n      id=\"selectSingleValue\" \n      value={job}\n      onChange={this.handleSelectOnChange}\n      name=\"job\"\n      options={jobs}\n   />\n   ";
    UsageSamples.Loader = "\n   <div className=\"loader\"></div>\n   ";
    UsageSamples.CheckBox = "\n   <CheckBox\n      name=\"hasCats\"\n      label=\"Has cats\" \n      id=\"hascatssimple\"\n      checked={hasCats}\n      onChange={this.handleOnChange}\n   />\n\n   <CheckBox\n      name=\"hasDogs\"\n      label=\"Has Dogs\" \n      id=\"hasdogssimple\"\n      checked={hasDogs}\n      onChange={this.handleOnChange}\n   />\n   ";
    UsageSamples.SliderCheckBox = "\n   <SliderCheckbox\n      name=\"hasCats\"\n      label=\"Has cats\" \n      id=\"hascatsslider\"\n      checked={hasCats}\n      onChange={this.handleOnChange}\n   />\n\n   <SliderCheckbox\n      name=\"hasDogs\"\n      label=\"Has cats\" \n      id=\"hasdogsslider\"\n      checked={hasDogs}\n      onChange={this.handleOnChange}\n   />   \n   ";
    UsageSamples.ResponsiveInput = "\n   <ResponsiveInput \n      name=\"firstname\"\n      id=\"firstnameresp\"\n      label=\"Firstname\"\n      value={firstname}\n      onChange={this.handleOnChange} \n   />\n      <ResponsiveInput \n      name=\"lastname\"\n      id=\"lastnameresp\"\n      label=\"Lastname\"\n      value={lastname}\n      onChange={this.handleOnChange} \n   />\n   ";
    UsageSamples.MaterialInput = "\n   <MaterialInput \n      name=\"firstname\"\n      id=\"firstnameresp\"\n      label=\"Firstname\"\n      value={firstname}\n      onChange={this.handleOnChange} \n   />\n   <MaterialInput \n      name=\"lastname\"\n      id=\"lastnameresp\"\n      label=\"Lastname\"\n      value={lastname}\n      onChange={this.handleOnChange} \n   />\n   ";
    UsageSamples.WizardPath = "\n   <WizardPath step={4} maxStep={6} />\n   ";
    UsageSamples.Button = "\n   <Button buttonText=\"Simple button\" />\n   <Button buttonText=\"Simple button\" className=\"themebutton dark\" />\n   <Button buttonText=\"Simple button\" className=\"themebutton uppercase\" />\n   ";
    UsageSamples.Modal = "\n   <Button buttonText=\"Modal\" onClick={this.openModal} className=\"themebutton dark\" />\n\n   <Modal show={isModalOpen} heading=\"Modal\" onClose={this.closeModal}>\n      Modal content goes here\n   </Modal>\n   ";
    UsageSamples.Radio = "\n   <Radio id=\"radioOne\" label=\"cats\" name=\"radioTestb\" />\n   <Radio id=\"radioTwo\" label=\"dogs\" name=\"radioTestb\" />\n   <Radio id=\"radioThree\" label=\"vombats?\" name=\"radioTestb\" />\n   ";
    return UsageSamples;
}());
exports.default = UsageSamples;
exports.Sample = function (props) {
    if (!props.isShown) {
        return null;
    }
    return (React.createElement("pre", null,
        React.createElement("code", { className: "language-tsx" }, props.children)));
};
exports.patterns = "\n# Good patterns in React\n\nSamples of good developments patterns (not best practices) for React and Typescript.\n\n## Typecript\n\n### Variable scoping\n\nStart with most restrictive scope and allow looser scope when necessary.  \nconst > let > var \n\n### Typing\n\nBy default provide typing for everything and only use \"any\" if there is no other way.  \nMany external modules have no typings and might require use of liberal \"any\".\n\n### Naming schemas\n\n* Interfaces are named with capital I and have double capital. (e.g IUser)\n* Independent modules and utility classes have \"Module\" in their name (e.g. validationModule)\n* Models have \"Model\" in their name (e.g. userModel)\n* Use descriptive method naming and opt for \"action\"-describing prefix when possible. \n(e.g. set&ast;, get&ast;, remove&ast;, add&ast;, update&ast;, is&ast;, has&ast;)\n\n\n## React \n\n### Naming schemas\n\n* If component parameter is mapped to attribute, name it after that attribute   \n(name for parameter that holds value would be \"value\" and for parameter holding onclick it would be \"onClick\")\n* Event handler methods should have \"handler\" on their name (e.g handleOnClick, handleSubmit)\n* UI-Interaction methods should describe the interaction (e.g. closeModal, openModal, removeItemFromList).\n* Use descriptive names for components. Name should usable as description for components purpose.\n* Stateless components should have very generic names (e.g. Row, CheckBox) while stateful components have longer more descriptive names (e.g. UserManagementForm)\n* High Order Components should have \"HOC\" in their name (e.g. ProductRowHOC)\n* Stateful component folders are named after main component (e.g. UserManagementForm component lives in UserManagementForm folder)\n\n\n### Component wrapping\n\nIn React, all components are required to have a single root tag. \nSometimes this leads to wrapping components in tags that have no real purpose other than wrapping component. (usually pair of div-tags)\nIn these cases wrapper tags should be replaced with <React.Fragment> to avoid purposeless HTML-output.\n\n### Stateless component VS Class component\n\nIf component doesn't use lifecycle methods and does not hold state, it propably should be stateless component. \nRepresentational components should also generally be stateless components.\nBy similar logic stateful components should mostly contain stateless components instead of direct HTML-output.  \n_**NOTE:** Components that use multiple methods to support Render() are easier to maintain as Class components, even if they have no state or lifecycles._\n\n### About State\n\nState should be kept as clean as possible. Anything that can be derived from other data already stored in state or props should be excluded from it.\nFor example if state has \"firstName\" and \"lastName\" fields, fullName can be derived and doesn't need to exist in state.\nDepending on your choice of validation-library validations might not need to exist in state.\n\n### Stateful Component folder Structure\nStateful components have their own folder. This folder contains all files that are directly and exclusively tied to component.\nSome of the possible residents for stateful folder are:\n* Index (the main stateful component, can also be named same as folder itself)\n* Localization resources\n* Validation rules file\n* Tests\n* Local interfaces\n* Stateless (representational) components, that aren't universally usable\n";


/***/ }),

/***/ "./src/components-stateful/gallery/gallery.tsx":
/*!*****************************************************!*\
  !*** ./src/components-stateful/gallery/gallery.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Prism = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
__webpack_require__(/*! prismjs/components/prism-json.min.js */ "./node_modules/prismjs/components/prism-json.min.js");
__webpack_require__(/*! prismjs/components/prism-typescript.min.js */ "./node_modules/prismjs/components/prism-typescript.min.js");
__webpack_require__(/*! prismjs/components/prism-jsx.min.js */ "./node_modules/prismjs/components/prism-jsx.min.js");
__webpack_require__(/*! prismjs/components/prism-tsx.min.js */ "./node_modules/prismjs/components/prism-tsx.min.js");
var codeSamples_1 = __webpack_require__(/*! ./codeSamples */ "./src/components-stateful/gallery/codeSamples.tsx");
var Markdown = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
var textinput_material_1 = __webpack_require__(/*! ../../components/textinput_material */ "./src/components/textinput_material.tsx");
var Textinput_responsive_1 = __webpack_require__(/*! ../../components/Textinput_responsive */ "./src/components/Textinput_responsive.tsx");
var checkbox_1 = __webpack_require__(/*! ../../components/checkbox */ "./src/components/checkbox.tsx");
var checkbox_slider_1 = __webpack_require__(/*! ../../components/checkbox_slider */ "./src/components/checkbox_slider.tsx");
var radiobutton_1 = __webpack_require__(/*! ../../components/radiobutton */ "./src/components/radiobutton.tsx");
var wizard_path_1 = __webpack_require__(/*! ../../components/wizard_path */ "./src/components/wizard_path.tsx");
var button_1 = __webpack_require__(/*! ../../components/button */ "./src/components/button.tsx");
var tab_1 = __webpack_require__(/*! ../../components/tab */ "./src/components/tab.tsx");
var tabs_1 = __webpack_require__(/*! ../../components/tabs */ "./src/components/tabs.tsx");
var modal_1 = __webpack_require__(/*! ../../components/modal */ "./src/components/modal.tsx");
var react_select_1 = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.es.js");
var Gallery = (function (_super) {
    __extends(Gallery, _super);
    function Gallery() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            firstname: "",
            lastname: "",
            hasCats: false,
            hasDogs: false,
            hadAllergies: false,
            hadNoTimeForAllergies: false,
            amountOfFeet: 0,
            amountOfHands: 0,
            dateOfBirth: null,
            dateOfDeath: null,
            jobList: null,
            job: null,
            showUsageSamples: false,
            showValidationErrors: false,
            allDisabled: false,
            isModalOpen: false,
            bestAnimal: ""
        };
        _this.handleOnChange = function (e) {
            var _a;
            var targetValue = e.target.type === "text" ? e.target.value : e.target.checked;
            var targetName = e.target.name;
            _this.setState((_a = {}, _a[targetName] = targetValue, _a));
        };
        _this.handleSelectOnChange = function (e) {
            var job = e.value;
            _this.setState({ job: job });
        };
        _this.handleMultipleSelectOnChange = function (selectionString) {
            var jobList = selectionString.split(",");
            _this.setState({ jobList: jobList });
        };
        _this.openModal = function () {
            _this.setState({ isModalOpen: true });
        };
        _this.closeModal = function () {
            _this.setState({ isModalOpen: false });
        };
        return _this;
    }
    Gallery.prototype.componentDidMount = function () {
        Prism.highlightAll();
    };
    Gallery.prototype.componentDidUpdate = function () {
        Prism.highlightAll();
    };
    Gallery.prototype.render = function () {
        var _a = this.state, firstname = _a.firstname, lastname = _a.lastname, jobList = _a.jobList, job = _a.job, showValidationErrors = _a.showValidationErrors, hadNoTimeForAllergies = _a.hadNoTimeForAllergies, isModalOpen = _a.isModalOpen, hasCats = _a.hasCats, hasDogs = _a.hasDogs, amountOfHands = _a.amountOfHands, dateOfBirth = _a.dateOfBirth, dateOfDeath = _a.dateOfDeath, allDisabled = _a.allDisabled, showUsageSamples = _a.showUsageSamples;
        var fullname = firstname + " " + lastname;
        var validation = (showValidationErrors) ? "validation error" : null;
        return (React.createElement("section", { className: "gallery" },
            React.createElement("h2", { className: "themeheading" }, "Component gallery"),
            React.createElement("section", { className: "settings" },
                React.createElement("label", { className: "settings--label" }, "Gallery settings | "),
                React.createElement(checkbox_slider_1.default, { name: "showUsageSamples", label: "Display code examples", id: "showUsageSamples", checked: showUsageSamples, onChange: this.handleOnChange }),
                React.createElement(checkbox_slider_1.default, { name: "allDisabled", label: "Disable all input elements", id: "disableAll", checked: allDisabled, onChange: this.handleOnChange }),
                React.createElement(checkbox_slider_1.default, { name: "showValidationErrors", label: "Show validation errors", id: "showValidadErrors", checked: showValidationErrors, onChange: this.handleOnChange })),
            React.createElement("article", { className: "item" },
                React.createElement("h4", { className: "themeheading negative padded" }, "TextInput | Material design"),
                React.createElement("div", { className: "item--content" },
                    React.createElement("section", { className: "content--lg" },
                        React.createElement(textinput_material_1.default, { name: "firstname", label: "Firstname", value: firstname, disabled: allDisabled, onChange: this.handleOnChange, validation: validation }),
                        React.createElement(textinput_material_1.default, { name: "lastname", label: "Lastname", value: lastname, disabled: allDisabled, onChange: this.handleOnChange, validation: validation }),
                        React.createElement("div", { className: "emphasis-wrapper negative" }, fullname),
                        React.createElement(codeSamples_1.Sample, { isShown: showUsageSamples }, codeSamples_1.default.MaterialInput)))),
            React.createElement("article", { className: "item" },
                React.createElement("h4", { className: "themeheading negative padded" }, "TextInput | responsive design"),
                React.createElement("div", { className: "item--content" },
                    React.createElement("section", { className: "content--lg" },
                        React.createElement(Textinput_responsive_1.default, { name: "firstname", id: "firstnameresp", label: "Firstname", value: firstname, disabled: allDisabled, onChange: this.handleOnChange, validation: validation }),
                        React.createElement(Textinput_responsive_1.default, { name: "lastname", id: "lastnameresp", label: "Lastname", value: lastname, disabled: allDisabled, onChange: this.handleOnChange, validation: validation }),
                        React.createElement("div", { className: "emphasis-wrapper negative" }, fullname),
                        React.createElement(codeSamples_1.Sample, { isShown: showUsageSamples }, codeSamples_1.default.ResponsiveInput)))),
            React.createElement("article", { className: "item" },
                React.createElement("h4", { className: "themeheading negative padded" }, "Checkbox | CSS"),
                React.createElement("div", { className: "item--content" },
                    React.createElement("section", { className: "content--lg" },
                        React.createElement(checkbox_1.default, { name: "hasCats", label: "Has cats", id: "hascatssimple", checked: hasCats, disabled: allDisabled, onChange: this.handleOnChange }),
                        React.createElement(checkbox_1.default, { name: "hasDogs", label: "Has Dogs", id: "hasdogssimple", checked: hasDogs, disabled: allDisabled, onChange: this.handleOnChange }),
                        React.createElement(codeSamples_1.Sample, { isShown: showUsageSamples }, codeSamples_1.default.CheckBox)))),
            React.createElement("article", { className: "item" },
                React.createElement("h4", { className: "themeheading negative padded" }, "Checkbox | CSS-Slider"),
                React.createElement("div", { className: "item--content" },
                    React.createElement("section", { className: "content--lg" },
                        React.createElement(checkbox_slider_1.default, { name: "hasCats", label: "Has cats", id: "hascatsslider", checked: hasCats, disabled: allDisabled, onChange: this.handleOnChange }),
                        React.createElement(checkbox_slider_1.default, { name: "hasDogs", label: "Has cats", id: "hasdogsslider", checked: hasDogs, disabled: allDisabled, onChange: this.handleOnChange }),
                        React.createElement(codeSamples_1.Sample, { isShown: showUsageSamples }, codeSamples_1.default.SliderCheckBox)))),
            React.createElement("article", { className: "item" },
                React.createElement("h4", { className: "themeheading negative padded" }, "Radiobutton | CSS radiobutton"),
                React.createElement("div", { className: "item--content" },
                    React.createElement("section", { className: "content--lg" },
                        React.createElement(radiobutton_1.default, { id: "radioOne", disabled: allDisabled, label: "cats", name: "bestAnimal", onChange: this.handleOnChange }),
                        React.createElement(radiobutton_1.default, { id: "radioTwo", disabled: allDisabled, label: "dogs", name: "bestAnimal", onChange: this.handleOnChange }),
                        React.createElement(radiobutton_1.default, { id: "radioThree", disabled: allDisabled, label: "vombats?", name: "bestAnimal", onChange: this.handleOnChange }),
                        React.createElement(codeSamples_1.Sample, { isShown: showUsageSamples }, codeSamples_1.default.Radio)))),
            React.createElement("article", { className: "item" },
                React.createElement("h4", { className: "themeheading negative padded" }, "Tabs | easy to use tabbed content"),
                React.createElement("div", { className: "item--content" },
                    React.createElement("section", { className: "content--lg" },
                        React.createElement(tabs_1.default, null,
                            React.createElement(tab_1.default, { title: "Tab#1" }, "Sample content \"tab 1\""),
                            React.createElement(tab_1.default, { title: "Tab#2" }, "Sample content \"tab 2\""),
                            React.createElement(tab_1.default, { title: "Tab#3" }, "Sample content \"tab 3\"")),
                        React.createElement(codeSamples_1.Sample, { isShown: showUsageSamples }, codeSamples_1.default.Tabs)))),
            React.createElement("article", { className: "item" },
                React.createElement("h4", { className: "themeheading negative padded" }, "Select | Rich select component with search and multiselect"),
                React.createElement("div", { className: "item--content" },
                    React.createElement("section", { className: "content--lg" },
                        React.createElement(react_select_1.default, { id: "selectMultipleValue", multi: true, simpleValue: true, value: jobList, disabled: allDisabled, onChange: this.handleMultipleSelectOnChange, options: jobs }),
                        React.createElement(react_select_1.default, { id: "selectSingleValue", value: job, disabled: allDisabled, onChange: this.handleSelectOnChange, name: "job", options: jobs }),
                        React.createElement(codeSamples_1.Sample, { isShown: showUsageSamples }, codeSamples_1.default.Select)))),
            React.createElement("article", { className: "item" },
                React.createElement("h4", { className: "themeheading negative padded" }, "Button | basic button with variants"),
                React.createElement("div", { className: "item--content" },
                    React.createElement("section", { className: "content--lg" },
                        React.createElement(button_1.default, { buttonText: "Simple button", disabled: allDisabled }),
                        React.createElement(button_1.default, { buttonText: "Simple button", disabled: allDisabled, className: "themebutton dark" }),
                        React.createElement(button_1.default, { buttonText: "Simple button", disabled: allDisabled, className: "themebutton uppercase" }),
                        React.createElement(codeSamples_1.Sample, { isShown: showUsageSamples }, codeSamples_1.default.Button)))),
            React.createElement("article", { className: "item" },
                React.createElement("h4", { className: "themeheading negative padded" }, "Modal | simple modal component (click modal-button to open)"),
                React.createElement("div", { className: "item--content" },
                    React.createElement("section", { className: "content--lg" },
                        React.createElement(button_1.default, { buttonText: "Modal", disabled: allDisabled, onClick: this.openModal, className: "themebutton dark" }),
                        React.createElement(modal_1.default, { show: isModalOpen, heading: "Modal", onClose: this.closeModal }, "Modal content goes here"),
                        React.createElement(codeSamples_1.Sample, { isShown: showUsageSamples }, codeSamples_1.default.Modal)))),
            React.createElement("article", { className: "item" },
                React.createElement("h4", { className: "themeheading negative padded" }, "WizardPath | Form \"step\" visualization"),
                React.createElement("div", { className: "spacing" }),
                React.createElement("div", { className: "item--content" },
                    React.createElement("section", { className: "content--lg" },
                        React.createElement(wizard_path_1.default, { step: 4, maxStep: 6 }),
                        React.createElement(codeSamples_1.Sample, { isShown: showUsageSamples }, codeSamples_1.default.WizardPath)))),
            React.createElement("article", { className: "item" },
                React.createElement("h4", { className: "themeheading negative padded" }, "Loader | Simple pure CSS loader"),
                React.createElement("div", { className: "item--content" },
                    React.createElement("section", { className: "content--lg" },
                        React.createElement("div", { className: "loader" }),
                        React.createElement(codeSamples_1.Sample, { isShown: showUsageSamples }, codeSamples_1.default.Loader)))),
            React.createElement("div", { className: "content--lg" },
                React.createElement(Markdown, { source: codeSamples_1.patterns }))));
    };
    return Gallery;
}(React.Component));
exports.default = Gallery;
var jobs = [
    { value: "1", label: "Headman" },
    { value: "2", label: "Bossman" },
    { value: "3", label: "BigBoss" },
    { value: "4", label: "Headhunter" },
    { value: "5", label: "Paladin" },
    { value: "6", label: "WhiteKnight" },
    { value: "7", label: "Jobseeker" },
    { value: "8", label: "Magician" },
    { value: "9", label: "NeoPaladin" },
    { value: "10", label: "NobelMan" }
];


/***/ }),

/***/ "./src/components-stateful/liveSocketChat/line.tsx":
/*!*********************************************************!*\
  !*** ./src/components-stateful/liveSocketChat/line.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Line = (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.render = function () {
        var message = this.props.message;
        var userClass;
        switch (message.userType) {
            case 0:
                userClass = "line user-system";
                break;
            case 1:
                userClass = "line user-admin";
                break;
            default:
                userClass = "line";
                break;
        }
        var parsedTime = new Date(message.timestamp);
        var minutes = (parsedTime.getMinutes() < 10) ? "0" + parsedTime.getMinutes() : parsedTime.getMinutes();
        var hours = (parsedTime.getHours() < 10) ? "0" + parsedTime.getHours() : parsedTime.getHours();
        var stamp = hours + ":" + minutes;
        return (React.createElement("div", { className: userClass },
            React.createElement("div", { className: "line-user" },
                React.createElement("i", { className: "fa fa-user" }),
                message.user),
            React.createElement("div", { className: "line-message" }, message.content),
            React.createElement("div", { className: "line-timestamp" }, stamp)));
    };
    return Line;
}(React.Component));
exports.default = Line;


/***/ }),

/***/ "./src/components-stateful/liveSocketChat/liveSocketChat.tsx":
/*!*******************************************************************!*\
  !*** ./src/components-stateful/liveSocketChat/liveSocketChat.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
var annoModule_1 = __webpack_require__(/*! ../../utils/annoModule */ "./src/utils/annoModule.ts");
var announcement_1 = __webpack_require__(/*! ../announcement/announcement */ "./src/components-stateful/announcement/announcement.tsx");
var line_1 = __webpack_require__(/*! ./line */ "./src/components-stateful/liveSocketChat/line.tsx");
var selectUserMenu_1 = __webpack_require__(/*! ./selectUserMenu */ "./src/components-stateful/liveSocketChat/selectUserMenu.tsx");
var textinput_plain_1 = __webpack_require__(/*! ../../components/textinput_plain */ "./src/components/textinput_plain.tsx");
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
        return (React.createElement(React.Fragment, null,
            React.createElement(announcement_1.default, { message: "We are currently in live mode chat intended only for live users. \r\n               No reqistration required. Your chat history won't be used \r\n               for any nefarious purposes... mostly." }),
            React.createElement("div", { className: "spacing" }),
            React.createElement("article", { className: "chat" },
                React.createElement("section", { className: "chatwindow", id: "chatwindow" },
                    React.createElement("div", { className: "chatlog", id: "chatlog" }, this.state.messageHistory.map(function (item, index) {
                        return React.createElement(line_1.default, { key: index, message: item });
                    })),
                    React.createElement(textinput_plain_1.default, { value: message, name: "message", onKeyUp: onKeyUp, onChange: onChange, placeholder: placeholder })),
                React.createElement(selectUserMenu_1.default, { onClick: function (data) { return _this.connectToChatAs(data); }, statusList: statusList, localUser: localUser }))));
    };
    return ChatWindow;
}(React.Component));
exports.default = ChatWindow;


/***/ }),

/***/ "./src/components-stateful/liveSocketChat/selectUserMenu.tsx":
/*!*******************************************************************!*\
  !*** ./src/components-stateful/liveSocketChat/selectUserMenu.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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


/***/ }),

/***/ "./src/components-stateful/productForm/fileUpload.tsx":
/*!************************************************************!*\
  !*** ./src/components-stateful/productForm/fileUpload.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var file_dropzone_1 = __webpack_require__(/*! ../../components/file_dropzone */ "./src/components/file_dropzone.tsx");
var button_1 = __webpack_require__(/*! ../../components/button */ "./src/components/button.tsx");
var FileUpload = (function (_super) {
    __extends(FileUpload, _super);
    function FileUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            file: null
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.submitFile(_this.state.file);
        };
        _this.submitFile = function (file) {
            var url = '/api/filehandler';
            var formData = new FormData();
            var config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            formData.append("file", file);
            axios_1.default.post(url, formData, config);
        };
        _this.handleFileChange = function (file) {
            _this.setState({ file: file });
        };
        return _this;
    }
    FileUpload.prototype.render = function () {
        return (React.createElement("form", { action: "/api/filehandler", onSubmit: this.handleSubmit, method: "post", encType: "multipart/form-data" },
            React.createElement(file_dropzone_1.default, { onFileChange: this.handleFileChange }),
            React.createElement(button_1.default, { type: "submit", buttonText: "Submit image" })));
    };
    return FileUpload;
}(React.Component));
exports.default = FileUpload;


/***/ }),

/***/ "./src/components-stateful/productForm/localization.ts":
/*!*************************************************************!*\
  !*** ./src/components-stateful/productForm/localization.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_localization_1 = __webpack_require__(/*! react-localization */ "./node_modules/react-localization/lib/LocalizedStrings.js");
var resourceFile = new react_localization_1.default({
    en: {
        tabGeneral: "General",
        tabNotes: "Notes",
        tabAvatar: "Avatar",
        tabPrices: "Price",
        tabQuantity: "Quantity",
        tabAvaibility: "Avaibility",
    },
    fi: {
        tabGeneral: "General",
        tabNotes: "Notes",
        tabAvatar: "Avatar",
        tabPrices: "Price",
        tabQuantity: "Quantity",
        tabAvaibility: "Avaibility",
    }
});
exports.default = resourceFile;


/***/ }),

/***/ "./src/components-stateful/productForm/productForm.tsx":
/*!*************************************************************!*\
  !*** ./src/components-stateful/productForm/productForm.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var button_1 = __webpack_require__(/*! ../../components/button */ "./src/components/button.tsx");
var localization_1 = __webpack_require__(/*! ./localization */ "./src/components-stateful/productForm/localization.ts");
var tabs_1 = __webpack_require__(/*! ../../components/tabs */ "./src/components/tabs.tsx");
var tab_1 = __webpack_require__(/*! ../../components/tab */ "./src/components/tab.tsx");
var tabGeneral_1 = __webpack_require__(/*! ./tabGeneral */ "./src/components-stateful/productForm/tabGeneral.tsx");
var tabNote_1 = __webpack_require__(/*! ./tabNote */ "./src/components-stateful/productForm/tabNote.tsx");
var tabAvaibility_1 = __webpack_require__(/*! ./tabAvaibility */ "./src/components-stateful/productForm/tabAvaibility.tsx");
var tabAvatar_1 = __webpack_require__(/*! ./tabAvatar */ "./src/components-stateful/productForm/tabAvatar.tsx");
var tabPrices_1 = __webpack_require__(/*! ./tabPrices */ "./src/components-stateful/productForm/tabPrices.tsx");
var tabQuantity_1 = __webpack_require__(/*! ./tabQuantity */ "./src/components-stateful/productForm/tabQuantity.tsx");
var ProductForm = (function (_super) {
    __extends(ProductForm, _super);
    function ProductForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            product: _this.props.product,
        };
        _this.handleOnChange = function (e) {
            var targetValue = e.target.type === "text" ? e.target.value : e.target.checked;
            var targetName = e.target.name;
            var product = Object.assign({}, _this.state.product);
            product[targetName] = targetValue;
            _this.setState({ product: product });
        };
        _this.handleTypeSelectOnChange = function (selectionString) {
            var selectionArray = selectionString.split(",");
            var product = Object.assign({}, _this.state.product);
            product.productType = selectionArray;
            _this.setState({ product: product });
        };
        _this.handleTagSelectOnChange = function (selectionString) {
            var product = Object.assign({}, _this.state.product);
            product.tag = selectionString;
            _this.setState({ product: product });
        };
        _this.handleAvatarSelection = function (selectedAvatar) {
            console.log(selectedAvatar.name);
            console.log(selectedAvatar.path);
        };
        _this.handleFromChange = function (from) {
            console.log(from);
            var endOf = _this.state.product.endOfServiceDate;
        };
        _this.handleSave = function () {
            _this.props.onSave(_this.state.product);
        };
        _this.handleCancel = function () {
            _this.props.onCancel();
        };
        return _this;
    }
    ProductForm.prototype.render = function () {
        var _a = this.state.product, hasPrice = _a.hasPrice, hasQuantityRules = _a.hasQuantityRules, hasSetDateValues = _a.hasSetDateValues, hasImage = _a.hasImage;
        var product = this.state.product;
        var handleOnChange = this.handleOnChange;
        var handleFromChange = this.handleFromChange;
        return (React.createElement("div", { className: "product--modal" },
            React.createElement(tabs_1.default, null,
                React.createElement(tab_1.default, { title: localization_1.default.tabGeneral },
                    React.createElement(tabGeneral_1.default, { onChange: handleOnChange, onTypeSelectChange: this.handleTypeSelectOnChange, onTagSelectChange: this.handleTagSelectOnChange, product: product })),
                React.createElement(tab_1.default, { title: localization_1.default.tabNotes },
                    React.createElement(tabNote_1.default, { product: product, onChange: handleOnChange })),
                hasImage &&
                    React.createElement(tab_1.default, { title: localization_1.default.tabAvatar },
                        React.createElement(tabAvatar_1.default, { onSelection: this.handleAvatarSelection })),
                hasPrice &&
                    React.createElement(tab_1.default, { title: localization_1.default.tabPrices },
                        React.createElement(tabPrices_1.default, { onChange: handleOnChange, product: product })),
                hasSetDateValues &&
                    React.createElement(tab_1.default, { title: localization_1.default.tabAvaibility },
                        React.createElement(tabAvaibility_1.default, { onDayChange: handleFromChange, product: product })),
                hasQuantityRules &&
                    React.createElement(tab_1.default, { title: localization_1.default.tabQuantity },
                        React.createElement(tabQuantity_1.default, { onChange: handleOnChange, product: product }))),
            React.createElement("div", { className: "line-thin" }),
            React.createElement("div", { className: "row-flex spaced" },
                React.createElement(button_1.default, { buttonText: "Cancel", onClick: this.handleCancel }),
                React.createElement(button_1.default, { buttonText: "Save", onClick: this.handleSave }))));
    };
    return ProductForm;
}(React.Component));
exports.default = ProductForm;


/***/ }),

/***/ "./src/components-stateful/productForm/tabAvaibility.tsx":
/*!***************************************************************!*\
  !*** ./src/components-stateful/productForm/tabAvaibility.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var DayPickerInput = __webpack_require__(/*! react-day-picker/DayPickerInput */ "./node_modules/react-day-picker/DayPickerInput.js").default;
var TabNote = (function (_super) {
    __extends(TabNote, _super);
    function TabNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabNote.prototype.render = function () {
        var _a = this.props, product = _a.product, onDayChange = _a.onDayChange;
        var endOfServiceDate = product.endOfServiceDate;
        return (React.createElement("section", null,
            React.createElement("h4", { className: "themeheading underlined" }, "Avaibility settings"),
            React.createElement(DayPickerInput, { value: endOfServiceDate, onDayChange: onDayChange }),
            React.createElement(DayPickerInput, { value: endOfServiceDate, onDayChange: onDayChange }),
            React.createElement("h4", { className: "themeheading underlined" }, "Remove from catalog"),
            React.createElement(DayPickerInput, { value: endOfServiceDate, onDayChange: onDayChange }),
            React.createElement("h4", { className: "themeheading underlined" }, "Internal dates"),
            React.createElement(DayPickerInput, { value: endOfServiceDate, onDayChange: onDayChange })));
    };
    return TabNote;
}(React.Component));
exports.default = TabNote;


/***/ }),

/***/ "./src/components-stateful/productForm/tabAvatar.tsx":
/*!***********************************************************!*\
  !*** ./src/components-stateful/productForm/tabAvatar.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var avatarSelector_1 = __webpack_require__(/*! ../avatarSelector/avatarSelector */ "./src/components-stateful/avatarSelector/avatarSelector.tsx");
var fileUpload_1 = __webpack_require__(/*! ./fileUpload */ "./src/components-stateful/productForm/fileUpload.tsx");
var tabs_1 = __webpack_require__(/*! ../../components/tabs */ "./src/components/tabs.tsx");
var tab_1 = __webpack_require__(/*! ../../components/tab */ "./src/components/tab.tsx");
var AvatarTab = (function (_super) {
    __extends(AvatarTab, _super);
    function AvatarTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarTab.prototype.render = function () {
        return (React.createElement("section", null,
            React.createElement("h4", { className: "themeheading" }, "Product image"),
            React.createElement(tabs_1.default, null,
                React.createElement(tab_1.default, { title: "Select premade" },
                    React.createElement("span", null, "Select premade image"),
                    React.createElement("div", { className: "avatar--grid" },
                        React.createElement(avatarSelector_1.default, { onSelection: this.props.onSelection }))),
                React.createElement(tab_1.default, { title: "Upload custom" },
                    React.createElement("span", null, "TEMP: currently uploads submitted file directly to server"),
                    React.createElement(fileUpload_1.default, null)))));
    };
    return AvatarTab;
}(React.Component));
exports.default = AvatarTab;


/***/ }),

/***/ "./src/components-stateful/productForm/tabGeneral.tsx":
/*!************************************************************!*\
  !*** ./src/components-stateful/productForm/tabGeneral.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Textinput_responsive_1 = __webpack_require__(/*! ../../components/Textinput_responsive */ "./src/components/Textinput_responsive.tsx");
var checkbox_slider_1 = __webpack_require__(/*! ../../components/checkbox_slider */ "./src/components/checkbox_slider.tsx");
var react_select_1 = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.es.js");
var TabGeneral = (function (_super) {
    __extends(TabGeneral, _super);
    function TabGeneral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabGeneral.prototype.render = function () {
        var _a = this.props, product = _a.product, onChange = _a.onChange, onTagSelectChange = _a.onTagSelectChange, onTypeSelectChange = _a.onTypeSelectChange;
        var name = product.name, id = product.id, description = product.description, productType = product.productType, hasImage = product.hasImage, hasPrice = product.hasPrice, hasQuantityRules = product.hasQuantityRules, hasSetDateValues = product.hasSetDateValues, tag = product.tag;
        return (React.createElement("section", null,
            React.createElement("h4", { className: "themeheading underlined" }, "Base Properties"),
            React.createElement(Textinput_responsive_1.default, { label: "Name", name: "name", id: "name", value: name, onChange: onChange }),
            React.createElement(Textinput_responsive_1.default, { label: "Item ID", name: "id", id: "id", value: id, onChange: onChange }),
            React.createElement(Textinput_responsive_1.default, { label: "Product summary", name: "description", id: "description", value: description, onChange: onChange }),
            React.createElement("div", { className: "themeinput-responsive" },
                React.createElement("label", { htmlFor: "selectID" }, "Tag"),
                React.createElement(react_select_1.default, { id: "tagSelectID", simpleValue: true, name: "tag", value: tag, onChange: onTagSelectChange, options: tagOptions })),
            React.createElement("div", { className: "themeinput-responsive" },
                React.createElement("label", { htmlFor: "selectID" }, "Types"),
                React.createElement(react_select_1.default, { id: "selectID", multi: true, simpleValue: true, name: "productType", value: productType, onChange: onTypeSelectChange, options: productTypeOptions })),
            React.createElement("h4", { className: "themeheading underlined" }, "Addidional properties"),
            React.createElement(checkbox_slider_1.default, { label: "Has Product images", id: "imagePropertiesInUse", name: "hasImage", checked: hasImage, onChange: onChange }),
            React.createElement(checkbox_slider_1.default, { label: "Has price table", id: "priceSettingsInUse", name: "hasPrice", checked: hasPrice, onChange: onChange }),
            React.createElement(checkbox_slider_1.default, { label: "Has avaibility settings", id: "hasSetDateValues", name: "hasSetDateValues", checked: hasSetDateValues, onChange: onChange }),
            React.createElement(checkbox_slider_1.default, { label: "Has limited supply", id: "quantitySettingsInUse", name: "hasQuantityRules", checked: hasQuantityRules, onChange: onChange })));
    };
    return TabGeneral;
}(React.Component));
exports.default = TabGeneral;
var tagOptions = [
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" }
];
var productTypeOptions = [
    { value: "armor", label: "Armor" },
    { value: "weapon", label: "Weapon" },
    { value: "accessory", label: "Accessory" },
    { value: "consumable", label: "Consumable" },
    { value: "tool", label: "Tool" },
    { value: "trash", label: "Trash" },
    { value: "quest", label: "Quest" },
    { value: "gm_debug", label: "Gm_debug" }
];


/***/ }),

/***/ "./src/components-stateful/productForm/tabNote.tsx":
/*!*********************************************************!*\
  !*** ./src/components-stateful/productForm/tabNote.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var textArea_1 = __webpack_require__(/*! ../../components/textArea */ "./src/components/textArea.tsx");
var TabNote = (function (_super) {
    __extends(TabNote, _super);
    function TabNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabNote.prototype.render = function () {
        var _a = this.props, product = _a.product, onChange = _a.onChange;
        var memoNote = product.memoNote;
        return (React.createElement("section", null,
            React.createElement("h4", { className: "themeheading underlined" }, "Summary"),
            React.createElement(textArea_1.default, { label: "Product summary", name: "memoNote", id: "memoNote", value: memoNote, onChange: onChange })));
    };
    return TabNote;
}(React.Component));
exports.default = TabNote;


/***/ }),

/***/ "./src/components-stateful/productForm/tabPrices.tsx":
/*!***********************************************************!*\
  !*** ./src/components-stateful/productForm/tabPrices.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Textinput_responsive_1 = __webpack_require__(/*! ../../components/Textinput_responsive */ "./src/components/Textinput_responsive.tsx");
var TabGeneral = (function (_super) {
    __extends(TabGeneral, _super);
    function TabGeneral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabGeneral.prototype.render = function () {
        var _a = this.props, product = _a.product, onChange = _a.onChange;
        var priceWithVat = product.priceWithVat, price = product.price;
        return (React.createElement("section", null,
            React.createElement("h4", { className: "themeheading underlined" }, "Product associated price"),
            React.createElement(Textinput_responsive_1.default, { isSmall: true, label: "Base cost", name: "price", value: price.toString(), onChange: onChange }),
            React.createElement(Textinput_responsive_1.default, { isSmall: true, label: "Taxless cost", name: "priceWithVat", value: priceWithVat.toString(), onChange: onChange })));
    };
    return TabGeneral;
}(React.Component));
exports.default = TabGeneral;


/***/ }),

/***/ "./src/components-stateful/productForm/tabQuantity.tsx":
/*!*************************************************************!*\
  !*** ./src/components-stateful/productForm/tabQuantity.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Textinput_responsive_1 = __webpack_require__(/*! ../../components/Textinput_responsive */ "./src/components/Textinput_responsive.tsx");
var TabNote = (function (_super) {
    __extends(TabNote, _super);
    function TabNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabNote.prototype.render = function () {
        var _a = this.props, product = _a.product, onChange = _a.onChange;
        var minAmount = product.minAmount, maxAmount = product.maxAmount;
        return (React.createElement("section", null,
            React.createElement("h4", { className: "themeheading underlined" }, "Quantity rules"),
            React.createElement(Textinput_responsive_1.default, { label: "Minimum required amount", name: "minAmount", value: minAmount.toString(), onChange: onChange }),
            React.createElement(Textinput_responsive_1.default, { label: "Maximum allowed amount", name: "maxAmount", value: maxAmount.toString(), onChange: onChange })));
    };
    return TabNote;
}(React.Component));
exports.default = TabNote;


/***/ }),

/***/ "./src/components/ProgressBar.tsx":
/*!****************************************!*\
  !*** ./src/components/ProgressBar.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropgressBar = function (props) {
    var percentage = props.percentage, showStatusText = props.showStatusText;
    var cappedPercentage = (percentage >= 100) ? 100 : percentage;
    var statusText = (showStatusText) ? React.createElement("span", null, cappedPercentage + "%") : null;
    var className = (showStatusText) ? "themeprogress showingStatus" : "themeprogress";
    return (React.createElement("div", { className: className, title: cappedPercentage.toString() },
        statusText,
        React.createElement("div", { className: "themeprogress--fill", style: { width: cappedPercentage + "%" } })));
};
exports.default = PropgressBar;


/***/ }),

/***/ "./src/components/Textinput_responsive.tsx":
/*!*************************************************!*\
  !*** ./src/components/Textinput_responsive.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var InputResponsive = (function (_super) {
    __extends(InputResponsive, _super);
    function InputResponsive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputResponsive.prototype.render = function () {
        var _a = this.props, id = _a.id, value = _a.value, label = _a.label, validation = _a.validation, isSmall = _a.isSmall, tooltip = _a.tooltip, rest = __rest(_a, ["id", "value", "label", "validation", "isSmall", "tooltip"]);
        var hasContent = value && value.length > 0;
        var isDisabled = this.props.disabled;
        var classString = "themeinput-responsive";
        if (hasContent) {
            classString += " hasContent";
        }
        if (isDisabled) {
            classString += " disabled";
        }
        if (validation) {
            classString += " invalid";
        }
        if (isSmall) {
            classString += " number";
        }
        return (React.createElement("div", { className: classString, "data-tooltip-error": validation },
            React.createElement("label", { title: tooltip, htmlFor: id },
                " ",
                label,
                " "),
            React.createElement("input", __assign({ type: "text", id: id }, rest, { value: value }))));
    };
    return InputResponsive;
}(React.Component));
exports.default = InputResponsive;


/***/ }),

/***/ "./src/components/button.tsx":
/*!***********************************!*\
  !*** ./src/components/button.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, className = _a.className, buttonText = _a.buttonText, type = _a.type, rest = __rest(_a, ["className", "buttonText", "type"]);
        className = className || "themebutton";
        buttonText = buttonText || "button";
        type = type || "button";
        return (React.createElement("button", __assign({ type: type, className: className }, rest), buttonText));
    };
    return Button;
}(React.Component));
exports.default = Button;


/***/ }),

/***/ "./src/components/checkbox.tsx":
/*!*************************************!*\
  !*** ./src/components/checkbox.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, id = _a.id, label = _a.label, rest = __rest(_a, ["id", "label"]);
        return (React.createElement("div", { className: "themecheckbox" },
            React.createElement("input", __assign({ type: "checkbox", id: id }, rest)),
            React.createElement("label", { htmlFor: id }, label)));
    };
    return Checkbox;
}(React.Component));
exports.default = Checkbox;


/***/ }),

/***/ "./src/components/checkbox_slider.tsx":
/*!********************************************!*\
  !*** ./src/components/checkbox_slider.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var SliderCheckbox = (function (_super) {
    __extends(SliderCheckbox, _super);
    function SliderCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliderCheckbox.prototype.render = function () {
        var _a = this.props, id = _a.id, label = _a.label, rest = __rest(_a, ["id", "label"]);
        return (React.createElement("div", { className: "themeslider" },
            React.createElement("input", __assign({ type: "checkbox", id: id }, rest)),
            React.createElement("label", { htmlFor: id }, label)));
    };
    return SliderCheckbox;
}(React.Component));
exports.default = SliderCheckbox;


/***/ }),

/***/ "./src/components/confirm.tsx":
/*!************************************!*\
  !*** ./src/components/confirm.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ConfirmationDialog = (function (_super) {
    __extends(ConfirmationDialog, _super);
    function ConfirmationDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listenKeyboard = function (event) {
            if (event.key === 'Escape' || event.keyCode === 27) {
                _this.props.cancel();
            }
        };
        _this.onDialogClick = function (event) {
            event.stopPropagation();
        };
        _this.handleCancel = function () {
            _this.props.cancel();
        };
        _this.handleProceed = function () {
            _this.props.proceed();
        };
        return _this;
    }
    ConfirmationDialog.prototype.componentDidMount = function () {
        if (this.props.cancel) {
            window.addEventListener('keydown', this.listenKeyboard, true);
        }
    };
    ConfirmationDialog.prototype.componentWillUnmount = function () {
        if (this.props.cancel) {
            window.removeEventListener('keydown', this.listenKeyboard, true);
        }
    };
    ConfirmationDialog.prototype.render = function () {
        var _a = this.props, confirmation = _a.confirmation, show = _a.show, dismiss = _a.dismiss, heading = _a.heading;
        if (!this.props.show) {
            return null;
        }
        return (React.createElement("div", { className: "modal-fade", onClick: this.handleCancel },
            React.createElement("div", { className: "modal-box animated--scaleIn sm", onClick: this.onDialogClick },
                React.createElement("div", { className: "modal-heading" },
                    heading && React.createElement("h3", { className: "themeheading" }, heading),
                    React.createElement("button", { onClick: this.handleCancel, type: "button", className: "close-button noborder" })),
                React.createElement("div", { className: "modal-content-wrap" }, confirmation),
                React.createElement("div", { className: "row-flex spaced" },
                    React.createElement("button", { className: "themebutton", onClick: this.handleCancel }, "Cancel"),
                    React.createElement("button", { className: "themebutton", autoFocus: true, onClick: this.handleProceed }, "Ok")))));
    };
    return ConfirmationDialog;
}(React.Component));
exports.ConfirmationDialog = ConfirmationDialog;
exports.default = ConfirmationDialog;


/***/ }),

/***/ "./src/components/file_dropzone.tsx":
/*!******************************************!*\
  !*** ./src/components/file_dropzone.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var annoModule_1 = __webpack_require__(/*! ../utils/annoModule */ "./src/utils/annoModule.ts");
var FileUpload = (function (_super) {
    __extends(FileUpload, _super);
    function FileUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            imageSource: "",
            active: false,
            loaded: false
        };
        _this.handleDragEnter = function (e) {
            _this.setState({ active: true });
        };
        _this.handleDragLeave = function (e) {
            _this.setState({ active: false });
        };
        _this.handleDragOver = function (e) {
            e.preventDefault();
        };
        _this.handleDropEvent = function (e) {
            e.preventDefault();
            _this.setState({ active: false });
            _this.updatePreview(e.dataTransfer.files[0]);
        };
        _this.handleFileChange = function (e) {
            var file = e.target.files[0];
            _this.updatePreview(file);
        };
        _this.updatePreview = function (file) {
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!file.type.match(pattern)) {
                annoModule_1.default.announce("Only image files allowed", null, "info");
                return;
            }
            _this.setState({ loaded: false });
            reader.onload = function (e) {
                _this.setState({
                    imageSource: reader.result,
                    loaded: true
                });
            };
            reader.readAsDataURL(file);
            _this.props.onFileChange(file);
        };
        return _this;
    }
    FileUpload.prototype.render = function () {
        var _a = this.state, loaded = _a.loaded, imageSource = _a.imageSource, active = _a.active;
        var _b = this.props, onFileChange = _b.onFileChange, rest = __rest(_b, ["onFileChange"]);
        var labelClass = (active) ? "upload--preview active" : "upload--preview";
        return (React.createElement("label", { className: labelClass, onDragEnter: this.handleDragEnter, onDragLeave: this.handleDragLeave, onDragOver: this.handleDragOver, onDrop: this.handleDropEvent },
            loaded ?
                React.createElement("img", { src: imageSource, className: "upload--preview--image" })
                :
                    React.createElement("span", { className: "upload--preview--noImage" },
                        React.createElement("i", { className: "fas fa-upload" }),
                        React.createElement("p", null, "Click this or drag a file here to include it")),
            React.createElement("input", __assign({ type: "file" }, rest, { accept: "image/*", onChange: this.handleFileChange }))));
    };
    return FileUpload;
}(React.Component));
exports.default = FileUpload;


/***/ }),

/***/ "./src/components/img_caption.tsx":
/*!****************************************!*\
  !*** ./src/components/img_caption.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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


/***/ }),

/***/ "./src/components/infotip.tsx":
/*!************************************!*\
  !*** ./src/components/infotip.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Tip = function (props) {
    var message = props.message;
    return (React.createElement("div", { className: "tip" },
        React.createElement("i", { className: "fas fa-info", tabIndex: 0 }),
        React.createElement("div", { className: "tip-message", "data-tooltip-info": message })));
};
exports.default = Tip;


/***/ }),

/***/ "./src/components/modal.tsx":
/*!**********************************!*\
  !*** ./src/components/modal.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listenKeyboard = function (event) {
            if (event.key === 'Escape' || event.keyCode === 27) {
                _this.props.onClose();
            }
        };
        _this.onDialogClick = function (event) {
            event.stopPropagation();
        };
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        if (this.props.onClose) {
            window.addEventListener('keydown', this.listenKeyboard, true);
        }
    };
    Modal.prototype.componentWillUnmount = function () {
        if (this.props.onClose) {
            window.removeEventListener('keydown', this.listenKeyboard, true);
        }
    };
    Modal.prototype.onOverlayClick = function () {
        this.props.onClose();
    };
    Modal.prototype.render = function () {
        var onClose = this.props.onClose;
        var onDialogClick = this.onDialogClick;
        var size = this.props.size || "md";
        if (!this.props.show) {
            return null;
        }
        return (React.createElement("div", { className: "modal-fade", onClick: onClose },
            React.createElement("div", { className: "modal-box animated--scaleIn " + size, onClick: onDialogClick },
                React.createElement("div", { className: "modal-heading" },
                    React.createElement("h3", { className: "themeheading" }, this.props.heading),
                    React.createElement("button", { onClick: onClose, type: "button", className: "close-button noborder" })),
                React.createElement("div", { className: "modal-content-wrap" }, this.props.children))));
    };
    return Modal;
}(React.Component));
exports.default = Modal;


/***/ }),

/***/ "./src/components/radiobutton.tsx":
/*!****************************************!*\
  !*** ./src/components/radiobutton.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Radiobutton = (function (_super) {
    __extends(Radiobutton, _super);
    function Radiobutton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radiobutton.prototype.render = function () {
        var _a = this.props, id = _a.id, label = _a.label, rest = __rest(_a, ["id", "label"]);
        return (React.createElement("div", { className: "themeradio" },
            React.createElement("input", __assign({ type: "radio", id: id }, rest)),
            React.createElement("label", { htmlFor: id },
                " ",
                label,
                " ")));
    };
    return Radiobutton;
}(React.Component));
exports.default = Radiobutton;


/***/ }),

/***/ "./src/components/tab.tsx":
/*!********************************!*\
  !*** ./src/components/tab.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Tab = function (props) {
    var onClick = props.onClick, tabIndex = props.tabIndex, isActive = props.isActive, title = props.title;
    var buttonClass = (isActive) ? "tab-title active" : "tab-title";
    var handleTabClick = function () { return onClick(tabIndex); };
    return (React.createElement("button", { className: buttonClass, onClick: handleTabClick, title: title }, title));
};
exports.default = Tab;


/***/ }),

/***/ "./src/components/tabs.tsx":
/*!*********************************!*\
  !*** ./src/components/tabs.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeTab: _this.props.defaultTabIndex || 0
        };
        _this.setActiveTab = function (activeTab) {
            _this.setState({
                activeTab: activeTab
            });
        };
        return _this;
    }
    Tabs.prototype.renderTabButtons = function () {
        var _this = this;
        return React.Children.map(this.props.children, function (child, index) {
            if (child) {
                return React.cloneElement(child, {
                    onClick: _this.setActiveTab,
                    tabIndex: index,
                    isActive: _this.state.activeTab === index
                });
            }
        });
    };
    Tabs.prototype.renderActiveContent = function () {
        var children = this.props.children;
        var activeTab = this.state.activeTab;
        if (children[activeTab]) {
            return children[activeTab].props.children;
        }
    };
    Tabs.prototype.render = function () {
        return (React.createElement("div", { className: "tabs" },
            React.createElement("div", { className: "tab-titles" }, this.renderTabButtons()),
            React.createElement("div", { className: "tab-content" }, this.renderActiveContent())));
    };
    return Tabs;
}(React.Component));
exports.default = Tabs;


/***/ }),

/***/ "./src/components/textArea.tsx":
/*!*************************************!*\
  !*** ./src/components/textArea.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Select = (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.render = function () {
        var _a = this.props, id = _a.id, value = _a.value, label = _a.label, rest = __rest(_a, ["id", "value", "label"]);
        return (React.createElement("div", { className: "themeTextArea" },
            React.createElement("label", { htmlFor: id }, label),
            React.createElement("textarea", __assign({ id: id, value: value }, rest))));
    };
    return Select;
}(React.Component));
exports.default = Select;


/***/ }),

/***/ "./src/components/textinput_material.tsx":
/*!***********************************************!*\
  !*** ./src/components/textinput_material.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var infotip_1 = __webpack_require__(/*! ./infotip */ "./src/components/infotip.tsx");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var _a = this.props, id = _a.id, value = _a.value, label = _a.label, tooltip = _a.tooltip, validation = _a.validation, rest = __rest(_a, ["id", "value", "label", "tooltip", "validation"]);
        var hasContent = value && value.length > 0;
        var isDisabled = this.props.disabled;
        var classString = "themeinput";
        if (hasContent) {
            classString += " hasContent";
        }
        if (isDisabled) {
            classString += " disabled";
        }
        if (validation) {
            classString += " invalid";
        }
        return (React.createElement("div", { className: classString, "data-tooltip-error": validation },
            React.createElement("input", __assign({ type: "text", id: id }, rest, { value: value })),
            React.createElement("label", { htmlFor: id },
                " ",
                label,
                " "),
            React.createElement("span", { className: "bar" }),
            (tooltip) && React.createElement(infotip_1.default, { message: tooltip })));
    };
    return Input;
}(React.Component));
exports.default = Input;


/***/ }),

/***/ "./src/components/textinput_plain.tsx":
/*!********************************************!*\
  !*** ./src/components/textinput_plain.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var rest = __rest(this.props, []);
        return (React.createElement("input", __assign({ className: "input-plain", type: "text" }, rest)));
    };
    return Input;
}(React.Component));
exports.default = Input;


/***/ }),

/***/ "./src/components/wizard_path.tsx":
/*!****************************************!*\
  !*** ./src/components/wizard_path.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var WizardPath = function (props) {
    var step = props.step, maxStep = props.maxStep;
    var steps = [];
    for (var i = 1; i < maxStep + 1; i++) {
        if (i === step) {
            steps.push(React.createElement("li", { className: "current", key: i },
                React.createElement("div", { className: "bullet" })));
        }
        else {
            steps.push(React.createElement("li", { key: i },
                React.createElement("div", { className: "bullet" })));
        }
    }
    return (React.createElement("ol", { className: "wizard-path" }, steps.map(function (item) { return item; })));
};
exports.default = WizardPath;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./utils/polyfills */ "./src/utils/polyfills.ts");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var layout_1 = __webpack_require__(/*! ./layout/layout */ "./src/layout/layout.tsx");
document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(React.createElement(layout_1.default, null), document.getElementById("root"));
});


/***/ }),

/***/ "./src/layout/footer.tsx":
/*!*******************************!*\
  !*** ./src/layout/footer.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = true;
        return _this;
    }
    Main.prototype.setTheme = function () {
        var link = document.getElementById("stylelink");
        if (this.theme) {
            link.href = "/stylesheets/style_light.min.css";
            this.theme = !this.theme;
        }
        else {
            link.href = "/stylesheets/style.min.css";
            this.theme = !this.theme;
        }
    };
    Main.prototype.render = function () {
        var _this = this;
        return (React.createElement("footer", { className: "footer" },
            React.createElement("a", { href: "https://github.com/mondayCoding/witchnode" },
                React.createElement("span", null, "code lives "),
                React.createElement("i", { className: "fas fa-heart" }),
                React.createElement("span", null, " and dies with ")),
            React.createElement("i", { onClick: function () { return _this.setTheme(); }, className: "fas fa-coffee" })));
    };
    return Main;
}(React.Component));
exports.default = Main;


/***/ }),

/***/ "./src/layout/layout.tsx":
/*!*******************************!*\
  !*** ./src/layout/layout.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var site_1 = __webpack_require__(/*! ./site */ "./src/layout/site.tsx");
var login_1 = __webpack_require__(/*! ./login */ "./src/layout/login.tsx");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isLoggedIn: false,
            loggedRole: null
        };
        _this.logIn = function (role) {
            sessionStorage.setItem("WITCHNODE_ISLOGGEDIN", "true");
            sessionStorage.setItem("WITCHNODE_USERROLE", role.toString());
            _this.setState({ isLoggedIn: true, loggedRole: role });
        };
        return _this;
    }
    Layout.prototype.componentDidMount = function () {
        var isAlreadyLogged = sessionStorage.getItem("WITCHNODE_ISLOGGEDIN") === "true";
        if (isAlreadyLogged) {
            var loggedAs = parseInt(sessionStorage.getItem("WITCHNODE_USERROLE"), 0);
            this.setState({ isLoggedIn: true, loggedRole: loggedAs });
        }
        document.addEventListener("keyup", function (event) {
            if (event.altKey && event.keyCode === 75) {
                console.log("alt + k pressed");
            }
        });
    };
    Layout.prototype.render = function () {
        var loggedIn = this.state.isLoggedIn;
        if (loggedIn) {
            return (React.createElement(exports.IUserContext.Provider, { value: this.state },
                React.createElement(site_1.default, null)));
        }
        else {
            return (React.createElement(login_1.default, { logIn: this.logIn }));
        }
    };
    return Layout;
}(React.Component));
exports.default = Layout;
var loggedRole;
(function (loggedRole) {
    loggedRole[loggedRole["admin"] = 0] = "admin";
    loggedRole[loggedRole["developer"] = 1] = "developer";
    loggedRole[loggedRole["user"] = 2] = "user";
    loggedRole[loggedRole["quest"] = 3] = "quest";
})(loggedRole || (loggedRole = {}));
exports.IUserContext = React.createContext({
    isLoggedIn: false,
    loggedRole: null
});


/***/ }),

/***/ "./src/layout/login.tsx":
/*!******************************!*\
  !*** ./src/layout/login.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var button_1 = __webpack_require__(/*! ../components/button */ "./src/components/button.tsx");
var textinput_material_1 = __webpack_require__(/*! ../components/textinput_material */ "./src/components/textinput_material.tsx");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            username: "",
            password: ""
        };
        _this.handleOnChange = function (e) {
            var _a;
            var _b = e.target, value = _b.value, name = _b.name;
            _this.setState((_a = {}, _a[name] = value, _a));
        };
        _this.handleLoginAsAdmin = function () {
            _this.props.logIn(0);
        };
        _this.handleLoginAsDeveloper = function () {
            _this.props.logIn(1);
        };
        return _this;
    }
    Layout.prototype.render = function () {
        var _a = this.state, username = _a.username, password = _a.password;
        return (React.createElement("div", { className: "login" },
            React.createElement("div", { className: "login--window" },
                React.createElement("h2", { className: "login--window--title" }, "Login"),
                React.createElement("div", { className: "login--window--content" },
                    React.createElement(textinput_material_1.default, { label: "Username or email", name: "username", value: username, id: "usernameID", onChange: this.handleOnChange }),
                    React.createElement(textinput_material_1.default, { label: "Password", name: "password", value: password, id: "passwordID", type: "password", onChange: this.handleOnChange }),
                    React.createElement("section", { className: "forgot-pass" },
                        React.createElement("a", { href: "#" }, "Forgot password?")),
                    React.createElement("div", { className: "row-flex spaced" },
                        React.createElement(button_1.default, { onClick: this.handleLoginAsAdmin, buttonText: "Sign in as Admin" }),
                        React.createElement(button_1.default, { onClick: this.handleLoginAsDeveloper, buttonText: "Sign in as Developer" }))))));
    };
    return Layout;
}(React.Component));
exports.default = Layout;


/***/ }),

/***/ "./src/layout/main.tsx":
/*!*****************************!*\
  !*** ./src/layout/main.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var chatPage_1 = __webpack_require__(/*! ../pages/chatPage */ "./src/pages/chatPage.tsx");
var createCharPage_1 = __webpack_require__(/*! ../pages/createCharPage */ "./src/pages/createCharPage.tsx");
var dashboard_1 = __webpack_require__(/*! ../pages/dashboard */ "./src/pages/dashboard.tsx");
var docsPage_1 = __webpack_require__(/*! ../pages/docsPage */ "./src/pages/docsPage.tsx");
var galleryPage_1 = __webpack_require__(/*! ../pages/galleryPage */ "./src/pages/galleryPage.tsx");
var settingsPage_1 = __webpack_require__(/*! ../pages/settingsPage */ "./src/pages/settingsPage.tsx");
var soonpage_1 = __webpack_require__(/*! ../pages/soonpage */ "./src/pages/soonpage.tsx");
var profilePage_1 = __webpack_require__(/*! ../pages/profilePage */ "./src/pages/profilePage.tsx");
var apiMockPage_1 = __webpack_require__(/*! ../pages/apiMockPage */ "./src/pages/apiMockPage.tsx");
var coinFlipPage_1 = __webpack_require__(/*! ../pages/coinFlipPage */ "./src/pages/coinFlipPage.tsx");
var complexPage_1 = __webpack_require__(/*! ../pages/complexPage */ "./src/pages/complexPage.tsx");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasError: false
        };
        return _this;
    }
    Main.prototype.componentDidCatch = function (error, info) {
        this.setState({ hasError: true });
        console.error(error);
        console.error(info);
    };
    Main.prototype.render = function () {
        return (React.createElement(React.Fragment, null, (!this.state.hasError) ?
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: dashboard_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/createchar", component: createCharPage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/soon", component: soonpage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/gallery", component: galleryPage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/witchchat", component: chatPage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/profile", component: profilePage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/settings", component: settingsPage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/docs", component: docsPage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/apimock", component: apiMockPage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/coinflip", component: coinFlipPage_1.default }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/complex", component: complexPage_1.default }),
                React.createElement(react_router_dom_1.Redirect, { to: "/" }))
            :
                React.createElement("section", null,
                    React.createElement("h2", null, "Something Broke ;("))));
    };
    return Main;
}(React.Component));
exports.default = Main;


/***/ }),

/***/ "./src/layout/navIcons.tsx":
/*!*********************************!*\
  !*** ./src/layout/navIcons.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var icons = {
    dashboard: React.createElement("i", { className: "fas fa-tachometer-alt" }),
    createchar: React.createElement("i", { className: "fa fa-heart" }),
    soon: React.createElement("i", { className: "fa fa-hashtag" }),
    missions: React.createElement("i", { className: "fa fa-exclamation" }),
    covenchat: React.createElement("i", { className: "fas fa-comment-dots" }),
    profile: React.createElement("i", { className: "fa fa-flask" }),
    settings: React.createElement("i", { className: "fa fa-cog" }),
    documentation: React.createElement("i", { className: "fa fa-book" }),
    apimocking: React.createElement("i", { className: "fa fa-bug" }),
    coinflipper: React.createElement("i", { className: "fas fa-dice" }),
    complex: React.createElement("i", { className: "fa fa-barcode" })
};
exports.default = icons;


/***/ }),

/***/ "./src/layout/navigation.tsx":
/*!***********************************!*\
  !*** ./src/layout/navigation.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var navIcons_1 = __webpack_require__(/*! ./navIcons */ "./src/layout/navIcons.tsx");
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigation.prototype.render = function () {
        return (React.createElement("ul", { className: "navi-list" },
            React.createElement("li", { className: "navi-item" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/", activeClassName: "active", title: "Dashboard" },
                    navIcons_1.default.dashboard,
                    React.createElement("span", { className: "pagename" }, "Dashboard"))),
            React.createElement("li", { className: "navi-item" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/createchar", activeClassName: "active", title: "Create Character" },
                    navIcons_1.default.createchar,
                    React.createElement("span", { className: "pagename" }, "Create Character"))),
            React.createElement("li", { className: "navi-item" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/soon", activeClassName: "active", title: "Soon\u2122" },
                    navIcons_1.default.soon,
                    React.createElement("span", { className: "pagename" }, "Soon\u2122"))),
            React.createElement("li", { className: "navi-item" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/gallery", activeClassName: "active", title: "Missions" },
                    navIcons_1.default.missions,
                    React.createElement("span", { className: "pagename" }, "Gallery"))),
            React.createElement("li", { className: "navi-item" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/witchchat", activeClassName: "active", title: "covenChat" },
                    navIcons_1.default.covenchat,
                    React.createElement("span", { className: "pagename" }, "CovenChat"))),
            React.createElement("li", { className: "navi-item" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/profile", activeClassName: "active", title: "Profile" },
                    navIcons_1.default.profile,
                    React.createElement("span", { className: "pagename" }, "Profile"))),
            React.createElement("li", { className: "navi-item" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/settings", activeClassName: "active", title: "Settings" },
                    navIcons_1.default.settings,
                    React.createElement("span", { className: "pagename" }, "Settings"))),
            React.createElement("li", { className: "navi-item" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/docs", activeClassName: "active", title: "Documentation" },
                    navIcons_1.default.documentation,
                    React.createElement("span", { className: "pagename" }, "Documentation"))),
            React.createElement("li", { className: "navi-item" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/apimock", activeClassName: "active", title: "ApiMock" },
                    navIcons_1.default.apimocking,
                    React.createElement("span", { className: "pagename" }, "Api Mocking"))),
            React.createElement("li", { className: "navi-item" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/coinflip", activeClassName: "active", title: "Coin Flipper" },
                    navIcons_1.default.coinflipper,
                    React.createElement("span", { className: "pagename" }, "CoinFlipper"))),
            React.createElement("li", { className: "navi-item" },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/complex", activeClassName: "active", title: "Complex" },
                    navIcons_1.default.complex,
                    React.createElement("span", { className: "pagename" }, "Complex")))));
    };
    return Navigation;
}(React.Component));
exports.default = Navigation;


/***/ }),

/***/ "./src/layout/site.tsx":
/*!*****************************!*\
  !*** ./src/layout/site.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var navigation_1 = __webpack_require__(/*! ./navigation */ "./src/layout/navigation.tsx");
var main_1 = __webpack_require__(/*! ./main */ "./src/layout/main.tsx");
var footer_1 = __webpack_require__(/*! ./footer */ "./src/layout/footer.tsx");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", { className: "body--layout" },
                React.createElement("div", { className: "content-layout" },
                    React.createElement("nav", { className: "navigation" },
                        React.createElement(navigation_1.default, null)),
                    React.createElement("main", { className: "main", id: "wrapper" },
                        React.createElement(main_1.default, null))),
                React.createElement(footer_1.default, null))));
    };
    return Layout;
}(React.Component));
exports.default = Layout;
{ }
{
}


/***/ }),

/***/ "./src/models/productModel.ts":
/*!************************************!*\
  !*** ./src/models/productModel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var userType;
(function (userType) {
    userType[userType["admin"] = 0] = "admin";
    userType[userType["user"] = 1] = "user";
    userType[userType["visitor"] = 2] = "visitor";
})(userType = exports.userType || (exports.userType = {}));
var Product = (function () {
    function Product(name) {
        this.name = name;
        this.id = "";
        this.description = "";
        this.memoNote = "";
        this.isVisibleTo = [userType.admin];
        this.productType = ["gm_debug"];
        this.tag = null;
        this.hasPrice = false;
        this.hasQuantityRules = false;
        this.hasSetDateValues = false;
        this.hasImage = false;
        this.createDate = new Date();
        this.modifiedDate = new Date();
        this.endOfServiceDate = new Date();
        this.availableFrom = new Date();
        this.availableTo = new Date();
        this.imgFileBlob = "";
        this.unit = "";
        this.price = 0;
        this.priceWithVat = 0;
        this.maxAmount = 0;
        this.minAmount = 0;
    }
    Product.prototype.addProductType = function (newType) {
        if (!(newType in this.productType)) {
            this.productType.push();
        }
    };
    return Product;
}());
exports.default = Product;
var ProductList = (function () {
    function ProductList(list) {
        this.list = list;
    }
    ProductList.prototype.hasProductWithId = function (id) {
        return this.list.some(function (product) { return product.id === id; });
    };
    ProductList.prototype.updateProduct = function (updateProduct) {
        if (this.list.some(function (product) { return product.id === updateProduct.id; })) {
        }
    };
    return ProductList;
}());


/***/ }),

/***/ "./src/pages/apiMockPage.tsx":
/*!***********************************!*\
  !*** ./src/pages/apiMockPage.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var apiResponseMock_1 = __webpack_require__(/*! ../components-stateful/apiResponseMock/apiResponseMock */ "./src/components-stateful/apiResponseMock/apiResponseMock.tsx");
var ApiMockPage = (function (_super) {
    __extends(ApiMockPage, _super);
    function ApiMockPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApiMockPage.prototype.render = function () {
        return (React.createElement("div", { className: "api-mock content--lg" },
            React.createElement(apiResponseMock_1.default, null)));
    };
    return ApiMockPage;
}(React.Component));
exports.default = ApiMockPage;


/***/ }),

/***/ "./src/pages/chatPage.tsx":
/*!********************************!*\
  !*** ./src/pages/chatPage.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var liveSocketChat_1 = __webpack_require__(/*! ../components-stateful/liveSocketChat/liveSocketChat */ "./src/components-stateful/liveSocketChat/liveSocketChat.tsx");
var ChatPage = (function (_super) {
    __extends(ChatPage, _super);
    function ChatPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatPage.prototype.render = function () {
        return (React.createElement("div", { className: "content--xl" },
            React.createElement(liveSocketChat_1.default, null)));
    };
    return ChatPage;
}(React.Component));
exports.default = ChatPage;


/***/ }),

/***/ "./src/pages/coinFlipPage.tsx":
/*!************************************!*\
  !*** ./src/pages/coinFlipPage.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var coinFlip_1 = __webpack_require__(/*! ../components-stateful/coinFlipper/coinFlip */ "./src/components-stateful/coinFlipper/coinFlip.tsx");
var CoinFlipPage = (function (_super) {
    __extends(CoinFlipPage, _super);
    function CoinFlipPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoinFlipPage.prototype.render = function () {
        return (React.createElement("div", { className: "content--lg" },
            React.createElement(coinFlip_1.default, null)));
    };
    return CoinFlipPage;
}(React.Component));
exports.default = CoinFlipPage;


/***/ }),

/***/ "./src/pages/complexPage.tsx":
/*!***********************************!*\
  !*** ./src/pages/complexPage.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var contextProviderHOC_1 = __webpack_require__(/*! ../HOC/contextProviderHOC */ "./src/HOC/contextProviderHOC.tsx");
var complex_1 = __webpack_require__(/*! ../components-stateful/complex/complex */ "./src/components-stateful/complex/complex.tsx");
var ComplexPage = (function (_super) {
    __extends(ComplexPage, _super);
    function ComplexPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexPage.prototype.render = function () {
        return (React.createElement("div", { className: "content--xl" },
            React.createElement(ComplexWithContextData, null)));
    };
    return ComplexPage;
}(React.Component));
exports.default = ComplexPage;
var ComplexWithContextData = contextProviderHOC_1.default(complex_1.default);


/***/ }),

/***/ "./src/pages/createCharPage.tsx":
/*!**************************************!*\
  !*** ./src/pages/createCharPage.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var createCharForm_1 = __webpack_require__(/*! ../components-stateful/CreateCharForm/createCharForm */ "./src/components-stateful/CreateCharForm/createCharForm.tsx");
var CreateCharPage = (function (_super) {
    __extends(CreateCharPage, _super);
    function CreateCharPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateCharPage.prototype.render = function () {
        return (React.createElement("div", { className: "content--lg" },
            React.createElement(createCharForm_1.default, null)));
    };
    return CreateCharPage;
}(React.Component));
exports.default = CreateCharPage;


/***/ }),

/***/ "./src/pages/dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/dashboard.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var dashboard_1 = __webpack_require__(/*! ../components-stateful/dashboard/dashboard */ "./src/components-stateful/dashboard/dashboard.tsx");
var DashboardPage = (function (_super) {
    __extends(DashboardPage, _super);
    function DashboardPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardPage.prototype.render = function () {
        return (React.createElement("div", { className: "content--full" },
            React.createElement(dashboard_1.default, null)));
    };
    return DashboardPage;
}(React.Component));
exports.default = DashboardPage;


/***/ }),

/***/ "./src/pages/docsPage.tsx":
/*!********************************!*\
  !*** ./src/pages/docsPage.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var documentation_1 = __webpack_require__(/*! ../components-stateful/Documentation/documentation */ "./src/components-stateful/Documentation/documentation.tsx");
var DocsPage = (function (_super) {
    __extends(DocsPage, _super);
    function DocsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocsPage.prototype.render = function () {
        return (React.createElement(documentation_1.default, null));
    };
    return DocsPage;
}(React.Component));
exports.default = DocsPage;


/***/ }),

/***/ "./src/pages/galleryPage.tsx":
/*!***********************************!*\
  !*** ./src/pages/galleryPage.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var gallery_1 = __webpack_require__(/*! ../components-stateful/gallery/gallery */ "./src/components-stateful/gallery/gallery.tsx");
var MissionPage = (function (_super) {
    __extends(MissionPage, _super);
    function MissionPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MissionPage.prototype.render = function () {
        return (React.createElement(gallery_1.default, null));
    };
    return MissionPage;
}(React.Component));
exports.default = MissionPage;


/***/ }),

/***/ "./src/pages/profilePage.tsx":
/*!***********************************!*\
  !*** ./src/pages/profilePage.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Profile_1 = __webpack_require__(/*! ../components-stateful/Profile/Profile */ "./src/components-stateful/Profile/Profile.tsx");
var ProfilePage = (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfilePage.prototype.render = function () {
        return (React.createElement(Profile_1.default, null));
    };
    return ProfilePage;
}(React.Component));
exports.default = ProfilePage;


/***/ }),

/***/ "./src/pages/settingsPage.tsx":
/*!************************************!*\
  !*** ./src/pages/settingsPage.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var settingsPage_1 = __webpack_require__(/*! ../components-stateful/Settings/settingsPage */ "./src/components-stateful/Settings/settingsPage.tsx");
var WitchPage = (function (_super) {
    __extends(WitchPage, _super);
    function WitchPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WitchPage.prototype.render = function () {
        return (React.createElement(settingsPage_1.default, null));
    };
    return WitchPage;
}(React.Component));
exports.default = WitchPage;


/***/ }),

/***/ "./src/pages/soonpage.tsx":
/*!********************************!*\
  !*** ./src/pages/soonpage.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var TaskManager_1 = __webpack_require__(/*! ../components-stateful/TaskManager/TaskManager */ "./src/components-stateful/TaskManager/TaskManager.tsx");
var SoonPage = (function (_super) {
    __extends(SoonPage, _super);
    function SoonPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoonPage.prototype.render = function () {
        return (React.createElement(TaskManager_1.default, null));
    };
    return SoonPage;
}(React.Component));
exports.default = SoonPage;


/***/ }),

/***/ "./src/services/Statistics.ts":
/*!************************************!*\
  !*** ./src/services/Statistics.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var loggingModule_1 = __webpack_require__(/*! ../utils/loggingModule */ "./src/utils/loggingModule.ts");
var api_url = '/api/statistics/';
var TodoApi = (function () {
    function TodoApi() {
    }
    TodoApi.getServerStartCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        return axios_1.default.get(api_url)
                            .then(function (response) { resolve(response.data); })
                            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
                    })];
            });
        });
    };
    return TodoApi;
}());
exports.default = TodoApi;


/***/ }),

/***/ "./src/services/ToDo_soon.ts":
/*!***********************************!*\
  !*** ./src/services/ToDo_soon.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var loggingModule_1 = __webpack_require__(/*! ../utils/loggingModule */ "./src/utils/loggingModule.ts");
var api_url = '/api/todo/soon';
var TodoApi = (function () {
    function TodoApi() {
    }
    TodoApi.getTodoCollection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        return axios_1.default.get(api_url)
                            .then(function (response) { return resolve(response.data); })
                            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
                    })];
            });
        });
    };
    TodoApi.getDelayedCollection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        return axios_1.default.get(api_url + "/delayed")
                            .then(function (response) { return resolve(response.data); })
                            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
                    })];
            });
        });
    };
    TodoApi.toggleHandler = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        return axios_1.default.put(api_url + "/toggle", params)
                            .then(function (response) { return resolve(response.data); })
                            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
                    })];
            });
        });
    };
    TodoApi.addNewItemToCollection = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        return axios_1.default.put(api_url, params)
                            .then(function (response) { return resolve(response.data); })
                            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
                    })];
            });
        });
    };
    TodoApi.removeFromCollection = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        return axios_1.default({
                            method: "delete",
                            url: api_url,
                            data: params
                        })
                            .then(function (response) { return resolve(response.data); })
                            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
                    })];
            });
        });
    };
    TodoApi.getTodoCollectionCallback = function (callback) {
        axios_1.default.get(api_url)
            .then(function (response) { return callback(response.data); })
            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
    };
    return TodoApi;
}());
exports.default = TodoApi;


/***/ }),

/***/ "./src/services/Todo_simple.ts":
/*!*************************************!*\
  !*** ./src/services/Todo_simple.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var loggingModule_1 = __webpack_require__(/*! ../utils/loggingModule */ "./src/utils/loggingModule.ts");
var api_url = '/api/todo/simple';
var TodoApi = (function () {
    function TodoApi() {
    }
    TodoApi.getTodoCollection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        return axios_1.default.get(api_url)
                            .then(function (response) { return resolve(response.data); })
                            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
                    })];
            });
        });
    };
    TodoApi.toggleHandler = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        return axios_1.default.put(api_url + "/toggle", params)
                            .then(function (response) { return resolve(response.data); })
                            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
                    })];
            });
        });
    };
    TodoApi.addNewItemToCollection = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        return axios_1.default.put(api_url, params)
                            .then(function (response) { return resolve(response.data); })
                            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
                    })];
            });
        });
    };
    TodoApi.removeFromCollection = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        return axios_1.default({
                            method: "delete",
                            url: api_url,
                            data: params
                        })
                            .then(function (response) { return resolve(response.data); })
                            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
                    })];
            });
        });
    };
    TodoApi.getTodoCollectionCallback = function (callback) {
        axios_1.default.get(api_url)
            .then(function (response) { return callback(response.data); })
            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
    };
    return TodoApi;
}());
exports.default = TodoApi;


/***/ }),

/***/ "./src/services/UserForm.ts":
/*!**********************************!*\
  !*** ./src/services/UserForm.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var loggingModule_1 = __webpack_require__(/*! ../utils/loggingModule */ "./src/utils/loggingModule.ts");
var api_url = "/api/forms/userform";
var UserFormApi = (function () {
    function UserFormApi() {
    }
    UserFormApi.postUserForm = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        return axios_1.default.post(api_url, { form: params })
                            .then(function (response) { return resolve(response.data); })
                            .catch(function (error) { return loggingModule_1.default.LogErrorResponse(error); });
                    })];
            });
        });
    };
    return UserFormApi;
}());
exports.default = UserFormApi;


/***/ }),

/***/ "./src/utils/annoModule.ts":
/*!*********************************!*\
  !*** ./src/utils/annoModule.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var toastr = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
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
        progressBar: false,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "6500",
        extendedTimeOut: "3000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
    return Anno;
}());
exports.default = Anno;


/***/ }),

/***/ "./src/utils/clockModule.ts":
/*!**********************************!*\
  !*** ./src/utils/clockModule.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClockModule = (function () {
    function ClockModule() {
    }
    ClockModule.Since = function (date) {
        var dateNow = new Date().getTime();
        var seconds = Math.floor((dateNow - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    };
    return ClockModule;
}());
exports.default = ClockModule;


/***/ }),

/***/ "./src/utils/coinFlipModule.ts":
/*!*************************************!*\
  !*** ./src/utils/coinFlipModule.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CoinFlipper = (function () {
    function CoinFlipper() {
        this.flipHistory = [];
        this.flipCount = 0;
        this.lastFlipResult = null;
    }
    CoinFlipper.prototype.flipCoin = function () {
        var flipResult = this.flip();
        this.flipCount += 1;
        this.lastFlipResult = flipResult;
        this.pushToHistory(flipResult, this.flipCount);
    };
    CoinFlipper.prototype.pushToHistory = function (result, flipCounter) {
        var newHistoryItem = { result: result, flipCounter: flipCounter };
        this.flipHistory.push(newHistoryItem);
    };
    CoinFlipper.prototype.resetHistory = function () {
        this.flipCount = 0;
        this.flipHistory = [];
    };
    CoinFlipper.prototype.getHeads = function () {
        var heads = this.flipHistory.filter(function (x) { return x.result === "heads"; }).length;
        return heads;
    };
    CoinFlipper.prototype.getTails = function () {
        var tails = this.flipHistory.filter(function (x) { return x.result === "tails"; }).length;
        return tails;
    };
    CoinFlipper.prototype.getTotalFlips = function () {
        var totalFlips = this.flipHistory.length;
        return totalFlips;
    };
    CoinFlipper.prototype.getHeadPercentage = function () {
        if (this.getHeads() === 0) {
            return "0 %";
        }
        var headPercentage = Math.round((this.getHeads() / this.flipCount) * 100 * 10) / 10;
        return headPercentage + " %";
    };
    CoinFlipper.prototype.getTailPercentage = function () {
        if (this.getTails() === 0) {
            return "0 %";
        }
        var tailPercentage = Math.round((this.getTails() / this.flipCount) * 100 * 10) / 10;
        return tailPercentage + " %";
    };
    CoinFlipper.prototype.flip = function () {
        var randomBoolean = Math.random() >= 0.5;
        if (randomBoolean) {
            return "heads";
        }
        else {
            return "tails";
        }
    };
    return CoinFlipper;
}());
exports.default = CoinFlipper;


/***/ }),

/***/ "./src/utils/confirmUtilModule.ts":
/*!****************************************!*\
  !*** ./src/utils/confirmUtilModule.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_confirm_1 = __webpack_require__(/*! react-confirm */ "./node_modules/react-confirm/lib/index.js");
var confirm_1 = __webpack_require__(/*! ../components/confirm */ "./src/components/confirm.tsx");
var dialog = react_confirm_1.confirmable(confirm_1.default);
var confirm = react_confirm_1.createConfirmation(dialog);
function confirmFunction(confirmation, options, heading) {
    if (options === void 0) { options = {}; }
    if (heading === void 0) { heading = null; }
    return confirm({ confirmation: confirmation, options: options, heading: heading }).then(function () {
        return true;
    }, function () {
        return false;
    });
}
exports.default = confirmFunction;


/***/ }),

/***/ "./src/utils/loggingModule.ts":
/*!************************************!*\
  !*** ./src/utils/loggingModule.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var annoModule_1 = __webpack_require__(/*! ./annoModule */ "./src/utils/annoModule.ts");
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


/***/ }),

/***/ "./src/utils/polyfills.ts":
/*!********************************!*\
  !*** ./src/utils/polyfills.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill();
if (typeof Object.assign != 'function') {
    Object.assign = function (target, varArgs) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];
            if (nextSource != null) {
                for (var nextKey in nextSource) {
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}


/***/ }),

/***/ "./src/utils/validationModule.ts":
/*!***************************************!*\
  !*** ./src/utils/validationModule.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var validator = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
var ValidationObject = (function () {
    function ValidationObject() {
        this.isValid = true;
        this.message = null;
    }
    return ValidationObject;
}());
var Rule = (function () {
    function Rule(rule) {
        this.field = rule.field;
        this.message = rule.message;
        this.validIf = rule.validIf;
        this.active = false;
    }
    return Rule;
}());
var FormValidation = (function () {
    function FormValidation(rules) {
        var _this = this;
        this.rules = [];
        rules.forEach(function (rule) {
            _this.rules.push(new Rule(rule));
        });
        this.result = this.getDefaultResultObject();
        this.active = false;
    }
    FormValidation.prototype.activateAllRules = function () {
        this.beginValidation();
        this.rules.forEach(function (rule) {
            rule.active = true;
        });
    };
    FormValidation.prototype.activateRule = function (field) {
        this.beginValidation();
        this.rules.forEach(function (rule) {
            if (rule.field === field) {
                rule.active = true;
            }
        });
    };
    FormValidation.prototype.beginValidation = function () {
        this.active = true;
    };
    FormValidation.prototype.endValidation = function () {
        this.active = false;
    };
    FormValidation.prototype.getDefaultResultObject = function () {
        var validation = [];
        this.rules.map(function (rule) {
            validation[rule.field] = new ValidationObject();
        });
        return { formIsValid: true, validations: __assign({}, validation) };
    };
    FormValidation.prototype.validateAgainstRule = function (string, rule) {
        var isValid = rule.validIf(string);
        var message = (isValid) ? null : rule.message;
        return { isValid: isValid, message: message };
    };
    FormValidation.prototype.ruleHasMatchingField = function (field, form) {
        if (field in form) {
            return true;
        }
        else {
            console.log("there was ValidationRule with no matching state-field");
            return false;
        }
    };
    FormValidation.prototype.ruleIsActive = function (rule) {
        return rule.active;
    };
    FormValidation.prototype.validate = function (form) {
        var _this = this;
        if (!this.active) {
            return false;
        }
        var result = this.getDefaultResultObject();
        this.rules.forEach(function (rule) {
            var field = rule.field;
            var hasMatchingField = _this.ruleHasMatchingField(field, form);
            var ruleIsActive = _this.ruleIsActive(rule);
            var fieldIsValid = result.validations[field].isValid;
            if (ruleIsActive && hasMatchingField && fieldIsValid) {
                var formField = (form[field]).toString();
                result.validations[field] = _this.validateAgainstRule(formField, rule);
            }
        });
        result.formIsValid = this.isFormValid(result);
        this.result = result;
        return this.result;
    };
    FormValidation.prototype.isFormValid = function (result) {
        var formIsValid = true;
        for (var i in result.validations) {
            if (!result.validations[i].isValid) {
                formIsValid = false;
            }
        }
        return formIsValid;
    };
    FormValidation.prototype.isValid = function (field) {
        if (field in this.result.validations) {
            var validity = this.result.validations[field].isValid;
            return validity;
        }
        return null;
    };
    FormValidation.prototype.getMessage = function (field) {
        if (field in this.result.validations) {
            var message = this.result.validations[field].message;
            return message;
        }
        return null;
    };
    FormValidation.prototype.getValidatedMessage = function (field) {
        if (field in this.result.validations) {
            if (!this.result.validations[field].isValid) {
                var message = this.result.validations[field].message;
                return message;
            }
        }
        return null;
    };
    FormValidation.test = validator;
    return FormValidation;
}());
exports.default = FormValidation;


/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=app.js.map