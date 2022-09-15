(function(){
    
    var $app_define_wrap$ = $app_define_wrap$ || function() {}
    var manifestJson = {"package":"com.vonage.quickapp.test","name":"VonageTest","versionName":"1.0.0","versionCode":1,"icon":"/Common/logo.png","minPlatformVersion":1060,"features":[],"config":{},"router":{"entry":"Hello","pages":{"Hello":{"component":"hello"}}},"display":{"pages":{"Hello":{"titleBarText":"TitleBar"}}}}
    var createAppHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test/src!./node_modules/babel-loader/lib/index.js?cwd=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test&cacheDirectory&comments=false&configFile=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test/node_modules/@hap-toolkit/packager/babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test/src!./node_modules/babel-loader/lib/index.js?cwd=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test&cacheDirectory&comments=false&configFile=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test/node_modules/@hap-toolkit/packager/babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

module.exports = {
  onCreate() {
    console.info('Application onCreate');
  },

  onDestroy() {
    console.info('Application onDestroy');
  },

  dataApp: {
    localeData: {}
  }
};}

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"package":"com.vonage.quickapp.test","name":"VonageTest","versionName":"1.0.0","versionCode":1,"icon":"/Common/logo.png","minPlatformVersion":1060,"features":[],"config":{},"router":{"entry":"Hello","pages":{"Hello":{"component":"hello"}}},"display":{"pages":{"Hello":{"titleBarText":"TitleBar"}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

var $app_style$ = {}
var $app_script$ = __webpack_require__(/*! !../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test/src!../node_modules/babel-loader/lib/index.js?cwd=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test&cacheDirectory&comments=false&configFile=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test/node_modules/@hap-toolkit/packager/babel.config.js!../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test/src!./node_modules/babel-loader/lib/index.js?cwd=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test&cacheDirectory&comments=false&configFile=/Users/zacharypowell/.quickapp-ide/workspace/com.vonage.quickapp.test/node_modules/@hap-toolkit/packager/babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

$app_define$('@app-application/app', [], function ($app_require$, $app_exports$, $app_module$) {
  
  $app_script$($app_module$, $app_exports$, $app_require$)
  if ($app_exports$.__esModule && $app_exports$.default) {
    $app_module$.exports = $app_exports$.default
  }
  $app_module$.exports.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
  $app_module$.exports.style = { list: [ $app_style$ ] }
  
})
$app_bootstrap$('@app-application/app', { packagerVersion: "1.9.10" })

})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createAppHandler();
    }
    else {
      window.createAppHandler = createAppHandler
      // H5注入manifest以获取features
      global.manifest = manifestJson;
    }
  })();