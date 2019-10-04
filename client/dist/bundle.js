/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/cowList.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/cowList.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction CowListItem(props) {\n  var mooer = props.value;\n  console.log(props.value);\n  return React.createElement(\"li\", null, mooer);\n}\n\n;\n\nfunction CowList(props) {\n  var cowsList = props.cows;\n  var listItems = cowsList.map(function (moo) {\n    React.createElement(CowListItem, {\n      key: moo.id.toString(),\n      value: moo.name\n    });\n  });\n  return React.createElement(\"ul\", null, listItems);\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CowList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvY293TGlzdC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvY293TGlzdC5qc3g/YTE3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBDb3dMaXN0SXRlbShwcm9wcykge1xuICBjb25zdCBtb29lciA9IHByb3BzLnZhbHVlO1xuICBjb25zb2xlLmxvZyhwcm9wcy52YWx1ZSk7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAge21vb2VyfVxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBDb3dMaXN0KHByb3BzKSB7XG4gIGNvbnN0IGNvd3NMaXN0ID0gcHJvcHMuY293cztcbiAgY29uc3QgbGlzdEl0ZW1zID0gY293c0xpc3QubWFwKChtb28pID0+IHtcbiAgICA8Q293TGlzdEl0ZW0ga2V5PXttb28uaWQudG9TdHJpbmcoKX0gdmFsdWU9e21vby5uYW1lfSAvPlxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8dWw+e2xpc3RJdGVtc308L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ293TGlzdDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFEQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/cowList.jsx\n");

/***/ }),

/***/ "./client/src/components/cowListing.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/cowListing.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cowList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cowList.jsx */ \"./client/src/components/cowList.jsx\");\n/* harmony import */ var _displayCow_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayCow.jsx */ \"./client/src/components/displayCow.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar CowListing =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(CowListing, _React$Component);\n\n  function CowListing(props) {\n    var _this;\n\n    _classCallCheck(this, CowListing);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CowListing).call(this, props));\n    _this.state = {\n      gottenCows: [{\n        id: 1,\n        name: \"her\",\n        description: \"low\"\n      }]\n    };\n    return _this;\n  }\n\n  _createClass(CowListing, [{\n    key: \"getCows\",\n    value: function getCows() {\n      var _this2 = this;\n\n      $.get(\"/api/cows\", function (data) {\n        return _this2.setState({\n          gottenCows: data\n        });\n      } // ,\n      //     console.log(data),\n      );\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getCows();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(this.state.gottenCows); //var gotCows = this.state.gottenCows ? this.state.gottenCows : [{id:1,name:\"her\",description:\"low\"}];\n\n      return React.createElement(\"div\", null, React.createElement(\"div\", {\n        id: \"cowDescription\"\n      }, React.createElement(\"h4\", null, React.createElement(_displayCow_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        cow: this.state.gottenCows[0]\n      }))), React.createElement(\"h2\", null, \"The list of Cows\"), React.createElement(\"div\", {\n        id: \"list\"\n      }, React.createElement(\"h3\", null, React.createElement(_cowList_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        cows: this.state.gottenCows\n      }))), React.createElement(\"div\", null, React.createElement(\"h2\", null, \"Add a Cow\"), React.createElement(\"br\", null), React.createElement(\"form\", {\n        action: \"/api/cows\",\n        id: \"cowForm\",\n        method: \"post\"\n      }, \"Name:\", React.createElement(\"input\", {\n        type: \"text\",\n        name: \"name\",\n        id: \"cowFormName\"\n      }), React.createElement(\"br\", null), \"Description:\", React.createElement(\"input\", {\n        type: \"text\",\n        name: \"descripion\",\n        id: \"cowFormDesc\"\n      }), React.createElement(\"br\", null), React.createElement(\"input\", {\n        type: \"submit\",\n        value: \"submit new cow\",\n        id: \"submit\"\n      }), React.createElement(\"br\", null))));\n    }\n  }]);\n\n  return CowListing;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CowListing.jsx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvY293TGlzdGluZy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvY293TGlzdGluZy5qc3g/MGJkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ293TGlzdCBmcm9tICcuL2Nvd0xpc3QuanN4JztcbmltcG9ydCBEaXNwbGF5Q293IGZyb20gICcuL2Rpc3BsYXlDb3cuanN4JztcblxuY2xhc3MgQ293TGlzdGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7Z290dGVuQ293czogW3tpZDoxLG5hbWU6XCJoZXJcIixkZXNjcmlwdGlvbjpcImxvd1wifV19O1xuICB9XG5cbiAgZ2V0Q293cygpIHtcbiAgJC5nZXQoIFwiL2FwaS9jb3dzXCIsICggZGF0YSApID0+XG4gIHRoaXMuc2V0U3RhdGUoe1xuICAgIGdvdHRlbkNvd3M6IGRhdGFcbiAgfSlcbiAgLy8gLFxuICAvLyAgICAgY29uc29sZS5sb2coZGF0YSksXG5cbiAgICApfTtcblxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLmdldENvd3MoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5nb3R0ZW5Db3dzKTtcbiAgICAvL3ZhciBnb3RDb3dzID0gdGhpcy5zdGF0ZS5nb3R0ZW5Db3dzID8gdGhpcy5zdGF0ZS5nb3R0ZW5Db3dzIDogW3tpZDoxLG5hbWU6XCJoZXJcIixkZXNjcmlwdGlvbjpcImxvd1wifV07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+PGRpdiBpZD1cImNvd0Rlc2NyaXB0aW9uXCI+PGg0PjxEaXNwbGF5Q293ICBjb3c9e3RoaXMuc3RhdGUuZ290dGVuQ293c1swXX0vPjwvaDQ+PC9kaXY+XG4gICAgICA8aDI+VGhlIGxpc3Qgb2YgQ293czwvaDI+XG4gICAgICA8ZGl2IGlkID1cImxpc3RcIj48aDM+PENvd0xpc3QgY293cz17dGhpcy5zdGF0ZS5nb3R0ZW5Db3dzfS8+PC9oMz48L2Rpdj5cbiAgICAgIDxkaXY+PGgyPkFkZCBhIENvdzwvaDI+PGJyLz5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS9jb3dzXCIgaWQ9XCJjb3dGb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICBOYW1lOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwiY293Rm9ybU5hbWVcIj48L2lucHV0Pjxici8+XG4gICAgICAgIERlc2NyaXB0aW9uOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcGlvblwiIGlkPVwiY293Rm9ybURlc2NcIj48L2lucHV0Pjxici8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXQgbmV3IGNvd1wiIGlkPVwic3VibWl0XCI+PC9pbnB1dD48YnIvPlxuICAgICAgICA8L2Zvcm0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvd0xpc3RpbmcuanN4O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFEQTtBQUtBO0FBTEE7QUFPQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBckNBO0FBQ0E7QUF3Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/cowListing.jsx\n");

/***/ }),

/***/ "./client/src/components/displayCow.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/displayCow.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction DisplayCow(props) {\n  var singleCow = props.cow;\n  return React.createElement(\"div\", null, singleCow.name, \": \", singleCow.description);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayCow);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvZGlzcGxheUNvdy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvZGlzcGxheUNvdy5qc3g/OTMxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBEaXNwbGF5Q293KHByb3BzKSB7XG4gIGNvbnN0IHNpbmdsZUNvdyA9IHByb3BzLmNvdztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PntzaW5nbGVDb3cubmFtZX06IHtzaW5nbGVDb3cuZGVzY3JpcHRpb259PC9kaXY+XG4gICk7XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBEaXNwbGF5Q293OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/displayCow.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_cowList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/cowList.jsx */ \"./client/src/components/cowList.jsx\");\n/* harmony import */ var _components_cowListing_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cowListing.jsx */ \"./client/src/components/cowListing.jsx\");\n/* harmony import */ var _components_displayCow_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/displayCow.jsx */ \"./client/src/components/displayCow.jsx\");\n// import React from 'react';\n// import ReactDOM from 'react-dom';\n //import CowListItem from  './components/cowListItem.jsx';\n\n\n\nReactDOM.render(React.createElement(_components_cowListing_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENvd0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL2Nvd0xpc3QuanN4Jztcbi8vaW1wb3J0IENvd0xpc3RJdGVtIGZyb20gICcuL2NvbXBvbmVudHMvY293TGlzdEl0ZW0uanN4JztcbmltcG9ydCBDb3dMaXN0aW5nIGZyb20gJy4vY29tcG9uZW50cy9jb3dMaXN0aW5nLmpzeCdcbmltcG9ydCBEaXNwbGF5Q293IGZyb20gJy4vY29tcG9uZW50cy9kaXNwbGF5Q293LmpzeCdcblxuUmVhY3RET00ucmVuZGVyKDxDb3dMaXN0aW5nIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });