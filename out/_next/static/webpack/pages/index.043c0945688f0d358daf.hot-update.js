webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Introduction/index.js":
/*!******************************************!*\
  !*** ./components/Introduction/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ \"./components/Introduction/components.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/edmharfabros/Projects/portfolio/components/Introduction/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    delay: 800,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsName = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    delay: 1500,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsHand = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    delay: 200,\n    duration: 1000,\n    reset: true,\n    to: function () {\n      var _to = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(next) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (false) {}\n\n                _context.next = 3;\n                return next({\n                  transform: 'translateX(-10px)'\n                });\n\n              case 3:\n                _context.next = 5;\n                return next({\n                  transform: 'translateX(-10px)'\n                });\n\n              case 5:\n                _context.next = 0;\n                break;\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function to(_x) {\n        return _to.apply(this, arguments);\n      }\n\n      return to;\n    }(),\n    from: {\n      transform: 'translateX(0px)'\n    }\n  });\n\n  var startAnimation = function startAnimation() {\n    setTimeout(function () {\n      var TxtType = function TxtType(el, toRotate, period) {\n        this.toRotate = toRotate;\n        this.el = el;\n        this.loopNum = 0;\n        this.period = parseInt(period, 10) || 2000;\n        this.txt = '';\n        this.tick();\n        this.isDeleting = false;\n      };\n\n      TxtType.prototype.tick = function () {\n        var i = this.loopNum % this.toRotate.length;\n        var fullTxt = this.toRotate[i];\n\n        if (this.isDeleting) {\n          this.txt = fullTxt.substring(0, this.txt.length - 1);\n        } else {\n          this.txt = fullTxt.substring(0, this.txt.length + 1);\n        }\n\n        this.el.innerHTML = '<span class=\"wrap\">' + this.txt + '</span>';\n        var that = this;\n        var delta = 200 - Math.random() * 100;\n\n        if (this.isDeleting) {\n          delta /= 2;\n        }\n\n        if (!this.isDeleting && this.txt === fullTxt) {\n          delta = this.period;\n          this.isDeleting = true;\n        } else if (this.isDeleting && this.txt === '') {\n          this.isDeleting = false;\n          this.loopNum++;\n          delta = 500;\n        }\n\n        setTimeout(function () {\n          that.tick();\n        }, delta);\n      };\n\n      var elements = document.getElementsByClassName('typewrite');\n\n      for (var i = 0; i < elements.length; i++) {\n        var toRotate = elements[i].getAttribute('data-type');\n        var period = elements[i].getAttribute('data-period');\n\n        if (toRotate) {\n          new TxtType(elements[i], JSON.parse(toRotate), period);\n        }\n      } // INJECT CSS\n\n\n      var css = document.createElement(\"style\");\n      css.type = \"text/css\";\n      css.innerHTML = \".typewrite > .wrap { border-right: 0.08em solid #fff}\";\n      document.body.appendChild(css);\n    }, 2500);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    startAnimation();\n  }, []);\n  return __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 5\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Picture\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"TextContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, {\n    style: props,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, \"I am\")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, {\n    style: propsName,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Name\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, \"Edmhar Fabros\")), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Position\"], {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Backend Developer\\\", \\\"Frontend Developer\\\", \\\"Full Stack Developer :)\\\"]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    \"class\": \"wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }\n  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, propsHand), {}, {\n      width: \"100%\",\n      display: \"flex\",\n      justifyContent: \"center\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"SwipeRightIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(Index, \"HknjRQi5iSQaRPkdV6i0tNZXYgY=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXguanM/MzY5MCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlU3ByaW5nIiwiZGVsYXkiLCJ0byIsIm9wYWNpdHkiLCJmcm9tIiwicHJvcHNOYW1lIiwicHJvcHNIYW5kIiwiZHVyYXRpb24iLCJyZXNldCIsIm5leHQiLCJ0cmFuc2Zvcm0iLCJzdGFydEFuaW1hdGlvbiIsInNldFRpbWVvdXQiLCJUeHRUeXBlIiwiZWwiLCJ0b1JvdGF0ZSIsInBlcmlvZCIsImxvb3BOdW0iLCJwYXJzZUludCIsInR4dCIsInRpY2siLCJpc0RlbGV0aW5nIiwicHJvdG90eXBlIiwiaSIsImxlbmd0aCIsImZ1bGxUeHQiLCJzdWJzdHJpbmciLCJpbm5lckhUTUwiLCJ0aGF0IiwiZGVsdGEiLCJNYXRoIiwicmFuZG9tIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInVzZUVmZmVjdCIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxLQUFLLEdBQUdDLDhEQUFTLENBQUM7QUFDdEJDLFNBQUssRUFBRSxHQURlO0FBRXRCQyxNQUFFLEVBQUU7QUFDRkMsYUFBTyxFQUFFO0FBRFAsS0FGa0I7QUFLdEJDLFFBQUksRUFBRTtBQUNKRCxhQUFPLEVBQUU7QUFETDtBQUxnQixHQUFELENBQXZCO0FBU0EsTUFBTUUsU0FBUyxHQUFHTCw4REFBUyxDQUFDO0FBQzFCQyxTQUFLLEVBQUUsSUFEbUI7QUFFMUJD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LE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQ0UsU0FBSyxFQUFFWixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixDQURGLEVBTUUsTUFBQyxxREFBRCxDQUFVLEdBQVY7QUFDRSxTQUFLLEVBQUVNLFNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixDQU5GLEVBV0UsTUFBQyxvREFBRDtBQUFVLGFBQVMsRUFBQyxXQUFwQjtBQUFnQyxtQkFBWSxNQUE1QztBQUFtRCxpQkFBVSwrRUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVhGLEVBY0UsTUFBQyxxREFBRCxDQUFVLEdBQVY7QUFDRSxTQUFLLGtDQUFPQyxTQUFQO0FBQWtCc0MsV0FBSyxRQUF2QjtBQUFpQ0MsYUFBTyxRQUF4QztBQUFrREMsb0JBQWM7QUFBaEUsTUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FkRixDQURGLENBREYsQ0FERjtBQTBCRCxDQTdIRDs7R0FBTWhELEs7VUFDVUUsc0QsRUFTSUEsc0QsRUFVQUEsc0Q7OztLQXBCZEYsSztBQStIU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ludHJvZHVjdGlvbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUGljdHVyZSwgVGV4dENvbnRhaW5lciwgVGl0bGUsIE5hbWUsIFBvc2l0aW9uLCBTd2lwZVJpZ2h0SWNvbiB9IGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7XG4gICAgZGVsYXk6IDgwMCxcbiAgICB0bzoge1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG4gICAgZnJvbToge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH1cbiAgfSlcbiAgY29uc3QgcHJvcHNOYW1lID0gdXNlU3ByaW5nKHtcbiAgICBkZWxheTogMTUwMCxcbiAgICB0bzoge1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG4gICAgZnJvbToge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH1cbiAgfSlcblxuICBjb25zdCBwcm9wc0hhbmQgPSB1c2VTcHJpbmcoe1xuICAgIGRlbGF5OiAyMDAsXG4gICAgZHVyYXRpb246IDEwMDAsXG4gICAgcmVzZXQ6IHRydWUsXG4gICAgdG86IGFzeW5jIChuZXh0KSA9PiB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBhd2FpdCBuZXh0KHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTBweCknIH0pXG4gICAgICAgIGF3YWl0IG5leHQoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMHB4KScgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGZyb206IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KScsXG4gICAgfVxuICB9KVxuXG5cbiAgY29uc3Qgc3RhcnRBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB2YXIgVHh0VHlwZSA9IGZ1bmN0aW9uIChlbCwgdG9Sb3RhdGUsIHBlcmlvZCkge1xuICAgICAgICB0aGlzLnRvUm90YXRlID0gdG9Sb3RhdGU7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy5sb29wTnVtID0gMDtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwYXJzZUludChwZXJpb2QsIDEwKSB8fCAyMDAwO1xuICAgICAgICB0aGlzLnR4dCA9ICcnO1xuICAgICAgICB0aGlzLnRpY2soKTtcbiAgICAgICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBUeHRUeXBlLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaSA9IHRoaXMubG9vcE51bSAlIHRoaXMudG9Sb3RhdGUubGVuZ3RoO1xuICAgICAgICB2YXIgZnVsbFR4dCA9IHRoaXMudG9Sb3RhdGVbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGluZykge1xuICAgICAgICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwid3JhcFwiPicgKyB0aGlzLnR4dCArICc8L3NwYW4+JztcblxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBkZWx0YSA9IDIwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDA7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGluZykgeyBkZWx0YSAvPSAyOyB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IGZ1bGxUeHQpIHtcbiAgICAgICAgICBkZWx0YSA9IHRoaXMucGVyaW9kO1xuICAgICAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSAnJykge1xuICAgICAgICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubG9vcE51bSsrO1xuICAgICAgICAgIGRlbHRhID0gNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhhdC50aWNrKCk7XG4gICAgICAgIH0sIGRlbHRhKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3R5cGV3cml0ZScpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdG9Sb3RhdGUgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICB2YXIgcGVyaW9kID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXBlcmlvZCcpO1xuICAgICAgICBpZiAodG9Sb3RhdGUpIHtcbiAgICAgICAgICBuZXcgVHh0VHlwZShlbGVtZW50c1tpXSwgSlNPTi5wYXJzZSh0b1JvdGF0ZSksIHBlcmlvZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIElOSkVDVCBDU1NcbiAgICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBjc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgIGNzcy5pbm5lckhUTUwgPSBcIi50eXBld3JpdGUgPiAud3JhcCB7IGJvcmRlci1yaWdodDogMC4wOGVtIHNvbGlkICNmZmZ9XCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNzcyk7XG4gICAgfSwgMjUwMClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhcnRBbmltYXRpb24oKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8UGljdHVyZT5cbiAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUaXRsZT5JIGFtPC9UaXRsZT5cbiAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICBzdHlsZT17cHJvcHNOYW1lfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOYW1lPkVkbWhhciBGYWJyb3M8L05hbWU+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICAgPFBvc2l0aW9uIGNsYXNzTmFtZT1cInR5cGV3cml0ZVwiIGRhdGEtcGVyaW9kPVwiMTAwMFwiIGRhdGEtdHlwZT0nWyBcIkJhY2tlbmQgRGV2ZWxvcGVyXCIsIFwiRnJvbnRlbmQgRGV2ZWxvcGVyXCIsIFwiRnVsbCBTdGFjayBEZXZlbG9wZXIgOilcIl0nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3cmFwXCI+PC9zcGFuPlxuICAgICAgICAgIDwvUG9zaXRpb24+XG4gICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgLi4ucHJvcHNIYW5kLCB3aWR0aDogYDEwMCVgLCBkaXNwbGF5OiBgZmxleGAsIGp1c3RpZnlDb250ZW50OiBgY2VudGVyYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTd2lwZVJpZ2h0SWNvbiAvPlxuICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICA8L1BpY3R1cmU+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Introduction/index.js\n");

/***/ })

})