"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/input/newsletter-registration.js":
/*!*****************************************************!*\
  !*** ./components/input/newsletter-registration.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsletter-registration.module.css */ \"./components/input/newsletter-registration.module.css\");\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction NewsletterRegistration() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { showNotification , hideNotification  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    function registrationHandler(event) {\n        event.preventDefault();\n        showNotification({\n            title: \"Signing up ...\",\n            message: \"Registering for newsletter\",\n            status: \"pending\"\n        });\n        fetch(\"/api/newsletter\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                email\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then(()=>{\n            showNotification({\n                title: \"Success!\",\n                message: \"Successfully registered for newsletter\",\n                status: \"success\"\n            });\n        }).catch(()=>{\n            showNotification({\n                title: \"Error!\",\n                message: \"Something went wrong\",\n                status: \"error\"\n            });\n        });\n        setEmail(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default().newsletter),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sign up to stay updated!\"\n            }, void 0, false, {\n                fileName: \"/Users/Maxim_Didenko/Documents/Development/next/routing-essentials/components/input/newsletter-registration.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: registrationHandler,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            id: \"email\",\n                            placeholder: \"Your email\",\n                            \"aria-label\": \"Your email\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/Maxim_Didenko/Documents/Development/next/routing-essentials/components/input/newsletter-registration.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Maxim_Didenko/Documents/Development/next/routing-essentials/components/input/newsletter-registration.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Maxim_Didenko/Documents/Development/next/routing-essentials/components/input/newsletter-registration.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Maxim_Didenko/Documents/Development/next/routing-essentials/components/input/newsletter-registration.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Maxim_Didenko/Documents/Development/next/routing-essentials/components/input/newsletter-registration.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsletterRegistration, \"Hz6A6udGtIln6ql2o0hxNWKmMZk=\");\n_c = NewsletterRegistration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsletterRegistration);\nvar _c;\n$RefreshReg$(_c, \"NewsletterRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTZDO0FBQ3NCO0FBQ1I7QUFFM0QsU0FBU0kseUJBQXlCOztJQUNoQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxFQUFFTyxpQkFBZ0IsRUFBRUMsaUJBQWdCLEVBQUUsR0FDMUNQLGlEQUFVQSxDQUFDQyxtRUFBbUJBO0lBRWhDLFNBQVNPLG9CQUFvQkMsS0FBSyxFQUFFO1FBQ2xDQSxNQUFNQyxjQUFjO1FBRXBCSixpQkFBaUI7WUFDZkssT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFFBQVE7UUFDVjtRQUVBQyxNQUFNLG1CQUFtQjtZQUN2QkMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVkO1lBQU07WUFDN0JlLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0YsR0FDR0MsSUFBSSxDQUFDLElBQU07WUFDVmQsaUJBQWlCO2dCQUNmSyxPQUFPO2dCQUNQQyxTQUFTO2dCQUNUQyxRQUFRO1lBQ1Y7UUFDRixHQUNDUSxLQUFLLENBQUMsSUFBTTtZQUNYZixpQkFBaUI7Z0JBQ2ZLLE9BQU87Z0JBQ1BDLFNBQVM7Z0JBQ1RDLFFBQVE7WUFDVjtRQUNGO1FBRUZSLFNBQVM7SUFDWDtJQUVBLHFCQUNFLDhEQUFDaUI7UUFBUUMsV0FBV3JCLHVGQUFrQjs7MEJBQ3BDLDhEQUFDdUI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVuQjswQkFDZCw0RUFBQ29CO29CQUFJTCxXQUFXckIsb0ZBQWU7O3NDQUM3Qiw4REFBQzRCOzRCQUNDQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaQyxjQUFXOzRCQUNYQyxPQUFPL0I7NEJBQ1BnQyxVQUFVLENBQUNDLElBQU1oQyxTQUFTZ0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7c0NBRTFDLDhEQUFDSTtzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7R0F6RFNwQztLQUFBQTtBQTJEVCwrREFBZUEsc0JBQXNCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5wdXQvbmV3c2xldHRlci1yZWdpc3RyYXRpb24uanM/MjdkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOb3RpZmljYXRpb25Db250ZXh0IGZyb20gJy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vbmV3c2xldHRlci1yZWdpc3RyYXRpb24ubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE5ld3NsZXR0ZXJSZWdpc3RyYXRpb24oKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB7IHNob3dOb3RpZmljYXRpb24sIGhpZGVOb3RpZmljYXRpb24gfSA9XG4gICAgdXNlQ29udGV4dChOb3RpZmljYXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiByZWdpc3RyYXRpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNob3dOb3RpZmljYXRpb24oe1xuICAgICAgdGl0bGU6ICdTaWduaW5nIHVwIC4uLicsXG4gICAgICBtZXNzYWdlOiAnUmVnaXN0ZXJpbmcgZm9yIG5ld3NsZXR0ZXInLFxuICAgICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgfSk7XG5cbiAgICBmZXRjaCgnL2FwaS9uZXdzbGV0dGVyJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MhJyxcbiAgICAgICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQgZm9yIG5ld3NsZXR0ZXInLFxuICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogJ0Vycm9yIScsXG4gICAgICAgICAgbWVzc2FnZTogJ1NvbWV0aGluZyB3ZW50IHdyb25nJyxcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBzZXRFbWFpbCgnJyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXdzbGV0dGVyfT5cbiAgICAgIDxoMj5TaWduIHVwIHRvIHN0YXkgdXBkYXRlZCE8L2gyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3JlZ2lzdHJhdGlvbkhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiWW91ciBlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzbGV0dGVyUmVnaXN0cmF0aW9uO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJjbGFzc2VzIiwiTmV3c2xldHRlclJlZ2lzdHJhdGlvbiIsImVtYWlsIiwic2V0RW1haWwiLCJzaG93Tm90aWZpY2F0aW9uIiwiaGlkZU5vdGlmaWNhdGlvbiIsInJlZ2lzdHJhdGlvbkhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJtZXNzYWdlIiwic3RhdHVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwiY2F0Y2giLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibmV3c2xldHRlciIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY29udHJvbCIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input/newsletter-registration.js\n"));

/***/ })

});