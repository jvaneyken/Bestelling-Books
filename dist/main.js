/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// https://api.nytimes.com/svc/books/v3/reviews.json\n\nconst apiURL = \"https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=73W0ByfNVTxMkbhcn7rMWYUVQGPDej9z\";\nlet list = [];\nlet searchInput = document.querySelector(\"#search-input\");\nasync function fetchData() {\n  console.log(searchInput.value);\n  let response = await fetch(apiURL + `&bestsellers-date=${searchInput.value}-01-01`);\n  if (response.ok) {\n    let body = await response.json();\n    list = body.results;\n  } else {\n    console.log(\"something went wrong\");\n  }\n}\nfunction createList() {\n  list.forEach(result => {\n    let listItem = document.createElement(\"li\");\n    listItem.innerHTML = result.book_details[0].title;\n    document.querySelector(\"main\").appendChild(listItem);\n  });\n}\nlet searchButton = document.getElementById(\"search-button\");\nsearchButton.addEventListener('click', async e => {\n  e.preventDefault();\n  await fetchData();\n  createList();\n});\n\n// window.fetchData = fetchData;\n// window.createList = createList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJhcGlVUkwiLCJsaXN0Iiwic2VhcmNoSW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmZXRjaERhdGEiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJib2R5IiwianNvbiIsInJlc3VsdHMiLCJjcmVhdGVMaXN0IiwiZm9yRWFjaCIsInJlc3VsdCIsImxpc3RJdGVtIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImJvb2tfZGV0YWlscyIsInRpdGxlIiwiYXBwZW5kQ2hpbGQiLCJzZWFyY2hCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvcmV2aWV3cy5qc29uXG5cbmNvbnN0IGFwaVVSTCA9IFwiaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzL2xpc3RzLmpzb24/bGlzdD1oYXJkY292ZXItZmljdGlvbiZhcGkta2V5PTczVzBCeWZOVlR4TWtiaGNuN3JNV1lVVlFHUERlajl6XCI7XG5cbmxldCBsaXN0ID0gW107XG5cbmxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVVJMICsgYCZiZXN0c2VsbGVycy1kYXRlPSR7c2VhcmNoSW5wdXQudmFsdWV9LTAxLTAxYCk7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGxldCBib2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBsaXN0ID0gYm9keS5yZXN1bHRzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiKVxuICAgICAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoKSB7XG4gICAgbGlzdC5mb3JFYWNoKHJlc3VsdCA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gcmVzdWx0LmJvb2tfZGV0YWlsc1swXS50aXRsZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pXG59XG5cbmxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idXR0b25cIik7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXdhaXQgZmV0Y2hEYXRhKCk7XG4gICAgY3JlYXRlTGlzdCgpO1xufSlcblxuLy8gd2luZG93LmZldGNoRGF0YSA9IGZldGNoRGF0YTtcbi8vIHdpbmRvdy5jcmVhdGVMaXN0ID0gY3JlYXRlTGlzdDsiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxpSEFBaUg7QUFFaEksSUFBSUMsSUFBSSxHQUFHLEVBQUU7QUFFYixJQUFJQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUV6RCxlQUFlQyxTQUFTQSxDQUFBLEVBQUc7RUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxXQUFXLENBQUNNLEtBQUssQ0FBQztFQUM5QixJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDVixNQUFNLEdBQUkscUJBQW9CRSxXQUFXLENBQUNNLEtBQU0sUUFBTyxDQUFDO0VBQ25GLElBQUlDLFFBQVEsQ0FBQ0UsRUFBRSxFQUFFO0lBQ2IsSUFBSUMsSUFBSSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO0lBQ2hDWixJQUFJLEdBQUdXLElBQUksQ0FBQ0UsT0FBTztFQUN2QixDQUFDLE1BQ0k7SUFDRFIsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7RUFDbkM7QUFDUjtBQUVBLFNBQVNRLFVBQVVBLENBQUEsRUFBRztFQUNsQmQsSUFBSSxDQUFDZSxPQUFPLENBQUNDLE1BQU0sSUFBSTtJQUNuQixJQUFJQyxRQUFRLEdBQUdmLFFBQVEsQ0FBQ2dCLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDM0NELFFBQVEsQ0FBQ0UsU0FBUyxHQUFHSCxNQUFNLENBQUNJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSztJQUNqRG5CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDbUIsV0FBVyxDQUFDTCxRQUFRLENBQUM7RUFDeEQsQ0FBQyxDQUFDO0FBQ047QUFFQSxJQUFJTSxZQUFZLEdBQUdyQixRQUFRLENBQUNzQixjQUFjLENBQUMsZUFBZSxDQUFDO0FBQzNERCxZQUFZLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNQyxDQUFDLElBQUk7RUFDOUNBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0VBQ2xCLE1BQU12QixTQUFTLEVBQUU7RUFDakJVLFVBQVUsRUFBRTtBQUNoQixDQUFDLENBQUM7O0FBRUY7QUFDQSJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;