"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/contact/contact-form.js":
/*!********************************************!*\
  !*** ./components/contact/contact-form.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nasync function setContactData(contactDetails) {\n    const response = await fetch(\"/api/contact\", {\n        method: \"POST\",\n        body: JSON.stringify(contactDetails),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (!response.ok) {\n        throw new Error(\"Someting went wrong\");\n    }\n}\nfunction ContactForm() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let timeout;\n        if (requestStatus) {\n            timeout = setTimeout(()=>{\n                setRequestStatus(null);\n            }, 3000);\n        }\n        return ()=>{\n            clearTimeout(timeout);\n        };\n    }, [\n        requestStatus\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setRequestStatus(\"pending\");\n        try {\n            await setContactData({\n                email,\n                name,\n                message\n            });\n            setRequestStatus(\"success\");\n        } catch (err) {\n            setRequestStatus(\"error\");\n        }\n        setEmail(\"\");\n        setName(\"\");\n        setMessage(\"\");\n    };\n    let notification;\n    if (requestStatus === \"pending\") {\n        notification = {\n            title: \"Sending message ...\",\n            status: \"pending\",\n            messeage: \"We are sending tour message ...\"\n        };\n    }\n    if (requestStatus === \"success\") {\n        notification = {\n            title: \"Success\",\n            status: \"success\",\n            messeage: \"Your message was sent\"\n        };\n    }\n    if (requestStatus === \"error\") {\n        notification = {\n            title: \"Error\",\n            status: \"error\",\n            messeage: \"Something went wrong ...\"\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().contact),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"How can I help you?\"\n            }, void 0, false, {\n                fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().controls),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Your Email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        required: true,\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Your Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"name\",\n                                        required: true,\n                                        onChange: (e)=>setName(e.target.value),\n                                        value: name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                children: \"Your Message\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"message\",\n                                required: true,\n                                rows: \"5\",\n                                onChange: (e)=>setMessage(e.target.value),\n                                value: message\n                            }, void 0, false, {\n                                fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            notification && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_notification__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ...notification\n            }, void 0, false, {\n                fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n                lineNumber: 119,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Maxim_Didenko/Documents/Development/next/next-blog/components/contact/contact-form.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"gXLzMEL1icRQcKg8FzMxxUeJ7cg=\");\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pCLDhEQUFDUTtnQ0FDQ0wsSUFBRztnQ0FDSEMsUUFBUTtnQ0FDUkssTUFBSztnQ0FDTEgsVUFBVSxDQUFDdkIsSUFBTVAsV0FBV08sRUFBRXdCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDMUNBLE9BQU85Qjs7Ozs7Ozs7Ozs7O2tDQUdYLDhEQUFDcUI7d0JBQUlMLFdBQVdsQyx5RUFBZTtrQ0FDN0IsNEVBQUNzRDtzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHWHpCLDhCQUFnQiw4REFBQzVCLHdEQUFZQTtnQkFBRSxHQUFHNEIsWUFBWTs7Ozs7Ozs7Ozs7O0FBR3JEO0dBekdTaEI7S0FBQUE7QUEyR1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5qcz84NjJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vdWkvbm90aWZpY2F0aW9uJztcblxuYXN5bmMgZnVuY3Rpb24gc2V0Q29udGFjdERhdGEoY29udGFjdERldGFpbHMpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jb250YWN0Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhY3REZXRhaWxzKSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcignU29tZXRpbmcgd2VudCB3cm9uZycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0O1xuICAgIGlmIChyZXF1ZXN0U3RhdHVzKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMobnVsbCk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFtyZXF1ZXN0U3RhdHVzXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzZXRSZXF1ZXN0U3RhdHVzKCdwZW5kaW5nJyk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2V0Q29udGFjdERhdGEoeyBlbWFpbCwgbmFtZSwgbWVzc2FnZSB9KTtcbiAgICAgIHNldFJlcXVlc3RTdGF0dXMoJ3N1Y2Nlc3MnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldFJlcXVlc3RTdGF0dXMoJ2Vycm9yJyk7XG4gICAgfVxuXG4gICAgc2V0RW1haWwoJycpO1xuICAgIHNldE5hbWUoJycpO1xuICAgIHNldE1lc3NhZ2UoJycpO1xuICB9O1xuXG4gIGxldCBub3RpZmljYXRpb247XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgIG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHRpdGxlOiAnU2VuZGluZyBtZXNzYWdlIC4uLicsXG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICAgIG1lc3NlYWdlOiAnV2UgYXJlIHNlbmRpbmcgdG91ciBtZXNzYWdlIC4uLicsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICBub3RpZmljYXRpb24gPSB7XG4gICAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICBtZXNzZWFnZTogJ1lvdXIgbWVzc2FnZSB3YXMgc2VudCcsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgbm90aWZpY2F0aW9uID0ge1xuICAgICAgdGl0bGU6ICdFcnJvcicsXG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBtZXNzZWFnZTogJ1NvbWV0aGluZyB3ZW50IHdyb25nIC4uLicsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3R9PlxuICAgICAgPGgxPkhvdyBjYW4gSSBoZWxwIHlvdT88L2gxPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPllvdXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5Zb3VyIE1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICByb3dzPVwiNVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24+U2VuZCBNZXNzYWdlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAge25vdGlmaWNhdGlvbiAmJiA8Tm90aWZpY2F0aW9uIHsuLi5ub3RpZmljYXRpb259IC8+fVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjbGFzc2VzIiwiTm90aWZpY2F0aW9uIiwic2V0Q29udGFjdERhdGEiLCJjb250YWN0RGV0YWlscyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwiQ29udGFjdEZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwibmFtZSIsInNldE5hbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnIiLCJub3RpZmljYXRpb24iLCJ0aXRsZSIsInN0YXR1cyIsIm1lc3NlYWdlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImNvbnRhY3QiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNvbnRyb2xzIiwiY29udHJvbCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidGV4dGFyZWEiLCJyb3dzIiwiYWN0aW9ucyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n"));

/***/ })

});