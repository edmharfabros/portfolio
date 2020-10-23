webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Introduction/index.js":
/*!******************************************!*\
  !*** ./components/Introduction/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./components/Introduction/components.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/edmharfabros/Projects/portfolio/components/Introduction/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var trail = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useTrail\"])(2, {\n    config: config,\n    opacity: 1,\n    x: 20,\n    from: {\n      opacity: 0,\n      x: 20\n    }\n  });\n\n  var startAnimation = function startAnimation() {\n    setTimeout(function () {\n      var TxtType = function TxtType(el, toRotate, period) {\n        this.toRotate = toRotate;\n        this.el = el;\n        this.loopNum = 0;\n        this.period = parseInt(period, 10) || 2000;\n        this.txt = '';\n        this.tick();\n        this.isDeleting = false;\n      };\n\n      TxtType.prototype.tick = function () {\n        var i = this.loopNum % this.toRotate.length;\n        var fullTxt = this.toRotate[i];\n\n        if (this.isDeleting) {\n          this.txt = fullTxt.substring(0, this.txt.length - 1);\n        } else {\n          this.txt = fullTxt.substring(0, this.txt.length + 1);\n        }\n\n        this.el.innerHTML = '<span class=\"wrap\">' + this.txt + '</span>';\n        var that = this;\n        var delta = 200 - Math.random() * 100;\n\n        if (this.isDeleting) {\n          delta /= 2;\n        }\n\n        if (!this.isDeleting && this.txt === fullTxt) {\n          delta = this.period;\n          this.isDeleting = true;\n        } else if (this.isDeleting && this.txt === '') {\n          this.isDeleting = false;\n          this.loopNum++;\n          delta = 500;\n        }\n\n        setTimeout(function () {\n          that.tick();\n        }, delta);\n      };\n\n      var elements = document.getElementsByClassName('typewrite');\n\n      for (var i = 0; i < elements.length; i++) {\n        var toRotate = elements[i].getAttribute('data-type');\n        var period = elements[i].getAttribute('data-period');\n\n        if (toRotate) {\n          new TxtType(elements[i], JSON.parse(toRotate), period);\n        }\n      } // INJECT CSS\n\n\n      var css = document.createElement(\"style\");\n      css.type = \"text/css\";\n      css.innerHTML = \".typewrite > .wrap { border-right: 0.08em solid #fff}\";\n      document.body.appendChild(css);\n    }, 3000);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    startAnimation();\n  }, []);\n  return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Picture\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"TextContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, \"I am\")), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Name\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, \"Edmhar Fabros\"), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Position\"], {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Backend Developer\\\", \\\"Frontend Developer\\\", \\\"Full Stack Developer :)\\\"]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    \"class\": \"wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"SwipeRightIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Index, \"KtFc9Dvb+uqJun636DxwlDTA0M4=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useTrail\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXguanM/MzY5MCJdLCJuYW1lcyI6WyJJbmRleCIsInRyYWlsIiwidXNlVHJhaWwiLCJjb25maWciLCJvcGFjaXR5IiwieCIsImZyb20iLCJzdGFydEFuaW1hdGlvbiIsInNldFRpbWVvdXQiLCJUeHRUeXBlIiwiZWwiLCJ0b1JvdGF0ZSIsInBlcmlvZCIsImxvb3BOdW0iLCJwYXJzZUludCIsInR4dCIsInRpY2siLCJpc0RlbGV0aW5nIiwicHJvdG90eXBlIiwiaSIsImxlbmd0aCIsImZ1bGxUeHQiLCJzdWJzdHJpbmciLCJpbm5lckhUTUwiLCJ0aGF0IiwiZGVsdGEiLCJNYXRoIiwicmFuZG9tIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVsQixNQUFNQyxLQUFLLEdBQUdDLDZEQUFRLENBQUMsQ0FBRCxFQUFJO0FBQ3hCQyxVQUFNLEVBQU5BLE1BRHdCO0FBRXhCQyxXQUFPLEVBQUUsQ0FGZTtBQUd4QkMsS0FBQyxFQUFFLEVBSHFCO0FBSXhCQyxRQUFJLEVBQUU7QUFBRUYsYUFBTyxFQUFFLENBQVg7QUFBY0MsT0FBQyxFQUFFO0FBQWpCO0FBSmtCLEdBQUosQ0FBdEI7O0FBT0EsTUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCQyxjQUFVLENBQUMsWUFBTTtBQUNmLFVBQUlDLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVVDLEVBQVYsRUFBY0MsUUFBZCxFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDNUMsYUFBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxhQUFLRCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxhQUFLRyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGFBQUtELE1BQUwsR0FBY0UsUUFBUSxDQUFDRixNQUFELEVBQVMsRUFBVCxDQUFSLElBQXdCLElBQXRDO0FBQ0EsYUFBS0csR0FBTCxHQUFXLEVBQVg7QUFDQSxhQUFLQyxJQUFMO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNELE9BUkQ7O0FBVUFSLGFBQU8sQ0FBQ1MsU0FBUixDQUFrQkYsSUFBbEIsR0FBeUIsWUFBWTtBQUNuQyxZQUFJRyxDQUFDLEdBQUcsS0FBS04sT0FBTCxHQUFlLEtBQUtGLFFBQUwsQ0FBY1MsTUFBckM7QUFDQSxZQUFJQyxPQUFPLEdBQUcsS0FBS1YsUUFBTCxDQUFjUSxDQUFkLENBQWQ7O0FBRUEsWUFBSSxLQUFLRixVQUFULEVBQXFCO0FBQ25CLGVBQUtGLEdBQUwsR0FBV00sT0FBTyxDQUFDQyxTQUFSLENBQWtCLENBQWxCLEVBQXFCLEtBQUtQLEdBQUwsQ0FBU0ssTUFBVCxHQUFrQixDQUF2QyxDQUFYO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZUFBS0wsR0FBTCxHQUFXTSxPQUFPLENBQUNDLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsS0FBS1AsR0FBTCxDQUFTSyxNQUFULEdBQWtCLENBQXZDLENBQVg7QUFDRDs7QUFFRCxhQUFLVixFQUFMLENBQVFhLFNBQVIsR0FBb0Isd0JBQXdCLEtBQUtSLEdBQTdCLEdBQW1DLFNBQXZEO0FBRUEsWUFBSVMsSUFBSSxHQUFHLElBQVg7QUFDQSxZQUFJQyxLQUFLLEdBQUcsTUFBTUMsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWxDOztBQUVBLFlBQUksS0FBS1YsVUFBVCxFQUFxQjtBQUFFUSxlQUFLLElBQUksQ0FBVDtBQUFhOztBQUVwQyxZQUFJLENBQUMsS0FBS1IsVUFBTixJQUFvQixLQUFLRixHQUFMLEtBQWFNLE9BQXJDLEVBQThDO0FBQzVDSSxlQUFLLEdBQUcsS0FBS2IsTUFBYjtBQUNBLGVBQUtLLFVBQUwsR0FBa0IsSUFBbEI7QUFDRCxTQUhELE1BR08sSUFBSSxLQUFLQSxVQUFMLElBQW1CLEtBQUtGLEdBQUwsS0FBYSxFQUFwQyxFQUF3QztBQUM3QyxlQUFLRSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsZUFBS0osT0FBTDtBQUNBWSxlQUFLLEdBQUcsR0FBUjtBQUNEOztBQUVEakIsa0JBQVUsQ0FBQyxZQUFZO0FBQ3JCZ0IsY0FBSSxDQUFDUixJQUFMO0FBQ0QsU0FGUyxFQUVQUyxLQUZPLENBQVY7QUFHRCxPQTdCRDs7QUErQkEsVUFBSUcsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFdBQWhDLENBQWY7O0FBQ0EsV0FBSyxJQUFJWCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUyxRQUFRLENBQUNSLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFlBQUlSLFFBQVEsR0FBR2lCLFFBQVEsQ0FBQ1QsQ0FBRCxDQUFSLENBQVlZLFlBQVosQ0FBeUIsV0FBekIsQ0FBZjtBQUNBLFlBQUluQixNQUFNLEdBQUdnQixRQUFRLENBQUNULENBQUQsQ0FBUixDQUFZWSxZQUFaLENBQXlCLGFBQXpCLENBQWI7O0FBQ0EsWUFBSXBCLFFBQUosRUFBYztBQUNaLGNBQUlGLE9BQUosQ0FBWW1CLFFBQVEsQ0FBQ1QsQ0FBRCxDQUFwQixFQUF5QmEsSUFBSSxDQUFDQyxLQUFMLENBQVd0QixRQUFYLENBQXpCLEVBQStDQyxNQUEvQztBQUNEO0FBQ0YsT0FqRGMsQ0FrRGY7OztBQUNBLFVBQUlzQixHQUFHLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixPQUF2QixDQUFWO0FBQ0FELFNBQUcsQ0FBQ0UsSUFBSixHQUFXLFVBQVg7QUFDQUYsU0FBRyxDQUFDWCxTQUFKLEdBQWdCLHVEQUFoQjtBQUNBTSxjQUFRLENBQUNRLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkosR0FBMUI7QUFDRCxLQXZEUyxFQXVEUCxJQXZETyxDQUFWO0FBd0RELEdBekREOztBQTJEQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2RoQyxrQkFBYztBQUNmLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxTQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIQSxDQURGLEVBTUUsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLEVBT0UsTUFBQyxvREFBRDtBQUFVLGFBQVMsRUFBQyxXQUFwQjtBQUFnQyxtQkFBWSxNQUE1QztBQUFtRCxpQkFBVSwrRUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLEVBVUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERixDQURGLENBREY7QUFrQkQsQ0ExRkQ7O0dBQU1QLEs7VUFFVUUscUQ7OztLQUZWRixLO0FBNEZTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW50cm9kdWN0aW9uL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBQaWN0dXJlLCBUZXh0Q29udGFpbmVyLCBUaXRsZSwgTmFtZSwgUG9zaXRpb24sIFN3aXBlUmlnaHRJY29uIH0gZnJvbSAnLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFpbCwgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gIGNvbnN0IHRyYWlsID0gdXNlVHJhaWwoMiwge1xuICAgIGNvbmZpZyxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHg6IDIwLFxuICAgIGZyb206IHsgb3BhY2l0eTogMCwgeDogMjAsIH0sXG4gIH0pXG5cbiAgY29uc3Qgc3RhcnRBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB2YXIgVHh0VHlwZSA9IGZ1bmN0aW9uIChlbCwgdG9Sb3RhdGUsIHBlcmlvZCkge1xuICAgICAgICB0aGlzLnRvUm90YXRlID0gdG9Sb3RhdGU7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy5sb29wTnVtID0gMDtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwYXJzZUludChwZXJpb2QsIDEwKSB8fCAyMDAwO1xuICAgICAgICB0aGlzLnR4dCA9ICcnO1xuICAgICAgICB0aGlzLnRpY2soKTtcbiAgICAgICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBUeHRUeXBlLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaSA9IHRoaXMubG9vcE51bSAlIHRoaXMudG9Sb3RhdGUubGVuZ3RoO1xuICAgICAgICB2YXIgZnVsbFR4dCA9IHRoaXMudG9Sb3RhdGVbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGluZykge1xuICAgICAgICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwid3JhcFwiPicgKyB0aGlzLnR4dCArICc8L3NwYW4+JztcblxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBkZWx0YSA9IDIwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDA7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGluZykgeyBkZWx0YSAvPSAyOyB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IGZ1bGxUeHQpIHtcbiAgICAgICAgICBkZWx0YSA9IHRoaXMucGVyaW9kO1xuICAgICAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSAnJykge1xuICAgICAgICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubG9vcE51bSsrO1xuICAgICAgICAgIGRlbHRhID0gNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhhdC50aWNrKCk7XG4gICAgICAgIH0sIGRlbHRhKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3R5cGV3cml0ZScpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdG9Sb3RhdGUgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICAgICAgICB2YXIgcGVyaW9kID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXBlcmlvZCcpO1xuICAgICAgICBpZiAodG9Sb3RhdGUpIHtcbiAgICAgICAgICBuZXcgVHh0VHlwZShlbGVtZW50c1tpXSwgSlNPTi5wYXJzZSh0b1JvdGF0ZSksIHBlcmlvZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIElOSkVDVCBDU1NcbiAgICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBjc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgIGNzcy5pbm5lckhUTUwgPSBcIi50eXBld3JpdGUgPiAud3JhcCB7IGJvcmRlci1yaWdodDogMC4wOGVtIHNvbGlkICNmZmZ9XCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNzcyk7XG4gICAgfSwgMzAwMClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhcnRBbmltYXRpb24oKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8UGljdHVyZT5cbiAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICBcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8VGl0bGU+SSBhbTwvVGl0bGU+XG4gICAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgICAgPE5hbWU+RWRtaGFyIEZhYnJvczwvTmFtZT5cbiAgICAgICAgICA8UG9zaXRpb24gY2xhc3NOYW1lPVwidHlwZXdyaXRlXCIgZGF0YS1wZXJpb2Q9XCIxMDAwXCIgZGF0YS10eXBlPSdbIFwiQmFja2VuZCBEZXZlbG9wZXJcIiwgXCJGcm9udGVuZCBEZXZlbG9wZXJcIiwgXCJGdWxsIFN0YWNrIERldmVsb3BlciA6KVwiXSc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndyYXBcIj48L3NwYW4+XG4gICAgICAgICAgPC9Qb3NpdGlvbj5cbiAgICAgICAgICA8U3dpcGVSaWdodEljb24gLz5cbiAgICAgICAgPC9UZXh0Q29udGFpbmVyPlxuICAgICAgPC9QaWN0dXJlPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Introduction/index.js\n");

/***/ })

})