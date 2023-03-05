"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ui/notification.js":
/*!***************************************!*\
  !*** ./components/ui/notification.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.module.css */ \"./components/ui/notification.module.css\");\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Notification(props) {\n    _s();\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const { title , message , status  } = props;\n    let statusClasses = \"\";\n    if (status === \"success\") {\n        statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().success);\n    }\n    if (status === \"error\") {\n        statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().error);\n    }\n    if (status === \"pending\") {\n        statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().pending);\n    }\n    const activeClasses = \"\".concat((_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().notification), \" \").concat(statusClasses);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: activeClasses,\n        onClick: notificationCtx.hideNotification,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/Maxim_Didenko/Documents/Development/next/routing-essentials/components/ui/notification.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/Maxim_Didenko/Documents/Development/next/routing-essentials/components/ui/notification.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Maxim_Didenko/Documents/Development/next/routing-essentials/components/ui/notification.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Notification, \"RnyxbsESVyWxahxmZw1sLWtWlsc=\");\n_c = Notification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);\nvar _c;\n$RefreshReg$(_c, \"Notification\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFtQztBQUNhO0FBQ21CO0FBRW5FLFNBQVNHLGFBQWFDLEtBQUssRUFBRTs7SUFDM0IsTUFBTUMsa0JBQWtCTCxpREFBVUEsQ0FBQ0UsbUVBQW1CQTtJQUV0RCxNQUFNLEVBQUVJLE1BQUssRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUUsR0FBR0o7SUFFbkMsSUFBSUssZ0JBQWdCO0lBRXBCLElBQUlELFdBQVcsV0FBVztRQUN4QkMsZ0JBQWdCUix5RUFBZTtJQUNqQyxDQUFDO0lBRUQsSUFBSU8sV0FBVyxTQUFTO1FBQ3RCQyxnQkFBZ0JSLHVFQUFhO0lBQy9CLENBQUM7SUFFRCxJQUFJTyxXQUFXLFdBQVc7UUFDeEJDLGdCQUFnQlIseUVBQWU7SUFDakMsQ0FBQztJQUVELE1BQU1ZLGdCQUFnQixHQUEyQkosT0FBeEJSLDhFQUFvQixFQUFDLEtBQWlCLE9BQWRRO0lBRWpELHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXSDtRQUFlSSxTQUFTWixnQkFBZ0JhLGdCQUFnQjs7MEJBQ3RFLDhEQUFDQzswQkFBSWI7Ozs7OzswQkFDTCw4REFBQ2M7MEJBQUdiOzs7Ozs7Ozs7Ozs7QUFHVjtHQTNCU0o7S0FBQUE7QUE2QlQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24uanM/ODA2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kdWxlLmNzcyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udGV4dCBmcm9tICcuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dCc7XG5cbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbihwcm9wcykge1xuICBjb25zdCBub3RpZmljYXRpb25DdHggPSB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IHsgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cyB9ID0gcHJvcHM7XG5cbiAgbGV0IHN0YXR1c0NsYXNzZXMgPSAnJztcblxuICBpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICBzdGF0dXNDbGFzc2VzID0gY2xhc3Nlcy5zdWNjZXNzO1xuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLmVycm9yO1xuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgc3RhdHVzQ2xhc3NlcyA9IGNsYXNzZXMucGVuZGluZztcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZUNsYXNzZXMgPSBgJHtjbGFzc2VzLm5vdGlmaWNhdGlvbn0gJHtzdGF0dXNDbGFzc2VzfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YWN0aXZlQ2xhc3Nlc30gb25DbGljaz17bm90aWZpY2F0aW9uQ3R4LmhpZGVOb3RpZmljYXRpb259PlxuICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgPHA+e21lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsImNsYXNzZXMiLCJOb3RpZmljYXRpb25Db250ZXh0IiwiTm90aWZpY2F0aW9uIiwicHJvcHMiLCJub3RpZmljYXRpb25DdHgiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJzdGF0dXNDbGFzc2VzIiwic3VjY2VzcyIsImVycm9yIiwicGVuZGluZyIsImFjdGl2ZUNsYXNzZXMiLCJub3RpZmljYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaGlkZU5vdGlmaWNhdGlvbiIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/notification.js\n"));

/***/ })

});