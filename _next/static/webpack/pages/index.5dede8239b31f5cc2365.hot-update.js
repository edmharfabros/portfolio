webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Introduction/components.js":
/*!***********************************************!*\
  !*** ./components/Introduction/components.js ***!
  \***********************************************/
/*! exports provided: Container, Picture, TextContainer, Title, Name, Position, SwipeLeftIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Picture\", function() { return Picture; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextContainer\", function() { return TextContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Name\", function() { return Name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Position\", function() { return Position; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SwipeLeftIcon\", function() { return SwipeLeftIcon; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_devices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/devices */ \"./src/devices.js\");\n/* harmony import */ var _public_icons_swipe_left_colored_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/icons/swipe-left-colored.svg */ \"./public/icons/swipe-left-colored.svg\");\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"components__Container\",\n  componentId: \"hnkulw-0\"\n})([\"display:flex;flex-direction:row;height:inherit;\"]);\nvar Picture = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"components__Picture\",\n  componentId: \"hnkulw-1\"\n})([\"flex:1;flex-basis:50%;background:url(\\\"/images/page_picture.jpg\\\");background-position:center;background-size:cover;display:flex;justify-content:center;align-items:flex-end;@media \", \"{align-items:flex-start;justify-content:flex-end;}\"], _src_devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MD);\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"components__TextContainer\",\n  componentId: \"hnkulw-2\"\n})([\"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:15px;@media \", \"{margin-top:25em;margin-right:3em;}@media \", \"{margin-top:13em;margin-right:8em;}\"], _src_devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MD, _src_devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DESKTOP);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"components__Title\",\n  componentId: \"hnkulw-3\"\n})([\"margin:0;color:white;font-size:4em;line-height:0.8;@media \", \"{font-size:5em;}@media \", \"{font-size:7em;}\"], _src_devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MD, _src_devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DESKTOP);\nvar Name = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"components__Name\",\n  componentId: \"hnkulw-4\"\n})([\"color:#28abb9;margin:0;font-size:2.8em;line-height:1;letter-spacing:1px;@media \", \"{font-size:3.5em;}@media \", \"{font-size:5em;}\"], _src_devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MD, _src_devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DESKTOP);\nvar Position = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"components__Position\",\n  componentId: \"hnkulw-5\"\n})([\"margin:0;color:white;font-size:1.5em;line-height:1.2;margin-bottom:0.5em;@media \", \"{font-size:1.7em;}@media \", \"{font-size:2.5em;}\"], _src_devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MD, _src_devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DESKTOP);\nvar SwipeLeftIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_public_icons_swipe_left_colored_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).withConfig({\n  displayName: \"components__SwipeLeftIcon\",\n  componentId: \"hnkulw-6\"\n})([\"margin-top:0.5em;margin-bottom:1em;align-self:center;height:50px;width:50px;color:white;@media \", \"{display:none;}\"], _src_devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MD);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vY29tcG9uZW50cy5qcz8wZWJlIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlBpY3R1cmUiLCJEZXZpY2UiLCJNRCIsIlRleHRDb250YWluZXIiLCJERVNLVE9QIiwiVGl0bGUiLCJoMSIsIk5hbWUiLCJQb3NpdGlvbiIsIlN3aXBlTGVmdEljb24iLCJTd2lwZUxlZnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdURBQWY7QUFNQSxJQUFNQyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbVBBVVRFLG9EQUFNLENBQUNDLEVBVkUsQ0FBYjtBQWdCQSxJQUFNQyxhQUFhLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbU1BU2ZFLG9EQUFNLENBQUNDLEVBVFEsRUFjZkQsb0RBQU0sQ0FBQ0csT0FkUSxDQUFuQjtBQXFCQSxJQUFNQyxLQUFLLEdBQUdQLHlEQUFNLENBQUNRLEVBQVY7QUFBQTtBQUFBO0FBQUEsa0hBS1BMLG9EQUFNLENBQUNDLEVBTEEsRUFRUEQsb0RBQU0sQ0FBQ0csT0FSQSxDQUFYO0FBYUEsSUFBTUcsSUFBSSxHQUFHVCx5REFBTSxDQUFDUSxFQUFWO0FBQUE7QUFBQTtBQUFBLHlJQU1OTCxvREFBTSxDQUFDQyxFQU5ELEVBU05ELG9EQUFNLENBQUNHLE9BVEQsQ0FBVjtBQWNBLElBQU1JLFFBQVEsR0FBR1YseURBQU0sQ0FBQ1EsRUFBVjtBQUFBO0FBQUE7QUFBQSw0SUFNVkwsb0RBQU0sQ0FBQ0MsRUFORyxFQVNWRCxvREFBTSxDQUFDRyxPQVRHLENBQWQ7QUFjQSxJQUFNSyxhQUFhLEdBQUdYLGlFQUFNLENBQUNZLDRFQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsMkhBUWZULG9EQUFNLENBQUNDLEVBUlEsQ0FBbkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ludHJvZHVjdGlvbi9jb21wb25lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBEZXZpY2UgZnJvbSAnLi4vLi4vc3JjL2RldmljZXMnXG5pbXBvcnQgU3dpcGVMZWZ0IGZyb20gJy4uLy4uL3B1YmxpYy9pY29ucy9zd2lwZS1sZWZ0LWNvbG9yZWQuc3ZnJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiBpbmhlcml0O1xuYFxuXG5leHBvcnQgY29uc3QgUGljdHVyZSA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDE7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2ltYWdlcy9wYWdlX3BpY3R1cmUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XG5cbiAgQG1lZGlhICR7RGV2aWNlLk1EfXtcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgXG4gIHBhZGRpbmc6MTVweDtcblxuXG4gIEBtZWRpYSAke0RldmljZS5NRH17XG4gICAgbWFyZ2luLXRvcDoyNWVtO1xuICAgIG1hcmdpbi1yaWdodDozZW07XG4gIH1cblxuICBAbWVkaWEgJHtEZXZpY2UuREVTS1RPUH17XG4gICAgbWFyZ2luLXRvcDoxM2VtO1xuICAgIG1hcmdpbi1yaWdodDo4ZW07XG4gIH1cbiAgXG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTo0ZW07XG4gIGxpbmUtaGVpZ2h0OjAuODtcbiAgQG1lZGlhICR7RGV2aWNlLk1EfXtcbiAgICBmb250LXNpemU6NWVtO1xuICB9XG4gIEBtZWRpYSAke0RldmljZS5ERVNLVE9QfXtcbiAgICBmb250LXNpemU6N2VtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBOYW1lID0gc3R5bGVkLmgxYFxuICBjb2xvcjogIzI4YWJiOTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6Mi44ZW07XG4gIGxpbmUtaGVpZ2h0OjE7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIEBtZWRpYSAke0RldmljZS5NRH17XG4gICAgZm9udC1zaXplOjMuNWVtO1xuICB9XG4gIEBtZWRpYSAke0RldmljZS5ERVNLVE9QfXtcbiAgICBmb250LXNpemU6NWVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBQb3NpdGlvbiA9IHN0eWxlZC5oMWBcbiAgbWFyZ2luOjA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOjEuNWVtO1xuICBsaW5lLWhlaWdodDoxLjI7XG4gIG1hcmdpbi1ib3R0b206MC41ZW07XG4gIEBtZWRpYSAke0RldmljZS5NRH17XG4gICAgZm9udC1zaXplOjEuN2VtO1xuICB9XG4gIEBtZWRpYSAke0RldmljZS5ERVNLVE9QfXtcbiAgICBmb250LXNpemU6Mi41ZW07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFN3aXBlTGVmdEljb24gPSBzdHlsZWQoU3dpcGVMZWZ0KWBcbiAgbWFyZ2luLXRvcDowLjVlbTtcbiAgbWFyZ2luLWJvdHRvbToxZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OjUwcHg7XG4gIHdpZHRoOjUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICBAbWVkaWEgJHtEZXZpY2UuTUR9e1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Introduction/components.js\n");

/***/ }),

/***/ "./components/Introduction/index.js":
/*!******************************************!*\
  !*** ./components/Introduction/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ \"./components/Introduction/components.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/edmharfabros/Projects/portfolio/components/Introduction/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var props = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    delay: 800,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsName = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    delay: 1500,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsHandShow = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    delay: 3000,\n    duration: 1000,\n    to: {\n      opacity: 1\n    },\n    from: {\n      opacity: 0\n    }\n  });\n  var propsHand = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    delay: 3000,\n    duration: 800,\n    reset: true,\n    to: function () {\n      var _to = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(next) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (false) {}\n\n                _context.next = 3;\n                return next({\n                  transform: 'translateX(0px)'\n                });\n\n              case 3:\n                _context.next = 5;\n                return next({\n                  transform: 'translateX(-20px)'\n                });\n\n              case 5:\n                _context.next = 0;\n                break;\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function to(_x) {\n        return _to.apply(this, arguments);\n      }\n\n      return to;\n    }(),\n    from: {\n      transform: 'translateX(0px)'\n    }\n  });\n\n  var startAnimation = function startAnimation() {\n    setTimeout(function () {\n      var TxtType = function TxtType(el, toRotate, period) {\n        this.toRotate = toRotate;\n        this.el = el;\n        this.loopNum = 0;\n        this.period = parseInt(period, 10) || 2000;\n        this.txt = '';\n        this.tick();\n        this.isDeleting = false;\n      };\n\n      TxtType.prototype.tick = function () {\n        var i = this.loopNum % this.toRotate.length;\n        var fullTxt = this.toRotate[i];\n\n        if (this.isDeleting) {\n          this.txt = fullTxt.substring(0, this.txt.length - 1);\n        } else {\n          this.txt = fullTxt.substring(0, this.txt.length + 1);\n        }\n\n        this.el.innerHTML = '<span class=\"wrap\">' + this.txt + '</span>';\n        var that = this;\n        var delta = 200 - Math.random() * 100;\n\n        if (this.isDeleting) {\n          delta /= 2;\n        }\n\n        if (!this.isDeleting && this.txt === fullTxt) {\n          delta = this.period;\n          this.isDeleting = true;\n        } else if (this.isDeleting && this.txt === '') {\n          this.isDeleting = false;\n          this.loopNum++;\n          delta = 500;\n        }\n\n        setTimeout(function () {\n          that.tick();\n        }, delta);\n      };\n\n      var elements = document.getElementsByClassName('typewrite');\n\n      for (var i = 0; i < elements.length; i++) {\n        var toRotate = elements[i].getAttribute('data-type');\n        var period = elements[i].getAttribute('data-period');\n\n        if (toRotate) {\n          new TxtType(elements[i], JSON.parse(toRotate), period);\n        }\n      } // INJECT CSS\n\n\n      var css = document.createElement(\"style\");\n      css.type = \"text/css\";\n      css.innerHTML = \".typewrite > .wrap { border-right: 0.08em solid #fff}\";\n      document.body.appendChild(css);\n    }, 2500);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    startAnimation();\n  }, []);\n  return __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 5\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Picture\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"TextContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, {\n    style: props,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }, \"I am\")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, {\n    style: propsName,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Name\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 13\n    }\n  }, \"Edmhar Fabros\")), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Position\"], {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Backend Developer\\\", \\\"Frontend Developer\\\", \\\"Full Stack Developer :)\\\"]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    \"class\": \"wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, propsHandShow), {}, {\n      width: \"100%\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"animated\"].div, {\n    style: _objectSpread(_objectSpread({}, propsHand), {}, {\n      width: \"100%\",\n      display: \"flex\",\n      justifyContent: \"center\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"SwipeLeftIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n_s(Index, \"QskODm97W4CrDmbQmGG98r+jSi8=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXguanM/MzY5MCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlU3ByaW5nIiwiZGVsYXkiLCJ0byIsIm9wYWNpdHkiLCJmcm9tIiwicHJvcHNOYW1lIiwicHJvcHNIYW5kU2hvdyIsImR1cmF0aW9uIiwicHJvcHNIYW5kIiwicmVzZXQiLCJuZXh0IiwidHJhbnNmb3JtIiwic3RhcnRBbmltYXRpb24iLCJzZXRUaW1lb3V0IiwiVHh0VHlwZSIsImVsIiwidG9Sb3RhdGUiLCJwZXJpb2QiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImkiLCJsZW5ndGgiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwiY3NzIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ1c2VFZmZlY3QiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsS0FBSyxHQUFHQyw4REFBUyxDQUFDO0FBQ3RCQyxTQUFLLEVBQUUsR0FEZTtBQUV0QkMsTUFBRSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRTtBQURQLEtBRmtCO0FBS3RCQyxRQUFJLEVBQUU7QUFDSkQsYUFBTyxFQUFFO0FBREw7QUFMZ0IsR0FBRCxDQUF2QjtBQVNBLE1BQU1FLFNBQVMsR0FBR0wsOERBQVMsQ0FBQztBQUMxQkMsU0FBSyxF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QUEsS0FHRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQUhGLENBZEYsQ0FERixDQURGLENBREY7QUE4QkQsQ0E1SUQ7O0dBQU1qRCxLO1VBQ1VFLHNELEVBU0lBLHNELEVBVUlBLHNELEVBV0pBLHNEOzs7S0EvQmRGLEs7QUE4SVNBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFBpY3R1cmUsIFRleHRDb250YWluZXIsIFRpdGxlLCBOYW1lLCBQb3NpdGlvbiwgU3dpcGVMZWZ0SWNvbiB9IGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7XG4gICAgZGVsYXk6IDgwMCxcbiAgICB0bzoge1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG4gICAgZnJvbToge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH1cbiAgfSlcbiAgY29uc3QgcHJvcHNOYW1lID0gdXNlU3ByaW5nKHtcbiAgICBkZWxheTogMTUwMCxcbiAgICB0bzoge1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG4gICAgZnJvbToge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH1cbiAgfSlcblxuICBjb25zdCBwcm9wc0hhbmRTaG93ID0gdXNlU3ByaW5nKHtcbiAgICBkZWxheTogMzAwMCxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICB0bzoge1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG4gICAgZnJvbToge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcHJvcHNIYW5kID0gdXNlU3ByaW5nKHtcbiAgICBkZWxheTogMzAwMCxcbiAgICBkdXJhdGlvbjogODAwLFxuICAgIHJlc2V0OiB0cnVlLFxuICAgIHRvOiBhc3luYyAobmV4dCkgPT4ge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgYXdhaXQgbmV4dCh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KScgfSlcbiAgICAgICAgYXdhaXQgbmV4dCh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTIwcHgpJyB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgZnJvbToge1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpJyxcbiAgICB9XG4gIH0pXG5cblxuICBjb25zdCBzdGFydEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHZhciBUeHRUeXBlID0gZnVuY3Rpb24gKGVsLCB0b1JvdGF0ZSwgcGVyaW9kKSB7XG4gICAgICAgIHRoaXMudG9Sb3RhdGUgPSB0b1JvdGF0ZTtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLmxvb3BOdW0gPSAwO1xuICAgICAgICB0aGlzLnBlcmlvZCA9IHBhcnNlSW50KHBlcmlvZCwgMTApIHx8IDIwMDA7XG4gICAgICAgIHRoaXMudHh0ID0gJyc7XG4gICAgICAgIHRoaXMudGljaygpO1xuICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIFR4dFR5cGUucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sb29wTnVtICUgdGhpcy50b1JvdGF0ZS5sZW5ndGg7XG4gICAgICAgIHZhciBmdWxsVHh0ID0gdGhpcy50b1JvdGF0ZVtpXTtcblxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7XG4gICAgICAgICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ3cmFwXCI+JyArIHRoaXMudHh0ICsgJzwvc3Bhbj4nO1xuXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIGRlbHRhID0gMjAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMDtcblxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7IGRlbHRhIC89IDI7IH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gZnVsbFR4dCkge1xuICAgICAgICAgIGRlbHRhID0gdGhpcy5wZXJpb2Q7XG4gICAgICAgICAgdGhpcy5pc0RlbGV0aW5nID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5sb29wTnVtKys7XG4gICAgICAgICAgZGVsdGEgPSA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGF0LnRpY2soKTtcbiAgICAgICAgfSwgZGVsdGEpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHlwZXdyaXRlJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0b1JvdGF0ZSA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIHZhciBwZXJpb2QgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGVyaW9kJyk7XG4gICAgICAgIGlmICh0b1JvdGF0ZSkge1xuICAgICAgICAgIG5ldyBUeHRUeXBlKGVsZW1lbnRzW2ldLCBKU09OLnBhcnNlKHRvUm90YXRlKSwgcGVyaW9kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gSU5KRUNUIENTU1xuICAgICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIGNzcy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgY3NzLmlubmVySFRNTCA9IFwiLnR5cGV3cml0ZSA+IC53cmFwIHsgYm9yZGVyLXJpZ2h0OiAwLjA4ZW0gc29saWQgI2ZmZn1cIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcbiAgICB9LCAyNTAwKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdGFydEFuaW1hdGlvbigpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxQaWN0dXJlPlxuICAgICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICBzdHlsZT17cHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRpdGxlPkkgYW08L1RpdGxlPlxuICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgIHN0eWxlPXtwcm9wc05hbWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5hbWU+RWRtaGFyIEZhYnJvczwvTmFtZT5cbiAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgICA8UG9zaXRpb24gY2xhc3NOYW1lPVwidHlwZXdyaXRlXCIgZGF0YS1wZXJpb2Q9XCIxMDAwXCIgZGF0YS10eXBlPSdbIFwiQmFja2VuZCBEZXZlbG9wZXJcIiwgXCJGcm9udGVuZCBEZXZlbG9wZXJcIiwgXCJGdWxsIFN0YWNrIERldmVsb3BlciA6KVwiXSc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndyYXBcIj48L3NwYW4+XG4gICAgICAgICAgPC9Qb3NpdGlvbj5cbiAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICBzdHlsZT17eyAuLi5wcm9wc0hhbmRTaG93LCB3aWR0aDogYDEwMCVgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyAuLi5wcm9wc0hhbmQsIHdpZHRoOiBgMTAwJWAsIGRpc3BsYXk6IGBmbGV4YCwganVzdGlmeUNvbnRlbnQ6IGBjZW50ZXJgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTd2lwZUxlZnRJY29uIC8+XG4gICAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgPC9UZXh0Q29udGFpbmVyPlxuICAgICAgPC9QaWN0dXJlPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Introduction/index.js\n");

/***/ }),

/***/ "./public/icons/swipe-right-colored.svg":
false

})