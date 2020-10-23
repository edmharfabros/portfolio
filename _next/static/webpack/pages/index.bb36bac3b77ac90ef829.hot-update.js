webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Contact/index.js":
/*!*************************************!*\
  !*** ./components/Contact/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./components/Contact/components.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/edmharfabros/Projects/portfolio/components/Contact/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var propsHandShow = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    delay: 1000,\n    duration: 1000,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsHand = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])({\n    delay: 500,\n    loop: {\n      reverse: true\n    },\n    to: {\n      transform: 'translateX(-40px)'\n    },\n    from: {\n      transform: 'translateX(-20px)'\n    }\n  });\n  return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"TextContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Let's \", __jsx(\"span\", {\n    style: {\n      color: \"#28abb9\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 22\n    }\n  }, \"Connect\"), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Paragraph\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"Got questions ? You can always message me using these platforms.\")), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Name\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"Edmhar Fabros\", __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Position\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, \"Full Stack Developer\"), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"Email\"], {\n    href: \"mailto:edmhrfbros@gmail.com\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"edmhrfbros@gmail.com\"), __jsx(\"a\", {\n    href: \"https://www.linkedin.com/in/edmharfabros\",\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"LinkedinIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 78\n    }\n  })), __jsx(\"a\", {\n    href: \"https://github.com/edmharfabros\",\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"GithubIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 69\n    }\n  }))), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, propsHandShow), {}, {\n      width: \"100%\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, propsHand), {}, {\n      width: \"100%\",\n      display: \"flex\",\n      justifyContent: \"center\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__[\"SwipeRightIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(Index, \"F/+lYz658QDYeCFlkTya2xUo+uo=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0L2luZGV4LmpzPzJjZDkiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wc0hhbmRTaG93IiwidXNlU3ByaW5nIiwiZGVsYXkiLCJkdXJhdGlvbiIsInRvIiwib3BhY2l0eSIsImZyb20iLCJwcm9wc0hhbmQiLCJsb29wIiwicmV2ZXJzZSIsInRyYW5zZm9ybSIsImNvbG9yIiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVsQixNQUFNQyxhQUFhLEdBQUdDLDhEQUFTLENBQUM7QUFDOUJDLFNBQUssRUFBRSxJQUR1QjtBQUU5QkMsWUFBUSxFQUFFLElBRm9CO0FBRzlCQyxNQUFFLEVBQUU7QUFDRkMsYUFBTyxFQUFFO0FBRFAsS0FIMEI7QUFNOUJDLFFBQUksRUFBRTtBQUNKRCxhQUFPLEVBQUU7QUFETDtBQU53QixHQUFELENBQS9CO0FBV0EsTUFBTUUsU0FBUyxHQUFHTiw4REFBUyxDQUFDO0FBQzFCQyxTQUFLLEVBQUUsR0FEbUI7QUFFMUJNLFFBQUksRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUZvQjtBQUcxQkwsTUFBRSxFQUFFO0FBQ0ZNLGVBQVMsRUFBRTtBQURULEtBSHNCO0FBTTFCSixRQUFJLEVBQUU7QUFDSkksZUFBUyxFQUFFO0FBRFA7QUFOb0IsR0FBRCxDQUEzQjtBQVdBLFNBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWE7QUFBTSxTQUFLLEVBQUU7QUFBRUMsV0FBSztBQUFQLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFiLEVBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdFQURGLENBREYsRUFJRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRUUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGLEVBR0UsTUFBQyxpREFBRDtBQUFPLFFBQUksRUFBQyw2QkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhGLEVBSUU7QUFBRyxRQUFJLEVBQUMsMENBQVI7QUFBbUQsVUFBTSxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQW5FLENBSkYsRUFLRTtBQUFHLFFBQUksRUFBQyxpQ0FBUjtBQUEwQyxVQUFNLEVBQUMsUUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwRCxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBMUQsQ0FMRixDQUpGLEVBV0UsTUFBQyxxREFBRCxDQUFVLEdBQVY7QUFDRSxTQUFLLGtDQUFPWCxhQUFQO0FBQXNCWSxXQUFLO0FBQTNCLE1BRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQ0UsU0FBSyxrQ0FBT0wsU0FBUDtBQUFrQkssV0FBSyxRQUF2QjtBQUFpQ0MsYUFBTyxRQUF4QztBQUFrREMsb0JBQWM7QUFBaEUsTUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FIRixDQVhGLENBREYsQ0FERjtBQXlCRCxDQWpERDs7R0FBTWYsSztVQUVrQkUsc0QsRUFXSkEsc0Q7OztLQWJkRixLO0FBbURTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udGFjdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgVGl0bGUsIFBhcmFncmFwaCwgU3dpcGVSaWdodEljb24sIFRleHRDb250YWluZXIsIE5hbWUsIFBvc2l0aW9uLCBFbWFpbCwgTGlua2VkaW5JY29uLCBHaXRodWJJY29uIH0gZnJvbSAnLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICBjb25zdCBwcm9wc0hhbmRTaG93ID0gdXNlU3ByaW5nKHtcbiAgICBkZWxheTogMTAwMCxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICB0bzoge1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG4gICAgZnJvbToge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcHJvcHNIYW5kID0gdXNlU3ByaW5nKHtcbiAgICBkZWxheTogNTAwLFxuICAgIGxvb3A6IHsgcmV2ZXJzZTogdHJ1ZSB9LFxuICAgIHRvOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC00MHB4KSdcbiAgICB9LFxuICAgIGZyb206IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTIwcHgpJyxcbiAgICB9IFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxUZXh0Q29udGFpbmVyPlxuICAgICAgICA8VGl0bGU+TGV0J3MgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGAjMjhhYmI5YCB9fT5Db25uZWN0PC9zcGFuPlxuICAgICAgICAgIDxQYXJhZ3JhcGg+R290IHF1ZXN0aW9ucyA/IFlvdSBjYW4gYWx3YXlzIG1lc3NhZ2UgbWUgdXNpbmcgdGhlc2UgcGxhdGZvcm1zLjwvUGFyYWdyYXBoPlxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8TmFtZT5cbiAgICAgICAgICBFZG1oYXIgRmFicm9zXG4gICAgICAgICAgPFBvc2l0aW9uPkZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9Qb3NpdGlvbj5cbiAgICAgICAgICA8RW1haWwgaHJlZj1cIm1haWx0bzplZG1ocmZicm9zQGdtYWlsLmNvbVwiPmVkbWhyZmJyb3NAZ21haWwuY29tPC9FbWFpbD5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2VkbWhhcmZhYnJvc1wiIHRhcmdldD1cIl9ibGFua1wiPjxMaW5rZWRpbkljb24gLz48L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9lZG1oYXJmYWJyb3NcIiB0YXJnZXQ9XCJfYmxhbmtcIj48R2l0aHViSWNvbiAvPjwvYT5cbiAgICAgICAgPC9OYW1lPlxuICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgc3R5bGU9e3sgLi4ucHJvcHNIYW5kU2hvdywgd2lkdGg6IGAxMDAlYCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgLi4ucHJvcHNIYW5kLCB3aWR0aDogYDEwMCVgLCBkaXNwbGF5OiBgZmxleGAsIGp1c3RpZnlDb250ZW50OiBgY2VudGVyYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTd2lwZVJpZ2h0SWNvbiAvPlxuICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgIDwvVGV4dENvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Contact/index.js\n");

/***/ })

})