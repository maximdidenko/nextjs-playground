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
exports.id = "pages/api/comments/[eventId]";
exports.ids = ["pages/api/comments/[eventId]"];
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

/***/ "(api)/./pages/api/comments/[eventId].js":
/*!*****************************************!*\
  !*** ./pages/api/comments/[eventId].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/db */ \"(api)/./helpers/db.js\");\n\nasync function handler(req, res) {\n    let client;\n    try {\n        client = await (0,_helpers_db__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\n    } catch (err) {\n        res.status(500).json({\n            message: \"Unable to connect to DB\"\n        });\n        return;\n    }\n    if (req.method === \"POST\") {\n        const { email , name , text  } = req.body;\n        const { eventId  } = req.query;\n        let response;\n        try {\n            response = await (0,_helpers_db__WEBPACK_IMPORTED_MODULE_0__.insertDocument)(client, \"comments\", {\n                email,\n                name,\n                text,\n                eventId\n            });\n            res.status(201).json({\n                id: response.insertedId,\n                email,\n                name,\n                text\n            });\n        } catch (err1) {\n            res.status(500).json({\n                message: \"Unbale to insert document\"\n            });\n        }\n    } else if (req.method === \"GET\") {\n        let comments;\n        try {\n            comments = await (0,_helpers_db__WEBPACK_IMPORTED_MODULE_0__.getAll)(client, \"comments\", {\n                eventId: req.query.eventId\n            });\n            res.status(200).json({\n                comments\n            });\n        } catch (err2) {\n            res.status(500).json({\n                message: \"Unable to get data\"\n            });\n        }\n    }\n    client.close();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdFO0FBRXhFLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLElBQUlDO0lBRUosSUFBSTtRQUNGQSxTQUFTLE1BQU1OLHNEQUFTQTtJQUMxQixFQUFFLE9BQU9PLEtBQUs7UUFDWkYsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQTBCO1FBQzFEO0lBQ0Y7SUFFQSxJQUFJTixJQUFJTyxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUUsR0FBR1YsSUFBSVcsSUFBSTtRQUN0QyxNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHWixJQUFJYSxLQUFLO1FBQzdCLElBQUlDO1FBRUosSUFBSTtZQUNGQSxXQUFXLE1BQU1qQiwyREFBY0EsQ0FBQ0ssUUFBUSxZQUFZO2dCQUNsRE07Z0JBQ0FDO2dCQUNBQztnQkFDQUU7WUFDRjtZQUVBWCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFVSxJQUFJRCxTQUFTRSxVQUFVO2dCQUFFUjtnQkFBT0M7Z0JBQU1DO1lBQUs7UUFDcEUsRUFBRSxPQUFPUCxNQUFLO1lBQ1pGLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBNEI7UUFDOUQ7SUFDRixPQUFPLElBQUlOLElBQUlPLE1BQU0sS0FBSyxPQUFPO1FBQy9CLElBQUlVO1FBQ0osSUFBSTtZQUNGQSxXQUFXLE1BQU1uQixtREFBTUEsQ0FBQ0ksUUFBUSxZQUFZO2dCQUMxQ1UsU0FBU1osSUFBSWEsS0FBSyxDQUFDRCxPQUFPO1lBQzVCO1lBQ0FYLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVZO1lBQVM7UUFDbEMsRUFBRSxPQUFPZCxNQUFLO1lBQ1pGLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBcUI7UUFDdkQ7SUFDRixDQUFDO0lBQ0RKLE9BQU9nQixLQUFLO0FBQ2Q7QUFFQSxpRUFBZW5CLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2NvbW1lbnRzL1tldmVudElkXS5qcz84YjQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3REQiwgaW5zZXJ0RG9jdW1lbnQsIGdldEFsbCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZGInO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGxldCBjbGllbnQ7XG5cbiAgdHJ5IHtcbiAgICBjbGllbnQgPSBhd2FpdCBjb25uZWN0REIoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnVW5hYmxlIHRvIGNvbm5lY3QgdG8gREInIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBuYW1lLCB0ZXh0IH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB7IGV2ZW50SWQgfSA9IHJlcS5xdWVyeTtcbiAgICBsZXQgcmVzcG9uc2U7XG5cbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBpbnNlcnREb2N1bWVudChjbGllbnQsICdjb21tZW50cycsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRleHQsXG4gICAgICAgIGV2ZW50SWQsXG4gICAgICB9KTtcblxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBpZDogcmVzcG9uc2UuaW5zZXJ0ZWRJZCwgZW1haWwsIG5hbWUsIHRleHQgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdVbmJhbGUgdG8gaW5zZXJ0IGRvY3VtZW50JyB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICBsZXQgY29tbWVudHM7XG4gICAgdHJ5IHtcbiAgICAgIGNvbW1lbnRzID0gYXdhaXQgZ2V0QWxsKGNsaWVudCwgJ2NvbW1lbnRzJywge1xuICAgICAgICBldmVudElkOiByZXEucXVlcnkuZXZlbnRJZCxcbiAgICAgIH0pO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb21tZW50cyB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ1VuYWJsZSB0byBnZXQgZGF0YScgfSk7XG4gICAgfVxuICB9XG4gIGNsaWVudC5jbG9zZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsImluc2VydERvY3VtZW50IiwiZ2V0QWxsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsImVyciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibWV0aG9kIiwiZW1haWwiLCJuYW1lIiwidGV4dCIsImJvZHkiLCJldmVudElkIiwicXVlcnkiLCJyZXNwb25zZSIsImlkIiwiaW5zZXJ0ZWRJZCIsImNvbW1lbnRzIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/[eventId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/[eventId].js"));
module.exports = __webpack_exports__;

})();