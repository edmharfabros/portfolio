webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Introduction/index.js":
/*!******************************************!*\
  !*** ./components/Introduction/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./components/Introduction/components.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/edmharfabros/Projects/portfolio/components/Introduction/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])({\n    delay: 800,\n    to: {\n      height: \"100%\"\n    },\n    from: {\n      opacity: 0,\n      height: \"0px\"\n    }\n  });\n  var propsName = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])({\n    delay: 1250,\n    to: {\n      x: 100\n    },\n    from: {\n      x: 100\n    }\n  });\n\n  var startAnimation = function startAnimation() {\n    setTimeout(function () {\n      var TxtType = function TxtType(el, toRotate, period) {\n        this.toRotate = toRotate;\n        this.el = el;\n        this.loopNum = 0;\n        this.period = parseInt(period, 10) || 2000;\n        this.txt = '';\n        this.tick();\n        this.isDeleting = false;\n      };\n\n      TxtType.prototype.tick = function () {\n        var i = this.loopNum % this.toRotate.length;\n        var fullTxt = this.toRotate[i];\n\n        if (this.isDeleting) {\n          this.txt = fullTxt.substring(0, this.txt.length - 1);\n        } else {\n          this.txt = fullTxt.substring(0, this.txt.length + 1);\n        }\n\n        this.el.innerHTML = '<span class=\"wrap\">' + this.txt + '</span>';\n        var that = this;\n        var delta = 200 - Math.random() * 100;\n\n        if (this.isDeleting) {\n          delta /= 2;\n        }\n\n        if (!this.isDeleting && this.txt === fullTxt) {\n          delta = this.period;\n          this.isDeleting = true;\n        } else if (this.isDeleting && this.txt === '') {\n          this.isDeleting = false;\n          this.loopNum++;\n          delta = 500;\n        }\n\n        setTimeout(function () {\n          that.tick();\n        }, delta);\n      };\n\n      var elements = document.getElementsByClassName('typewrite');\n\n      for (var i = 0; i < elements.length; i++) {\n        var toRotate = elements[i].getAttribute('data-type');\n        var period = elements[i].getAttribute('data-period');\n\n        if (toRotate) {\n          new TxtType(elements[i], JSON.parse(toRotate), period);\n        }\n      } // INJECT CSS\n\n\n      var css = document.createElement(\"style\");\n      css.type = \"text/css\";\n      css.innerHTML = \".typewrite > .wrap { border-right: 0.08em solid #fff}\";\n      document.body.appendChild(css);\n    }, 3000);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    startAnimation();\n  }, []);\n  return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Picture\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"TextContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n    style: props,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, \"I am\")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n    style: propsName,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Name\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, \"Edmhar Fabros\")), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Position\"], {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Backend Developer\\\", \\\"Frontend Developer\\\", \\\"Full Stack Developer :)\\\"]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    \"class\": \"wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"SwipeRightIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Index, \"BhPHuf8cmSlERyc1mPIf6Q59QEY=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXguanM/MzY5MCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlU3ByaW5nIiwiZGVsYXkiLCJ0byIsImhlaWdodCIsImZyb20iLCJvcGFjaXR5IiwicHJvcHNOYW1lIiwieCIsInN0YXJ0QW5pbWF0aW9uIiwic2V0VGltZW91dCIsIlR4dFR5cGUiLCJlbCIsInRvUm90YXRlIiwicGVyaW9kIiwibG9vcE51bSIsInBhcnNlSW50IiwidHh0IiwidGljayIsImlzRGVsZXRpbmciLCJwcm90b3R5cGUiLCJpIiwibGVuZ3RoIiwiZnVsbFR4dCIsInN1YnN0cmluZyIsImlubmVySFRNTCIsInRoYXQiLCJkZWx0YSIsIk1hdGgiLCJyYW5kb20iLCJlbGVtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsImNzcyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYm9keSIsImFwcGVuZENoaWxkIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLEtBQUssR0FBR0MsOERBQVMsQ0FBQztBQUN0QkMsU0FBSyxFQUFFLEdBRGU7QUFFdEJDLE1BQUUsRUFBRTtBQUNGQyxZQUFNO0FBREosS0FGa0I7QUFLdEJDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUMsQ0FESjtBQUVKRixZQUFNO0FBRkY7QUFMZ0IsR0FBRCxDQUF2QjtBQVVBLE1BQU1HLFNBQVMsR0FBR04sOERBQVMsQ0FBQztBQUMxQkMsU0FBSyxFQUFFLElBRG1CO0FBRTFCQyxNQUFFLEVBQUU7QUFDRkssT0FBQyxFQUFFO0FBREQsS0FGc0I7QUFLMUJILFFBQUksRUFBRTtBQUNKRyxPQUFDLEVBQUU7QUFE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QWRGLENBREYsQ0FERixDQURGO0FBc0JELENBM0dEOztHQUFNUixLO1VBQ1VFLHNELEVBVUlBLHNEOzs7S0FYZEYsSztBQTZHU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ludHJvZHVjdGlvbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUGljdHVyZSwgVGV4dENvbnRhaW5lciwgVGl0bGUsIE5hbWUsIFBvc2l0aW9uLCBTd2lwZVJpZ2h0SWNvbiB9IGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZydcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHtcbiAgICBkZWxheTogODAwLFxuICAgIHRvOiB7XG4gICAgICBoZWlnaHQ6YDEwMCVgXG4gICAgfSxcbiAgICBmcm9tOiB7XG4gICAgICBvcGFjaXR5OjAsXG4gICAgICBoZWlnaHQ6IGAwcHhgXG4gICAgfVxuICB9KVxuICBjb25zdCBwcm9wc05hbWUgPSB1c2VTcHJpbmcoe1xuICAgIGRlbGF5OiAxMjUwLFxuICAgIHRvOiB7XG4gICAgICB4OiAxMDBcbiAgICB9LFxuICAgIGZyb206IHtcbiAgICAgIHg6IDEwMFxuICAgIH1cbiAgfSlcblxuXG4gIGNvbnN0IHN0YXJ0QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmFyIFR4dFR5cGUgPSBmdW5jdGlvbiAoZWwsIHRvUm90YXRlLCBwZXJpb2QpIHtcbiAgICAgICAgdGhpcy50b1JvdGF0ZSA9IHRvUm90YXRlO1xuICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIHRoaXMubG9vcE51bSA9IDA7XG4gICAgICAgIHRoaXMucGVyaW9kID0gcGFyc2VJbnQocGVyaW9kLCAxMCkgfHwgMjAwMDtcbiAgICAgICAgdGhpcy50eHQgPSAnJztcbiAgICAgICAgdGhpcy50aWNrKCk7XG4gICAgICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgVHh0VHlwZS5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmxvb3BOdW0gJSB0aGlzLnRvUm90YXRlLmxlbmd0aDtcbiAgICAgICAgdmFyIGZ1bGxUeHQgPSB0aGlzLnRvUm90YXRlW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIndyYXBcIj4nICsgdGhpcy50eHQgKyAnPC9zcGFuPic7XG5cbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgZGVsdGEgPSAyMDAgLSBNYXRoLnJhbmRvbSgpICogMTAwO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHsgZGVsdGEgLz0gMjsgfVxuXG4gICAgICAgIGlmICghdGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBmdWxsVHh0KSB7XG4gICAgICAgICAgZGVsdGEgPSB0aGlzLnBlcmlvZDtcbiAgICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmxvb3BOdW0rKztcbiAgICAgICAgICBkZWx0YSA9IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoYXQudGljaygpO1xuICAgICAgICB9LCBkZWx0YSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0eXBld3JpdGUnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRvUm90YXRlID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgdmFyIHBlcmlvZCA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJpb2QnKTtcbiAgICAgICAgaWYgKHRvUm90YXRlKSB7XG4gICAgICAgICAgbmV3IFR4dFR5cGUoZWxlbWVudHNbaV0sIEpTT04ucGFyc2UodG9Sb3RhdGUpLCBwZXJpb2QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBJTkpFQ1QgQ1NTXG4gICAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgY3NzLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICBjc3MuaW5uZXJIVE1MID0gXCIudHlwZXdyaXRlID4gLndyYXAgeyBib3JkZXItcmlnaHQ6IDAuMDhlbSBzb2xpZCAjZmZmfVwiO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xuICAgIH0sIDMwMDApXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXJ0QW5pbWF0aW9uKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFBpY3R1cmU+XG4gICAgICAgIDxUZXh0Q29udGFpbmVyPlxuICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgIHN0eWxlPXtwcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGl0bGU+SSBhbTwvVGl0bGU+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzTmFtZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TmFtZT5FZG1oYXIgRmFicm9zPC9OYW1lPlxuICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICAgIDxQb3NpdGlvbiBjbGFzc05hbWU9XCJ0eXBld3JpdGVcIiBkYXRhLXBlcmlvZD1cIjEwMDBcIiBkYXRhLXR5cGU9J1sgXCJCYWNrZW5kIERldmVsb3BlclwiLCBcIkZyb250ZW5kIERldmVsb3BlclwiLCBcIkZ1bGwgU3RhY2sgRGV2ZWxvcGVyIDopXCJdJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid3JhcFwiPjwvc3Bhbj5cbiAgICAgICAgICA8L1Bvc2l0aW9uPlxuICAgICAgICAgIDxTd2lwZVJpZ2h0SWNvbiAvPlxuICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICA8L1BpY3R1cmU+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Introduction/index.js\n");

/***/ })

})