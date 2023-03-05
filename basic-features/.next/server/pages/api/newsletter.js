"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/newsletter";
exports.ids = ["pages/api/newsletter"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./helpers/db.js":
/*!***********************!*\
  !*** ./helpers/db.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDB\": () => (/* binding */ connectDB),\n/* harmony export */   \"getAll\": () => (/* binding */ getAll),\n/* harmony export */   \"insertDocument\": () => (/* binding */ insertDocument)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDB() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://didenko:m2x1m__D@cluster0.4blmhz2.mongodb.net/?retryWrites=true&w=majority\");\n    return client;\n}\nasync function insertDocument(client, collection, document) {\n    const db = client.db();\n    const response = await db.collection(collection).insertOne(document);\n    return response;\n}\nasync function getAll(client, collection, filter = {}) {\n    const db = client.db();\n    const comments = await db.collection(collection).find(filter).toArray();\n    return comments;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBRS9CLGVBQWVDLFlBQVk7SUFDaEMsTUFBTUMsU0FBUyxNQUFNRix3REFBbUIsQ0FDdEM7SUFHRixPQUFPRTtBQUNULENBQUM7QUFFTSxlQUFlRSxlQUFlRixNQUFNLEVBQUVHLFVBQVUsRUFBRUMsUUFBUSxFQUFFO0lBQ2pFLE1BQU1DLEtBQUtMLE9BQU9LLEVBQUU7SUFDcEIsTUFBTUMsV0FBVyxNQUFNRCxHQUFHRixVQUFVLENBQUNBLFlBQVlJLFNBQVMsQ0FBQ0g7SUFFM0QsT0FBT0U7QUFDVCxDQUFDO0FBRU0sZUFBZUUsT0FBT1IsTUFBTSxFQUFFRyxVQUFVLEVBQUVNLFNBQVMsQ0FBQyxDQUFDLEVBQUU7SUFDNUQsTUFBTUosS0FBS0wsT0FBT0ssRUFBRTtJQUNwQixNQUFNSyxXQUFXLE1BQU1MLEdBQUdGLFVBQVUsQ0FBQ0EsWUFBWVEsSUFBSSxDQUFDRixRQUFRRyxPQUFPO0lBRXJFLE9BQU9GO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9oZWxwZXJzL2RiLmpzP2YyMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAnbW9uZ29kYitzcnY6Ly9kaWRlbmtvOm0yeDFtX19EQGNsdXN0ZXIwLjRibG1oejIubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbiAgKTtcblxuICByZXR1cm4gY2xpZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0RG9jdW1lbnQoY2xpZW50LCBjb2xsZWN0aW9uLCBkb2N1bWVudCkge1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuaW5zZXJ0T25lKGRvY3VtZW50KTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGwoY2xpZW50LCBjb2xsZWN0aW9uLCBmaWx0ZXIgPSB7fSkge1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuZmluZChmaWx0ZXIpLnRvQXJyYXkoKTtcblxuICByZXR1cm4gY29tbWVudHM7XG59XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjb25uZWN0REIiLCJjbGllbnQiLCJjb25uZWN0IiwiaW5zZXJ0RG9jdW1lbnQiLCJjb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJkYiIsInJlc3BvbnNlIiwiaW5zZXJ0T25lIiwiZ2V0QWxsIiwiZmlsdGVyIiwiY29tbWVudHMiLCJmaW5kIiwidG9BcnJheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./helpers/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/newsletter.js":
/*!*********************************!*\
  !*** ./pages/api/newsletter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/db */ \"(api)/./helpers/db.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email  } = req.body;\n        if (!email || !email.includes(\"@\")) {\n            res.status(422).json({\n                message: \"Invalid use input\"\n            });\n        }\n        let client;\n        try {\n            client = await (0,_helpers_db__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\n        } catch (err) {\n            res.status(500).json({\n                message: \"Connecting to the DB failed\"\n            });\n            return;\n        }\n        try {\n            await (0,_helpers_db__WEBPACK_IMPORTED_MODULE_0__.insertDocument)(client, \"emails\", {\n                email\n            });\n            res.status(201).json({\n                email\n            });\n        } catch (err1) {\n            res.status(500).json({\n                message: \"Unable to insert document\"\n            });\n        }\n        client.close();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2RDtBQUU3RCxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHSCxJQUFJSSxJQUFJO1FBRTFCLElBQUksQ0FBQ0QsU0FBUyxDQUFDQSxNQUFNRSxRQUFRLENBQUMsTUFBTTtZQUNsQ0osSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFvQjtRQUN0RCxDQUFDO1FBRUQsSUFBSUM7UUFFSixJQUFJO1lBQ0ZBLFNBQVMsTUFBTVosc0RBQVNBO1FBQzFCLEVBQUUsT0FBT2EsS0FBSztZQUNaVCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQThCO1lBQzlEO1FBQ0Y7UUFFQSxJQUFJO1lBQ0YsTUFBTVYsMkRBQWNBLENBQUNXLFFBQVEsVUFBVTtnQkFBRU47WUFBTTtZQUMvQ0YsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUo7WUFBTTtRQUMvQixFQUFFLE9BQU9PLE1BQUs7WUFDWlQsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUE0QjtRQUM5RDtRQUVBQyxPQUFPRSxLQUFLO0lBQ2QsQ0FBQztBQUNIO0FBRUEsaUVBQWVaLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ld3NsZXR0ZXIuanM/MTBhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0REIsIGluc2VydERvY3VtZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9kYic7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCFlbWFpbCB8fCAhZW1haWwuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCB1c2UgaW5wdXQnIH0pO1xuICAgIH1cblxuICAgIGxldCBjbGllbnQ7XG5cbiAgICB0cnkge1xuICAgICAgY2xpZW50ID0gYXdhaXQgY29ubmVjdERCKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdDb25uZWN0aW5nIHRvIHRoZSBEQiBmYWlsZWQnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBpbnNlcnREb2N1bWVudChjbGllbnQsICdlbWFpbHMnLCB7IGVtYWlsIH0pO1xuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBlbWFpbCB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ1VuYWJsZSB0byBpbnNlcnQgZG9jdW1lbnQnIH0pO1xuICAgIH1cblxuICAgIGNsaWVudC5jbG9zZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiaW5zZXJ0RG9jdW1lbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJib2R5IiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNsaWVudCIsImVyciIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/newsletter.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newsletter.js"));
module.exports = __webpack_exports__;

})();