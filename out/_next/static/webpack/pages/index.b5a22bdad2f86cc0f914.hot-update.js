webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Introduction/index.js":
/*!******************************************!*\
  !*** ./components/Introduction/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./components/Introduction/components.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/edmharfabros/Projects/portfolio/components/Introduction/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    delay: 800,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsName = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    delay: 1500,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsHand = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    delay: 200,\n    reset: true,\n    to: {\n      transform: 'translateX(-70px) scale(0.8)'\n    },\n    from: {\n      transform: 'translateX(0px) scale(1)',\n      paddingLeft: \"0px\"\n    }\n  });\n\n  var startAnimation = function startAnimation() {\n    setTimeout(function () {\n      var TxtType = function TxtType(el, toRotate, period) {\n        this.toRotate = toRotate;\n        this.el = el;\n        this.loopNum = 0;\n        this.period = parseInt(period, 10) || 2000;\n        this.txt = '';\n        this.tick();\n        this.isDeleting = false;\n      };\n\n      TxtType.prototype.tick = function () {\n        var i = this.loopNum % this.toRotate.length;\n        var fullTxt = this.toRotate[i];\n\n        if (this.isDeleting) {\n          this.txt = fullTxt.substring(0, this.txt.length - 1);\n        } else {\n          this.txt = fullTxt.substring(0, this.txt.length + 1);\n        }\n\n        this.el.innerHTML = '<span class=\"wrap\">' + this.txt + '</span>';\n        var that = this;\n        var delta = 200 - Math.random() * 100;\n\n        if (this.isDeleting) {\n          delta /= 2;\n        }\n\n        if (!this.isDeleting && this.txt === fullTxt) {\n          delta = this.period;\n          this.isDeleting = true;\n        } else if (this.isDeleting && this.txt === '') {\n          this.isDeleting = false;\n          this.loopNum++;\n          delta = 500;\n        }\n\n        setTimeout(function () {\n          that.tick();\n        }, delta);\n      };\n\n      var elements = document.getElementsByClassName('typewrite');\n\n      for (var i = 0; i < elements.length; i++) {\n        var toRotate = elements[i].getAttribute('data-type');\n        var period = elements[i].getAttribute('data-period');\n\n        if (toRotate) {\n          new TxtType(elements[i], JSON.parse(toRotate), period);\n        }\n      } // INJECT CSS\n\n\n      var css = document.createElement(\"style\");\n      css.type = \"text/css\";\n      css.innerHTML = \".typewrite > .wrap { border-right: 0.08em solid #fff}\";\n      document.body.appendChild(css);\n    }, 2500);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    startAnimation();\n  }, []);\n  return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 5\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Picture\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"TextContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: props,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }\n  }, \"I am\")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: propsName,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Name\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }\n  }, \"Edmhar Fabros\")), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Position\"], {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Backend Developer\\\", \\\"Frontend Developer\\\", \\\"Full Stack Developer :)\\\"]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    \"class\": \"wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }\n  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, propsHand), {}, {\n      width: \"100%\",\n      display: \"flex\",\n      justifyContent: \"center\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"SwipeRightIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(Index, \"HknjRQi5iSQaRPkdV6i0tNZXYgY=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXguanM/MzY5MCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlU3ByaW5nIiwiZGVsYXkiLCJ0byIsIm9wYWNpdHkiLCJmcm9tIiwicHJvcHNOYW1lIiwicHJvcHNIYW5kIiwicmVzZXQiLCJ0cmFuc2Zvcm0iLCJwYWRkaW5nTGVmdCIsInN0YXJ0QW5pbWF0aW9uIiwic2V0VGltZW91dCIsIlR4dFR5cGUiLCJlbCIsInRvUm90YXRlIiwicGVyaW9kIiwibG9vcE51bSIsInBhcnNlSW50IiwidHh0IiwidGljayIsImlzRGVsZXRpbmciLCJwcm90b3R5cGUiLCJpIiwibGVuZ3RoIiwiZnVsbFR4dCIsInN1YnN0cmluZyIsImlubmVySFRNTCIsInRoYXQiLCJkZWx0YSIsIk1hdGgiLCJyYW5kb20iLCJlbGVtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsImNzcyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYm9keSIsImFwcGVuZENoaWxkIiwidXNlRWZmZWN0Iiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxLQUFLLEdBQUdDLDhEQUFTLENBQUM7QUFDdEJDLFNBQUssRUFBRSxHQURlO0FBRXRCQyxNQUFFLEVBQUU7QUFDRkMsYUFBTyxFQUFFO0FBRFAsS0FGa0I7QUFLdEJDLFFBQUksRUFBRTtBQUNKRCxhQUFPLEVBQUU7QUFETDtBQUxnQixHQUFELENBQXZCO0FBU0EsTUFBTUUsU0FBUyxHQUFHTCw4REFBUyxDQUFDO0FBQzFCQyxTQUFLLEVBQUUsSUFEbUI7QUFFMUJDLE1BQUUsRUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsQ0FORixFQVdFLE1BQUMsb0RBQUQ7QUFBVSxhQUFTLEVBQUMsV0FBcEI7QUFBZ0MsbUJBQVksTUFBNUM7QUFBbUQsaUJBQVUsK0VBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQU0sTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FYRixFQWNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQ0UsU0FBSyxrQ0FBT0MsU0FBUDtBQUFrQnFDLFdBQUssUUFBdkI7QUFBaUNDLGFBQU8sUUFBeEM7QUFBa0RDLG9CQUFjO0FBQWhFLE1BRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBZEYsQ0FERixDQURGLENBREY7QUEwQkQsQ0EzSEQ7O0dBQU0vQyxLO1VBQ1VFLHNELEVBU0lBLHNELEVBVUFBLHNEOzs7S0FwQmRGLEs7QUE2SFNBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFBpY3R1cmUsIFRleHRDb250YWluZXIsIFRpdGxlLCBOYW1lLCBQb3NpdGlvbiwgU3dpcGVSaWdodEljb24gfSBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIGludGVycG9sYXRlIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgcHJvcHMgPSB1c2VTcHJpbmcoe1xuICAgIGRlbGF5OiA4MDAsXG4gICAgdG86IHtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9LFxuICAgIGZyb206IHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHByb3BzTmFtZSA9IHVzZVNwcmluZyh7XG4gICAgZGVsYXk6IDE1MDAsXG4gICAgdG86IHtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9LFxuICAgIGZyb206IHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcHJvcHNIYW5kID0gdXNlU3ByaW5nKHtcbiAgICBkZWxheTogMjAwLFxuICAgIHJlc2V0OiB0cnVlLFxuICAgIHRvOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC03MHB4KSBzY2FsZSgwLjgpJyxcbiAgICBcbiAgICB9LFxuICAgIGZyb206IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KSBzY2FsZSgxKScsXG4gICAgICBwYWRkaW5nTGVmdDogYDBweGBcbiAgICB9XG4gIH0pXG5cblxuICBjb25zdCBzdGFydEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHZhciBUeHRUeXBlID0gZnVuY3Rpb24gKGVsLCB0b1JvdGF0ZSwgcGVyaW9kKSB7XG4gICAgICAgIHRoaXMudG9Sb3RhdGUgPSB0b1JvdGF0ZTtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLmxvb3BOdW0gPSAwO1xuICAgICAgICB0aGlzLnBlcmlvZCA9IHBhcnNlSW50KHBlcmlvZCwgMTApIHx8IDIwMDA7XG4gICAgICAgIHRoaXMudHh0ID0gJyc7XG4gICAgICAgIHRoaXMudGljaygpO1xuICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIFR4dFR5cGUucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sb29wTnVtICUgdGhpcy50b1JvdGF0ZS5sZW5ndGg7XG4gICAgICAgIHZhciBmdWxsVHh0ID0gdGhpcy50b1JvdGF0ZVtpXTtcblxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7XG4gICAgICAgICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ3cmFwXCI+JyArIHRoaXMudHh0ICsgJzwvc3Bhbj4nO1xuXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIGRlbHRhID0gMjAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMDtcblxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7IGRlbHRhIC89IDI7IH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gZnVsbFR4dCkge1xuICAgICAgICAgIGRlbHRhID0gdGhpcy5wZXJpb2Q7XG4gICAgICAgICAgdGhpcy5pc0RlbGV0aW5nID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5sb29wTnVtKys7XG4gICAgICAgICAgZGVsdGEgPSA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGF0LnRpY2soKTtcbiAgICAgICAgfSwgZGVsdGEpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHlwZXdyaXRlJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0b1JvdGF0ZSA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIHZhciBwZXJpb2QgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGVyaW9kJyk7XG4gICAgICAgIGlmICh0b1JvdGF0ZSkge1xuICAgICAgICAgIG5ldyBUeHRUeXBlKGVsZW1lbnRzW2ldLCBKU09OLnBhcnNlKHRvUm90YXRlKSwgcGVyaW9kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gSU5KRUNUIENTU1xuICAgICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIGNzcy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgY3NzLmlubmVySFRNTCA9IFwiLnR5cGV3cml0ZSA+IC53cmFwIHsgYm9yZGVyLXJpZ2h0OiAwLjA4ZW0gc29saWQgI2ZmZn1cIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcbiAgICB9LCAyNTAwKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdGFydEFuaW1hdGlvbigpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxQaWN0dXJlPlxuICAgICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICBzdHlsZT17cHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRpdGxlPkkgYW08L1RpdGxlPlxuICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgIHN0eWxlPXtwcm9wc05hbWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5hbWU+RWRtaGFyIEZhYnJvczwvTmFtZT5cbiAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgICA8UG9zaXRpb24gY2xhc3NOYW1lPVwidHlwZXdyaXRlXCIgZGF0YS1wZXJpb2Q9XCIxMDAwXCIgZGF0YS10eXBlPSdbIFwiQmFja2VuZCBEZXZlbG9wZXJcIiwgXCJGcm9udGVuZCBEZXZlbG9wZXJcIiwgXCJGdWxsIFN0YWNrIERldmVsb3BlciA6KVwiXSc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndyYXBcIj48L3NwYW4+XG4gICAgICAgICAgPC9Qb3NpdGlvbj5cbiAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICBzdHlsZT17eyAuLi5wcm9wc0hhbmQsIHdpZHRoOiBgMTAwJWAsIGRpc3BsYXk6IGBmbGV4YCwganVzdGlmeUNvbnRlbnQ6IGBjZW50ZXJgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN3aXBlUmlnaHRJY29uIC8+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgIDwvVGV4dENvbnRhaW5lcj5cbiAgICAgIDwvUGljdHVyZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Introduction/index.js\n");

/***/ })

})