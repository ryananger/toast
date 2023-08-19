"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[28],{28:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(583);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(193);\n/* harmony import */ var ryscott_st__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(258);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(198);\n/* harmony import */ var _SmoothImage_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(348);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar NavBar = function NavBar() {\n  var view = ryscott_st__WEBPACK_IMPORTED_MODULE_1__/* ["default"].view */ .Z.view;\n  var setView = ryscott_st__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setView */ .Z.setView;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n    _useState2 = _slicedToArray(_useState, 2),\n    style = _useState2[0],\n    setStyle = _useState2[1];\n  var checkView = function checkView(str) {\n    return view === str ? \' viewing\' : \'\';\n  };\n  var button = function button(str) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: \'navButton\' + checkView(str),\n      onClick: function onClick() {\n        setView(str);\n      }\n    }, str.toUpperCase());\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setTimeout(function () {\n      setStyle({\n        right: \'0px\'\n      });\n    }, 1000);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "slide",\n    style: {\n      width: \'260px\',\n      height: \'100%\',\n      position: \'relative\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "navbar v",\n    style: style\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "v",\n    style: {\n      width: \'100%\',\n      height: \'400px\',\n      overflow: \'hidden\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SmoothImage_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {\n    className: "navImage",\n    src: "".concat(ryscott_st__WEBPACK_IMPORTED_MODULE_1__/* ["default"].URL */ .Z.URL, "/public/toast_small.webp")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "navButtons v"\n  }, button(\'home\'), button(\'menu\'), button(\'gallery\'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "v",\n    style: {\n      width: \'100%\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "reserveButton icon h",\n    onClick: function onClick() {\n      ryscott_st__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setReserve */ .Z.setReserve(true);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "RESERVE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "orderButton h",\n    onClick: function onClick() {\n      window.open(\'https://ferndale.ordereatattoast.com/\', \'_blank\');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "ORDER")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "contactButtons h"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__/* .FaFacebookSquare */ .R9i, {\n    className: "icon",\n    size: 36,\n    onClick: function onClick() {\n      window.open(\'https://www.facebook.com/toastferndale\', \'_blank\');\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__/* .FaInstagram */ .Zf_, {\n    className: "icon",\n    size: 36,\n    onClick: function onClick() {\n      window.open(\'https://www.instagram.com/EatAtToast/\', \'_blank\');\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__/* .AiFillPhone */ .rJP, {\n    className: "icon",\n    size: 36,\n    onClick: function onClick() {\n      window.open(\'tel:+12483980444\', \'_blank\');\n    }\n  })))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtdGVtcGxhdGUvLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbmF2YmFyL05hdkJhci5qc3g/MmVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7RmFGYWNlYm9va1NxdWFyZSBhcyBGQixcclxuICAgICAgICBGYUluc3RhZ3JhbSBhcyBJbnN0YX0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQge0FpRmlsbFBob25lIGFzIFBob25lfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcblxyXG5pbXBvcnQgc3QgICAgICAgICAgICBmcm9tICdyeXNjb3R0LXN0JztcclxuaW1wb3J0IHtheCwgaGVscGVyc30gZnJvbSAndXRpbCc7XHJcblxyXG5pbXBvcnQgU21vb3RoSW1hZ2UgZnJvbSAnLi4vU21vb3RoSW1hZ2UuanN4JztcclxuXHJcbmNvbnN0IE5hdkJhciA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IHZpZXcgICAgPSBzdC52aWV3O1xyXG4gIGNvbnN0IHNldFZpZXcgPSBzdC5zZXRWaWV3O1xyXG4gIGNvbnN0IFtzdHlsZSwgc2V0U3R5bGVdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB2YXIgY2hlY2tWaWV3ID0gZnVuY3Rpb24oc3RyKSB7XHJcbiAgICAgIHJldHVybiB2aWV3ID09PSBzdHIgPyAnIHZpZXdpbmcnIDogJyc7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGJ1dHRvbiA9IGZ1bmN0aW9uKHN0cikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsnbmF2QnV0dG9uJyArIGNoZWNrVmlldyhzdHIpfSBvbkNsaWNrPXsoKT0+e3NldFZpZXcoc3RyKX19PntzdHIudG9VcHBlckNhc2UoKX08L2Rpdj5cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgc2V0U3R5bGUoe3JpZ2h0OiAnMHB4J30pO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlJyBzdHlsZT17e3dpZHRoOiAnMjYwcHgnLCBoZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhciB2JyBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2JyBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzQwMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nfX0+XHJcbiAgICAgICAgICA8U21vb3RoSW1hZ2UgY2xhc3NOYW1lPSduYXZJbWFnZScgc3JjPXtgJHtzdC5VUkx9L3B1YmxpYy90b2FzdF9zbWFsbC53ZWJwYH0vPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdkJ1dHRvbnMgdic+XHJcbiAgICAgICAgICAgIHtidXR0b24oJ2hvbWUnKX1cclxuICAgICAgICAgICAge2J1dHRvbignbWVudScpfVxyXG4gICAgICAgICAgICB7YnV0dG9uKCdnYWxsZXJ5Jyl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndicgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzZXJ2ZUJ1dHRvbiBpY29uIGgnIG9uQ2xpY2s9eygpPT57c3Quc2V0UmVzZXJ2ZSh0cnVlKX19PlxyXG4gICAgICAgICAgICA8aDE+UkVTRVJWRTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcmRlckJ1dHRvbiBoJyBvbkNsaWNrPXsoKT0+e3dpbmRvdy5vcGVuKCdodHRwczovL2Zlcm5kYWxlLm9yZGVyZWF0YXR0b2FzdC5jb20vJywgJ19ibGFuaycpfX0+XHJcbiAgICAgICAgICAgIDxoMT5PUkRFUjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWN0QnV0dG9ucyBoJz5cclxuICAgICAgICAgICAgPEZCICAgIGNsYXNzTmFtZT0naWNvbicgc2l6ZT17MzZ9IG9uQ2xpY2s9eygpPT57d2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS90b2FzdGZlcm5kYWxlJywgJ19ibGFuaycpfX0vPlxyXG4gICAgICAgICAgICA8SW5zdGEgY2xhc3NOYW1lPSdpY29uJyBzaXplPXszNn0gb25DbGljaz17KCk9Pnt3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9FYXRBdFRvYXN0LycsICdfYmxhbmsnKX19Lz5cclxuICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT0naWNvbicgc2l6ZT17MzZ9IG9uQ2xpY2s9eygpPT57d2luZG93Lm9wZW4oJ3RlbDorMTI0ODM5ODA0NDQnLCAnX2JsYW5rJyl9fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n')}}]);