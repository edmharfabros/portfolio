webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Introduction/index.js":
/*!******************************************!*\
  !*** ./components/Introduction/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ \"./components/Introduction/components.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/edmharfabros/Projects/portfolio/components/Introduction/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar timeout = null;\n\nvar Index = function Index() {\n  _s();\n\n  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    delay: 800,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsName = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    delay: 1500,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsHandShow = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    delay: 3000,\n    duration: 1000,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsHand = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    delay: 500,\n    loop: {\n      reverse: true\n    },\n    to: {\n      transform: 'translateX(-20px)'\n    },\n    from: {\n      transform: 'translateX(0px)'\n    }\n  });\n\n  var startAnimation = function startAnimation() {\n    timeout = setTimeout(function () {\n      var TxtType = function TxtType(el, toRotate, period) {\n        this.toRotate = toRotate;\n        this.el = el;\n        this.loopNum = 0;\n        this.period = parseInt(period, 10) || 2000;\n        this.txt = '';\n        this.tick();\n        this.isDeleting = false;\n      };\n\n      TxtType.prototype.tick = function () {\n        var i = this.loopNum % this.toRotate.length;\n        var fullTxt = this.toRotate[i];\n\n        if (this.isDeleting) {\n          this.txt = fullTxt.substring(0, this.txt.length - 1);\n        } else {\n          this.txt = fullTxt.substring(0, this.txt.length + 1);\n        }\n\n        this.el.innerHTML = '<span class=\"wrap\">' + this.txt + '</span>';\n        var that = this;\n        var delta = 200 - Math.random() * 100;\n\n        if (this.isDeleting) {\n          delta /= 2;\n        }\n\n        if (!this.isDeleting && this.txt === fullTxt) {\n          delta = this.period;\n          this.isDeleting = true;\n        } else if (this.isDeleting && this.txt === '') {\n          this.isDeleting = false;\n          this.loopNum++;\n          delta = 500;\n        }\n\n        setTimeout(function () {\n          that.tick();\n        }, delta);\n      };\n\n      var elements = document.getElementsByClassName('typewrite');\n\n      for (var i = 0; i < elements.length; i++) {\n        var toRotate = elements[i].getAttribute('data-type');\n        var period = elements[i].getAttribute('data-period');\n\n        if (toRotate) {\n          new TxtType(elements[i], JSON.parse(toRotate), period);\n        }\n      } // INJECT CSS\n\n\n      var css = document.createElement(\"style\");\n      css.type = \"text/css\";\n      css.innerHTML = \".typewrite > .wrap { border-right: 0.08em solid #fff}\";\n      document.body.appendChild(css);\n    }, 2500);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    startAnimation();\n    return function () {\n      timeout = null;\n\n      var elem = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.body.getElementsByTagName('style'));\n\n      elem.map(function (item) {\n        return item.innerHTML = \"\";\n      });\n    };\n  }, []);\n  return __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 5\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"Picture\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"TextContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"animated\"].div, {\n    style: props,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 13\n    }\n  }, \"I am\")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"animated\"].div, {\n    style: propsName,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"Name\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }\n  }, \"Edmhar Fabros\")), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"Position\"], {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Backend Web Developer\\\", \\\"Frontend Web Developer\\\", \\\"Full Stack Developer :)\\\"]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: \"wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 13\n    }\n  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, propsHandShow), {}, {\n      width: \"100%\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, propsHand), {}, {\n      width: \"100%\",\n      display: \"flex\",\n      justifyContent: \"center\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 13\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"SwipeLeftIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n_s(Index, \"QskODm97W4CrDmbQmGG98r+jSi8=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXguanM/MzY5MCJdLCJuYW1lcyI6WyJ0aW1lb3V0IiwiSW5kZXgiLCJwcm9wcyIsInVzZVNwcmluZyIsImRlbGF5IiwidG8iLCJvcGFjaXR5IiwiZnJvbSIsInByb3BzTmFtZSIsInByb3BzSGFuZFNob3ciLCJkdXJhdGlvbiIsInByb3BzSGFuZCIsImxvb3AiLCJyZXZlcnNlIiwidHJhbnNmb3JtIiwic3RhcnRBbmltYXRpb24iLCJzZXRUaW1lb3V0IiwiVHh0VHlwZSIsImVsIiwidG9Sb3RhdGUiLCJwZXJpb2QiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImkiLCJsZW5ndGgiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwiY3NzIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ1c2VFZmZlY3QiLCJlbGVtIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJtYXAiLCJpdGVtIiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQUlBLE9BQU8sR0FBRyxJQUFkOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsS0FBSyxHQUFHQyw4REFBUyxDQUFDO0FBQ3RCQyxTQUFLLEVBQUUsR0FEZTtBQUV0QkMsTUFBRSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRTtBQURQLEtBRmtCO0FBS3RCQyxRQUFJLEVBQUU7QUFDSkQs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QUssUUFBdkI7QUFBaUNDLGFBQU8sUUFBeEM7QUFBa0RDLG9CQUFjO0FBQWhFLE1BRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBSEYsQ0FkRixDQURGLENBREYsQ0FERjtBQThCRCxDQTdJRDs7R0FBTXJELEs7VUFDVUUsc0QsRUFTSUEsc0QsRUFVSUEsc0QsRUFXSkEsc0Q7OztLQS9CZEYsSztBQStJU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ludHJvZHVjdGlvbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUGljdHVyZSwgVGV4dENvbnRhaW5lciwgVGl0bGUsIE5hbWUsIFBvc2l0aW9uLCBTd2lwZUxlZnRJY29uIH0gZnJvbSAnLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuXG5cbmxldCB0aW1lb3V0ID0gbnVsbDtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHtcbiAgICBkZWxheTogODAwLFxuICAgIHRvOiB7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSxcbiAgICBmcm9tOiB7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfVxuICB9KVxuICBjb25zdCBwcm9wc05hbWUgPSB1c2VTcHJpbmcoe1xuICAgIGRlbGF5OiAxNTAwLFxuICAgIHRvOiB7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSxcbiAgICBmcm9tOiB7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHByb3BzSGFuZFNob3cgPSB1c2VTcHJpbmcoe1xuICAgIGRlbGF5OiAzMDAwLFxuICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIHRvOiB7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSxcbiAgICBmcm9tOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgIH1cbiAgfSlcblxuICBjb25zdCBwcm9wc0hhbmQgPSB1c2VTcHJpbmcoe1xuICAgIGRlbGF5OiA1MDAsXG4gICAgbG9vcDogeyByZXZlcnNlOiB0cnVlIH0sXG4gICAgdG86IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTIwcHgpJ1xuICAgIH0sXG4gICAgZnJvbToge1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpJyxcbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgc3RhcnRBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmFyIFR4dFR5cGUgPSBmdW5jdGlvbiAoZWwsIHRvUm90YXRlLCBwZXJpb2QpIHtcbiAgICAgICAgdGhpcy50b1JvdGF0ZSA9IHRvUm90YXRlO1xuICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIHRoaXMubG9vcE51bSA9IDA7XG4gICAgICAgIHRoaXMucGVyaW9kID0gcGFyc2VJbnQocGVyaW9kLCAxMCkgfHwgMjAwMDtcbiAgICAgICAgdGhpcy50eHQgPSAnJztcbiAgICAgICAgdGhpcy50aWNrKCk7XG4gICAgICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgVHh0VHlwZS5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmxvb3BOdW0gJSB0aGlzLnRvUm90YXRlLmxlbmd0aDtcbiAgICAgICAgdmFyIGZ1bGxUeHQgPSB0aGlzLnRvUm90YXRlW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIndyYXBcIj4nICsgdGhpcy50eHQgKyAnPC9zcGFuPic7XG5cbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgZGVsdGEgPSAyMDAgLSBNYXRoLnJhbmRvbSgpICogMTAwO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHsgZGVsdGEgLz0gMjsgfVxuXG4gICAgICAgIGlmICghdGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBmdWxsVHh0KSB7XG4gICAgICAgICAgZGVsdGEgPSB0aGlzLnBlcmlvZDtcbiAgICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmxvb3BOdW0rKztcbiAgICAgICAgICBkZWx0YSA9IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoYXQudGljaygpO1xuICAgICAgICB9LCBkZWx0YSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0eXBld3JpdGUnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRvUm90YXRlID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgdmFyIHBlcmlvZCA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJpb2QnKTtcbiAgICAgICAgaWYgKHRvUm90YXRlKSB7XG4gICAgICAgICAgbmV3IFR4dFR5cGUoZWxlbWVudHNbaV0sIEpTT04ucGFyc2UodG9Sb3RhdGUpLCBwZXJpb2QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBJTkpFQ1QgQ1NTXG4gICAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgY3NzLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICBjc3MuaW5uZXJIVE1MID0gXCIudHlwZXdyaXRlID4gLndyYXAgeyBib3JkZXItcmlnaHQ6IDAuMDhlbSBzb2xpZCAjZmZmfVwiO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xuICAgIH0sIDI1MDApXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXJ0QW5pbWF0aW9uKClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgY29uc3QgZWxlbSA9IFsuLi5kb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdHlsZScpXVxuICAgICAgZWxlbS5tYXAoKGl0ZW0pID0+IGl0ZW0uaW5uZXJIVE1MID0gXCJcIilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxQaWN0dXJlPlxuICAgICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICBzdHlsZT17cHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRpdGxlPkkgYW08L1RpdGxlPlxuICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgIHN0eWxlPXtwcm9wc05hbWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5hbWU+RWRtaGFyIEZhYnJvczwvTmFtZT5cbiAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgICA8UG9zaXRpb24gY2xhc3NOYW1lPVwidHlwZXdyaXRlXCIgZGF0YS1wZXJpb2Q9XCIxMDAwXCIgZGF0YS10eXBlPSdbIFwiQmFja2VuZCBXZWIgRGV2ZWxvcGVyXCIsIFwiRnJvbnRlbmQgV2ViIERldmVsb3BlclwiLCBcIkZ1bGwgU3RhY2sgRGV2ZWxvcGVyIDopXCJdJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndyYXBcIj48L3NwYW4+XG4gICAgICAgICAgPC9Qb3NpdGlvbj5cbiAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICBzdHlsZT17eyAuLi5wcm9wc0hhbmRTaG93LCB3aWR0aDogYDEwMCVgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyAuLi5wcm9wc0hhbmQsIHdpZHRoOiBgMTAwJWAsIGRpc3BsYXk6IGBmbGV4YCwganVzdGlmeUNvbnRlbnQ6IGBjZW50ZXJgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTd2lwZUxlZnRJY29uIC8+XG4gICAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgPC9UZXh0Q29udGFpbmVyPlxuICAgICAgPC9QaWN0dXJlPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Introduction/index.js\n");

/***/ })

})