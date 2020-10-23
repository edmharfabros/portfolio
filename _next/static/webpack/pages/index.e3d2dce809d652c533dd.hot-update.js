webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Introduction/index.js":
/*!******************************************!*\
  !*** ./components/Introduction/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./components/Introduction/components.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/edmharfabros/Projects/portfolio/components/Introduction/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    delay: 800,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsName = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    delay: 1500,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsHand = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    delay: 3000,\n    reset: true,\n    to: {\n      transform: 'scale(1) rotateX(0deg)'\n    },\n    from: {\n      transform: 'scale(1) rotateX(0deg)'\n    }\n  });\n\n  var startAnimation = function startAnimation() {\n    setTimeout(function () {\n      var TxtType = function TxtType(el, toRotate, period) {\n        this.toRotate = toRotate;\n        this.el = el;\n        this.loopNum = 0;\n        this.period = parseInt(period, 10) || 2000;\n        this.txt = '';\n        this.tick();\n        this.isDeleting = false;\n      };\n\n      TxtType.prototype.tick = function () {\n        var i = this.loopNum % this.toRotate.length;\n        var fullTxt = this.toRotate[i];\n\n        if (this.isDeleting) {\n          this.txt = fullTxt.substring(0, this.txt.length - 1);\n        } else {\n          this.txt = fullTxt.substring(0, this.txt.length + 1);\n        }\n\n        this.el.innerHTML = '<span class=\"wrap\">' + this.txt + '</span>';\n        var that = this;\n        var delta = 200 - Math.random() * 100;\n\n        if (this.isDeleting) {\n          delta /= 2;\n        }\n\n        if (!this.isDeleting && this.txt === fullTxt) {\n          delta = this.period;\n          this.isDeleting = true;\n        } else if (this.isDeleting && this.txt === '') {\n          this.isDeleting = false;\n          this.loopNum++;\n          delta = 500;\n        }\n\n        setTimeout(function () {\n          that.tick();\n        }, delta);\n      };\n\n      var elements = document.getElementsByClassName('typewrite');\n\n      for (var i = 0; i < elements.length; i++) {\n        var toRotate = elements[i].getAttribute('data-type');\n        var period = elements[i].getAttribute('data-period');\n\n        if (toRotate) {\n          new TxtType(elements[i], JSON.parse(toRotate), period);\n        }\n      } // INJECT CSS\n\n\n      var css = document.createElement(\"style\");\n      css.type = \"text/css\";\n      css.innerHTML = \".typewrite > .wrap { border-right: 0.08em solid #fff}\";\n      document.body.appendChild(css);\n    }, 2500);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    startAnimation();\n  }, []);\n  return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 5\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Picture\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"TextContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: props,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }, \"I am\")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: propsName,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Name\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, \"Edmhar Fabros\")), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Position\"], {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Backend Developer\\\", \\\"Frontend Developer\\\", \\\"Full Stack Developer :)\\\"]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    \"class\": \"wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, propsHand), {}, {\n      width: \"100%\",\n      display: \"flex\",\n      justifyContent: \"center\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"SwipeRightIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(Index, \"HknjRQi5iSQaRPkdV6i0tNZXYgY=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXguanM/MzY5MCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlU3ByaW5nIiwiZGVsYXkiLCJ0byIsIm9wYWNpdHkiLCJmcm9tIiwicHJvcHNOYW1lIiwicHJvcHNIYW5kIiwicmVzZXQiLCJ0cmFuc2Zvcm0iLCJzdGFydEFuaW1hdGlvbiIsInNldFRpbWVvdXQiLCJUeHRUeXBlIiwiZWwiLCJ0b1JvdGF0ZSIsInBlcmlvZCIsImxvb3BOdW0iLCJwYXJzZUludCIsInR4dCIsInRpY2siLCJpc0RlbGV0aW5nIiwicHJvdG90eXBlIiwiaSIsImxlbmd0aCIsImZ1bGxUeHQiLCJzdWJzdHJpbmciLCJpbm5lckhUTUwiLCJ0aGF0IiwiZGVsdGEiLCJNYXRoIiwicmFuZG9tIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInVzZUVmZmVjdCIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsS0FBSyxHQUFHQyw4REFBUyxDQUFDO0FBQ3RCQyxTQUFLLEVBQUUsR0FEZTtBQUV0QkMsTUFBRSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRTtBQURQLEtBRmtCO0FBS3RCQyxRQUFJLEVBQUU7QUFDSkQsYUFBTyxFQUFFO0FBREw7QUFMZ0IsR0FBRCxDQUF2QjtBQVNBLE1BQU1FLFNBQVMsR0FBR0wsOERBQVMsQ0FBQztBQUMxQkMsU0FBSyxFQUFFLElBRG1CO0FBRTFCQyxNQUFFLEVBQUU7QUFDRkMsYUFBTyxF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TkYsRUFXRSxNQUFDLG9EQUFEO0FBQVUsYUFBUyxFQUFDLFdBQXBCO0FBQWdDLG1CQUFZLE1BQTVDO0FBQW1ELGlCQUFVLCtFQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFNLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsRUFjRSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUNFLFNBQUssa0NBQU9DLFNBQVA7QUFBa0JvQyxXQUFLLFFBQXZCO0FBQWlDQyxhQUFPLFFBQXhDO0FBQWtEQyxvQkFBYztBQUFoRSxNQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQWRGLENBREYsQ0FERixDQURGO0FBMEJELENBekhEOztHQUFNOUMsSztVQUNVRSxzRCxFQVNJQSxzRCxFQVVBQSxzRDs7O0tBcEJkRixLO0FBMkhTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW50cm9kdWN0aW9uL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBQaWN0dXJlLCBUZXh0Q29udGFpbmVyLCBUaXRsZSwgTmFtZSwgUG9zaXRpb24sIFN3aXBlUmlnaHRJY29uIH0gZnJvbSAnLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLGludGVycG9sYXRlIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgcHJvcHMgPSB1c2VTcHJpbmcoe1xuICAgIGRlbGF5OiA4MDAsXG4gICAgdG86IHtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9LFxuICAgIGZyb206IHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHByb3BzTmFtZSA9IHVzZVNwcmluZyh7XG4gICAgZGVsYXk6IDE1MDAsXG4gICAgdG86IHtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9LFxuICAgIGZyb206IHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcHJvcHNIYW5kID0gdXNlU3ByaW5nKHtcbiAgICBkZWxheTogMzAwMCxcbiAgICByZXNldDp0cnVlLFxuICAgIHRvOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSByb3RhdGVYKDBkZWcpJyxcbiAgICB9LFxuICAgIGZyb206IHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHJvdGF0ZVgoMGRlZyknLFxuICAgIH1cbiAgfSlcblxuXG4gIGNvbnN0IHN0YXJ0QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmFyIFR4dFR5cGUgPSBmdW5jdGlvbiAoZWwsIHRvUm90YXRlLCBwZXJpb2QpIHtcbiAgICAgICAgdGhpcy50b1JvdGF0ZSA9IHRvUm90YXRlO1xuICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIHRoaXMubG9vcE51bSA9IDA7XG4gICAgICAgIHRoaXMucGVyaW9kID0gcGFyc2VJbnQocGVyaW9kLCAxMCkgfHwgMjAwMDtcbiAgICAgICAgdGhpcy50eHQgPSAnJztcbiAgICAgICAgdGhpcy50aWNrKCk7XG4gICAgICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgVHh0VHlwZS5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmxvb3BOdW0gJSB0aGlzLnRvUm90YXRlLmxlbmd0aDtcbiAgICAgICAgdmFyIGZ1bGxUeHQgPSB0aGlzLnRvUm90YXRlW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIndyYXBcIj4nICsgdGhpcy50eHQgKyAnPC9zcGFuPic7XG5cbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgZGVsdGEgPSAyMDAgLSBNYXRoLnJhbmRvbSgpICogMTAwO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHsgZGVsdGEgLz0gMjsgfVxuXG4gICAgICAgIGlmICghdGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBmdWxsVHh0KSB7XG4gICAgICAgICAgZGVsdGEgPSB0aGlzLnBlcmlvZDtcbiAgICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmxvb3BOdW0rKztcbiAgICAgICAgICBkZWx0YSA9IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoYXQudGljaygpO1xuICAgICAgICB9LCBkZWx0YSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0eXBld3JpdGUnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRvUm90YXRlID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgdmFyIHBlcmlvZCA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJpb2QnKTtcbiAgICAgICAgaWYgKHRvUm90YXRlKSB7XG4gICAgICAgICAgbmV3IFR4dFR5cGUoZWxlbWVudHNbaV0sIEpTT04ucGFyc2UodG9Sb3RhdGUpLCBwZXJpb2QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBJTkpFQ1QgQ1NTXG4gICAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgY3NzLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICBjc3MuaW5uZXJIVE1MID0gXCIudHlwZXdyaXRlID4gLndyYXAgeyBib3JkZXItcmlnaHQ6IDAuMDhlbSBzb2xpZCAjZmZmfVwiO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xuICAgIH0sIDI1MDApXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXJ0QW5pbWF0aW9uKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFBpY3R1cmU+XG4gICAgICAgIDxUZXh0Q29udGFpbmVyPlxuICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgIHN0eWxlPXtwcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGl0bGU+SSBhbTwvVGl0bGU+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzTmFtZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TmFtZT5FZG1oYXIgRmFicm9zPC9OYW1lPlxuICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICAgIDxQb3NpdGlvbiBjbGFzc05hbWU9XCJ0eXBld3JpdGVcIiBkYXRhLXBlcmlvZD1cIjEwMDBcIiBkYXRhLXR5cGU9J1sgXCJCYWNrZW5kIERldmVsb3BlclwiLCBcIkZyb250ZW5kIERldmVsb3BlclwiLCBcIkZ1bGwgU3RhY2sgRGV2ZWxvcGVyIDopXCJdJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid3JhcFwiPjwvc3Bhbj5cbiAgICAgICAgICA8L1Bvc2l0aW9uPlxuICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IC4uLnByb3BzSGFuZCwgd2lkdGg6IGAxMDAlYCwgZGlzcGxheTogYGZsZXhgLCBqdXN0aWZ5Q29udGVudDogYGNlbnRlcmAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3dpcGVSaWdodEljb24gLz5cbiAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgPC9UZXh0Q29udGFpbmVyPlxuICAgICAgPC9QaWN0dXJlPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Introduction/index.js\n");

/***/ })

})