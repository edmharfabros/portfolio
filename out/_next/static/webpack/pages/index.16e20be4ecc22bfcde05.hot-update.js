webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Introduction/index.js":
/*!******************************************!*\
  !*** ./components/Introduction/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./components/Introduction/components.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/edmharfabros/Projects/portfolio/components/Introduction/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    delay: 800,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsName = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    delay: 1500,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsHand = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    delay: 200,\n    transform: 'translateX(-50px) scale(0.8)',\n    from: {\n      transform: 'translateX(0px) scale(1)'\n    }\n  });\n\n  var startAnimation = function startAnimation() {\n    setTimeout(function () {\n      var TxtType = function TxtType(el, toRotate, period) {\n        this.toRotate = toRotate;\n        this.el = el;\n        this.loopNum = 0;\n        this.period = parseInt(period, 10) || 2000;\n        this.txt = '';\n        this.tick();\n        this.isDeleting = false;\n      };\n\n      TxtType.prototype.tick = function () {\n        var i = this.loopNum % this.toRotate.length;\n        var fullTxt = this.toRotate[i];\n\n        if (this.isDeleting) {\n          this.txt = fullTxt.substring(0, this.txt.length - 1);\n        } else {\n          this.txt = fullTxt.substring(0, this.txt.length + 1);\n        }\n\n        this.el.innerHTML = '<span class=\"wrap\">' + this.txt + '</span>';\n        var that = this;\n        var delta = 200 - Math.random() * 100;\n\n        if (this.isDeleting) {\n          delta /= 2;\n        }\n\n        if (!this.isDeleting && this.txt === fullTxt) {\n          delta = this.period;\n          this.isDeleting = true;\n        } else if (this.isDeleting && this.txt === '') {\n          this.isDeleting = false;\n          this.loopNum++;\n          delta = 500;\n        }\n\n        setTimeout(function () {\n          that.tick();\n        }, delta);\n      };\n\n      var elements = document.getElementsByClassName('typewrite');\n\n      for (var i = 0; i < elements.length; i++) {\n        var toRotate = elements[i].getAttribute('data-type');\n        var period = elements[i].getAttribute('data-period');\n\n        if (toRotate) {\n          new TxtType(elements[i], JSON.parse(toRotate), period);\n        }\n      } // INJECT CSS\n\n\n      var css = document.createElement(\"style\");\n      css.type = \"text/css\";\n      css.innerHTML = \".typewrite > .wrap { border-right: 0.08em solid #fff}\";\n      document.body.appendChild(css);\n    }, 2500);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    startAnimation();\n  }, []);\n  return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 5\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Picture\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"TextContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: props,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, \"I am\")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: propsName,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Name\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, \"Edmhar Fabros\")), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Position\"], {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Backend Developer\\\", \\\"Frontend Developer\\\", \\\"Full Stack Developer :)\\\"]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    \"class\": \"wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, propsHand), {}, {\n      width: \"100%\",\n      display: \"flex\",\n      justifyContent: \"center\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"SwipeRightIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(Index, \"HknjRQi5iSQaRPkdV6i0tNZXYgY=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXguanM/MzY5MCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlU3ByaW5nIiwiZGVsYXkiLCJ0byIsIm9wYWNpdHkiLCJmcm9tIiwicHJvcHNOYW1lIiwicHJvcHNIYW5kIiwidHJhbnNmb3JtIiwic3RhcnRBbmltYXRpb24iLCJzZXRUaW1lb3V0IiwiVHh0VHlwZSIsImVsIiwidG9Sb3RhdGUiLCJwZXJpb2QiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImkiLCJsZW5ndGgiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwiY3NzIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ1c2VFZmZlY3QiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLEtBQUssR0FBR0MsOERBQVMsQ0FBQztBQUN0QkMsU0FBSyxFQUFFLEdBRGU7QUFFdEJDLE1BQUUsRUFBRTtBQUNGQyxhQUFPLEVBQUU7QUFEUCxLQUZrQjtBQUt0QkMsUUFBSSxFQUFFO0FBQ0pELGFBQU8sRUFBRTtBQURMO0FBTGdCLEdBQUQsQ0FBdkI7QUFTQSxNQUFNRSxTQUFTLEdBQUdMLDhEQUFTLENBQUM7QUFDMUJDLFNBQUssRUFBRSxJQURtQjtBQUUxQkMsTUFBRSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRTtBQURQ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TUFBNUM7QUFBbUQsaUJBQVUsK0VBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQU0sTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FYRixFQWNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQ0UsU0FBSyxrQ0FBT0MsU0FBUDtBQUFrQm1DLFdBQUssUUFBdkI7QUFBaUNDLGFBQU8sUUFBeEM7QUFBa0RDLG9CQUFjO0FBQWhFLE1BRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBZEYsQ0FERixDQURGLENBREY7QUEwQkQsQ0F2SEQ7O0dBQU03QyxLO1VBQ1VFLHNELEVBU0lBLHNELEVBVUFBLHNEOzs7S0FwQmRGLEs7QUF5SFNBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFBpY3R1cmUsIFRleHRDb250YWluZXIsIFRpdGxlLCBOYW1lLCBQb3NpdGlvbiwgU3dpcGVSaWdodEljb24gfSBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIGludGVycG9sYXRlIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgcHJvcHMgPSB1c2VTcHJpbmcoe1xuICAgIGRlbGF5OiA4MDAsXG4gICAgdG86IHtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9LFxuICAgIGZyb206IHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHByb3BzTmFtZSA9IHVzZVNwcmluZyh7XG4gICAgZGVsYXk6IDE1MDAsXG4gICAgdG86IHtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9LFxuICAgIGZyb206IHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcHJvcHNIYW5kID0gdXNlU3ByaW5nKHtcbiAgICBkZWxheTogMjAwLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwcHgpIHNjYWxlKDAuOCknLFxuICAgIFxuICAgIGZyb206IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KSBzY2FsZSgxKScsXG4gICAgfVxuICB9KVxuXG5cbiAgY29uc3Qgc3RhcnRBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB2YXIgVHh0VHlwZSA9IGZ1bmN0aW9uIChlbCwgdG9Sb3RhdGUsIHBlcmlvZCkge1xuICAgICAgICB0aGlzLnRvUm90YXRlID0gdG9Sb3RhdGU7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy5sb29wTnVtID0gMDtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwYXJzZUludChwZXJpb2QsIDEwKSB8fCAyMDAwO1xuICAgICAgICB0aGlzLnR4dCA9ICcnO1xuICAgICAgICB0aGlzLnRpY2soKTtcbiAgICAgICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBUeHRUeXBlLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaSA9IHRoaXMubG9vcE51bSAlIHRoaXMudG9Sb3RhdGUubGVuZ3RoO1xuICAgICAgICB2YXIgZnVsbFR4dCA9IHRoaXMudG9Sb3RhdGVbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGluZykge1xuICAgICAgICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwid3JhcFwiPicgKyB0aGlzLnR4dCArICc8L3NwYW4+JztcblxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBkZWx0YSA9IDIwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDA7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGluZykgeyBkZWx0YSAvPSAyOyB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IGZ1bGxUeHQpIHtcbiAgICAgICAgICBkZWx0YSA9IHRoaXMucGVyaW9kO1xuICAgICAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSAnJykge1xuICAgICAgICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubG9vcE51bSsrO1xuICAgICAgICAgIGRlbHRhID0gNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhhdC50aWNrKCk7XG4gICAgICAgIH0sIGRlbHRhKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3R5cGV3cml0ZScpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdG9Sb3RhdGUgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICB2YXIgcGVyaW9kID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXBlcmlvZCcpO1xuICAgICAgICBpZiAodG9Sb3RhdGUpIHtcbiAgICAgICAgICBuZXcgVHh0VHlwZShlbGVtZW50c1tpXSwgSlNPTi5wYXJzZSh0b1JvdGF0ZSksIHBlcmlvZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIElOSkVDVCBDU1NcbiAgICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBjc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgIGNzcy5pbm5lckhUTUwgPSBcIi50eXBld3JpdGUgPiAud3JhcCB7IGJvcmRlci1yaWdodDogMC4wOGVtIHNvbGlkICNmZmZ9XCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNzcyk7XG4gICAgfSwgMjUwMClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhcnRBbmltYXRpb24oKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8UGljdHVyZT5cbiAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUaXRsZT5JIGFtPC9UaXRsZT5cbiAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICBzdHlsZT17cHJvcHNOYW1lfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOYW1lPkVkbWhhciBGYWJyb3M8L05hbWU+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICAgPFBvc2l0aW9uIGNsYXNzTmFtZT1cInR5cGV3cml0ZVwiIGRhdGEtcGVyaW9kPVwiMTAwMFwiIGRhdGEtdHlwZT0nWyBcIkJhY2tlbmQgRGV2ZWxvcGVyXCIsIFwiRnJvbnRlbmQgRGV2ZWxvcGVyXCIsIFwiRnVsbCBTdGFjayBEZXZlbG9wZXIgOilcIl0nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3cmFwXCI+PC9zcGFuPlxuICAgICAgICAgIDwvUG9zaXRpb24+XG4gICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgLi4ucHJvcHNIYW5kLCB3aWR0aDogYDEwMCVgLCBkaXNwbGF5OiBgZmxleGAsIGp1c3RpZnlDb250ZW50OiBgY2VudGVyYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTd2lwZVJpZ2h0SWNvbiAvPlxuICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICA8L1BpY3R1cmU+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Introduction/index.js\n");

/***/ })

})