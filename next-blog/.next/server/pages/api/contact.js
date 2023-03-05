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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email , name , message  } = req.body;\n        if (!email || !email.includes(\"@\") || !name || !message) {\n            res.status(422).json({\n                message: \"Invalid input data\"\n            });\n            return;\n        }\n        let client;\n        let result;\n        try {\n            client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://didenko:m2x1m__D@cluster0.4blmhz2.mongodb.net/?retryWrites=true&w=majority\");\n        } catch (err) {\n            res.status(500).json({\n                message: \"Unable to connect to DB\"\n            });\n            return;\n        }\n        const db = client.db();\n        try {\n            result = await db.collection(\"feedback\").insertOne({\n                email,\n                name,\n                message\n            });\n        } catch (error) {\n            res.status(500).json({\n                message: \"Unable to save data\"\n            });\n            return;\n        }\n        client.close();\n        res.status(201).json({\n            email,\n            name,\n            message,\n            id: result.insertedId\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFekMsSUFBSSxDQUFDSCxTQUFTLENBQUNBLE1BQU1JLFFBQVEsQ0FBQyxRQUFRLENBQUNILFFBQVEsQ0FBQ0MsU0FBUztZQUN2REosSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUosU0FBUztZQUFxQjtZQUNyRDtRQUNGLENBQUM7UUFFRCxJQUFJSztRQUNKLElBQUlDO1FBRUosSUFBSTtZQUNGRCxTQUFTLE1BQU1aLHdEQUFtQixDQUNoQztRQUVKLEVBQUUsT0FBT2UsS0FBSztZQUNaWixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFSixTQUFTO1lBQTBCO1lBQzFEO1FBQ0Y7UUFFQSxNQUFNUyxLQUFLSixPQUFPSSxFQUFFO1FBQ3BCLElBQUk7WUFDRkgsU0FBUyxNQUFNRyxHQUNaQyxVQUFVLENBQUMsWUFDWEMsU0FBUyxDQUFDO2dCQUFFYjtnQkFBT0M7Z0JBQU1DO1lBQVE7UUFDdEMsRUFBRSxPQUFPWSxPQUFPO1lBQ2RoQixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFSixTQUFTO1lBQXNCO1lBQ3REO1FBQ0Y7UUFFQUssT0FBT1EsS0FBSztRQUVaakIsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFTjtZQUFPQztZQUFNQztZQUFTYyxJQUFJUixPQUFPUyxVQUFVO1FBQUM7SUFDckUsQ0FBQztBQUNIO0FBRUEsaUVBQWVyQixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9jb250YWN0LmpzPzM0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgbmFtZSwgbWVzc2FnZSB9ID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoIWVtYWlsIHx8ICFlbWFpbC5pbmNsdWRlcygnQCcpIHx8ICFuYW1lIHx8ICFtZXNzYWdlKSB7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGlucHV0IGRhdGEnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjbGllbnQ7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIHRyeSB7XG4gICAgICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgICAnbW9uZ29kYitzcnY6Ly9kaWRlbmtvOm0yeDFtX19EQGNsdXN0ZXIwLjRibG1oejIubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdVbmFibGUgdG8gY29ubmVjdCB0byBEQicgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgZGJcbiAgICAgICAgLmNvbGxlY3Rpb24oJ2ZlZWRiYWNrJylcbiAgICAgICAgLmluc2VydE9uZSh7IGVtYWlsLCBuYW1lLCBtZXNzYWdlIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdVbmFibGUgdG8gc2F2ZSBkYXRhJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGllbnQuY2xvc2UoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZW1haWwsIG5hbWUsIG1lc3NhZ2UsIGlkOiByZXN1bHQuaW5zZXJ0ZWRJZCB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwibmFtZSIsIm1lc3NhZ2UiLCJib2R5IiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJqc29uIiwiY2xpZW50IiwicmVzdWx0IiwiY29ubmVjdCIsImVyciIsImRiIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImVycm9yIiwiY2xvc2UiLCJpZCIsImluc2VydGVkSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();