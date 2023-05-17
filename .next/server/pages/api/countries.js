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
exports.id = "pages/api/countries";
exports.ids = ["pages/api/countries"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/countries.js":
/*!********************************!*\
  !*** ./pages/api/countries.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const options = {\n        method: \"POST\",\n        url: \"https://geodb-cities-graphql.p.rapidapi.com/\",\n        headers: {\n            \"content-type\": \"application/json\",\n            \"x-rapidapi-host\": \"geodb-cities-graphql.p.rapidapi.com\",\n            \"x-rapidapi-key\": \"0cd956ef0emshcded0259da7bed5p11acc5jsnb89a9b1e278b\"\n        },\n        data: {\n            query: `query getCountry($prefix: String!){\n        countries(namePrefix: $prefix) {\n          edges {\n            node {\n              name\n              capital\n              flagImageUri\n              currencyCodes\n            }\n          }\n        }\n      }`,\n            variables: {\n                prefix: req.query.countryName\n            }\n        }\n    };\n    axios__WEBPACK_IMPORTED_MODULE_0___default().request(options).then(function(response) {\n        res.status(200).json(response.data);\n    }).catch(function(error) {\n        console.error(error);\n        res.status(response.status);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY291bnRyaWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUVWLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO1FBQ2ZDLE1BQU0sRUFBRSxDQUFNO1FBQ2RDLEdBQUcsRUFBRSxDQUE4QztRQUNuREMsT0FBTyxFQUFFLENBQUM7WUFDUixDQUFjLGVBQUUsQ0FBa0I7WUFDbEMsQ0FBaUIsa0JBQUUsQ0FBcUM7WUFDeEQsQ0FBZ0IsaUJBQUVDLG9EQUFvQztRQUN4RCxDQUFDO1FBQ0RHLElBQUksRUFBRSxDQUFDO1lBQ0xDLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7T0FXUDtZQUNEQyxTQUFTLEVBQUUsQ0FBQztnQkFDVkMsTUFBTSxFQUFFWixHQUFHLENBQUNVLEtBQUssQ0FBQ0csV0FBVztZQUMvQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRGYsb0RBQ1UsQ0FBQ0ksT0FBTyxFQUNmYSxJQUFJLENBQUMsUUFBUSxDQUFFQyxRQUFRLEVBQUUsQ0FBQztRQUN6QmYsR0FBRyxDQUFDZ0IsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDRixRQUFRLENBQUNQLElBQUk7SUFDcEMsQ0FBQyxFQUNBVSxLQUFLLENBQUMsUUFBUSxDQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUN2QkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUs7UUFDbkJuQixHQUFHLENBQUNnQixNQUFNLENBQUNELFFBQVEsQ0FBQ0MsTUFBTTtJQUM1QixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9jb3VudHJpZXMuanM/YTdmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIHVybDogXCJodHRwczovL2dlb2RiLWNpdGllcy1ncmFwaHFsLnAucmFwaWRhcGkuY29tL1wiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJnZW9kYi1jaXRpZXMtZ3JhcGhxbC5wLnJhcGlkYXBpLmNvbVwiLFxuICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SQVBJREFQSV9LRVksXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICBxdWVyeTogYHF1ZXJ5IGdldENvdW50cnkoJHByZWZpeDogU3RyaW5nISl7XG4gICAgICAgIGNvdW50cmllcyhuYW1lUHJlZml4OiAkcHJlZml4KSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgY2FwaXRhbFxuICAgICAgICAgICAgICBmbGFnSW1hZ2VVcmlcbiAgICAgICAgICAgICAgY3VycmVuY3lDb2Rlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfWAsXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgcHJlZml4OiByZXEucXVlcnkuY291bnRyeU5hbWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgYXhpb3NcbiAgICAucmVxdWVzdChvcHRpb25zKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJvcHRpb25zIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19SQVBJREFQSV9LRVkiLCJkYXRhIiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJwcmVmaXgiLCJjb3VudHJ5TmFtZSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/countries.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/countries.js"));
module.exports = __webpack_exports__;

})();