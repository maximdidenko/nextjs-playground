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

/***/ "./store/notification-context.js":
/*!***************************************!*\
  !*** ./store/notification-context.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotificationContextProvider\": function() { return /* binding */ NotificationContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    notification: null,\n    showNotification: (notification)=>{},\n    hideNotification: ()=>{}\n});\nfunction NotificationContextProvider(param) {\n    let { children  } = param;\n    _s();\n    const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timeout = setTimeout(()=>{\n            setNotification(false);\n        }, 3000);\n        return ()=>{\n            clearTimeout(timeout);\n        };\n    }, [\n        notification\n    ]);\n    const showNotification = (notification)=>{\n        setNotification(notification);\n    };\n    const hideNotification = ()=>{\n        setNotification(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotificationContext.Provider, {\n        value: {\n            showNotification,\n            hideNotification,\n            notification\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/Maxim_Didenko/Documents/Development/next/routing-essentials/store/notification-context.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(NotificationContextProvider, \"STOlQ52V4AC6rG+FjdIHWd/vy8Q=\");\n_c = NotificationContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationContext);\nvar _c;\n$RefreshReg$(_c, \"NotificationContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEyRDtBQUUzRCxNQUFNRyxvQ0FBc0JILG9EQUFhQSxDQUFDO0lBQ3hDSSxjQUFjLElBQUk7SUFDbEJDLGtCQUFrQixDQUFDRCxlQUFpQixDQUFDO0lBQ3JDRSxrQkFBa0IsSUFBTSxDQUFDO0FBQzNCO0FBRU8sU0FBU0MsNEJBQTRCLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaOztJQUMxQyxNQUFNLENBQUNKLGNBQWNLLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXJEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVEsVUFBVUMsV0FBVyxJQUFNO1lBQy9CRixnQkFBZ0IsS0FBSztRQUN2QixHQUFHO1FBRUgsT0FBTyxJQUFNO1lBQ1hHLGFBQWFGO1FBQ2Y7SUFDRixHQUFHO1FBQUNOO0tBQWE7SUFFakIsTUFBTUMsbUJBQW1CLENBQUNELGVBQWlCO1FBQ3pDSyxnQkFBZ0JMO0lBQ2xCO0lBRUEsTUFBTUUsbUJBQW1CLElBQU07UUFDN0JHLGdCQUFnQixJQUFJO0lBQ3RCO0lBRUEscUJBQ0UsOERBQUNOLG9CQUFvQlUsUUFBUTtRQUMzQkMsT0FBTztZQUNMVDtZQUNBQztZQUNBRjtRQUNGO2tCQUVDSTs7Ozs7O0FBR1AsQ0FBQztHQWhDZUQ7S0FBQUE7QUFrQ2hCLCtEQUFlSixtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQuanM/MGQyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOb3RpZmljYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIG5vdGlmaWNhdGlvbjogbnVsbCxcbiAgc2hvd05vdGlmaWNhdGlvbjogKG5vdGlmaWNhdGlvbikgPT4ge30sXG4gIGhpZGVOb3RpZmljYXRpb246ICgpID0+IHt9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtub3RpZmljYXRpb24sIHNldE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE5vdGlmaWNhdGlvbihmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFtub3RpZmljYXRpb25dKTtcblxuICBjb25zdCBzaG93Tm90aWZpY2F0aW9uID0gKG5vdGlmaWNhdGlvbikgPT4ge1xuICAgIHNldE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVOb3RpZmljYXRpb24gPSAoKSA9PiB7XG4gICAgc2V0Tm90aWZpY2F0aW9uKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE5vdGlmaWNhdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHNob3dOb3RpZmljYXRpb24sXG4gICAgICAgIGhpZGVOb3RpZmljYXRpb24sXG4gICAgICAgIG5vdGlmaWNhdGlvbixcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb25Db250ZXh0Iiwibm90aWZpY2F0aW9uIiwic2hvd05vdGlmaWNhdGlvbiIsImhpZGVOb3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldE5vdGlmaWNhdGlvbiIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/notification-context.js\n"));

/***/ })

});