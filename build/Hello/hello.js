(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld&cacheDirectory&plugins[]=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld/babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/Hello/hello.ux?uxType=page":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld&cacheDirectory&plugins[]=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld/babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/Hello/hello.ux?uxType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _nexmoClient = _interopRequireDefault(__webpack_require__(/*! nexmo-client */ "./node_modules/nexmo-client/dist/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const vonageJWT = '';
let client;
let sessionApplication;
let currentCall;
module.exports = {
  data: {
    componentData: {}
  },

  onInit() {
    this.$page.setTitleBar({
      text: 'Vonage Voice Call',
      textColor: '#ffffff',
      backgroundColor: '#007DFF',
      backgroundOpacity: 0.5,
      menu: true
    });

    if (vonageJWT !== "") {
      client = new _nexmoClient.default({
        debug: true
      }).createSession(vonageJWT).then(app => {
        sessionApplication = app;
        sessionApplication.on("member:call", (member, call) => {
          currentCall = call;
        });
      });
    } else {
      _system.default.showToast({
        message: 'Error: Vonage JWT not set',
        duration: 2000,
        gravity: 'center'
      });
    }
  },

  makeCall() {
    console.info('Implement the call method here');
    sessionApplication.callServer("NUMBER_TO_CALL");
  },

  endCall() {
    console.info('Implement the end call method here');
    currentCall.hangUp();
  }

};
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/Hello/hello.ux?uxType=page":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/Hello/hello.ux?uxType=page ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".page-container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "80px",
    "fontWeight": "bold",
    "color": "#871fff",
    "textAlign": "center"
  },
  ".subtitle": {
    "fontSize": "40px",
    "textAlign": "center"
  },
  ".btn": {
    "width": "550px",
    "height": "86px",
    "marginTop": "75px",
    "borderRadius": "43px",
    "backgroundColor": "#871fff",
    "fontSize": "30px",
    "color": "#ffffff"
  },
  ".phone": {
    "width": "550px",
    "height": "86px",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "marginTop": "75px",
    "backgroundColor": "#d1d1d1",
    "fontSize": "30px"
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/Hello/hello.ux?uxType=page&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/Hello/hello.ux?uxType=page& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page-container"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": "Hello World!!"
      },
      "classList": [
        "title"
      ]
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "Call",
        "id": "call"
      },
      "classList": [
        "btn"
      ],
      "id": "call",
      "events": {
        "click": "makeCall"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "Hang Up",
        "id": "hangup"
      },
      "classList": [
        "btn"
      ],
      "id": "hangup",
      "events": {
        "click": "endCall"
      }
    },
    {
      "type": "div",
      "attr": {
        "id": "status"
      },
      "id": "status"
    }
  ]
}

/***/ }),

/***/ "./node_modules/@bugsnag/browser/dist/bugsnag.js":
/*!*******************************************************!*\
  !*** ./node_modules/@bugsnag/browser/dist/bugsnag.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


(function (f) {
  if (true) {
    module.exports = f();
  } else { var g; }
})(function () {
  var define, module, exports; // minimal implementations of useful ES functionality
  // all we really need for arrays is reduce – everything else is just sugar!
  // Array#reduce

  var reduce = function (arr, fn, accum) {
    var val = accum;

    for (var i = 0, len = arr.length; i < len; i++) {
      val = fn(val, arr[i], i, arr);
    }

    return val;
  }; // Array#filter


  var filter = function (arr, fn) {
    return reduce(arr, function (accum, item, i, arr) {
      return !fn(item, i, arr) ? accum : accum.concat(item);
    }, []);
  }; // Array#map


  var map = function (arr, fn) {
    return reduce(arr, function (accum, item, i, arr) {
      return accum.concat(fn(item, i, arr));
    }, []);
  }; // Array#includes


  var includes = function (arr, x) {
    return reduce(arr, function (accum, item, i, arr) {
      return accum === true || item === x;
    }, false);
  };

  var _hasDontEnumBug = !{
    toString: null
  }.propertyIsEnumerable('toString');

  var _dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor']; // Object#keys

  var keys = function (obj) {
    // stripped down version of
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Keys
    var result = [];
    var prop;

    for (prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) result.push(prop);
    }

    if (!_hasDontEnumBug) return result;

    for (var i = 0, len = _dontEnums.length; i < len; i++) {
      if (Object.prototype.hasOwnProperty.call(obj, _dontEnums[i])) result.push(_dontEnums[i]);
    }

    return result;
  }; // Array#isArray


  var isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var _pad = function (n) {
    return n < 10 ? "0" + n : n;
  }; // Date#toISOString


  var isoDate = function () {
    // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
    var d = new Date();
    return d.getUTCFullYear() + '-' + _pad(d.getUTCMonth() + 1) + '-' + _pad(d.getUTCDate()) + 'T' + _pad(d.getUTCHours()) + ':' + _pad(d.getUTCMinutes()) + ':' + _pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
  };

  var _$esUtils_8 = {
    map: map,
    reduce: reduce,
    filter: filter,
    includes: includes,
    keys: keys,
    isArray: isArray,
    isoDate: isoDate
  };
  var _$validators_15 = {};

  _$validators_15.intRange = function (min, max) {
    if (min === void 0) {
      min = 1;
    }

    if (max === void 0) {
      max = Infinity;
    }

    return function (value) {
      return typeof value === 'number' && parseInt('' + value, 10) === value && value >= min && value <= max;
    };
  };

  _$validators_15.stringWithLength = function (value) {
    return typeof value === 'string' && !!value.length;
  };

  var _$config_5 = {};
  var __filter_5 = _$esUtils_8.filter,
      __reduce_5 = _$esUtils_8.reduce,
      __keys_5 = _$esUtils_8.keys,
      __isArray_5 = _$esUtils_8.isArray,
      __includes_5 = _$esUtils_8.includes;
  var intRange = _$validators_15.intRange,
      stringWithLength = _$validators_15.stringWithLength;
  _$config_5.schema = {
    apiKey: {
      defaultValue: function () {
        return null;
      },
      message: 'is required',
      validate: stringWithLength
    },
    appVersion: {
      defaultValue: function () {
        return null;
      },
      message: 'should be a string',
      validate: function (value) {
        return value === null || stringWithLength(value);
      }
    },
    appType: {
      defaultValue: function () {
        return null;
      },
      message: 'should be a string',
      validate: function (value) {
        return value === null || stringWithLength(value);
      }
    },
    autoNotify: {
      defaultValue: function () {
        return true;
      },
      message: 'should be true|false',
      validate: function (value) {
        return value === true || value === false;
      }
    },
    beforeSend: {
      defaultValue: function () {
        return [];
      },
      message: 'should be a function or array of functions',
      validate: function (value) {
        return typeof value === 'function' || __isArray_5(value) && __filter_5(value, function (f) {
          return typeof f === 'function';
        }).length === value.length;
      }
    },
    endpoints: {
      defaultValue: function () {
        return {
          notify: 'https://notify.bugsnag.com',
          sessions: 'https://sessions.bugsnag.com'
        };
      },
      message: 'should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false',
      validate: function (val, obj) {
        return (// first, ensure it's an object
          val && typeof val === 'object' && // endpoints.notify must always be set
          stringWithLength(val.notify) && ( // endpoints.sessions must be set unless session tracking is explicitly off
          obj.autoCaptureSessions === false || stringWithLength(val.sessions)) && // ensure no keys other than notify/session are set on endpoints object
          __filter_5(__keys_5(val), function (k) {
            return !__includes_5(['notify', 'sessions'], k);
          }).length === 0
        );
      }
    },
    autoCaptureSessions: {
      defaultValue: function (val, opts) {
        return opts.endpoints === undefined || !!opts.endpoints && !!opts.endpoints.sessions;
      },
      message: 'should be true|false',
      validate: function (val) {
        return val === true || val === false;
      }
    },
    notifyReleaseStages: {
      defaultValue: function () {
        return null;
      },
      message: 'should be an array of strings',
      validate: function (value) {
        return value === null || __isArray_5(value) && __filter_5(value, function (f) {
          return typeof f === 'string';
        }).length === value.length;
      }
    },
    releaseStage: {
      defaultValue: function () {
        return 'production';
      },
      message: 'should be a string',
      validate: function (value) {
        return typeof value === 'string' && value.length;
      }
    },
    maxBreadcrumbs: {
      defaultValue: function () {
        return 20;
      },
      message: 'should be a number ≤40',
      validate: function (value) {
        return intRange(0, 40)(value);
      }
    },
    autoBreadcrumbs: {
      defaultValue: function () {
        return true;
      },
      message: 'should be true|false',
      validate: function (value) {
        return typeof value === 'boolean';
      }
    },
    user: {
      defaultValue: function () {
        return null;
      },
      message: '(object) user should be an object',
      validate: function (value) {
        return typeof value === 'object';
      }
    },
    metaData: {
      defaultValue: function () {
        return null;
      },
      message: 'should be an object',
      validate: function (value) {
        return typeof value === 'object';
      }
    },
    logger: {
      defaultValue: function () {
        return undefined;
      },
      message: 'should be null or an object with methods { debug, info, warn, error }',
      validate: function (value) {
        return !value || value && __reduce_5(['debug', 'info', 'warn', 'error'], function (accum, method) {
          return accum && typeof value[method] === 'function';
        }, true);
      }
    },
    filters: {
      defaultValue: function () {
        return ['password'];
      },
      message: 'should be an array of strings|regexes',
      validate: function (value) {
        return __isArray_5(value) && value.length === __filter_5(value, function (s) {
          return typeof s === 'string' || s && typeof s.test === 'function';
        }).length;
      }
    }
  };

  _$config_5.mergeDefaults = function (opts, schema) {
    if (!opts || !schema) throw new Error('opts and schema objects are required');
    return __reduce_5(__keys_5(schema), function (accum, key) {
      accum[key] = opts[key] !== undefined ? opts[key] : schema[key].defaultValue(opts[key], opts);
      return accum;
    }, {});
  };

  _$config_5.validate = function (opts, schema) {
    if (!opts || !schema) throw new Error('opts and schema objects are required');

    var errors = __reduce_5(__keys_5(schema), function (accum, key) {
      if (schema[key].validate(opts[key], opts)) return accum;
      return accum.concat({
        key: key,
        message: schema[key].message,
        value: opts[key]
      });
    }, []);

    return {
      valid: !errors.length,
      errors: errors
    };
  };

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var schema = _$config_5.schema;
  var __map_1 = _$esUtils_8.map;
  var __stringWithLength_1 = _$validators_15.stringWithLength;
  var _$config_1 = {
    releaseStage: {
      defaultValue: function () {
        if (/^localhost(:\d+)?$/.test(window.location.host)) return 'development';
        return 'production';
      },
      message: 'should be set',
      validate: __stringWithLength_1
    },
    logger: _extends({}, schema.logger, {
      defaultValue: function () {
        return (// set logger based on browser capability
          typeof console !== 'undefined' && typeof console.debug === 'function' ? getPrefixedConsole() : undefined
        );
      }
    })
  };

  var getPrefixedConsole = function () {
    var logger = {};
    var consoleLog = console['log'];

    __map_1(['debug', 'info', 'warn', 'error'], function (method) {
      var consoleMethod = console[method];
      logger[method] = typeof consoleMethod === 'function' ? consoleMethod.bind(console, '[bugsnag]') : consoleLog.bind(console, '[bugsnag]');
    });

    return logger;
  };

  var __isoDate_3 = _$esUtils_8.isoDate;

  var BugsnagBreadcrumb = /*#__PURE__*/function () {
    function BugsnagBreadcrumb(name, metaData, type, timestamp) {
      if (name === void 0) {
        name = '[anonymous]';
      }

      if (metaData === void 0) {
        metaData = {};
      }

      if (type === void 0) {
        type = 'manual';
      }

      if (timestamp === void 0) {
        timestamp = __isoDate_3();
      }

      this.type = type;
      this.name = name;
      this.metaData = metaData;
      this.timestamp = timestamp;
    }

    var _proto = BugsnagBreadcrumb.prototype;

    _proto.toJSON = function toJSON() {
      return {
        type: this.type,
        name: this.name,
        timestamp: this.timestamp,
        metaData: this.metaData
      };
    };

    return BugsnagBreadcrumb;
  }();

  var _$BugsnagBreadcrumb_3 = BugsnagBreadcrumb; // This is a heavily modified/simplified version of
  //   https://github.com/othiym23/async-some
  //
  // We can't use that because:
  //   a) it inflates the bundle size to over 10kB
  //   b) it depends on a module that uses Object.keys()
  //      (which we can't use due to ie8 support)
  // run the asynchronous test function (fn) over each item in the array (arr)
  // in series until:
  //   - fn(item, cb) => calls cb(null, true)
  //   - or the end of the array is reached
  // the callback (cb) will be passed true if any of the items resulted in a true
  // callback, otherwise false

  var _$asyncSome_6 = function (arr, fn, cb) {
    var length = arr.length;
    var index = 0;

    var next = function () {
      if (index >= length) return cb(null, false);
      fn(arr[index], function (err, result) {
        if (err) return cb(err, false);
        if (result === true) return cb(null, true);
        index++;
        next();
      });
    };

    next();
  };

  var _$inferReleaseStage_10 = function (client) {
    return client.app && typeof client.app.releaseStage === 'string' ? client.app.releaseStage : client.config.releaseStage;
  };
  /**
   * Expose `isError`.
   */


  var _$isError_21 = isError;
  /**
   * Test whether `value` is error object.
   *
   * @param {*} value
   * @returns {boolean}
   */

  function isError(value) {
    switch (Object.prototype.toString.call(value)) {
      case '[object Error]':
        return true;

      case '[object Exception]':
        return true;

      case '[object DOMException]':
        return true;

      default:
        return value instanceof Error;
    }
  }

  var _$iserror_11 = _$isError_21;

  var _$runBeforeSend_14 = function (report, onError) {
    return function (fn, cb) {
      if (typeof fn !== 'function') return cb(null, false);

      try {
        // if function appears sync…
        if (fn.length !== 2) {
          var ret = fn(report); // check if it returned a "thenable" (promise)

          if (ret && typeof ret.then === 'function') {
            return ret.then( // resolve
            function (val) {
              return setTimeout(function () {
                return cb(null, shouldPreventSend(report, val));
              }, 0);
            }, // reject
            function (err) {
              setTimeout(function () {
                onError(err);
                return cb(null, false);
              });
            });
          }

          return cb(null, shouldPreventSend(report, ret));
        } // if function is async…


        fn(report, function (err, result) {
          if (err) {
            onError(err);
            return cb(null, false);
          }

          cb(null, shouldPreventSend(report, result));
        });
      } catch (e) {
        onError(e);
        cb(null, false);
      }
    };
  };

  var shouldPreventSend = function (report, value) {
    return report.isIgnored() || value === false;
  };

  var _$stackframe_23 = {};

  (function (root, factory) {
    'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */

    if (typeof define === 'function' && define.amd) {
      define('stackframe', [], factory);
    } else if (typeof _$stackframe_23 === 'object') {
      _$stackframe_23 = factory();
    } else {
      root.StackFrame = factory();
    }
  })(this, function () {
    'use strict';

    function _isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function _capitalize(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    }

    function _getter(p) {
      return function () {
        return this[p];
      };
    }

    var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
    var numericProps = ['columnNumber', 'lineNumber'];
    var stringProps = ['fileName', 'functionName', 'source'];
    var arrayProps = ['args'];
    var props = booleanProps.concat(numericProps, stringProps, arrayProps);

    function StackFrame(obj) {
      if (obj instanceof Object) {
        for (var i = 0; i < props.length; i++) {
          if (obj.hasOwnProperty(props[i]) && obj[props[i]] !== undefined) {
            this['set' + _capitalize(props[i])](obj[props[i]]);
          }
        }
      }
    }

    StackFrame.prototype = {
      getArgs: function () {
        return this.args;
      },
      setArgs: function (v) {
        if (Object.prototype.toString.call(v) !== '[object Array]') {
          throw new TypeError('Args must be an Array');
        }

        this.args = v;
      },
      getEvalOrigin: function () {
        return this.evalOrigin;
      },
      setEvalOrigin: function (v) {
        if (v instanceof StackFrame) {
          this.evalOrigin = v;
        } else if (v instanceof Object) {
          this.evalOrigin = new StackFrame(v);
        } else {
          throw new TypeError('Eval Origin must be an Object or StackFrame');
        }
      },
      toString: function () {
        var functionName = this.getFunctionName() || '{anonymous}';
        var args = '(' + (this.getArgs() || []).join(',') + ')';
        var fileName = this.getFileName() ? '@' + this.getFileName() : '';
        var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
        var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
        return functionName + args + fileName + lineNumber + columnNumber;
      }
    };

    for (var i = 0; i < booleanProps.length; i++) {
      StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);

      StackFrame.prototype['set' + _capitalize(booleanProps[i])] = function (p) {
        return function (v) {
          this[p] = Boolean(v);
        };
      }(booleanProps[i]);
    }

    for (var j = 0; j < numericProps.length; j++) {
      StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);

      StackFrame.prototype['set' + _capitalize(numericProps[j])] = function (p) {
        return function (v) {
          if (!_isNumber(v)) {
            throw new TypeError(p + ' must be a Number');
          }

          this[p] = Number(v);
        };
      }(numericProps[j]);
    }

    for (var k = 0; k < stringProps.length; k++) {
      StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);

      StackFrame.prototype['set' + _capitalize(stringProps[k])] = function (p) {
        return function (v) {
          this[p] = String(v);
        };
      }(stringProps[k]);
    }

    return StackFrame;
  });

  var _$errorStackParser_20 = {};

  (function (root, factory) {
    'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */

    if (typeof define === 'function' && define.amd) {
      define('error-stack-parser', ['stackframe'], factory);
    } else if (typeof _$errorStackParser_20 === 'object') {
      _$errorStackParser_20 = factory(_$stackframe_23);
    } else {
      root.ErrorStackParser = factory(root.StackFrame);
    }
  })(this, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
    return {
      /**
       * Given an Error object, extract the most information from it.
       *
       * @param {Error} error object
       * @return {Array} of StackFrames
       */
      parse: function ErrorStackParser$$parse(error) {
        if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
          return this.parseOpera(error);
        } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
          return this.parseV8OrIE(error);
        } else if (error.stack) {
          return this.parseFFOrSafari(error);
        } else {
          throw new Error('Cannot parse given Error object');
        }
      },
      // Separate line and column numbers from a string of the form: (URI:Line:Column)
      extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
        // Fail-fast but return locations like "(native)"
        if (urlLike.indexOf(':') === -1) {
          return [urlLike];
        }

        var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
        var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
        return [parts[1], parts[2] || undefined, parts[3] || undefined];
      },
      parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
        var filtered = error.stack.split('\n').filter(function (line) {
          return !!line.match(CHROME_IE_STACK_REGEXP);
        }, this);
        return filtered.map(function (line) {
          if (line.indexOf('(eval ') > -1) {
            // Throw away eval information until we implement stacktrace.js/stackframe#8
            line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
          }

          var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '('); // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
          // case it has spaces in it, as the string is split on \s+ later on

          var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/); // remove the parenthesized location from the line, if it was matched

          sanitizedLine = location ? sanitizedLine.replace(location[0], '') : sanitizedLine;
          var tokens = sanitizedLine.split(/\s+/).slice(1); // if a location was matched, pass it to extractLocation() otherwise pop the last token

          var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
          var functionName = tokens.join(' ') || undefined;
          var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
          return new StackFrame({
            functionName: functionName,
            fileName: fileName,
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }, this);
      },
      parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
        var filtered = error.stack.split('\n').filter(function (line) {
          return !line.match(SAFARI_NATIVE_CODE_REGEXP);
        }, this);
        return filtered.map(function (line) {
          // Throw away eval information until we implement stacktrace.js/stackframe#8
          if (line.indexOf(' > eval') > -1) {
            line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
          }

          if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
            // Safari eval frames only have function names and nothing else
            return new StackFrame({
              functionName: line
            });
          } else {
            var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
            var matches = line.match(functionNameRegex);
            var functionName = matches && matches[1] ? matches[1] : undefined;
            var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
            return new StackFrame({
              functionName: functionName,
              fileName: locationParts[0],
              lineNumber: locationParts[1],
              columnNumber: locationParts[2],
              source: line
            });
          }
        }, this);
      },
      parseOpera: function ErrorStackParser$$parseOpera(e) {
        if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
          return this.parseOpera9(e);
        } else if (!e.stack) {
          return this.parseOpera10(e);
        } else {
          return this.parseOpera11(e);
        }
      },
      parseOpera9: function ErrorStackParser$$parseOpera9(e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
        var lines = e.message.split('\n');
        var result = [];

        for (var i = 2, len = lines.length; i < len; i += 2) {
          var match = lineRE.exec(lines[i]);

          if (match) {
            result.push(new StackFrame({
              fileName: match[2],
              lineNumber: match[1],
              source: lines[i]
            }));
          }
        }

        return result;
      },
      parseOpera10: function ErrorStackParser$$parseOpera10(e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
        var lines = e.stacktrace.split('\n');
        var result = [];

        for (var i = 0, len = lines.length; i < len; i += 2) {
          var match = lineRE.exec(lines[i]);

          if (match) {
            result.push(new StackFrame({
              functionName: match[3] || undefined,
              fileName: match[2],
              lineNumber: match[1],
              source: lines[i]
            }));
          }
        }

        return result;
      },
      // Opera 10.65+ Error.stack very similar to FF/Safari
      parseOpera11: function ErrorStackParser$$parseOpera11(error) {
        var filtered = error.stack.split('\n').filter(function (line) {
          return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
        }, this);
        return filtered.map(function (line) {
          var tokens = line.split('@');
          var locationParts = this.extractLocation(tokens.pop());
          var functionCall = tokens.shift() || '';
          var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
          var argsRaw;

          if (functionCall.match(/\(([^\)]*)\)/)) {
            argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
          }

          var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
          return new StackFrame({
            functionName: functionName,
            args: args,
            fileName: locationParts[0],
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }, this);
      }
    };
  });

  var _$errorStackParser_7 = _$errorStackParser_20; // Given `err` which may be an error, does it have a stack property which is a string?

  var _$hasStack_9 = function (err) {
    return !!err && (!!err.stack || !!err.stacktrace || !!err['opera#sourceloc']) && typeof (err.stack || err.stacktrace || err['opera#sourceloc']) === 'string' && err.stack !== err.name + ": " + err.message;
  };

  var _$jsRuntime_12 =  true ? 'browserjs' : 0;

  var _$stackGenerator_22 = {};

  (function (root, factory) {
    'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */

    if (typeof define === 'function' && define.amd) {
      define('stack-generator', ['stackframe'], factory);
    } else if (typeof _$stackGenerator_22 === 'object') {
      _$stackGenerator_22 = factory(_$stackframe_23);
    } else {
      root.StackGenerator = factory(root.StackFrame);
    }
  })(this, function (StackFrame) {
    return {
      backtrace: function StackGenerator$$backtrace(opts) {
        var stack = [];
        var maxStackSize = 10;

        if (typeof opts === 'object' && typeof opts.maxStackSize === 'number') {
          maxStackSize = opts.maxStackSize;
        }

        var curr = arguments.callee;

        while (curr && stack.length < maxStackSize && curr['arguments']) {
          // Allow V8 optimizations
          var args = new Array(curr['arguments'].length);

          for (var i = 0; i < args.length; ++i) {
            args[i] = curr['arguments'][i];
          }

          if (/function(?:\s+([\w$]+))+\s*\(/.test(curr.toString())) {
            stack.push(new StackFrame({
              functionName: RegExp.$1 || undefined,
              args: args
            }));
          } else {
            stack.push(new StackFrame({
              args: args
            }));
          }

          try {
            curr = curr.caller;
          } catch (e) {
            break;
          }
        }

        return stack;
      }
    };
  });

  function ___extends_24() {
    ___extends_24 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return ___extends_24.apply(this, arguments);
  }
  /* removed: var _$errorStackParser_7 = require('./lib/error-stack-parser'); */


  ;
  /* removed: var _$stackGenerator_22 = require('stack-generator'); */

  ;
  /* removed: var _$hasStack_9 = require('./lib/has-stack'); */

  ;
  var __reduce_24 = _$esUtils_8.reduce,
      __filter_24 = _$esUtils_8.filter;
  /* removed: var _$jsRuntime_12 = require('./lib/js-runtime'); */

  ;

  var BugsnagReport = /*#__PURE__*/function () {
    function BugsnagReport(errorClass, errorMessage, stacktrace, handledState, originalError) {
      if (stacktrace === void 0) {
        stacktrace = [];
      }

      if (handledState === void 0) {
        handledState = defaultHandledState();
      } // duck-typing ftw >_<


      this.__isBugsnagReport = true;
      this._ignored = false; // private (un)handled state

      this._handledState = handledState; // setable props

      this.app = undefined;
      this.apiKey = undefined;
      this.breadcrumbs = [];
      this.context = undefined;
      this.device = undefined;
      this.errorClass = stringOrFallback(errorClass, '[no error class]');
      this.errorMessage = stringOrFallback(errorMessage, '[no error message]');
      this.groupingHash = undefined;
      this.metaData = {};
      this.request = undefined;
      this.severity = this._handledState.severity;
      this.stacktrace = __reduce_24(stacktrace, function (accum, frame) {
        var f = formatStackframe(frame); // don't include a stackframe if none of its properties are defined

        try {
          if (JSON.stringify(f) === '{}') return accum;
          return accum.concat(f);
        } catch (e) {
          return accum;
        }
      }, []);
      this.user = undefined;
      this.session = undefined;
      this.originalError = originalError; // Flags.
      // Note these are not initialised unless they are used
      // to save unnecessary bytes in the browser bundle

      /* this.attemptImmediateDelivery, default: true */
    }

    var _proto = BugsnagReport.prototype;

    _proto.ignore = function ignore() {
      this._ignored = true;
    };

    _proto.isIgnored = function isIgnored() {
      return this._ignored;
    };

    _proto.updateMetaData = function updateMetaData(section) {
      var _updates;

      if (!section) return this;
      var updates; // updateMetaData("section", null) -> removes section

      if ((arguments.length <= 1 ? undefined : arguments[1]) === null) return this.removeMetaData(section); // updateMetaData("section", "property", null) -> removes property from section

      if ((arguments.length <= 2 ? undefined : arguments[2]) === null) return this.removeMetaData(section, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]); // normalise the two supported input types into object form

      if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'object') updates = arguments.length <= 1 ? undefined : arguments[1];
      if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'string') updates = (_updates = {}, _updates[arguments.length <= 1 ? undefined : arguments[1]] = arguments.length <= 2 ? undefined : arguments[2], _updates); // exit if we don't have an updates object at this point

      if (!updates) return this; // ensure a section with this name exists

      if (!this.metaData[section]) this.metaData[section] = {}; // merge the updates with the existing section

      this.metaData[section] = ___extends_24({}, this.metaData[section], updates);
      return this;
    };

    _proto.removeMetaData = function removeMetaData(section, property) {
      if (typeof section !== 'string') return this; // remove an entire section

      if (!property) {
        delete this.metaData[section];
        return this;
      } // remove a single property from a section


      if (this.metaData[section]) {
        delete this.metaData[section][property];
        return this;
      }

      return this;
    };

    _proto.toJSON = function toJSON() {
      return {
        payloadVersion: '4',
        exceptions: [{
          errorClass: this.errorClass,
          message: this.errorMessage,
          stacktrace: this.stacktrace,
          type: _$jsRuntime_12
        }],
        severity: this.severity,
        unhandled: this._handledState.unhandled,
        severityReason: this._handledState.severityReason,
        app: this.app,
        device: this.device,
        breadcrumbs: this.breadcrumbs,
        context: this.context,
        user: this.user,
        metaData: this.metaData,
        groupingHash: this.groupingHash,
        request: this.request,
        session: this.session
      };
    };

    return BugsnagReport;
  }(); // takes a stacktrace.js style stackframe (https://github.com/stacktracejs/stackframe)
  // and returns a Bugsnag compatible stackframe (https://docs.bugsnag.com/api/error-reporting/#json-payload)


  var formatStackframe = function (frame) {
    var f = {
      file: frame.fileName,
      method: normaliseFunctionName(frame.functionName),
      lineNumber: frame.lineNumber,
      columnNumber: frame.columnNumber,
      code: undefined,
      inProject: undefined // Some instances result in no file:
      // - calling notify() from chrome's terminal results in no file/method.
      // - non-error exception thrown from global code in FF
      // This adds one.

    };

    if (f.lineNumber > -1 && !f.file && !f.method) {
      f.file = 'global code';
    }

    return f;
  };

  var normaliseFunctionName = function (name) {
    return /^global code$/i.test(name) ? 'global code' : name;
  };

  var defaultHandledState = function () {
    return {
      unhandled: false,
      severity: 'warning',
      severityReason: {
        type: 'handledException'
      }
    };
  };

  var stringOrFallback = function (str, fallback) {
    return typeof str === 'string' && str ? str : fallback;
  }; // Helpers


  BugsnagReport.getStacktrace = function (error, errorFramesToSkip, generatedFramesToSkip) {
    if (errorFramesToSkip === void 0) {
      errorFramesToSkip = 0;
    }

    if (generatedFramesToSkip === void 0) {
      generatedFramesToSkip = 0;
    }

    if (_$hasStack_9(error)) return _$errorStackParser_7.parse(error).slice(errorFramesToSkip); // in IE11 a new Error() doesn't have a stacktrace until you throw it, so try that here

    try {
      throw error;
    } catch (e) {
      if (_$hasStack_9(e)) return _$errorStackParser_7.parse(error).slice(1 + generatedFramesToSkip); // error wasn't provided or didn't have a stacktrace so try to walk the callstack

      try {
        return __filter_24(_$stackGenerator_22.backtrace(), function (frame) {
          return (frame.functionName || '').indexOf('StackGenerator$$') === -1;
        }).slice(1 + generatedFramesToSkip);
      } catch (e) {
        return [];
      }
    }
  };

  BugsnagReport.ensureReport = function (reportOrError, errorFramesToSkip, generatedFramesToSkip) {
    if (errorFramesToSkip === void 0) {
      errorFramesToSkip = 0;
    }

    if (generatedFramesToSkip === void 0) {
      generatedFramesToSkip = 0;
    } // notify() can be called with a Report object. In this case no action is required


    if (reportOrError.__isBugsnagReport) return reportOrError;

    try {
      var stacktrace = BugsnagReport.getStacktrace(reportOrError, errorFramesToSkip, 1 + generatedFramesToSkip);
      return new BugsnagReport(reportOrError.name, reportOrError.message, stacktrace, undefined, reportOrError);
    } catch (e) {
      return new BugsnagReport(reportOrError.name, reportOrError.message, [], undefined, reportOrError);
    }
  };

  var _$BugsnagReport_24 = BugsnagReport;

  var _$pad_18 = function pad(num, size) {
    var s = '000000000' + num;
    return s.substr(s.length - size);
  };
  /* removed: var _$pad_18 = require('./pad.js'); */


  ;
  var env = typeof window === 'object' ? window : self;
  var globalCount = 0;

  for (var prop in env) {
    if (Object.hasOwnProperty.call(env, prop)) globalCount++;
  }

  var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;

  var clientId = _$pad_18((mimeTypesLength + navigator.userAgent.length).toString(36) + globalCount.toString(36), 4);

  var _$fingerprint_17 = function fingerprint() {
    return clientId;
  };
  /**
   * cuid.js
   * Collision-resistant UID generator for browsers and node.
   * Sequential for fast db lookups and recency sorting.
   * Safe for element IDs and server-side lookups.
   *
   * Extracted from CLCTR
   *
   * Copyright (c) Eric Elliott 2012
   * MIT License
   */

  /* removed: var _$fingerprint_17 = require('./lib/fingerprint.js'); */


  ;
  /* removed: var _$pad_18 = require('./lib/pad.js'); */

  ;
  var c = 0,
      blockSize = 4,
      base = 36,
      discreteValues = Math.pow(base, blockSize);

  function randomBlock() {
    return _$pad_18((Math.random() * discreteValues << 0).toString(base), blockSize);
  }

  function safeCounter() {
    c = c < discreteValues ? c : 0;
    c++; // this is not subliminal

    return c - 1;
  }

  function cuid() {
    // Starting with a lowercase letter makes
    // it HTML element ID friendly.
    var letter = 'c',
        // hard-coded allows for sequential access
    // timestamp
    // warning: this exposes the exact date and time
    // that the uid was created.
    timestamp = new Date().getTime().toString(base),
        // Prevent same-machine collisions.
    counter = _$pad_18(safeCounter().toString(base), blockSize),
        // A few chars to generate distinct ids for different
    // clients (so different computers are far less
    // likely to generate the same id)
    print = _$fingerprint_17(),
        // Grab some more chars from Math.random()
    random = randomBlock() + randomBlock();

    return letter + timestamp + counter + print + random;
  }

  cuid.fingerprint = _$fingerprint_17;
  var _$cuid_16 = cuid;
  var __isoDate_25 = _$esUtils_8.isoDate;
  /* removed: var _$cuid_16 = require('@bugsnag/cuid'); */

  ;

  var Session = /*#__PURE__*/function () {
    function Session() {
      this.id = _$cuid_16();
      this.startedAt = __isoDate_25();
      this._handled = 0;
      this._unhandled = 0;
    }

    var _proto = Session.prototype;

    _proto.toJSON = function toJSON() {
      return {
        id: this.id,
        startedAt: this.startedAt,
        events: {
          handled: this._handled,
          unhandled: this._unhandled
        }
      };
    };

    _proto.trackError = function trackError(report) {
      this[report._handledState.unhandled ? '_unhandled' : '_handled'] += 1;
    };

    return Session;
  }();

  var _$Session_25 = Session;

  function ___extends_4() {
    ___extends_4 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return ___extends_4.apply(this, arguments);
  }
  /* removed: var _$config_5 = require('./config'); */


  ;
  /* removed: var _$BugsnagReport_24 = require('./report'); */

  ;
  /* removed: var _$BugsnagBreadcrumb_3 = require('./breadcrumb'); */

  ;
  /* removed: var _$Session_25 = require('./session'); */

  ;
  var __map_4 = _$esUtils_8.map,
      __includes_4 = _$esUtils_8.includes,
      __isArray_4 = _$esUtils_8.isArray;
  /* removed: var _$inferReleaseStage_10 = require('./lib/infer-release-stage'); */

  ;
  /* removed: var _$iserror_11 = require('./lib/iserror'); */

  ;
  /* removed: var _$asyncSome_6 = require('./lib/async-some'); */

  ;
  /* removed: var _$runBeforeSend_14 = require('./lib/run-before-send'); */

  ;
  var LOG_USAGE_ERR_PREFIX = "Usage error.";
  var REPORT_USAGE_ERR_PREFIX = "Bugsnag usage error.";

  var BugsnagClient = /*#__PURE__*/function () {
    function BugsnagClient(notifier) {
      if (!notifier || !notifier.name || !notifier.version || !notifier.url) {
        throw new Error('`notifier` argument is required');
      } // notifier id


      this.notifier = notifier; // configure() should be called before notify()

      this._configured = false; // intialise opts and config

      this._opts = {};
      this.config = {}; // // i/o

      this._delivery = {
        sendSession: function () {},
        sendReport: function () {}
      };
      this._logger = {
        debug: function () {},
        info: function () {},
        warn: function () {},
        error: function () {} // plugins

      };
      this._plugins = {};
      this._session = null;
      this.breadcrumbs = []; // setable props

      this.app = {};
      this.context = undefined;
      this.device = undefined;
      this.metaData = undefined;
      this.request = undefined;
      this.user = {}; // expose internal constructors

      this.BugsnagClient = BugsnagClient;
      this.BugsnagReport = _$BugsnagReport_24;
      this.BugsnagBreadcrumb = _$BugsnagBreadcrumb_3;
      this.BugsnagSession = _$Session_25;
      var self = this;
      var notify = this.notify;

      this.notify = function () {
        return notify.apply(self, arguments);
      };
    }

    var _proto = BugsnagClient.prototype;

    _proto.setOptions = function setOptions(opts) {
      this._opts = ___extends_4({}, this._opts, opts);
    };

    _proto.configure = function configure(partialSchema) {
      if (partialSchema === void 0) {
        partialSchema = _$config_5.schema;
      }

      var conf = _$config_5.mergeDefaults(this._opts, partialSchema);

      var validity = _$config_5.validate(conf, partialSchema);

      if (!validity.valid === true) throw new Error(generateConfigErrorMessage(validity.errors)); // update and elevate some special options if they were passed in at this point

      if (typeof conf.beforeSend === 'function') conf.beforeSend = [conf.beforeSend];
      if (conf.appVersion) this.app.version = conf.appVersion;
      if (conf.appType) this.app.type = conf.appType;
      if (conf.metaData) this.metaData = conf.metaData;
      if (conf.user) this.user = conf.user;
      if (conf.logger) this.logger(conf.logger); // merge with existing config

      this.config = ___extends_4({}, this.config, conf);
      this._configured = true;
      return this;
    };

    _proto.use = function use(plugin) {
      if (!this._configured) throw new Error('client not configured');
      if (plugin.configSchema) this.configure(plugin.configSchema);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var result = plugin.init.apply(plugin, [this].concat(args)); // JS objects are not the safest way to store arbitrarily keyed values,
      // so bookend the key with some characters that prevent tampering with
      // stuff like __proto__ etc. (only store the result if the plugin had a
      // name)

      if (plugin.name) this._plugins["~" + plugin.name + "~"] = result;
      return this;
    };

    _proto.getPlugin = function getPlugin(name) {
      return this._plugins["~" + name + "~"];
    };

    _proto.delivery = function delivery(d) {
      this._delivery = d(this);
      return this;
    };

    _proto.logger = function logger(l, sid) {
      this._logger = l;
      return this;
    };

    _proto.sessionDelegate = function sessionDelegate(s) {
      this._sessionDelegate = s;
      return this;
    };

    _proto.startSession = function startSession() {
      if (!this._sessionDelegate) {
        this._logger.warn('No session implementation is installed');

        return this;
      }

      return this._sessionDelegate.startSession(this);
    };

    _proto.leaveBreadcrumb = function leaveBreadcrumb(name, metaData, type, timestamp) {
      if (!this._configured) throw new Error('client not configured'); // coerce bad values so that the defaults get set

      name = name || undefined;
      type = typeof type === 'string' ? type : undefined;
      timestamp = typeof timestamp === 'string' ? timestamp : undefined;
      metaData = typeof metaData === 'object' && metaData !== null ? metaData : undefined; // if no name and no metaData, usefulness of this crumb is questionable at best so discard

      if (typeof name !== 'string' && !metaData) return;
      var crumb = new _$BugsnagBreadcrumb_3(name, metaData, type, timestamp); // push the valid crumb onto the queue and maintain the length

      this.breadcrumbs.push(crumb);

      if (this.breadcrumbs.length > this.config.maxBreadcrumbs) {
        this.breadcrumbs = this.breadcrumbs.slice(this.breadcrumbs.length - this.config.maxBreadcrumbs);
      }

      return this;
    };

    _proto.notify = function notify(error, opts, cb) {
      var _this = this;

      if (opts === void 0) {
        opts = {};
      }

      if (cb === void 0) {
        cb = function () {};
      }

      if (!this._configured) throw new Error('client not configured'); // releaseStage can be set via config.releaseStage or client.app.releaseStage

      var releaseStage = _$inferReleaseStage_10(this); // ensure we have an error (or a reasonable object representation of an error)


      var _normaliseError = normaliseError(error, opts, this._logger),
          err = _normaliseError.err,
          errorFramesToSkip = _normaliseError.errorFramesToSkip,
          _opts = _normaliseError._opts;

      if (_opts) opts = _opts; // ensure opts is an object

      if (typeof opts !== 'object' || opts === null) opts = {}; // create a report from the error, if it isn't one already

      var report = _$BugsnagReport_24.ensureReport(err, errorFramesToSkip, 2);

      report.app = ___extends_4({}, {
        releaseStage: releaseStage
      }, report.app, this.app);
      report.context = report.context || opts.context || this.context || undefined;
      report.device = ___extends_4({}, report.device, this.device, opts.device);
      report.request = ___extends_4({}, report.request, this.request, opts.request);
      report.user = ___extends_4({}, report.user, this.user, opts.user);
      report.metaData = ___extends_4({}, report.metaData, this.metaData, opts.metaData);
      report.breadcrumbs = this.breadcrumbs.slice(0);

      if (this._session) {
        this._session.trackError(report);

        report.session = this._session;
      } // set severity if supplied


      if (opts.severity !== undefined) {
        report.severity = opts.severity;
        report._handledState.severityReason = {
          type: 'userSpecifiedSeverity'
        };
      } // exit early if the reports should not be sent on the current releaseStage


      if (__isArray_4(this.config.notifyReleaseStages) && !__includes_4(this.config.notifyReleaseStages, releaseStage)) {
        this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration");

        return cb(null, report);
      }

      var originalSeverity = report.severity;
      var beforeSend = [].concat(opts.beforeSend).concat(this.config.beforeSend);

      var onBeforeSendErr = function (err) {
        _this._logger.error("Error occurred in beforeSend callback, continuing anyway\u2026");

        _this._logger.error(err);
      };

      _$asyncSome_6(beforeSend, _$runBeforeSend_14(report, onBeforeSendErr), function (err, preventSend) {
        if (err) onBeforeSendErr(err);

        if (preventSend) {
          _this._logger.debug("Report not sent due to beforeSend callback");

          return cb(null, report);
        } // only leave a crumb for the error if actually got sent


        if (_this.config.autoBreadcrumbs) {
          _this.leaveBreadcrumb(report.errorClass, {
            errorClass: report.errorClass,
            errorMessage: report.errorMessage,
            severity: report.severity
          }, 'error');
        }

        if (originalSeverity !== report.severity) {
          report._handledState.severityReason = {
            type: 'userCallbackSetSeverity'
          };
        }

        _this._delivery.sendReport({
          apiKey: report.apiKey || _this.config.apiKey,
          notifier: _this.notifier,
          events: [report]
        }, function (err) {
          return cb(err, report);
        });
      });
    };

    return BugsnagClient;
  }();

  var normaliseError = function (error, opts, logger) {
    var synthesizedErrorFramesToSkip = 3;

    var createAndLogUsageError = function (reason) {
      var msg = generateNotifyUsageMessage(reason);
      logger.warn(LOG_USAGE_ERR_PREFIX + " " + msg);
      return new Error(REPORT_USAGE_ERR_PREFIX + " " + msg);
    };

    var err;
    var errorFramesToSkip = 0;

    var _opts;

    switch (typeof error) {
      case 'string':
        if (typeof opts === 'string') {
          // ≤v3 used to have a notify('ErrorName', 'Error message') interface
          // report usage/deprecation errors if this function is called like that
          err = createAndLogUsageError('string/string');
          _opts = {
            metaData: {
              notifier: {
                notifyArgs: [error, opts]
              }
            }
          };
        } else {
          err = new Error(String(error));
          errorFramesToSkip = synthesizedErrorFramesToSkip;
        }

        break;

      case 'number':
      case 'boolean':
        err = new Error(String(error));
        break;

      case 'function':
        err = createAndLogUsageError('function');
        break;

      case 'object':
        if (error !== null && (_$iserror_11(error) || error.__isBugsnagReport)) {
          err = error;
        } else if (error !== null && hasNecessaryFields(error)) {
          err = new Error(error.message || error.errorMessage);
          err.name = error.name || error.errorClass;
          errorFramesToSkip = synthesizedErrorFramesToSkip;
        } else {
          err = createAndLogUsageError(error === null ? 'null' : 'unsupported object');
        }

        break;

      default:
        err = createAndLogUsageError('nothing');
    }

    return {
      err: err,
      errorFramesToSkip: errorFramesToSkip,
      _opts: _opts
    };
  };

  var hasNecessaryFields = function (error) {
    return (typeof error.name === 'string' || typeof error.errorClass === 'string') && (typeof error.message === 'string' || typeof error.errorMessage === 'string');
  };

  var generateConfigErrorMessage = function (errors) {
    return "Bugsnag configuration error\n" + __map_4(errors, function (err) {
      return "\"" + err.key + "\" " + err.message + " \n    got " + stringify(err.value);
    }).join('\n\n');
  };

  var generateNotifyUsageMessage = function (actual) {
    return "notify() expected error/opts parameters, got " + actual;
  };

  var stringify = function (val) {
    return typeof val === 'object' ? JSON.stringify(val) : String(val);
  };

  var _$BugsnagClient_4 = BugsnagClient;

  var _$safeJsonStringify_19 = function (data, replacer, space, opts) {
    var filterKeys = opts && opts.filterKeys ? opts.filterKeys : [];
    var filterPaths = opts && opts.filterPaths ? opts.filterPaths : [];
    return JSON.stringify(prepareObjForSerialization(data, filterKeys, filterPaths), replacer, space);
  };

  var MAX_DEPTH = 20;
  var MAX_EDGES = 25000;
  var MIN_PRESERVED_DEPTH = 8;
  var REPLACEMENT_NODE = '...';

  function __isError_19(o) {
    return o instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(o));
  }

  function throwsMessage(err) {
    return '[Throws: ' + (err ? err.message : '?') + ']';
  }

  function find(haystack, needle) {
    for (var i = 0, len = haystack.length; i < len; i++) {
      if (haystack[i] === needle) return true;
    }

    return false;
  } // returns true if the string `path` starts with any of the provided `paths`


  function isDescendent(paths, path) {
    for (var i = 0, len = paths.length; i < len; i++) {
      if (path.indexOf(paths[i]) === 0) return true;
    }

    return false;
  }

  function shouldFilter(patterns, key) {
    for (var i = 0, len = patterns.length; i < len; i++) {
      if (typeof patterns[i] === 'string' && patterns[i] === key) return true;
      if (patterns[i] && typeof patterns[i].test === 'function' && patterns[i].test(key)) return true;
    }

    return false;
  }

  function __isArray_19(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  function safelyGetProp(obj, prop) {
    try {
      return obj[prop];
    } catch (err) {
      return throwsMessage(err);
    }
  }

  function prepareObjForSerialization(obj, filterKeys, filterPaths) {
    var seen = []; // store references to objects we have seen before

    var edges = 0;

    function visit(obj, path) {
      function edgesExceeded() {
        return path.length > MIN_PRESERVED_DEPTH && edges > MAX_EDGES;
      }

      edges++;
      if (path.length > MAX_DEPTH) return REPLACEMENT_NODE;
      if (edgesExceeded()) return REPLACEMENT_NODE;
      if (obj === null || typeof obj !== 'object') return obj;
      if (find(seen, obj)) return '[Circular]';
      seen.push(obj);

      if (typeof obj.toJSON === 'function') {
        try {
          // we're not going to count this as an edge because it
          // replaces the value of the currently visited object
          edges--;
          var fResult = visit(obj.toJSON(), path);
          seen.pop();
          return fResult;
        } catch (err) {
          return throwsMessage(err);
        }
      }

      var er = __isError_19(obj);

      if (er) {
        edges--;
        var eResult = visit({
          name: obj.name,
          message: obj.message
        }, path);
        seen.pop();
        return eResult;
      }

      if (__isArray_19(obj)) {
        var aResult = [];

        for (var i = 0, len = obj.length; i < len; i++) {
          if (edgesExceeded()) {
            aResult.push(REPLACEMENT_NODE);
            break;
          }

          aResult.push(visit(obj[i], path.concat('[]')));
        }

        seen.pop();
        return aResult;
      }

      var result = {};

      try {
        for (var prop in obj) {
          if (!Object.prototype.hasOwnProperty.call(obj, prop)) continue;

          if (isDescendent(filterPaths, path.join('.')) && shouldFilter(filterKeys, prop)) {
            result[prop] = '[Filtered]';
            continue;
          }

          if (edgesExceeded()) {
            result[prop] = REPLACEMENT_NODE;
            break;
          }

          result[prop] = visit(safelyGetProp(obj, prop), path.concat(prop));
        }
      } catch (e) {}

      seen.pop();
      return result;
    }

    return visit(obj, []);
  }

  var _$jsonPayload_13 = {};
  /* removed: var _$safeJsonStringify_19 = require('@bugsnag/safe-json-stringify'); */

  ;
  var REPORT_FILTER_PATHS = ['events.[].app', 'events.[].metaData', 'events.[].user', 'events.[].breadcrumbs', 'events.[].request', 'events.[].device'];
  var SESSION_FILTER_PATHS = ['device', 'app', 'user'];

  _$jsonPayload_13.report = function (report, filterKeys) {
    var payload = _$safeJsonStringify_19(report, null, null, {
      filterPaths: REPORT_FILTER_PATHS,
      filterKeys: filterKeys
    });

    if (payload.length > 10e5) {
      delete report.events[0].metaData;
      report.events[0].metaData = {
        notifier: "WARNING!\nSerialized payload was " + payload.length / 10e5 + "MB (limit = 1MB)\nmetaData was removed"
      };
      payload = _$safeJsonStringify_19(report, null, null, {
        filterPaths: REPORT_FILTER_PATHS,
        filterKeys: filterKeys
      });
      if (payload.length > 10e5) throw new Error('payload exceeded 1MB limit');
    }

    return payload;
  };

  _$jsonPayload_13.session = function (report, filterKeys) {
    var payload = _$safeJsonStringify_19(report, null, null, {
      filterPaths: SESSION_FILTER_PATHS,
      filterKeys: filterKeys
    });

    if (payload.length > 10e5) throw new Error('payload exceeded 1MB limit');
    return payload;
  };

  var _$delivery_26 = {};
  /* removed: var _$jsonPayload_13 = require('@bugsnag/core/lib/json-payload'); */

  ;
  var __isoDate_26 = _$esUtils_8.isoDate;

  _$delivery_26 = function (client, win) {
    if (win === void 0) {
      win = window;
    }

    return {
      sendReport: function (report, cb) {
        if (cb === void 0) {
          cb = function () {};
        }

        var url = getApiUrl(client.config, 'notify', '4', win);
        var req = new win.XDomainRequest();

        req.onload = function () {
          cb(null);
        };

        req.open('POST', url);
        setTimeout(function () {
          try {
            req.send(_$jsonPayload_13.report(report, client.config.filters));
          } catch (e) {
            client._logger.error(e);

            cb(e);
          }
        }, 0);
      },
      sendSession: function (session, cb) {
        if (cb === void 0) {
          cb = function () {};
        }

        var url = getApiUrl(client.config, 'sessions', '1', win);
        var req = new win.XDomainRequest();

        req.onload = function () {
          cb(null);
        };

        req.open('POST', url);
        setTimeout(function () {
          try {
            req.send(_$jsonPayload_13.session(session, client.config.filters));
          } catch (e) {
            client._logger.error(e);

            cb(e);
          }
        }, 0);
      }
    };
  };

  var getApiUrl = function (config, endpoint, version, win) {
    return matchPageProtocol(config.endpoints[endpoint], win.location.protocol) + "?apiKey=" + encodeURIComponent(config.apiKey) + "&payloadVersion=" + version + "&sentAt=" + encodeURIComponent(__isoDate_26());
  };

  var matchPageProtocol = _$delivery_26._matchPageProtocol = function (endpoint, pageProtocol) {
    return pageProtocol === 'http:' ? endpoint.replace(/^https:/, 'http:') : endpoint;
  };
  /* removed: var _$jsonPayload_13 = require('@bugsnag/core/lib/json-payload'); */


  ;
  var __isoDate_27 = _$esUtils_8.isoDate;

  var _$delivery_27 = function (client, win) {
    if (win === void 0) {
      win = window;
    }

    return {
      sendReport: function (report, cb) {
        if (cb === void 0) {
          cb = function () {};
        }

        try {
          var url = client.config.endpoints.notify;
          var req = new win.XMLHttpRequest();

          req.onreadystatechange = function () {
            if (req.readyState === win.XMLHttpRequest.DONE) cb(null);
          };

          req.open('POST', url);
          req.setRequestHeader('Content-Type', 'application/json');
          req.setRequestHeader('Bugsnag-Api-Key', report.apiKey || client.config.apiKey);
          req.setRequestHeader('Bugsnag-Payload-Version', '4');
          req.setRequestHeader('Bugsnag-Sent-At', __isoDate_27());
          req.send(_$jsonPayload_13.report(report, client.config.filters));
        } catch (e) {
          client._logger.error(e);
        }
      },
      sendSession: function (session, cb) {
        if (cb === void 0) {
          cb = function () {};
        }

        try {
          var url = client.config.endpoints.sessions;
          var req = new win.XMLHttpRequest();

          req.onreadystatechange = function () {
            if (req.readyState === win.XMLHttpRequest.DONE) cb(null);
          };

          req.open('POST', url);
          req.setRequestHeader('Content-Type', 'application/json');
          req.setRequestHeader('Bugsnag-Api-Key', client.config.apiKey);
          req.setRequestHeader('Bugsnag-Payload-Version', '1');
          req.setRequestHeader('Bugsnag-Sent-At', __isoDate_27());
          req.send(_$jsonPayload_13.session(session, client.config.filters));
        } catch (e) {
          client._logger.error(e);
        }
      }
    };
  };
  /*
   * Sets the default context to be the current URL
   */


  var _$context_28 = {
    init: function (client, win) {
      if (win === void 0) {
        win = window;
      }

      client.config.beforeSend.unshift(function (report) {
        if (report.context) return;
        report.context = win.location.pathname;
      });
    }
  };

  function ___extends_29() {
    ___extends_29 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return ___extends_29.apply(this, arguments);
  }

  var __isoDate_29 = _$esUtils_8.isoDate;
  /*
   * Automatically detects browser device details
   */

  var _$device_29 = {
    init: function (client, nav) {
      if (nav === void 0) {
        nav = navigator;
      }

      var device = {
        locale: nav.browserLanguage || nav.systemLanguage || nav.userLanguage || nav.language,
        userAgent: nav.userAgent // merge with anything already set on the client

      };
      client.device = ___extends_29({}, device, client.device); // add time just as the report is sent

      client.config.beforeSend.unshift(function (report) {
        report.device = ___extends_29({}, report.device, {
          time: __isoDate_29()
        });
      });
    }
  };

  function ___extends_30() {
    ___extends_30 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return ___extends_30.apply(this, arguments);
  }
  /*
   * Sets the report request: { url } to be the current href
   */


  var _$request_30 = {
    init: function (client, win) {
      if (win === void 0) {
        win = window;
      }

      client.config.beforeSend.unshift(function (report) {
        if (report.request && report.request.url) return;
        report.request = ___extends_30({}, report.request, {
          url: win.location.href
        });
      });
    }
  };

  function ___extends_31() {
    ___extends_31 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return ___extends_31.apply(this, arguments);
  }

  var __isArray_31 = _$esUtils_8.isArray,
      __includes_31 = _$esUtils_8.includes;
  /* removed: var _$inferReleaseStage_10 = require('@bugsnag/core/lib/infer-release-stage'); */

  ;
  var _$session_31 = {
    init: function (client) {
      return client.sessionDelegate(sessionDelegate);
    }
  };
  var sessionDelegate = {
    startSession: function (client) {
      var sessionClient = client;
      sessionClient._session = new client.BugsnagSession();

      var releaseStage = _$inferReleaseStage_10(sessionClient); // exit early if the reports should not be sent on the current releaseStage


      if (__isArray_31(sessionClient.config.notifyReleaseStages) && !__includes_31(sessionClient.config.notifyReleaseStages, releaseStage)) {
        sessionClient._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration");

        return sessionClient;
      }

      if (!sessionClient.config.endpoints.sessions) {
        sessionClient._logger.warn("Session not sent due to missing endpoints.sessions configuration");

        return sessionClient;
      }

      sessionClient._delivery.sendSession({
        notifier: sessionClient.notifier,
        device: sessionClient.device,
        app: ___extends_31({}, {
          releaseStage: releaseStage
        }, sessionClient.app),
        sessions: [{
          id: sessionClient._session.id,
          startedAt: sessionClient._session.startedAt,
          user: sessionClient.user
        }]
      });

      return sessionClient;
    }
  };

  function ___extends_32() {
    ___extends_32 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return ___extends_32.apply(this, arguments);
  }
  /*
   * Prevent collection of user IPs
   */


  var _$clientIp_32 = {
    init: function (client) {
      if (client.config.collectUserIp) return;
      client.config.beforeSend.push(function (report) {
        // If user.id is explicitly undefined, it will be missing from the payload. It needs
        // removing so that the following line replaces it
        if (report.user && typeof report.user.id === 'undefined') delete report.user.id;
        report.user = ___extends_32({
          id: '[NOT COLLECTED]'
        }, report.user);
        report.request = ___extends_32({
          clientIp: '[NOT COLLECTED]'
        }, report.request);
      });
    },
    configSchema: {
      collectUserIp: {
        defaultValue: function () {
          return true;
        },
        message: 'should be true|false',
        validate: function (value) {
          return value === true || value === false;
        }
      }
    }
  };
  var _$consoleBreadcrumbs_33 = {};
  var __map_33 = _$esUtils_8.map,
      __reduce_33 = _$esUtils_8.reduce,
      __filter_33 = _$esUtils_8.filter;
  /*
   * Leaves breadcrumbs when console log methods are called
   */

  _$consoleBreadcrumbs_33.init = function (client) {
    var isDev = /^dev(elopment)?$/.test(client.config.releaseStage);
    var explicitlyDisabled = client.config.consoleBreadcrumbsEnabled === false;
    var implicitlyDisabled = (client.config.autoBreadcrumbs === false || isDev) && client.config.consoleBreadcrumbsEnabled !== true;
    if (explicitlyDisabled || implicitlyDisabled) return;

    __map_33(CONSOLE_LOG_METHODS, function (method) {
      var original = console[method];

      console[method] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        client.leaveBreadcrumb('Console output', __reduce_33(args, function (accum, arg, i) {
          // do the best/simplest stringification of each argument
          var stringified = '[Unknown value]'; // this may fail if the input is:
          // - an object whose [[Prototype]] is null (no toString)
          // - an object with a broken toString or @@toPrimitive implementation

          try {
            stringified = String(arg);
          } catch (e) {} // if it stringifies to [object Object] attempt to JSON stringify


          if (stringified === '[object Object]') {
            // catch stringify errors and fallback to [object Object]
            try {
              stringified = JSON.stringify(arg);
            } catch (e) {}
          }

          accum["[" + i + "]"] = stringified;
          return accum;
        }, {
          severity: method.indexOf('group') === 0 ? 'log' : method
        }), 'log');
        original.apply(console, args);
      };

      console[method]._restore = function () {
        console[method] = original;
      };
    });
  };

  _$consoleBreadcrumbs_33.configSchema = {
    consoleBreadcrumbsEnabled: {
      defaultValue: function () {
        return undefined;
      },
      validate: function (value) {
        return value === true || value === false || value === undefined;
      },
      message: 'should be true|false'
    }
  };

  if (false) {}

  var CONSOLE_LOG_METHODS = __filter_33(['log', 'debug', 'info', 'warn', 'error'], function (method) {
    return typeof console !== 'undefined' && typeof console[method] === 'function';
  });

  var __map_34 = _$esUtils_8.map,
      __reduce_34 = _$esUtils_8.reduce,
      __filter_34 = _$esUtils_8.filter;
  var MAX_LINE_LENGTH = 200;
  var MAX_SCRIPT_LENGTH = 500000;
  var _$inlineScriptContent_34 = {
    init: function (client, doc, win) {
      if (doc === void 0) {
        doc = document;
      }

      if (win === void 0) {
        win = window;
      }

      if (!client.config.trackInlineScripts) return;
      var originalLocation = win.location.href;
      var html = '';
      var DOMContentLoaded = false;

      var getHtml = function () {
        return doc.documentElement.outerHTML;
      }; // get whatever HTML exists at this point in time


      html = getHtml();
      var prev = doc.onreadystatechange; // then update it when the DOM content has loaded

      doc.onreadystatechange = function () {
        // IE8 compatible alternative to document#DOMContentLoaded
        if (doc.readyState === 'interactive') {
          html = getHtml();
          DOMContentLoaded = true;
        }

        try {
          prev.apply(this, arguments);
        } catch (e) {}
      };

      var _lastScript = null;

      var updateLastScript = function (script) {
        _lastScript = script;
      };

      var getCurrentScript = function () {
        var script = doc.currentScript || _lastScript;

        if (!script && !DOMContentLoaded) {
          var scripts = doc.scripts || doc.getElementsByTagName('script');
          script = scripts[scripts.length - 1];
        }

        return script;
      };

      var addSurroundingCode = function (lineNumber) {
        // get whatever html has rendered at this point
        if (!DOMContentLoaded || !html) html = getHtml(); // simulate the raw html

        var htmlLines = ['<!-- DOC START -->'].concat(html.split('\n'));
        var zeroBasedLine = lineNumber - 1;
        var start = Math.max(zeroBasedLine - 3, 0);
        var end = Math.min(zeroBasedLine + 3, htmlLines.length);
        return __reduce_34(htmlLines.slice(start, end), function (accum, line, i) {
          accum[start + 1 + i] = line.length <= MAX_LINE_LENGTH ? line : line.substr(0, MAX_LINE_LENGTH);
          return accum;
        }, {});
      };

      client.config.beforeSend.unshift(function (report) {
        // remove any of our own frames that may be part the stack this
        // happens before the inline script check as it happens for all errors
        report.stacktrace = __filter_34(report.stacktrace, function (f) {
          return !/__trace__$/.test(f.method);
        });
        var frame = report.stacktrace[0]; // if frame.file exists and is not the original location of the page, this can't be an inline script

        if (frame && frame.file && frame.file.replace(/#.*$/, '') !== originalLocation.replace(/#.*$/, '')) return; // grab the last script known to have run

        var currentScript = getCurrentScript();

        if (currentScript) {
          var content = currentScript.innerHTML;
          report.updateMetaData('script', 'content', content.length <= MAX_SCRIPT_LENGTH ? content : content.substr(0, MAX_SCRIPT_LENGTH));
        } // only attempt to grab some surrounding code if we have a line number


        if (!frame || !frame.lineNumber) return;
        frame.code = addSurroundingCode(frame.lineNumber);
      }); // Proxy all the timer functions whose callback is their 0th argument.
      // Keep a reference to the original setTimeout because we need it later

      var _map = __map_34(['setTimeout', 'setInterval', 'setImmediate', 'requestAnimationFrame'], function (fn) {
        return __proxy(win, fn, function (original) {
          return __traceOriginalScript(original, function (args) {
            return {
              get: function () {
                return args[0];
              },
              replace: function (fn) {
                args[0] = fn;
              }
            };
          });
        });
      }),
          _setTimeout = _map[0]; // Proxy all the host objects whose prototypes have an addEventListener function


      __map_34(['EventTarget', 'Window', 'Node', 'ApplicationCache', 'AudioTrackList', 'ChannelMergerNode', 'CryptoOperation', 'EventSource', 'FileReader', 'HTMLUnknownElement', 'IDBDatabase', 'IDBRequest', 'IDBTransaction', 'KeyOperation', 'MediaController', 'MessagePort', 'ModalWindow', 'Notification', 'SVGElementInstance', 'Screen', 'TextTrack', 'TextTrackCue', 'TextTrackList', 'WebSocket', 'WebSocketWorker', 'Worker', 'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload'], function (o) {
        if (!win[o] || !win[o].prototype || !win[o].prototype.hasOwnProperty || !win[o].prototype.hasOwnProperty('addEventListener')) return;

        __proxy(win[o].prototype, 'addEventListener', function (original) {
          return __traceOriginalScript(original, eventTargetCallbackAccessor);
        });

        __proxy(win[o].prototype, 'removeEventListener', function (original) {
          return __traceOriginalScript(original, eventTargetCallbackAccessor, true);
        });
      });

      function __traceOriginalScript(fn, callbackAccessor, alsoCallOriginal) {
        if (alsoCallOriginal === void 0) {
          alsoCallOriginal = false;
        }

        return function () {
          // this is required for removeEventListener to remove anything added with
          // addEventListener before the functions started being wrapped by Bugsnag
          var args = Array.prototype.slice.call(arguments);

          try {
            var cba = callbackAccessor(args);
            var cb = cba.get();
            if (alsoCallOriginal) fn.apply(this, args);
            if (typeof cb !== 'function') return fn.apply(this, args);

            if (cb.__trace__) {
              cba.replace(cb.__trace__);
            } else {
              var script = getCurrentScript(); // this function mustn't be annonymous due to a bug in the stack
              // generation logic, meaning it gets tripped up
              // see: https://github.com/stacktracejs/stack-generator/issues/6

              cb.__trace__ = function __trace__() {
                // set the script that called this function
                updateLastScript(script); // immediately unset the currentScript synchronously below, however
                // if this cb throws an error the line after will not get run so schedule
                // an almost-immediate aysnc update too

                _setTimeout(function () {
                  updateLastScript(null);
                }, 0);

                var ret = cb.apply(this, arguments);
                updateLastScript(null);
                return ret;
              };

              cb.__trace__.__trace__ = cb.__trace__;
              cba.replace(cb.__trace__);
            }
          } catch (e) {} // swallow these errors on Selenium:
          // Permission denied to access property '__trace__'
          // WebDriverException: Message: Permission denied to access property "handleEvent"
          // IE8 doesn't let you call .apply() on setTimeout/setInterval


          if (fn.apply) return fn.apply(this, args);

          switch (args.length) {
            case 1:
              return fn(args[0]);

            case 2:
              return fn(args[0], args[1]);

            default:
              return fn();
          }
        };
      }
    },
    configSchema: {
      trackInlineScripts: {
        validate: function (value) {
          return value === true || value === false;
        },
        defaultValue: function () {
          return true;
        },
        message: 'should be true|false'
      }
    }
  };

  function __proxy(host, name, replacer) {
    var original = host[name];
    if (!original) return original;
    var replacement = replacer(original);
    host[name] = replacement;
    return original;
  }

  function eventTargetCallbackAccessor(args) {
    var isEventHandlerObj = !!args[1] && typeof args[1].handleEvent === 'function';
    return {
      get: function () {
        return isEventHandlerObj ? args[1].handleEvent : args[1];
      },
      replace: function (fn) {
        if (isEventHandlerObj) {
          args[1].handleEvent = fn;
        } else {
          args[1] = fn;
        }
      }
    };
  }
  /*
   * Leaves breadcrumbs when the user interacts with the DOM
   */


  var _$interactionBreadcrumbs_35 = {
    init: function (client, win) {
      if (win === void 0) {
        win = window;
      }

      if (!('addEventListener' in win)) return;
      var explicitlyDisabled = client.config.interactionBreadcrumbsEnabled === false;
      var implicitlyDisabled = client.config.autoBreadcrumbs === false && client.config.interactionBreadcrumbsEnabled !== true;
      if (explicitlyDisabled || implicitlyDisabled) return;
      win.addEventListener('click', function (event) {
        var targetText, targetSelector;

        try {
          targetText = getNodeText(event.target);
          targetSelector = getNodeSelector(event.target, win);
        } catch (e) {
          targetText = '[hidden]';
          targetSelector = '[hidden]';

          client._logger.error('Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z');
        }

        client.leaveBreadcrumb('UI click', {
          targetText: targetText,
          targetSelector: targetSelector
        }, 'user');
      }, true);
    },
    configSchema: {
      interactionBreadcrumbsEnabled: {
        defaultValue: function () {
          return undefined;
        },
        validate: function (value) {
          return value === true || value === false || value === undefined;
        },
        message: 'should be true|false'
      }
    } // extract text content from a element

  };

  var getNodeText = function (el) {
    var text = el.textContent || el.innerText || '';
    if (!text && (el.type === 'submit' || el.type === 'button')) text = el.value;
    text = text.replace(/^\s+|\s+$/g, ''); // trim whitespace

    return truncate(text, 140);
  }; // Create a label from tagname, id and css class of the element


  function getNodeSelector(el, win) {
    var parts = [el.tagName];
    if (el.id) parts.push('#' + el.id);
    if (el.className && el.className.length) parts.push("." + el.className.split(' ').join('.')); // Can't get much more advanced with the current browser

    if (!win.document.querySelectorAll || !Array.prototype.indexOf) return parts.join('');

    try {
      if (win.document.querySelectorAll(parts.join('')).length === 1) return parts.join('');
    } catch (e) {
      // Sometimes the query selector can be invalid just return it as-is
      return parts.join('');
    } // try to get a more specific selector if this one matches more than one element


    if (el.parentNode.childNodes.length > 1) {
      var index = Array.prototype.indexOf.call(el.parentNode.childNodes, el) + 1;
      parts.push(":nth-child(" + index + ")");
    }

    if (win.document.querySelectorAll(parts.join('')).length === 1) return parts.join(''); // try prepending the parent node selector

    if (el.parentNode) return getNodeSelector(el.parentNode, win) + " > " + parts.join('');
    return parts.join('');
  }

  function truncate(value, length) {
    var ommision = '(...)';
    if (value && value.length <= length) return value;
    return value.slice(0, length - ommision.length) + ommision;
  }

  var _$navigationBreadcrumbs_36 = {};
  /*
   * Leaves breadcrumbs when navigation methods are called or events are emitted
   */

  _$navigationBreadcrumbs_36.init = function (client, win) {
    if (win === void 0) {
      win = window;
    }

    if (!('addEventListener' in win)) return;
    var explicitlyDisabled = client.config.navigationBreadcrumbsEnabled === false;
    var implicitlyDisabled = client.config.autoBreadcrumbs === false && client.config.navigationBreadcrumbsEnabled !== true;
    if (explicitlyDisabled || implicitlyDisabled) return; // returns a function that will drop a breadcrumb with a given name

    var drop = function (name) {
      return function () {
        return client.leaveBreadcrumb(name, {}, 'navigation');
      };
    }; // simple drops – just names, no meta


    win.addEventListener('pagehide', drop('Page hidden'), true);
    win.addEventListener('pageshow', drop('Page shown'), true);
    win.addEventListener('load', drop('Page loaded'), true);
    win.document.addEventListener('DOMContentLoaded', drop('DOMContentLoaded'), true); // some browsers like to emit popstate when the page loads, so only add the popstate listener after that

    win.addEventListener('load', function () {
      return win.addEventListener('popstate', drop('Navigated back'), true);
    }); // hashchange has some metaData that we care about

    win.addEventListener('hashchange', function (event) {
      var metaData = event.oldURL ? {
        from: relativeLocation(event.oldURL, win),
        to: relativeLocation(event.newURL, win),
        state: getCurrentState(win)
      } : {
        to: relativeLocation(win.location.href, win)
      };
      client.leaveBreadcrumb('Hash changed', metaData, 'navigation');
    }, true); // the only way to know about replaceState/pushState is to wrap them… >_<

    if (win.history.replaceState) wrapHistoryFn(client, win.history, 'replaceState', win);
    if (win.history.pushState) wrapHistoryFn(client, win.history, 'pushState', win);
    client.leaveBreadcrumb('Bugsnag loaded', {}, 'navigation');
  };

  _$navigationBreadcrumbs_36.configSchema = {
    navigationBreadcrumbsEnabled: {
      defaultValue: function () {
        return undefined;
      },
      validate: function (value) {
        return value === true || value === false || value === undefined;
      },
      message: 'should be true|false'
    }
  };

  if (false) {} // takes a full url like http://foo.com:1234/pages/01.html?yes=no#section-2 and returns
  // just the path and hash parts, e.g. /pages/01.html?yes=no#section-2


  var relativeLocation = function (url, win) {
    var a = win.document.createElement('A');
    a.href = url;
    return "" + a.pathname + a.search + a.hash;
  };

  var stateChangeToMetaData = function (win, state, title, url) {
    var currentPath = relativeLocation(win.location.href, win);
    return {
      title: title,
      state: state,
      prevState: getCurrentState(win),
      to: url || currentPath,
      from: currentPath
    };
  };

  var wrapHistoryFn = function (client, target, fn, win) {
    var orig = target[fn];

    target[fn] = function (state, title, url) {
      client.leaveBreadcrumb("History " + fn, stateChangeToMetaData(win, state, title, url), 'navigation'); // if throttle plugin is in use, refresh the event sent count

      if (typeof client.refresh === 'function') client.refresh(); // if the client is operating in auto session-mode, a new route should trigger a new session

      if (client.config.autoCaptureSessions) client.startSession(); // Internet Explorer will convert `undefined` to a string when passed, causing an unintended redirect
      // to '/undefined'. therefore we only pass the url if it's not undefined.

      orig.apply(target, [state, title].concat(url !== undefined ? url : []));
    };

    if (false) {}
  };

  var getCurrentState = function (win) {
    try {
      return win.history.state;
    } catch (e) {}
  };

  var _$networkBreadcrumbs_37 = {};
  var BREADCRUMB_TYPE = 'request'; // keys to safely store metadata on the request object

  var REQUEST_SETUP_KEY = 'BS~~S';
  var REQUEST_URL_KEY = 'BS~~U';
  var REQUEST_METHOD_KEY = 'BS~~M';
  var __includes_37 = _$esUtils_8.includes;
  var restoreFunctions = [];
  var client;
  var win;
  var getIgnoredUrls;

  var defaultIgnoredUrls = function () {
    return [client.config.endpoints.notify, client.config.endpoints.sessions];
  };
  /*
   * Leaves breadcrumbs when network requests occur
   */


  _$networkBreadcrumbs_37.name = 'networkBreadcrumbs';

  _$networkBreadcrumbs_37.init = function (_client, _getIgnoredUrls, _win) {
    if (_getIgnoredUrls === void 0) {
      _getIgnoredUrls = defaultIgnoredUrls;
    }

    if (_win === void 0) {
      _win = window;
    }

    var explicitlyDisabled = _client.config.networkBreadcrumbsEnabled === false;
    var implicitlyDisabled = _client.config.autoBreadcrumbs === false && _client.config.networkBreadcrumbsEnabled !== true;
    if (explicitlyDisabled || implicitlyDisabled) return;
    client = _client;
    win = _win;
    getIgnoredUrls = _getIgnoredUrls;
    monkeyPatchXMLHttpRequest();
    monkeyPatchFetch();
  };

  _$networkBreadcrumbs_37.configSchema = {
    networkBreadcrumbsEnabled: {
      defaultValue: function () {
        return undefined;
      },
      validate: function (value) {
        return value === true || value === false || value === undefined;
      },
      message: 'should be true|false'
    }
  };

  if (false) {} // XMLHttpRequest monkey patch


  var monkeyPatchXMLHttpRequest = function () {
    if (!('addEventListener' in win.XMLHttpRequest.prototype)) return;
    var nativeOpen = win.XMLHttpRequest.prototype.open; // override native open()

    win.XMLHttpRequest.prototype.open = function open(method, url) {
      // store url and HTTP method for later
      this[REQUEST_URL_KEY] = url;
      this[REQUEST_METHOD_KEY] = method; // if we have already setup listeners, it means open() was called twice, we need to remove
      // the listeners and recreate them

      if (this[REQUEST_SETUP_KEY]) {
        this.removeEventListener('load', handleXHRLoad);
        this.removeEventListener('error', handleXHRError);
      } // attach load event listener


      this.addEventListener('load', handleXHRLoad); // attach error event listener

      this.addEventListener('error', handleXHRError);
      this[REQUEST_SETUP_KEY] = true;
      nativeOpen.apply(this, arguments);
    };

    if (false) {}
  };

  function handleXHRLoad() {
    if (__includes_37(getIgnoredUrls(), this[REQUEST_URL_KEY])) {
      // don't leave a network breadcrumb from bugsnag notify calls
      return;
    }

    var metaData = {
      status: this.status,
      request: this[REQUEST_METHOD_KEY] + " " + this[REQUEST_URL_KEY]
    };

    if (this.status >= 400) {
      // contacted server but got an error response
      client.leaveBreadcrumb('XMLHttpRequest failed', metaData, BREADCRUMB_TYPE);
    } else {
      client.leaveBreadcrumb('XMLHttpRequest succeeded', metaData, BREADCRUMB_TYPE);
    }
  }

  function handleXHRError() {
    if (__includes_37(getIgnoredUrls, this[REQUEST_URL_KEY])) {
      // don't leave a network breadcrumb from bugsnag notify calls
      return;
    } // failed to contact server


    client.leaveBreadcrumb('XMLHttpRequest error', {
      request: this[REQUEST_METHOD_KEY] + " " + this[REQUEST_URL_KEY]
    }, BREADCRUMB_TYPE);
  } // window.fetch monkey patch


  var monkeyPatchFetch = function () {
    // only patch it if it exists and if it is not a polyfill (patching a polyfilled
    // fetch() results in duplicate breadcrumbs for the same request because the
    // implementation uses XMLHttpRequest which is also patched)
    if (!('fetch' in win) || win.fetch.polyfill) return;
    var oldFetch = win.fetch;

    win.fetch = function fetch() {
      var _arguments = arguments;
      var urlOrRequest = arguments[0];
      var options = arguments[1];
      var method;
      var url = null;

      if (urlOrRequest && typeof urlOrRequest === 'object') {
        url = urlOrRequest.url;

        if (options && 'method' in options) {
          method = options.method;
        } else if (urlOrRequest && 'method' in urlOrRequest) {
          method = urlOrRequest.method;
        }
      } else {
        url = urlOrRequest;

        if (options && 'method' in options) {
          method = options.method;
        }
      }

      if (method === undefined) {
        method = 'GET';
      }

      return new Promise(function (resolve, reject) {
        // pass through to native fetch
        oldFetch.apply(void 0, _arguments).then(function (response) {
          handleFetchSuccess(response, method, url);
          resolve(response);
        })["catch"](function (error) {
          handleFetchError(method, url);
          reject(error);
        });
      });
    };

    if (false) {}
  };

  var handleFetchSuccess = function (response, method, url) {
    var metaData = {
      status: response.status,
      request: method + " " + url
    };

    if (response.status >= 400) {
      // when the request comes back with a 4xx or 5xx status it does not reject the fetch promise,
      client.leaveBreadcrumb('fetch() failed', metaData, BREADCRUMB_TYPE);
    } else {
      client.leaveBreadcrumb('fetch() succeeded', metaData, BREADCRUMB_TYPE);
    }
  };

  var handleFetchError = function (method, url) {
    client.leaveBreadcrumb('fetch() error', {
      request: method + " " + url
    }, BREADCRUMB_TYPE);
  };

  var __intRange_38 = _$validators_15.intRange;
  /*
   * Throttles and dedupes error reports
   */

  var _$throttle_38 = {
    init: function (client) {
      // track sent events for each init of the plugin
      var n = 0; // add beforeSend hook

      client.config.beforeSend.push(function (report) {
        // have max events been sent already?
        if (n >= client.config.maxEvents) return report.ignore();
        n++;
      });

      client.refresh = function () {
        n = 0;
      };
    },
    configSchema: {
      maxEvents: {
        defaultValue: function () {
          return 10;
        },
        message: 'should be a positive integer ≤100',
        validate: function (val) {
          return __intRange_38(1, 100)(val);
        }
      }
    }
  };
  var _$stripQueryString_39 = {};

  function ___extends_39() {
    ___extends_39 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return ___extends_39.apply(this, arguments);
  }
  /*
   * Remove query strings (and fragments) from stacktraces
   */


  var __map_39 = _$esUtils_8.map;
  _$stripQueryString_39 = {
    init: function (client) {
      client.config.beforeSend.push(function (report) {
        report.stacktrace = __map_39(report.stacktrace, function (frame) {
          return ___extends_39({}, frame, {
            file: strip(frame.file)
          });
        });
      });
    }
  };

  var strip = _$stripQueryString_39._strip = function (str) {
    return typeof str === 'string' ? str.replace(/\?.*$/, '').replace(/#.*$/, '') : str;
  };
  /*
   * Automatically notifies Bugsnag when window.onerror is called
   */


  var _$onerror_40 = {
    init: function (client, win) {
      if (win === void 0) {
        win = window;
      }

      function onerror(messageOrEvent, url, lineNo, charNo, error) {
        // Ignore errors with no info due to CORS settings
        if (lineNo === 0 && /Script error\.?/.test(messageOrEvent)) {
          client._logger.warn('Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z');
        } else {
          // any error sent to window.onerror is unhandled and has severity=error
          var handledState = {
            severity: 'error',
            unhandled: true,
            severityReason: {
              type: 'unhandledException'
            }
          };
          var report; // window.onerror can be called in a number of ways. This big if-else is how we
          // figure out which arguments were supplied, and what kind of values it received.

          if (error) {
            // if the last parameter (error) was supplied, this is a modern browser's
            // way of saying "this value was thrown and not caught"
            if (error.name && error.message) {
              // if it looks like an error, construct a report object using its stack
              report = new client.BugsnagReport(error.name, error.message, decorateStack(client.BugsnagReport.getStacktrace(error), url, lineNo, charNo), handledState, error);
            } else {
              // otherwise, for non error values that were thrown, stringify it for
              // use as the error message and get/generate a stacktrace
              report = new client.BugsnagReport('window.onerror', String(error), decorateStack(client.BugsnagReport.getStacktrace(error, 1), url, lineNo, charNo), handledState, error); // include the raw input as metadata

              report.updateMetaData('window onerror', {
                error: error
              });
            }
          } else if ( // This complex case detects "error" events that are typically synthesised
          // by jquery's trigger method (although can be created in other ways). In
          // order to detect this:
          // - the first argument (message) must exist and be an object (most likely it's a jQuery event)
          // - the second argument (url) must either not exist or be something other than a string (if it
          //    exists and is not a string, it'll be the extraParameters argument from jQuery's trigger()
          //    function)
          // - the third, fourth and fifth arguments must not exist (lineNo, charNo and error)
          typeof messageOrEvent === 'object' && messageOrEvent !== null && (!url || typeof url !== 'string') && !lineNo && !charNo && !error) {
            // The jQuery event may have a "type" property, if so use it as part of the error message
            var name = messageOrEvent.type ? "Event: " + messageOrEvent.type : 'window.onerror'; // attempt to find a message from one of the conventional properties, but
            // default to empty string (the report will fill it with a placeholder)

            var message = messageOrEvent.message || messageOrEvent.detail || '';
            report = new client.BugsnagReport(name, message, client.BugsnagReport.getStacktrace(new Error(), 1).slice(1), handledState, messageOrEvent); // include the raw input as metadata – it might contain more info than we extracted

            report.updateMetaData('window onerror', {
              event: messageOrEvent,
              extraParameters: url
            });
          } else {
            // Lastly, if there was no "error" parameter this event was probably from an old
            // browser that doesn't support that. Instead we need to generate a stacktrace.
            report = new client.BugsnagReport('window.onerror', String(messageOrEvent), decorateStack(client.BugsnagReport.getStacktrace(error, 1), url, lineNo, charNo), handledState, messageOrEvent); // include the raw input as metadata – it might contain more info than we extracted

            report.updateMetaData('window onerror', {
              event: messageOrEvent
            });
          }

          client.notify(report);
        }

        if (typeof prevOnError === 'function') prevOnError.apply(this, arguments);
      }

      var prevOnError = win.onerror;
      win.onerror = onerror;
    } // Sometimes the stacktrace has less information than was passed to window.onerror.
    // This function will augment the first stackframe with any useful info that was
    // received as arguments to the onerror callback.

  };

  var decorateStack = function (stack, url, lineNo, charNo) {
    var culprit = stack[0];
    if (!culprit) return stack;
    if (!culprit.fileName && typeof url === 'string') culprit.setFileName(url);
    if (!culprit.lineNumber && isActualNumber(lineNo)) culprit.setLineNumber(lineNo);

    if (!culprit.columnNumber) {
      if (isActualNumber(charNo)) {
        culprit.setColumnNumber(charNo);
      } else if (window.event && isActualNumber(window.event.errorCharacter)) {
        culprit.setColumnNumber(window.event.errorCharacter);
      }
    }

    return stack;
  };

  var isActualNumber = function (n) {
    return typeof n === 'number' && String.call(n) !== 'NaN';
  };

  var _$unhandledRejection_41 = {};
  /* removed: var _$hasStack_9 = require('@bugsnag/core/lib/has-stack'); */

  ;
  var __reduce_41 = _$esUtils_8.reduce;
  /* removed: var _$errorStackParser_7 = require('@bugsnag/core/lib/error-stack-parser'); */

  ;
  /* removed: var _$iserror_11 = require('@bugsnag/core/lib/iserror'); */

  ;
  /*
   * Automatically notifies Bugsnag when window.onunhandledrejection is called
   */

  var _listener;

  _$unhandledRejection_41.init = function (client, win) {
    if (win === void 0) {
      win = window;
    }

    var listener = function (event) {
      var error = event.reason;
      var isBluebird = false; // accessing properties on event.detail can throw errors (see #394)

      try {
        if (event.detail && event.detail.reason) {
          error = event.detail.reason;
          isBluebird = true;
        }
      } catch (e) {}

      var handledState = {
        severity: 'error',
        unhandled: true,
        severityReason: {
          type: 'unhandledPromiseRejection'
        }
      };
      var report;

      if (error && _$hasStack_9(error)) {
        // if it quacks like an Error…
        report = new client.BugsnagReport(error.name, error.message, _$errorStackParser_7.parse(error), handledState, error);

        if (isBluebird) {
          report.stacktrace = __reduce_41(report.stacktrace, fixBluebirdStacktrace(error), []);
        }
      } else {
        // if it doesn't…
        var msg = 'Rejection reason was not an Error. See "Promise" tab for more detail.';
        report = new client.BugsnagReport(error && error.name ? error.name : 'UnhandledRejection', error && error.message ? error.message : msg, [], handledState, error); // stuff the rejection reason into metaData, it could be useful

        report.updateMetaData('promise', 'rejection reason', serializableReason(error));
      }

      client.notify(report);
    };

    if ('addEventListener' in win) {
      win.addEventListener('unhandledrejection', listener);
    } else {
      win.onunhandledrejection = function (reason, promise) {
        listener({
          detail: {
            reason: reason,
            promise: promise
          }
        });
      };
    }

    _listener = listener;
  };

  if (false) {}

  var serializableReason = function (err) {
    if (err === null || err === undefined) {
      return 'undefined (or null)';
    } else if (_$iserror_11(err)) {
      var _ref;

      return _ref = {}, _ref[Object.prototype.toString.call(err)] = {
        name: err.name,
        message: err.message,
        code: err.code,
        stack: err.stack
      }, _ref;
    } else {
      return err;
    }
  }; // The stack parser on bluebird stacks in FF get a suprious first frame:
  //
  // Error: derp
  //   b@http://localhost:5000/bluebird.html:22:24
  //   a@http://localhost:5000/bluebird.html:18:9
  //   @http://localhost:5000/bluebird.html:14:9
  //
  // results in
  //   […]
  //     0: Object { file: "Error: derp", method: undefined, lineNumber: undefined, … }
  //     1: Object { file: "http://localhost:5000/bluebird.html", method: "b", lineNumber: 22, … }
  //     2: Object { file: "http://localhost:5000/bluebird.html", method: "a", lineNumber: 18, … }
  //     3: Object { file: "http://localhost:5000/bluebird.html", lineNumber: 14, columnNumber: 9, … }
  //
  // so the following reduce/accumulator function removes such frames
  //
  // Bluebird pads method names with spaces so trim that too…
  // https://github.com/petkaantonov/bluebird/blob/b7f21399816d02f979fe434585334ce901dcaf44/src/debuggability.js#L568-L571


  var fixBluebirdStacktrace = function (error) {
    return function (accum, frame) {
      if (frame.file === error.toString()) return accum;

      if (frame.method) {
        frame.method = frame.method.replace(/^\s+/, '');
      }

      return accum.concat(frame);
    };
  };

  var _$notifier_2 = {};

  function ___extends_2() {
    ___extends_2 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return ___extends_2.apply(this, arguments);
  }

  var name = 'Bugsnag JavaScript';
  var version = '6.5.2';
  var url = 'https://github.com/bugsnag/bugsnag-js';
  /* removed: var _$BugsnagClient_4 = require('@bugsnag/core/client'); */

  ;
  /* removed: var _$BugsnagReport_24 = require('@bugsnag/core/report'); */

  ;
  /* removed: var _$Session_25 = require('@bugsnag/core/session'); */

  ;
  /* removed: var _$BugsnagBreadcrumb_3 = require('@bugsnag/core/breadcrumb'); */

  ; // extend the base config schema with some browser-specific options

  var __schema_2 = ___extends_2({}, _$config_5.schema, _$config_1);
  /* removed: var _$onerror_40 = require('@bugsnag/plugin-window-onerror'); */


  ;
  /* removed: var _$unhandledRejection_41 = require('@bugsnag/plugin-window-unhandled-rejection'); */

  ;
  /* removed: var _$device_29 = require('@bugsnag/plugin-browser-device'); */

  ;
  /* removed: var _$context_28 = require('@bugsnag/plugin-browser-context'); */

  ;
  /* removed: var _$request_30 = require('@bugsnag/plugin-browser-request'); */

  ;
  /* removed: var _$throttle_38 = require('@bugsnag/plugin-simple-throttle'); */

  ;
  /* removed: var _$consoleBreadcrumbs_33 = require('@bugsnag/plugin-console-breadcrumbs'); */

  ;
  /* removed: var _$networkBreadcrumbs_37 = require('@bugsnag/plugin-network-breadcrumbs'); */

  ;
  /* removed: var _$navigationBreadcrumbs_36 = require('@bugsnag/plugin-navigation-breadcrumbs'); */

  ;
  /* removed: var _$interactionBreadcrumbs_35 = require('@bugsnag/plugin-interaction-breadcrumbs'); */

  ;
  /* removed: var _$inlineScriptContent_34 = require('@bugsnag/plugin-inline-script-content'); */

  ;
  /* removed: var _$session_31 = require('@bugsnag/plugin-browser-session'); */

  ;
  /* removed: var _$clientIp_32 = require('@bugsnag/plugin-client-ip'); */

  ;
  /* removed: var _$stripQueryString_39 = require('@bugsnag/plugin-strip-query-string'); */

  ; // delivery mechanisms

  /* removed: var _$delivery_26 = require('@bugsnag/delivery-x-domain-request'); */

  ;
  /* removed: var _$delivery_27 = require('@bugsnag/delivery-xml-http-request'); */

  ;

  _$notifier_2 = function (opts) {
    // handle very simple use case where user supplies just the api key as a string
    if (typeof opts === 'string') opts = {
      apiKey: opts // support renamed/deprecated options

    };
    var warningMessage = '';

    if (opts.endpoints && opts.endpoints.notify && !opts.endpoints.sessions) {
      warningMessage += 'notify endpoint is set but sessions endpoint is not. No sessions will be sent.';
    }

    var bugsnag = new _$BugsnagClient_4({
      name: name,
      version: version,
      url: url
    });
    bugsnag.setOptions(opts); // set delivery based on browser capability (IE 8+9 have an XDomainRequest object)

    bugsnag.delivery(window.XDomainRequest ? _$delivery_26 : _$delivery_27); // configure with user supplied options
    // errors can be thrown here that prevent the lib from being in a useable state

    bugsnag.configure(__schema_2);
    if (warningMessage) bugsnag._logger.warn(warningMessage); // always-on browser-specific plugins

    bugsnag.use(_$device_29);
    bugsnag.use(_$context_28);
    bugsnag.use(_$request_30);
    bugsnag.use(_$throttle_38);
    bugsnag.use(_$session_31);
    bugsnag.use(_$clientIp_32);
    bugsnag.use(_$stripQueryString_39); // optional browser-specific plugins

    if (bugsnag.config.autoNotify !== false) {
      bugsnag.use(_$onerror_40);
      bugsnag.use(_$unhandledRejection_41);
    }

    bugsnag.use(_$navigationBreadcrumbs_36);
    bugsnag.use(_$interactionBreadcrumbs_35);
    bugsnag.use(_$networkBreadcrumbs_37);
    bugsnag.use(_$consoleBreadcrumbs_33); // this one added last to avoid wrapping functionality before bugsnag uses it

    bugsnag.use(_$inlineScriptContent_34);

    bugsnag._logger.debug("Loaded!");

    return bugsnag.config.autoCaptureSessions ? bugsnag.startSession() : bugsnag;
  }; // Angular's DI system needs this interface to match what is exposed
  // in the type definition file (types/bugsnag.d.ts)


  _$notifier_2.Bugsnag = {
    Client: _$BugsnagClient_4,
    Report: _$BugsnagReport_24,
    Session: _$Session_25,
    Breadcrumb: _$BugsnagBreadcrumb_3 // Export a "default" property for compatibility with ESM imports

  };
  _$notifier_2['default'] = _$notifier_2;
  return _$notifier_2;
});

/***/ }),

/***/ "./node_modules/@bugsnag/js/browser/notifier.js":
/*!******************************************************!*\
  !*** ./node_modules/@bugsnag/js/browser/notifier.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! @bugsnag/browser */ "./node_modules/@bugsnag/browser/dist/bugsnag.js");

/***/ }),

/***/ "./node_modules/after/index.js":
/*!*************************************!*\
  !*** ./node_modules/after/index.js ***!
  \*************************************/
/***/ ((module) => {

"use strict";


module.exports = after;

function after(count, callback, err_cb) {
  var bail = false;
  err_cb = err_cb || noop;
  proxy.count = count;
  return count === 0 ? callback() : proxy;

  function proxy(err, result) {
    if (proxy.count <= 0) {
      throw new Error('after called too many times');
    }

    --proxy.count; // after first error, rest are passed to err_cb

    if (err) {
      bail = true;
      callback(err); // future error callbacks will go to error handler

      callback = err_cb;
    } else if (proxy.count === 0 && !bail) {
      callback(null, result);
    }
  }
}

function noop() {}

/***/ }),

/***/ "./node_modules/arraybuffer.slice/index.js":
/*!*************************************************!*\
  !*** ./node_modules/arraybuffer.slice/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */
module.exports = function (arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) {
    return arraybuffer.slice(start, end);
  }

  if (start < 0) {
    start += bytes;
  }

  if (end < 0) {
    end += bytes;
  }

  if (end > bytes) {
    end = bytes;
  }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);

  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }

  return result.buffer;
};

/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


/**
 * Expose `Backoff`.
 */
module.exports = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */


Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */


Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */


Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */


Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function (chars) {
  "use strict";

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;

      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i + 1]);
      encoded3 = chars.indexOf(base64[i + 2]);
      encoded4 = chars.indexOf(base64[i + 3]);
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

/***/ }),

/***/ "./node_modules/blob/index.js":
/*!************************************!*\
  !*** ./node_modules/blob/index.js ***!
  \************************************/
/***/ ((module) => {

"use strict";


/**
 * Create a blob builder even when vendor prefixes exist
 */
var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : false;
/**
 * Check if Blob constructor is supported
 */

var blobSupported = function () {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch (e) {
    return false;
  }
}();
/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */


var blobSupportsArrayBufferView = blobSupported && function () {
  try {
    var b = new Blob([new Uint8Array([1, 2])]);
    return b.size === 2;
  } catch (e) {
    return false;
  }
}();
/**
 * Check if BlobBuilder is supported
 */


var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function (chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer; // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer

      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};
  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function (part) {
    bb.append(part);
  });
  return options.type ? bb.getBlob(options.type) : bb.getBlob();
}

;

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
}

;

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = function () {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
}();

/***/ }),

/***/ "./node_modules/component-bind/index.js":
/*!**********************************************!*\
  !*** ./node_modules/component-bind/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


/**
 * Slice reference.
 */
var slice = [].slice;
/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function (obj, fn) {
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function () {
    return fn.apply(obj, args.concat(slice.call(arguments)));
  };
};

/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * Expose `Emitter`.
 */
if (true) {
  module.exports = Emitter;
}
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */


function Emitter(obj) {
  if (obj) return mixin(obj);
}

;
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  } // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.


  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */


Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ "./node_modules/component-inherit/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-inherit/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (a, b) {
  var fn = function () {};

  fn.prototype = b.prototype;
  a.prototype = new fn();
  a.prototype.constructor = a;
};

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/***/ }),

/***/ "./node_modules/debug/src/debug.js":
/*!*****************************************!*\
  !*** ./node_modules/debug/src/debug.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
/**
 * Active `debug` instances.
 */

exports.instances = [];
/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */


function createDebug(namespace) {
  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;
    var self = debug; // set `diff` timestamp

    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr; // turn the `arguments` into a proper Array

    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    } // apply any `formatters` transformations


    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];

      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

        args.splice(index, 1);
        index--;
      }

      return match;
    }); // apply env-specific formatting (colors, etc.)

    exports.formatArgs.call(self, args);
    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy; // env-specific initialization logic for debug instances

  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);
  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);

  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */


function enable(namespaces) {
  exports.save(namespaces);
  exports.names = [];
  exports.skips = [];
  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings

    namespaces = split[i].replace(/\*/g, '.*?');

    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}
/**
 * Disable debug output.
 *
 * @api public
 */


function disable() {
  exports.enable('');
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */


function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }

  var i, len;

  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }

  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }

  return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */


function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "./node_modules/detect-browser/index.js":
/*!**********************************************!*\
  !*** ./node_modules/detect-browser/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var BrowserInfo =
/** @class */
function () {
  function BrowserInfo(name, version, os) {
    this.name = name;
    this.version = version;
    this.os = os;
  }

  return BrowserInfo;
}();

exports.BrowserInfo = BrowserInfo;

var NodeInfo =
/** @class */
function () {
  function NodeInfo(version) {
    this.version = version;
    this.name = 'node';
    this.os = process.platform;
  }

  return NodeInfo;
}();

exports.NodeInfo = NodeInfo;

var BotInfo =
/** @class */
function () {
  function BotInfo() {
    this.bot = true; // NOTE: deprecated test name instead

    this.name = 'bot';
    this.version = null;
    this.os = null;
  }

  return BotInfo;
}();

exports.BotInfo = BotInfo; // tslint:disable-next-line:max-line-length

var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [['aol', /AOLShield\/([0-9\._]+)/], ['edge', /Edge\/([0-9\._]+)/], ['edge-ios', /EdgiOS\/([0-9\._]+)/], ['yandexbrowser', /YaBrowser\/([0-9\._]+)/], ['vivaldi', /Vivaldi\/([0-9\.]+)/], ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/], ['samsung', /SamsungBrowser\/([0-9\.]+)/], ['silk', /\bSilk\/([0-9._-]+)\b/], ['miui', /MiuiBrowser\/([0-9\.]+)$/], ['beaker', /BeakerBrowser\/([0-9\.]+)/], ['edge-chromium', /Edg\/([0-9\.]+)/], ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/], ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/], ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/], ['fxios', /FxiOS\/([0-9\.]+)/], ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/], ['opera', /Opera\/([0-9\.]+)(?:\s|$)/], ['opera', /OPR\/([0-9\.]+)(:?\s|$)/], ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ['ie', /MSIE\s(7\.0)/], ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/], ['android', /Android\s([0-9\.]+)/], ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/], ['safari', /Version\/([0-9\._]+).*Safari/], ['facebook', /FBAV\/([0-9\.]+)/], ['instagram', /Instagram\s([0-9\.]+)/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ['searchbot', SEARCHBOX_UA_REGEX]];
var operatingSystemRules = [['iOS', /iP(hone|od|ad)/], ['Android OS', /Android/], ['BlackBerry OS', /BlackBerry|BB10/], ['Windows Mobile', /IEMobile/], ['Amazon OS', /Kindle/], ['Windows 3.11', /Win16/], ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/], ['Windows 98', /(Windows 98)|(Win98)/], ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/], ['Windows XP', /(Windows NT 5.1)|(Windows XP)/], ['Windows Server 2003', /(Windows NT 5.2)/], ['Windows Vista', /(Windows NT 6.0)/], ['Windows 7', /(Windows NT 6.1)/], ['Windows 8', /(Windows NT 6.2)/], ['Windows 8.1', /(Windows NT 6.3)/], ['Windows 10', /(Windows NT 10.0)/], ['Windows ME', /Windows ME/], ['Open BSD', /OpenBSD/], ['Sun OS', /SunOS/], ['Chrome OS', /CrOS/], ['Linux', /(Linux)|(X11)/], ['Mac OS', /(Mac_PowerPC)|(Macintosh)/], ['QNX', /QNX/], ['BeOS', /BeOS/], ['OS/2', /OS\/2/], ['Search Bot', SEARCHBOT_OS_REGEX]];

function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }

  if (typeof navigator !== 'undefined') {
    return parseUserAgent(navigator.userAgent);
  }

  return getNodeVersion();
}

exports.detect = detect;

function parseUserAgent(ua) {
  // opted for using reduce here rather than Array#first with a regex.test call
  // this is primarily because using the reduce we only perform the regex
  // execution once rather than once for the test and for the exec again below
  // probably something that needs to be benchmarked though
  var matchedRule = ua !== '' && userAgentRules.reduce(function (matched, _a) {
    var browser = _a[0],
        regex = _a[1];

    if (matched) {
      return matched;
    }

    var uaMatch = regex.exec(ua);
    return !!uaMatch && [browser, uaMatch];
  }, false);

  if (!matchedRule) {
    return null;
  }

  var name = matchedRule[0],
      match = matchedRule[1];

  if (name === 'searchbot') {
    return new BotInfo();
  }

  var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);

  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
    }
  } else {
    versionParts = [];
  }

  return new BrowserInfo(name, versionParts.join('.'), detectOS(ua));
}

exports.parseUserAgent = parseUserAgent;

function detectOS(ua) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a = operatingSystemRules[ii],
        os = _a[0],
        regex = _a[1];
    var match = regex.test(ua);

    if (match) {
      return os;
    }
  }

  return null;
}

exports.detectOS = detectOS;

function getNodeVersion() {
  var isNode = typeof process !== 'undefined' && process.version;
  return isNode ? new NodeInfo(process.version.slice(1)) : null;
}

exports.getNodeVersion = getNodeVersion;

function createVersionParts(count) {
  var output = [];

  for (var ii = 0; ii < count; ii++) {
    output.push('0');
  }

  return output;
}

/***/ }),

/***/ "./node_modules/engine.io-client/lib/globalThis.browser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/globalThis.browser.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
  if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else {
    return Function('return this')(); // eslint-disable-line no-new-func
  }
}();

/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");
/**
 * Exports parser
 *
 * @api public
 *
 */

module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * Module dependencies.
 */
var transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:socket');

var index = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");
/**
 * Module exports.
 */


module.exports = Socket;
/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);
  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure : typeof location !== 'undefined' && 'https:' === location.protocol;

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname || (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port ? location.port : this.secure ? 443 : 80);
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.withCredentials = false !== opts.withCredentials;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
  if (true === this.perMessageDeflate) this.perMessageDeflate = {};

  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  } // SSL options for Node.js client


  this.pfx = opts.pfx || undefined;
  this.key = opts.key || undefined;
  this.passphrase = opts.passphrase || undefined;
  this.cert = opts.cert || undefined;
  this.ca = opts.ca || undefined;
  this.ciphers = opts.ciphers || undefined;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode; // detect ReactNative environment

  this.isReactNative = typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative'; // other options for Node.js or ReactNative client

  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  } // set on handshake


  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null; // set on heartbeat

  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;
  this.open();
}

Socket.priorWebsocketSuccess = false;
/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);
/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
Socket.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
Socket.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query); // append engine.io protocol identifier

  query.EIO = parser.protocol; // transport name

  query.transport = name; // per-transport options

  var options = this.transportOptions[name] || {}; // session id if we already have one

  if (this.id) query.sid = this.id;
  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    withCredentials: options.withCredentials || this.withCredentials,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void 0,
    isReactNative: this.isReactNative
  });
  return transport;
};

function clone(obj) {
  var o = {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }

  return o;
}
/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */


Socket.prototype.open = function () {
  var transport;

  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }

  this.readyState = 'opening'; // Retry with the next transport if the transport is disabled (jsonp: false)

  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};
/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */


Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  } // set up transport


  this.transport = transport; // set up transport listeners

  transport.on('drain', function () {
    self.onDrain();
  }).on('packet', function (packet) {
    self.onPacket(packet);
  }).on('error', function (e) {
    self.onError(e);
  }).on('close', function () {
    self.onClose('transport close');
  });
};
/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */


Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, {
    probe: 1
  });
  var failed = false;
  var self = this;
  Socket.priorWebsocketSuccess = false;

  function onTransportOpen() {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }

    if (failed) return;
    debug('probe transport "%s" opened', name);
    transport.send([{
      type: 'ping',
      data: 'probe'
    }]);
    transport.once('packet', function (msg) {
      if (failed) return;

      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;
        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');
          cleanup();
          self.setTransport(transport);
          transport.send([{
            type: 'upgrade'
          }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return; // Any callback called by transport should be ignored since now

    failed = true;
    cleanup();
    transport.close();
    transport = null;
  } // Handle any error that happens while probing


  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;
    freezeTransport();
    debug('probe transport "%s" failed because of error: %s', name, err);
    self.emit('upgradeError', error);
  }

  function onTransportClose() {
    onerror('transport closed');
  } // When the socket is closed while we're probing


  function onclose() {
    onerror('socket closed');
  } // When the socket is upgraded while we're probing


  function onupgrade(to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  } // Remove all listeners on the transport and on self


  function cleanup() {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);
  this.once('close', onclose);
  this.once('upgrading', onupgrade);
  transport.open();
};
/**
 * Called when connection is deemed open.
 *
 * @api public
 */


Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush(); // we check for `readyState` in case an `open`
  // listener already closed the socket

  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');

    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};
/**
 * Handles a packet.
 *
 * @api private
 */


Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
    this.emit('packet', packet); // Socket is live - any packet counts

    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};
/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */


Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen(); // In case open handler closes socket

  if ('closed' === this.readyState) return;
  this.setPing(); // Prolong liveness of socket on heartbeat

  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};
/**
 * Resets ping timeout.
 *
 * @api private
 */


Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || self.pingInterval + self.pingTimeout);
};
/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */


Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};
/**
* Sends a ping packet.
*
* @api private
*/


Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};
/**
 * Called on `drain` event
 *
 * @api private
 */


Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`

  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};
/**
 * Flush write buffers.
 *
 * @api private
 */


Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`

    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};
/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */


Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};
/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */


Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;
  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};
/**
 * Closes the connection.
 *
 * @api private
 */


Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';
    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close() {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose() {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade() {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};
/**
 * Called upon transport error
 *
 * @api private
 */


Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};
/**
 * Called upon transport close.
 *
 * @api private
 */


Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this; // clear timers

    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

    this.transport.removeAllListeners('close'); // ensure transport won't stay open

    this.transport.close(); // ignore further transport communication

    this.transport.removeAllListeners(); // set ready state

    this.readyState = 'closed'; // clear session id

    this.id = null; // emit close event

    this.emit('close', reason, desc); // clean buffers after, so users can still
    // grab the buffers on `close` event

    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};
/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */


Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];

  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }

  return filteredUpgrades;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * Module dependencies.
 */
var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
/**
 * Module exports.
 */


module.exports = Transport;
/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport(opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode; // results of ReactNative environment detection

  this.isReactNative = opts.isReactNative; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}
/**
 * Mix in `Emitter`.
 */


Emitter(Transport.prototype);
/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};
/**
 * Opens the transport.
 *
 * @api public
 */


Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};
/**
 * Closes the transport.
 *
 * @api private
 */


Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};
/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */


Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};
/**
 * Called upon open
 *
 * @api private
 */


Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};
/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */


Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};
/**
 * Called with a decoded packet.
 */


Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon close.
 *
 * @api private
 */


Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


/**
 * Module dependencies
 */
var XMLHttpRequest = __webpack_require__(/*! ./xmlhttprequest */ "./node_modules/engine.io-client/lib/transports/xmlhttprequest.browser.js");

var XHR = __webpack_require__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");

var JSONP = __webpack_require__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");

var websocket = __webpack_require__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");
/**
 * Export transports.
 */


exports.polling = polling;
exports.websocket = websocket;
/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * Module requirements.
 */
var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

var globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");
/**
 * Module exports.
 */


module.exports = JSONPPolling;
/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;
/**
 * Global JSONP callbacks.
 */

var callbacks;
/**
 * Noop.
 */

function empty() {}
/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */


function JSONPPolling(opts) {
  Polling.call(this, opts);
  this.query = this.query || {}; // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution

  if (!callbacks) {
    // we need to consider multiple engines in the same page
    callbacks = globalThis.___eio = globalThis.___eio || [];
  } // callback identifier


  this.index = callbacks.length; // add callback to jsonp global

  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  }); // append to query string

  this.query.j = this.index; // prevent spurious errors from being emitted when the window is unloaded

  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}
/**
 * Inherits from Polling.
 */


inherit(JSONPPolling, Polling);
/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;
/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();

  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];

  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }

  this.script = script;
  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};
/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */


JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;
    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);
    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete() {
    initIframe();
    fn();
  }

  function initIframe() {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;
    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe(); // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side

  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* global attachEvent */

/**
 * Module requirements.
 */
var XMLHttpRequest = __webpack_require__(/*! ./xmlhttprequest */ "./node_modules/engine.io-client/lib/transports/xmlhttprequest.browser.js");

var Polling = __webpack_require__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:polling-xhr');

var globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");
/**
 * Module exports.
 */


module.exports = XHR;
module.exports.Request = Request;
/**
 * Empty function
 */

function empty() {}
/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */


function XHR(opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = typeof location !== 'undefined' && opts.hostname !== location.hostname || port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}
/**
 * Inherits from Polling.
 */


inherit(XHR, Polling);
/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;
/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;
  opts.withCredentials = this.withCredentials; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout; // other options for Node.js client

  opts.extraHeaders = this.extraHeaders;
  return new Request(opts);
};
/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */


XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({
    method: 'POST',
    data: data,
    isBinary: isBinary
  });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};
/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */


function Request(opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials;
  this.requestTimeout = opts.requestTimeout; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.create();
}
/**
 * Mix in `Emitter`.
 */


Emitter(Request.prototype);
/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = {
    agent: this.agent,
    xdomain: this.xd,
    xscheme: this.xs,
    enablesXDR: this.enablesXDR
  }; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);

    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {} // ie6 check


    if ('withCredentials' in xhr) {
      xhr.withCredentials = this.withCredentials;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };

      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');

            if (self.supportsBinary && contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }

        if (4 !== xhr.readyState) return;

        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(typeof xhr.status === 'number' ? xhr.status : 0);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};
/**
 * Called upon successful response.
 *
 * @api private
 */


Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};
/**
 * Called if we have data.
 *
 * @api private
 */


Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};
/**
 * Called upon error.
 *
 * @api private
 */


Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};
/**
 * Cleans up house.
 *
 * @api private
 */


Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  } // xmlhttprequest


  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};
/**
 * Called upon load.
 *
 * @api private
 */


Request.prototype.onLoad = function () {
  var data;

  try {
    var contentType;

    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}

    if (contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }

  if (null != data) {
    this.onData(data);
  }
};
/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */


Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};
/**
 * Aborts the request.
 *
 * @api public
 */


Request.prototype.abort = function () {
  this.cleanup();
};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */


Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in globalThis ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * Module dependencies.
 */
var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:polling');
/**
 * Module exports.
 */


module.exports = Polling;
/**
 * Is XHR2 supported?
 */

var hasXHR2 = function () {
  var XMLHttpRequest = __webpack_require__(/*! ./xmlhttprequest */ "./node_modules/engine.io-client/lib/transports/xmlhttprequest.browser.js");

  var xhr = new XMLHttpRequest({
    xdomain: false
  });
  return null != xhr.responseType;
}();
/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */


function Polling(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }

  Transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


inherit(Polling, Transport);
/**
 * Transport name.
 */

Polling.prototype.name = 'polling';
/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};
/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */


Polling.prototype.pause = function (onPause) {
  var self = this;
  this.readyState = 'pausing';

  function pause() {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};
/**
 * Starts polling cycle.
 *
 * @api public
 */


Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};
/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */


Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);

  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState && packet.type === 'open') {
      self.onOpen();
    } // if its a close packet, we close the ongoing requests


    if ('close' === packet.type) {
      self.onClose();
      return false;
    } // otherwise bypass onData and handle the message


    self.onPacket(packet);
  }; // decode payload


  parser.decodePayload(data, this.socket.binaryType, callback); // if an event did not trigger closing

  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};
/**
 * For polling, send a close packet.
 *
 * @api private
 */


Polling.prototype.doClose = function () {
  var self = this;

  function close() {
    debug('writing close packet');
    self.write([{
      type: 'close'
    }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};
/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */


Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = ''; // cache busting is forced

  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query); // avoid port if default for schema

  if (this.port && ('https' === schema && Number(this.port) !== 443 || 'http' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // prepend ? to query


  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * Module dependencies.
 */
var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var inherit = __webpack_require__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:websocket');

var BrowserWebSocket, NodeWebSocket;

if (typeof WebSocket !== 'undefined') {
  BrowserWebSocket = WebSocket;
} else if (typeof self !== 'undefined') {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
}

if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __webpack_require__(/*! ws */ "?1bcf");
  } catch (e) {}
}
/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */


var WebSocketImpl = BrowserWebSocket || NodeWebSocket;
/**
 * Module exports.
 */

module.exports = WS;
/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (forceBase64) {
    this.supportsBinary = false;
  }

  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;

  if (!this.usingBrowserWebSocket) {
    WebSocketImpl = NodeWebSocket;
  }

  Transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


inherit(WS, Transport);
/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';
/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;
/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {};

  if (!this.isReactNative) {
    opts.agent = this.agent;
    opts.perMessageDeflate = this.perMessageDeflate; // SSL options for Node.js client

    opts.pfx = this.pfx;
    opts.key = this.key;
    opts.passphrase = this.passphrase;
    opts.cert = this.cert;
    opts.ca = this.ca;
    opts.ciphers = this.ciphers;
    opts.rejectUnauthorized = this.rejectUnauthorized;
  }

  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }

  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? protocols ? new WebSocketImpl(uri, protocols) : new WebSocketImpl(uri) : new WebSocketImpl(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};
/**
 * Adds event listeners to the socket
 *
 * @api private
 */


WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };

  this.ws.onclose = function () {
    self.onClose();
  };

  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };

  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};
/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */


WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false; // encodePacket efficient as it uses WS framing
  // no need for encodePayload

  var total = packets.length;

  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};

          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;

            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        } // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error


        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done() {
    self.emit('flush'); // fake drain
    // defer to next tick to allow Socket to clear writeBuffer

    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};
/**
 * Called upon close
 *
 * @api private
 */


WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};
/**
 * Closes socket.
 *
 * @api private
 */


WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = ''; // avoid port if default for schema

  if (this.port && ('wss' === schema && Number(this.port) !== 443 || 'ws' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // append timestamp to URI


  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  } // communicate binary support capabilities


  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query); // prepend ? to query

  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};
/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */


WS.prototype.check = function () {
  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
};

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/xmlhttprequest.browser.js":
/*!********************************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/xmlhttprequest.browser.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// browser shim for xmlhttprequest module
var hasCORS = __webpack_require__(/*! has-cors */ "./node_modules/has-cors/index.js");

var globalThis = __webpack_require__(/*! ../globalThis */ "./node_modules/engine.io-client/lib/globalThis.browser.js");

module.exports = function (opts) {
  var xdomain = opts.xdomain; // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

  var xscheme = opts.xscheme; // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217

  var enablesXDR = opts.enablesXDR; // XMLHttpRequest can be disabled on IE

  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {} // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example


  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new globalThis[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) {}
  }
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/browser.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


/**
 * Module dependencies.
 */
var keys = __webpack_require__(/*! ./keys */ "./node_modules/engine.io-parser/lib/keys.js");

var hasBinary = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");

var sliceBuffer = __webpack_require__(/*! arraybuffer.slice */ "./node_modules/arraybuffer.slice/index.js");

var after = __webpack_require__(/*! after */ "./node_modules/after/index.js");

var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/engine.io-parser/lib/utf8.js");

var base64encoder;

if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}
/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */


var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */

var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */

var dontSendBlobs = isAndroid || isPhantomJS;
/**
 * Current protocol version.
 */

exports.protocol = 3;
/**
 * Packet types.
 */

var packets = exports.packets = {
  open: 0 // non-ws
  ,
  close: 1 // non-ws
  ,
  ping: 2,
  pong: 3,
  message: 4,
  upgrade: 5,
  noop: 6
};
var packetslist = keys(packets);
/**
 * Premade error packet.
 */

var err = {
  type: 'error',
  data: 'parser error'
};
/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(/*! blob */ "./node_modules/blob/index.js");
/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */


exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  } // might be an object with { base64: true, data: dataAsBase64String }


  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  } // Sending data as a utf-8 string


  var encoded = packets[packet.type]; // data fragment is optional

  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), {
      strict: false
    }) : String(packet.data);
  }

  return callback('' + encoded);
};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}
/**
 * Encode packet helpers for binary types
 */


function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);
  resultBuffer[0] = packets[packet.type];

  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i + 1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();

  fr.onload = function () {
    exports.encodePacket({
      type: packet.type,
      data: fr.result
    }, supportsBinary, true, callback);
  };

  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);
  return callback(blob);
}
/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */


exports.encodeBase64Packet = function (packet, callback) {
  var message = 'b' + exports.packets[packet.type];

  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();

    fr.onload = function () {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };

    return fr.readAsDataURL(packet.data);
  }

  var b64data;

  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);

    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }

    b64data = String.fromCharCode.apply(null, basic);
  }

  message += btoa(b64data);
  return callback(message);
};
/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */


exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  } // String data


  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);

      if (data === false) {
        return err;
      }
    }

    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return {
        type: packetslist[type],
        data: data.substring(1)
      };
    } else {
      return {
        type: packetslist[type]
      };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);

  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }

  return {
    type: packetslist[type],
    data: rest
  };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, {
      strict: false
    });
  } catch (e) {
    return false;
  }

  return data;
}
/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */


exports.decodeBase64Packet = function (msg, binaryType) {
  var type = packetslist[msg.charAt(0)];

  if (!base64encoder) {
    return {
      type: type,
      data: {
        base64: true,
        data: msg.substr(1)
      }
    };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return {
    type: type,
    data: data
  };
};
/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */


exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function (message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function (err, results) {
    return callback(results.join(''));
  });
};
/**
 * Async array map using after
 */


function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function (i, el, cb) {
    each(el, function (error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}
/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */


exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;

  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '',
      n,
      msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || length != (n = Number(length))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    } // advance cursor


    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }
};
/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */


exports.encodePayloadAsArrayBuffer = function (packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function (data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function (err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function (acc, p) {
      var len;

      if (typeof p === 'string') {
        len = p.length;
      } else {
        len = p.byteLength;
      }

      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);
    var resultArray = new Uint8Array(totalLength);
    var bufferIndex = 0;
    encodedPackets.forEach(function (p) {
      var isString = typeof p === 'string';
      var ab = p;

      if (isString) {
        var view = new Uint8Array(p.length);

        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }

        ab = view.buffer;
      }

      if (isString) {
        // not true binary
        resultArray[bufferIndex++] = 0;
      } else {
        // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();

      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }

      resultArray[bufferIndex++] = 255;
      var view = new Uint8Array(ab);

      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });
    return callback(resultArray.buffer);
  });
};
/**
 * Encode as Blob
 */


exports.encodePayloadAsBlob = function (packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function (encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;

      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);

        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }

        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);

      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }

      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function (err, results) {
    return callback(new Blob(results));
  });
};
/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */


exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1;; i++) {
      if (tailArray[i] === 255) break; // 310 = char length of Number.MAX_VALUE

      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);
    var msg = sliceBuffer(bufferTail, 0, msgLength);

    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';

        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function (buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/keys.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */
module.exports = Object.keys || function keys(obj) {
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }

  return arr;
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/utf8.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/utf8.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


/*! https://mths.be/utf8js v2.1.2 by @mathias */
var stringFromCharCode = String.fromCharCode; // Taken from https://mths.be/punycode

function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  var value;
  var extra;

  while (counter < length) {
    value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // high surrogate, and there is a next character
      extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // low surrogate
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // unmatched surrogate; only append this code unit, in case the next
        // code unit is the high surrogate of a surrogate pair
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
} // Taken from https://mths.be/punycode


function ucs2encode(array) {
  var length = array.length;
  var index = -1;
  var value;
  var output = '';

  while (++index < length) {
    value = array[index];

    if (value > 0xFFFF) {
      value -= 0x10000;
      output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
      value = 0xDC00 | value & 0x3FF;
    }

    output += stringFromCharCode(value);
  }

  return output;
}

function checkScalarValue(codePoint, strict) {
  if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
    if (strict) {
      throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
    }

    return false;
  }

  return true;
}
/*--------------------------------------------------------------------------*/


function createByte(codePoint, shift) {
  return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
}

function encodeCodePoint(codePoint, strict) {
  if ((codePoint & 0xFFFFFF80) == 0) {
    // 1-byte sequence
    return stringFromCharCode(codePoint);
  }

  var symbol = '';

  if ((codePoint & 0xFFFFF800) == 0) {
    // 2-byte sequence
    symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
  } else if ((codePoint & 0xFFFF0000) == 0) {
    // 3-byte sequence
    if (!checkScalarValue(codePoint, strict)) {
      codePoint = 0xFFFD;
    }

    symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
    symbol += createByte(codePoint, 6);
  } else if ((codePoint & 0xFFE00000) == 0) {
    // 4-byte sequence
    symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
    symbol += createByte(codePoint, 12);
    symbol += createByte(codePoint, 6);
  }

  symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
  return symbol;
}

function utf8encode(string, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  var codePoints = ucs2decode(string);
  var length = codePoints.length;
  var index = -1;
  var codePoint;
  var byteString = '';

  while (++index < length) {
    codePoint = codePoints[index];
    byteString += encodeCodePoint(codePoint, strict);
  }

  return byteString;
}
/*--------------------------------------------------------------------------*/


function readContinuationByte() {
  if (byteIndex >= byteCount) {
    throw Error('Invalid byte index');
  }

  var continuationByte = byteArray[byteIndex] & 0xFF;
  byteIndex++;

  if ((continuationByte & 0xC0) == 0x80) {
    return continuationByte & 0x3F;
  } // If we end up here, it’s not a continuation byte


  throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
  var byte1;
  var byte2;
  var byte3;
  var byte4;
  var codePoint;

  if (byteIndex > byteCount) {
    throw Error('Invalid byte index');
  }

  if (byteIndex == byteCount) {
    return false;
  } // Read first byte


  byte1 = byteArray[byteIndex] & 0xFF;
  byteIndex++; // 1-byte sequence (no continuation bytes)

  if ((byte1 & 0x80) == 0) {
    return byte1;
  } // 2-byte sequence


  if ((byte1 & 0xE0) == 0xC0) {
    byte2 = readContinuationByte();
    codePoint = (byte1 & 0x1F) << 6 | byte2;

    if (codePoint >= 0x80) {
      return codePoint;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 3-byte sequence (may include unpaired surrogates)


  if ((byte1 & 0xF0) == 0xE0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;

    if (codePoint >= 0x0800) {
      return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 4-byte sequence


  if ((byte1 & 0xF8) == 0xF0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    byte4 = readContinuationByte();
    codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;

    if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
      return codePoint;
    }
  }

  throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;

function utf8decode(byteString, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  byteArray = ucs2decode(byteString);
  byteCount = byteArray.length;
  byteIndex = 0;
  var codePoints = [];
  var tmp;

  while ((tmp = decodeSymbol(strict)) !== false) {
    codePoints.push(tmp);
  }

  return ucs2encode(codePoints);
}

module.exports = {
  version: '2.1.2',
  encode: utf8encode,
  decode: utf8decode
};

/***/ }),

/***/ "./node_modules/has-binary2/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-binary2/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* global Blob File */

/*
 * Module requirements.
 */
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
/**
 * Module exports.
 */

module.exports = hasBinary;
/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }

    return false;
  }

  if (typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj) || typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
    return true;
  } // see: https://github.com/Automattic/has-binary/pull/4


  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */
try {
  module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";


var indexOf = [].indexOf;

module.exports = function (arr, obj) {
  if (indexOf) return arr.indexOf(obj);

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }

  return -1;
};

/***/ }),

/***/ "./node_modules/ip-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/ip-regex/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


const word = '[a-fA-F\\d:]';

const b = options => options && options.includeBoundaries ? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` : '';

const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
const v6seg = '[a-fA-F\\d]{1,4}';
const v6 = `
(?:
(?:${v6seg}:){7}(?:${v6seg}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6seg}:){5}(?::${v4}|(?::${v6seg}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6seg}:){4}(?:(?::${v6seg}){0,1}:${v4}|(?::${v6seg}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6seg}:){3}(?:(?::${v6seg}){0,2}:${v4}|(?::${v6seg}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6seg}:){2}(?:(?::${v6seg}){0,3}:${v4}|(?::${v6seg}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6seg}:){1}(?:(?::${v6seg}){0,4}:${v4}|(?::${v6seg}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful

const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
const v4exact = new RegExp(`^${v4}$`);
const v6exact = new RegExp(`^${v6}$`);

const ip = options => options && options.exact ? v46Exact : new RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, 'g');

ip.v4 = options => options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, 'g');

ip.v6 = options => options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, 'g');

module.exports = ip;

/***/ }),

/***/ "./node_modules/is-ip/index.js":
/*!*************************************!*\
  !*** ./node_modules/is-ip/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const ipRegex = __webpack_require__(/*! ip-regex */ "./node_modules/ip-regex/index.js");

const isIp = string => ipRegex({
  exact: true
}).test(string);

isIp.v4 = string => ipRegex.v4({
  exact: true
}).test(string);

isIp.v6 = string => ipRegex.v6({
  exact: true
}).test(string);

isIp.version = string => isIp(string) ? isIp.v4(string) ? 4 : 6 : undefined;

module.exports = isIp;

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/loglevel-plugin-prefix/lib/loglevel-plugin-prefix.js":
/*!***************************************************************************!*\
  !*** ./node_modules/loglevel-plugin-prefix/lib/loglevel-plugin-prefix.js ***!
  \***************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(void 0, function (root) {
  'use strict';

  var merge = function (target) {
    var i = 1;
    var length = arguments.length;
    var key;

    for (; i < length; i++) {
      for (key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          target[key] = arguments[i][key];
        }
      }
    }

    return target;
  };

  var defaults = {
    template: '[%t] %l:',
    levelFormatter: function (level) {
      return level.toUpperCase();
    },
    nameFormatter: function (name) {
      return name || 'root';
    },
    timestampFormatter: function (date) {
      return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
    },
    format: undefined
  };
  var loglevel;
  var configs = {};

  var reg = function (rootLogger) {
    if (!rootLogger || !rootLogger.getLogger) {
      throw new TypeError('Argument is not a root logger');
    }

    loglevel = rootLogger;
  };

  var apply = function (logger, config) {
    if (!logger || !logger.setLevel) {
      throw new TypeError('Argument is not a logger');
    }
    /* eslint-disable vars-on-top */


    var originalFactory = logger.methodFactory;
    var name = logger.name || '';
    var parent = configs[name] || configs[''] || defaults;
    /* eslint-enable vars-on-top */

    function methodFactory(methodName, logLevel, loggerName) {
      var originalMethod = originalFactory(methodName, logLevel, loggerName);
      var options = configs[loggerName] || configs[''];
      var hasTimestamp = options.template.indexOf('%t') !== -1;
      var hasLevel = options.template.indexOf('%l') !== -1;
      var hasName = options.template.indexOf('%n') !== -1;
      return function () {
        var content = '';
        var length = arguments.length;
        var args = Array(length);
        var key = 0;

        for (; key < length; key++) {
          args[key] = arguments[key];
        } // skip the root method for child loggers to prevent duplicate logic


        if (name || !configs[loggerName]) {
          /* eslint-disable vars-on-top */
          var timestamp = options.timestampFormatter(new Date());
          var level = options.levelFormatter(methodName);
          var lname = options.nameFormatter(loggerName);
          /* eslint-enable vars-on-top */

          if (options.format) {
            content += options.format(level, lname, timestamp);
          } else {
            content += options.template;

            if (hasTimestamp) {
              content = content.replace(/%t/, timestamp);
            }

            if (hasLevel) content = content.replace(/%l/, level);
            if (hasName) content = content.replace(/%n/, lname);
          }

          if (args.length && typeof args[0] === 'string') {
            // concat prefix with first argument to support string substitutions
            args[0] = content + ' ' + args[0];
          } else {
            args.unshift(content);
          }
        }

        originalMethod.apply(undefined, args);
      };
    }

    if (!configs[name]) {
      logger.methodFactory = methodFactory;
    } // for remove inherited format option if template option preset


    config = config || {};
    if (config.template) config.format = undefined;
    configs[name] = merge({}, parent, config);
    logger.setLevel(logger.getLevel());

    if (!loglevel) {
      logger.warn('It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md');
    }

    return logger;
  };

  var api = {
    reg: reg,
    apply: apply
  };
  var save;

  if (root) {
    save = root.prefix;

    api.noConflict = function () {
      if (root.prefix === api) {
        root.prefix = save;
      }

      return api;
    };
  }

  return api;
});

/***/ }),

/***/ "./node_modules/loglevel/lib/loglevel.js":
/*!***********************************************!*\
  !*** ./node_modules/loglevel/lib/loglevel.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
  "use strict";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(void 0, function () {
  "use strict"; // Slightly dubious tricks to cut down minimized file size

  var noop = function () {};

  var undefinedType = "undefined";
  var isIE = typeof window !== undefinedType && typeof window.navigator !== undefinedType && /Trident\/|MSIE /.test(window.navigator.userAgent);
  var logMethods = ["trace", "debug", "info", "warn", "error"]; // Cross-browser bind equivalent that works at least back to IE6

  function bindMethod(obj, methodName) {
    var method = obj[methodName];

    if (typeof method.bind === 'function') {
      return method.bind(obj);
    } else {
      try {
        return Function.prototype.bind.call(method, obj);
      } catch (e) {
        // Missing bind shim or IE8 + Modernizr, fallback to wrapping
        return function () {
          return Function.prototype.apply.apply(method, [obj, arguments]);
        };
      }
    }
  } // Trace() doesn't print the message in IE, so for that case we need to wrap it


  function traceForIE() {
    if (console.log) {
      if (console.log.apply) {
        console.log.apply(console, arguments);
      } else {
        // In old IE, native console methods themselves don't have apply().
        Function.prototype.apply.apply(console.log, [console, arguments]);
      }
    }

    if (console.trace) console.trace();
  } // Build the best logging method possible for this env
  // Wherever possible we want to bind, not wrap, to preserve stack traces


  function realMethod(methodName) {
    if (methodName === 'debug') {
      methodName = 'log';
    }

    if (typeof console === undefinedType) {
      return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
    } else if (methodName === 'trace' && isIE) {
      return traceForIE;
    } else if (console[methodName] !== undefined) {
      return bindMethod(console, methodName);
    } else if (console.log !== undefined) {
      return bindMethod(console, 'log');
    } else {
      return noop;
    }
  } // These private functions always need `this` to be set properly


  function replaceLoggingMethods(level, loggerName) {
    /*jshint validthis:true */
    for (var i = 0; i < logMethods.length; i++) {
      var methodName = logMethods[i];
      this[methodName] = i < level ? noop : this.methodFactory(methodName, level, loggerName);
    } // Define log.log as an alias for log.debug


    this.log = this.debug;
  } // In old IE versions, the console isn't present until you first open it.
  // We build realMethod() replacements here that regenerate logging methods


  function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
    return function () {
      if (typeof console !== undefinedType) {
        replaceLoggingMethods.call(this, level, loggerName);
        this[methodName].apply(this, arguments);
      }
    };
  } // By default, we use closely bound real methods wherever possible, and
  // otherwise we wait for a console to appear, and then try again.


  function defaultMethodFactory(methodName, level, loggerName) {
    /*jshint validthis:true */
    return realMethod(methodName) || enableLoggingWhenConsoleArrives.apply(this, arguments);
  }

  function Logger(name, defaultLevel, factory) {
    var self = this;
    var currentLevel;
    defaultLevel = defaultLevel == null ? "WARN" : defaultLevel;
    var storageKey = "loglevel";

    if (typeof name === "string") {
      storageKey += ":" + name;
    } else if (typeof name === "symbol") {
      storageKey = undefined;
    }

    function persistLevelIfPossible(levelNum) {
      var levelName = (logMethods[levelNum] || 'silent').toUpperCase();
      if (typeof window === undefinedType || !storageKey) return; // Use localStorage if available

      try {
        window.localStorage[storageKey] = levelName;
        return;
      } catch (ignore) {} // Use session cookie as fallback


      try {
        window.document.cookie = encodeURIComponent(storageKey) + "=" + levelName + ";";
      } catch (ignore) {}
    }

    function getPersistedLevel() {
      var storedLevel;
      if (typeof window === undefinedType || !storageKey) return;

      try {
        storedLevel = window.localStorage[storageKey];
      } catch (ignore) {} // Fallback to cookies if local storage gives us nothing


      if (typeof storedLevel === undefinedType) {
        try {
          var cookie = window.document.cookie;
          var location = cookie.indexOf(encodeURIComponent(storageKey) + "=");

          if (location !== -1) {
            storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
          }
        } catch (ignore) {}
      } // If the stored level is not valid, treat it as if nothing was stored.


      if (self.levels[storedLevel] === undefined) {
        storedLevel = undefined;
      }

      return storedLevel;
    }

    function clearPersistedLevel() {
      if (typeof window === undefinedType || !storageKey) return; // Use localStorage if available

      try {
        window.localStorage.removeItem(storageKey);
        return;
      } catch (ignore) {} // Use session cookie as fallback


      try {
        window.document.cookie = encodeURIComponent(storageKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      } catch (ignore) {}
    }
    /*
     *
     * Public logger API - see https://github.com/pimterry/loglevel for details
     *
     */


    self.name = name;
    self.levels = {
      "TRACE": 0,
      "DEBUG": 1,
      "INFO": 2,
      "WARN": 3,
      "ERROR": 4,
      "SILENT": 5
    };
    self.methodFactory = factory || defaultMethodFactory;

    self.getLevel = function () {
      return currentLevel;
    };

    self.setLevel = function (level, persist) {
      if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
        level = self.levels[level.toUpperCase()];
      }

      if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
        currentLevel = level;

        if (persist !== false) {
          // defaults to true
          persistLevelIfPossible(level);
        }

        replaceLoggingMethods.call(self, level, name);

        if (typeof console === undefinedType && level < self.levels.SILENT) {
          return "No console available for logging";
        }
      } else {
        throw "log.setLevel() called with invalid level: " + level;
      }
    };

    self.setDefaultLevel = function (level) {
      defaultLevel = level;

      if (!getPersistedLevel()) {
        self.setLevel(level, false);
      }
    };

    self.resetLevel = function () {
      self.setLevel(defaultLevel, false);
      clearPersistedLevel();
    };

    self.enableAll = function (persist) {
      self.setLevel(self.levels.TRACE, persist);
    };

    self.disableAll = function (persist) {
      self.setLevel(self.levels.SILENT, persist);
    }; // Initialize with the right level


    var initialLevel = getPersistedLevel();

    if (initialLevel == null) {
      initialLevel = defaultLevel;
    }

    self.setLevel(initialLevel, false);
  }
  /*
   *
   * Top-level API
   *
   */


  var defaultLogger = new Logger();
  var _loggersByName = {};

  defaultLogger.getLogger = function getLogger(name) {
    if (typeof name !== "symbol" && typeof name !== "string" || name === "") {
      throw new TypeError("You must supply a name when creating a logger.");
    }

    var logger = _loggersByName[name];

    if (!logger) {
      logger = _loggersByName[name] = new Logger(name, defaultLogger.getLevel(), defaultLogger.methodFactory);
    }

    return logger;
  }; // Grab the current global log variable in case of overwrite


  var _log = typeof window !== undefinedType ? window.log : undefined;

  defaultLogger.noConflict = function () {
    if (typeof window !== undefinedType && window.log === defaultLogger) {
      window.log = _log;
    }

    return defaultLogger;
  };

  defaultLogger.getLoggers = function getLoggers() {
    return _loggersByName;
  }; // ES6 default export, for compatibility


  defaultLogger['default'] = defaultLogger;
  return defaultLogger;
});

/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/***/ ((module) => {

"use strict";


/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, n, name) {
  if (ms < n) {
    return;
  }

  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }

  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),

/***/ "./node_modules/nexmo-client/dist/application.js":
/*!*******************************************************!*\
  !*** ./node_modules/nexmo-client/dist/application.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Application Object Model
 *
 * Copyright (c) Nexmo Inc.
*/

const WildEmitter = __webpack_require__(/*! wildemitter */ "./node_modules/wildemitter/wildemitter.js");

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");

const nexmoClientError_1 = __webpack_require__(/*! ./nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");

const user_1 = __importDefault(__webpack_require__(/*! ./user */ "./node_modules/nexmo-client/dist/user.js"));

const conversation_1 = __importDefault(__webpack_require__(/*! ./conversation */ "./node_modules/nexmo-client/dist/conversation.js"));

const nxmCall_1 = __importDefault(__webpack_require__(/*! ./modules/nxmCall */ "./node_modules/nexmo-client/dist/modules/nxmCall.js"));

const sip_events_1 = __importDefault(__webpack_require__(/*! ./handlers/sip_events */ "./node_modules/nexmo-client/dist/handlers/sip_events.js"));

const rtc_events_1 = __importDefault(__webpack_require__(/*! ./handlers/rtc_events */ "./node_modules/nexmo-client/dist/handlers/rtc_events.js"));

const application_events_1 = __importDefault(__webpack_require__(/*! ./handlers/application_events */ "./node_modules/nexmo-client/dist/handlers/application_events.js"));

const utils_1 = __importDefault(__webpack_require__(/*! ./utils */ "./node_modules/nexmo-client/dist/utils.js"));

const page_config_1 = __importDefault(__webpack_require__(/*! ./pages/page_config */ "./node_modules/nexmo-client/dist/pages/page_config.js"));

const conversations_page_1 = __importDefault(__webpack_require__(/*! ./pages/conversations_page */ "./node_modules/nexmo-client/dist/pages/conversations_page.js"));

const user_sessions_page_1 = __importDefault(__webpack_require__(/*! ./pages/user_sessions_page */ "./node_modules/nexmo-client/dist/pages/user_sessions_page.js"));

const events_queue_1 = __webpack_require__(/*! ./handlers/events_queue */ "./node_modules/nexmo-client/dist/handlers/events_queue.js");

const member_1 = __importDefault(__webpack_require__(/*! ./member */ "./node_modules/nexmo-client/dist/member.js"));

let sipEventHandler = null;
let rtcEventHandler = null;
let applicationEventsHandler = null;
/**
 * Core application class for the SDK.
 * Application is the parent object holding the list of conversations, the session object.
 * Provides methods to create conversations and retrieve a list of the user's conversations, while it holds the listeners for
 * user's invitations
 * @class Application
 * @param {NexmoClient} SDK session Object
 * @param {object} params
 * @example <caption>Accessing the list of conversations</caption>
 *  rtc.createSession(token).then((application) => {
 *    console.log(application.conversations);
 *    console.log(application.me.name, application.me.id);
 *  }).catch((error) => {
 *    console.error(error);
 *  });
 * @emits Application#member:invited
 * @emits Application#member:joined
 * @emits Application#NXM-errors
 * @emits Application#rtcstats:analytics
*/

class Application {
  constructor(session, params) {
    this.log = loglevel_1.getLogger(this.constructor.name);
    this.session = session;
    this.conversations = new Map();
    this.synced_conversations_count = 0;
    this.start_sync_time = 0;
    this.stop_sync_time = 0; // conversation_id, nxmCall

    this.calls = new Map(); // knocking_id, nxmCall

    this._call_draft_list = new Map();
    this.pageConfig = new page_config_1.default((session.config || {}).conversations_page_config);
    this.conversations_page_last = null;
    this.activeStreams = [];
    sipEventHandler = new sip_events_1.default(this);
    rtcEventHandler = new rtc_events_1.default(this);
    applicationEventsHandler = new application_events_1.default(this);
    this.me = null;
    Object.assign(this, params);
    WildEmitter.mixin(Application);
  }
  /**
   * Update Conversation instance or create a new one.
   *
   * Pre-created conversation exist from getConversations
   * like initialised templates. When we explicitly ask to
   * getConversation(), we receive members and other details
   *
   * @param {object} payload Conversation payload
   * @private
  */


  updateOrCreateConversation(payload) {
    const conversation = this.conversations.get(payload.id);

    if (conversation) {
      conversation._updateObjectInstance(payload);

      this.conversations.set(payload.id, conversation);
    } else {
      this.conversations.set(payload.id, new conversation_1.default(this, payload));
    }

    return this.conversations.get(payload.id);
  }
  /**
   * Application listening for member invited events.
   *
   * @event Application#member:invited
   *
   * @property {Member} member - The invited member
   * @property {NXMEvent} event - The invitation event
   *
   * @example <caption>listen for member invited events on Application level</caption>
   *  application.on("member:invited",(member, event) => {
   *    console.log("Invited to the conversation: " + event.conversation.display_name || event.conversation.name);
   *    // identify the sender.
   *    console.log("Invited by: " + member.invited_by);
   *    //accept an invitation.
   *    application.conversations.get(event.conversation.id).join();
   *    //decline the invitation.
   *     application.conversations.get(event.conversation.id).leave();
   *  });
  */

  /**
   * Application listening for member joined events.
   *
   * @event Application#member:joined
   *
   * @property {Member} member - the member that joined the conversation
   * @property {NXMEvent} event - the join event
   *
   * @example <caption>listen for member joined events on Application level</caption>
   *  application.on("member:joined",(member, event) => {
   *    console.log("JOINED", "Joined conversation: " + event.conversation.display_name || event.conversation.name);
   *  });
  */

  /**
     * Entry point for queing events in Application level
     * @private
  */


  async _enqueueEvent(response) {
    if (this.session.config.enableEventsQueue) {
      if (!this.eventsQueue) {
        this.eventsQueue = new events_queue_1.EventsQueue(event => this._handleEvent(event));
      }

      this.eventsQueue.enqueue(response, this);
    } else {
      this._handleEvent(response);
    }
  }
  /**
   * Entry point for events in Application level
   * @private
  */


  async _handleEvent(event) {
    var _a, _b, _c, _d, _e, _f, _g;

    const isEventFromMe = ((_a = event._embedded) === null || _a === void 0 ? void 0 : _a.from_user) ? ((_c = (_b = event._embedded) === null || _b === void 0 ? void 0 : _b.from_user) === null || _c === void 0 ? void 0 : _c.id) === ((_d = this.me) === null || _d === void 0 ? void 0 : _d.id) : ((_f = (_e = event.body) === null || _e === void 0 ? void 0 : _e.user) === null || _f === void 0 ? void 0 : _f.user_id) === ((_g = this.me) === null || _g === void 0 ? void 0 : _g.id);

    if (event.type.startsWith('sip')) {
      sipEventHandler._handleSipCallEvent(event);

      return event;
    }

    if (this.conversations.has(event.cid) && event.type !== "rtc:transfer") {
      if (event.type.startsWith('rtc')) {
        rtcEventHandler._handleRtcEvent(event);
      }

      this.conversations.get(event.cid)._handleEvent(event);

      if ((event.type === 'member:joined' || event.type === 'member:invited') && isEventFromMe) {
        this._handleApplicationEvent(event);
      }

      return event;
    } else {
      // if event has cid get the conversation you don't know about (case: joined by another user)
      if (event.cid) {
        try {
          let conversation;

          if (utils_1.default._isCallEvent(event)) {
            conversation = await this.getConversation(event.cid, Application.CONVERSATION_API_VERSION.v1);
          } else {
            conversation = await this.getConversation(event.cid, Application.CONVERSATION_API_VERSION.v3);
          }

          this.conversations.set(event.cid, conversation);
          await conversation._handleEvent(event);
          await this._handleApplicationEvent(event);

          if (event.type.startsWith("rtc")) {
            rtcEventHandler._handleRtcEvent(event);
          }

          return Promise.resolve(event);
        } catch (error) {
          this.log.error(error);
          return Promise.reject(error);
        }
      }
    }
  }
  /**
   * Update user's token that was generated when they were first authenticated.
   * @param {string} token - the new token
   * @returns {Promise}
  * @example <caption>listen for expired-token error events and then update the token on Application level</caption>
  * application.on('system:error:expired-token', 'NXM-errors', (error) => {
  * 	console.log('token expired');
  * 	application.updateToken(token);
  * });
  */


  async updateToken(token) {
    // SDK can be disconnected because of expired token
    // this lets us update token for next reconnection attempt
    if (this.session.connection && this.session.connection.disconnected) {
      this.session.config.token = token;
      this.session.connection.io.opts.query.token = token;
      return Promise.resolve();
    }

    const reqObj = {
      url: `${this.session.config.nexmo_api_url}/v0.2/sessions/${this.session.session_id}`,
      type: 'PUT',
      token
    };

    try {
      await utils_1.default.networkRequest(reqObj);

      if (this.me) {
        this.session.config.token = token;
        this.session.connection.io.opts.query.token = token;
      }
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Update the event to map local generated events
   * in case we need a more specific event to pass in the application listener
   * or f/w the event as it comes
   * @private
  */


  async _handleApplicationEvent(event) {
    try {
      this.log.debug("_handleApplicationEvent: ", {
        event
      });
      const processed_event = applicationEventsHandler.handleEvent(event);
      const conversation = this.conversations.get(event.cid);
      let member;

      if (conversation.members.has((processed_event || {}).from)) {
        member = conversation.members.get(processed_event.from);
      } else if (event.type === 'member:joined' || event.type === 'member:invited') {
        const params = { ...event.body,
          ...(event.from && {
            member_id: event.from
          })
        };
        member = new member_1.default(conversation, params);
      } else {
        try {
          member = await conversation.getMember(processed_event.from);
        } catch (error) {
          this.log.warn(`There is an error getting the member ${error}`);
        }
      }

      this.emit(processed_event.type, member, processed_event);
      return event;
    } catch (e) {
      this.log.error("_handleApplicationEvent: ", e);
      throw e;
    }
  }
  /**
   * Creates a call to specified user/s.
   * @classdesc creates a call between the defined users
   * @param {string[]} usernames - the user names for those we want to call
   * @returns {Promise<NXMCall>} a NXMCall object with all the call properties
   * @example <caption>Create a call with users</caption>
   *  application.on("call:status:changed", (nxmCall) => {
   *    if (nxmCall.status === nxmCall.CALL_STATUS.STARTED) {
   *		  console.log('the call has started');
   *		}
   *  });
   *
   *  application.inAppCall(usernames).then(() => {
   *    console.log('Calling user(s)...');
   *  }).catch((error) => {
   *    console.error(error);
   *  });
  */


  async inAppCall(usernames) {
    if (!usernames || !Array.isArray(usernames) || usernames.length === 0) {
      return Promise.reject(new nexmoClientError_1.NexmoClientError('error:application:call:params'));
    }

    try {
      const nxmCall = new nxmCall_1.default(this);
      await nxmCall.createCall(usernames);
      nxmCall.direction = nxmCall.CALL_DIRECTION.OUTBOUND;
      return nxmCall;
    } catch (error) {
      throw error;
    }
  }
  /**
   * Creates a call to phone a number.
   * The call object is created under application.calls when the call has started.
   * listen for it with application.on("call:status:changed")
   *
   * You don't need to start the stream, the SDK will play the audio for you
   *
   * @classdesc creates a call to a phone number
  * @param {string} user the phone number or the username you want to call
  * @param {string} [type="phone"] the type of the call you want to have. possible values "phone" or "app" (default is "phone")
  * @param {object} [custom_data] custom data to be included in the call object, i.e. { yourCustomKey: yourCustomValue }
   * @returns {Promise<NXMCall>}
   * @example <caption>Create a call to a phone</caption>
   *  application.on("call:status:changed", (nxmCall) => {
   *    if (nxmCall.status === nxmCall.CALL_STATUS.STARTED) {
   *		  console.log('the call has started');
  *		}
  *  });
  *
   *  application.callServer(phone_number).then((nxmCall) => {
   *    console.log('Calling phone ' + phone_number);
  *    console.log('Call Object ': nxmCall);
   *  }).catch((error) => {
  *    console.error(error);
  *  });
  */


  async callServer(user, type = 'phone', custom_data = {}) {
    try {
      const nxmCall = new nxmCall_1.default(this);
      nxmCall.direction = nxmCall.CALL_DIRECTION.OUTBOUND;
      await nxmCall.createServerCall(user, type, custom_data);
      return nxmCall;
    } catch (error) {
      throw error;
    }
  }
  /**
     * Reconnect a leg to an ongoing call.
     * You don't need to start the stream, the SDK will play the audio for you
     *
     * @classdesc reconnect leg to an ongoing call
   * @param {string} conversation_id the conversation that you want to reconnect
   * @param {string} rtc_id the id of the leg that will be reconnected
   * @param {object} [mediaParams] - MediaStream params (same as Media.enable())
     * @returns {Promise<NXMCall>}
     * @example <caption>Reconnect a leg to an ongoing call</caption>
     *  application.reconnectCall("conversation_id", "rtc_id").then((nxmCall) => {
     *    console.log(nxmCall);
     *  }).catch((error) => {
   *    console.error(error);
   *  });
   *
   * @example <caption>Reconnect a leg to an ongoing call without auto playing audio</caption>
     *  application.reconnectCall("conversation_id", "rtc_id", { autoPlayAudio: false }).then((nxmCall) => {
     *    console.log(nxmCall);
     *  }).catch((error) => {
   *    console.error(error);
   *  });
   *
   * @example <caption>Reconnect a leg to an ongoing call choosing device ID</caption>
     *  application.reconnectCall("conversation_id", "rtc_id", { audioConstraints: { deviceId: "device_id" } }).then((nxmCall) => {
     *    console.log(nxmCall);
     *  }).catch((error) => {
   *    console.error(error);
   *  });
    */


  async reconnectCall(conversationId, rtcId, mediaParams = {}) {
    try {
      if (!conversationId || !rtcId) {
        throw new nexmoClientError_1.NexmoClientError('error:missing:params');
      }

      const conversation = await this.getConversation(conversationId, Application.CONVERSATION_API_VERSION.v1);
      await conversation.media.enable({ ...mediaParams,
        reconnectRtcId: rtcId
      });
      const nxmCall = new nxmCall_1.default(this, conversation); // assigning the correct call status taking into account the sip status (outbound)
      // on inbound calls the reconnect will happen after the call is estabilished and both legs are answered

      const event_types = Array.from(conversation.events.values()).map(event => event.type);
      if (event_types.includes('sip:answered')) nxmCall.status = nxmCall.CALL_STATUS.ANSWERED;else if (event_types.includes('sip:ringing')) nxmCall.status = nxmCall.CALL_STATUS.RINGING;else nxmCall.status = nxmCall.CALL_STATUS.STARTED;
      nxmCall.rtcObjects = conversation.media.rtcObjects;
      this.calls.set(conversation.id, nxmCall);
      return nxmCall;
    } catch (error) {
      throw error;
    }
  }
  /**
   * Query the service to create a new conversation
   * The conversation name must be unique per application.
   * @param {object} [params] - leave empty to get a GUID as name
   * @param {string} params.name - the name of the conversation. A UID will be assigned if this is skipped
   * @param {string} params.display_name - the display_name of the conversation.
   * @returns {Promise<Conversation>} - the created Conversation
   * @example <caption>Create a conversation and join</caption>
   *  application.newConversation().then((conversation) => {
   *    //join the created conversation
   *    conversation.join().then((member) => {
   *      //Get the user's member belonging in this conversation.
   *      //You can also access it via conversation.me
   *      console.log("Joined as " + member.user.name);
  *    });
   *  }).catch((error) => {
   *    console.error(error);
   *  });
  */


  async newConversation(data = {}) {
    try {
      const response = await this.session.sendNetworkRequest({
        type: 'POST',
        path: 'conversations',
        data
      });
      const conv = new conversation_1.default(this, response);
      this.conversations.set(conv.id, conv); // do a get conversation to get the whole model as shaped in the service,

      return this.getConversation(conv.id, Application.CONVERSATION_API_VERSION.v1);
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Query the service to create a new conversation and join it
   * The conversation name must be unique per application.
   * @param {object} [params] - leave empty to get a GUID as name
   * @param {string} params.name - the name of the conversation. A UID will be assigned if this is skipped
   * @param {string} params.display_name - the display_name of the conversation.
   * @returns {Promise<Conversation>} - the created Conversation
   * @example <caption>Create a conversation and join</caption>
   *  application.newConversationAndJoin().then((conversation) => {
   *    console.log("Joined as " + conversation.me.display_name);
   *  }).catch((error) => {
   *    console.error("Error creating a conversation and joining ", error);
   *  });
  */


  async newConversationAndJoin(params) {
    const conversation = await this.newConversation(params);
    await conversation.join();
    return conversation;
  }
  /**
   * Query the service to see if this conversation exists with the
   * logged in user as a member and retrieve the data object
   * Result added (or updated) in this.conversations
   *
   * @param {string} id - the id of the conversation to fetch
  * @param {string} version=Application.CONVERSATION_API_VERSION.v3 {Application.CONVERSATION_API_VERSION.v1 || Application.CONVERSATION_API_VERSION.v3} - the version of the Conversation Service API to use (v1 includes the full list of the members of the conversation but v3 does not)
   * @returns {Promise<Conversation>} - the requested conversation
   * @example <caption>Get a conversation</caption>
   *  application.getConversation(id).then((conversation) => {
   *      console.log("Retrieved conversation: ", conversation);
   *  }).catch((error) => {
   *    console.error(error);
   *  });
  */


  async getConversation(id, version = Application.CONVERSATION_API_VERSION.v3) {
    if (version !== Application.CONVERSATION_API_VERSION.v1 && version !== Application.CONVERSATION_API_VERSION.v3) {
      throw new nexmoClientError_1.NexmoClientError('error:conversation-service:version');
    }

    let response;

    if (version === Application.CONVERSATION_API_VERSION.v1) {
      try {
        response = await this.session.sendNetworkRequest({
          type: 'GET',
          path: `conversations/${id}`
        });
        response['id'] = response['uuid'];
        delete response['uuid'];
      } catch (error) {
        throw new nexmoClientError_1.NexmoApiError(error);
      }
    } else {
      try {
        response = await this.session.sendNetworkRequest({
          type: 'GET',
          path: `conversations/${id}`,
          version: 'v0.3'
        });
      } catch (error) {
        throw new nexmoClientError_1.NexmoApiError(error);
      }
    }

    const conversation_object = this.updateOrCreateConversation(response);

    if (version === Application.CONVERSATION_API_VERSION.v3 && !conversation_object.me) {
      try {
        const member = await conversation_object.getMyMember();
        conversation_object.me = member;
      } catch (error) {
        // add a retry in case of a failure in fetching the member
        try {
          const member = await conversation_object.getMyMember();
          conversation_object.me = member;
        } catch (error) {
          this.log.warn(`You don't have any membership in ${conversation_object.id}`);
        }
      }
    }

    if (this.session.config.sync === 'full') {
      // Populate the events
      const {
        items
      } = await conversation_object.getEvents();
      conversation_object.events = items;
      return conversation_object;
    } else {
      return conversation_object;
    }
  }
  /**
   * Query the service to obtain a complete list of conversations of which the
   * logged-in user is a member with a state of `JOINED` or `INVITED`.
  * @param {object} params configure defaults for paginated conversations query
  * @param {string} params.order 'asc' or 'desc' ordering of resources based on creation time
  * @param {number} params.page_size the number of resources returned in a single request list
  * @param {string} [params.cursor] string to access the starting point of a dataset
   *
   * @returns {Promise<Page<Map<Conversation>>>} - Populate Application.conversations.
  * @example <caption>Get Conversations</caption>
  *  application.getConversations({ page_size: 20 }).then((conversations_page) => {
  *    conversations_page.items.forEach(conversation => {
  *      render(conversation)
  *    })
  *  }).catch((error) => {
  *      console.error(error);
  *  });
  *
  */


  async getConversations(params = {}) {
    const url = `${this.session.config.nexmo_api_url}/beta2/users/${this.me.id}/conversations`; // Create pageConfig if some elements given otherwise use default

    let pageConfig = Object.keys(params).length === 0 ? this.pageConfig : new page_config_1.default(params);

    try {
      const response = await utils_1.default.paginationRequest(url, pageConfig, this.session.config.token);
      response.application = this;
      const conversations_page = new conversations_page_1.default(response);
      this.conversations_page_last = conversations_page;
      return conversations_page;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Application listening for sync status events.
   *
   * @event Application#sync:progress
   *
   * @property {number} status.sync_progress - Percentage of fetched conversations
   * @example <caption>listen for changes in the synchronisation progress events on Application level</caption>
   *  application.on("sync:progress",(status) => {
   *	  console.log(status.sync_progress);
   *  });
  */

  /**
   * Fetching all the conversations and sync progress events
  */


  syncConversations(conversations) {
    const conversation_array = Array.from(conversations.values());
    const conversations_length = conversation_array.length;
    const d = new Date();
    this.start_sync_time = typeof window !== 'undefined' && window.performance ? window.performance.now() : d.getTime();

    const fetchConversationForStorage = async () => {
      this.synced_conversations_percentage = Number((this.synced_conversations_count / conversations_length * 100).toFixed(2));
      const status_payload = {
        sync_progress: this.synced_conversations_percentage
      };
      this.emit('sync:progress', status_payload);
      this.log.info('Loading sync progress: ' + this.synced_conversations_count + '/' + conversations_length + ' - ' + this.synced_conversations_percentage + '%');

      if (this.synced_conversations_percentage >= 100) {
        const d = new Date();
        this.stop_sync_time = typeof window !== 'undefined' && window.performance ? window.performance.now() : d.getTime();
        this.log.info('Loaded conversations in ' + (this.stop_sync_time - this.start_sync_time) + 'ms');
      }

      if (this.synced_conversations_count < conversations_length) {
        await this.getConversation(conversation_array[this.synced_conversations_count].id);
        fetchConversationForStorage();
        this.synced_conversations_count++;
        this.sync_progress_buffer++;
      }
    };

    fetchConversationForStorage();
  }
  /**
   * Get Details of a user by using their id. If no id is present, will return your own user details.
   * @param {string} id - the id of the user to fetch, if skipped, it returns your own user details
   * @returns {Promise<User>}
   * @example <caption>Get User details</caption>
   *  application.getUser(id).then((user) => {
   *    console.log('User details: 'user);
   *  }).catch((error) => {
   *      console.error(error);
   *  });
  */


  async getUser(user_id = this.me.id) {
    try {
      const response = await this.session.sendNetworkRequest({
        type: 'GET',
        path: `users/${user_id}`
      });
      return new user_1.default(this, response);
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Query the service to obtain a complete list of userSessions of a given user
  * @param {object} params configure defaults for paginated user sessions query
  * @param {string} params.order 'asc' or 'desc' ordering of resources based on creation time
  * @param {number} params.page_size the number of resources returned in a single request list
  * @param {string} [params.cursor] string to access the starting point of a dataset
  * @param {string} [params.user_id] the user id that the sessions are being fetched
   *
   * @returns {Promise<Page<Map<UserSession>>>}
  * @example <caption>Get User Sessions</caption>
  *  application.getUserSessions({ user_id: "id", page_size: 20 }).then((user_sessions_page) => {
  *    user_sessions_page.items.forEach(user_session => {
  *      render(user_session)
  *    })
  *  }).catch((error) => {
  *      console.error(error);
  *  });
  *
  */


  async getUserSessions(params = {}) {
    var _a;

    const user_id = ((_a = params) === null || _a === void 0 ? void 0 : _a.user_id) || this.me.id;
    const url = `${this.session.config.nexmo_api_url}/v0.3/users/${user_id}/sessions`; // Create pageConfig if some elements given otherwise use default

    let pageConfig = Object.keys(params).length === 0 ? this.pageConfig : new page_config_1.default(params);

    try {
      const response = await utils_1.default.paginationRequest(url, pageConfig, this.session.config.token, Application.CONVERSATION_API_VERSION.v3);
      response.application = this;
      const user_sessions_page = new user_sessions_page_1.default(response);
      this.user_sessions_page_last = user_sessions_page;
      return user_sessions_page;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }

}

exports["default"] = Application;
/**
 * Enum for Application getConversation version.
 * @readonly
 * @enum {string}
 * @alias Application.CONVERSATION_API_VERSION
*/

Application.CONVERSATION_API_VERSION = {
  v1: 'v0.1',
  v3: 'v0.3'
};
module.exports = Application;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/conversation.js":
/*!********************************************************!*\
  !*** ./node_modules/nexmo-client/dist/conversation.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Conversation Object Model
 *
 * Copyright (c) Nexmo Inc.
 */

const WildEmitter = __webpack_require__(/*! wildemitter */ "./node_modules/wildemitter/wildemitter.js");

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");

const nexmoClientError_1 = __webpack_require__(/*! ./nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");

const member_1 = __importDefault(__webpack_require__(/*! ./member */ "./node_modules/nexmo-client/dist/member.js"));

const nxmEvent_1 = __importDefault(__webpack_require__(/*! ./events/nxmEvent */ "./node_modules/nexmo-client/dist/events/nxmEvent.js"));

const text_event_1 = __importDefault(__webpack_require__(/*! ./events/text_event */ "./node_modules/nexmo-client/dist/events/text_event.js"));

const message_event_1 = __importDefault(__webpack_require__(/*! ./events/message_event */ "./node_modules/nexmo-client/dist/events/message_event.js"));

const media_1 = __importDefault(__webpack_require__(/*! ./modules/media */ "./node_modules/nexmo-client/dist/modules/media.js"));

const conversation_events_1 = __importDefault(__webpack_require__(/*! ./handlers/conversation_events */ "./node_modules/nexmo-client/dist/handlers/conversation_events.js"));

const utils_1 = __importDefault(__webpack_require__(/*! ./utils */ "./node_modules/nexmo-client/dist/utils.js"));

const page_config_1 = __importDefault(__webpack_require__(/*! ./pages/page_config */ "./node_modules/nexmo-client/dist/pages/page_config.js"));

const events_page_1 = __importDefault(__webpack_require__(/*! ./pages/events_page */ "./node_modules/nexmo-client/dist/pages/events_page.js"));

const members_page_1 = __importDefault(__webpack_require__(/*! ./pages/members_page */ "./node_modules/nexmo-client/dist/pages/members_page.js"));

const application_1 = __importDefault(__webpack_require__(/*! ./application */ "./node_modules/nexmo-client/dist/application.js"));
/**
 * A single conversation Object.
 * @class Conversation
 * @property {Member} me - my Member object that belongs to this conversation
 * @property {Application} application - the parent Application
 * @property {string} name - the name of the Conversation (unique)
 * @property {string} [display_name] - the display_name of the Conversation
 * @property {Map<string, Member>} [members] - the members of the Conversation keyed by a member's id
 * @property {Map<string, NXMEvent>} [events] - the events of the Conversation keyed by an event's id
 * @property {number} [sequence_number] - the last event id
*/


class Conversation {
  constructor(application, params) {
    this.log = loglevel_1.getLogger(this.constructor.name);
    this.application = application;
    this.id = null;
    this.name = null;
    this.display_name = null;
    this.timestamp = null;
    this.members = new Map();
    this.events = new Map();
    this.sequence_number = 0;
    this.pageConfig = new page_config_1.default(((this.application.session || {}).config || {}).events_page_config);
    this.events_page_last = null;
    this.members_page_last = null;
    this.conversationEventHandler = new conversation_events_1.default(application, this);
    this.media = new media_1.default(this);
    /**
     * A Member Object representing the current user.
     * Only set if the user is or has been a member of the Conversation,
     * otherwise the value will be `null`.
     * @type Member
    */

    this.me = null; // We are not in the conversation ourselves by default
    // Map the params (which includes the id)

    this._updateObjectInstance(params);

    WildEmitter.mixin(Conversation);
  }
  /** Update Conversation object params
   * @property {object} params the params to update
   * @private
  */


  _updateObjectInstance(params) {
    for (let key in params) {
      switch (key) {
        case 'id':
          this.id = params.id;
          break;

        case 'name':
          this.name = params.name;
          break;

        case 'display_name':
          this.display_name = params.display_name;
          break;

        case 'members':
          // update the conversation javascript object
          params.members.forEach(m => {
            if (this.members.has(m.member_id)) {
              this.members.get(m.member_id)._normalise(m);

              if (m.user_id === this.application.me.id && m.state !== 'LEFT') {
                this.me = this.members.get(m.member_id);
                this.members.set(this.me.id, this.me);
              }
            } else {
              const member = new member_1.default(this, m);

              if (m.user_id === this.application.me.id && m.state !== 'LEFT') {
                this.me = member;
              }

              this.members.set(member.id, member);
            }
          });
          break;

        case 'timestamp':
          this.timestamp = params.timestamp;
          break;

        case 'sequence_number':
          this.sequence_number = params.sequence_number;
          break;

        case 'member_id':
          // filter needed params to create the object
          // the conversation list gives us the member_id to prepare the member/this object
          const object_params = {
            id: params.member_id,
            state: params.state,
            user: this.application.me
          }; // update the member object or create a new instance

          if (this.members.has(params.member_id)) {
            const member_object = this.members.get(params.member_id);
            Object.assign(member_object, object_params);
          } else {
            const member = new member_1.default(this, object_params);
            this.me = member;
            this.members.set(member.id, member);
          }

          break;
      }
    }
  }
  /**
   * Join the given User to this Conversation. Will typically be used this to join
   * ourselves to a Conversation we create.
   * Accept an invitation if our Member has state INVITED and no user_id / user_name is given
   *
   * @param {object} [params = this.application.me.id] The User to join (defaults to this)
   * @param {string} params.user_name the user_name of the User to join
   * @param {string} params.user_id the user_id of the User to join
   * @returns {Promise<Member>}
   *
   * @example <caption>join a user to the Conversation</caption>
   *
   * conversation.join().then((member) => {
   *  console.log("joined as member: ", member)
   * }).catch((error) => {
   *  console.error("error joining conversation ", error);
   * });
  */


  async join(params) {
    var _a, _b;

    try {
      let data = {
        state: 'joined',
        channel: {
          type: 'app'
        },
        user: { ...(!params && {
            name: this.application.me.name,
            id: this.application.me.id
          }),
          ...(params && params.user_name && {
            name: params.user_name
          }),
          ...(params && params.user_id && {
            id: params.user_id
          })
        }
      };

      if ((_b = (_a = this) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.id) {
        data["from"] = this.me.id;
      }

      const response = await this.application.session.sendNetworkRequest({
        type: 'POST',
        path: `conversations/${this.id}/members`,
        version: 'v0.3',
        data
      });
      const member = new member_1.default(this, response);

      if (response._embedded.user.id === this.application.me.id) {
        this.me = member;
      } // use case where between the time we got the conversation and the time we finished joining
      // the conversation object changed.


      this.application.getConversation(this.id, application_1.default.CONVERSATION_API_VERSION.v3);
      return member;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Delete a conversation
   * @returns {Promise}
   * @example <caption>delete the Conversation</caption>
   *
   * conversation.del().then(() => {
   *    console.log("conversation deleted");
   * }).catch((error) => {
   *  console.error("error deleting conversation ", error);
   * });
  */


  async del() {
    try {
      const response = await this.application.session.sendNetworkRequest({
        type: 'DELETE',
        path: `conversations/${this.id}`
      });
      this.application.conversations.delete(this.id);
      return response;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Delete an NXMEvent (e.g. Text)
   * @param {NXMEvent} event
   * @returns {Promise}
   * @example <caption>delete an Event</caption>
   *
   * conversation.deleteEvent(eventToBeDeleted).then(() => {
   *  console.log("event was deleted");
   * }).catch((error) => {
   *  console.error("error deleting the event ", error);
   * });
   *
  */


  deleteEvent(event) {
    return event.del();
  }
  /**
    * Invite the given user (id or name) to this conversation
    * @param {Member} params
    * @param {string} [params.id or user_name] - the id or the username of the User to invite
    *
    * @returns {Promise<Member>}
    *
    * @example <caption>invite a user to a Conversation</caption>
    * const user_id = 'id of User to invite';
    * const user_name = 'username of User to invite';
    *
    * conversation.invite({
    *  id: user_id,
    *  user_name: user_name
    * }).then((member) => {
    *  displayMessage(member.state + " user: " + user_id + " " + user_name);
    * }).catch((error) => {
    *  console.error("error inviting user ", error);
    * });
    *
  */


  async invite(params) {
    var _a, _b;

    if (!params || !params.id && !params.user_name) {
      throw new nexmoClientError_1.NexmoClientError('error:invite:missing:params');
    }

    const data = {
      state: 'invited',
      user: { ...(params.id && {
          id: params.id
        }),
        ...(params.user_name && {
          name: params.user_name
        })
      },
      media: params.media,
      channel: {
        from: {
          type: 'app'
        },
        to: {
          type: 'app'
        },
        type: 'app'
      }
    };

    if ((_b = (_a = this) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.id) {
      data["from"] = this.me.id;
    }

    try {
      const response = await this.application.session.sendNetworkRequest({
        type: 'POST',
        path: `conversations/${this.id}/members`,
        version: 'v0.3',
        data
      });
      const member = new member_1.default(this, response);
      return member;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
    * Invite the given user (id or name) to this conversation with media audio
    * @param {Member} params
    * @param {string} [params.id or user_name] - the id or the username of the User to invite
    *
    * @returns {Promise<Member>}
    *
    * @example <caption>invite a user to a conversation</caption>
    * const user_id = 'id of User to invite';
    * const user_name = 'username of User to invite';
    *
    * conversation.inviteWithAudio({
    *  id: user_id,
    *  user_name: user_name
    * }).then((member) => {
    *  displayMessage(member.state + " user: " + user_id + " " + user_name);
    * }).catch((error) => {
    *  console.error("error inviting user ", error);
    * });
    *
  */


  inviteWithAudio(params) {
    if (!params || !params.id && !params.user_name) {
      return Promise.reject(new nexmoClientError_1.NexmoClientError('error:invite:missing:params'));
    }

    params.media = {
      audio_settings: {
        enabled: true,
        muted: false,
        earmuffed: false
      }
    };
    return this.invite(params);
  }
  /**
   * Leave from the Conversation
   * @param {object} [reason] the reason for leaving the conversation
   * @param {string} [reason.reason_code] the code of the reason
   * @param {string} [reason.reason_text] the description of the reason
   * @returns {Promise}
   * @example <caption>leave the Conversation</caption>
   *
   * conversation.leave({reason_code: "mycode", reason_text: "my reason for leaving"}).then(() => {
   *  console.log("successfully left conversation");
   * }).catch((error) => {
   *  console.error("error leaving conversation ", error);
   * });
   *
  */


  leave(reason) {
    return this.me.kick(reason);
  }
  /**
    * Send a text message to the conversation, which will be relayed to every other member of the conversation
    * @param {string} text - the text message to be sent
    *
    * @returns {Promise<TextEvent>} - the text message that was sent
    *
    * @example <caption> sending a text </caption>
    * conversation.sendText("Hi Vonage").then((event) => {
    *  console.log("message was sent", event);
    * }).catch((error)=>{
    *  console.error("error sending the message ", error);
    * });
    *
    * @deprecated since version 8.3.0
    *
  */


  async sendText(text) {
    try {
      if (this.me === null) {
        throw new nexmoClientError_1.NexmoClientError('error:self');
      }

      const msg = {
        type: 'text',
        cid: this.id,
        from: this.me.id,
        body: {
          text
        }
      };
      const {
        id,
        timestamp
      } = await this.application.session.sendNetworkRequest({
        type: 'POST',
        path: `conversations/${this.id}/events`,
        data: msg
      });
      msg.id = id;
      msg.body.timestamp = timestamp;
      return new text_event_1.default(this, msg);
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
    * Send a custom event to the Conversation
    * @param {object} params - params of the custom event
    * @param {string} params.type the name of the custom event. Must not exceed 100 char length and contain only alpha numerics and '-' and '_' characters.
    * @param {object} params.body customizable key value pairs
    *
    * @returns {Promise<NXMEvent>} - the custom event that was sent
    *
    * @example <caption> sending a custom event </caption>
    * conversation.sendCustomEvent({ type: "my-event", body: { mykey: "my value" }}).then((event) => {
    *  console.log("custom event was sent", event);
    * }).catch((error)=>{
    *  console.error("error sending the custom event", error);
    * });
    *
  */


  async sendCustomEvent({
    type,
    body
  }) {
    try {
      if (this.me === null) {
        throw new nexmoClientError_1.NexmoClientError('error:self');
      } else if (!type || typeof type !== 'string' || type.length < 1) {
        throw new nexmoClientError_1.NexmoClientError('error:custom-event:invalid');
      }

      const data = {
        type: `custom:${type}`,
        cid: this.id,
        from: this.me.id,
        body
      };
      const {
        id,
        timestamp
      } = await this.application.session.sendNetworkRequest({
        type: 'POST',
        path: `conversations/${this.id}/events`,
        data
      });
      data.id = id;
      data.timestamp = timestamp;
      return new nxmEvent_1.default(this, data);
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Uploads an Image to Media Service.
   * implements xhr (https://xhr.spec.whatwg.org/) - this.imageRequest
   *
   * @param {File} file single input file (jpeg/jpg)
   * @param {object} params - params of image sent
   * @param {string} [params.quality_ratio = 100] a value between 0 and 100. 0 indicates 'maximum compression' and the lowest quality, 100 will result in the highest quality image
   * @param {string} [params.medium_size_ratio = 50] a value between 1 and 100. 1 indicates the new image is 1% of original, 100 - same size as original
   * @param {string} [params.thumbnail_size_ratio = 30] a value between 1 and 100. 1 indicates the new image is 1% of original, 100 - same size as original
   *
   * @returns {Promise<XMLHttpRequest>}
   *
   * @example <caption>uploading an image</caption>
   * const params = {
   *  quality_ratio : "90",
   *  medium_size_ratio: "40",
   *  thumbnail_size_ratio: "20"
   * }
   * conversation.uploadImage(fileInput.files[0], params).then((uploadImageRequest) => {
   *  uploadImageRequest.onprogress = (e) => {
   *    console.log("Image request progress: ", e);
   *    console.log("Image progress: " + e.loaded + "/" + e.total);
   *  };
   *  uploadImageRequest.onabort = (e) => {
   *    console.log("Image request aborted: ", e);
   *    console.log("Image: " + e.type);
   *  };
   *  uploadImageRequest.onloadend = (e) => {
   *    console.log("Image request successful: ", e);
   *    console.log("Image: " + e.type);
   *  };
   *  uploadImageRequest.onreadystatechange = () => {
   *    if (uploadImageRequest.readyState === 4 && uploadImageRequest.status === 200) {
   *      const representations = JSON.parse(uploadImageRequest.responseText);
   *      console.log("Original image url: ", representations.original.url);
   *      console.log("Medium image url: ", representations.medium.url);
   *      console.log("Thumbnail image url: ", representations.thumbnail.url);
   *    }
   *  };
   * }).catch((error) => {
   *    console.error("error uploading the image ", error);
   * });
  */


  async uploadImage(fileInput, params = {
    quality_ratio: '100',
    medium_size_ratio: '50',
    thumbnail_size_ratio: '30'
  }) {
    const formData = new FormData();
    formData.append('file', fileInput);
    formData.append('quality_ratio', params.quality_ratio);
    formData.append('medium_size_ratio', params.medium_size_ratio);
    formData.append('thumbnail_size_ratio', params.thumbnail_size_ratio);
    const imageRequest = await utils_1.default.networkRequest({
      type: 'POST',
      url: this.application.session.config.ips_url,
      data: formData,
      token: this.application.session.config.token
    });
    imageRequest.upload.addEventListener('progress', evt => {
      if (evt.lengthComputable) {
        this.log.debug('uploading image ' + evt.loaded + '/' + evt.total);
      }
    }, false);

    imageRequest.onreadystatechange = () => {
      if (imageRequest.status !== 200) {
        this.log.error(imageRequest);
      }
    };

    return imageRequest;
  }
  /**
   * Send an Image message to the conversation, which will be relayed to every other member of the conversation.
   * implements xhr (https://xhr.spec.whatwg.org/) - this.imageRequest
   *
   * @param {File} file single input file (jpeg/jpg)
   * @param {object} params - params of image sent
   * @param {string} [params.quality_ratio = 100] a value between 0 and 100. 0 indicates 'maximum compression' and the lowest quality, 100 will result in the highest quality image
   * @param {string} [params.medium_size_ratio = 50] a value between 1 and 100. 1 indicates the new image is 1% of original, 100 - same size as original
   * @param {string} [params.thumbnail_size_ratio = 30] a value between 1 and 100. 1 indicates the new image is 1% of original, 100 - same size as original
   *
   * @returns {Promise<XMLHttpRequest>}
   *
   * @example <caption>sending an image</caption>
   * const params = {
   *  quality_ratio : "90",
   *  medium_size_ratio: "40",
   *  thumbnail_size_ratio: "20"
   * }
   * conversation.sendImage(fileInput.files[0], params).then((imageRequest) => {
   *  imageRequest.onprogress = (e) => {
   *    console.log("Image request progress: ", e);
   *    console.log("Image progress: " + e.loaded + "/" + e.total);
   *  };
   *  imageRequest.onabort = (e) => {
   *    console.log("Image request aborted: ", e);
   *    console.log("Image: " + e.type);
   *  };
   *  imageRequest.onloadend = (e) => {
   *    console.log("Image request successful: ", e);
   *    console.log("Image: " + e.type);
   *  };
   * }).catch((error) => {
   *  console.error("error sending the image ", error);
   * });
   *
   * @deprecated since version 8.3.0
  */


  async sendImage(fileInput, params = {
    quality_ratio: '100',
    medium_size_ratio: '50',
    thumbnail_size_ratio: '30'
  }) {
    const imageRequest = await this.uploadImage(fileInput, params);

    imageRequest.onreadystatechange = () => {
      if (imageRequest.readyState === 4 && imageRequest.status === 200) {
        try {
          this.application.session.sendNetworkRequest({
            type: 'POST',
            path: `conversations/${this.id}/events`,
            data: {
              type: 'image',
              from: this.me.id,
              body: {
                representations: JSON.parse(imageRequest.responseText)
              }
            }
          });
          this.log.info(imageRequest);
        } catch (error) {
          this.log.error(new nexmoClientError_1.NexmoApiError(error));
        }
      }
    };

    return imageRequest;
  }
  /**
   * Cancel uploading or sending an Image message to the conversation.
   *
   * @param {XMLHttpRequest} imageRequest
   *
   * @returns void
   *
   * @example <caption>cancel sending an image</caption>
   * conversation.sendImage(fileInput.files[0]).then((imageRequest) => {
   *    conversation.abortSendImage(imageRequest);
  * }).catch((error) => {
  *    console.error("error sending the image ", error);
   * });
  *
  * @example <caption>cancel uploading an image</caption>
   * conversation.uploadImage(fileInput.files[0]).then((imageRequest) => {
   *    conversation.abortSendImage(imageRequest);
  * }).catch((error) => {
  *    console.error("error uploading the image ", error);
   * });
  */


  abortSendImage(imageRequest) {
    if (imageRequest instanceof XMLHttpRequest) {
      return imageRequest.abort();
    } else {
      return new nexmoClientError_1.NexmoClientError('error:invalid:param:type');
    }
  }
  /**
    * Send a message event to the conversation, which will be relayed to every other member of the conversation
    *
    * @param {object} params the content of the message you want sent
    * @param {string} params.message_type the type of the message. It should be one of 'text', 'image', 'audio', 'video', 'file'
    * @param {string} [params.text] the text content when message type is 'text
    * @param {object} [params.image]
    * @param {string} params.image.url the image url when message type is 'image'
    * @param {object} [params.audio]
    * @param {string} params.audio.url the audio url when message type is 'audio'
    * @param {object} [params.video]
    * @param {string} params.video.url the video url when message type is 'video'
    * @param {object} [params.file]
    * @param {string} params.file.url the file url when message type is 'file'
    *
    * @returns {Promise<MessageEvent>} - the message that was sent
    *
    * @example <caption> sending a message </caption>
    * conversation.sendMessage({ "message_type": "text", "text": "Hi Vonage!" }).then((event) => {
    *  console.log("message was sent", event);
    * }).catch((error)=>{
    *  console.error("error sending the message ", error);
    * });
    *
  */


  async sendMessage(params) {
    var _a;

    if (this.me === null) {
      throw new nexmoClientError_1.NexmoClientError('error:self');
    } else if (!((_a = params) === null || _a === void 0 ? void 0 : _a.message_type)) {
      throw new nexmoClientError_1.NexmoClientError('error:message-event:invalid');
    }

    try {
      const msg = {
        type: 'message',
        cid: this.id,
        from: this.me.id,
        body: { ...params
        }
      };
      const {
        id,
        timestamp
      } = await this.application.session.sendNetworkRequest({
        type: 'POST',
        path: `conversations/${this.id}/events`,
        data: msg
      });
      msg.id = id;
      msg.body.timestamp = timestamp;
      return new message_event_1.default(this, msg);
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }

  async _typing(state) {
    const params = {
      activity: state === 'on' ? 1 : 0
    };
    const data = {
      type: 'text:typing:' + state,
      cid: this.id,
      from: this.me.id,
      body: params
    };

    try {
      await this.application.session.sendNetworkRequest({
        type: 'POST',
        path: `conversations/${this.id}/events`,
        data
      });
      return `text:typing:${state}:success`;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Send start typing indication
   *
   * @returns {Promise} - resolves the promise on successful sent
   *
   * @example <caption>send start typing event when key is pressed</caption>
   * messageTextarea.addEventListener('keypress', (event) => {
   *    conversation.startTyping();
   * });
  */


  startTyping() {
    return this._typing('on');
  }
  /**
   * Send stop typing indication
   *
   * @returns {Promise} - resolves the promise on successful sent
   *
   * @example <caption>send stop typing event when a key has not been pressed for half a second</caption>
   * let timeout = null;
   * messageTextarea.addEventListener('keyup', (event) => {
   *    clearTimeout(timeout);
   *    timeout = setTimeout(() => {
   *      conversation.stopTyping();
   *    }, 500);
   * });
  */


  stopTyping() {
    return this._typing('off');
  }
  /**
    * Query the service to get a list of events in this conversation.
    *
    * @param {object} params configure defaults for paginated events query
    * @param {string} params.order 'asc' or 'desc' ordering of resources based on creation time
    * @param {number} params.page_size the number of resources returned in a single request list
    * @param {string} [params.cursor] string to access the starting point of a dataset
    * @param {string} [params.event_type] the type of event used to filter event requests. Supports wildcard options with :* eg. 'members:*'
    *
    * @returns {Promise<EventsPage<Map<Events>>>} - Populate Conversations.events.
    * @example <caption>Get Events</caption>
    * conversation.getEvents({ event_type: 'member:*' }).then((events_page) => {
    *   events_page.items.forEach(event => {
    *     render(event)
    *   })
    * }).catch((error) => {
    *  console.error("error getting the events ", error);
    * });
  */


  async getEvents(params = {}) {
    const url = `${this.application.session.config.nexmo_api_url}/beta2/conversations/${this.id}/events`; // Create pageConfig if given params otherwise use default

    let pageConfig = Object.keys(params).length === 0 ? this.pageConfig : new page_config_1.default(params);

    try {
      const response = await utils_1.default.paginationRequest(url, pageConfig, this.application.session.config.token);
      response.application = this.application;
      response.conversation = this;
      const events_page = new events_page_1.default(response);
      this.events_page_last = events_page;
      return events_page;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
    * Query the service to get a list of members in this conversation.
    *
    * @param {object} params configure defaults for paginated events query
    * @param {string} params.order 'asc' or 'desc' ordering of resources based on creation time
    * @param {number} params.page_size the number of resources returned in a single request list
    * @param {string} [params.cursor] string to access the starting point of a dataset
    *
    * @returns {Promise<MembersPage<Map<Member>>>}
    * @example <caption>Get Members</caption>
    * const params = {
    *   order: "desc",
    *   page_size: 100
    * }
    * conversation.getMembers(params).then((members_page) => {
    *   members_page.items.forEach(member => {
    *     render(member)
    *   })
    * }).catch((error) => {
    *  console.error("error getting the members ", error);
    * });
  */


  async getMembers(params = {}) {
    const url = `${this.application.session.config.nexmo_api_url}/beta2/conversations/${this.id}/members`; // Create pageConfig if given params otherwise use default

    let pageConfig = Object.keys(params).length === 0 ? this.pageConfig : new page_config_1.default(params);

    try {
      const response = await utils_1.default.paginationRequest(url, pageConfig, this.application.session.config.token);
      response.application = this.application;
      response.conversation = this;
      const members_page = new members_page_1.default(response);
      this.members_page_last = members_page;
      return members_page;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
    * Query the service to get my member in this conversation.
    *
    * @returns {Promise<Member>}
    * @example <caption>Get My Member</caption>
    * conversation.getMyMember().then((member) => {
    *   render(member)
    * }).catch((error) => {
    *  console.error("error getting my member", error);
    * });
  */


  async getMyMember() {
    try {
      const response = await this.application.session.sendNetworkRequest({
        type: 'GET',
        path: `conversations/${this.id}/members/me`,
        version: 'v0.3'
      });
      const member = new member_1.default(this, response);
      return member;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
    * Query the service to get a member in this conversation.
    *
    * @param {string} member_id the id of the member to return
    *
    * @returns {Promise<Member>}
    * @example <caption>Get Member</caption>
    * conversation.getMember("MEM-id").then((member) => {
    *   render(member)
    * }).catch((error) => {
    *  console.error("error getting member", error);
    * });
  */


  async getMember(member_id) {
    try {
      const response = await this.application.session.sendNetworkRequest({
        type: 'GET',
        path: `conversations/${this.id}/members/${member_id}`,
        version: 'v0.3'
      });
      const member = new member_1.default(this, response);
      return member;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Handle and event from the cloud.
   * using conversationEventHandler
   * @param {object} event
   * @private
  */


  _handleEvent(event) {
    var _a, _b, _c, _d;

    if (event.type.startsWith('rtc')) {
      // keep the rtc events going to the application layer, we use them in media module
      this.emit(event.type, event);
      return Promise.resolve(event);
    }

    this.sequence_number++; // make sure the event_id is not a string

    if (event.body && event.body.event_id && typeof event.body.event_id === 'string') {
      event.body.event_id = parseInt(event.body.event_id);
    }

    let memberInfo = {
      memberId: event.from
    };

    if ((_b = (_a = event) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.user) {
      const {
        id,
        name,
        display_name,
        image_url,
        custom_data
      } = event.body.user;
      memberInfo = { ...memberInfo,
        ...{ ...(id && {
            userId: id
          }),
          ...(name && {
            userName: name
          }),
          ...(display_name && {
            displayName: display_name
          }),
          ...(image_url && {
            imageUrl: image_url
          }),
          ...(custom_data && {
            customData: custom_data
          })
        }
      };
    } else if ((_d = (_c = event) === null || _c === void 0 ? void 0 : _c._embedded) === null || _d === void 0 ? void 0 : _d.from_user) {
      const {
        id,
        name,
        display_name,
        image_url,
        custom_data
      } = event._embedded.from_user;
      memberInfo = { ...memberInfo,
        ...{ ...(id && {
            userId: id
          }),
          ...(name && {
            userName: name
          }),
          ...(display_name && {
            displayName: display_name
          }),
          ...(image_url && {
            imageUrl: image_url
          }),
          ...(custom_data && {
            customData: custom_data
          })
        }
      };
    }

    let constructed_event = this.conversationEventHandler.handleEvent(event); // Unless they are typing events, add the event to the conversation.events map

    if (!['text:typing:on', 'text:typing:off'].includes(event.type)) {
      this.events.set(constructed_event.id, constructed_event);
    } // For custom events remove the custom: prefix before emitting event


    if (event.type.startsWith('custom:')) {
      this.emit(constructed_event.type, memberInfo, constructed_event);
      return Promise.resolve(event);
    }

    this.emit(event.type, memberInfo, constructed_event);
    return Promise.resolve(event);
  }

}

exports["default"] = Conversation;
module.exports = Conversation;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/events/image_event.js":
/*!**************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/events/image_event.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  ImageEvent Object Model
 *
 * Copyright (c) Nexmo Inc.
 */

const utils_1 = __importDefault(__webpack_require__(/*! ../utils */ "./node_modules/nexmo-client/dist/utils.js"));

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");

const nxmEvent_1 = __importDefault(__webpack_require__(/*! ./nxmEvent */ "./node_modules/nexmo-client/dist/events/nxmEvent.js"));
/**
 * An image event
 *
 * @class ImageEvent
 * @extends NXMEvent
*/


class ImageEvent extends nxmEvent_1.default {
  constructor(conversation, params) {
    super(conversation, params);
    this.log = loglevel_1.getLogger(this.constructor.name);
    this.type = 'image';
    this.conversation = conversation;
    this.state = {
      seen_by: {},
      delivered_to: {}
    };

    if (params && params.body && params.body.timestamp) {
      this.timestamp = params.body.timestamp;
    }

    Object.assign(this, params);
  }
  /**
   * Set the imageEvent status to 'seen'
   * @returns {Promise}
   * @example <caption>Set the imageEvent status to 'seen'</caption>
   *  imageEvent.seen().then(() => {
   *    console.log("image event status set to seen");
   *  }).catch((error)=>{
   *	console.log("error setting image event status to seen ", error);
   *  });
   */


  seen() {
    return super.seen();
  }
  /**
   * Set the imageEvent status to 'delivered'
   * @returns {Promise}
   * @example <caption>Set the imageEvent status to 'delivered'</caption>
   *  imageEvent.delivered().then(() => {
   *    console.log("image event status set to delivered");
   *  }).catch((error)=>{
   *	console.log("error setting image event status to delivered  ", error);
   *  });
   */


  delivered() {
    return super.delivered();
  }
  /**
   * Delete the image event, all 3 representations of it
   * passing only the one of the three URLs
   * @returns {Promise}
   * @example <caption>Delete the imageEvent</caption>
   *  imageEvent.del().then(() => {
   *    console.log("image event deleted");
   *  }).catch((error)=>{
   *	console.log("error deleting image event  ", error);
   *  });
   */


  async del() {
    await utils_1.default.networkRequest({
      type: 'DELETE',
      url: this.body.representations.original.url,
      token: this.conversation.application.session.config.token
    });
    return super.del();
  }
  /**
   * Download an Image from Media service //3 representations
   * @param {string} [type="thumbnail"] original, medium, or thumbnail
   * @param {string} [representations=this.body.representations]  the ImageEvent.body for the image to download
   * @returns {string} the dataUrl "data:image/jpeg;base64..."
   * @example <caption>Downloading an image from the imageEvent</caption>
   *  imageEvent.fetchImage("medium").then((imageData) => {
   *    const img = new Image();
   *    img.src = imageData;
   *    document.body.appendChild(img);
   *  }).catch((error)=>{
   *	console.log("error getting image ", error);
   *  });
  */


  async fetchImage(type = 'thumbnail', imageRepresentations = this.body.representations) {
    try {
      return utils_1.default._fetchImage(imageRepresentations[type].url, this.conversation.application.session.config.token);
    } catch (error) {
      this.log.error(error);
      throw error;
    }
  }

}

exports["default"] = ImageEvent;
module.exports = ImageEvent;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/events/message_event.js":
/*!****************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/events/message_event.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Message NXMEvent Object Model
 *
 * Copyright (c) Nexmo Inc.
*/

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");

const utils_1 = __importDefault(__webpack_require__(/*! ../utils */ "./node_modules/nexmo-client/dist/utils.js"));

const nxmEvent_1 = __importDefault(__webpack_require__(/*! ./nxmEvent */ "./node_modules/nexmo-client/dist/events/nxmEvent.js"));

const nexmoClientError_1 = __webpack_require__(/*! ../nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");
/**
 * A message event
 *
 * @class MessageEvent
 * @extends NXMEvent
*/


class MessageEvent extends nxmEvent_1.default {
  constructor(conversation, params) {
    super(conversation, params);
    this.log = loglevel_1.getLogger(this.constructor.name);
    this.type = 'message';
    this.conversation = conversation;
    this.state = {
      seen_by: {},
      delivered_to: {},
      submitted_to: {},
      rejected_by: {},
      undeliverable_to: {}
    };

    if (params && params.body && params.body.timestamp) {
      this.timestamp = params.body.timestamp;
    }

    Object.assign(this, params);
  }
  /**
   * Set the messageEvent status to 'seen'
   * @returns {Promise}
   * @example <caption>Set the messageEvent status to 'seen'</caption>
   *  messageEvent.seen().then(() => {
   *    console.log("message event status set to seen");
   *  }).catch((error)=>{
   *	  console.log("error setting message event status to seen ", error);
   *  });
   */


  seen() {
    return super.seen();
  }
  /**
   * Set the messageEvent status to 'delivered'.
   * handled by the SDK
   * @returns {Promise}
   * @example <caption>Set the messageEvent status to 'delivered'</caption>
   *  messageEvent.delivered().then(() => {
   *    console.log("message event status set to delivered");
   *  }).catch((error)=>{
   *	  console.log("error setting message event status to delivered  ", error);
   *  });
   */


  delivered() {
    return super.delivered();
  }
  /**
   * Delete the messageEvent
   * @returns {Promise}
   * @example <caption>Delete the messageEvent</caption>
   *  messageEvent.del().then(() => {
   *    console.log("message event deleted");
   *  }).catch((error)=>{
   *	  console.log("error deleting message event  ", error);
   *  });
   */


  del() {
    return super.del();
  }
  /**
   * Download an Image from Media service
   * @returns {string} the dataUrl "data:image/jpeg;base64..."
   * @example <caption>Downloading an image from the messageEvent</caption>
   *  messageEvent.fetchImage().then((imageData) => {
   *    const img = new Image();
   *    img.src = imageData;
   *    document.body.appendChild(img);
   *  }).catch((error) => {
   *    console.log("error getting image ", error);
   *  });
  */


  async fetchImage() {
    if (this.body.message_type !== "image") {
      throw new nexmoClientError_1.NexmoClientError('error:message-event:invalid');
    }

    try {
      return utils_1.default._fetchImage(this.body.image.url, this.conversation.application.session.config.token);
    } catch (error) {
      this.log.error(error);
      throw error;
    }
  }

}

exports["default"] = MessageEvent;
module.exports = MessageEvent;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/events/nxmEvent.js":
/*!***********************************************************!*\
  !*** ./node_modules/nexmo-client/dist/events/nxmEvent.js ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  NXMEvent Object Model
 *
 * Copyright (c) Nexmo Inc.
*/

const WildEmitter = __webpack_require__(/*! wildemitter */ "./node_modules/wildemitter/wildemitter.js");

const nexmoClientError_1 = __webpack_require__(/*! ../nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");
/**
 * Conversation NXMEvent Object.
 * The super class that holds the base events that apply to
 * common event objects.
 * @class NXMEvent
 */


class NXMEvent {
  constructor(conversation, params) {
    var _a, _b, _c, _d;

    this.conversation = conversation;

    if (params) {
      for (const key in params) {
        switch (key) {
          case 'type':
            if (params.type.startsWith('custom:')) {
              this.type = params.type.replace('custom:', '');
            } else {
              this.type = params.type;
            }

            break;

          case 'application_id':
            this.application_id = params.application_id;
            break;

          case 'cid':
            this.cid = params.cid;
            break;

          case 'from':
            if (['member:invited', 'member:joined', 'member:left'].indexOf(params.type) > -1) {
              if ((_b = (_a = params._embedded) === null || _a === void 0 ? void 0 : _a.from_member) === null || _b === void 0 ? void 0 : _b.id) {
                this.from = (_d = (_c = params._embedded) === null || _c === void 0 ? void 0 : _c.from_member) === null || _d === void 0 ? void 0 : _d.id;
              }
            } else {
              this.from = params.from;
            }

            break;

          case 'timestamp':
            this.timestamp = params.timestamp;
            break;

          case 'id':
            this.id = params.id;
            break;

          case 'state':
            this.state = params.state;
            break;

          case 'index':
            this.index = params.index;
            break;

          case 'streamIndex':
            this.streamIndex = params.streamIndex;
            break;

          case 'body':
            this.body = params.body;

            if (this.body.user && this.body.user.user_id) {
              this.body.user.id = this.body.user.user_id;
              delete this.body.user.user_id;
            }

            if (this.body.digit) {
              this.digit = this.body.digit;
              delete this.body.digit;
            }

            if (this.body.digits) {
              this.digit = this.body.digits;
              delete this.body.digits;
            }

            break;
        }
      }
    }

    WildEmitter.mixin(NXMEvent);
  }
  /**
   * Delete the event
   * @param {number} [event_id=this.event_id] if the event id param is not present, "this" event will be default
   * @returns {Promise}
   * @private
  */


  async del(event_id = this.id) {
    try {
      await this.conversation.application.session.sendNetworkRequest({
        type: 'DELETE',
        path: `conversations/${this.conversation.id}/events/${event_id}?from=${this.conversation.me.id}`,
        version: 'beta2'
      });
      return;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Mark as Delivered the event
   * @param {number} [event_id=this.event_id] if the event id is not provided, the this event will be used
   * @returns {Promise}
   * @private
   */


  async delivered(event_id = this.id) {
    if (this.type !== 'text' && this.type !== 'image' && this.type !== 'message') {
      this.type = 'event';
    }

    if (this.conversation.me.id === this.from) {
      throw new nexmoClientError_1.NexmoClientError('error:delivered:own-message');
    } else if (this.state && this.state.delivered_to && this.state.delivered_to[this.conversation.me.id]) {
      throw new nexmoClientError_1.NexmoClientError('error:already-delivered');
    } else {
      try {
        await this.conversation.application.session.sendNetworkRequest({
          type: 'POST',
          path: `conversations/${this.conversation.id}/events`,
          data: {
            type: `${this.type}:delivered`,
            from: this.conversation.me.id,
            body: {
              event_id
            }
          }
        });
        return;
      } catch (error) {
        throw new nexmoClientError_1.NexmoApiError(error);
      }
    }
  }
  /**
   * Mark as Seen the event
   * @param {number} [event_id=this.event_id] if the event id is not provided, the this event will be used
   * @returns {Promise}
   * @private
  */


  async seen(event_id = this.id) {
    if (this.type !== 'text' && this.type !== 'image' && this.type !== 'message') {
      this.type = 'event';
    }

    if (this.conversation.me.id === this.from) {
      throw new nexmoClientError_1.NexmoClientError('error:seen:own-message');
    } else if (this.state && this.state.seen_by && this.state.seen_by[this.conversation.me.id]) {
      throw new nexmoClientError_1.NexmoClientError('error:already-seen');
    } else {
      try {
        await this.conversation.application.session.sendNetworkRequest({
          type: 'POST',
          path: `conversations/${this.conversation.id}/events`,
          data: {
            type: `${this.type}:seen`,
            from: this.conversation.me.id,
            body: {
              event_id
            }
          }
        });
        return;
      } catch (error) {
        throw new nexmoClientError_1.NexmoApiError(error);
      }
    }
  }

}

exports["default"] = NXMEvent;
module.exports = NXMEvent;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/events/text_event.js":
/*!*************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/events/text_event.js ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Text NXMEvent Object Model
 *
 * Copyright (c) Nexmo Inc.
*/

const nxmEvent_1 = __importDefault(__webpack_require__(/*! ./nxmEvent */ "./node_modules/nexmo-client/dist/events/nxmEvent.js"));
/**
 * A text event
 *
 * @class TextEvent
 * @extends NXMEvent
*/


class TextEvent extends nxmEvent_1.default {
  constructor(conversation, params) {
    super(conversation, params);
    this.type = 'text';
    this.conversation = conversation;
    this.state = {
      seen_by: {},
      delivered_to: {}
    };

    if (params && params.body && params.body.timestamp) {
      this.timestamp = params.body.timestamp;
    }

    Object.assign(this, params);
  }
  /**
   * Set the textEvent status to 'seen'
   * @returns {Promise}
   * @example <caption>Set the textEvent status to 'seen'</caption>
   *  textEvent.seen().then(() => {
   *    console.log("text event status set to seen");
   *  }).catch((error)=>{
   *	console.log("error setting text event status to seen ", error);
   *  });
   */


  seen() {
    return super.seen();
  }
  /**
   * Set the textEvent status to 'delivered'.
   * handled by the SDK
   * @returns {Promise}
   * @example <caption>Set the textEvent status to 'delivered'</caption>
   *  textEvent.delivered().then(() => {
   *    console.log("text event status set to delivered");
   *  }).catch((error)=>{
   *	console.log("error setting text event status to delivered  ", error);
   *  });
   */


  delivered() {
    return super.delivered();
  }
  /**
   * Delete the textEvent
   * @returns {Promise}
   * @example <caption>Delete the textEvent</caption>
   *  textEvent.del().then(() => {
   *    console.log("text event deleted");
   *  }).catch((error)=>{
   *	console.log("error deleting text event  ", error);
   *  });
   */


  del() {
    return super.del();
  }

}

exports["default"] = TextEvent;
module.exports = TextEvent;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/handlers/application_events.js":
/*!***********************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/handlers/application_events.js ***!
  \***********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Application Events Handler
 *
 * Copyright (c) Nexmo Inc.
 */

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");

const nxmEvent_1 = __importDefault(__webpack_require__(/*! ../events/nxmEvent */ "./node_modules/nexmo-client/dist/events/nxmEvent.js"));

const nxmCall_1 = __importDefault(__webpack_require__(/*! ../modules/nxmCall */ "./node_modules/nexmo-client/dist/modules/nxmCall.js"));

const utils_1 = __importDefault(__webpack_require__(/*! ../utils */ "./node_modules/nexmo-client/dist/utils.js"));

const rtc_helper_1 = __importDefault(__webpack_require__(/*! ../modules/rtc_helper */ "./node_modules/nexmo-client/dist/modules/rtc_helper.js"));
/**
 * Handle Application Events
 *
 * @class ApplicationEventsHandler
 * @param {Application} application
 * @param {Conversation} conversation
 * @private
*/


class ApplicationEventsHandler {
  constructor(application) {
    this.log = loglevel_1.getLogger(this.constructor.name);
    this.application = application;
    this._handleApplicationEventMap = {
      'member:joined': this._processMemberJoined,
      'member:invited': this._processMemberInvited
    };
  }
  /**
    * Handle and event.
    *
    * Update the event to map local generated events
    * in case we need a more specific event to pass in the application listener
    * or f/w the event as it comes
    * @param {object} event
    * @private
  */


  handleEvent(event) {
    const conversation = this.application.conversations.get(event.cid);
    const copied_event = Object.assign({}, event);

    if (this._handleApplicationEventMap.hasOwnProperty(event.type)) {
      return this._handleApplicationEventMap[event.type].call(this, conversation, new nxmEvent_1.default(conversation, copied_event), event);
    }

    return new nxmEvent_1.default(conversation, copied_event);
  }
  /**
    * case: call to PSTN, after knocking event we receive joined
    * @private
  */


  _processMemberJoined(conversation, event, raw_event) {
    try {
      if (event.body.channel && this.application._call_draft_list.has(event.body.channel.id)) {
        this.log.debug("_processMemberJoined: outbound serverCall from sdk", {
          event
        });

        const nxmCall = this.application._call_draft_list.get(event.body.channel.id);

        let pc = ((nxmCall.rtcObjects || {})[event.body.channel.id] || {}).pc;

        nxmCall._setFrom(conversation.me);

        nxmCall._setupConversationObject(conversation, event.body.channel.id); // add the media objects to new conversation from placeholder in call


        conversation.media._attachEndingEventHandlers(); // Checking to see if placeholder NxmCall has rtcObject, pc or activeStreams while new conversation does not and if so add
        // to new conversation the missing rtcObject, pc or activeStream


        if (Object.entries(conversation.media.rtcObjects).length === 0 && Object.entries(nxmCall.rtcObjects).length !== 0) {
          Object.assign(conversation.media.rtcObjects, nxmCall.rtcObjects);
        }

        if (!conversation.media.pc && pc) {
          Object.assign(conversation.media.pc = pc);
        }

        if (conversation.application.activeStreams.length === 0 && nxmCall.application.activeStreams.length > 0) {
          conversation.application.activeStreams = nxmCall.application.activeStreams;
        }

        delete nxmCall.client_ref;
        delete nxmCall.knocking_id; // if rtcStats on call object place on media object as well

        if (nxmCall.rtcStats) {
          conversation.media.rtcStats = nxmCall.rtcStats;
        } // remove the leg_id from the call_draft_list


        this.application._call_draft_list.delete(event.body.channel.id);

        this.application.calls.set(conversation.id, nxmCall);

        nxmCall._handleStatusChange(event);

        this.log.debug("_processMemberJoined: processedCall ", {
          nxmCall
        });

        if (conversation.members && event.body.member_id) {
          const member = conversation.members.get(event.body.member_id);
          if (member) this.application.emit('member:call', member, nxmCall);
        } // Supports old way of listening for the media stream after the conversation is set up even though its already there


        setTimeout(() => rtc_helper_1.default.emitMediaStream(conversation.me, pc, nxmCall.stream), 50);
      }

      this.log.debug("_processMemberJoined: default member joined: ", {
        event
      });
      return event;
    } catch (e) {
      this.log.error("_processMemberJoined: ", {
        e
      });
    }
  }

  _processMemberInvited(conversation, event) {
    var _a, _b, _c, _d, _e, _f;

    try {
      if (!conversation) {
        this.log.warn(`no conversation object for ${event.type}`);
        return event;
      } // no need to process the event if it's not media related invite, or the member is us


      if (((_a = conversation.me) === null || _a === void 0 ? void 0 : _a.user.id) === event.body.invited_by || !((_c = (_b = event.body.user.media) === null || _b === void 0 ? void 0 : _b.audio_settings) === null || _c === void 0 ? void 0 : _c.enabled)) {
        return event;
      }

      const caller = utils_1.default.getMemberNumberFromEventOrNull(event.body.channel) || utils_1.default.getMemberFromNameOrNull(conversation, event.body.invited_by) || 'unknown';
      const nxmCall = new nxmCall_1.default(this.application, conversation, caller);
      this.application.calls.set(conversation.id, nxmCall);

      if ((_d = event.body) === null || _d === void 0 ? void 0 : _d.sdp) {
        nxmCall._setOffer({
          sdp: event.body.sdp,
          leg_id: event.body.channel.id
        });
      } // (VAPI call)


      if (!((_e = conversation.display_name) === null || _e === void 0 ? void 0 : _e.startsWith('CALL_'))) {
        nxmCall._handleStatusChange(event);
      }

      this.application.emit('member:call', this.application.conversations.get(event.cid).members.get((_f = event.body) === null || _f === void 0 ? void 0 : _f.member_id), nxmCall);
      return event;
    } catch (e) {
      this.log.error("_processMemberInvited: ", {
        e
      });
    }
  }

}

exports["default"] = ApplicationEventsHandler;
module.exports = ApplicationEventsHandler;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/handlers/conversation_events.js":
/*!************************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/handlers/conversation_events.js ***!
  \************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Conversation Events Handler
 *
 * Copyright (c) Nexmo Inc.
 */

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");

const nxmEvent_1 = __importDefault(__webpack_require__(/*! ../events/nxmEvent */ "./node_modules/nexmo-client/dist/events/nxmEvent.js"));

const text_event_1 = __importDefault(__webpack_require__(/*! ../events/text_event */ "./node_modules/nexmo-client/dist/events/text_event.js"));

const image_event_1 = __importDefault(__webpack_require__(/*! ../events/image_event */ "./node_modules/nexmo-client/dist/events/image_event.js"));

const message_event_1 = __importDefault(__webpack_require__(/*! ../events/message_event */ "./node_modules/nexmo-client/dist/events/message_event.js"));
/**
 * Handle Conversation Events
 *
 * @class ConversationEventsHandler
 * @param {Application} application
 * @param {Conversation} conversation
 * @private
*/


class ConversationEventHandler {
  constructor(application, conversation) {
    this.log = loglevel_1.getLogger(this.constructor.name);
    this.application = application;
    this.conversation = conversation;
    this.constructed_event = null;
    this._handleEventMap = {
      'event:delete': this._processDelete,
      'image': this._processImage,
      'image:delivered': this._processDelivered,
      'image:seen': this._processSeen,
      'member:invited': this._processMember,
      'member:joined': this._processMember,
      'member:left': this._processMember,
      'audio:ringing:start': this._processMember,
      'leg:status:update': this._processLegStatus,
      'member:media': this._processMedia,
      'text': this._processText,
      'text:delivered': this._processDelivered,
      'text:seen': this._processSeen,
      'audio:mute:on': this._processMuteForMedia,
      'audio:mute:off': this._processMuteForMedia,
      'message': this._processMessage,
      'message:delivered': this._processDelivered,
      'message:seen': this._processSeen,
      'message:submitted': this._processSubmitted,
      'message:rejected': this._processRejected,
      'message:undeliverable': this._processUndeliverable
    };
  }
  /**
    * Handle and event.
    *
    * Identify the type of the event,
    * create the corresponding Class instance
    * emit to the corresponding Objects
    * @param {object} event
    * @private
  */


  handleEvent(event) {
    if (this._handleEventMap.hasOwnProperty(event.type)) {
      return this._handleEventMap[event.type].call(this, event) || new nxmEvent_1.default(this.conversation, event);
    }

    return new nxmEvent_1.default(this.conversation, event);
  }
  /**
    * Mark the requested event as delivered
    * use that event as constructed to update the local events' map
      * @param {object} event
    * @returns the NXMEvent that is marked as delivered
    * @private
  */


  _processDelivered(event) {
    let event_to_mark = this.conversation.events.get(event.body.event_id);

    if (event_to_mark) {
      event_to_mark.state = event_to_mark.state || {};
      event_to_mark.state.delivered_to = event_to_mark.state.delivered_to || {};
      event_to_mark.state.delivered_to[event.from] = event.timestamp;
      return event_to_mark;
    } else {
      this.log.warn('NXMEvent not found');
      return null;
    }
  }
  /**
    * Delete the requested event
    * empty the payload of the event (text, image or message)
    * use that event as constructed to update the local events map
    * @param {object} event
    * @returns the deleted events
    * @private
  */


  _processDelete(event) {
    var _a, _b;

    let event_to_delete = this.conversation.events.get((_b = (_a = event) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.event_id);

    if (event_to_delete) {
      if (event_to_delete.body.text) event_to_delete.body.text = '';
      if (event_to_delete.body.representations) event_to_delete.body.representations = '';
      event_to_delete.body.timestamp = {
        deleted: event.timestamp
      };
      return event_to_delete;
    } else {
      this.log.warn('NXMEvent not found');
      return null;
    }
  }
  /**
    * Return an ImageEvent with the corresponding image data
    * @param {object} event
    * @returns {ImageEvent}
  */


  _processImage(event) {
    const imageEvent = new image_event_1.default(this.conversation, event); // Automatically send a delivery
    // avoid sending delivered to our own events

    if (this.conversation.me.id !== imageEvent.from) {
      imageEvent.delivered();
    }

    return imageEvent;
  }
  /**
    * Handle events for member state changes (joined, invited, left)
    * in conversation level.
    * Other members are going through here too.
    * For .me member initial event (join, invite) use the application listener
      * @param {object} event
    * @returns {NXMEvent}
    * @private
  */


  _processMember(event) {
    // needs to first process the call state and then alter the member
    if (this.application.calls.has(this.conversation.id)) {
      let call = this.application.calls.get(this.conversation.id);

      call._handleStatusChange(event);
    }

    if (this.conversation.members.has(event.from)) this.conversation.members.get(event.from)._handleEvent(event);
    return new nxmEvent_1.default(this.conversation, event);
  }
  /**
   * Handle events for leg status updates in conversation level.
   * Other member's legs are going through here too.
   * @param {object} event
   * @returns {NXMEvent}
   * @private
  */


  _processLegStatus(event) {
    if (this.conversation.members.has(event.from)) this.conversation.members.get(event.from)._handleEvent(event);
    return new nxmEvent_1.default(this.conversation, event);
  }
  /**
    * Handle member:media events
    * use a call object if and the member object
      * @param {object} event
    * @private
  */


  _processMedia(event) {
    if (this.conversation.members.has(event.from)) this.conversation.members.get(event.from)._handleEvent(event);
    return null;
  }
  /**
    * Handle *:mute:* events
      * @param {object} event
    * @private
  */


  _processMuteForMedia(event) {
    if (this.conversation.media.rtcObjects[event.body.rtc_id]) {
      event.streamIndex = this.conversation.media.rtcObjects[event.body.rtc_id].streamIndex;
    } else {
      this.log.warn('No audio stream was found');
    }

    return null;
  }
  /**
    * Mark the requested event as seen
    * use that event as constructed to update the local Events map
      * @param {object} event
    * @private
  */


  _processSeen(event) {
    let event_to_mark = this.conversation.events.get(event.body.event_id);

    if (event_to_mark) {
      event_to_mark.state = event_to_mark.state || {};
      event_to_mark.state.seen_by = event_to_mark.state.seen_by || {};
      event_to_mark.state.seen_by[event.from] = event.timestamp;
      return event_to_mark;
    } else {
      this.log.warn('NXMEvent not found');
      return null;
    }
  }
  /**
    * Create the TextEvent object and trigger .delivered()
      * @param {object} event
    * @private
  */


  _processText(event) {
    var _a, _b;

    const textEvent = new text_event_1.default(this.conversation, event); // Automatically send a delivery
    // avoid sending delivered to our own events

    if (((_b = (_a = this.conversation) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.id) !== textEvent.from) {
      textEvent.delivered();
    }

    return textEvent;
  }
  /**
    * Create the MessageEvent object and trigger .delivered()
      * @param {object} event
    * @private
  */


  _processMessage(event) {
    var _a, _b;

    const messageEvent = new message_event_1.default(this.conversation, event); // Automatically send a delivery
    // avoid sending delivered to our own events

    if (((_b = (_a = this.conversation) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.id) !== messageEvent.from) {
      messageEvent.delivered();
    }

    return messageEvent;
  }
  /**
    * Mark the requested event as submitted
    * use that event as constructed to update the local Events map
      * @param {object} event
    * @private
  */


  _processSubmitted(event) {
    let event_to_mark = this.conversation.events.get(event.body.event_id);

    if (event_to_mark) {
      event_to_mark.state = event_to_mark.state || {};
      event_to_mark.state.submitted_to = event_to_mark.state.submitted_to || {};
      event_to_mark.state.submitted_to[event.from] = event.timestamp;
      return event_to_mark;
    } else {
      this.log.warn('NXMEvent not found');
      return null;
    }
  }
  /**
    * Mark the requested event as rejected
    * use that event as constructed to update the local Events map
      * @param {object} event
    * @private
  */


  _processRejected(event) {
    let event_to_mark = this.conversation.events.get(event.body.event_id);

    if (event_to_mark) {
      event_to_mark.state = event_to_mark.state || {};
      event_to_mark.state.rejected_by = event_to_mark.state.rejected_by || {};
      event_to_mark.state.rejected_by[event.from] = event.timestamp;
      return event_to_mark;
    } else {
      this.log.warn('NXMEvent not found');
      return null;
    }
  }
  /**
    * Mark the requested event as undeliverable
    * use that event as constructed to update the local Events map
      * @param {object} event
    * @private
  */


  _processUndeliverable(event) {
    let event_to_mark = this.conversation.events.get(event.body.event_id);

    if (event_to_mark) {
      event_to_mark.state = event_to_mark.state || {};
      event_to_mark.state.undeliverable_to = event_to_mark.state.undeliverable_to || {};
      event_to_mark.state.undeliverable_to[event.from] = event.timestamp;
      return event_to_mark;
    } else {
      this.log.warn('NXMEvent not found');
      return null;
    }
  }

}

exports["default"] = ConversationEventHandler;
module.exports = ConversationEventHandler;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/handlers/events_queue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/handlers/events_queue.js ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 * Events Queue
 *
 * Copyright (c) Nexmo Inc.
*/

const nexmoClientError_1 = __webpack_require__(/*! ../nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");

const utils_1 = __importDefault(__webpack_require__(/*! ../utils */ "./node_modules/nexmo-client/dist/utils.js"));

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");
/**
 * Handle Mapping of Conversation Ids to ConversationEventsProcessor
 *
 * @class EventsQueue
 * @private
 */


class EventsQueue {
  constructor(callback) {
    this.callback = callback;
    this.cidMap = new Map();
    this.log = loglevel_1.getLogger(this.constructor.name);
  } // enqueue(item)


  async enqueue(event, application) {
    var _a, _b, _c, _d; //Check if cid or event id and if not just send to application to be processed


    const {
      cid,
      id
    } = event;
    const eventId = Number(id);
    if (!cid || isNaN(eventId)) return this.callback(event); // Check if Conversation Events Queue for CID and if not create one

    if (!this.cidMap.get(cid)) {
      this.log.debug(`enqueue: create new ConversationEventsProcessor for ${cid}`);
      const newConversationEventsProcessor = new ConversationEventsProcessor(cid, eventId - 1, application); // edge case for member:media or  member:joined event before transfer or member:joined && channel:id

      if (event.type == 'member:media' && ((_b = (_a = event.body) === null || _a === void 0 ? void 0 : _a.media) === null || _b === void 0 ? void 0 : _b.audio) || event.type == 'member:joined' && ((_d = (_c = event.body) === null || _c === void 0 ? void 0 : _c.channel) === null || _d === void 0 ? void 0 : _d.id)) {
        //fetch last 20 events of conversation & if there is a transfer to this converstaion
        const startingFetchEventId = eventId - 20 < 1 ? 1 : eventId - 20;
        const events = await newConversationEventsProcessor.fetchConversationEvents(startingFetchEventId, 20);
        let transferEventFound = false;
        events.forEach(fetchedEvent => {
          if (fetchedEvent.type === 'rtc:transfer' && fetchedEvent.from === event.from) {
            transferEventFound = true; // reset the events processor to process transfer event next

            newConversationEventsProcessor.lastEventIdProcessed = Number(fetchedEvent.id) - 1;
          }

          if (transferEventFound) {
            //Enqueue all events after rtc:transfer event found
            newConversationEventsProcessor.enqueue(Number(fetchedEvent.id), fetchedEvent);
          }
        });
      }

      this.cidMap.set(cid, newConversationEventsProcessor);
    }

    const conversationEventsProcessor = this.cidMap.get(cid); // Add new event to conversation events queue

    conversationEventsProcessor.enqueue(eventId, event); // If not currently processing events in queue begin processing

    if (!conversationEventsProcessor.processing) {
      conversationEventsProcessor.processing = true;
      const processingEvents = await conversationEventsProcessor.processEvents();
    }

    return;
  }

}

exports.EventsQueue = EventsQueue;
/**
 * Handle Ordering of Conversation Events for Processing
 *
 * @class ConversationEventsProcessor
 * @private
 */

class ConversationEventsProcessor {
  constructor(cid, lastEventIdProcessed, application) {
    this.cid = cid;
    this.eventsMap = new Map();

    this.callback = event => application._handleEvent(event);

    this.lastEventIdProcessed = lastEventIdProcessed;
    this.largestEventIdInQueue = lastEventIdProcessed;
    this.processing = false;
    this.application = application;
    this.eventsFetchRange = 9;
    this.log = loglevel_1.getLogger(this.constructor.name);
  }

  enqueue(eventId, event) {
    if (eventId > this.largestEventIdInQueue) this.largestEventIdInQueue = eventId;
    if (eventId > this.lastEventIdProcessed) this.eventsMap.set(eventId, event);
    return event;
  }

  dequeue(eventId) {
    const event = this.eventsMap.get(eventId);
    this.eventsMap.delete(eventId);
    return event;
  }

  async processEvents() {
    const doneProcessing = () => {
      this.eventsMap.clear();
      this.log.debug(`processEvents: Done Processing`);
      return this.processing = false;
    };

    if (this.eventsMap.size < 1) return doneProcessing();
    const nextEventToProcess = this.lastEventIdProcessed + 1;
    const processedEvent = await this.processNextEvent(nextEventToProcess);

    if (processedEvent) {
      this.lastEventIdProcessed = Number(processedEvent.id);
      return this.processEvents();
    } else {
      return doneProcessing();
    }
  }

  async processNextEvent(eventId) {
    this.log.debug(`processNextEvent: processing event number ${eventId}`);
    const event = this.dequeue(eventId);

    try {
      if (event) {
        await this.callback(event);
        return event;
      } else {
        // The next event in the sequence was not in the map, if larger event id in queue (gap)
        // make a request to CS to get all conversation events and add any missed
        if (this.largestEventIdInQueue > eventId) {
          this.log.debug(`processNextEvent: largestEventIdInQueue-${this.largestEventIdInQueue} > eventId-${eventId}`);
          const foundEvent = await this.fetchEventsAndProcess(eventId);

          if (foundEvent) {
            this.log.debug("processNextEvent: foundEvent ", {
              foundEvent
            });
            await this.callback(foundEvent);
            return foundEvent;
          } else {
            this.log.debug(`processNextEvent: not found process next ${eventId + 1}`);
            return this.processNextEvent(eventId + 1);
          }
        }

        return;
      }
    } catch (e) {
      return;
    }
  }

  async fetchEventsAndProcess(missingEvent) {
    //fetch conversation events
    try {
      const eventsList = await this.fetchConversationEvents(missingEvent, this.eventsFetchRange);
      this.log.debug("fetchEventsAndProcess: fetched events list ", {
        eventsList
      }); //check for next event id

      let foundEvent;
      eventsList.forEach(event => {
        //add cid back to fetched event
        event.cid = this.cid;
        const eventId = Number(event.id);
        if (isNaN(eventId) || eventId < missingEvent) return;

        if (eventId > missingEvent) {
          this.log.debug(`fetchEventsAndProcess: event > missingEvent ${eventId} `, {
            missingEvent
          });
          this.enqueue(eventId, event);
        } else {
          this.log.debug("fetchEventsAndProcess: foundEvent ", {
            event
          });
          foundEvent = event;
        }
      });
      return foundEvent;
    } catch (e) {
      this.log.debug("fetchEventsAndProcess: error ", {
        e
      });
      return;
    }
  }

  async fetchConversationEvents(start_id, range) {
    this.log.debug("fetchConversationEvents: ", this.cid, start_id); // from & to by event id to restrict

    const end_id = this.largestEventIdInQueue > start_id ? this.largestEventIdInQueue + range : start_id + range;
    const url = `${this.application.session.config.nexmo_api_url}/beta2/conversations/${this.cid}/events`;

    try {
      const response = await utils_1.default.paginationRequest(url, {
        start_id,
        end_id
      }, this.application.session.config.token);
      const eventsList = response.items;
      return eventsList;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }

}

exports.ConversationEventsProcessor = ConversationEventsProcessor;
module.exports = {
  EventsQueue: EventsQueue,
  ConversationEventsProcessor: ConversationEventsProcessor
};

/***/ }),

/***/ "./node_modules/nexmo-client/dist/handlers/rtc_events.js":
/*!***************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/handlers/rtc_events.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  RTC Events Handler
 *
 * Copyright (c) Nexmo Inc.
 */

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");
/**
 * Handle rtc Events
 *
 * @class RtcEventHandler
 * @private
 */


class RtcEventHandler {
  constructor(application) {
    this.log = loglevel_1.getLogger(this.constructor.name);
    this.application = application;
    this._handleRtcEventMap = {
      'rtc:transfer': this._processRtcTransfer,
      'rtc:answer': this._processRtcAnswer,
      'rtc:hangup': this._processRtcHangup
    };
  }
  /**
   * Entry point for rtc events
   * @param {object} event
   * @private
   */


  _handleRtcEvent(event) {
    if (this._handleRtcEventMap.hasOwnProperty(event.type)) {
      return this._handleRtcEventMap[event.type].call(this, event);
    }
  }
  /**
    * on transfer event
    * update the conversation object in the NXMCall,
    * update the media object in the new conversation
    * set `transferred_to` <Conversation> on the member that is transferred
    * @param {object} event
    * @private
  */


  _processRtcTransfer(event) {
    this.log.debug('_processRtcTransfer: ', {
      event
    });
    const old_conversation = this.application.conversations.get(event.body.transferred_from);
    const new_conversation = this.application.conversations.get(event.cid);
    const nxmCall = this.application.calls.get(event.body.transferred_from);

    if (!nxmCall) {
      this.log.warn('NXMCall transfer for unknown nxmCall');
      return;
    } // mark the transferred member in the old conversation


    nxmCall.conversation.members.get(event.body.was_member).transferred_to = new_conversation;

    nxmCall._setupConversationObject(new_conversation);

    nxmCall.transferred = true;
    this.application.calls.set(event.cid, nxmCall);
    this.application.calls.delete(event.body.transferred_from); // in case we joined in the middle of a transfer and we don't have the
    // previous conversation in our list yet

    if (old_conversation) {
      new_conversation.members.get(event.from).transferred_from = old_conversation;

      new_conversation.media._attachEndingEventHandlers(); // Checking to see if old conversation has rtcObject, pc or activeStreams while new conversation does not and if so add
      // to new conversation the missing rtcObject, pc or activeStream


      if (Object.entries(new_conversation.media.rtcObjects).length === 0 && Object.entries(old_conversation.media.rtcObjects).length !== 0) {
        Object.assign(new_conversation.media.rtcObjects, old_conversation.media.rtcObjects);
      }

      if (!new_conversation.media.pc && old_conversation.media.pc) {
        Object.assign(new_conversation.media.pc = old_conversation.media.pc);
      }

      if (new_conversation.application.activeStreams.length === 0 && old_conversation.application.activeStreams.length > 0) {
        new_conversation.application.activeStreams = old_conversation.application.activeStreams;
      }
    }
  }
  /**
   * Handle rtc:answer event
   *
   * @param {object} event
   * @private
   */


  _processRtcAnswer(event) {
    this.log.debug('_processRtcAnswer: ', {
      event
    });

    if (this.application.calls.has(event.cid)) {
      this.application.calls.get(event.cid).id = event.body.rtc_id;
    }
  }
  /**
   * Handle rtc:hangup event
   *
   * @param {object} event
   * @private
   */


  _processRtcHangup(event) {
    this.log.debug('_processRtcHangup: ', {
      event
    });

    if (this.application.calls.has(event.cid)) {
      let call = this.application.calls.get(event.cid);

      call._handleStatusChange(event);
    }
  }

}

exports["default"] = RtcEventHandler;
module.exports = RtcEventHandler;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/handlers/sip_events.js":
/*!***************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/handlers/sip_events.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  SIP Events Handler
 *
 * Copyright (c) Nexmo Inc.
 */

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");
/**
 * Handle sip Events
 *
 * @class SipEventHandler
 * @private
  */


class SipEventHandler {
  constructor(application) {
    this.log = loglevel_1.getLogger(this.constructor.name);
    this.application = application;
    this._handleSipCallEventMap = {
      'sip:hangup': this._processSipHangup,
      'sip:ringing': this._processSipRinging
    };
  }
  /**
   * Entry point for sip events
   * The event belongs to a call Object
   * @private
  */


  _handleSipCallEvent(event) {
    this.log.debug("_handleSipCallEvent: ", {
      event
    });

    if (!this.application.calls.has(event.cid)) {
      this.log.warn('There is no call object for this Conversation id.');
      return;
    }

    const event_call = this.application.calls.get(event.cid);

    if (this._handleSipCallEventMap.hasOwnProperty(event.type)) {
      return this._handleSipCallEventMap[event.type].call(this, event_call, event);
    }
  }
  /**
   * Handle sip:hangup event
   *
   * @param {object} event_call
   * @private
   */


  _processSipHangup(event_call, event) {
    this.log.debug("_processSipHangup: ", event);

    event_call._handleStatusChange(event);
  }
  /**
   * Handle sip:ringing event
   *
   * @param {object} event_call
   * @private
   */


  _processSipRinging(event_call, event) {
    this.log.debug("_processSipRinging: ", event);

    event_call._handleStatusChange(event);
  }

}

exports["default"] = SipEventHandler;
module.exports = SipEventHandler;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/nexmo-client/dist/index.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;

  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return root['NexmoClient'] = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(void 0, function () {
  'use strict';

  let NexmoClient = __webpack_require__.g.NexmoClient || {};
  NexmoClient = __webpack_require__(/*! ./sdk */ "./node_modules/nexmo-client/dist/sdk.js");
  __webpack_require__.g.NexmoClient = NexmoClient;
  return NexmoClient;
});

/***/ }),

/***/ "./node_modules/nexmo-client/dist/member.js":
/*!**************************************************!*\
  !*** ./node_modules/nexmo-client/dist/member.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Member Object Model
 *
 * Copyright (c) Nexmo Inc.
*/

const WildEmitter = __webpack_require__(/*! wildemitter */ "./node_modules/wildemitter/wildemitter.js");

const nexmoClientError_1 = __webpack_require__(/*! ./nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");

const nxmEvent_1 = __importDefault(__webpack_require__(/*! ./events/nxmEvent */ "./node_modules/nexmo-client/dist/events/nxmEvent.js"));

const utils_1 = __importDefault(__webpack_require__(/*! ./utils */ "./node_modules/nexmo-client/dist/utils.js"));
/**
 * An individual user (i.e. conversation member).
 * @class Member
 * @param {Conversation} conversation
 * @param {object} params
*/


class Member {
  constructor(conversation, params) {
    this.conversation = conversation;
    this.callStatus = null;

    this._normalise(params);

    WildEmitter.mixin(Member);
  }
  /**
   * Update object instance and align attribute names
   *
   * Handle params input to keep consistent the member object
   * @param {object} params member attributes
   * @private
  */


  _normalise(params) {
    if (params) {
      this.user = this.user || {};
      this.channel = params.channel || {
        type: 'app'
      };
      let key;

      for (key in params) {
        switch (key) {
          case 'member_id':
            this.id = params.member_id;
            break;

          case 'timestamp':
            this.timestamp = params.timestamp;
            break;

          case 'state':
            this.state = params.state;
            break;

          case 'from':
            this.id = params.from; // special case for member events

            break;

          case 'user_id':
            this.user.id = params.user_id;
            break;

          case 'name':
            this.user.name = params.name;
            break;

          case 'user':
            this.user = {
              name: params.user.name,
              id: params.user.user_id || params.user.id
            };
            this.display_name = this.display_name || params.user.display_name;
            break;

          case 'invited_by':
            this.invited_by = params.invited_by;
            break;

          case 'display_name':
            this.display_name = this.display_name || params.display_name;
            break;

          case '_embedded':
            if (params._embedded.user) {
              this.user = {
                id: params._embedded.user.id || this.user.id,
                name: params._embedded.user.name || this.user.name
              };
              this.display_name = this.display_name || params._embedded.user.display_name;
            }

          case 'conversation':
            break;

          default:
            if (!params.type) {
              this[key] = params[key];
            }

        }
      } // join conversation returns our member with only id,
      // compare it for now and use the username we have in the application object


      if (this.conversation.application.me && params.user_id === this.conversation.application.me.id) {
        this.user.name = this.conversation.application.me.name;
      } // make sure we don't keep a member.user_id, name in any flow


      delete this.user_id;
      delete this.name;
      delete this.user.user_id;
    }
  }
  /**
   * Play the given stream only to this member within the conversation
   *
   * @param {string} [params]
   *
   * @returns {Promise<NXMEvent>}
   * @private
  */


  async playStream(params) {
    try {
      const response = await this.conversation.application.session.sendNetworkRequest({
        type: 'POST',
        path: `conversations/${this.id}/events`,
        data: {
          type: 'audio:play',
          to: this.id,
          body: params
        }
      });
      return new nxmEvent_1.default(this.conversation, response);
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Speak the given text only to this member within the Conversation.
   *
   * @param {string} [params]
   *
   * @returns {Promise<NXMEvent>}
   * @private
  */


  async sayText(params) {
    try {
      const response = await this.conversation.application.session.sendNetworkRequest({
        type: 'POST',
        path: `conversations/${this.id}/events`,
        data: {
          type: 'audio:say',
          cid: this.id,
          from: this.conversation.me.id,
          to: this.id,
          body: {
            text: params.text,
            voice_name: params.voice_name || 'Amy',
            level: params.level || 1,
            queue: params.queue || true,
            loop: params.loop || 1,
            ssml: params.ssml || false
          }
        }
      });
      return new nxmEvent_1.default(this.conversation, response);
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Kick a Member from the Conversation.
   *
   * @param {object} [reason] the reason for kicking out a member
   * @param {string} [reason.reason_code] the code of the reason
   * @param {string} [reason.reason_text] the description of the reason
   * @example <caption>Remove a member from the Conversation.</caption>
   * // Remove a member
   * member.kick({reason_code: "Reason Code", reason_text: "Reason Text"})
   * .then(() => {
   *     console.log("Successfully removed member.");
   * }).catch((error) => {
   *     console.error("Error removing member: ", error);
   * });
   *
   * // Remove yourself
   * conversation.me.kick({reason_code: "Reason Code", reason_text: "Reason Text"})
   * .then(() => {
   *     console.log("Successfully removed yourself.");
   * }).catch((error) => {
   *     console.error("Error removing yourself: ", error);
   * });
   *
   * @returns {Promise}
  */


  async kick(reason) {
    var _a, _b, _c;

    let path = `conversations/${this.conversation.id}/members/${this.id}`;
    let params = new URLSearchParams(); // add member_id of from

    if ((_c = (_b = (_a = this) === null || _a === void 0 ? void 0 : _a.conversation) === null || _b === void 0 ? void 0 : _b.me) === null || _c === void 0 ? void 0 : _c.id) {
      params.append('from', this.conversation.me.id);
    }

    if (reason) {
      Object.keys(reason).forEach(key => {
        params.append(key, reason[key]);
      });
    }

    path += `?${params.toString()}`;

    try {
      return await this.conversation.application.session.sendNetworkRequest({
        type: 'DELETE',
        path
      });
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Mute your stream.
   *
   * @param {boolean} [mute] true for mute, false for unmute
   * @param {number} [streamIndex] stream index of the stream
   * @example <caption>Mute audio stream of your Member.</caption>
   * // Mute yourself
   * conversation.me.mute(true);
   *
   * // Unmute yourself
   * conversation.me.mute(false);
   *
   * @returns {Promise}
  */


  mute(mute, streamIndex = null) {
    return this.conversation.media.mute(mute, streamIndex);
  }
  /**
   * Earmuff yourself in the Conversation.
   *
   * @param {boolean} earmuff true or false
   * @example <caption>Disables your Member from hearing other Members in the Conversation.</caption>
   * // Earmuff yourself
   * conversation.me.earmuff(true);
   *
   * // Unearmuff yourself
   * conversation.me.earmuff(false);
   *
   * @returns {Promise}
   *
  */


  earmuff(earmuff) {
    return this.conversation.media.earmuff(earmuff);
  }
  /**
   * Handle member object events
   *
   * Handle events that are modifying this member instance
   * @param {NXMEvent} event invited, joined, left, media events
   * @private
  */


  _handleEvent(event) {
    switch (event.type) {
      case 'member:invited':
        this._normalise(event.body); // take care of misaligned objects.


        this.state = 'INVITED';
        this.timestamp.invited = event.body.timestamp.invited;

        if (!event.body.invited_by && event.body.user.media && event.body.user.media.audio_settings && event.body.user.media.audio_settings.enabled) {
          this._setCallStatusAndEmit('started');
        }

        break;

      case 'member:joined':
        this._normalise(event.body); // take care of misaligned objects.


        this.state = 'JOINED';
        this.timestamp.joined = event.body.timestamp.joined;

        if (event.body.channel && event.body.channel.knocking_id) {
          this._setCallStatusAndEmit('started');
        }

        break;

      case 'member:left':
        this._normalise(event.body); // take care of misaligned objects.


        this.state = 'LEFT';
        this.timestamp.left = event.body.timestamp.left;

        if (event.body.reason && event.body.reason.text) {
          this._setCallStatusAndEmit(event.body.reason.text);
        }

        break;

      case 'member:media':
        this.media = event.body.media;
        break;

      case 'leg:status:update':
        this.channel.legs = utils_1.default.updateMemberLegs(this.channel.legs, event);

        this._setCallStatusAndEmit(event.body.status);

        break;

      case 'audio:ringing:start':
        if (!this.callStatus || this.callStatus === 'started') {
          this._setCallStatusAndEmit('ringing');
        }

        break;

      default:
        break;
    }
  }
  /**
     * Set the member.callStatus and emit a member:call:status event
     *
     * @param {Member.callStatus} this.callStatus the call status to set
     * @private
    */


  _setCallStatusAndEmit(callStatus) {
    if (this.callStatus !== String(callStatus)) {
      this.callStatus = callStatus;
      this.conversation.emit('member:call:status', this);
    }
  }

}

exports["default"] = Member;
module.exports = Member;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/modules/errors_emitter.js":
/*!******************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/modules/errors_emitter.js ***!
  \******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Errors Emitter
 *
 * Copyright (c) Nexmo Inc.
*/

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");

const nexmoClientError_1 = __webpack_require__(/*! ../nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");
/**
 * Class that can emit errors via any emitter passed to it.
 * @class ErrorsEmitter
 * @param {Emitter} emitter - Any event emitter that implements "emit" and "releaseGroup". Basically object that is mixed with Wildemitter.
 * @property {string} LISTENER_GROUP='NXM-errors' - the group this emitter will register
 * @emits Emitter#NXM-errors
 * @private
*/

/**
 * Application listening for client and expired-token errors events.
 *
 * @event Application#NXM-errors
 *
 * @property {NexmoClientError} error
 *
 * @example <caption>listen for client error events on Application level</caption>
 * application.on('*', 'NXM-errors', (error) => {
 *    console.log('Error thrown with type ' + error.type);
 *  });
 * @example <caption>listen for expired-token error events and then update the token on Application level</caption>
 * application.on('system:error:expired-token', 'NXM-errors', (error) => {
 * 	console.log('token expired');
 * 	application.updateToken(token);
 * });
*/


class ErrorsEmitter {
  constructor(emitter) {
    this.log = loglevel_1.getLogger(this.constructor.name);

    if (!emitter) {
      throw new nexmoClientError_1.NexmoClientError('no emitter object passed for the Error Emitter');
    }

    this.emitter = emitter;
    this.LISTENER_GROUP = 'NXM-errors';
  }
  /**
   * Detect if the param.type includes error and emit that payload in the LISTENER_GROUP
   * @param param - the payload to forward in the LISTENER_GROUP
   * @param param.type - the type of the event to check if it's an error
  */


  emitResponseIfError(param) {
    if (this._isTypeError(param.type)) {
      return this.emitter.emit(param.type, this.LISTENER_GROUP, param);
    }

    return;
  }
  /**
   * Release Group on the registered emitter (using the namespace LISTENER_GROUP that is set)
  */


  cleanup() {
    return this.emitter.releaseGroup(this.LISTENER_GROUP);
  }
  /**
   * Returns true if the param includes 'error'
   * @param {string} type - the error type to check
  */


  _isTypeError(param) {
    return param.indexOf('error') !== -1;
  }

}

exports["default"] = ErrorsEmitter;
module.exports = ErrorsEmitter;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/modules/media.js":
/*!*********************************************************!*\
  !*** ./node_modules/nexmo-client/dist/modules/media.js ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Media Object Model
 *
 * Copyright (c) Nexmo Inc.
 */

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");

const nexmoClientError_1 = __webpack_require__(/*! ../nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");

const rtc_helper_1 = __importDefault(__webpack_require__(/*! ./rtc_helper */ "./node_modules/nexmo-client/dist/modules/rtc_helper.js"));

const utils_1 = __importDefault(__webpack_require__(/*! ../utils */ "./node_modules/nexmo-client/dist/utils.js"));

const nxmEvent_1 = __importDefault(__webpack_require__(/*! ../events/nxmEvent */ "./node_modules/nexmo-client/dist/events/nxmEvent.js"));

const conversation_1 = __importDefault(__webpack_require__(/*! ../conversation */ "./node_modules/nexmo-client/dist/conversation.js"));

const application_1 = __importDefault(__webpack_require__(/*! ../application */ "./node_modules/nexmo-client/dist/application.js"));
/**
 * Member listening for audio stream on.
 *
 * @event Member#media:stream:on
 *
 * @property {number} payload.streamIndex the index number of this stream
 * @property {number} [payload.rtc_id] the rtc_id / leg_id
 * @property {string} [payload.remote_member_id] the id of the Member the stream belongs to
 * @property {string} [payload.name] the stream's display name
 * @property {MediaStream} payload.stream the stream that is activated
 * @property {boolean} [payload.audio_mute] if the audio is muted
 */

/**
 * WebRTC Media class
 * @class Media
 * @property {Application} application The parent application object
 * @property {Conversation} parentConversation the conversation object this media instance belongs to
 * @property {number} parentConversation.streamIndex the latest index of the streams, updated in each new peer offer
 * @property {object[]} rtcObjects data related to the rtc connection
 * @property {string} rtcObjects.rtc_id the rtc_id
 * @property {PeerConnection} rtcObjects.pc the current PeerConnection object
 * @property {Stream} rtcObjects.stream the stream of the specific rtc_id
 * @property {string} [rtcObjects.type] audio the type of the stream
 * @property {number} rtcObjects.streamIndex the index number of the stream (e.g. use to mute)
 * @property {RTCStatsConfig} rtcstats_conf the config needed to controll rtcstats analytics behavior
 * @property {RTCStatsAnalytics} rtcstats an instance to collect analytics from a peer connection
 * @emits Application#rtcstats:report
 * @emits Application#rtcstats:analytics
 * @emits Member#media:stream:on
 */


class Media {
  constructor(conversationOrApplication) {
    var _a, _b, _c;

    const conversation = conversationOrApplication instanceof conversation_1.default ? conversationOrApplication : null;
    const application = conversationOrApplication instanceof application_1.default ? conversationOrApplication : null;
    this.log = loglevel_1.getLogger(this.constructor.name);

    if (conversation) {
      this.rtcHelper = new rtc_helper_1.default();
      this.application = conversation.application;
      this.application.activeStreams = this.application.activeStreams || [];
      this.parentConversation = conversation;
      this.rtcObjects = {};
      this.streamIndex = 0;
      this.rtcstats_conf = ((_c = (_b = (_a = this.application) === null || _a === void 0 ? void 0 : _a.session) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.rtcStats) || {};
      this.rtcStats = null;
    } else if (application) {
      this.rtcHelper = new rtc_helper_1.default();
      this.application = application;
    } else {
      this.log.warn("No conversation object in Media");
    }
  }

  _attachEndingEventHandlers() {
    if (!this.parentConversation) {
      return;
    }

    this.log.debug("attaching leave listeners in media for " + this.parentConversation.id);
    this.parentConversation.on("rtc:hangup", async event => {
      let member;

      if (this.parentConversation.members.has(event.from)) {
        member = this.parentConversation.members.get(event.from);
      } else {
        try {
          member = await this.parentConversation.getMember(event.from);
        } catch (error) {
          this.log.warn(`There is an error getting the member ${error}`);
        }
      }

      if (member.user.id === this.application.me.id && this.application.activeStreams.length) {
        this._cleanMediaProperties();
      } // terminate peer connection stream in case of a transfer


      if (member.user.id === this.application.me.id && member.transferred_from) {
        member.transferred_from.media._cleanMediaProperties();
      }

      if (member.user.id === this.application.me.id) {
        this.parentConversation.off("rtc:hangup");
      }
    });
  }
  /**
   * Switch on the rtc stats emit events
   * @private
   */


  _enableStatsEvents() {
    this.rtcstats_conf.emit_rtc_analytics = true;
    this.rtcstats_conf.remote_collection = true;

    const rtcObject = this._findRtcObjectByType("audio");

    if (!this.rtcStats && rtcObject) {
      this.log.debug(`enabling stats events for ${rtcObject.rtc_id}`);
      this.rtcStats = rtc_helper_1.default._initStatsEvents({
        application: this.application,
        rtc_id: rtcObject.rtc_id,
        pc: this.pc,
        conversation: this.parentConversation
      });
    }
  }
  /**
   * Switch off the rtcStat events
   * @private
   */


  _disableStatsEvents() {
    this.rtcstats_conf.emit_events = false;
    this.rtcstats_conf.emit_rtc_analytics = false;
    this.rtcstats_conf.remote_collection = false;
    this.rtcStats.removeIntervals();
    delete this.rtcStats;
  }
  /**
   * Function used to init the media stream
   * @private
   */


  _audioInitHandler(params = {}, onIceCandidateHandler) {
    return new Promise(async (resolve, reject) => {
      const streamIndex = this.streamIndex;
      this.streamIndex++;
      const {
        audioConstraints
      } = params;

      try {
        const localStream = await rtc_helper_1.default.getUserAudio(audioConstraints);
        const pc = rtc_helper_1.default.createPeerConnection(this.application);
        this.pc = pc;
        const {
          application,
          log,
          parentConversation: conversation,
          rtcObjects
        } = this;
        const context = {
          pc,
          streamIndex,
          localStream,
          application,
          conversation,
          log,
          rtcObjects
        };
        onIceCandidateHandler({ ...context,
          resolve,
          reject
        });
        rtc_helper_1.default.attachConversationEventHandlers(context);

        this._attachEndingEventHandlers();
      } catch (error) {
        reject(new nexmoClientError_1.NexmoClientError(error));
      }
    });
  }
  /**
   * Handles the enabling of audio when an offer is available
   * @private
   */


  _execAnswer(params = {}) {
    const {
      offer: {
        sdp,
        leg_id
      }
    } = params;
    return this._audioInitHandler(params, context => rtc_helper_1.default.doAnswer(context, sdp, leg_id));
  }
  /**
   * Handles the enabling of audio only stream with rtc:new
   * @private
   */


  _handleAudio(params = {}) {
    const {
      reconnectRtcId
    } = params;
    return this._audioInitHandler(params, context => rtc_helper_1.default.attachPeerConnectionEventHandlers({ ...context,
      reconnectRtcId
    }));
  }

  _findRtcObjectByType(type) {
    return Object.values(this.rtcObjects).find(rtcObject => rtcObject.type === type);
  }

  async _cleanConversationProperties() {
    if (this.pc) {
      this.pc.close();
    } // stop active stream


    delete this.pc;
    this.rtcStats = null;
    this.application.activeStreams = [];
    this.listeningToRtcEvent = false;
    await Promise.resolve();
  }
  /**
   * Cleans up the user's media before leaving the conversation
   * @private
   */


  _cleanMediaProperties() {
    if (this.pc) {
      this.pc.close();
    }

    if (this.rtcObjects) {
      for (const leg_id in this.rtcObjects) {
        rtc_helper_1.default.closeStream(this.rtcObjects[leg_id].stream);
      }
    }

    delete this.pc;
    this.rtcStats = null;
    this.application.activeStreams = [];
    this.rtcObjects = {};
    this.listeningToRtcEvent = false;
  }

  async _disableLeg(leg_id) {
    const csRequestPromise = new Promise(async (resolve, reject) => {
      try {
        await this.application.session.sendNetworkRequest({
          type: "DELETE",
          path: `conversations/${this.parentConversation.id}/rtc/${leg_id}?from=${this.parentConversation.me.id}&originating_session=${this.application.session.session_id}`,
          version: "beta2"
        });
        resolve("rtc:terminate:success");
      } catch (error) {
        reject(new nexmoClientError_1.NexmoApiError(error));
      }
    });
    const closeResourcesPromise = new Promise(resolve => {
      if (this.rtcObjects[leg_id].pc) {
        this.rtcObjects[leg_id].pc.close();
      }

      if (this.rtcObjects[leg_id].stream) {
        rtc_helper_1.default.closeStream(this.rtcObjects[leg_id].stream);
      }

      resolve();
    });

    try {
      await Promise.all([csRequestPromise, closeResourcesPromise]);
      this.parentConversation.me.emit("media:stream:off", this.rtcObjects[leg_id].streamIndex);
      delete this.rtcObjects[leg_id];
      return "rtc:terminate:success";
    } catch (error) {
      throw error;
    }
  }

  _enableMediaTracks(tracks, enabled) {
    tracks.forEach(mediaTrack => {
      mediaTrack.enabled = enabled;
    });
  }
  /**
   * Send a mute request with the rtc_id and enable/disable the tracks
   * If the mute request fails revert the changes in the tracks
   * @private
   */


  async _setMediaTracksAndMute(rtc_id, tracks, mute, mediaType) {
    this._enableMediaTracks(tracks, !mute);

    try {
      return await this.application.session.sendNetworkRequest({
        type: "POST",
        path: `conversations/${this.parentConversation.id}/events`,
        data: {
          type: mediaType,
          to: this.parentConversation.me.id,
          from: this.parentConversation.me.id,
          body: {
            rtc_id
          }
        }
      });
    } catch (error) {
      this._enableMediaTracks(tracks, mute);

      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Replaces the stream's audio tracks currently being used as the sender's sources with a new one
   * @param {object} constraints - audio constraints - { deviceId: { exact: selectedAudioDeviceId } }
   * @param {string} type - rtc object type - audio
   * @returns {Promise<MediaStream>} - Returns the new stream.
   * @example <caption>Update the stream currently being used with a new audio source</caption>
   * conversation.media.updateAudioConstraints({ deviceId: { exact: selectedAudioDeviceId } }, "audio")
   * .then((response) => {
   *   console.log(response);
   * }).catch((error) => {
   *   console.error(error);
   * });
   *
   *
   */


  async updateAudioConstraints(constraints = {}) {
    let rtcObjectByType = this._findRtcObjectByType('audio');

    if (rtcObjectByType && rtcObjectByType.pc) {
      try {
        const localStream = await rtc_helper_1.default.getUserAudio(constraints);
        localStream.getTracks().forEach(track => {
          const sender = rtcObjectByType.pc.getSenders().find(s => s.track.kind === track.kind);

          if (sender) {
            track.enabled = sender.track.enabled;
            sender.replaceTrack(track);
          }
        });
        rtc_helper_1.default.closeStream(rtcObjectByType.stream);
        rtcObjectByType.stream = localStream;
        return localStream;
      } catch (error) {
        return error;
      }
    } else {
      throw new nexmoClientError_1.NexmoApiError("error:media:stream:not-found");
    }
  }
  /**
   * Mute your Member
   *
   * @param {boolean} [mute=false] true for mute, false for unmute
   * @param {number} [streamIndex] stream id to set - if it's not set all streams will be muted
   * @example <caption>Mute your audio stream in the Conversation</caption>
   * // Mute your Member
   * conversation.media.mute(true);
   *
   * // Unmute your Member
   * conversation.media.mute(false);
   */


  mute(mute = false, streamIndex = null) {
    const state = mute ? "on" : "off";
    const audioType = "audio:mute:" + state;
    let promises = [];
    let muteObjects = {};

    if (streamIndex !== null) {
      muteObjects[0] = Object.values(this.rtcObjects).find(rtcObj => rtcObj.streamIndex === streamIndex);

      if (!muteObjects[0]) {
        throw new nexmoClientError_1.NexmoClientError("error:media:stream:not-found");
      }
    } else {
      muteObjects = this.rtcObjects;
    }

    Object.values(muteObjects).forEach(rtcObject => {
      const audioTracks = rtcObject.stream.getAudioTracks();

      const audioPromise = this._setMediaTracksAndMute(rtcObject.rtc_id, audioTracks, mute, audioType);

      promises.push(audioPromise);
    });
    return Promise.all(promises);
  }
  /**
   * Earmuff our member
   *
   * @param {boolean} [params]
   *
   * @returns {Promise}
   * @private
   */


  async earmuff(earmuff) {
    try {
      if (this.me === null) {
        throw new nexmoClientError_1.NexmoClientError("error:self");
      } else {
        let type = "audio:earmuff:off";

        if (earmuff) {
          type = "audio:earmuff:on";
        }

        const {
          response
        } = await this.application.session.sendNetworkRequest({
          type: "POST",
          path: `conversations/${this.parentConversation.id}/events`,
          data: {
            type,
            to: this.parentConversation.me.id
          }
        });
        return response;
      }
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Enable media participation in the conversation for this application (requires WebRTC)
   * @param {object} [params] - rtc params
   * @param {string} [params.label] - label is an application defined tag, eg. ‘fullscreen’
   * @param {string} [params.reconnectRtcId] - the rtc_id / leg_id of the call to reconnect to
   * @param {object} [params.audio=true] - audio enablement mode. possible values "both", "send_only", "receive_only", "none", true or false
   * @param {object} [params.autoPlayAudio=false] - attach the audio stream automatically to start playing after enable media (default false)
   * @param {object} [params.audioConstraints] - audio constraints to use
   * @param {boolean} [params.audioConstraints.autoGainControl] - a boolean which specifies whether automatic gain control is preferred and/or required
   * @param {boolean} [params.audioConstraints.echoCancellation] - a boolean specifying whether or not echo cancellation is preferred and/or required
   * @param {boolean} [params.audioConstraints.noiseSuppression] - a boolean which specifies whether noise suppression is preferred and/or required
   * @param {string | Array} [params.audioConstraints.deviceId] - object specifying a device ID or an array of device IDs which are acceptable and/or required
   * @returns {Promise<MediaStream>}
   * @example <caption>Enable media in the Conversation</caption>
   *
   * conversation.media.enable()
   * .then((stream) => {
   *    const media = document.createElement("audio");
   *    const source = document.createElement("source");
   *    const media_div = document.createElement("div");
   *    media.appendChild(source);
   *    media_div.appendChild(media);
   *    document.insertBefore(media_div);
   *    // Older browsers may not have srcObject
   *    if ("srcObject" in media) {
   *      media.srcObject = stream;
   *    } else {
   *      // Avoid using this in new browsers, as it is going away.
   *      media.src = window.URL.createObjectURL(stream);
   *    }
   *    media.onloadedmetadata = (e) => {
   *      media.play();
   *    };
   * }).catch((error) => {
   *    console.error(error);
   * });
   *
   **/


  async enable(params) {
    try {
      if (this.parentConversation.me === null) {
        throw new nexmoClientError_1.NexmoClientError("error:self");
      } else {
        const {
          offer
        } = params !== null && params !== void 0 ? params : {};
        let remoteStream = await (offer !== undefined ? this._execAnswer(params) : this._handleAudio(params)); // attach the audio stream automatically to start playing

        let autoPlayAudio = params && (params.autoPlayAudio || params.autoPlayAudio === undefined);

        if (!params || autoPlayAudio) {
          rtc_helper_1.default.playAudioStream(remoteStream);
        }

        return remoteStream;
      }
    } catch (error) {
      throw error;
    }
  }
  /**
   * Disable media participation in the conversation for this application
   * if RtcStats MOS is enabled, a final report will be available in
   * NexmoClient#rtcstats:report
   * @returns {Promise}
   * @example <caption>Disable media in the Conversation</caption>
   *
   * conversation.media.disable()
   * .then((response) => {
   *   console.log(response);
   * }).catch((error) => {
   *   console.error(error);
   * });
   *
   **/


  disable() {
    let promises = [];
    promises.push(this._cleanConversationProperties());

    for (const leg_id in this.rtcObjects) {
      promises.push(this._disableLeg(leg_id));
    }

    return Promise.all(promises);
  }
  /**
   * Play a voice text in the Conversation
   * @param {object} params
   * @param {string} params.text - The text to say in the Conversation.
   * @param {string} [params.voice_name="Amy"] - Name of the voice to use for speech to text.
   * @param {number} [params.level=1] - Set the audio level of the audio stream: min=-1 max=1 increment=0.1.
   * @param {boolean} [params.queue=true] - ?
   * @param {boolean} [params.loop=1] - The number of times to repeat audio. Set to 0 to loop infinitely.
   * @param {boolean} [params.ssml=false] - Customize the spoken text with <a href="https://developer.nexmo.com/voice/voice-api/guides/customizing-tts">Speech Synthesis Markup Language (SSML)</a> specification
   *
   * @returns {Promise<NXMEvent>}
   * @example <caption>Play speech to text in the Conversation</caption>
   * conversation.media.sayText({text:"hi"})
   * .then((response) => {
   *    console.log(response);
   * })
   * .catch((error) => {
   *     console.error(error);
   * });
   *
   **/


  async sayText(params) {
    try {
      const response = await this.application.session.sendNetworkRequest({
        type: "POST",
        path: `conversations/${this.parentConversation.id}/events`,
        data: {
          type: "audio:say",
          cid: this.parentConversation.id,
          from: this.parentConversation.me.id,
          body: {
            text: params.text,
            voice_name: params.voice_name || "Amy",
            level: params.level || 1,
            queue: params.queue || true,
            loop: params.loop || 1,
            ssml: params.ssml || false
          }
        }
      });
      return new nxmEvent_1.default(this.parentConversation, response);
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Send DTMF in the Conversation
   * @param {string} digit - the DTMF digit(s) to send
   *
   * @returns {Promise<NXMEvent>}
   * @example <caption>Send DTMF in the Conversation</caption>
   * conversation.media.sendDTMF("digit");
   * .then((response) => {
   *    console.log(response);
   * })
   * .catch((error) => {
   *     console.error(error);
   * });
   **/


  async sendDTMF(digit) {
    try {
      if (!utils_1.default.validateDTMF(digit)) {
        throw new nexmoClientError_1.NexmoClientError("error:audio:dtmf:invalid-digit");
      }

      const rtc_id = (this._findRtcObjectByType('audio') || {}).rtc_id;

      if (!rtc_id) {
        throw new nexmoClientError_1.NexmoClientError("error:audio:dtmf:audio-disabled");
      }

      const {
        id,
        timestamp
      } = await this.application.session.sendNetworkRequest({
        type: "POST",
        path: `conversations/${this.parentConversation.id}/events`,
        data: {
          type: "audio:dtmf",
          from: this.parentConversation.me.id,
          body: {
            digit,
            channel: {
              type: "app",
              id: this._findRtcObjectByType('audio').rtc_id
            }
          }
        }
      });
      const placeholder_event = {
        body: {
          digit,
          dtmf_id: ""
        },
        cid: this.parentConversation.id,
        from: this.parentConversation.me.id,
        id,
        timestamp,
        type: "audio:dtmf"
      };
      const dtmfEvent = new nxmEvent_1.default(this.parentConversation, placeholder_event);
      this.parentConversation.events.set(placeholder_event.id, dtmfEvent);
      return dtmfEvent;
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Play an audio stream in the Conversation
   * @param {object} params
   * @param {number} params.level - Set the audio level of the audio stream: min=-1 max=1 increment=0.1.
   * @param {array} params.stream_url - Link to the audio file.
   * @param {number} params.loop - The number of times to repeat audio. Set to 0 to loop infinitely.
   *
   * @returns {Promise<NXMEvent>}
   * @example <caption>Play an audio stream in the Conversation</caption>
   * conversation.media.playStream({ level: 0.5, stream_url: ["https://nexmo-community.github.io/ncco-examples/assets/voice_api_audio_streaming.mp3"], loop: 1 })
   * .then((response) => {
   *   console.log("response: ", response);
   * })
   * .catch((error) => {
   *   console.error("error: ", error);
   * });
   *
   */


  async playStream(params) {
    try {
      const response = await this.application.session.sendNetworkRequest({
        type: "POST",
        path: `conversations/${this.parentConversation.id}/events`,
        data: {
          type: "audio:play",
          body: params
        }
      });
      return new nxmEvent_1.default(this.parentConversation, response);
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Send start ringing event
   * @returns {Promise<NXMEvent>}
   * @example <caption>Send start ringing event in the Conversation</caption>
   *
   * conversation.media.startRinging()
   * .then((response) => {
   *    console.log(response);
   * }).catch((error) => {
   *    console.error(error);
   * });
   *
   * // Listen for start ringing event
   * conversation.on('audio:ringing:start', (data) => {
   *    console.log("ringing started: ", data);
   * });
   *
   */


  async startRinging() {
    try {
      const response = await this.application.session.sendNetworkRequest({
        type: "POST",
        path: `conversations/${this.parentConversation.id}/events`,
        data: {
          type: "audio:ringing:start",
          from: this.parentConversation.me.id,
          body: {}
        }
      });
      return new nxmEvent_1.default(this.parentConversation, response);
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }
  /**
   * Send stop ringing event
   * @returns {Promise<NXMEvent>}
   * @example <caption>Send stop ringing event in the Conversation</caption>
   *
   * conversation.media.stopRinging()
   * .then((response) => {
   *    console.log(response);
   * }).catch((error) => {
   *    console.error(error);
   * });
   *
   * // Listen for stop ringing event
   * conversation.on('audio:ringing:stop', (data) => {
   *    console.log("ringing stopped: ", data);
   * });
   *
   */


  async stopRinging() {
    try {
      const response = await this.application.session.sendNetworkRequest({
        type: "POST",
        path: `conversations/${this.parentConversation.id}/events`,
        data: {
          type: "audio:ringing:stop",
          from: this.parentConversation.me.id,
          body: {}
        }
      });
      return new nxmEvent_1.default(this.parentConversation, response);
    } catch (error) {
      throw new nexmoClientError_1.NexmoApiError(error);
    }
  }

}

exports["default"] = Media;
module.exports = Media;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/modules/nxmCall.js":
/*!***********************************************************!*\
  !*** ./node_modules/nexmo-client/dist/modules/nxmCall.js ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  NXMCall Object Model
 *
 * Copyright (c) Nexmo Inc.
*/

const WildEmitter = __webpack_require__(/*! wildemitter */ "./node_modules/wildemitter/wildemitter.js");

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");

const nexmoClientError_1 = __webpack_require__(/*! ../nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");

const rtc_helper_1 = __importDefault(__webpack_require__(/*! ./rtc_helper */ "./node_modules/nexmo-client/dist/modules/rtc_helper.js"));
/**
 * Conversation NXMCall Object.
 * @class NXMCall
 * @param {Application} application - The Application object.
 * @param {Conversation} conversation - The Conversation object that belongs to this nxmCall.
 * @param {Member} from - The member that initiated the nxmCall.
 * @property {Application} application -  The Application object that the nxmCall belongs to.
 * @property {Conversation} conversation -  The Conversation object that belongs to this nxmCall.
 * @property {Member} from - The caller. The member object of the caller (not a reference to the one in conversation.members)
 * @property {Map<string, Member>} to - The callees keyed by a member's id. The members that receive the nxmCall (not a reference to conversation.members)
 * @property {String} id - The nxmCall id (our member's leg_id, comes from rtc:answer event, or member:media)
 * @property {NXMCall.CALL_STATUS} CALL_STATUS="started" - the available nxmCall statuses
 * @property {NXMCall.CALL_DIRECTION} direction - the Direction of the nxmCall, Outbound, Inbound
 * @property {NXMCall.STATUS_PERMITTED_FLOW} STATUS_PERMITTED_FLOW - the permitted nxmCall status transition map, describes the "from" and allowed "to" transitions
 * @property {object[]} rtcObjects data related to the rtc connection
 * @property {string} rtcObjects.rtc_id the rtc_id
 * @property {PeerConnection} rtcObjects.pc the current PeerConnection object
 * @property {Stream} rtcObjects.stream the stream of the specific rtc_id
 * @property {string} [rtcObjects.type] audio the type of the stream
 * @property {number} rtcObjects.streamIndex the index number of the stream (e.g. use to mute)
 * @property {Stream} stream the remote stream
 * @emits Application#member:call
 * @emits Application#call:status:changed
*/

/**
 * Application listening for member call events.
 *
 * @event Application#member:call
 *
 * @property {Member} member - the member that initiated the nxmCall
 * @property {NXMCall} nxmCall -  resolves the nxmCall object
 *
 * @example <caption>listen for member call events on Application level</caption>
 *  application.on("member:call", (member, nxmCall) => {
 *    console.log("NXMCall ", nxmCall);
 *  });
*/

/**
 * Application listening for nxmCall status changed events.
 *
 * @event Application#call:status:changed
 * @property {NXMCall} nxmCall -  the actual event
 * @example <caption>listen for nxmCall status changed events on Application level</caption>
 *  application.on("call:status:changed",(nxmCall) => {
 *    console.log("call: " + nxmCall.status);
 *  });
*/


class NXMCall {
  constructor(application, conversation, from) {
    this.application = application;
    this.log = loglevel_1.getLogger(this.constructor.name);
    this.from = from;
    this.conversation = null;
    this.rtcObjects = {};
    /**
     * Enum for NXMCall status.
     * @readonly
     * @enum {string}
     * @alias NXMCall.CALL_STATUS
    */

    this.CALL_STATUS = {
      /** The NXMCall is in started status */
      STARTED: 'started',

      /** The NXMCall is in ringing status */
      RINGING: 'ringing',

      /** The NXMCall is in answered status */
      ANSWERED: 'answered',

      /** The NXMCall is in completed status */
      COMPLETED: 'completed',

      /** The NXMCall is in busy status */
      BUSY: 'busy',

      /** The NXMCall is in timeout status */
      TIMEOUT: 'timeout',

      /** The NXMCall is in unanswered status */
      UNANSWERED: 'unanswered',

      /** The NXMCall is in rejected status */
      REJECTED: 'rejected',

      /** The NXMCall is in failed status */
      FAILED: 'failed'
    };
    /**
     * Enum for NXMCall direction.
     * @readonly
     * @enum {string}
     * @alias NXMCall.CALL_DIRECTION
    */

    this.CALL_DIRECTION = {
      /** The NXMCall started from another end */
      INBOUND: 'inbound',

      /** The NXMCall started from this client */
      OUTBOUND: 'outbound'
    };
    Object.freeze(this.CALL_DIRECTION);
    /**
     * Enum for the permitted call status transition.
     * @readonly
     * @alias NXMCall.STATUS_PERMITTED_FLOW
     * @enum {Map<string, Set<NXMCall.CALL_STATUS>>}
    */

    this.STATUS_PERMITTED_FLOW = new Map([
    /** Permitted transition array from STARTED  */
    ['STARTED', new Set([this.CALL_STATUS.RINGING, this.CALL_STATUS.ANSWERED, this.CALL_STATUS.FAILED, this.CALL_STATUS.TIMEOUT, this.CALL_STATUS.UNANSWERED, this.CALL_STATUS.REJECTED, this.CALL_STATUS.BUSY])],
    /** Permitted transition array from RINGING  */
    ['RINGING', new Set([this.CALL_STATUS.ANSWERED, this.CALL_STATUS.FAILED, this.CALL_STATUS.TIMEOUT, this.CALL_STATUS.UNANSWERED, this.CALL_STATUS.REJECTED, this.CALL_STATUS.BUSY])],
    /** Permitted transition set from ANSWERED  */
    ['ANSWERED', new Set([this.CALL_STATUS.COMPLETED, this.CALL_STATUS.FAILED])]]);
    Object.freeze(this.STATUS_PERMITTED_FLOW);
    this.status = null;
    this.call_disconnect_timeout = null;
    this.direction = this.CALL_DIRECTION.INBOUND;

    this._setupConversationObject(conversation);

    WildEmitter.mixin(NXMCall);
  }
  /**
   * Enable NXMCall stats to be emitted in
  * - application.inAppCall.on('rtcstats:report')
  * - application.inAppCall.on('rtcstats:analytics')
   * @private
  */


  _enableStatsEvents() {
    this.conversation.media._enableStatsEvents();
  }
  /**
   * Attach member event listeners from the conversation
   * @private
  */


  _attachCallListeners() {
    // Conversation level listeners
    this.log.debug("_attachCallListeners : ", {
      nxmCall: this
    });

    try {
      this.conversation.releaseGroup('call_module');
      this.conversation.on('member:media', 'call_module', (from, event) => {
        if (this.application.calls && this.application.calls.has(this.conversation.id)) {
          this.application.calls.get(this.conversation.id)._handleStatusChange(event);
        }
      });
    } catch (e) {
      this.log.error("_attachCallListeners_error: ", {
        e
      });
    }
  }
  /**
   * Validate the current nxmCall status transition
   * If a transition is not defined, return false
   * @param {string} status the status to validate
   * @returns {boolean} false if the transition is not permitted
   * @private
  */


  _isValidStatusTransition(status) {
    if (!status) {
      throw new nexmoClientError_1.NexmoClientError(`Provide the status to validate the transition from '${this.status}'`);
    } // if the nxmCall object is just initialised allow any state


    if (!this.status) {
      return true;
    }

    const current_status = this.status.toUpperCase();

    if (!this.STATUS_PERMITTED_FLOW.has(current_status)) {
      return false;
    }

    if (this.status === status) {
      return false;
    }

    return this.STATUS_PERMITTED_FLOW.get(current_status).has(status);
  }
  /**
   * Go through the members of the conversation and if .me is the only one (JOINED or INVITED)
   * nxmCall nxmCall.hangUp().
   * @returns {Promise} - empty promise or the nxmCall.hangUp promise chain
  */


  hangUpIfAllLeft() {
    this.log.debug("hangUpIfAllLeft: ", {
      nxmCall: this
    });

    if (!this.conversation.me || this.conversation.me.state === 'LEFT' || this.conversation.members.size <= 1) {
      return Promise.resolve();
    }

    for (let member of this.conversation.members.values()) {
      if (member.state !== 'LEFT' && this.conversation.me.user.id !== member.user.id) {
        return Promise.resolve();
      }
    }

    return this.hangUp();
  }
  /**
   * Set the conversation object of the NXMCall
   * update nxmCall.from, and nxmCall.to attributes based on the conversation members
   * @private
  */


  _setupConversationObject(conversation, rtc_id) {
    if (!conversation) return;
    this.conversation = conversation;

    if (!conversation.me) {
      this.log.warn('missing own member object');
    } else {
      this.to = new Map(conversation.members);

      if (this.from) {
        this.to.delete(this.from.id);
      }
    } // Attch Conversation Listeners


    this._attachCallListeners();
  }
  /**
   * Set the from object of the NXMCall
   * @private
  */


  _setFrom(from) {
    this.from = from;
  }
  /**
   * Set the from object of the NXMCall
   * @private
  */


  _setOffer(offer) {
    this.offer = offer;
  }
  /**
   * Process raw events to figure out the nxmCall status
   * @private
  */


  _handleStatusChange(event) {
    var _a; // for knocking case the conversation object is not yet set in the nxmCall. We know the action is initiated from us


    const _isEventFromMe = this.conversation ? ((_a = this.conversation.me) === null || _a === void 0 ? void 0 : _a.id) === event.from : true;

    const _isOutbound = this.direction === this.CALL_DIRECTION.OUTBOUND;

    this.log.debug("_handleStatusChange: ", {
      event
    }, `_isEventFromMe: ${_isEventFromMe} _isOutbound: ${_isOutbound}`);

    let _handleStatusChangeMap = new Map();

    _handleStatusChangeMap.set('member:joined', async () => {
      if (event.body.channel && event.body.channel.id) {
        try {
          this._setStatusAndEmit(this.CALL_STATUS.STARTED);

          return;
        } catch (error) {
          this._setStatusAndEmit(this.CALL_STATUS.FAILED);

          this.log.error(error);
          throw error;
        }
      }

      return Promise.resolve();
    });

    _handleStatusChangeMap.set('member:invited', () => {
      if (event.body.invited_by === null && event.body.user.media && event.body.user.media.audio_settings) {
        this._setStatusAndEmit(this.CALL_STATUS.STARTED);
      }

      return Promise.resolve();
    });

    _handleStatusChangeMap.set('rtc:hangup', () => {
      if (this.status === this.CALL_STATUS.ANSWERED) {
        this._setStatusAndEmit(this.CALL_STATUS.COMPLETED);

        return Promise.resolve();
      } else {
        if (_isEventFromMe && _isOutbound || !_isEventFromMe && !_isOutbound) {
          this._setStatusAndEmit(this.CALL_STATUS.UNANSWERED);

          return Promise.resolve();
        } else {
          this._setStatusAndEmit(this.CALL_STATUS.REJECTED);

          return Promise.resolve();
        }
      }
    });

    _handleStatusChangeMap.set('member:left', () => {
      if (!event.body.timestamp.hasOwnProperty('joined') && this.status !== this.CALL_STATUS.ANSWERED) {
        if (_isEventFromMe && _isOutbound || !_isEventFromMe && !_isOutbound) {
          this._setStatusAndEmit(this.CALL_STATUS.UNANSWERED);

          return Promise.resolve();
        } else {
          this._setStatusAndEmit(this.CALL_STATUS.REJECTED);

          return Promise.resolve();
        }
      }
    });

    _handleStatusChangeMap.set('member:media', () => {
      if (this.status !== this.CALL_STATUS.ANSWERED && event.body.audio) {
        if (_isEventFromMe && event.body.channel) {
          this.id = event.body.channel.id;
        }

        if ((!_isEventFromMe || !_isOutbound) && this.id) {
          this._setStatusAndEmit(this.CALL_STATUS.ANSWERED);
        }
      }

      return Promise.resolve();
    });

    _handleStatusChangeMap.set('sip:ringing', () => {
      if (this.status !== this.CALL_STATUS.RINGING) {
        this._setStatusAndEmit(this.CALL_STATUS.RINGING);
      }

      return Promise.resolve();
    });

    _handleStatusChangeMap.set('sip:hangup', () => {
      switch (event.body.reason.sip_code) {
        case 486:
          this._setStatusAndEmit(this.CALL_STATUS.BUSY);

          break;

        case 487:
          this._setStatusAndEmit(this.CALL_STATUS.TIMEOUT);

          break;

        case 403:
          this._setStatusAndEmit(this.CALL_STATUS.FAILED);

          break;
      }

      return Promise.resolve();
    });

    _handleStatusChangeMap.set('knocking:delete:success', () => {
      this._setStatusAndEmit(this.CALL_STATUS.UNANSWERED);

      return Promise.resolve();
    });

    if (_handleStatusChangeMap.has(event.type)) {
      return _handleStatusChangeMap.get(event.type).call(this);
    }
  }
  /**
   * Set the nxmCall.status and emit a call:status:changed event
   *
   * @param {NXMCall.CALL_STATUS} this.CALL_STATUS the canxmCallll status to set
   * @emits Application#call:status:changed
   * @private
  */


  _setStatusAndEmit(status) {
    if (!this._isValidStatusTransition(status)) {
      return;
    }

    this.status = status;
    this.log.debug(`_setStatusAndEmit: ${status}`, {
      nxmCall: this
    });
    this.application.emit('call:status:changed', this);
  }
  /**
   * Answers an incoming nxmCall
   * Join the conversation that you are invited
   * Create autoplay Audio object
   *
  * @param {boolean} [autoPlayAudio=true] attach the audio stream automatically to start playing (default true)
   * @returns {Promise<Audio>}
  */


  async answer(autoPlayAudio = true) {
    this.log.debug(`answer: { autoPlayAudio: ${autoPlayAudio}`);

    if (this.conversation) {
      try {
        await this.conversation.join();
        const stream = await this.conversation.media.enable({
          autoPlayAudio,
          offer: this.offer
        });
        this.offer = undefined;
        return stream;
      } catch (error) {
        this._setStatusAndEmit(this.CALL_STATUS.FAILED);

        this.log.error(error);
        throw error;
      }
    } else {
      throw new nexmoClientError_1.NexmoClientError('error:call:answer');
    }
  }
  /**
   * Trigger the nxmCall flow for the input users.
   * Create a conversation with prefix name "CALL_"
   * and invite all the users.
   * If at least one user is successfully invited, enable the audio.
   *
   * @param {string[]} usernames the usernames of the users to call
  * @param {boolean} [autoPlayAudio=true] attach the audio stream automatically to start playing (default true)
   * @returns {Promise[]} an array of the invite promises for the provided usernames
   * @private
  */


  async createCall(usernames, autoPlayAudio = true) {
    this.log.debug(`createCall: { usernames: ${usernames}, autoPlayAudio: ${autoPlayAudio} }`);

    if (!usernames || !Array.isArray(usernames) || usernames.length === 0) {
      return Promise.reject(new nexmoClientError_1.NexmoClientError('error:application:call:params'));
    }

    try {
      const conversation = await this.application.newConversationAndJoin({
        display_name: 'CALL_' + this.application.me.name + '_' + usernames.join('_').replace(' ', '')
      });
      conversation.members.set(conversation.me.id, conversation.me);
      this.from = conversation.me;
      this.successful_invited_members = new Map();
      const invites = usernames.map(async username => {
        // check all invites, if at least one is resolved enable audio
        // we need to catch rejections to allow all the chain to go through (all invites)
        // we then catch-reject a promise so that the errors are passing through the end of the chain
        try {
          const member = await conversation.inviteWithAudio({
            user_name: username
          });
          conversation.members.set(member.id, member);
          this.successful_invited_members.set(member.id, member);
          return member;
        } catch (error) {
          this.log.error(error); // resolve the error to allow the promise.all to collect
          // and return all the promises

          return error;
        }
      }); // helper function to process in Promise.all() the failed invites too

      const process_invites = async () => {
        if (this.successful_invited_members.size > 0) {
          await conversation.media.enable({
            audio: {
              muted: false,
              earmuffed: false
            },
            autoPlayAudio
          });
          this.application.calls.set(conversation.id, this);
          return invites;
        } else {
          throw invites;
        }
      }; // we need to continue the invites even if one fails,
      // in process_invites we do the check if at least one was successful


      await Promise.all(invites);

      this._setupConversationObject(conversation);

      return await process_invites();
    } catch (error) {
      this.log.error(error);

      this._setStatusAndEmit(this.CALL_STATUS.FAILED);

      throw error;
    }
  }
  /**
   * Trigger the nxmCall flow for the phone call.
   * Create a knocking event
   *
   * @param {string} user the phone number or the username to call
  * @param {string} type the type of the call you want to have. possible values "phone" or "app" (default is "phone")
   * @returns {Promise}
   * @private
  */


  async createServerCall(user, type, custom_data) {
    this.log.debug(`createServerCall: { user: ${user}, type: ${type}, custom_data: `, {
      custom_data
    });
    const to = {
      type
    };

    if (type === 'phone') {
      to.number = user;
    } else {
      to.user = user;
    }

    try {
      // PrewarmLeg
      const {
        stream,
        legId,
        rtcObjects
      } = await rtc_helper_1.default.prewarmLeg(this);
      this.log.debug("createServerCall: ", {
        stream
      }, {
        legId
      }, {
        rtcObjects
      }); // Add Media to the Call Object

      this.rtcObjects = rtcObjects;
      this.stream = stream;
      this.id = legId; // Add leg_id to the call draft list

      this.application._call_draft_list.set(legId, this);

      rtc_helper_1.default.playAudioStream(stream);
      const params = {
        type: 'POST',
        path: 'knocking',
        data: {
          channel: {
            type: 'app',
            from: {
              type: 'app'
            },
            to,
            id: legId || null
          },
          ...(custom_data && Object.keys(custom_data).length && {
            properties: {
              custom_data
            }
          })
        }
      };

      try {
        const knockingResponse = await this.application.session.sendNetworkRequest(params);
        this.knocking_id = knockingResponse.id;
      } catch (error) {
        throw new nexmoClientError_1.NexmoApiError(error);
      } // If knocking request doesn't result in member:joined after set time disable audio, cleanup media


      rtc_helper_1.default.cleanCallMediaIfFailed(this);
      return stream;
    } catch (error) {
      // If knocking request fails disable audio, cleanup media
      rtc_helper_1.default.cleanMediaProperties(this);
      throw error;
    }
  }
  /**
   * Hangs up the nxmCall
   *
   * If there is a knocking active, do a knocking:delete
   * otherwise
   * Leave from the conversation
   * Disable the audio
   *
  * @param {object} [reason] the reason for hanging up the nxmCall
  * @param {string} [reason.reason_code] the code of the reason
  * @param {string} [reason.reason_text] the description of the reason
   * @returns {Promise}
  */


  async hangUp(reason) {
    this.log.debug(`hangUp: { reason: ${reason} }`);

    if (this.conversation) {
      await this.conversation.media.disable();
    }

    if (!this.knocking_id && this.conversation) {
      return this.conversation.leave(reason).catch(error => {
        if (error.type !== "conversation:error:invalid-member-state") {
          return Promise.reject(error);
        }
      });
    } else {
      let path = `knocking/${this.knocking_id}`;

      if (reason) {
        let params = new URLSearchParams();
        Object.keys(reason).forEach(key => {
          params.append(key, reason[key]);
        });
        path += `?${params.toString()}`;
      }

      try {
        const response = await this.application.session.sendNetworkRequest({
          type: 'DELETE',
          path
        });

        const nxmCall = this.application._call_draft_list.get(this.client_ref);

        nxmCall._handleStatusChange(response);

        this.application._call_draft_list.delete(this.client_ref);

        return response;
      } catch (error) {
        // Don't switch yet to fail status, it could be an expected race between knocking:delete and conversation.leave
        if (!this.conversation) {
          this.log.debug('hangup: Problem cancelling the call. Knocking cancel failed and Conversation. Leave not available', error);
          return;
        } else {
          this.log.error(new nexmoClientError_1.NexmoApiError(error));
          return this.conversation.leave(reason);
        }
      }
    }
  }
  /**
   * Rejects an incoming nxmCall
   * Leave from the conversation that you are invited
   *
  * @param {object} [reason] the reason for rejecting the nxmCall
  * @param {string} [reason.reason_code] the code of the reason
  * @param {string} [reason.reason_text] the description of the reason
   * @returns {Promise}
  */


  reject(reason) {
    this.log.debug(`reject: { reason: ${reason} }`);

    if (this.conversation) {
      return this.conversation.leave(reason);
    } else {
      return Promise.reject(new nexmoClientError_1.NexmoClientError('error:call:reject'));
    }
  }

}

exports["default"] = NXMCall;
module.exports = NXMCall;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/modules/publicip.js":
/*!************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/modules/publicip.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const is_ip_1 = __importDefault(__webpack_require__(/*! is-ip */ "./node_modules/is-ip/index.js"));

class CancelError extends Error {
  constructor() {
    super('Request was cancelled');
    this.name = 'CancelError';
  }

  get isCanceled() {
    return true;
  }

}

const defaults = {
  timeout: 5000
};
const urls = {
  v4: ['https://ipv4.icanhazip.com/', 'https://api.ipify.org/'],
  v6: ['https://ipv6.icanhazip.com/', 'https://api6.ipify.org/']
};

const sendXhr = (url, options, version) => {
  const xhr = new XMLHttpRequest();

  let _reject;

  const promise = new Promise((resolve, reject) => {
    _reject = reject;
    xhr.addEventListener('error', reject, {
      once: true
    });
    xhr.addEventListener('timeout', reject, {
      once: true
    });
    xhr.addEventListener('load', () => {
      const ip = xhr.responseText.trim();

      if (!ip || version === 'v4' ? !is_ip_1.default.v4(ip) : !is_ip_1.default.v6(ip)) {
        reject();
        return;
      }

      resolve(ip);
    }, {
      once: true
    });
    xhr.open('GET', url);
    xhr.timeout = options.timeout;
    xhr.send();
  }); // promise.cancel = () => {
  // 	xhr.abort();
  // 	_reject(new CancelError());
  // };

  return promise;
};

const queryHttps = (version, options) => {
  let request;

  const promise = async function () {
    const urls_ = [].concat.apply(urls[version], options.fallbackUrls || []);

    for (const url of urls_) {
      try {
        request = sendXhr(url, options, version);
        const ip = await request;
        return ip;
      } catch (error) {
        if (error instanceof CancelError) {
          throw error;
        }
      }
    }

    throw new Error('Couldn\'t find your IP');
  }(); // promise.cancel = () => {
  // 	request.cancel();
  // };


  return promise;
};

class PublicIp {}

exports["default"] = PublicIp;

PublicIp.v4 = options => queryHttps('v4', { ...defaults,
  ...options
});

PublicIp.v6 = options => queryHttps('v6', { ...defaults,
  ...options
});

module.exports = PublicIp;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/modules/rtc_helper.js":
/*!**************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/modules/rtc_helper.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *
 * Copyright (c) Nexmo Inc.
 */

__webpack_require__(/*! webrtc-adapter */ "./node_modules/webrtc-adapter/src/js/adapter_core.js");

const sdptransform = __webpack_require__(/*! sdp-transform */ "./node_modules/sdp-transform/lib/index.js");

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");

const browserDetect = __importStar(__webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/index.js"));

const nexmoClientError_1 = __webpack_require__(/*! ../nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");

const rtcstats_analytics_1 = __importDefault(__webpack_require__(/*! ./rtcstats_analytics */ "./node_modules/nexmo-client/dist/modules/rtcstats_analytics.js"));

const clearingTimeout = 20000;
/**
 * RTC helper object for accessing webRTC API.
 * @class RtcHelper
 * @private
*/

class RtcHelper {
  constructor() {
    this.log = loglevel_1.getLogger(this.constructor.name);
  }

  static getUserAudio(audioConstraints = true) {
    let constraintsToUse = {
      video: false,
      audio: audioConstraints
    };
    return navigator.mediaDevices.getUserMedia(constraintsToUse);
  }

  createRTCPeerConnection(config) {
    const pc = new RTCPeerConnection(config); // attaching the .trace to make easier the stats reporting implementation

    pc.trace = () => {
      return;
    };

    return pc;
  }

  _getWindowLocationProtocol() {
    return window.location.protocol;
  }

  static _getBrowserName() {
    return browserDetect.detect().name;
  }

  static isNode() {
    return this._getBrowserName() === 'node';
  }
  /**
    * Check if the keys in an object are found in another object
  */


  checkValidKeys(object, defaultObject) {
    let valid = true;
    Object.keys(object).forEach(key => {
      if (!defaultObject.hasOwnProperty(key)) {
        valid = false;
      }

      ;
    });
    return valid;
  }

  static cleanCallMediaIfFailed(call) {
    setTimeout(() => {
      if (!call.conversation) {
        this.cleanMediaProperties(call);
        call.status = call.CALL_STATUS.FAILED;
        call.application.emit('call:status:changed', call);
      }
    }, 5000);
  }

  static callDisconnectHandler(call, pc) {
    const callStatus = [call.CALL_STATUS.ANSWERED, call.CALL_STATUS.STARTED, call.CALL_STATUS.RINGING];
    if (pc.connectionState !== 'disconnected' || !call || !call.conversation) return; // Timeout and wait for FS 20 seconds on backend until normal clearing

    return setTimeout(() => {
      if (pc.connectionState === 'connected' || callStatus.indexOf(call.status) == -1) return;
      this.cleanMediaProperties(call);
      call.status = call.CALL_STATUS.COMPLETED;
      call.application.emit('call:status:changed', call);
    }, clearingTimeout);
  }

  static cleanMediaProperties(call) {
    if (call.rtcObjects) {
      for (const leg_id in call.rtcObjects) {
        call.rtcObjects[leg_id].pc.close();
        delete call.rtcObjects[leg_id].pc;
        RtcHelper.closeStream(call.rtcObjects[leg_id].stream);
      }
    }

    call.application.activeStreams = [];
    call.rtcObjects = {};
    if (call.conversation && call.conversation.media) call.conversation.media.rtcStats = null;
  }

  static playAudioStream(stream) {
    const audio = new Audio();
    audio.srcObject = stream;
    audio.autoplay = true;
    return audio;
  } // Media methods


  static createDummyCandidateSDP(pc) {
    const candidate = {
      foundation: 1176891032,
      component: 1,
      transport: 'udp',
      priority: 2122260223,
      ip: '0.0.0.0',
      port: 9,
      type: 'host',
      generation: 0,
      'network-id': 1,
      'network-cost': 50
    };
    const sdpNewObj = sdptransform.parse(pc.localDescription.sdp);
    sdpNewObj.media[0].candidates = [candidate];
    return sdptransform.write(sdpNewObj);
  }

  static createRTCPeerConnectionConfig(application) {
    return {
      iceTransportPolicy: 'all',
      bundlePolicy: 'balanced',
      rtcpMuxPolicy: 'require',
      iceCandidatePoolSize: '0',
      ...(application.session.config && application.session.config.iceServers && {
        iceServers: application.session.config.iceServers
      })
    };
  }

  static createPeerConnection(application) {
    const pc_config = this.createRTCPeerConnectionConfig(application);
    const pc = new RTCPeerConnection(pc_config);
    return pc;
  }

  static sendOffer(application, pc, conversation, reconnectRtcId) {
    const sdp = this.createDummyCandidateSDP(pc);
    const offer = {
      sdp
    };
    let data = {
      from: conversation.me.id,
      body: {
        offer
      }
    };
    let path = `conversations/${conversation.id}/rtc`;

    if (reconnectRtcId) {
      path += `/${reconnectRtcId}/offer`;
    }

    return application.session.sendNetworkRequest({
      type: 'POST',
      path,
      data
    });
  }

  static sendAnswer(application, pc, conversation, leg_id) {
    const answer = this.createDummyCandidateSDP(pc);
    let data = {
      from: conversation.me.id,
      body: {
        answer
      }
    };
    let path = `conversations/${conversation.id}/rtc/${leg_id}/answer`;
    return application.session.sendNetworkRequest({
      type: 'POST',
      path,
      data
    });
  }

  static createLeg(application, pc) {
    const sdpOfferNew = this.createDummyCandidateSDP(pc);
    const offer = {
      sdp: sdpOfferNew,
      type: "offer"
    };
    return application.session.sendNetworkRequest({
      type: 'POST',
      path: `legs`,
      version: `beta`,
      data: {
        body: {
          offer
        }
      }
    });
  }

  static closeStream(stream) {
    stream.getTracks().forEach(track => {
      track.stop();
    });
  }

  static emitMediaStream(member, pc, stream) {
    member.emit("media:stream:on", {
      pc,
      stream,
      type: "audio",
      streamIndex: 0
    });
  }

  static _initStatsEvents(context) {
    var _a, _b, _c, _d;

    if (RtcHelper.isNode()) return;

    if ((_d = (_c = (_b = (_a = context) === null || _a === void 0 ? void 0 : _a.application) === null || _b === void 0 ? void 0 : _b.session) === null || _c === void 0 ? void 0 : _c.config) === null || _d === void 0 ? void 0 : _d.rtcstats) {
      const config = context.application.session.config.rtcstats;
      const {
        emit_events,
        remote_collection,
        emit_rtc_analytics
      } = config;

      if (emit_events || remote_collection || emit_rtc_analytics) {
        const params = { ...context,
          config: { ...config
          }
        };
        return new rtcstats_analytics_1.default(params);
      }
    }
  }

  static attachConversationEventHandlers(context) {
    const {
      conversation,
      pc,
      log
    } = context; // We want to be able to handle these events, for this  member, before they get propagated out

    conversation.once("rtc:answer", event => {
      if (!pc) {
        log.warn("RTC: received an answer too late");
        return;
      }

      pc.setRemoteDescription(new RTCSessionDescription({
        type: "answer",
        sdp: event.body.answer
      }));
    });
  }

  static doAnswer(context, offer, leg_id) {
    const {
      application,
      conversation,
      pc,
      reject,
      localStream
    } = context;
    this.addPeerConnectionListeners(context, () => RtcHelper.sendAnswer(application, pc, conversation, leg_id).then(() => ({
      rtc_id: leg_id
    })));
    pc.setRemoteDescription(new RTCSessionDescription({
      type: "offer",
      sdp: offer
    })).then(() => pc.createAnswer()).then(sessionDescription => pc.setLocalDescription(sessionDescription)).catch(err => {
      if (localStream) this.closeStream(localStream);
      reject(err);
    });
  }

  static attachPeerConnectionEventHandlers(context) {
    const {
      application,
      conversation,
      pc,
      reconnectRtcId
    } = context;
    this.addPeerConnectionListeners(context, () => RtcHelper.sendOffer(application, pc, conversation, reconnectRtcId));
  }

  static addPeerConnectionListeners(context, description_handler) {
    const {
      application,
      conversation,
      pc,
      streamIndex,
      localStream,
      log,
      rtcObjects,
      resolve,
      reject
    } = context;
    let stream;
    let stop_ice_gathering = false;
    let nxmCall;

    if (conversation.id) {
      nxmCall = application.calls.get(conversation.id);
    }

    pc.ontrack = evt => {
      stream = evt.streams[0];
      application.activeStreams.push(stream);
      RtcHelper.emitMediaStream(conversation.me, pc, stream);
    };

    pc.onconnectionstatechange = _ => this.onconnectionstatechangeHandler(pc, log, nxmCall, () => resolve(stream), () => reject());

    pc.onnegotiationneeded = () => this.onnegotiationneededHandler(pc, nexmoError => reject(nexmoError));

    pc.oniceconnectionstatechange = connection_event => this.oniceconnectionstatechange(connection_event, pc, log, nexmoError => reject(nexmoError));

    pc.onicecandidate = async event => {
      if (event.candidate && !stop_ice_gathering && pc) {
        stop_ice_gathering = true;

        try {
          const {
            rtc_id
          } = await description_handler();

          RtcHelper._initStatsEvents({
            application,
            rtc_id,
            pc,
            conversation
          }); //attach rtc stats with rtc_id


          if (pc.trace) pc.trace("rtc_id", rtc_id);
          rtcObjects[rtc_id] = {
            rtc_id,
            pc,
            stream: localStream,
            type: "audio",
            streamIndex: streamIndex
          };
        } catch (error) {
          if (localStream) this.closeStream(localStream);
          reject(new nexmoClientError_1.NexmoClientError(error));
        }
      }
    };

    localStream.getTracks().forEach(track => pc.addTrack(track));
  }

  static prewarmLeg(nxmCall) {
    const application = nxmCall.application;
    return new Promise(async (resolve, reject) => {
      let offer_sent = false;
      let stream;
      let legId;
      let rtcObjects = {};
      const log = loglevel_1.getLogger(this.constructor.name);

      try {
        let localStream = await this.getUserAudio();
        const pc = this.createPeerConnection(application); // create call

        pc.ontrack = evt => {
          stream = evt.streams[0];
          application.activeStreams.push(stream);
        };

        pc.onconnectionstatechange = event => this.onconnectionstatechangeHandler(pc, log, nxmCall, () => resolve({
          stream,
          legId,
          rtcObjects
        }), () => reject());

        pc.onnegotiationneeded = () => this.onnegotiationneededHandler(pc, nexmoError => reject(nexmoError));

        pc.oniceconnectionstatechange = connection_event => this.oniceconnectionstatechange(connection_event, pc, log, nexmoError => reject(nexmoError));

        pc.onicecandidate = async event => {
          if (event.candidate && !offer_sent && pc) {
            offer_sent = true;
            const {
              rtc_id,
              sdp
            } = await this.createLeg(application, pc);

            RtcHelper._initStatsEvents({
              application,
              rtc_id,
              pc
            });

            legId = rtc_id;
            rtcObjects[legId] = {
              rtc_id,
              pc,
              stream: localStream,
              type: "audio",
              streamIndex: 1
            };
            return pc.setRemoteDescription(new RTCSessionDescription({
              type: "answer",
              sdp
            }));
          }
        };

        localStream.getTracks().forEach(track => pc.addTrack(track));
      } catch (error) {
        reject(new nexmoClientError_1.NexmoClientError(error));
      }
    });
  }

}

exports["default"] = RtcHelper;

RtcHelper.onconnectionstatechangeHandler = (pc, log, nxmCall, resolveCallback, rejectCallback) => {
  switch (pc.connectionState) {
    case "connected":
      log.info("The connection has become fully connected");
      resolveCallback();
      break;

    case "disconnected":
      if (!nxmCall) break;

      if (nxmCall.call_disconnect_timeout) {
        clearTimeout(nxmCall.call_disconnect_timeout);
      }

      nxmCall.call_disconnect_timeout = RtcHelper.callDisconnectHandler(nxmCall, pc);
      break;

    case "failed":
      rejectCallback();
      log.info("One or more transports has terminated unexpectedly or in an error");
      break;

    case "closed":
      log.info("The connection has been closed");
      break;
  }
};

RtcHelper.oniceconnectionstatechange = (connection_event, pc, log, rejectCallback) => {
  switch (pc.iceConnectionState) {
    // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/iceConnectionState
    case "disconnected":
      log.warn("One or more transports is disconnected", pc.iceConnectionState);
      break;

    case "failed":
      rejectCallback(new nexmoClientError_1.NexmoClientError(connection_event));
      log.warn("One or more transports has terminated unexpectedly or in an error", connection_event);
      break;

    default:
      log.info("The ice connection status changed", pc.iceConnectionState);
  }
};

RtcHelper.onnegotiationneededHandler = async (pc, rejectCallback) => {
  try {
    const offer = await pc.createOffer();
    return pc.setLocalDescription(offer);
  } catch (error) {
    rejectCallback(new nexmoClientError_1.NexmoClientError(error));
  }
};

module.exports = RtcHelper;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/modules/rtcstats_analytics.js":
/*!**********************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/modules/rtcstats_analytics.js ***!
  \**********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const rtcStatsAdapterParser = __webpack_require__(/*! rtc-stats-adapter */ "./node_modules/rtc-stats-adapter/index.js");

const calculateMos = __webpack_require__(/*! rtc-stats-adapter/calculate-mos */ "./node_modules/rtc-stats-adapter/calculate-mos.js");

const utils_1 = __importDefault(__webpack_require__(/*! ../utils */ "./node_modules/nexmo-client/dist/utils.js"));
/**
 * Collect WebRTC Report data
 * Removes credential information from the STUN.TURN server configuration.
 * performs Delta compression
 *
 * if isCallback is true the report includes a MOS score : trace('mos', mos, report);
 *
 * @param {object} context
 * @param {Application} context.application
 * @param {Conversation} context.conversation
 * @param {RTCPeerConnection} context.pc peer connection object
 * @param {string} context.rtc_id id of a leg
 * @param {RTCStatsConfig} context.config config settings for ananlytics
 * @property {MosReport} mos_report the final mos report to be sent when the stream is closed
 * @property {number} _reportsCount the number of reports taken for mos average
 * @property {number} _mosSum the summary of mos scores
 * @private
 */


class RTCStatsAnalytics {
  constructor(context) {
    this.mos_report = {
      min: 5,
      max: 0
    };
    this._reportsCount = 0;
    this._mosSum = 0;
    this.intervals = [];
    this._deprecationWarningSent = false;

    if (!context || !context.application || !context.rtc_id || !context.pc) {
      return;
    }

    this.conversation = null;
    this.application_id = null;
    this.attachHandlers(context);
    this.startSendingStats(context);
    this.startEmittingStats(context);
  }

  attachHandlers(context) {
    const {
      pc
    } = context;
    const onConnectionStateChange = pc.onconnectionstatechange ? pc.onconnectionstatechange : () => {};

    pc.onconnectionstatechange = event => {
      onConnectionStateChange.call(pc, event);

      switch (pc.connectionState) {
        case "disconnected":
        case "failed":
        case "closed":
          this.removeIntervals();
          this.emitLastReport(context);
      }
    };

    if (!context.conversation) {
      const application = context.application;
      application.on("member:joined", (member, event) => {
        var _a;

        if ((!this.conversation || !this.application_id) && ((_a = context) === null || _a === void 0 ? void 0 : _a.rtc_id) === event.body.channel.id) {
          this.conversation = member.conversation;
          this.application_id = event.application_id;
        }
      });
    } else {
      const conversation = context.conversation;
      conversation.on("member:media", (member, event) => {
        var _a;

        if (!this.application_id && ((_a = context) === null || _a === void 0 ? void 0 : _a.rtc_id) === event.body.channel.id) {
          this.application_id = event.application_id;
        }
      });
    }
  }

  emitLastReport(context) {
    const {
      application,
      conversation = null,
      rtc_id,
      config: {
        emit_events,
        emit_rtc_analytics
      }
    } = context;
    const mos_report = this.getMOSReport();
    const mos = mos_report.last;

    if (mos) {
      if (emit_rtc_analytics) {
        application.emit("rtcstats:analytics", {
          type: "mos_report",
          mos,
          rtc_id,
          mos_report,
          api_key: application.session.apiKey,
          ...(this.application_id && {
            application_id: this.application_id
          }),
          ...(conversation && {
            conversation_id: conversation.id,
            conversation_name: conversation.name
          })
        });
      }

      if (emit_events) {
        if (!this._deprecationWarningSent) {
          this._deprecationWarningSent = true;
          console.warn('"rtcstats:report" event is deprecated. Use "rtcstats:analytics" instead');
        }
        /**
         * @deprecated Use "rtcstats:analytics instead"
         */


        application.emit("rtcstats:report", mos, null, conversation, mos_report);
      }
    }
  }

  startSendingStats(context) {
    const {
      application,
      conversation = null,
      pc,
      rtc_id,
      config: {
        remote_collection,
        remote_collection_url,
        remote_collection_interval
      }
    } = context;
    if (!remote_collection) return;
    const remote_collection_interval_id = setInterval(() => {
      pc.getStats(null).then(report => {
        var _a;

        const conv = (_a = conversation !== null && conversation !== void 0 ? conversation : this.conversation, _a !== null && _a !== void 0 ? _a : null);
        utils_1.default.networkRequest({
          url: remote_collection_url,
          type: "POST",
          data: { ...rtcStatsAdapterParser(report),
            legId: rtc_id,
            apiKey: application.session.apiKey,
            ...(this.application_id && {
              applicationId: this.application_id
            }),
            ...(conv && {
              conversationId: conv.id,
              conversationName: conv.name
            })
          }
        }).catch(() => {});
      }).catch(() => {});

      if (pc.connectionState === "closed" || pc.signalingState === 'closed') {
        this.removeIntervals();
      }
    }, remote_collection_interval);
    this.intervals.push(remote_collection_interval_id);
  }

  startEmittingStats(context) {
    const {
      application,
      conversation = null,
      pc,
      rtc_id,
      config: {
        emit_events,
        emit_rtc_analytics,
        emit_interval
      }
    } = context;
    if (!emit_events && !emit_rtc_analytics) return;
    const emit_stats_interval_id = setInterval(() => {
      var _a;

      pc.getStats(null).then(stats => {
        var _a;

        const mos = this.getMos(stats);
        if (!mos) return;
        const conv = (_a = conversation !== null && conversation !== void 0 ? conversation : this.conversation, _a !== null && _a !== void 0 ? _a : null);

        if (emit_rtc_analytics) {
          application.emit("rtcstats:analytics", {
            type: "mos",
            mos,
            report: stats,
            rtc_id,
            api_key: application.session.apiKey,
            ...(this.application_id && {
              application_id: this.application_id
            }),
            ...(conv && {
              conversation_id: conv.id,
              conversation_name: conv.name
            })
          });
        }

        if (emit_events) {
          if (!this._deprecationWarningSent) {
            this._deprecationWarningSent = true;
            console.warn('"rtcstats:report" event is deprecated. Use "rtcstats:analytics" instead');
          }
          /**
           * @deprecated Use "rtcstats:analytics instead"
           */


          application.emit("rtcstats:report", mos, stats, conversation);
        }
      }).catch(() => {});

      if (pc.connectionState === "closed" || pc.signalingState === 'closed') {
        this.removeIntervals();
        this.emitLastReport({ ...context,
          conversation: (_a = conversation !== null && conversation !== void 0 ? conversation : this.conversation, _a !== null && _a !== void 0 ? _a : null)
        });
      }
    }, emit_interval);
    this.intervals.push(emit_stats_interval_id);
  }

  removeIntervals() {
    this.intervals.forEach(interval => clearInterval(interval));
    this.intervals = [];
  }

  getMos(stats) {
    const mos = calculateMos(stats);
    this.updateMOSReport(parseInt(mos));
    return mos;
  }
  /**
   * Update the mos_report object
   * @param {number} mos the MOS score
   * @returns {object} the report object
   */


  updateMOSReport(mos) {
    this._reportsCount++;
    this._mosSum += mos;
    this.mos_report.last = mos;
    this.mos_report.min = mos < this.mos_report.min ? mos : this.mos_report.min;
    this.mos_report.max = mos > this.mos_report.max ? mos : this.mos_report.max;
    this.mos_report.average = this._mosSum / this._reportsCount;
  }
  /**
   * Update the MOS report object
   * mos_report.min - the minimum MOS value during the stream
   * mos_report.max - the maximum MOS value during the stream
   * mos_report.last - the last MOS value during the stream
   * mos_report.average - the average MOS value during the stream
   * @returns {MosReport} mos_report - a report for the MOS values
   *
   */


  getMOSReport() {
    this.mos_report.min = RTCStatsAnalytics.normaliseFloat(this.mos_report.min);
    this.mos_report.max = RTCStatsAnalytics.normaliseFloat(this.mos_report.max);
    this.mos_report.last = RTCStatsAnalytics.normaliseFloat(this.mos_report.last);
    this.mos_report.average = RTCStatsAnalytics.normaliseFloat(this.mos_report.average);
    return this.mos_report;
  }

  static normaliseFloat(value) {
    return parseFloat(value).toFixed(6);
  }

}

exports["default"] = RTCStatsAnalytics;
module.exports = RTCStatsAnalytics;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/nexmoClientError.js":
/*!************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/nexmoClientError.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Nexmo Client - API Error wrapper
 *
 * Copyright (c) Nexmo Inc.
*/

const NexmoClientErrorTypes = __webpack_require__(/*! ./nexmoClientErrorTypes */ "./node_modules/nexmo-client/dist/nexmoClientErrorTypes.js");

const loglevel_1 = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");

function decorateError(instance, error) {
  if (error && error.code) {
    error.type = error.code;
    delete error['code'];
  }

  Object.assign(instance, error);
  instance.message = 'type: ' + instance.type + ', description: ' + (instance.description ? instance.description : '');
}
/**
 * Error constructor of an NexmoClient-error
 * @param {string} errorInput String client error
*/


class NexmoClientError {
  constructor(errorInput) {
    const error = NexmoClientErrorTypes[errorInput]; // for other errors (libs/browser APIs) re-use the Client error
    // to forward it but don't throw it away

    if (error) {
      // if error type exists in our list keep consistency
      decorateError(this, error);
    } else {
      // if the structure is not as expected, f/w as much as we can get
      this.message = errorInput && errorInput.message ? errorInput.message : errorInput;
      this.stack = errorInput.stack;
    } // log error


    this.log = loglevel_1.getLogger(this.constructor.name);
    this.log.error(this); // make sure the error.name matches the class name

    this.name = 'NexmoClientError';

    if (typeof __webpack_require__.g.NXMbugsnagClient !== 'undefined') {
      __webpack_require__.g.NXMbugsnagClient.notify(this, {
        severity: 'info'
      });
    }
  }

}

exports.NexmoClientError = NexmoClientError;
/**
 * Error constructor of an API-error
 * @param {object} error API error, always containing {type: <string>}
*/

class NexmoApiError {
  constructor(errorInput) {
    this.log = loglevel_1.getLogger(this.constructor.name);

    if (errorInput) {
      decorateError(this, errorInput);
    } else {
      // if the structure is not as expected, f/w as much as we can get
      this.message = errorInput && errorInput.message ? errorInput.message : errorInput;
      this.stack = errorInput && errorInput.stack ? errorInput.stack : new Error().stack;
    }

    this.name = 'NexmoApiError'; // log error

    this.log = loglevel_1.getLogger(this.constructor.name);
    this.log.error(this);

    if (typeof __webpack_require__.g.NXMbugsnagClient !== 'undefined') {
      __webpack_require__.g.NXMbugsnagClient.notify(this, {
        severity: 'info'
      });
    }
  }

}

exports.NexmoApiError = NexmoApiError;
module.exports = {
  NexmoClientError: NexmoClientError,
  NexmoApiError: NexmoApiError
};

/***/ }),

/***/ "./node_modules/nexmo-client/dist/nexmoClientErrorTypes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/nexmoClientErrorTypes.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";

/*
 *  Nexmo Client SDK
 *  Nexmo Client Error Types
 *
 * Copyright (c) Nexmo Inc.
 */

module.exports = {
  'error:application:call:params': {
    type: 'error:application:call:params',
    description: 'not a valid String[] of usernames param'
  },
  'error:application:callServer:params': {
    type: 'error:application:call:params',
    description: 'not a valid String of phone number'
  },
  'error:call:reject': {
    type: 'error:call:reject',
    description: 'failed to reject the call'
  },
  'error:getUserMedia:permissions': {
    type: 'error:getUserMedia:permissions',
    description: 'missing getUserMedia permissions'
  },
  'error:media:params': {
    type: 'error:media:params',
    description: 'currently supported params media type= {audio:{muted:false, earmuffed:false}}'
  },
  'error:media:reenable': {
    type: 'error:media:reenable',
    description: 'missing reconnectRtcId required to reenable media'
  },
  'error:self': {
    type: 'error:self',
    description: 'Conversation Object is missing self (me)'
  },
  'error:user:relogin': {
    type: 'error:user:relogin',
    description: 'please relogin'
  },
  'error:seen:own-message': {
    type: 'error:seen:own-message',
    description: 'attempt to send seen for own message'
  },
  'error:already-seen': {
    type: 'error:already-seen',
    description: 'already marked as seen'
  },
  'error:delivered:own-message': {
    type: 'error:delivered:own-message',
    description: 'attempt to send delivered for own message'
  },
  'error:already-delivered': {
    type: 'error:already-delivered',
    description: 'already marked as delivered'
  },
  'error:fetch-image': {
    type: 'error:fetch-image',
    description: 'xhr.status received other than 200'
  },
  'error:delete-image': {
    type: 'error:delete-image',
    description: 'xhr.status received other than 204'
  },
  'error:missing:params': {
    type: 'error:missing:params',
    description: 'missing parameters'
  },
  'error:invite:missing:params': {
    type: 'error:missing:params',
    description: 'This invite cannot be sent to empty username and user_id'
  },
  'error:invalid:param:type': {
    type: 'error:invalid:param:type',
    description: 'Invalid Object type, passed in the parameters'
  },
  'error:audio:already-connecting': {
    type: 'error:audio:already-connecting',
    description: 'Audio call already in progress'
  },
  'error:audio:not-enabled': {
    type: 'error:audio:not-enabled',
    description: 'Audio is not enabled'
  },
  'error:media:already-connecting': {
    type: 'error:media:already-connecting',
    description: 'Media is already in progress'
  },
  'error:media:unsupported-browser': {
    type: 'error:media:unsupported-browser',
    description: 'This action is not supported on this browser'
  },
  'error:media:extension': {
    type: 'error:media:extension',
    description: 'Chrome extension has thrown an error'
  },
  'error:media:extension-not-installed': {
    type: 'error:media:extension-not-installed',
    description: 'Chrome extension should be installed'
  },
  'error:media:update:streams': {
    type: 'error:media:update:streams',
    description: 'cant update more than one stream'
  },
  'error:media:update:invalid': {
    type: 'error:media:update:invalid',
    description: 'state of media is not supported for this update'
  },
  'error:media:stream:not-found': {
    type: 'error:media:stream:not-found',
    description: 'A stream with the given index was not found'
  },
  'error:audio:dtmf:invalid-digit': {
    type: 'error:audio:dtmf:invalid-digit',
    description: 'not a valid string of dtmf digits (0-9,a-d,A-D,p,P,*,#)'
  },
  'error:audio:dtmf:audio-disabled': {
    type: 'error:audio:dtmf:audio-disabled',
    description: 'Audio must be enabled to send DTMF'
  },
  'error:invalid-order': {
    type: 'error:invalid-order',
    description: 'params not valid. Order must be asc or desc'
  },
  'error:custom-event:invalid': {
    type: 'error:custom-event:invalid',
    description: 'Custom event type not valid'
  },
  'error:message-event:invalid': {
    type: 'error:message-event:invalid',
    description: 'message_type is missing or is invalid'
  },
  'error:invalid-cursor': {
    type: 'error:invalid-cursor',
    description: 'page does not exist'
  },
  'error:client:reconnection_failed': {
    type: 'error:client:reconnection_failed',
    description: 'websocket failed to reconnect'
  },
  'error:conversation-service:version': {
    type: 'error:conversation:version',
    description: 'Wrong version of Conversation Service API. It should be one of "v1" or "v3"'
  },
  'error:no-media-offer': {
    type: 'error:no-media-offer',
    description: 'Media preload attempt without having an offer available'
  }
};

/***/ }),

/***/ "./node_modules/nexmo-client/dist/pages/conversations_page.js":
/*!********************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/pages/conversations_page.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *
 * Copyright (c) Nexmo Inc.
*/

const page_1 = __importDefault(__webpack_require__(/*! ./page */ "./node_modules/nexmo-client/dist/pages/page.js"));
/**
 * A Conversations Page
 *
 * @class ConversationsPage
 * @param {Map} items map of conversations fetched in the paginated query
 * @extends Page
*/


class ConversationsPage extends page_1.default {
  constructor(params) {
    super(params);
    this.items = new Map(); // Iterate and create the conversations if not existent

    params.items.forEach(c => {
      const conversation = this.application.updateOrCreateConversation(c);
      this.items.set(conversation.id, conversation);
    });
  }
  /**
   * Fetch the previous page if exists
   * @returns {Promise<Page>}
   * @example <caption>Fetch the previous page if exists</caption>
   *  currentConvPage.getPrev().then((prevConvPage) => {
   *    console.log("previous conversation page ", prevConvPage);
   *  }).catch((error) => {
   *    console.error("error getting previous conversation page ", error);
   *  });
  */


  getPrev() {
    if (!this.hasPrev()) return this._getError();
    return this.application.getConversations(this._getConfig(this.cursor.prev));
  }
  /**
   * Fetch the next page if exists
   * @returns {Promise<Page>}
   * @example <caption>Fetch the next page if exists</caption>
   *  currentConvPage.getNext().then((nextConvPage) => {
   *    console.log("next conversation page ", nextConvPage);
   *  }).catch((error) => {
   *    console.error("error getting next conversation page ", error);
   *  });
  */


  getNext() {
    if (!this.hasNext()) return this._getError();
    return this.application.getConversations(this._getConfig(this.cursor.next));
  }

}

exports["default"] = ConversationsPage;
module.exports = ConversationsPage;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/pages/events_page.js":
/*!*************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/pages/events_page.js ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *
 * Copyright (c) Nexmo Inc.
*/

const page_1 = __importDefault(__webpack_require__(/*! ./page */ "./node_modules/nexmo-client/dist/pages/page.js"));

const nxmEvent_1 = __importDefault(__webpack_require__(/*! ../events/nxmEvent */ "./node_modules/nexmo-client/dist/events/nxmEvent.js"));

const text_event_1 = __importDefault(__webpack_require__(/*! ../events/text_event */ "./node_modules/nexmo-client/dist/events/text_event.js"));

const image_event_1 = __importDefault(__webpack_require__(/*! ../events/image_event */ "./node_modules/nexmo-client/dist/events/image_event.js"));

const message_event_1 = __importDefault(__webpack_require__(/*! ../events/message_event */ "./node_modules/nexmo-client/dist/events/message_event.js"));
/**
 * A Events Page
 *
 * @class EventsPage
 * @param {Map} items map of events fetched in the paginated query
 * @extends Page
*/


class EventsPage extends page_1.default {
  constructor(params) {
    super(params);
    this.items = new Map();
    this.conversation = params.conversation; // Iterate and create the event objects

    params.items.forEach(event => {
      switch (event.type) {
        // NXMEvent types with corresponding classes
        case 'text':
          this.items.set(event.id, new text_event_1.default(this.conversation, event));
          break;

        case 'image':
          this.items.set(event.id, new image_event_1.default(this.conversation, event));
          break;

        case 'message':
          this.items.set(event.id, new message_event_1.default(this.conversation, event));
          break;

        default:
          this.items.set(event.id, new nxmEvent_1.default(this.conversation, event));
          break;
      }
    }); // update the events Map on the conversation

    this.conversation.events = new Map([...this.conversation.events, ...this.items]);
  }
  /**
   * Fetch the previous page if exists
   * @returns {Promise<Page>}
   * @example <caption>Fetch the previous page if exists</caption>
   *  currentEventsPage.getPrev().then((prevEventsPage) => {
   *    console.log("previous events page ", prevEventsPage);
   *  }).catch((error) => {
   *    console.error("error getting previous events page ", error);
   *  });
  */


  getPrev() {
    if (!this.hasPrev()) return this._getError();
    return this.conversation.getEvents(this._getConfig(this.cursor.prev));
  }
  /**
   * Fetch the next page if exists
   * @returns {Promise<Page>}
   * @example <caption>Fetch the next page if exists</caption>
   *  currentEventsPage.getNext().then((nextEventsPage) => {
   *    console.log("next events page ", nextEventsPage);
   *  }).catch((error) => {
   *    console.error("error getting next events page ", error);
   *  });
  */


  getNext() {
    if (!this.hasNext()) return this._getError();
    return this.conversation.getEvents(this._getConfig(this.cursor.next));
  }

}

exports["default"] = EventsPage;
module.exports = EventsPage;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/pages/members_page.js":
/*!**************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/pages/members_page.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *
 * Copyright (c) Nexmo Inc.
*/

const page_1 = __importDefault(__webpack_require__(/*! ./page */ "./node_modules/nexmo-client/dist/pages/page.js"));

const member_1 = __importDefault(__webpack_require__(/*! ../member */ "./node_modules/nexmo-client/dist/member.js"));
/**
 * A Members Page
 *
 * @class MembersPage
 * @param {Map} items map of members fetched in the paginated query
 * @extends Page
*/


class MembersPage extends page_1.default {
  constructor(params) {
    super(params);
    this.conversation = params.conversation;
    this.items = new Map(); // Iterate and create the conversations if not existent

    params.items.forEach(member => {
      this.items.set(member.id, new member_1.default(this.conversation, member));
    });
  }
  /**
   * Fetch the previous page if exists
   * @returns {Promise<Page>}
   * @example <caption>Fetch the previous page if exists</caption>
   *  currentMembersPage.getPrev().then((prevMembersPage) => {
   *    console.log("previous members page ", prevMembersPage);
   *  }).catch((error) => {
   *    console.error("error getting previous members page ", error);
   *  });
  */


  getPrev() {
    if (!this.hasPrev()) return this._getError();
    return this.conversation.getMembers(this._getConfig(this.cursor.prev));
  }
  /**
   * Fetch the next page if exists
   * @returns {Promise<Page>}
   * @example <caption>Fetch the next page if exists</caption>
   *  currentMembersPage.getNext().then((nextMembersPage) => {
   *    console.log("next members page ", nextMembersPage);
   *  }).catch((error) => {
   *    console.error("error getting next members page ", error);
   *  });
  */


  getNext() {
    if (!this.hasNext()) return this._getError();
    return this.conversation.getMembers(this._getConfig(this.cursor.next));
  }

}

exports["default"] = MembersPage;
module.exports = MembersPage;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/pages/page.js":
/*!******************************************************!*\
  !*** ./node_modules/nexmo-client/dist/pages/page.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *
 * Copyright (c) Nexmo Inc.
*/

const nexmoClientError_1 = __webpack_require__(/*! ../nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");
/** Page Class for Paginated Results
 *
 * @class Page
 * @param {number} page_size the number of resources returned in a single request list
 * @param {string} order 'asc' or 'desc' ordering of resources (usually based on creation time)
 * @param {string} cursor cursor parameter to access the next or previous page of a data set
 * @param {Application} application - the parent Application
 * @param {string} [event_type] the type of event used to filter event requests
 *
 * @private
*/


class Page {
  constructor(params = {}) {
    this.page_size = params.page_size;
    this.order = params.order;
    this.cursor = params.cursor;
    this.application = params.application;

    if (params.event_type && params.event_type.length > 0) {
      this.event_type = params.event_type;
    }
  }
  /**
   * Check if previous page exists
   * @returns {Boolean}
   * @example <caption>Check if previous page exists</caption>
   * // currentPage is the current Conversations or Events Page
   * currentPage.hasPrev() // true or false
  */


  hasPrev() {
    return this.cursor.prev ? this.cursor.prev.length > 0 : false;
  }
  /**
   * Check if next page exists
   * @returns {Boolean}
   * @example <caption>Check if next page exists</caption>
   * // currentPage is the current Conversations or Events Page
   * currentPage.hasNext() // true or false
  */


  hasNext() {
    return this.cursor.next ? this.cursor.next.length > 0 : false;
  }
  /**
    * Create config params for paginationRequest
    * @param {string} cursor cursor parameter to access the next or previous page of a data set
    * @returns {Object}
   * @private
  */


  _getConfig(cursor) {
    const config = {
      page_size: this.page_size,
      order: this.order,
      cursor,
      ...(this.event_type && {
        event_type: this.event_type
      })
    };
    return config;
  }
  /**
   * Create a nexmoClientError when page does not exist
   * @private
  */


  _getError() {
    return Promise.reject(new nexmoClientError_1.NexmoClientError('error:invalid-cursor'));
  }

}

exports["default"] = Page;
module.exports = Page;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/pages/page_config.js":
/*!*************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/pages/page_config.js ***!
  \*************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *
 * Copyright (c) Nexmo Inc.
*/

/** Config Class for Paginated Requests
 *
 * @class PageConfig
 * @param {number} page_size=10 the number of resources returned in a single request list
 * @param {string} order=asc the asc' or 'desc' ordering of resources (usually based on creation time)
 * @param {string} cursor='' cursor parameter to access the next or previous page of a data set
 * @param {string} [event_type] the type of event used to filter event requests
 * @private
*/

class PageConfig {
  constructor(params = {}) {
    this.page_size = params.page_size || 10;
    this.order = params.order || 'asc';
    this.cursor = params.cursor || '';

    if (params.event_type) {
      this.event_type = params.event_type;
    }
  }

}

exports["default"] = PageConfig;
module.exports = PageConfig;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/pages/user_sessions_page.js":
/*!********************************************************************!*\
  !*** ./node_modules/nexmo-client/dist/pages/user_sessions_page.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *
 * Copyright (c) Nexmo Inc.
*/

const page_1 = __importDefault(__webpack_require__(/*! ./page */ "./node_modules/nexmo-client/dist/pages/page.js"));

const user_session_1 = __importDefault(__webpack_require__(/*! ../user_session */ "./node_modules/nexmo-client/dist/user_session.js"));
/**
 * A UserSessions Page
 *
 * @class UserSessionsPage
 * @param {Map} items map of UserSessions fetched in the paginated query
 * @extends Page
*/


class UserSessionsPage extends page_1.default {
  constructor(params) {
    super(params);
    this.items = new Map(); // Iterate through the UserSessions

    params.items.forEach(userSession => {
      this.items.set(userSession.id, new user_session_1.default(this.application, userSession));
    });
  }
  /**
   * Fetch the previous page if exists
   * @returns {Promise<Page>}
   * @example <caption>Fetch the previous page if exists</caption>
   *  currentUserSessionsPage.getPrev().then((prevUserSessionsPage) => {
   *    console.log("previous user sessions page ", prevUserSessionsPage);
   *  }).catch((error) => {
   *    console.error("error getting previous user sessions page ", error);
   *  });
  */


  getPrev() {
    if (!this.hasPrev()) return this._getError();
    return this.application.getUserSessions(this._getConfig(this.cursor.prev));
  }
  /**
   * Fetch the next page if exists
   * @returns {Promise<Page>}
   * @example <caption>Fetch the next page if exists</caption>
   *  currentUserSessionsPage.getNext().then((nextUserSessionsPage) => {
   *    console.log("next user sessions page ", nextUserSessionsPage);
   *  }).catch((error) => {
   *    console.error("error getting next user sessions page ", error);
   *  });
  */


  getNext() {
    if (!this.hasNext()) return this._getError();
    return this.application.getUserSessions(this._getConfig(this.cursor.next));
  }

}

exports["default"] = UserSessionsPage;
module.exports = UserSessionsPage;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/sdk.js":
/*!***********************************************!*\
  !*** ./node_modules/nexmo-client/dist/sdk.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Main wrapper
 *
 * Copyright (c) Nexmo Inc.
*/

const WildEmitter = __webpack_require__(/*! wildemitter */ "./node_modules/wildemitter/wildemitter.js");

const loglevel_plugin_prefix_1 = __importDefault(__webpack_require__(/*! loglevel-plugin-prefix */ "./node_modules/loglevel-plugin-prefix/lib/loglevel-plugin-prefix.js"));

const loglevel_1 = __importDefault(__webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js"));

const nexmoClientError_1 = __webpack_require__(/*! ./nexmoClientError */ "./node_modules/nexmo-client/dist/nexmoClientError.js");

const socket_io_client_1 = __importDefault(__webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js"));

const js_1 = __importDefault(__webpack_require__(/*! @bugsnag/js */ "./node_modules/@bugsnag/js/browser/notifier.js"));

const publicip_1 = __importDefault(__webpack_require__(/*! ./modules/publicip */ "./node_modules/nexmo-client/dist/modules/publicip.js"));

const utils_1 = __importDefault(__webpack_require__(/*! ./utils */ "./node_modules/nexmo-client/dist/utils.js"));

const application_1 = __importDefault(__webpack_require__(/*! ./application */ "./node_modules/nexmo-client/dist/application.js"));

const errors_emitter_1 = __importDefault(__webpack_require__(/*! ./modules/errors_emitter */ "./node_modules/nexmo-client/dist/modules/errors_emitter.js"));

const user_1 = __importDefault(__webpack_require__(/*! ./user */ "./node_modules/nexmo-client/dist/user.js"));

const rtc_helper_1 = __importDefault(__webpack_require__(/*! ./modules/rtc_helper */ "./node_modules/nexmo-client/dist/modules/rtc_helper.js"));

loglevel_plugin_prefix_1.default.reg(loglevel_1.default);
loglevel_plugin_prefix_1.default.apply(loglevel_1.default, {
  template: '[%t] %l (NXM-%n):',
  timestampFormatter: date => {
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
  },
  levelFormatter: level => {
    return level.toUpperCase();
  },
  nameFormatter: name => {
    return name || 'SDK';
  }
});
/**
 * The parent NexmoClient class.
 *
 * @class NexmoClient
 *
 * @param {object} params the settings to initialise the SDK
 * @param {string} params.debug='silent' set mode to 'debug', 'info', 'warn', or 'error' for customized logging levels in the console
 * @param {string} params.url='nexmo_ws_url' Nexmo Conversation Websocket url, default is wss://ws.nexmo.com (wss://ws-us-1.nexmo.com for WDC, wss://ws-us-2.nexmo.com for DAL, wss://ws-eu-1.nexmo.com for LON, wss://ws-sg-1.nexmo.com for SNG)
 * @param {string} params.nexmo_api_url=Nexmo Conversation Api url, default is https://api.nexmo.com (https://api-us-1.nexmo.com for WDC, https://api-us-2.nexmo.com for DAL, https://api-eu-1.nexmo.com for LON, https://api-sg-1.nexmo.com for SNG)
 * @param {string} params.ips_url='ips_url' Nexmo IPS url for image upload, default is https://api.nexmo.com/v1/image (https://api-us-1.nexmo.com/v1/image for WDC, https://api-us-2.nexmo.com/v1/image for DAL, https://api-eu-1.nexmo.com/v1/image for LON, https://api-sg-1.nexmo.com/v1/image for SNG)
 * @param {string} params.path='/rtc' Nexmo Conversation Websocket url path suffix
 * @param {RTCStatsConfig} params.rtcstats set reporting for stream statistics (Internal event emit)
 * @param {Boolean} params.rtcstats.emit_events=false receive rtcstats:report event (deprecated)
 * @param {Boolean} params.rtcstats.emit_rtc_analytics=false receive rtcstats:analytics event
 * @param {number} params.rtcstats.emit_interval=1000 interval in ms for rtcstats:report and rtcstats:analytics
 * @param {Boolean} params.rtcstats.remote_collection=true collect client logs internally
 * @param {Boolean} params.rtcstats.remote_collection_url='gollum_url' url for collecting client logs internally
 * @param {number} params.rtcstats.remote_collection_interval=5000 interval in ms to collect client logs internally
 * @param {object} params.socket_io configure socket.io
 * @param {Boolean} params.socket_io.forceNew=true configure socket.io forceNew attribute
 * @param {Boolean} params.socket_io.autoConnect=true socket.io autoConnect attribute
 * @param {Boolean} params.socket_io.reconnection=true socket.io reconnection attribute
 * @param {number} params.socket_io.reconnectionAttempts=5 socket.io reconnectionAttempts attribute
 * @param {string[]} params.socket_io.transports='websocket' socket.io transports protocols
 * @param {string} params.sync='none' {'none' || 'lite' || 'full'} after a successful session creation, synchronise conversations, include events or nothing
 * @param {string} params.environment='production' development / production environment
 * @param {object[]} params.iceServers configure iceServers for RTCPeerConnection
 * @param {string} params.iceServers.urls='stun:stun.l.google.com:19302' urls for iceServers
 * @param {object} params.log_reporter configure log reports for bugsnag tool
 * @param {Boolean} params.log_reporter.enabled=true
 * @param {string} params.log_reporter.bugsnag_key your bugsnag api key / defaults to Nexmo api key
 * @param {object} params.conversations_page_config configure paginated requests for conversations
 * @param {number} params.conversations_page_config.page_size=10 the number of resources returned in a single request list
 * @param {string} params.conversations_page_config.order=asc 'asc' or 'desc' ordering of resources (usually based on creation time)
 * @param {string} params.conversations_page_config.cursor cursor parameter to access the next or previous page of a data set
 * @param {object} params.events_page_config configure paginated requests for events
 * @param {number} params.events_page_config.page_size=10 the number of resources returned in a single request list
 * @param {string} params.events_page_config.order=asc 'asc' or 'desc' ordering of resources (usually based on creation time)
 * @param {string} params.events_page_config.event_type the type of event used to filter event requests. Supports wildcard options with :* eg. 'members:*'
 * @param {Boolean} params.enableEventsQueue=true mechanism to guarantee order of events received during a session
 * @param {string} params.token the jwt token for network requests
 *
 * @emits NexmoClient#connecting
 * @emits NexmoClient#disconnect
 * @emits NexmoClient#error
 * @emits NexmoClient#ready
 * @emits NexmoClient#reconnect
 * @emits NexmoClient#reconnecting
*/

class NexmoClient {
  constructor(params = {}) {
    // save an array of instances
    const inputParams = params;
    this.config = {
      debug: 'silent',
      log_reporter: {
        enabled: false,
        bugsnag_key: null
      },
      environment: 'production',
      ips_url: 'https://api.nexmo.com/v1/image',
      nexmo_api_url: 'https://api.nexmo.com',
      path: '/rtc',
      repository: 'https://github.com/Nexmo/conversation-js-sdk',
      SDK_version: '9.1.3',
      socket_io: {
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 2000,
        randomizationFactor: 0.75,
        reconnectionDelayMax: 15000,
        forceNew: true,
        autoConnect: true,
        transports: ['websocket']
      },
      sync: 'none',
      url: 'https://ws.nexmo.com',
      iceServers: [{
        urls: 'stun:stun.l.google.com:19302'
      }],
      rtcstats: {
        remote_collection: true,
        remote_collection_url: 'https://hlg.tokbox.com/prod/logging/nexmo_client_js_stats',
        remote_collection_interval: 5000,
        emit_events: false,
        emit_rtc_analytics: false,
        emit_interval: 1000
      },
      conversations_page_config: {
        page_size: 10,
        order: 'asc',
        cursor: ''
      },
      events_page_config: {
        page_size: 10,
        order: 'asc',
        event_type: ''
      },
      enableEventsQueue: true,
      token: null
    };
    this.config.socket_io.query = {
      token: '',
      SDK_version: this.config.SDK_version,
      session_version: '0.0.2',
      OS_family: 'js',
      OS_revision: typeof navigator !== 'undefined' ? navigator.userAgent : typeof window !== 'undefined' ? window.navigator.userAgent : 'Generic JS navigator'
    };
    this.sessionReady = false;
    this.session_id = null;
    this.apiKey = null;
    this.requests = {};
    this.application = null;
    /*
      Definitions of log levels
      error: major error messages, some lost functionality
      warn: error messages which do not cause a functional failure
      info: informational messages, showing completion, progress, etc.
      debug: messages to help in diagnosing a problem
    */

    if (['debug', 'info', 'warn', 'error'].includes(inputParams.debug)) {
      loglevel_1.default.setLevel(inputParams.debug);
    } else if (inputParams.debug === true) {
      loglevel_1.default.setLevel('debug');
    } else {
      loglevel_1.default.setLevel('silent');
    }

    this.log = loglevel_1.default.noConflict(); // set our config from the inputParams

    this.config = utils_1.default.deepMergeObj(this.config, this._sanitizeConfig(inputParams)); // inject bug reporting tool

    if (this.config.log_reporter.enabled) {
      const bugsnagConfig = {
        apiKey: this.config.log_reporter.bugsnag_key || utils_1.default._getBugsnagKey(),
        appVersion: this.config.socket_io.query.SDK_version,
        releaseStage: this.config.environment
      };
      __webpack_require__.g.NXMbugsnagClient = js_1.default(bugsnagConfig);
    }

    WildEmitter.mixin(NexmoClient);
  }
  /**
   * Creates and sets the socket_io connection
   *
   * @private
  */


  _createAndSetConnection() {
    let connection; // Create the socket.io connection and allow multiple instances

    let socket_io_config = Object.assign({
      path: this.config.path
    }, this.config.socket_io);
    connection = socket_io_client_1.default.connect(this.config.url, socket_io_config);
    this.connection = connection;
    /**
     * Client listening for ready event.
     *
     * @event NexmoClient#ready
     * @example <caption>Listen for websocket ready event </caption>
     *     rtc.on("ready", () => {
     *      console.log("connection ready");
     *     });
    */

    connection.on('connect', () => {
      this.emit('ready');
      this.sessionReady = true;
      this.log.info('websocket ready');
    }); // Listen to socket.io events

    /**
     * Client listening for connecting event.
     *
     * @event NexmoClient#connecting
     * @example <caption>Listen for websocket connecting event </caption>
     *     rtc.on("connecting", () => {
     *      console.log("connecting");
     *     });
    */

    connection.on('connecting', () => {
      this.emit('connecting');
      this.log.info('websocket connecting');
    });
    /**
     * Client listening for disconnect event.
     *
     * @event NexmoClient#disconnect
     * @example <caption>Listen for websocket disconnect event </caption>
     *     rtc.on("disconnect", () => {
     *      console.log("disconnect");
     *     });
    */

    connection.on('disconnect', reason => {
      this.emit('disconnect', reason === "io client disconnect" ? NexmoClient.DISCONNECT_REASON.ClientDisconnected : reason === "io server disconnect" && this.session_id ? NexmoClient.DISCONNECT_REASON.TokenExpired : NexmoClient.DISCONNECT_REASON.ConnectionError);
      this.log.info('websocket disconnected');
    });
    /**
     * Client listening for reconnect event.
     *
     * @event NexmoClient#reconnect
     * @example <caption>Listen for websocket reconnect event </caption>
     *     rtc.on("reconnect", (retry_number) => {
     *      console.log("reconnect", retry_number);
     *     });
    */

    connection.on('reconnect', retry_number => {
      this.emit('reconnect', retry_number);
      this.log.info('websocket reconnect');
    });
    /**
     * Client listening for reconnecting event.
     *
     * @event NexmoClient#reconnecting
     * @example <caption>Listen for websocket reconnecting event </caption>
     *     rtc.on("reconnecting", (retry_number): void => {
     *      console.log("reconnecting", retry_number);
     *     });
    */

    connection.on('reconnecting', retry_number => {
      this.emit('reconnecting', retry_number);
      this.log.info('websocket reconnecting');
    });
    /**
     * Client listening for error event.
     *
     * @event NexmoClient#error
     * @example <caption>Listen for websocket error event </caption>
     *     rtc.on("error", (error) => {
     *      console.log("error", error);
     *     });
    */

    connection.on('error', error => {
      this.emit('error', new nexmoClientError_1.NexmoClientError(error));
      this.log.error('Socket.io reported a generic error', error);
    });
    connection.on("reconnect_failed", () => {
      this.emit('error', new nexmoClientError_1.NexmoClientError("error:client:reconnection_failed"));
      this.log.error('websocket Reconnection error');
    });
    connection.io.on('packet', packet => {
      if (packet.type !== 2) return;
      if (packet.data[0] === 'echo') return; // ignore echo events

      const response = packet.data[1]; // Set the type of the response

      response.type = packet.data[0];
      this.log.debug('<--', response.type, response);

      if (this.requests['session:login']) {
        const callback = this.requests['session:login'].callback;
        delete this.requests['session:login'];
        callback(response);
      } else if (response.rid in this.requests) {
        const callback = this.requests[response.rid].callback;
        delete this.requests[response.rid];
        delete response.delay;

        if (this.errorsEmitter) {
          this.errorsEmitter.emitResponseIfError(response);
        }

        callback(response);
      } else {
        // This is an unsolicited event we emit it in application level
        // Excluding session:* events from being processed and check if event type is a system:error:* one
        if (this.errorsEmitter && response.type.startsWith('system:error:')) {
          this.errorsEmitter.emitResponseIfError(response);
        } else if (response.type.startsWith('session:')) {
          // Handle Events emitted from Reconnection
          this.updateSession(response);
        } else if (this.application) {
          this.application._enqueueEvent(response);
        }
      }
    });
    return connection;
  }
  /**
   * Revert any invalid params to our default
   *
   * @param {object} config the object to sanitize
   * @private
  */


  _sanitizeConfig(incomingConfig) {
    // make sure we allow specific values for the params
    // Sync
    let sanitizedConfig = incomingConfig;

    if (incomingConfig.sync && ['none', 'lite', 'full'].indexOf(incomingConfig.sync) === -1) {
      this.log.warn(`invalid param '${incomingConfig.sync}' for sync, reverting to ${this.config.sync}`);
      sanitizedConfig.sync = this.config.sync;
    }

    return sanitizedConfig;
  }
  /**
   * Conversation listening for text events.
   *
   * @event Conversation#text
   *
   * @property {Member} sender - The sender of the text
   * @property {TextEvent} text - The text message received
   * @example <caption>listen for text events</caption>
   *  conversation.on("text",(sender, message) => {
   *    console.log(sender, message);
   *    // Identify your own message.
   *    if (message.from === conversation.me.id){
   *        renderMyMessages(message)
   *    } else {
   *        renderOtherMessages(message)
   *    }
   *  });
   */

  /**
   *
   * Conversation listening for image events.
   *
   * @event Conversation#image
   *
   * @property {Member} sender - The sender of the image
   * @property {ImageEvent} image - The image message received
   * @example <caption>listen for image events</caption>
   *  conversation.on("image", (sender, image) => {
   *    console.log(sender,image);
   *    // Identify if your own imageEvent or someone else's.
   *    if (image.from !== conversation.me.id){
   *        displayImages(image);
   *    }
   *  });
   */

  /**
   * Conversation listening for deleted events.
   *
   * @event Conversation#event:delete
   *
   * @property {Member} member - the Member who deleted an event
   * @property {NXMEvent} event - deleted event: event.id
   * @example <caption>get details about the deleted event</caption>
   * conversation.on("event:delete", (member, event) => {
   *  console.log(event.id);
   *  console.log(event.body.timestamp.deleted);
   * });
   */

  /**
   * Conversation listening for new Members.
   *
   * @event Conversation#member:joined
   *
   * @property {Member} member - the Member that joined
   * @property {NXMEvent} event - the join event
   * @example <caption>get the name of the new Member</caption>
   * conversation.on("member:joined", (member, event) => {
   *  console.log(event.id)
   *  console.log(member.userName+ " joined the conversation");
   * });
   */

  /**
   * Conversation listening for Members being invited.
   *
   * @event Conversation#member:invited
   *
   * @property {Member} member - the Member that is invited
   * @property {NXMEvent} event - data regarding the receiver of the invitation
   * @example <caption>get the name of the invited Member</caption>
   * conversation.on("member:invited", (member, event) => {
   *  console.log(member.userName + " invited to the conversation");
   * });
   */

  /**
   * Conversation listening for Members callStatus changes.
   *
   * @event Conversation#member:call:status
   *
   * @property {Member} member - the Member that has left
   * @example <caption>get the callStatus of the member that changed call status</caption>
   * conversation.on("member:call:status", (member) => {
   *  console.log(member.callStatus);
   * });
   */

  /**
   * Conversation listening for Members leaving (kicked or left).
   *
   * @event Conversation#member:left
   *
   * @property {Member} member - the Member that has left
   * @property {NXMEvent} event - data regarding the receiver of the invitation
   * @example <caption>get the username of the Member that left</caption>
   * conversation.on("member:left", (member , event) => {
   *  console.log(member.userName + " left");
   *  console.log(event.body.reason);
   * });
   */

  /**
   * Conversation listening for Members typing.
   *
   * @event Conversation#text:typing:on
   *
   * @property {Member} member - the member that started typing
   * @property {NXMEvent} event - the start typing event
   * @example <caption>get the display name of the Member that is typing</caption>
   * conversation.on("text:typing:on", (member, event) => {
   *  console.log(member.displayName + " is typing...");
   * });
   */

  /**
   * Conversation listening for Members stopped typing.
   *
   * @event Conversation#text:typing:off
   *
   * @property {Member} member - the member that stopped typing
   * @property {NXMEvent} event - the stop typing event
   * @example <caption>get the display name of the Member that stopped typing</caption>
   * conversation.on("text:typing:off", (member, event) => {
   *  console.log(member.displayName + " stopped typing...");
   * });
   */

  /**
   * Conversation listening for Members' seen texts.
   *
   * @event Conversation#text:seen
   *
   * @property {Member} member - the Member that saw the text
   * @property {TextEvent} text - the text that was seen
   * @example <caption>listen for seen text events</caption>
   * conversation.on("text:seen", (member, text) => {
   *  console.log(text);
   *  if (conversation.me.id !== member.memberId) {
   *    console.log(member);
   *  }
   * });
   */

  /**
   * Conversation listening for Members' seen images.
   * @event Conversation#image:seen
   *
   * @property {Member} member - the member that saw the image
   * @property {ImageEvent} image - the image that was seen
   * @example <caption>listen for seen image events</caption>
   * conversation.on("image:seen", (member, image) => {
   *  console.log(image);
   *  if (conversation.me.id !== member.memberId) {
   *    console.log(member);
   *  };
   * });
   */

  /**
   * Conversation listening for Members submitted messages.
   * @event Conversation#message:submitted
   *
   * @property {Member} member - the member that message was submitted to
   * @property {MessageEvent} message - the message that was submitted
   * @example <caption>listen for submitted message events</caption>
   * conversation.on("message:submitted", (member, message) => {
   *  console.log(message);
   *  if (conversation.me.id !== member.memberId) {
   *    console.log(member);
   *  };
   * });
   */

  /**
   * Conversation listening for Members rejected messages.
   * @event Conversation#message:rejected
   *
   * @property {Member} member - the member that message was rejected by
   * @property {MessageEvent} message - the message that was rejected
   * @example <caption>listen for rejected message events</caption>
   * conversation.on("message:rejected", (member, message) => {
   *  console.log(message);
   *  if (conversation.me.id !== member.memberId) {
   *    console.log(member);
   *  };
   * });
   */

  /**
   * Conversation listening for Members undeliverable messages.
   * @event Conversation#message:undeliverable
   *
   * @property {Member} member - the member that message was undeliverable to
   * @property {MessageEvent} message - the message that was undeliverable
   * @example <caption>listen for undeliverable message events</caption>
   * conversation.on("message:undeliverable", (member, message) => {
   *  console.log(message);
   *  if (conversation.me.id !== member.memberId) {
   *    console.log(member);
   *  };
   * });
   */

  /**
   * Conversation listening for Members delivered messages.
   * @event Conversation#message:delivered
   *
   * @property {Member} member - the member that message was delivered to
   * @property {MessageEvent} message - the message that was delivered
   * @example <caption>listen for delivered message events</caption>
   * conversation.on("message:delivered", (member, message) => {
   *  console.log(message);
   *  if (conversation.me.id !== member.memberId) {
   *    console.log(member);
   *  };
   * });
   */

  /**
   * Conversation listening for Members seen messages.
   * @event Conversation#message:seen
   *
   * @property {Member} member - the member that message was seen by
   * @property {MessageEvent} message - the message that was seen
   * @example <caption>listen for seen message events</caption>
   * conversation.on("message:seen", (member, message) => {
   *  console.log(message);
   *  if (conversation.me.id !== member.memberId) {
   *    console.log(member);
   *  };
   * });
   */

  /**
   * Conversation listening for Members media changes (audio,text)
   *
   * Change in media presence state. They are in the Conversation with text or audio.
   *
   * @event Conversation#member:media
   *
   * @property {Member} member - the Member object linked to this event
   * @property {NXMEvent} event - information about media presence state
   * @property {boolean} event.body.audio  - is audio enabled
   * @example <caption>get every Member's media change events </caption>
   * conversation.on("member:media", (member, event) => {
   *  console.log(event.body.media); //{"audio": true, "audio_settings": {"enabled": true, "muted": false, "earmuffed": false}}
   * });
   */

  /**
   * Conversation listening for mute on events
   * A Member has muted their audio
   *
   * @event Conversation#audio:mute:on
   *
   * @property {Member} member - the Member object linked to this event
   * @property {NXMEvent} event - information about the mute event
   * @example <caption>listen for audio mute on events </caption>
   * conversation.on("audio:mute:on", (member, event) => {
   *  console.log("member that is muted ", member);
   *  console.log(event);
   * });
   */

  /**
   * Conversation listening for mute off events
   * A member has unmuted their audio
   *
   * @event Conversation#audio:mute:off
   *
   * @property {Member} member - the member object linked to this event
   * @property {NXMEvent} event - information about the mute event
   * @example <caption>listen for audio mute off events </caption>
   * conversation.on("audio:mute:off", (member, event) => {
   *  console.log("member that is unmuted ", member);
   *  console.log(event);
   * });
   */


  sendRequest(request, callback) {
    // Add a message ID to the request and set up a listener for the reply (or error)
    request.tid = utils_1.default.allocateUUID();
    const type = request.type;
    delete request.type;
    this.log.debug('-->', type, request);
    this.log.info('-->', type, request.tid);
    this.connection.emit(type, request);
    this.requests[request.tid] = {
      type: type,
      request,
      callback
    };
  }

  async sendNetworkRequest(params) {
    const version = params.version || 'beta';
    const url = `${this.config.nexmo_api_url}/${version}/${params.path}`;

    if (!(params.type === 'GET' || params.type === 'DELETE')) {
      if (params.data) {
        params.data.originating_session = this.session_id;
      } else {
        params.data = {
          originating_session: this.session_id
        };
      }
    }

    try {
      const request = {
        type: params.type,
        url,
        data: params.data ? params.data : null,
        token: (params.data || {}).token ? params.data.token : this.config.token || null
      };
      this.log.debug('sendNetworkRequest: ', {
        request
      });
      const {
        response
      } = await utils_1.default.networkRequest(request);
      return response;
    } catch ({
      response
    }) {
      throw response;
    }
  }
  /**
   * Create a new Session.
   * @param {string} token - the user JSON Web Token (JWT)
   * @returns  {Promise<Application>} - the application logged in to
   * @example <caption>Create a session and return the Application</caption>
   *  rtc.createSession(token).then((application) => {
   *    console.log(application);
   *  }).catch((error) => {
   *    console.log(error);
   *  });
  */


  createSession(token) {
    this.config.socket_io.query.token = token;

    this._createAndSetConnection(); // return a promise for the application


    return new Promise((resolve, reject) => {
      this.log.info(`Client-SDK Version: ${this.config.SDK_version}`);
      this.config.token = null;
      this.requests['session:login'] = {
        type: 'session:login',
        callback: async response => {
          if (response.type === 'session:success') {
            this.session_id = response.body.id;
            this.apiKey = response.body.api_key; // Store token in config

            this.config.token = token; // adds the session id as a query parameter in order to
            // connect to the same session in case of a reconnection

            this.connection.io.opts.query = {
              session_id: this.session_id,
              token: this.config.token
            };

            if (!this.application || this.application.me && this.application.me.id !== response.body.user_id) {
              this.application = new application_1.default(this, {});
            }

            if (!this.application.me) {
              this.application.me = new user_1.default(this.application, {
                id: response.body.user_id,
                name: response.body.name
              });
            }

            if (!this.errorsEmitter) {
              this.errorsEmitter = new errors_emitter_1.default(this.application);
            } // Set Bugsnag user to application.me.id


            if (this.config.log_reporter.enabled) {
              __webpack_require__.g.NXMbugsnagClient.user = {
                id: this.application.me.id,
                name: this.application.me.name,
                session_id: response.body.id
              };
            }

            if (this.config.sync !== 'none') {
              // Retrieve the existing conversation data for this user
              try {
                await this.application.getConversations();
                resolve(this.application);
              } catch (error) {
                reject(error);
              }
            } else {
              resolve(this.application);
            }
          } else {
            reject(new nexmoClientError_1.NexmoApiError(response));
          }
        }
      };
    });
  }
  /**
   * Delete existing Session.
   * @returns  {Promise<CAPIResponse>} - response with rid and type
   * @example <caption>Delete existing session</caption>
   *  rtc.deleteSession().then((response) => {
   *    console.log(response);
   *  }).catch((error) => {
   *    console.log(error);
   *  });
  */


  deleteSession() {
    return new Promise(async (resolve, reject) => {
      const logoutRequest = () => {
        return this.sendRequest({
          type: 'session:logout',
          body: {}
        }, response => {
          if (response.type === 'session:logged-out' || response.type === 'session:terminated') {
            this.disconnect();
            delete this.errorsEmitter;
            delete this.application;
            delete this.connection;
            this.requests = {};
            this.sessionReady = false;
            resolve(response);
          } else {
            reject(response);
          }
        });
      }; // prepare for deleteSession


      if (this.application) {
        let disablePromises = [];

        if (this.application.conversations.size) {
          for (let conversation of this.application.conversations.values()) {
            disablePromises.push(conversation.media.disable());
          }
        }

        try {
          await Promise.all(disablePromises);
        } catch (error) {
          this.log.error("deleteSession: ", error);
        }

        return logoutRequest();
      } else {
        return logoutRequest();
      }
    });
  }

  updateSession(event) {
    if (event.type === 'session:success') {
      this.session_id = event.body.id;
      this.connection.io.opts.query.session_id = event.body.id;
    }
  }
  /**
   * Disconnect from the cloud.
   *
  */


  disconnect() {
    return this.connection.disconnect();
  }
  /**
   * Connect to the cloud.
   *
  */


  connect() {
    return this.connection.connect();
  }
  /**
     * Get a connectivity report for all Vonage DCs and Media Servers.
   * @param {string} token - the JSON Web Token (JWT)
   * @param {object} options - configure the connectivityReport
   * @param {Function} options.dcListCallback - a callback function to edit the list of datacenters before connectivity checks
     * @returns  {Promise<Report>}
     * @example <caption>Get a connectivity report</caption>
   *
     *  rtc.connectivityReport(token, {
   *    dcListCallback: (dcList) => {...dcList, additionalDc}
   *  }).then((report) => {
   *    console.log(report);
   *  }).catch((error) => {
   *    console.log(error);
   *  });
  */


  async connectivityReport(token, options) {
    var _a;

    const ip = !rtc_helper_1.default.isNode() ? await publicip_1.default.v4() : undefined;
    const report = {
      machineInfo: {
        ip
      },
      connectivityReport: []
    };

    try {
      const {
        response
      } = await utils_1.default.networkRequest({
        type: 'GET',
        url: `${this.config.nexmo_api_url}/v0.3/discovery/api`,
        token
      });
      let dcList = response;

      if ((_a = options) === null || _a === void 0 ? void 0 : _a.dcListCallback) {
        dcList = options.dcListCallback(dcList);
      }

      for (const dc in dcList) {
        const endpoint = dcList[dc].endpoint;
        const apiUrl = dcList[dc].https;
        const wsUrl = dcList[dc].ws;

        try {
          const httpRes = await utils_1.default._checkHttpConnectivity(apiUrl);
          const wsRes = await utils_1.default._checkWsConnectivity(wsUrl, this.config.path, this.config.socket_io);
          const mediaConnectionReport = await utils_1.default._checkMediaServers(token, endpoint, dc);
          const rep = {
            name: dc,
            signalConnectionReport: {
              https: httpRes,
              ws: wsRes
            },
            mediaConnectionReport
          };
          report.connectivityReport.push(rep);
        } catch (error) {
          this.log.error(`Error generating report for ${dc}`, error);
        }
      }
    } catch (error) {
      this.log.error(`Error fetching nexmo servers information`, error);
    }

    return report;
  }
  /**
    * Return a list with the connection health of the media servers for a specific datacenter.
    * @returns  {Promise<MediaConnectionReport[]>}
  * @param {string} token - the JSON Web Token (JWT)
  * @param {string} nexmo_api_url - url of the nexmo api to be called
  * @param {string} datacenter - datacenter of interest
    * @example <caption>Return a list with the connection health of the media servers</caption>
  *
    *  rtc.checkMediaServers('nexmo-api-url','dc').then((responseArray) => {
    *    console.log(responseArray);
    *  }).catch((error) => {
    *    console.log(error);
    *  });
   */


  async checkMediaServers(token, nexmo_api_url, datacenter) {
    return await utils_1.default._checkMediaServers(token, nexmo_api_url, datacenter);
  }
  /**
  * Return the connection health of a single media server including possible connectionTime in ms.
  * @returns  {Promise<MediaConnectionReport>}
  * @param {string} ip - ip address of the Media Server
  * @param {string} port - port number of the Media Server
  * @example <caption>Return the connection health of a single media server</caption>
  *
  *  rtc.checkMediaConnectivity('ip-address','1').then((response) => {
  *    console.log(`IP Address of media server: ${response.ip}`);
  *    console.log(`Able to connect: ${response.canConnect}`);
  *    console.log(`ConnectionTime in ms: ${resonse.connectionTime}`);
  *  }).catch((error) => {
  *    console.log(error);
  *  });
  */


  async checkMediaConnectivity(ip, port) {
    return await utils_1.default._checkMediaConnectivity(ip, port);
  }

}

exports["default"] = NexmoClient;
/**
 * Enum for NexmoClient disconnection reason.
 * @readonly
 * @enum {string}
 * @alias NexmoClient.DISCONNECT_REASON
*/

NexmoClient.DISCONNECT_REASON = {
  ClientDisconnected: 'ClientDisconnected',
  TokenExpired: 'TokenExpired',
  ConnectionError: 'ConnectionError'
};
module.exports = NexmoClient;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/user.js":
/*!************************************************!*\
  !*** ./node_modules/nexmo-client/dist/user.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  User Object Model
 *
 * Copyright (c) Nexmo Inc.
 */

const WildEmitter = __webpack_require__(/*! wildemitter */ "./node_modules/wildemitter/wildemitter.js");

class User {
  constructor(application, params) {
    this.application = application;
    Object.assign(this, params);
    WildEmitter.mixin(User);
  }

}

exports["default"] = User;
module.exports = User;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/user_session.js":
/*!********************************************************!*\
  !*** ./node_modules/nexmo-client/dist/user_session.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  UserSession Object Model
 *
 * Copyright (c) Nexmo Inc.
 */

const WildEmitter = __webpack_require__(/*! wildemitter */ "./node_modules/wildemitter/wildemitter.js");

class UserSession {
  constructor(application, params) {
    var _a, _b, _c, _d;

    this.application = application;
    this.id = (_b = (_a = params) === null || _a === void 0 ? void 0 : _a.id, _b !== null && _b !== void 0 ? _b : null);
    this._embedded = (_d = (_c = params) === null || _c === void 0 ? void 0 : _c._embedded, _d !== null && _d !== void 0 ? _d : null);
    WildEmitter.mixin(UserSession);
  }

}

exports["default"] = UserSession;
module.exports = UserSession;

/***/ }),

/***/ "./node_modules/nexmo-client/dist/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/nexmo-client/dist/utils.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Nexmo Client SDK
 *  Utility functions
 *
 * Copyright (c) Nexmo Inc.
 */

const uuid_1 = __importDefault(__webpack_require__(/*! uuid */ "./node_modules/uuid/index.js"));

const socket_io_client_1 = __importDefault(__webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js"));

const application_1 = __importDefault(__webpack_require__(/*! ./application */ "./node_modules/nexmo-client/dist/application.js"));

const MEDIA_CONNECTIVITY_TIMEOUT = 40000; // 40s is the default timeout for ice candidates gathering

const WS_CONNECTIVITY_TIMEOUT = 20000; // 20s is the default timeout for ws connection

/**
 * Utilities class for the SDK.
 *
 * @class Utils
 * @private
 */

class Utils {
  /**
   * Get the Member from the username of a conversation
   *
   * @param {string} username the username of the member to get
   * @param {Conversation} conversation the Conversation to search in
   * @returns {Member} the requested Member
   * @static
   */
  static getMemberFromNameOrNull(conversation, username) {
    if (!conversation || !username) return null;

    for (let member of conversation.members.values()) {
      if (member.user.name === username) {
        return member;
      }
    }

    return null;
  }
  /**
   * Get the Member's number or uri from the event's channel field
   *
   * @param {object} channel the event's channel field
   * @returns {string} the requested Member number or uri
   * @static
   */


  static getMemberNumberFromEventOrNull(channel) {
    const from = channel && channel.from;

    if (from && (from.number || from.uri)) {
      return from.number || from.uri;
    }

    return null;
  }
  /**
   * Perform a network request to the given url
   *
   * @param {object} reqObject the object that has all the information for the request
   * @param {string} url the request url
   * @param {string} type=GET|POST|PUT|DELETE the types of the network request
   * @param {object} [data] the data that are going to be sent
   * @param {string} [responseType] the response type of the request
   * @param {string} token the jwt token for the network request
   * @returns {Promise<NetworkRequestResponse>} the NetworkRequestResponse
   * @static
   */


  static networkRequest(reqObject) {
    return new Promise((resolve, reject) => {
      if (!reqObject.token && !reqObject.url.includes('logging') && !reqObject.url.includes('ping')) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          response: {
            type: 'error:user:token',
            description: 'network error on request. Please create a new session.'
          }
        });
      }

      const xhr = new XMLHttpRequest();
      let data;
      xhr.open(reqObject.type, reqObject.url, true);

      if (reqObject.token) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + reqObject.token);
      }

      if (reqObject && reqObject.url.includes('image')) {
        xhr.responseType = '';
        data = reqObject.data;

        xhr.onloadstart = () => {
          resolve(xhr);
        };
      } else {
        xhr.responseType = reqObject.responseType || 'json';
        data = JSON.stringify(reqObject.data) || null;
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      }

      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201 || xhr.status === 204) {
          resolve(xhr);
        } else {
          reject(xhr);
        }
      };

      xhr.onerror = error => {
        reject(error);
      };

      xhr.send(data);
    });
  }
  /**
   * Perform a GET network request for fetching paginated conversations and events
   *
   * @param {string} url the request url
   * @param {object} [params] network request params
   * @param {string} [params.cursor] cursor parameter to access the next or previous page of a data set
   * @param {number} [params.page_size] the number of resources returned in a single request list
   * @param {string} [params.order] 'asc' or 'desc' ordering of resources (usually based on creation time)
   * @param {string} [params.event_type] the type of event used to filter event requests ('member:joined', 'audio:dtmf', etc)
   * @param {string} token the jwt token for the network request
   * @param {string} [version=Application.CONVERSATION_API_VERSION.v1] version of conversation service that is used for the request (one of v1 and v3)
   *
   * @returns {Promise<XMLHttpRequest.response>} the XMLHttpRequest
   * @static
   * @example <caption>Sending a nexmo GET request</caption>
   *    paginationRequest(url, params).then((response) => {
   *      response.items: {},
   *      response.cursor: {
   *          prev: '',
   *          next: '',
   *          self: ''
   *      },
   *      response.page_size: 10,
   *      response.order: 'asc',
   *   });
   */


  static async paginationRequest(url, params, token, version = application_1.default.CONVERSATION_API_VERSION.v1) {
    try {
      const xhr = await Utils.networkRequest({
        type: 'GET',
        url: Utils.addUrlSearchParams(url, params),
        token
      });
      const {
        page_size,
        _embedded,
        _links
      } = xhr.response;
      const resource = url.split('/').pop().trim();
      return {
        items: version === application_1.default.CONVERSATION_API_VERSION.v1 ? _embedded.data[resource] : _embedded[resource],
        cursor: {
          prev: _links.prev ? new URLSearchParams(_links.prev.href).get('cursor') : '',
          next: _links.next ? new URLSearchParams(_links.next.href).get('cursor') : '',
          self: _links.self ? new URLSearchParams(_links.self.href).get('cursor') : ''
        },
        page_size: page_size,
        order: params.order || 'asc',
        event_type: params.event_type || null
      };
    } catch ({
      response
    }) {
      const parsed_error = response ? response : {
        type: 'error:network:get-request',
        description: 'network error on nexmo get request'
      };

      if (parsed_error.validation) {
        parsed_error.description = parsed_error.validation[Object.keys(parsed_error.validation)[0]];
      }

      throw parsed_error;
    }
  }
  /**
   * Update the Search Params of a url
   * @returns {string} the appended url
   * @static
   */


  static addUrlSearchParams(url, params = {}) {
    let appended_url = new URL(url);
    Object.keys(params).forEach(key => {
      if (params[key] && !(typeof params[key] === 'string' && params[key].length < 1) && params[key] !== null) {
        appended_url.searchParams.set(key, params[key]);
      }
    });
    return appended_url.href;
  }
  /**
   * Deep merges two objects
   * @returns {Object} the new merged object
   * @static
   */


  static deepMergeObj(obj1, obj2) {
    const mergedObj = JSON.parse(JSON.stringify(obj1)); // Merge the object into the new mergedObject

    for (let prop in obj2) {
      // If the property is an object then merge properties
      if (Object.prototype.toString.call(obj2[prop]) === '[object Object]') {
        mergedObj[prop] = Utils.deepMergeObj(mergedObj[prop], obj2[prop]);
      } else {
        mergedObj[prop] = obj2[prop];
      }
    }

    return mergedObj;
  }
  /**
   * Inject a script into the document
   *
   * @param {string} s script being executed
   * @param {requestCallback} c the callback fired after script executed
   * @static
   */


  static injectScript(u, c) {
    if (typeof document !== 'undefined') {
      let h = document.getElementsByTagName('head')[0];
      let s = document.createElement('script');
      s.async = true;
      s.src = u;

      s.onload = s.onreadystatechange = () => {
        if (!s.readyState || /loaded|complete/.test(s.readyState)) {
          s.onload = s.onreadystatechange = null;
          s = null;

          if (c) {
            c();
          }
        }
      };

      h.insertBefore(s, h.firstChild);
    }
  }

  static allocateUUID() {
    return uuid_1.default.v4();
  }
  /**
   * Validate dtmf digit
   * @static
   */


  static validateDTMF(digit) {
    return typeof digit === 'string' ? /^[\da-dA-D#*pP]{1,45}$$/.test(digit) : false;
  }
  /**
   * Get the nexmo bugsnag api key
   * @private
   */


  static _getBugsnagKey() {
    return '76498fc1ca8d9b0a173a44e2b873d7ed';
  }
  /**
   * Update the member legs array with the new one received in the event
   *
   * @param {Array} legs the member legs array
   * @param {NXMEvent} event the member event holding the new legs array
   * @static
   */


  static updateMemberLegs(legs, event) {
    if (legs) {
      // find the leg in the legs array if exists
      const leg = legs.find(leg => leg.leg_id === event.body.leg_id);

      if (!leg) {
        legs.push({
          leg_id: event.body.leg_id,
          status: event.body.status
        });
      } else if (leg.status !== event.body.status) {
        // if the status of the leg is different from the event status
        // update the leg object with the new leg status
        let index = legs.indexOf(leg);
        legs.fill(leg.status = event.body.status, index, index++);
      }
    } else {
      legs = [{
        leg_id: event.body.leg_id,
        status: event.body.status
      }];
    }

    return legs;
  }
  /**
   * Check if the event is referenced to a call or simple conversation
   * @private
   */


  static _isCallEvent(event) {
    const {
      channel,
      media
    } = event.body; // in case we have a transfer we should fetch the conversation
    // including the new membership

    if (event.type === "rtc:transfer") return true; // this check differentiates the call flow with the non call
    // IP-PSTN (member:joined) should have an knocking_id inside the channel
    // PSTN-IP and IP-IP (member:invited) should have audio_settings.enabled = true

    if (channel && (media && media.audio_settings && media.audio_settings.enabled || media && media.audio && media.audio.enabled || channel.knocking_id)) {
      return true;
    }

    return false;
  }
  /**
   * Fetch an image from Media Service
   * @private
   */


  static async _fetchImage(url, token) {
    const {
      response
    } = await Utils.networkRequest({
      type: 'GET',
      url,
      responseType: 'arraybuffer',
      token
    });
    const responseArray = new Uint8Array(response); // Convert the int array to a binary String
    // We have to use apply() as we are converting an *array*
    // and String.fromCharCode() takes one or more single values, not
    // an array.
    // support large image files (Chunking)

    let res = '';
    const chunk = 8 * 1024;
    let i;

    for (i = 0; i < responseArray.length / chunk; i++) {
      res += String.fromCharCode.apply(null, responseArray.subarray(i * chunk, (i + 1) * chunk));
    }

    res += String.fromCharCode.apply(null, responseArray.subarray(i * chunk));
    return 'data:image/jpeg;base64,' + btoa(res);
  }
  /**
   * Check if HTTP URL is reachable
   * @private
   */


  static async _checkHttpConnectivity(url) {
    const timeBeforeConnecting = Date.now();

    try {
      await Utils.networkRequest({
        type: 'GET',
        url
      });
      const connectionTime = Date.now() - timeBeforeConnecting;
      return {
        url,
        canConnect: true,
        connectionTime
      };
    } catch (error) {
      return {
        url,
        canConnect: false,
        error
      };
    }
  }
  /**
   * Check if websocket URL is reachable
   * @private
   */


  static _checkWsConnectivity(ws_url, path, config) {
    return new Promise((resolve, reject) => {
      const socket_io_config = Object.assign({
        path
      }, config);
      const timeBeforeConnecting = Date.now();
      const connection = socket_io_client_1.default.connect(ws_url, socket_io_config);
      const timeout = setTimeout(() => resolve({
        url: ws_url,
        canConnect: false
      }), WS_CONNECTIVITY_TIMEOUT);
      connection.on('connect', () => {
        const connectionTime = Date.now() - timeBeforeConnecting;
        connection.disconnect();
        clearTimeout(timeout);
        resolve({
          url: ws_url,
          canConnect: true,
          connectionTime
        });
      });
      connection.on('error', error => {
        connection.disconnect();
        clearTimeout(timeout);
        resolve({
          url: ws_url,
          canConnect: false,
          error
        });
      });
    });
  }
  /**
   * Return a list with the connection health of the Media Servers
   * @private
   */


  static async _checkMediaServers(token, nexmo_api_url, datacenter) {
    try {
      const {
        response
      } = await Utils.networkRequest({
        type: 'GET',
        url: `${nexmo_api_url}/v0.3/discovery/media/${datacenter}`,
        token
      });
      const reqList = response.map(host => Utils._checkMediaConnectivity(host.ip, host.port));
      return await Promise.all(reqList);
    } catch (error) {
      return [];
    }
  }
  /**
   * Check if we can establish a peer connection with a specific Media Server
   * @private
   */


  static async _checkMediaConnectivity(ip, port) {
    return new Promise(async (resolve, reject) => {
      const configuration = {
        iceServers: [{
          urls: `stun:${ip}:${port}`
        }]
      };
      const pc = new RTCPeerConnection(configuration);
      const timeBeforeConnecting = Date.now();
      const offer = await pc.createOffer({
        offerToReceiveAudio: true
      });
      pc.setLocalDescription(offer);
      const timeout = setTimeout(() => {
        pc.close();
        resolve({
          ip,
          canConnect: false
        });
      }, MEDIA_CONNECTIVITY_TIMEOUT);

      pc.onicecandidate = ({
        candidate
      }) => {
        var _a;

        if (((_a = candidate) === null || _a === void 0 ? void 0 : _a.type) === "srflx") {
          const connectionTime = Date.now() - timeBeforeConnecting; // Connection established successfully

          clearTimeout(timeout);
          pc.close();
          resolve({
            ip,
            canConnect: true,
            connectionTime
          });
        }
      };

      pc.onicecandidateerror = event => {
        if (event.errorCode) {
          pc.close();
          clearTimeout(timeout);
          resolve({
            ip,
            canConnect: false,
            error: event
          });
        }
      };
    });
  }

}

exports["default"] = Utils;
module.exports = Utils;

/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */


exports.decode = function (qs) {
  var qry = {};
  var pairs = qs.split('&');

  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
};

/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

module.exports = function parseuri(str) {
  var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  var m = re.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  uri.pathNames = pathNames(uri, uri['path']);
  uri.queryKey = queryKey(uri, uri['query']);
  return uri;
};

function pathNames(obj, path) {
  var regx = /\/{2,9}/g,
      names = path.replace(regx, "/").split("/");

  if (path.substr(0, 1) == '/' || path.length === 0) {
    names.splice(0, 1);
  }

  if (path.substr(path.length - 1, 1) == '/') {
    names.splice(names.length - 1, 1);
  }

  return names;
}

function queryKey(uri, query) {
  var data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

/***/ }),

/***/ "./node_modules/rtc-stats-adapter/calculate-mos.js":
/*!*********************************************************!*\
  !*** ./node_modules/rtc-stats-adapter/calculate-mos.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const {
  iterateReports
} = __webpack_require__(/*! ./utils */ "./node_modules/rtc-stats-adapter/utils.js");

function calculateMos(reports) {
  let jitter_time = 0;
  let recv_pkts = 0;
  let lost_pkts = 0;
  let average = 100.0;
  let packet_loss = 0.0;
  let effective_latency;
  let r_value;
  let mos;
  iterateReports(reports, report => {
    if (report.type === "inbound-rtp") {
      jitter_time = report.jitter;
      lost_pkts = report.packetsLost;
      recv_pkts = report.packetsReceived;
    }
  });

  if (recv_pkts + lost_pkts > 0) {
    packet_loss = 100.0 * (lost_pkts / (recv_pkts + lost_pkts));
  }

  effective_latency = average + jitter_time * 2 + 10;

  if (effective_latency < 160) {
    r_value = 93.2 - effective_latency / 40;
  } else {
    r_value = 93.2 - (effective_latency - 120) / 10;
  }

  r_value = r_value - packet_loss * 2.5;

  if (r_value < 1) {
    r_value = 1;
  }

  mos = 1 + 0.035 * r_value + 0.000007 * r_value * (r_value - 60) * (100 - r_value);
  return parseFloat(mos).toFixed(6);
}

module.exports = calculateMos;

/***/ }),

/***/ "./node_modules/rtc-stats-adapter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/rtc-stats-adapter/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const {
  iterateReports
} = __webpack_require__(/*! ./utils */ "./node_modules/rtc-stats-adapter/utils.js");

const {
  parsers
} = __webpack_require__(/*! ./parsers/new-api */ "./node_modules/rtc-stats-adapter/parsers/new-api.js");

const calculateMos = __webpack_require__(/*! ./calculate-mos */ "./node_modules/rtc-stats-adapter/calculate-mos.js");

function parse(reports) {
  const result = {};
  iterateReports(reports, report => {
    if (report.type in parsers) {
      const mappedReport = parsers[report.type](report);
      Object.assign(result, mappedReport);
    }
  });
  result.networkMos = parseFloat(calculateMos(reports));
  return result;
}

module.exports = parse;

/***/ }),

/***/ "./node_modules/rtc-stats-adapter/parsers/new-api.js":
/*!***********************************************************!*\
  !*** ./node_modules/rtc-stats-adapter/parsers/new-api.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Rules to map different types of reports combined by report name
 * On the left - name of the field in a report
 * On the rirgh - new name
 */
const rules = {
  "outbound-rtp": {
    packetsSent: "audioSentPackets",
    bytesSent: "audioSentBytes"
  },
  "inbound-rtp": {
    packetsReceived: "audioRecvPackets",
    packetsLost: "audioRecvPacketsLost",
    bytesReceived: "audioRecvBytes",
    jitter: "audioRecvJitter"
  },
  "remote-inbound-rtp": {
    packetsLost: "audioSentPacketsLost",
    roundTripTime: "audioRtt",
    jitter: "audioSentJitter"
  }
}; // Additional logic to parse values can be done here

const parsers = {
  "remote-candidate": function (report) {
    return mapKeys(report);
  },
  "inbound-rtp": function (report) {
    return mapKeys(report);
  },
  "outbound-rtp": function (report) {
    return mapKeys(report);
  },
  "remote-inbound-rtp": function (report) {
    return mapKeys(report);
  }
};

const mapKeys = report => {
  const {
    type
  } = report;
  const mapping = rules[type];
  const result = {};

  for (let field in mapping) {
    if (field in report) {
      let mappedName;

      if (typeof mapping[field] === "function") {
        mappedName = mapping[field](report);
      } else {
        mappedName = mapping[field];
      }

      result[mappedName] = report[field];
    } else {
      result[mapping[field]] = null;
    }
  }

  return result;
};

module.exports = {
  rules,
  parsers
};

/***/ }),

/***/ "./node_modules/rtc-stats-adapter/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/rtc-stats-adapter/utils.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


function iterateReports(stats, fn) {
  if (typeof stats[Symbol.iterator] === "function") {
    for (const el of stats) {
      const report = Array.isArray(el) ? el[1] : el;
      fn(report);
    }
  } else {
    for (const key in stats) {
      if (stats.hasOwnProperty(key)) {
        const report = stats[key];
        fn(report);
      }
    }
  }
}

module.exports = {
  iterateReports
};

/***/ }),

/***/ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js":
/*!******************************************************************!*\
  !*** ./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


var SDPUtils = __webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js");

function fixStatsType(stat) {
  return {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  }[stat.type] || stat.type;
}

function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps); // Map ICE parameters (ufrag, pwd) to SDP.

  sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters()); // Map DTLS parameters to SDP.

  sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : dtlsRole || 'active');
  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId || transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId; // spec.

    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' + trackId + '\r\n';
    sdp += 'a=' + msid; // for Chrome. Legacy should no longer be required.

    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid; // RTX

    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
      sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
    }
  } // FIXME: this should be written by writeRtpDescription.


  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';

  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
  }

  return sdp;
} // Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times


function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function (server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;

      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }

      var isString = typeof urls === 'string';

      if (isString) {
        urls = [urls];
      }

      urls = urls.filter(function (url) {
        var validTurn = url.indexOf('turn:') === 0 && url.indexOf('transport=udp') !== -1 && url.indexOf('turn:[') === -1 && !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }

        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 && url.indexOf('?transport=udp') === -1;
      });
      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
} // Determines the intersection of local and remote capabilities.


function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function (pt, codecs) {
    pt = parseInt(pt, 10);

    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt || codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function (lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec && lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function (lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];

      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() && lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' && lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec, localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }

        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels

        rCodec.numChannels = Math.min(lCodec.numChannels, rCodec.numChannels); // push rCodec so we reply with offerer payload type

        commonCapabilities.codecs.push(rCodec); // determine common feedback mechanisms

        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function (fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type && lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }

          return false;
        }); // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569

        break;
      }
    }
  });
  localCapabilities.headerExtensions.forEach(function (lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];

      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  }); // FIXME: fecMechanisms

  return commonCapabilities;
} // is action=setLocalDescription with type allowed in signalingState


function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

function maybeAddCandidate(iceTransport, candidate) {
  // Edge's internal representation adds some fields therefore
  // not all fieldѕ are taken into account.
  var alreadyAdded = iceTransport.getRemoteCandidates().find(function (remoteCandidate) {
    return candidate.foundation === remoteCandidate.foundation && candidate.ip === remoteCandidate.ip && candidate.port === remoteCandidate.port && candidate.priority === remoteCandidate.priority && candidate.protocol === remoteCandidate.protocol && candidate.type === remoteCandidate.type;
  });

  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }

  return !alreadyAdded;
}

function makeError(name, description) {
  var e = new Error(description);
  e.name = name; // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names

  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: undefined,
    OperationError: undefined
  }[name];
  return e;
}

module.exports = function (window, edgeVersion) {
  // https://w3c.github.io/mediacapture-main/#mediastream
  // Helper function to add the track to the stream and
  // dispatch the event ourselves.
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack', {
      track: track
    }));
  }

  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack', {
      track: track
    }));
  }

  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event('track');
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = {
      receiver: receiver
    };
    trackEvent.streams = streams;
    window.setTimeout(function () {
      pc._dispatchEvent('track', trackEvent);
    });
  }

  var RTCPeerConnection = function (config) {
    var pc = this;

    var _eventTarget = document.createDocumentFragment();

    ['addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(function (method) {
      pc[method] = _eventTarget[method].bind(_eventTarget);
    });
    this.canTrickleIceCandidates = null;
    this.needNegotiation = false;
    this.localStreams = [];
    this.remoteStreams = [];
    this._localDescription = null;
    this._remoteDescription = null;
    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.connectionState = 'new';
    this.iceGatheringState = 'new';
    config = JSON.parse(JSON.stringify(config || {}));
    this.usingBundle = config.bundlePolicy === 'max-bundle';

    if (config.rtcpMuxPolicy === 'negotiate') {
      throw makeError('NotSupportedError', 'rtcpMuxPolicy \'negotiate\' is not supported');
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = 'require';
    }

    switch (config.iceTransportPolicy) {
      case 'all':
      case 'relay':
        break;

      default:
        config.iceTransportPolicy = 'all';
        break;
    }

    switch (config.bundlePolicy) {
      case 'balanced':
      case 'max-compat':
      case 'max-bundle':
        break;

      default:
        config.bundlePolicy = 'balanced';
        break;
    }

    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);
    this._iceGatherers = [];

    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }

    this._config = config; // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.

    this.transceivers = [];
    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;
    this._dtlsRole = undefined; // role for a=setup to use in answers.

    this._isClosed = false;
  };

  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
    configurable: true,
    get: function () {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
    configurable: true,
    get: function () {
      return this._remoteDescription;
    }
  }); // set up event handlers on prototype

  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;

  RTCPeerConnection.prototype._dispatchEvent = function (name, event) {
    if (this._isClosed) {
      return;
    }

    this.dispatchEvent(event);

    if (typeof this['on' + name] === 'function') {
      this['on' + name](event);
    }
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function () {
    var event = new Event('icegatheringstatechange');

    this._dispatchEvent('icegatheringstatechange', event);
  };

  RTCPeerConnection.prototype.getConfiguration = function () {
    return this._config;
  };

  RTCPeerConnection.prototype.getLocalStreams = function () {
    return this.localStreams;
  };

  RTCPeerConnection.prototype.getRemoteStreams = function () {
    return this.remoteStreams;
  }; // internal helper to create a transceiver object.
  // (which is not yet the same as the WebRTC 1.0 transceiver)


  RTCPeerConnection.prototype._createTransceiver = function (kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };

    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();

      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }

    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }

    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function (track, stream) {
    if (this._isClosed) {
      throw makeError('InvalidStateError', 'Attempted to call addTrack on a closed peerconnection.');
    }

    var alreadyExists = this.transceivers.find(function (s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw makeError('InvalidAccessError', 'Track already exists.');
    }

    var transceiver;

    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track && this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }

    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    this._maybeFireNegotiationNeeded();

    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track, transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function (stream) {
    var pc = this;

    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function (track) {
        pc.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function (track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function (event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function (track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };

  RTCPeerConnection.prototype.removeTrack = function (sender) {
    if (this._isClosed) {
      throw makeError('InvalidStateError', 'Attempted to call removeTrack on a closed peerconnection.');
    }

    if (!(sender instanceof window.RTCRtpSender)) {
      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.');
    }

    var transceiver = this.transceivers.find(function (t) {
      return t.rtpSender === sender;
    });

    if (!transceiver) {
      throw makeError('InvalidAccessError', 'Sender was not created by this connection.');
    }

    var stream = transceiver.stream;
    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null; // remove the stream from the set of local streams

    var localStreams = this.transceivers.map(function (t) {
      return t.stream;
    });

    if (localStreams.indexOf(stream) === -1 && this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }

    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function (stream) {
    var pc = this;
    stream.getTracks().forEach(function (track) {
      var sender = pc.getSenders().find(function (s) {
        return s.track === track;
      });

      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };

  RTCPeerConnection.prototype.getSenders = function () {
    return this.transceivers.filter(function (transceiver) {
      return !!transceiver.rtpSender;
    }).map(function (transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function () {
    return this.transceivers.filter(function (transceiver) {
      return !!transceiver.rtpReceiver;
    }).map(function (transceiver) {
      return transceiver.rtpReceiver;
    });
  };

  RTCPeerConnection.prototype._createIceGatherer = function (sdpMLineIndex, usingBundle) {
    var pc = this;

    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }

    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, 'state', {
      value: 'new',
      writable: true
    });
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];

    this.transceivers[sdpMLineIndex].bufferCandidates = function (event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0; // polyfill since RTCIceGatherer.state is not implemented in
      // Edge 10547 yet.

      iceGatherer.state = end ? 'completed' : 'gathering';

      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };

    iceGatherer.addEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  }; // start gathering from an RTCIceGatherer.


  RTCPeerConnection.prototype._gather = function (mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;

    if (iceGatherer.onlocalcandidate) {
      return;
    }

    var bufferedCandidateEvents = this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);

    iceGatherer.onlocalcandidate = function (evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        // if we know that we use bundle we can drop candidates with
        // ѕdpMLineIndex > 0. If we don't do this then our state gets
        // confused since we dispose the extra ice gatherer.
        return;
      }

      var event = new Event('icecandidate');
      event.candidate = {
        sdpMid: mid,
        sdpMLineIndex: sdpMLineIndex
      };
      var cand = evt.candidate; // Edge emits an empty object for RTCIceCandidateComplete‥

      var end = !cand || Object.keys(cand).length === 0;

      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
          iceGatherer.state = 'completed';
        }
      } else {
        if (iceGatherer.state === 'new') {
          iceGatherer.state = 'gathering';
        } // RTCIceCandidate doesn't have a component, needs to be added


        cand.component = 1; // also the usernameFragment. TODO: update SDP to take both variants.

        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;
        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate, SDPUtils.parseCandidate(serializedCandidate));
        event.candidate.candidate = serializedCandidate;

        event.candidate.toJSON = function () {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      } // update local description.


      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);

      if (!end) {
        sections[event.candidate.sdpMLineIndex] += 'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex] += 'a=end-of-candidates\r\n';
      }

      pc._localDescription.sdp = SDPUtils.getDescription(pc._localDescription.sdp) + sections.join('');
      var complete = pc.transceivers.every(function (transceiver) {
        return transceiver.iceGatherer && transceiver.iceGatherer.state === 'completed';
      });

      if (pc.iceGatheringState !== 'gathering') {
        pc.iceGatheringState = 'gathering';

        pc._emitGatheringStateChange();
      } // Emit candidate. Also emit null candidate when all gatherers are
      // complete.


      if (!end) {
        pc._dispatchEvent('icecandidate', event);
      }

      if (complete) {
        pc._dispatchEvent('icecandidate', new Event('icecandidate'));

        pc.iceGatheringState = 'complete';

        pc._emitGatheringStateChange();
      }
    }; // emit already gathered candidates.


    window.setTimeout(function () {
      bufferedCandidateEvents.forEach(function (e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  }; // Create ICE transport and DTLS transport.


  RTCPeerConnection.prototype._createIceAndDtlsTransports = function () {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);

    iceTransport.onicestatechange = function () {
      pc._updateIceConnectionState();

      pc._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);

    dtlsTransport.ondtlsstatechange = function () {
      pc._updateConnectionState();
    };

    dtlsTransport.onerror = function () {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state', {
        value: 'failed',
        writable: true
      });

      pc._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  }; // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.


  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function (sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;

    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }

    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;

    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }

    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;

    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  }; // Start the RTP Sender and Receiver for a transceiver.


  RTCPeerConnection.prototype._transceive = function (transceiver, send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);

    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };

      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }

      transceiver.rtpSender.send(params);
    }

    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video' && transceiver.recvEncodingParameters && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function (p) {
          delete p.rtx;
        });
      }

      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }

      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };

      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }

      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }

      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function (description) {
    var pc = this; // Note: pranswer is not supported.

    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setLocalDescription', description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not set local ' + description.type + ' in state ' + pc.signalingState));
    }

    var sections;
    var sessionpart;

    if (description.type === 'offer') {
      // VERY limited support for SDP munging. Limited to:
      // * changing the order of codecs
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function (mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });
      pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
      sections.forEach(function (mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities; // treat bundle-only as not-rejected.

        var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);

          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);

            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters, isIceLite ? 'controlling' : 'controlled');
            }

            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          } // Calculate intersection of capabilities.


          var params = getCommonCapabilities(localCapabilities, remoteCapabilities); // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.

          pc._transceive(transceiver, params.codecs.length > 0, false);
        }
      });
    }

    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };

    if (description.type === 'offer') {
      pc._updateSignalingState('have-local-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.setRemoteDescription = function (description) {
    var pc = this; // Note: pranswer is not supported.

    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setRemoteDescription', description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not set remote ' + description.type + ' in state ' + pc.signalingState));
    }

    var streams = {};
    pc.remoteStreams.forEach(function (stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart, 'a=group:BUNDLE ').length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart, 'a=ice-options:')[0];

    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ').indexOf('trickle') >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }

    sections.forEach(function (mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection); // treat bundle-only as not-rejected.

      var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
      var protocol = lines[0].substr(2).split(' ')[2];
      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);
      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier(); // Reject datachannels which are not implemented yet.

      if (rejected || kind === 'application' && (protocol === 'DTLS/SCTP' || protocol === 'UDP/DTLS/SCTP')) {
        // TODO: this is dangerous in the case where a non-rejected m-line
        //     becomes rejected.
        pc.transceivers[sdpMLineIndex] = {
          mid: mid,
          kind: kind,
          protocol: protocol,
          rejected: true
        };
        return;
      }

      if (!rejected && pc.transceivers[sdpMLineIndex] && pc.transceivers[sdpMLineIndex].rejected) {
        // recycle a rejected transceiver.
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;
      var track; // FIXME: ensure the mediaSection has rtcp-mux set.

      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;

      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
        remoteDtlsParameters.role = 'client';
      }

      recvEncodingParameters = SDPUtils.parseRtpEncodingParameters(mediaSection);
      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);
      var isComplete = SDPUtils.matchPrefix(mediaSection, 'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:').map(function (cand) {
        return SDPUtils.parseCandidate(cand);
      }).filter(function (cand) {
        return cand.component === 1;
      }); // Check if we can use BUNDLE and dispose transports.

      if ((description.type === 'offer' || description.type === 'answer') && !rejected && usingBundle && sdpMLineIndex > 0 && pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);

        pc.transceivers[sdpMLineIndex].iceGatherer = pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport = pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport = pc.transceivers[0].dtlsTransport;

        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(pc.transceivers[0].dtlsTransport);
        }

        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(pc.transceivers[0].dtlsTransport);
        }
      }

      if (description.type === 'offer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] || pc._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, usingBundle);
        }

        if (cands.length && transceiver.iceTransport.state === 'new') {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function (candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind); // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js

        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
            return codec.name !== 'rtx';
          });
        }

        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }]; // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams

        var isNewTrack = false;

        if (direction === 'sendrecv' || direction === 'sendonly') {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver || new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track; // FIXME: does not work with Plan B.

            if (remoteMsid && remoteMsid.stream === '-') {// no-op. a stream id of '-' means: no associated stream.
            } else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], 'id', {
                  get: function () {
                    return remoteMsid.stream;
                  }
                });
              }

              Object.defineProperty(track, 'id', {
                get: function () {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }

              stream = streams.default;
            }

            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }

            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function (s) {
            var nativeTrack = s.getTracks().find(function (t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });

            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters; // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.

        pc._transceive(pc.transceivers[sdpMLineIndex], false, isNewTrack);
      } else if (description.type === 'answer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;
        pc.transceivers[sdpMLineIndex].recvEncodingParameters = recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities = remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (cands.length && iceTransport.state === 'new') {
          if ((isIceLite || isComplete) && (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function (candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === 'new') {
            iceTransport.start(iceGatherer, remoteIceParameters, 'controlling');
          }

          if (dtlsTransport.state === 'new') {
            dtlsTransport.start(remoteDtlsParameters);
          }
        } // If the offer contained RTX but the answer did not,
        // remove RTX from sendEncodingParameters.


        var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
        var hasRtx = commonCapabilities.codecs.filter(function (c) {
          return c.name.toLowerCase() === 'rtx';
        }).length;

        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }

        pc._transceive(transceiver, direction === 'sendrecv' || direction === 'recvonly', direction === 'sendrecv' || direction === 'sendonly'); // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams


        if (rtpReceiver && (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;

          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }

            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }

            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    if (pc._dtlsRole === undefined) {
      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
    }

    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };

    if (description.type === 'offer') {
      pc._updateSignalingState('have-remote-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    Object.keys(streams).forEach(function (sid) {
      var stream = streams[sid];

      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event('addstream');
          event.stream = stream;
          window.setTimeout(function () {
            pc._dispatchEvent('addstream', event);
          });
        }

        receiverList.forEach(function (item) {
          var track = item[0];
          var receiver = item[1];

          if (stream.id !== item[2].id) {
            return;
          }

          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function (item) {
      if (item[2]) {
        return;
      }

      fireAddTrack(pc, item[0], item[1], []);
    }); // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.

    window.setTimeout(function () {
      if (!(pc && pc.transceivers)) {
        return;
      }

      pc.transceivers.forEach(function (transceiver) {
        if (transceiver.iceTransport && transceiver.iceTransport.state === 'new' && transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' + 'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);
    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function () {
    this.transceivers.forEach(function (transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }

      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }

      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }

      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    }); // FIXME: clean up tracks, local streams, remote streams, etc

    this._isClosed = true;

    this._updateSignalingState('closed');
  }; // Update the signaling state.


  RTCPeerConnection.prototype._updateSignalingState = function (newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');

    this._dispatchEvent('signalingstatechange', event);
  }; // Determine whether to fire the negotiationneeded event.


  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function () {
    var pc = this;

    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }

    this.needNegotiation = true;
    window.setTimeout(function () {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event('negotiationneeded');

        pc._dispatchEvent('negotiationneeded', event);
      }
    }, 0);
  }; // Update the ice connection state.


  RTCPeerConnection.prototype._updateIceConnectionState = function () {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function (transceiver) {
      if (transceiver.iceTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
      }
    });
    newState = 'new';

    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.checking > 0) {
      newState = 'checking';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    } else if (states.completed > 0) {
      newState = 'completed';
    }

    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');

      this._dispatchEvent('iceconnectionstatechange', event);
    }
  }; // Update the connection state.


  RTCPeerConnection.prototype._updateConnectionState = function () {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function (transceiver) {
      if (transceiver.iceTransport && transceiver.dtlsTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      }
    }); // ICETransport.completed and connected are the same for this purpose.

    states.connected += states.completed;
    newState = 'new';

    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    }

    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event('connectionstatechange');

      this._dispatchEvent('connectionstatechange', event);
    }
  };

  RTCPeerConnection.prototype.createOffer = function () {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createOffer after close'));
    }

    var numAudioTracks = pc.transceivers.filter(function (t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = pc.transceivers.filter(function (t) {
      return t.kind === 'video';
    }).length; // Determine number of audio and video tracks we need to send/recv.

    var offerOptions = arguments[0];

    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError('Legacy mandatory/optional constraints not supported.');
      }

      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }

      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    pc.transceivers.forEach(function (transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;

        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;

        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    }); // Create M-lines for recvonly streams.

    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver('audio');

        numAudioTracks--;
      }

      if (numVideoTracks > 0) {
        pc._createTransceiver('video');

        numVideoTracks--;
      }
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, pc.usingBundle);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind); // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js

      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
          return codec.name !== 'rtx';
        });
      }

      localCapabilities.codecs.forEach(function (codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' && codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        } // for subsequent offers, we might have to re-use the payload
        // type of the last offer.


        if (transceiver.remoteCapabilities && transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function (remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() && codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function (hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities && transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function (rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      }); // generate an ssrc now, to be used later in rtpSender.send

      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];

      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video' && !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    }); // always offer BUNDLE and dispose on return if not supported.

    if (pc._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }

    sdp += 'a=ice-options:trickle\r\n';
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      sdp += writeMediaSection(transceiver, transceiver.localCapabilities, 'offer', transceiver.stream, pc._dtlsRole);
      sdp += 'a=rtcp-rsize\r\n';

      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' && (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function (cand) {
          cand.component = 1;
          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
        });

        if (transceiver.iceGatherer.state === 'completed') {
          sdp += 'a=end-of-candidates\r\n';
        }
      }
    });
    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function () {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer after close'));
    }

    if (!(pc.signalingState === 'have-remote-offer' || pc.signalingState === 'have-local-pranswer')) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer in signalingState ' + pc.signalingState));
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);

    if (pc.usingBundle) {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }

    sdp += 'a=ice-options:trickle\r\n';
    var mediaSectionsInOffer = SDPUtils.getMediaSections(pc._remoteDescription.sdp).length;
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }

      if (transceiver.rejected) {
        if (transceiver.kind === 'application') {
          if (transceiver.protocol === 'DTLS/SCTP') {
            // legacy fmt
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
          } else {
            sdp += 'm=application 0 ' + transceiver.protocol + ' webrtc-datachannel\r\n';
          }
        } else if (transceiver.kind === 'audio') {
          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' + 'a=rtpmap:0 PCMU/8000\r\n';
        } else if (transceiver.kind === 'video') {
          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' + 'a=rtpmap:120 VP8/90000\r\n';
        }

        sdp += 'c=IN IP4 0.0.0.0\r\n' + 'a=inactive\r\n' + 'a=mid:' + transceiver.mid + '\r\n';
        return;
      } // FIXME: look at direction.


      if (transceiver.stream) {
        var localTrack;

        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }

        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video' && !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      } // Calculate intersection of capabilities.


      var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
      var hasRtx = commonCapabilities.codecs.filter(function (c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;

      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += writeMediaSection(transceiver, commonCapabilities, 'answer', transceiver.stream, pc._dtlsRole);

      if (transceiver.rtcpParameters && transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });
    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function (candidate) {
    var pc = this;
    var sections;

    if (candidate && !(candidate.sdpMLineIndex !== undefined || candidate.sdpMid)) {
      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
    } // TODO: needs to go into ops queue.


    return new Promise(function (resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError('InvalidStateError', 'Can not add ICE candidate without a remote description'));
      } else if (!candidate || candidate.candidate === '') {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }

          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += 'a=end-of-candidates\r\n';
          pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join('');

          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;

        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }

        var transceiver = pc.transceivers[sdpMLineIndex];

        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }

          var cand = Object.keys(candidate.candidate).length > 0 ? SDPUtils.parseCandidate(candidate.candidate) : {}; // Ignore Chrome's invalid candidates since Edge does not like them.

          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          } // Ignore RTCP candidates, we assume RTCP-MUX.


          if (cand.component && cand.component !== 1) {
            return resolve();
          } // when using bundle, avoid adding candidates to the wrong
          // ice transport. And avoid adding candidates added in the SDP.


          if (sdpMLineIndex === 0 || sdpMLineIndex > 0 && transceiver.iceTransport !== pc.transceivers[0].iceTransport) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError('OperationError', 'Can not add ICE candidate'));
            }
          } // update the remoteDescription.


          var candidateString = candidate.candidate.trim();

          if (candidateString.indexOf('a=') === 0) {
            candidateString = candidateString.substr(2);
          }

          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += 'a=' + (cand.type ? candidateString : 'end-of-candidates') + '\r\n';
          pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join('');
        } else {
          return reject(makeError('OperationError', 'Can not add ICE candidate'));
        }
      }

      resolve();
    });
  };

  RTCPeerConnection.prototype.getStats = function (selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function (transceiver) {
        if (transceiver.rtpSender && transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });

      if (!senderOrReceiver) {
        throw makeError('InvalidAccessError', 'Invalid selector.');
      }

      return senderOrReceiver.getStats();
    }

    var promises = [];
    this.transceivers.forEach(function (transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport', 'dtlsTransport'].forEach(function (method) {
        if (transceiver[method]) {
          promises.push(transceiver[method].getStats());
        }
      });
    });
    return Promise.all(promises).then(function (allStats) {
      var results = new Map();
      allStats.forEach(function (stats) {
        stats.forEach(function (stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  }; // fix low-level stat names and return Map instead of object.


  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer', 'RTCIceTransport', 'RTCDtlsTransport'];
  ortcObjects.forEach(function (ortcObjectName) {
    var obj = window[ortcObjectName];

    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;

      obj.prototype.getStats = function () {
        return nativeGetstats.apply(this).then(function (nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function (id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  }); // legacy callback shims. Should be moved to adapter.js some days.

  var methods = ['createOffer', 'createAnswer'];
  methods.forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];

    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;

      if (typeof args[0] === 'function' || typeof args[1] === 'function') {
        // legacy
        return nativeMethod.apply(this, [arguments[2]]).then(function (description) {
          if (typeof args[0] === 'function') {
            args[0].apply(null, [description]);
          }
        }, function (error) {
          if (typeof args[1] === 'function') {
            args[1].apply(null, [error]);
          }
        });
      }

      return nativeMethod.apply(this, arguments);
    };
  });
  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
  methods.forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];

    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;

      if (typeof args[1] === 'function' || typeof args[2] === 'function') {
        // legacy
        return nativeMethod.apply(this, arguments).then(function () {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        }, function (error) {
          if (typeof args[2] === 'function') {
            args[2].apply(null, [error]);
          }
        });
      }

      return nativeMethod.apply(this, arguments);
    };
  }); // getStats is special. It doesn't have a spec legacy method yet we support
  // getStats(something, cb) without error callbacks.

  ['getStats'].forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];

    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;

      if (typeof args[1] === 'function') {
        return nativeMethod.apply(this, arguments).then(function () {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        });
      }

      return nativeMethod.apply(this, arguments);
    };
  });
  return RTCPeerConnection;
};

/***/ }),

/***/ "./node_modules/sdp-transform/lib/grammar.js":
/*!***************************************************!*\
  !*** ./node_modules/sdp-transform/lib/grammar.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


var grammar = module.exports = {
  v: [{
    name: 'version',
    reg: /^(\d*)$/
  }],
  o: [{
    // o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: '%s %s %d %s IP%d %s'
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{
    name: 'name'
  }],
  i: [{
    name: 'description'
  }],
  u: [{
    name: 'uri'
  }],
  e: [{
    name: 'email'
  }],
  p: [{
    name: 'phone'
  }],
  z: [{
    name: 'timezones'
  }],
  // TODO: this one can actually be parsed properly...
  r: [{
    name: 'repeats'
  }],
  // TODO: this one can also be parsed properly
  // k: [{}], // outdated thing ignored
  t: [{
    // t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: '%d %d'
  }],
  c: [{
    // c=IN IP4 10.47.197.26
    name: 'connection',
    reg: /^IN IP(\d) (\S*)/,
    names: ['version', 'ip'],
    format: 'IN IP%d %s'
  }],
  b: [{
    // b=AS:4000
    push: 'bandwidth',
    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
    names: ['type', 'limit'],
    format: '%s:%s'
  }],
  m: [{
    // m=video 51744 RTP/AVP 126 97 98 34 31
    // NB: special - pushes to session
    // TODO: rtp/fmtp should be filtered by the payloads found here?
    reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
    names: ['type', 'port', 'protocol', 'payloads'],
    format: '%s %d %s %s'
  }],
  a: [{
    // a=rtpmap:110 opus/48000/2
    push: 'rtp',
    reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
    names: ['payload', 'codec', 'rate', 'encoding'],
    format: function (o) {
      return o.encoding ? 'rtpmap:%d %s/%s/%s' : o.rate ? 'rtpmap:%d %s/%s' : 'rtpmap:%d %s';
    }
  }, {
    // a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
    // a=fmtp:111 minptime=10; useinbandfec=1
    push: 'fmtp',
    reg: /^fmtp:(\d*) ([\S| ]*)/,
    names: ['payload', 'config'],
    format: 'fmtp:%d %s'
  }, {
    // a=control:streamid=0
    name: 'control',
    reg: /^control:(.*)/,
    format: 'control:%s'
  }, {
    // a=rtcp:65179 IN IP4 193.84.77.194
    name: 'rtcp',
    reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
    names: ['port', 'netType', 'ipVer', 'address'],
    format: function (o) {
      return o.address != null ? 'rtcp:%d %s IP%d %s' : 'rtcp:%d';
    }
  }, {
    // a=rtcp-fb:98 trr-int 100
    push: 'rtcpFbTrrInt',
    reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
    names: ['payload', 'value'],
    format: 'rtcp-fb:%s trr-int %d'
  }, {
    // a=rtcp-fb:98 nack rpsi
    push: 'rtcpFb',
    reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
    names: ['payload', 'type', 'subtype'],
    format: function (o) {
      return o.subtype != null ? 'rtcp-fb:%s %s %s' : 'rtcp-fb:%s %s';
    }
  }, {
    // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
    // a=extmap:1/recvonly URI-gps-string
    // a=extmap:3 urn:ietf:params:rtp-hdrext:encrypt urn:ietf:params:rtp-hdrext:smpte-tc 25@600/24
    push: 'ext',
    reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
    names: ['value', 'direction', 'encrypt-uri', 'uri', 'config'],
    format: function (o) {
      return 'extmap:%d' + (o.direction ? '/%s' : '%v') + (o['encrypt-uri'] ? ' %s' : '%v') + ' %s' + (o.config ? ' %s' : '');
    }
  }, {
    // a=extmap-allow-mixed
    name: 'extmapAllowMixed',
    reg: /^(extmap-allow-mixed)/
  }, {
    // a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
    push: 'crypto',
    reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
    names: ['id', 'suite', 'config', 'sessionConfig'],
    format: function (o) {
      return o.sessionConfig != null ? 'crypto:%d %s %s %s' : 'crypto:%d %s %s';
    }
  }, {
    // a=setup:actpass
    name: 'setup',
    reg: /^setup:(\w*)/,
    format: 'setup:%s'
  }, {
    // a=connection:new
    name: 'connectionType',
    reg: /^connection:(new|existing)/,
    format: 'connection:%s'
  }, {
    // a=mid:1
    name: 'mid',
    reg: /^mid:([^\s]*)/,
    format: 'mid:%s'
  }, {
    // a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
    name: 'msid',
    reg: /^msid:(.*)/,
    format: 'msid:%s'
  }, {
    // a=ptime:20
    name: 'ptime',
    reg: /^ptime:(\d*(?:\.\d*)*)/,
    format: 'ptime:%d'
  }, {
    // a=maxptime:60
    name: 'maxptime',
    reg: /^maxptime:(\d*(?:\.\d*)*)/,
    format: 'maxptime:%d'
  }, {
    // a=sendrecv
    name: 'direction',
    reg: /^(sendrecv|recvonly|sendonly|inactive)/
  }, {
    // a=ice-lite
    name: 'icelite',
    reg: /^(ice-lite)/
  }, {
    // a=ice-ufrag:F7gI
    name: 'iceUfrag',
    reg: /^ice-ufrag:(\S*)/,
    format: 'ice-ufrag:%s'
  }, {
    // a=ice-pwd:x9cml/YzichV2+XlhiMu8g
    name: 'icePwd',
    reg: /^ice-pwd:(\S*)/,
    format: 'ice-pwd:%s'
  }, {
    // a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
    name: 'fingerprint',
    reg: /^fingerprint:(\S*) (\S*)/,
    names: ['type', 'hash'],
    format: 'fingerprint:%s %s'
  }, {
    // a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
    // a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
    // a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
    // a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
    // a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
    push: 'candidates',
    reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
    names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation', 'network-id', 'network-cost'],
    format: function (o) {
      var str = 'candidate:%s %d %s %d %s %d typ %s';
      str += o.raddr != null ? ' raddr %s rport %d' : '%v%v'; // NB: candidate has three optional chunks, so %void middles one if it's missing

      str += o.tcptype != null ? ' tcptype %s' : '%v';

      if (o.generation != null) {
        str += ' generation %d';
      }

      str += o['network-id'] != null ? ' network-id %d' : '%v';
      str += o['network-cost'] != null ? ' network-cost %d' : '%v';
      return str;
    }
  }, {
    // a=end-of-candidates (keep after the candidates line for readability)
    name: 'endOfCandidates',
    reg: /^(end-of-candidates)/
  }, {
    // a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
    name: 'remoteCandidates',
    reg: /^remote-candidates:(.*)/,
    format: 'remote-candidates:%s'
  }, {
    // a=ice-options:google-ice
    name: 'iceOptions',
    reg: /^ice-options:(\S*)/,
    format: 'ice-options:%s'
  }, {
    // a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
    push: 'ssrcs',
    reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
    names: ['id', 'attribute', 'value'],
    format: function (o) {
      var str = 'ssrc:%d';

      if (o.attribute != null) {
        str += ' %s';

        if (o.value != null) {
          str += ':%s';
        }
      }

      return str;
    }
  }, {
    // a=ssrc-group:FEC 1 2
    // a=ssrc-group:FEC-FR 3004364195 1080772241
    push: 'ssrcGroups',
    // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
    reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
    names: ['semantics', 'ssrcs'],
    format: 'ssrc-group:%s %s'
  }, {
    // a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
    name: 'msidSemantic',
    reg: /^msid-semantic:\s?(\w*) (\S*)/,
    names: ['semantic', 'token'],
    format: 'msid-semantic: %s %s' // space after ':' is not accidental

  }, {
    // a=group:BUNDLE audio video
    push: 'groups',
    reg: /^group:(\w*) (.*)/,
    names: ['type', 'mids'],
    format: 'group:%s %s'
  }, {
    // a=rtcp-mux
    name: 'rtcpMux',
    reg: /^(rtcp-mux)/
  }, {
    // a=rtcp-rsize
    name: 'rtcpRsize',
    reg: /^(rtcp-rsize)/
  }, {
    // a=sctpmap:5000 webrtc-datachannel 1024
    name: 'sctpmap',
    reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
    names: ['sctpmapNumber', 'app', 'maxMessageSize'],
    format: function (o) {
      return o.maxMessageSize != null ? 'sctpmap:%s %s %s' : 'sctpmap:%s %s';
    }
  }, {
    // a=x-google-flag:conference
    name: 'xGoogleFlag',
    reg: /^x-google-flag:([^\s]*)/,
    format: 'x-google-flag:%s'
  }, {
    // a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
    push: 'rids',
    reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
    names: ['id', 'direction', 'params'],
    format: function (o) {
      return o.params ? 'rid:%s %s %s' : 'rid:%s %s';
    }
  }, {
    // a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
    // a=imageattr:* send [x=800,y=640] recv *
    // a=imageattr:100 recv [x=320,y=240]
    push: 'imageattrs',
    reg: new RegExp( // a=imageattr:97
    '^imageattr:(\\d+|\\*)' + // send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320]
    '[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)' + // recv [x=330,y=250]
    '(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'),
    names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
    format: function (o) {
      return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
    }
  }, {
    // a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
    // a=simulcast:recv 1;4,5 send 6;7
    name: 'simulcast',
    reg: new RegExp( // a=simulcast:
    '^simulcast:' + // send 1,2,3;~4,~5
    '(send|recv) ([a-zA-Z0-9\\-_~;,]+)' + // space + recv 6;~7,~8
    '(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?' + // end
    '$'),
    names: ['dir1', 'list1', 'dir2', 'list2'],
    format: function (o) {
      return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
    }
  }, {
    // old simulcast draft 03 (implemented by Firefox)
    //   https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
    // a=simulcast: recv pt=97;98 send pt=97
    // a=simulcast: send rid=5;6;7 paused=6,7
    name: 'simulcast_03',
    reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
    names: ['value'],
    format: 'simulcast: %s'
  }, {
    // a=framerate:25
    // a=framerate:29.97
    name: 'framerate',
    reg: /^framerate:(\d+(?:$|\.\d+))/,
    format: 'framerate:%s'
  }, {
    // RFC4570
    // a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
    name: 'sourceFilter',
    reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
    names: ['filterMode', 'netType', 'addressTypes', 'destAddress', 'srcList'],
    format: 'source-filter: %s %s %s %s %s'
  }, {
    // a=bundle-only
    name: 'bundleOnly',
    reg: /^(bundle-only)/
  }, {
    // a=label:1
    name: 'label',
    reg: /^label:(.+)/,
    format: 'label:%s'
  }, {
    // RFC version 26 for SCTP over DTLS
    // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-5
    name: 'sctpPort',
    reg: /^sctp-port:(\d+)$/,
    format: 'sctp-port:%s'
  }, {
    // RFC version 26 for SCTP over DTLS
    // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-6
    name: 'maxMessageSize',
    reg: /^max-message-size:(\d+)$/,
    format: 'max-message-size:%s'
  }, {
    // RFC7273
    // a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:37
    push: 'tsRefClocks',
    reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
    names: ['clksrc', 'clksrcExt'],
    format: function (o) {
      return 'ts-refclk:%s' + (o.clksrcExt != null ? '=%s' : '');
    }
  }, {
    // RFC7273
    // a=mediaclk:direct=963214424
    name: 'mediaClk',
    reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
    names: ['id', 'mediaClockName', 'mediaClockValue', 'rateNumerator', 'rateDenominator'],
    format: function (o) {
      var str = 'mediaclk:';
      str += o.id != null ? 'id=%s %s' : '%v%s';
      str += o.mediaClockValue != null ? '=%s' : '';
      str += o.rateNumerator != null ? ' rate=%s' : '';
      str += o.rateDenominator != null ? '/%s' : '';
      return str;
    }
  }, {
    // a=keywds:keywords
    name: 'keywords',
    reg: /^keywds:(.+)$/,
    format: 'keywds:%s'
  }, {
    // a=content:main
    name: 'content',
    reg: /^content:(.+)/,
    format: 'content:%s'
  }, // BFCP https://tools.ietf.org/html/rfc4583
  {
    // a=floorctrl:c-s
    name: 'bfcpFloorCtrl',
    reg: /^floorctrl:(c-only|s-only|c-s)/,
    format: 'floorctrl:%s'
  }, {
    // a=confid:1
    name: 'bfcpConfId',
    reg: /^confid:(\d+)/,
    format: 'confid:%s'
  }, {
    // a=userid:1
    name: 'bfcpUserId',
    reg: /^userid:(\d+)/,
    format: 'userid:%s'
  }, {
    // a=floorid:1
    name: 'bfcpFloorId',
    reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
    names: ['id', 'mStream'],
    format: 'floorid:%s mstrm:%s'
  }, {
    // any a= that we don't understand is kept verbatim on media.invalid
    push: 'invalid',
    names: ['value']
  }]
}; // set sensible defaults to avoid polluting the grammar with boring details

Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }

    if (!obj.format) {
      obj.format = '%s';
    }
  });
});

/***/ }),

/***/ "./node_modules/sdp-transform/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/sdp-transform/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var parser = __webpack_require__(/*! ./parser */ "./node_modules/sdp-transform/lib/parser.js");

var writer = __webpack_require__(/*! ./writer */ "./node_modules/sdp-transform/lib/writer.js");

exports.write = writer;
exports.parse = parser.parse;
exports.parseParams = parser.parseParams;
exports.parseFmtpConfig = parser.parseFmtpConfig; // Alias of parseParams().

exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;
exports.parseImageAttributes = parser.parseImageAttributes;
exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;

/***/ }),

/***/ "./node_modules/sdp-transform/lib/parser.js":
/*!**************************************************!*\
  !*** ./node_modules/sdp-transform/lib/parser.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  } else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i + 1] != null) {
        location[names[i]] = toIntIfInt(match[i + 1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;

  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  } else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }

  var keyLocation = obj.push ? {} : // blank object that will be pushed
  needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__(/*! ./grammar */ "./node_modules/sdp-transform/lib/grammar.js");

var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {},
      media = [],
      location = session; // points at where properties go under (one of the above)
  // parse lines we understand

  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);

    if (type === 'm') {
      media.push({
        rtp: [],
        fmtp: []
      });
      location = media[media.length - 1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];

      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });
  session.media = media; // link it up

  return session;
};

var paramReducer = function (acc, expr) {
  var s = expr.split(/=(.+)/, 2);

  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  } else if (s.length === 1 && expr.length > 1) {
    acc[s[0]] = undefined;
  }

  return acc;
};

exports.parseParams = function (str) {
  return str.split(/;\s?/).reduce(paramReducer, {});
}; // For backward compatibility - alias will be removed in 3.0.0


exports.parseFmtpConfig = exports.parseParams;

exports.parsePayloads = function (str) {
  return str.toString().split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);

  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }

  return candidates;
};

exports.parseImageAttributes = function (str) {
  return str.split(' ').map(function (item) {
    return item.substring(1, item.length - 1).split(',').reduce(paramReducer, {});
  });
};

exports.parseSimulcastStreamList = function (str) {
  return str.split(';').map(function (stream) {
    return stream.split(',').map(function (format) {
      var scid,
          paused = false;

      if (format[0] !== '~') {
        scid = toIntIfInt(format);
      } else {
        scid = toIntIfInt(format.substring(1, format.length));
        paused = true;
      }

      return {
        scid: scid,
        paused: paused
      };
    });
  });
};

/***/ }),

/***/ "./node_modules/sdp-transform/lib/writer.js":
/*!**************************************************!*\
  !*** ./node_modules/sdp-transform/lib/writer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var grammar = __webpack_require__(/*! ./grammar */ "./node_modules/sdp-transform/lib/grammar.js"); // customized util.format - discards excess arguments and can void middle ones


var formatRegExp = /%[sdv%]/g;

var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }

    var arg = args[i];
    i += 1;

    switch (x) {
      case '%%':
        return '%';

      case '%s':
        return String(arg);

      case '%d':
        return Number(arg);

      case '%v':
        return '';
    }
  }); // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ? obj.format(obj.push ? location : location[obj.name]) : obj.format;
  var args = [type + '=' + str];

  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];

      if (obj.name) {
        args.push(location[obj.name][n]);
      } else {
        // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  } else {
    args.push(location[obj.name]);
  }

  return format.apply(null, args);
}; // RFC specified order
// TODO: extend this with all the rest


var defaultOuterOrder = ['v', 'o', 's', 'i', 'u', 'e', 'p', 'c', 'b', 't', 'r', 'z', 'a'];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];

module.exports = function (session, opts) {
  opts = opts || {}; // ensure certain properties exist

  if (session.version == null) {
    session.version = 0; // 'v=0' must be there (only defined version atm)
  }

  if (session.name == null) {
    session.name = ' '; // 's= ' must be there if no meaningful name set
  }

  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = '';
    }
  });
  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = []; // loop through outerOrder for matching properties on session

  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      } else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  }); // then for each media line, follow the innerOrder

  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));
    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        } else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });
  return sdp.join('\r\n') + '\r\n';
};

/***/ }),

/***/ "./node_modules/sdp/sdp.js":
/*!*********************************!*\
  !*** ./node_modules/sdp/sdp.js ***!
  \*********************************/
/***/ ((module) => {

"use strict";
/* eslint-env node */
 // SDP helpers.

var SDPUtils = {}; // Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883

SDPUtils.generateIdentifier = function () {
  return Math.random().toString(36).substr(2, 10);
}; // The RTCP CNAME used by all peerconnections from the same JS.


SDPUtils.localCName = SDPUtils.generateIdentifier(); // Splits SDP into lines, dealing with both CRLF and LF.

SDPUtils.splitLines = function (blob) {
  return blob.trim().split('\n').map(function (line) {
    return line.trim();
  });
}; // Splits SDP into sessionpart and mediasections. Ensures CRLF.


SDPUtils.splitSections = function (blob) {
  var parts = blob.split('\nm=');
  return parts.map(function (part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
}; // returns the session description.


SDPUtils.getDescription = function (blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
}; // returns the individual media sections.


SDPUtils.getMediaSections = function (blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
}; // Returns lines that start with a certain prefix.


SDPUtils.matchPrefix = function (blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function (line) {
    return line.indexOf(prefix) === 0;
  });
}; // Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"


SDPUtils.parseCandidate = function (line) {
  var parts; // Parse both variants.

  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4],
    // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;

      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;

      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;

      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.

        candidate.usernameFragment = parts[i + 1];
        break;

      default:
        // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }

  return candidate;
}; // Translates a candidate object into SDP candidate attribute.


SDPUtils.writeCandidate = function (candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);
  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);

  if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }

  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }

  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }

  return 'candidate:' + sdp.join(' ');
}; // Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar


SDPUtils.parseIceOptions = function (line) {
  return line.substr(14).split(' ');
}; // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2


SDPUtils.parseRtpMap = function (line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id

  };
  parts = parts[0].split('/');
  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate

  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1; // legacy alias, got renamed back to channels in ORTC.

  parsed.numChannels = parsed.channels;
  return parsed;
}; // Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.


SDPUtils.writeRtpMap = function (codec) {
  var pt = codec.payloadType;

  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }

  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (channels !== 1 ? '/' + channels : '') + '\r\n';
}; // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset


SDPUtils.parseExtmap = function (line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
}; // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.


SDPUtils.writeExtmap = function (headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + '\r\n';
}; // Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on


SDPUtils.parseFmtp = function (line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');

  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }

  return parsed;
}; // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.


SDPUtils.writeFmtp = function (codec) {
  var line = '';
  var pt = codec.payloadType;

  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }

  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function (param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }

  return line;
}; // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi


SDPUtils.parseRtcpFb = function (line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
}; // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.


SDPUtils.writeRtcpFb = function (codec) {
  var lines = '';
  var pt = codec.payloadType;

  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }

  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function (fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
    });
  }

  return lines;
}; // Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something


SDPUtils.parseSsrcMedia = function (line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);

  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }

  return parts;
};

SDPUtils.parseSsrcGroup = function (line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function (ssrc) {
      return parseInt(ssrc, 10);
    })
  };
}; // Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.


SDPUtils.getMid = function (mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];

  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function (line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(),
    // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
}; // Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.


SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:'); // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.

  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
}; // Serializes DTLS parameters to SDP.


SDPUtils.writeDtlsParameters = function (params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function (fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
}; // Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members


SDPUtils.parseCryptoLine = function (line) {
  var parts = line.substr(9).split(' ');
  return {
    tag: parseInt(parts[0], 10),
    cryptoSuite: parts[1],
    keyParams: parts[2],
    sessionParams: parts.slice(3)
  };
};

SDPUtils.writeCryptoLine = function (parameters) {
  return 'a=crypto:' + parameters.tag + ' ' + parameters.cryptoSuite + ' ' + (typeof parameters.keyParams === 'object' ? SDPUtils.writeCryptoKeyParams(parameters.keyParams) : parameters.keyParams) + (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') + '\r\n';
}; // Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*


SDPUtils.parseCryptoKeyParams = function (keyParams) {
  if (keyParams.indexOf('inline:') !== 0) {
    return null;
  }

  var parts = keyParams.substr(7).split('|');
  return {
    keyMethod: 'inline',
    keySalt: parts[0],
    lifeTime: parts[1],
    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined
  };
};

SDPUtils.writeCryptoKeyParams = function (keyParams) {
  return keyParams.keyMethod + ':' + keyParams.keySalt + (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') + (keyParams.mkiValue && keyParams.mkiLength ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength : '');
}; // Extracts all SDES paramters.


SDPUtils.getCryptoParameters = function (mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=crypto:');
  return lines.map(SDPUtils.parseCryptoLine);
}; // Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.


SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
  var ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-ufrag:')[0];
  var pwd = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-pwd:')[0];

  if (!(ufrag && pwd)) {
    return null;
  }

  return {
    usernameFragment: ufrag.substr(12),
    password: pwd.substr(10)
  };
}; // Serializes ICE parameters to SDP.


SDPUtils.writeIceParameters = function (params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
}; // Parses the SDP media section and returns RTCRtpParameters.


SDPUtils.parseRtpParameters = function (mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');

  for (var i = 3; i < mline.length; i++) {
    // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];

    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' '); // Only the first a=fmtp:<pt> is considered.

      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec); // parse FEC mechanisms from rtpmap lines.

      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;

        default:
          // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }

  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function (line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  }); // FIXME: parse rtcp.

  return description;
}; // Generates parts of the SDP media section describing the capabilities /
// parameters.


SDPUtils.writeRtpDescription = function (kind, caps) {
  var sdp = ''; // Build the mline.

  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.

  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function (codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }

    return codec.payloadType;
  }).join(' ') + '\r\n';
  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n'; // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.

  caps.codecs.forEach(function (codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function (codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });

  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }

  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function (extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  } // FIXME: write fecMechanisms.


  return sdp;
}; // Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.


SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1; // filter a=ssrc:... cname:, ignore PlanB-msid

  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;
  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map(function (line) {
    var parts = line.substr(17).split(' ');
    return parts.map(function (part) {
      return parseInt(part, 10);
    });
  });

  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function (codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };

      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {
          ssrc: secondarySsrc
        };
      }

      encodingParameters.push(encParam);

      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });

  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  } // we support both b=AS and b=TIAS but interpret AS as TIAS.


  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');

  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95 - 50 * 40 * 8;
    } else {
      bandwidth = undefined;
    }

    encodingParameters.forEach(function (params) {
      params.maxBitrate = bandwidth;
    });
  }

  return encodingParameters;
}; // parses http://draft.ortc.org/#rtcrtcpparameters*


SDPUtils.parseRtcpParameters = function (mediaSection) {
  var rtcpParameters = {}; // Gets the first SSRC. Note tha with RTX there might be multiple
  // SSRCs.

  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (obj) {
    return obj.attribute === 'cname';
  })[0];

  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  } // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize


  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0; // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.

  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;
  return rtcpParameters;
}; // parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.


SDPUtils.parseMsid = function (mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');

  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {
      stream: parts[0],
      track: parts[1]
    };
  }

  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (msidParts) {
    return msidParts.attribute === 'msid';
  });

  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {
      stream: parts[0],
      track: parts[1]
    };
  }
}; // SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05


SDPUtils.parseSctpDescription = function (mediaSection) {
  var mline = SDPUtils.parseMLine(mediaSection);
  var maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
  var maxMessageSize;

  if (maxSizeLine.length > 0) {
    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
  }

  if (isNaN(maxMessageSize)) {
    maxMessageSize = 65536;
  }

  var sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');

  if (sctpPort.length > 0) {
    return {
      port: parseInt(sctpPort[0].substr(12), 10),
      protocol: mline.fmt,
      maxMessageSize: maxMessageSize
    };
  }

  var sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');

  if (sctpMapLines.length > 0) {
    var parts = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')[0].substr(10).split(' ');
    return {
      port: parseInt(parts[0], 10),
      protocol: parts[1],
      maxMessageSize: maxMessageSize
    };
  }
}; // SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)


SDPUtils.writeSctpDescription = function (media, sctp) {
  var output = [];

  if (media.protocol !== 'DTLS/SCTP') {
    output = ['m=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctp-port:' + sctp.port + '\r\n'];
  } else {
    output = ['m=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'];
  }

  if (sctp.maxMessageSize !== undefined) {
    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
  }

  return output.join('');
}; // Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range


SDPUtils.generateSessionId = function () {
  return Math.random().toString().substr(2, 21);
}; // Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'


SDPUtils.writeSessionBoilerplate = function (sessId, sessVer, sessUser) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;

  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }

  var user = sessUser || 'thisisadapterortc'; // FIXME: sess-id should be an NTP timestamp.

  return 'v=0\r\n' + 'o=' + user + ' ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
};

SDPUtils.writeMediaSection = function (transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps); // Map ICE parameters (ufrag, pwd) to SDP.

  sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters()); // Map DTLS parameters to SDP.

  sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : 'active');
  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' + transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid; // for Chrome.

    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid;

    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
      sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
    }
  } // FIXME: this should be written by writeRtpDescription.


  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';

  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
  }

  return sdp;
}; // Gets the direction from the mediaSection or the sessionpart.


SDPUtils.getDirection = function (mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);

  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);

      default: // FIXME: What should happen here?

    }
  }

  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }

  return 'sendrecv';
};

SDPUtils.getKind = function (mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function (mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function (mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function (mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
}; // a very naive interpretation of a valid SDP.


SDPUtils.isValidSDP = function (blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }

  var lines = SDPUtils.splitLines(blob);

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    } // TODO: check the modifier a bit more.

  }

  return true;
}; // Expose public methods.


if (true) {
  module.exports = SDPUtils;
}

/***/ }),

/***/ "./node_modules/socket.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/index.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/**
 * Module dependencies.
 */
var url = __webpack_require__(/*! ./url */ "./node_modules/socket.io-client/lib/url.js");

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");

var Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client');
/**
 * Module exports.
 */


module.exports = exports = lookup;
/**
 * Managers cache.
 */

var cache = exports.managers = {};
/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }

  return io.socket(parsed.path, opts);
}
/**
 * Protocol version.
 *
 * @api public
 */


exports.protocol = parser.protocol;
/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;
/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
exports.Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");

/***/ }),

/***/ "./node_modules/socket.io-client/lib/manager.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-client/lib/manager.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * Module dependencies.
 */
var eio = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");

var Socket = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");

var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");

var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client:manager');

var indexOf = __webpack_require__(/*! indexof */ "./node_modules/indexof/index.js");

var Backoff = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");
/**
 * IE6+ hasOwnProperty
 */


var has = Object.prototype.hasOwnProperty;
/**
 * Module exports
 */

module.exports = Manager;
/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];

  var _parser = opts.parser || parser;

  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}
/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */


Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);

  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};
/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */


Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};
/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */


Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : nsp + '#') + this.engine.id;
};
/**
 * Mix in `Emitter`.
 */


Emitter(Manager.prototype);
/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};
/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};
/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};
/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};
/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};
/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */


Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};
/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */


Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;
  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false; // emit `open`

  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  }); // emit `connect_error`

  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);

    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  }); // emit `connect_timeout`

  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    if (timeout === 0) {
      openSub.destroy(); // prevents a race condition with the 'open' event
    } // set timer


    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);
    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);
  return this;
};
/**
 * Called upon transport open.
 *
 * @api private
 */


Manager.prototype.onopen = function () {
  debug('open'); // clear old subs

  this.cleanup(); // mark as open

  this.readyState = 'open';
  this.emit('open'); // add new subs

  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};
/**
 * Called upon a ping.
 *
 * @api private
 */


Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};
/**
 * Called upon a packet.
 *
 * @api private
 */


Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};
/**
 * Called with data.
 *
 * @api private
 */


Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};
/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */


Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon socket error.
 *
 * @api private
 */


Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};
/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */


Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];

  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting() {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};
/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */


Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;
  this.close();
};
/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */


Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }

      self.encoding = false;
      self.processPacketQueue();
    });
  } else {
    // add packet to the queue
    self.packetBuffer.push(packet);
  }
};
/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */


Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};
/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */


Manager.prototype.cleanup = function () {
  debug('cleanup');
  var subsLength = this.subs.length;

  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;
  this.decoder.destroy();
};
/**
 * Close the current socket.
 *
 * @api private
 */


Manager.prototype.close = Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;

  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }

  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};
/**
 * Called upon engine close.
 *
 * @api private
 */


Manager.prototype.onclose = function (reason) {
  debug('onclose');
  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};
/**
 * Attempt a reconnection.
 *
 * @api private
 */


Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;
  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);
    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;
      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts); // check again for the case socket closed in above events

      if (self.skipReconnect) return;
      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);
    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};
/**
 * Called upon successful reconnect.
 *
 * @api private
 */


Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

/***/ }),

/***/ "./node_modules/socket.io-client/lib/on.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-client/lib/on.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * Module exports.
 */
module.exports = on;
/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}

/***/ }),

/***/ "./node_modules/socket.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/socket.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/**
 * Module dependencies.
 */
var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var toArray = __webpack_require__(/*! to-array */ "./node_modules/to-array/index.js");

var on = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");

var bind = __webpack_require__(/*! component-bind */ "./node_modules/component-bind/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client:socket');

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var hasBin = __webpack_require__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");
/**
 * Module exports.
 */


module.exports = exports = Socket;
/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};
/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;
/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat

  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};

  if (opts && opts.query) {
    this.query = opts.query;
  }

  if (this.io.autoConnect) this.open();
}
/**
 * Mix in `Emitter`.
 */


Emitter(Socket.prototype);
/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;
  var io = this.io;
  this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
};
/**
 * "Opens" the socket.
 *
 * @api public
 */


Socket.prototype.open = Socket.prototype.connect = function () {
  if (this.connected) return this;
  this.subEvents();
  if (!this.io.reconnecting) this.io.open(); // ensure open

  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};
/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */


Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};
/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */


Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };
  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress; // event ack callback

  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};
  return this;
};
/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};
/**
 * Called upon engine `open`.
 *
 * @api private
 */


Socket.prototype.onopen = function () {
  debug('transport is open - connecting'); // write connect packet if necessary

  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({
        type: parser.CONNECT,
        query: query
      });
    } else {
      this.packet({
        type: parser.CONNECT
      });
    }
  }
};
/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */


Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};
/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';
  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};
/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};
/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */


Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);
    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};
/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];

  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};
/**
 * Called upon server connect.
 *
 * @api private
 */


Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emitBuffered();
  this.emit('connect');
};
/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */


Socket.prototype.emitBuffered = function () {
  var i;

  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }

  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }

  this.sendBuffer = [];
};
/**
 * Called upon server disconnect.
 *
 * @api private
 */


Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};
/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */


Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }

    this.subs = null;
  }

  this.io.destroy(this);
};
/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */


Socket.prototype.close = Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({
      type: parser.DISCONNECT
    });
  } // remove socket from pool


  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }

  return this;
};
/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */


Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};
/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */


Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};

/***/ }),

/***/ "./node_modules/socket.io-client/lib/url.js":
/*!**************************************************!*\
  !*** ./node_modules/socket.io-client/lib/url.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * Module dependencies.
 */
var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client:url');
/**
 * Module exports.
 */


module.exports = url;
/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc) {
  var obj = uri; // default to window.location

  loc = loc || typeof location !== 'undefined' && location;
  if (null == uri) uri = loc.protocol + '//' + loc.host; // relative path support

  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);

      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    } // parse


    debug('parse %s', uri);
    obj = parseuri(uri);
  } // make sure we treat `localhost:80` and `localhost` equally


  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';
  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host; // define unique id

  obj.id = obj.protocol + '://' + host + ':' + obj.port; // define href

  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);
  return obj;
}

/***/ }),

/***/ "./node_modules/socket.io-parser/binary.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-parser/binary.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


/*global Blob,File*/

/**
 * Module requirements
 */
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function (packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'

  return {
    packet: pack,
    buffers: buffers
  };
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);

    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }

    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};

    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }

    return newData;
  }

  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */


exports.reconstructPacket = function (packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful

  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}
/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */


exports.removeBlobs = function (data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj; // convert any blob

    if (withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
      pendingBlobs++; // async filereader

      var fileReader = new FileReader();

      fileReader.onload = function () {
        // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        } else {
          bloblessData = this.result;
        } // if nothing pending its callback time


        if (! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) {
      // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) {
      // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;

  _removeBlobs(bloblessData);

  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

/***/ }),

/***/ "./node_modules/socket.io-parser/index.js":
/*!************************************************!*\
  !*** ./node_modules/socket.io-parser/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


/**
 * Module dependencies.
 */
var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-parser');

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var binary = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-parser/binary.js");

var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

var isBuf = __webpack_require__(/*! ./is-buffer */ "./node_modules/socket.io-parser/is-buffer.js");
/**
 * Protocol version.
 *
 * @api public
 */


exports.protocol = 4;
/**
 * Packet types.
 *
 * @api public
 */

exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];
/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;
/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;
/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;
/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;
/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;
/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;
/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;
/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;
/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;
/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';
/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function (obj, callback) {
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};
/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */


function encodeAsString(obj) {
  // first is type
  var str = '' + obj.type; // attachments if we have them

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  } // if we have a namespace other than `/`
  // we append it followed by a comma `,`


  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  } // immediately followed by the id


  if (null != obj.id) {
    str += obj.id;
  } // json data


  if (null != obj.data) {
    var payload = tryStringify(obj.data);

    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch (e) {
    return false;
  }
}
/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */


function encodeAsBinary(obj, callback) {
  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;
    buffers.unshift(pack); // add packet info to beginning of data list

    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */


function Decoder() {
  this.reconstructor = null;
}
/**
 * Mix in `Emitter` with Decoder.
 */


Emitter(Decoder.prototype);
/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function (obj) {
  var packet;

  if (typeof obj === 'string') {
    packet = decodeString(obj);

    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) {
      // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else {
      // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) {
    // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);

      if (packet) {
        // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};
/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */


function decodeString(str) {
  var i = 0; // look up type

  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  } // look up attachments if type binary


  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var start = i + 1;

    while (str.charAt(++i) !== '-' && i != str.length) {}

    var buf = str.substring(start, i);

    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }

    p.attachments = Number(buf);
  } // look up namespace (if any)


  if ('/' === str.charAt(i + 1)) {
    var start = i + 1;

    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      if (i === str.length) break;
    }

    p.nsp = str.substring(start, i);
  } else {
    p.nsp = '/';
  } // look up id


  var next = str.charAt(i + 1);

  if ('' !== next && Number(next) == next) {
    var start = i + 1;

    while (++i) {
      var c = str.charAt(i);

      if (null == c || Number(c) != c) {
        --i;
        break;
      }

      if (i === str.length) break;
    }

    p.id = Number(str.substring(start, i + 1));
  } // look up json data


  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));

    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}
/**
 * Deallocates a parser's resources
 *
 * @api public
 */


Decoder.prototype.destroy = function () {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */


function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}
/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */


BinaryReconstructor.prototype.takeBinaryData = function (binData) {
  this.buffers.push(binData);

  if (this.buffers.length === this.reconPack.attachments) {
    // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }

  return null;
};
/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */


BinaryReconstructor.prototype.finishedReconstruction = function () {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}

/***/ }),

/***/ "./node_modules/socket.io-parser/is-buffer.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-parser/is-buffer.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


module.exports = isBuf;
var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */


function isBuf(obj) {
  return withNativeBuffer && Buffer.isBuffer(obj) || withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj));
}

/***/ }),

/***/ "./node_modules/to-array/index.js":
/*!****************************************!*\
  !*** ./node_modules/to-array/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


module.exports = toArray;

function toArray(list, index) {
  var array = [];
  index = index || 0;

  for (var i = index || 0; i < list.length; i++) {
    array[i - index] = list[i];
  }

  return array;
}

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");

var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
module.exports = uuid;

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

module.exports = bytesToUuid;

/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");

var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js"); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html


var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = rng();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");

var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_core.js":
/*!************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_core.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _adapter_factory = __webpack_require__(/*! ./adapter_factory.js */ "./node_modules/webrtc-adapter/src/js/adapter_factory.js");

const adapter = (0, _adapter_factory.adapterFactory)({
  window: typeof window === 'undefined' ? undefined : window
});
var _default = adapter;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_factory.js":
/*!***************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_factory.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.adapterFactory = adapterFactory;

var utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js"));

var chromeShim = _interopRequireWildcard(__webpack_require__(/*! ./chrome/chrome_shim */ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js"));

var edgeShim = _interopRequireWildcard(__webpack_require__(/*! ./edge/edge_shim */ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js"));

var firefoxShim = _interopRequireWildcard(__webpack_require__(/*! ./firefox/firefox_shim */ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js"));

var safariShim = _interopRequireWildcard(__webpack_require__(/*! ./safari/safari_shim */ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js"));

var commonShim = _interopRequireWildcard(__webpack_require__(/*! ./common_shim */ "./node_modules/webrtc-adapter/src/js/common_shim.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
// Browser shims.
// Shimming starts here.
function adapterFactory({
  window
} = {}, options = {
  shimChrome: true,
  shimFirefox: true,
  shimEdge: true,
  shimSafari: true
}) {
  // Utils.
  const logging = utils.log;
  const browserDetails = utils.detectBrowser(window);
  const adapter = {
    browserDetails,
    commonShim,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog,
    disableWarnings: utils.disableWarnings
  }; // Shim browser if found.

  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }

      if (browserDetails.version === null) {
        logging('Chrome shim can not determine version, not shimming.');
        return adapter;
      }

      logging('adapter.js shimming chrome.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = chromeShim; // Must be called before shimPeerConnection.

      commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
      chromeShim.shimGetUserMedia(window, browserDetails);
      chromeShim.shimMediaStream(window, browserDetails);
      chromeShim.shimPeerConnection(window, browserDetails);
      chromeShim.shimOnTrack(window, browserDetails);
      chromeShim.shimAddTrackRemoveTrack(window, browserDetails);
      chromeShim.shimGetSendersWithDtmf(window, browserDetails);
      chromeShim.shimGetStats(window, browserDetails);
      chromeShim.shimSenderReceiverGetStats(window, browserDetails);
      chromeShim.fixNegotiationNeeded(window, browserDetails);
      commonShim.shimRTCIceCandidate(window, browserDetails);
      commonShim.shimConnectionState(window, browserDetails);
      commonShim.shimMaxMessageSize(window, browserDetails);
      commonShim.shimSendThrowTypeError(window, browserDetails);
      commonShim.removeExtmapAllowMixed(window, browserDetails);
      break;

    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }

      logging('adapter.js shimming firefox.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = firefoxShim; // Must be called before shimPeerConnection.

      commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
      firefoxShim.shimGetUserMedia(window, browserDetails);
      firefoxShim.shimPeerConnection(window, browserDetails);
      firefoxShim.shimOnTrack(window, browserDetails);
      firefoxShim.shimRemoveStream(window, browserDetails);
      firefoxShim.shimSenderGetStats(window, browserDetails);
      firefoxShim.shimReceiverGetStats(window, browserDetails);
      firefoxShim.shimRTCDataChannel(window, browserDetails);
      firefoxShim.shimAddTransceiver(window, browserDetails);
      firefoxShim.shimGetParameters(window, browserDetails);
      firefoxShim.shimCreateOffer(window, browserDetails);
      firefoxShim.shimCreateAnswer(window, browserDetails);
      commonShim.shimRTCIceCandidate(window, browserDetails);
      commonShim.shimConnectionState(window, browserDetails);
      commonShim.shimMaxMessageSize(window, browserDetails);
      commonShim.shimSendThrowTypeError(window, browserDetails);
      break;

    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }

      logging('adapter.js shimming edge.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = edgeShim;
      edgeShim.shimGetUserMedia(window, browserDetails);
      edgeShim.shimGetDisplayMedia(window, browserDetails);
      edgeShim.shimPeerConnection(window, browserDetails);
      edgeShim.shimReplaceTrack(window, browserDetails); // the edge shim implements the full RTCIceCandidate object.

      commonShim.shimMaxMessageSize(window, browserDetails);
      commonShim.shimSendThrowTypeError(window, browserDetails);
      break;

    case 'safari':
      if (!safariShim || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }

      logging('adapter.js shimming safari.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = safariShim; // Must be called before shimCallbackAPI.

      commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
      safariShim.shimRTCIceServerUrls(window, browserDetails);
      safariShim.shimCreateOfferLegacy(window, browserDetails);
      safariShim.shimCallbacksAPI(window, browserDetails);
      safariShim.shimLocalStreamsAPI(window, browserDetails);
      safariShim.shimRemoteStreamsAPI(window, browserDetails);
      safariShim.shimTrackEventTransceiver(window, browserDetails);
      safariShim.shimGetUserMedia(window, browserDetails);
      safariShim.shimAudioContext(window, browserDetails);
      commonShim.shimRTCIceCandidate(window, browserDetails);
      commonShim.shimMaxMessageSize(window, browserDetails);
      commonShim.shimSendThrowTypeError(window, browserDetails);
      commonShim.removeExtmapAllowMixed(window, browserDetails);
      break;

    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fixNegotiationNeeded = fixNegotiationNeeded;
exports.shimAddTrackRemoveTrack = shimAddTrackRemoveTrack;
exports.shimAddTrackRemoveTrackWithNative = shimAddTrackRemoveTrackWithNative;
Object.defineProperty(exports, "shimGetDisplayMedia", ({
  enumerable: true,
  get: function () {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
}));
exports.shimGetSendersWithDtmf = shimGetSendersWithDtmf;
exports.shimGetStats = shimGetStats;
Object.defineProperty(exports, "shimGetUserMedia", ({
  enumerable: true,
  get: function () {
    return _getusermedia.shimGetUserMedia;
  }
}));
exports.shimMediaStream = shimMediaStream;
exports.shimOnTrack = shimOnTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.shimSenderReceiverGetStats = shimSenderReceiverGetStats;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js"));

var _getusermedia = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js");

var _getdisplaymedia = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get() {
        return this._ontrack;
      },

      set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }

        this.addEventListener('track', this._ontrack = f);
      },

      enumerable: true,
      configurable: true
    });
    const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;

    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      if (!this._ontrackpoly) {
        this._ontrackpoly = e => {
          // onaddstream does not fire when a track is added to an existing
          // stream. But stream.onaddtrack is implemented so we use that.
          e.stream.addEventListener('addtrack', te => {
            let receiver;

            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = this.getReceivers().find(r => r.track && r.track.id === te.track.id);
            } else {
              receiver = {
                track: te.track
              };
            }

            const event = new Event('track');
            event.track = te.track;
            event.receiver = receiver;
            event.transceiver = {
              receiver
            };
            event.streams = [e.stream];
            this.dispatchEvent(event);
          });
          e.stream.getTracks().forEach(track => {
            let receiver;

            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = this.getReceivers().find(r => r.track && r.track.id === track.id);
            } else {
              receiver = {
                track
              };
            }

            const event = new Event('track');
            event.track = track;
            event.receiver = receiver;
            event.transceiver = {
              receiver
            };
            event.streams = [e.stream];
            this.dispatchEvent(event);
          });
        };

        this.addEventListener('addstream', this._ontrackpoly);
      }

      return origSetRemoteDescription.apply(this, arguments);
    };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    utils.wrapPeerConnectionEvent(window, 'track', e => {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver', {
          value: {
            receiver: e.receiver
          }
        });
      }

      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if (typeof window === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
    const shimSenderWithDtmf = function (pc, track) {
      return {
        track,

        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }

          return this._dtmf;
        },

        _pc: pc
      };
    }; // augment addTrack when getSenders is not available.


    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };

      const origAddTrack = window.RTCPeerConnection.prototype.addTrack;

      window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        let sender = origAddTrack.apply(this, arguments);

        if (!sender) {
          sender = shimSenderWithDtmf(this, track);

          this._senders.push(sender);
        }

        return sender;
      };

      const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;

      window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        origRemoveTrack.apply(this, arguments);

        const idx = this._senders.indexOf(sender);

        if (idx !== -1) {
          this._senders.splice(idx, 1);
        }
      };
    }

    const origAddStream = window.RTCPeerConnection.prototype.addStream;

    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(track => {
        this._senders.push(shimSenderWithDtmf(this, track));
      });
    };

    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      this._senders = this._senders || [];
      origRemoveStream.apply(this, [stream]);
      stream.getTracks().forEach(track => {
        const sender = this._senders.find(s => s.track === track);

        if (sender) {
          // remove sender
          this._senders.splice(this._senders.indexOf(sender), 1);
        }
      });
    };
  } else if (typeof window === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;

    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }

        return this._dtmf;
      }

    });
  }
}

function shimGetStats(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  const origGetStats = window.RTCPeerConnection.prototype.getStats;

  window.RTCPeerConnection.prototype.getStats = function getStats() {
    const [selector, onSucc, onErr] = arguments; // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.

    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    } // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.


    if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== 'function')) {
      return origGetStats.apply(this, []);
    }

    const fixChromeStats_ = function (response) {
      const standardReport = {};
      const reports = response.result();
      reports.forEach(report => {
        const standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(name => {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });
      return standardReport;
    }; // shim getStats with maplike support


    const makeMapStats = function (stats) {
      return new Map(Object.keys(stats).map(key => [key, stats[key]]));
    };

    if (arguments.length >= 2) {
      const successCallbackWrapper_ = function (response) {
        onSucc(makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_, selector]);
    } // promise-support


    return new Promise((resolve, reject) => {
      origGetStats.apply(this, [function (response) {
        resolve(makeMapStats(fixChromeStats_(response)));
      }, reject]);
    }).then(onSucc, onErr);
  };
}

function shimSenderReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  } // shim sender stats.


  if (!('getStats' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;

    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach(sender => sender._pc = this);
        return senders;
      };
    }

    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;

    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }

    window.RTCRtpSender.prototype.getStats = function getStats() {
      const sender = this;
      return this._pc.getStats().then(result =>
      /* Note: this will include stats of all senders that
       *   send a track with the same id as sender.track as
       *   it is not possible to identify the RTCRtpSender.
       */
      utils.filterStats(result, sender.track, true));
    };
  } // shim receiver stats.


  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;

    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        const receivers = origGetReceivers.apply(this, []);
        receivers.forEach(receiver => receiver._pc = this);
        return receivers;
      };
    }

    utils.wrapPeerConnectionEvent(window, 'track', e => {
      e.receiver._pc = e.srcElement;
      return e;
    });

    window.RTCRtpReceiver.prototype.getStats = function getStats() {
      const receiver = this;
      return this._pc.getStats().then(result => utils.filterStats(result, receiver.track, false));
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  } // shim RTCPeerConnection.getStats(track).


  const origGetStats = window.RTCPeerConnection.prototype.getStats;

  window.RTCPeerConnection.prototype.getStats = function getStats() {
    if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
      const track = arguments[0];
      let sender;
      let receiver;
      let err;
      this.getSenders().forEach(s => {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(r => {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }

        return r.track === track;
      });

      if (err || sender && receiver) {
        return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }

      return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
    }

    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    return Object.keys(this._shimmedLocalStreams).map(streamId => this._shimmedLocalStreams[streamId][0]);
  };

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;

  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    if (!stream) {
      return origAddTrack.apply(this, arguments);
    }

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    const sender = origAddTrack.apply(this, arguments);

    if (!this._shimmedLocalStreams[stream.id]) {
      this._shimmedLocalStreams[stream.id] = [stream, sender];
    } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
      this._shimmedLocalStreams[stream.id].push(sender);
    }

    return sender;
  };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;

  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);

      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    const existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    const newSenders = this.getSenders().filter(newSender => existingSenders.indexOf(newSender) === -1);
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    delete this._shimmedLocalStreams[stream.id];
    return origRemoveStream.apply(this, arguments);
  };

  const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;

  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    if (sender) {
      Object.keys(this._shimmedLocalStreams).forEach(streamId => {
        const idx = this._shimmedLocalStreams[streamId].indexOf(sender);

        if (idx !== -1) {
          this._shimmedLocalStreams[streamId].splice(idx, 1);
        }

        if (this._shimmedLocalStreams[streamId].length === 1) {
          delete this._shimmedLocalStreams[streamId];
        }
      });
    }

    return origRemoveTrack.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrack(window, browserDetails) {
  if (!window.RTCPeerConnection) {
    return;
  } // shim addTrack and removeTrack.


  if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  } // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.


  const origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;

  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    const nativeStreams = origGetLocalStreams.apply(this);
    this._reverseStreams = this._reverseStreams || {};
    return nativeStreams.map(stream => this._reverseStreams[stream.id]);
  };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;

  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);

      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    }); // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.

    if (!this._reverseStreams[stream.id]) {
      const newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }

    origAddStream.apply(this, [stream]);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
    delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
    delete this._streams[stream.id];
  };

  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }

    const streams = [].slice.call(arguments, 1);

    if (streams.length !== 1 || !streams[0].getTracks().find(t => t === track)) {
      // this is not fully correct but all we can manage without
      // [[associated MediaStreams]] internal slot.
      throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
    }

    const alreadyExists = this.getSenders().find(s => s.track === track);

    if (alreadyExists) {
      throw new DOMException('Track already exists.', 'InvalidAccessError');
    }

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    const oldStream = this._streams[stream.id];

    if (oldStream) {
      // this is using odd Chrome behaviour, use with caution:
      // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
      // Note: we rely on the high-level addTrack/dtmf shim to
      // create the sender with a dtmf sender.
      oldStream.addTrack(track); // Trigger ONN async.

      Promise.resolve().then(() => {
        this.dispatchEvent(new Event('negotiationneeded'));
      });
    } else {
      const newStream = new window.MediaStream([track]);
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      this.addStream(newStream);
    }

    return this.getSenders().find(s => s.track === track);
  }; // replace the internal stream id with the external one and
  // vice versa.


  function replaceInternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }

  function replaceExternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }

  ['createOffer', 'createAnswer'].forEach(function (method) {
    const nativeMethod = window.RTCPeerConnection.prototype[method];
    const methodObj = {
      [method]() {
        const args = arguments;
        const isLegacyCall = arguments.length && typeof arguments[0] === 'function';

        if (isLegacyCall) {
          return nativeMethod.apply(this, [description => {
            const desc = replaceInternalStreamId(this, description);
            args[0].apply(null, [desc]);
          }, err => {
            if (args[1]) {
              args[1].apply(null, err);
            }
          }, arguments[2]]);
        }

        return nativeMethod.apply(this, arguments).then(description => replaceInternalStreamId(this, description));
      }

    };
    window.RTCPeerConnection.prototype[method] = methodObj[method];
  });
  const origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;

  window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
    if (!arguments.length || !arguments[0].type) {
      return origSetLocalDescription.apply(this, arguments);
    }

    arguments[0] = replaceExternalStreamId(this, arguments[0]);
    return origSetLocalDescription.apply(this, arguments);
  }; // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier


  const origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
    get() {
      const description = origLocalDescription.get.apply(this);

      if (description.type === '') {
        return description;
      }

      return replaceInternalStreamId(this, description);
    }

  });

  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    } // We can not yet check for sender instanceof RTCRtpSender
    // since we shim RTPSender. So we check if sender._pc is set.


    if (!sender._pc) {
      throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
    }

    const isLocal = sender._pc === this;

    if (!isLocal) {
      throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
    } // Search for the native stream the senders track belongs to.


    this._streams = this._streams || {};
    let stream;
    Object.keys(this._streams).forEach(streamid => {
      const hasTrack = this._streams[streamid].getTracks().find(track => sender.track === track);

      if (hasTrack) {
        stream = this._streams[streamid];
      }
    });

    if (stream) {
      if (stream.getTracks().length === 1) {
        // if this is the last track of the stream, remove the stream. This
        // takes care of any shimmed _senders.
        this.removeStream(this._reverseStreams[stream.id]);
      } else {
        // relying on the same odd chrome behaviour as above.
        stream.removeTrack(sender.track);
      }

      this.dispatchEvent(new Event('negotiationneeded'));
    }
  };
}

function shimPeerConnection(window, browserDetails) {
  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }

  if (!window.RTCPeerConnection) {
    return;
  } // shim implicit creation of RTCSessionDescription/RTCIceCandidate


  if (browserDetails.version < 53) {
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      const nativeMethod = window.RTCPeerConnection.prototype[method];
      const methodObj = {
        [method]() {
          arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
          return nativeMethod.apply(this, arguments);
        }

      };
      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  }
} // Attempt to fix ONN in plan-b mode.


function fixNegotiationNeeded(window, browserDetails) {
  utils.wrapPeerConnectionEvent(window, 'negotiationneeded', e => {
    const pc = e.target;

    if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === 'plan-b') {
      if (pc.signalingState !== 'stable') {
        return;
      }
    }

    return e;
  });
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js":
/*!**********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shimGetDisplayMedia = shimGetDisplayMedia;

function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }

  if (!window.navigator.mediaDevices) {
    return;
  } // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.


  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
    return;
  }

  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    return getSourceId(constraints).then(sourceId => {
      const widthSpecified = constraints.video && constraints.video.width;
      const heightSpecified = constraints.video && constraints.video.height;
      const frameRateSpecified = constraints.video && constraints.video.frameRate;
      constraints.video = {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sourceId,
          maxFrameRate: frameRateSpecified || 3
        }
      };

      if (widthSpecified) {
        constraints.video.mandatory.maxWidth = widthSpecified;
      }

      if (heightSpecified) {
        constraints.video.mandatory.maxHeight = heightSpecified;
      }

      return window.navigator.mediaDevices.getUserMedia(constraints);
    });
  };
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shimGetUserMedia = shimGetUserMedia;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const logging = utils.log;

function shimGetUserMedia(window, browserDetails) {
  const navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  const constraintsToChrome_ = function (c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }

    const cc = {};
    Object.keys(c).forEach(key => {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }

      const r = typeof c[key] === 'object' ? c[key] : {
        ideal: c[key]
      };

      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }

      const oldname_ = function (prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }

        return name === 'deviceId' ? 'sourceId' : name;
      };

      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        let oc = {};

        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }

      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(mix => {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });

    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }

    return cc;
  };

  const shimConstraints_ = function (constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }

    constraints = JSON.parse(JSON.stringify(constraints));

    if (constraints && typeof constraints.audio === 'object') {
      const remap = function (obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };

      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }

    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      let face = constraints.video.facingMode;
      face = face && (typeof face === 'object' ? face : {
        ideal: face
      });
      const getSupportedFacingModeLies = browserDetails.version < 66;

      if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        let matches;

        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }

        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices().then(devices => {
            devices = devices.filter(d => d.kind === 'videoinput');
            let dev = devices.find(d => matches.some(match => d.label.toLowerCase().includes(match)));

            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }

            if (dev) {
              constraints.video.deviceId = face.exact ? {
                exact: dev.deviceId
              } : {
                ideal: dev.deviceId
              };
            }

            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }

      constraints.video = constraintsToChrome_(constraints.video);
    }

    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  const shimError_ = function (e) {
    if (browserDetails.version >= 64) {
      return e;
    }

    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,

      toString() {
        return this.name + (this.message && ': ') + this.message;
      }

    };
  };

  const getUserMedia_ = function (constraints, onSuccess, onError) {
    shimConstraints_(constraints, c => {
      navigator.webkitGetUserMedia(c, onSuccess, e => {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };

  navigator.getUserMedia = getUserMedia_.bind(navigator); // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.

  if (navigator.mediaDevices.getUserMedia) {
    const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

    navigator.mediaDevices.getUserMedia = function (cs) {
      return shimConstraints_(cs, c => origGetUserMedia(c).then(stream => {
        if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(track => {
            track.stop();
          });
          throw new DOMException('', 'NotFoundError');
        }

        return stream;
      }, e => Promise.reject(shimError_(e))));
    };
  }
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/common_shim.js":
/*!***********************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/common_shim.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeExtmapAllowMixed = removeExtmapAllowMixed;
exports.shimAddIceCandidateNullOrEmpty = shimAddIceCandidateNullOrEmpty;
exports.shimConnectionState = shimConnectionState;
exports.shimMaxMessageSize = shimMaxMessageSize;
exports.shimRTCIceCandidate = shimRTCIceCandidate;
exports.shimSendThrowTypeError = shimSendThrowTypeError;

var _sdp = _interopRequireDefault(__webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js"));

var utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
    return;
  }

  const NativeRTCIceCandidate = window.RTCIceCandidate;

  window.RTCIceCandidate = function RTCIceCandidate(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if (typeof args === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      const nativeCandidate = new NativeRTCIceCandidate(args);

      const parsedCandidate = _sdp.default.parseCandidate(args.candidate);

      const augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate); // Add a serializer that does not serialize the extra attributes.

      augmentedCandidate.toJSON = function toJSON() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment
        };
      };

      return augmentedCandidate;
    }

    return new NativeRTCIceCandidate(args);
  };

  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype; // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)

  utils.wrapPeerConnectionEvent(window, 'icecandidate', e => {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }

    return e;
  });
}

function shimMaxMessageSize(window, browserDetails) {
  if (!window.RTCPeerConnection) {
    return;
  }

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }

    });
  }

  const sctpInDescription = function (description) {
    if (!description || !description.sdp) {
      return false;
    }

    const sections = _sdp.default.splitSections(description.sdp);

    sections.shift();
    return sections.some(mediaSection => {
      const mLine = _sdp.default.parseMLine(mediaSection);

      return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  const getRemoteFirefoxVersion = function (description) {
    // TODO: Is there a better solution for detecting Firefox?
    const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);

    if (match === null || match.length < 2) {
      return -1;
    }

    const version = parseInt(match[1], 10); // Test for NaN (yes, this is ugly)

    return version !== version ? -1 : version;
  };

  const getCanSendMaxMessageSize = function (remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    let canSendMaxMessageSize = 65536;

    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }

    return canSendMaxMessageSize;
  };

  const getMaxMessageSize = function (description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    let maxMessageSize = 65536; // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697

    if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    const match = _sdp.default.matchPrefix(description.sdp, 'a=max-message-size:');

    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }

    return maxMessageSize;
  };

  const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;

  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
    this._sctp = null; // Chrome decided to not expose .sctp in plan-b mode.
    // As usual, adapter.js has to do an 'ugly worakaround'
    // to cover up the mess.

    if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
      const {
        sdpSemantics
      } = this.getConfiguration();

      if (sdpSemantics === 'plan-b') {
        Object.defineProperty(this, 'sctp', {
          get() {
            return typeof this._sctp === 'undefined' ? null : this._sctp;
          },

          enumerable: true,
          configurable: true
        });
      }
    }

    if (sctpInDescription(arguments[0])) {
      // Check if the remote is FF.
      const isFirefox = getRemoteFirefoxVersion(arguments[0]); // Get the maximum message size the local peer is capable of sending

      const canSendMMS = getCanSendMaxMessageSize(isFirefox); // Get the maximum message size of the remote peer.

      const remoteMMS = getMaxMessageSize(arguments[0], isFirefox); // Determine final maximum message size

      let maxMessageSize;

      if (canSendMMS === 0 && remoteMMS === 0) {
        maxMessageSize = Number.POSITIVE_INFINITY;
      } else if (canSendMMS === 0 || remoteMMS === 0) {
        maxMessageSize = Math.max(canSendMMS, remoteMMS);
      } else {
        maxMessageSize = Math.min(canSendMMS, remoteMMS);
      } // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
      // attribute.


      const sctp = {};
      Object.defineProperty(sctp, 'maxMessageSize', {
        get() {
          return maxMessageSize;
        }

      });
      this._sctp = sctp;
    }

    return origSetRemoteDescription.apply(this, arguments);
  };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  } // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831


  function wrapDcSend(dc, pc) {
    const origDataChannelSend = dc.send;

    dc.send = function send() {
      const data = arguments[0];
      const length = data.length || data.size || data.byteLength;

      if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
      }

      return origDataChannelSend.apply(dc, arguments);
    };
  }

  const origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;

  window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
    const dataChannel = origCreateDataChannel.apply(this, arguments);
    wrapDcSend(dataChannel, this);
    return dataChannel;
  };

  utils.wrapPeerConnectionEvent(window, 'datachannel', e => {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}
/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */


function shimConnectionState(window) {
  if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }

  const proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },

    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get() {
      return this._onconnectionstatechange || null;
    },

    set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }

      if (cb) {
        this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
      }
    },

    enumerable: true,
    configurable: true
  });
  ['setLocalDescription', 'setRemoteDescription'].forEach(method => {
    const origMethod = proto[method];

    proto[method] = function () {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = e => {
          const pc = e.target;

          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            const newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }

          return e;
        };

        this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
      }

      return origMethod.apply(this, arguments);
    };
  });
}

function removeExtmapAllowMixed(window, browserDetails) {
  /* remove a=extmap-allow-mixed for webrtc.org < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }

  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }

  if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
    return;
  }

  const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;

  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      const sdp = desc.sdp.split('\n').filter(line => {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n'); // Safari enforces read-only-ness of RTCSessionDescription fields.

      if (window.RTCSessionDescription && desc instanceof window.RTCSessionDescription) {
        arguments[0] = new window.RTCSessionDescription({
          type: desc.type,
          sdp
        });
      } else {
        desc.sdp = sdp;
      }
    }

    return nativeSRD.apply(this, arguments);
  };
}

function shimAddIceCandidateNullOrEmpty(window, browserDetails) {
  // Support for addIceCandidate(null or undefined)
  // as well as addIceCandidate({candidate: "", ...})
  // https://bugs.chromium.org/p/chromium/issues/detail?id=978582
  // Note: must be called before other polyfills which change the signature.
  if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) {
    return;
  }

  const nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;

  if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) {
    return;
  }

  window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }

      return Promise.resolve();
    } // Firefox 68+ emits and processes {candidate: "", ...}, ignore
    // in older versions.
    // Native support for ignoring exists for Chrome M77+.
    // Safari ignores as well, exact version unknown but works in the same
    // version that also ignores addIceCandidate(null).


    if ((browserDetails.browser === 'chrome' && browserDetails.version < 78 || browserDetails.browser === 'firefox' && browserDetails.version < 68 || browserDetails.browser === 'safari') && arguments[0] && arguments[0].candidate === '') {
      return Promise.resolve();
    }

    return nativeAddIceCandidate.apply(this, arguments);
  };
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js":
/*!**************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/edge_shim.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "shimGetDisplayMedia", ({
  enumerable: true,
  get: function () {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
}));
Object.defineProperty(exports, "shimGetUserMedia", ({
  enumerable: true,
  get: function () {
    return _getusermedia.shimGetUserMedia;
  }
}));
exports.shimPeerConnection = shimPeerConnection;
exports.shimReplaceTrack = shimReplaceTrack;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js"));

var _filtericeservers = __webpack_require__(/*! ./filtericeservers */ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js");

var _rtcpeerconnectionShim = _interopRequireDefault(__webpack_require__(/*! rtcpeerconnection-shim */ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js"));

var _getusermedia = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js");

var _getdisplaymedia = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function shimPeerConnection(window, browserDetails) {
  if (window.RTCIceGatherer) {
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function RTCIceCandidate(args) {
        return args;
      };
    }

    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function RTCSessionDescription(args) {
        return args;
      };
    } // this adds an additional event listener to MediaStrackTrack that signals
    // when a tracks enabled property was changed. Workaround for a bug in
    // addStream, see below. No longer required in 15025+


    if (browserDetails.version < 15025) {
      const origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
        set(value) {
          origMSTEnabled.set.call(this, value);
          const ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }

      });
    }
  } // ORTC defines the DTMF sender a bit different.
  // https://github.com/w3c/ortc/issues/714


  if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = new window.RTCDtmfSender(this);
          } else if (this.track.kind === 'video') {
            this._dtmf = null;
          }
        }

        return this._dtmf;
      }

    });
  } // Edge currently only implements the RTCDtmfSender, not the
  // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*


  if (window.RTCDtmfSender && !window.RTCDTMFSender) {
    window.RTCDTMFSender = window.RTCDtmfSender;
  }

  const RTCPeerConnectionShim = (0, _rtcpeerconnectionShim.default)(window, browserDetails.version);

  window.RTCPeerConnection = function RTCPeerConnection(config) {
    if (config && config.iceServers) {
      config.iceServers = (0, _filtericeservers.filterIceServers)(config.iceServers, browserDetails.version);
      utils.log('ICE servers after filtering:', config.iceServers);
    }

    return new RTCPeerConnectionShim(config);
  };

  window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}

function shimReplaceTrack(window) {
  // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
  if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
    window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
  }
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.filterIceServers = filterIceServers;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  let hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(server => {
    if (server && (server.urls || server.url)) {
      let urls = server.urls || server.url;

      if (server.url && !server.urls) {
        utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
      }

      const isString = typeof urls === 'string';

      if (isString) {
        urls = [urls];
      }

      urls = urls.filter(url => {
        // filter STUN unconditionally.
        if (url.indexOf('stun:') === 0) {
          return false;
        }

        const validTurn = url.startsWith('turn') && !url.startsWith('turn:[') && url.includes('transport=udp');

        if (validTurn && !hasTurn) {
          hasTurn = true;
          return true;
        }

        return validTurn && !hasTurn;
      });
      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shimGetDisplayMedia = shimGetDisplayMedia;

function shimGetDisplayMedia(window) {
  if (!('getDisplayMedia' in window.navigator)) {
    return;
  }

  if (!window.navigator.mediaDevices) {
    return;
  }

  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }

  window.navigator.mediaDevices.getDisplayMedia = window.navigator.getDisplayMedia.bind(window.navigator);
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getusermedia.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shimGetUserMedia = shimGetUserMedia;

function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  const shimError_ = function (e) {
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,

      toString() {
        return this.name;
      }

    };
  }; // getUserMedia error shim.


  const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

  navigator.mediaDevices.getUserMedia = function (c) {
    return origGetUserMedia(c).catch(e => Promise.reject(shimError_(e)));
  };
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shimAddTransceiver = shimAddTransceiver;
exports.shimCreateAnswer = shimCreateAnswer;
exports.shimCreateOffer = shimCreateOffer;
Object.defineProperty(exports, "shimGetDisplayMedia", ({
  enumerable: true,
  get: function () {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
}));
exports.shimGetParameters = shimGetParameters;
Object.defineProperty(exports, "shimGetUserMedia", ({
  enumerable: true,
  get: function () {
    return _getusermedia.shimGetUserMedia;
  }
}));
exports.shimOnTrack = shimOnTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.shimRTCDataChannel = shimRTCDataChannel;
exports.shimReceiverGetStats = shimReceiverGetStats;
exports.shimRemoveStream = shimRemoveStream;
exports.shimSenderGetStats = shimSenderGetStats;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js"));

var _getusermedia = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js");

var _getdisplaymedia = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {
          receiver: this.receiver
        };
      }

    });
  }
}

function shimPeerConnection(window, browserDetails) {
  if (typeof window !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }

  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  if (browserDetails.version < 53) {
    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      const nativeMethod = window.RTCPeerConnection.prototype[method];
      const methodObj = {
        [method]() {
          arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
          return nativeMethod.apply(this, arguments);
        }

      };
      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  }

  const modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };
  const nativeGetStats = window.RTCPeerConnection.prototype.getStats;

  window.RTCPeerConnection.prototype.getStats = function getStats() {
    const [selector, onSucc, onErr] = arguments;
    return nativeGetStats.apply(this, [selector || null]).then(stats => {
      if (browserDetails.version < 53 && !onSucc) {
        // Shim only promise getStats with spec-hyphens in type names
        // Leave callback version alone; misc old uses of forEach before Map
        try {
          stats.forEach(stat => {
            stat.type = modernStatsTypes[stat.type] || stat.type;
          });
        } catch (e) {
          if (e.name !== 'TypeError') {
            throw e;
          } // Avoid TypeError: "type" is read-only, in old versions. 34-43ish


          stats.forEach((stat, i) => {
            stats.set(i, Object.assign({}, stat, {
              type: modernStatsTypes[stat.type] || stat.type
            }));
          });
        }
      }

      return stats;
    }).then(onSucc, onErr);
  };
}

function shimSenderGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }

  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }

  const origGetSenders = window.RTCPeerConnection.prototype.getSenders;

  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };
  }

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;

  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
      const sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }

  window.RTCRtpSender.prototype.getStats = function getStats() {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
  };
}

function shimReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }

  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }

  const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;

  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
      const receivers = origGetReceivers.apply(this, []);
      receivers.forEach(receiver => receiver._pc = this);
      return receivers;
    };
  }

  utils.wrapPeerConnectionEvent(window, 'track', e => {
    e.receiver._pc = e.srcElement;
    return e;
  });

  window.RTCRtpReceiver.prototype.getStats = function getStats() {
    return this._pc.getStats(this.track);
  };
}

function shimRemoveStream(window) {
  if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }

  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    utils.deprecated('removeStream', 'removeTrack');
    this.getSenders().forEach(sender => {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        this.removeTrack(sender);
      }
    });
  };
}

function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}

function shimAddTransceiver(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }

  const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;

  if (origAddTransceiver) {
    window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
      this.setParametersPromises = [];
      const initParameters = arguments[1];
      const shouldPerformCheck = initParameters && 'sendEncodings' in initParameters;

      if (shouldPerformCheck) {
        // If sendEncodings params are provided, validate grammar
        initParameters.sendEncodings.forEach(encodingParam => {
          if ('rid' in encodingParam) {
            const ridRegex = /^[a-z0-9]{0,16}$/i;

            if (!ridRegex.test(encodingParam.rid)) {
              throw new TypeError('Invalid RID value provided.');
            }
          }

          if ('scaleResolutionDownBy' in encodingParam) {
            if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
              throw new RangeError('scale_resolution_down_by must be >= 1.0');
            }
          }

          if ('maxFramerate' in encodingParam) {
            if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
              throw new RangeError('max_framerate must be >= 0.0');
            }
          }
        });
      }

      const transceiver = origAddTransceiver.apply(this, arguments);

      if (shouldPerformCheck) {
        // Check if the init options were applied. If not we do this in an
        // asynchronous way and save the promise reference in a global object.
        // This is an ugly hack, but at the same time is way more robust than
        // checking the sender parameters before and after the createOffer
        // Also note that after the createoffer we are not 100% sure that
        // the params were asynchronously applied so we might miss the
        // opportunity to recreate offer.
        const {
          sender
        } = transceiver;
        const params = sender.getParameters();

        if (!('encodings' in params) || // Avoid being fooled by patched getParameters() below.
        params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
          params.encodings = initParameters.sendEncodings;
          sender.sendEncodings = initParameters.sendEncodings;
          this.setParametersPromises.push(sender.setParameters(params).then(() => {
            delete sender.sendEncodings;
          }).catch(() => {
            delete sender.sendEncodings;
          }));
        }
      }

      return transceiver;
    };
  }
}

function shimGetParameters(window) {
  if (!(typeof window === 'object' && window.RTCRtpSender)) {
    return;
  }

  const origGetParameters = window.RTCRtpSender.prototype.getParameters;

  if (origGetParameters) {
    window.RTCRtpSender.prototype.getParameters = function getParameters() {
      const params = origGetParameters.apply(this, arguments);

      if (!('encodings' in params)) {
        params.encodings = [].concat(this.sendEncodings || [{}]);
      }

      return params;
    };
  }
}

function shimCreateOffer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }

  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;

  window.RTCPeerConnection.prototype.createOffer = function createOffer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(() => {
        return origCreateOffer.apply(this, arguments);
      }).finally(() => {
        this.setParametersPromises = [];
      });
    }

    return origCreateOffer.apply(this, arguments);
  };
}

function shimCreateAnswer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }

  const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;

  window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(() => {
        return origCreateAnswer.apply(this, arguments);
      }).finally(() => {
        this.setParametersPromises = [];
      });
    }

    return origCreateAnswer.apply(this, arguments);
  };
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js":
/*!***********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shimGetDisplayMedia = shimGetDisplayMedia;

function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }

  if (!window.navigator.mediaDevices) {
    return;
  }

  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    if (!(constraints && constraints.video)) {
      const err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
      err.name = 'NotFoundError'; // from https://heycam.github.io/webidl/#idl-DOMException-error-names

      err.code = 8;
      return Promise.reject(err);
    }

    if (constraints.video === true) {
      constraints.video = {
        mediaSource: preferredMediaSource
      };
    } else {
      constraints.video.mediaSource = preferredMediaSource;
    }

    return window.navigator.mediaDevices.getUserMedia(constraints);
  };
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shimGetUserMedia = shimGetUserMedia;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function shimGetUserMedia(window, browserDetails) {
  const navigator = window && window.navigator;
  const MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function (constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    const remap = function (obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

    navigator.mediaDevices.getUserMedia = function (c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }

      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      const nativeGetSettings = MediaStreamTrack.prototype.getSettings;

      MediaStreamTrack.prototype.getSettings = function () {
        const obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      const nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;

      MediaStreamTrack.prototype.applyConstraints = function (c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }

        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/safari/safari_shim.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shimAudioContext = shimAudioContext;
exports.shimCallbacksAPI = shimCallbacksAPI;
exports.shimConstraints = shimConstraints;
exports.shimCreateOfferLegacy = shimCreateOfferLegacy;
exports.shimGetUserMedia = shimGetUserMedia;
exports.shimLocalStreamsAPI = shimLocalStreamsAPI;
exports.shimRTCIceServerUrls = shimRTCIceServerUrls;
exports.shimRemoteStreamsAPI = shimRemoteStreamsAPI;
exports.shimTrackEventTransceiver = shimTrackEventTransceiver;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function shimLocalStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }

  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
      if (!this._localStreams) {
        this._localStreams = [];
      }

      return this._localStreams;
    };
  }

  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    const _addTrack = window.RTCPeerConnection.prototype.addTrack;

    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }

      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      } // Try to emulate Chrome's behaviour of adding in audio-video order.
      // Safari orders by track id.


      stream.getAudioTracks().forEach(track => _addTrack.call(this, track, stream));
      stream.getVideoTracks().forEach(track => _addTrack.call(this, track, stream));
    };

    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, ...streams) {
      if (streams) {
        streams.forEach(stream => {
          if (!this._localStreams) {
            this._localStreams = [stream];
          } else if (!this._localStreams.includes(stream)) {
            this._localStreams.push(stream);
          }
        });
      }

      return _addTrack.apply(this, arguments);
    };
  }

  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }

      const index = this._localStreams.indexOf(stream);

      if (index === -1) {
        return;
      }

      this._localStreams.splice(index, 1);

      const tracks = stream.getTracks();
      this.getSenders().forEach(sender => {
        if (tracks.includes(sender.track)) {
          this.removeTrack(sender);
        }
      });
    };
  }
}

function shimRemoteStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }

  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
      return this._remoteStreams ? this._remoteStreams : [];
    };
  }

  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get() {
        return this._onaddstream;
      },

      set(f) {
        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }

        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = e => {
          e.streams.forEach(stream => {
            if (!this._remoteStreams) {
              this._remoteStreams = [];
            }

            if (this._remoteStreams.includes(stream)) {
              return;
            }

            this._remoteStreams.push(stream);

            const event = new Event('addstream');
            event.stream = stream;
            this.dispatchEvent(event);
          });
        });
      }

    });
    const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;

    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      const pc = this;

      if (!this._onaddstreampoly) {
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(stream => {
            if (!pc._remoteStreams) {
              pc._remoteStreams = [];
            }

            if (pc._remoteStreams.indexOf(stream) >= 0) {
              return;
            }

            pc._remoteStreams.push(stream);

            const event = new Event('addstream');
            event.stream = stream;
            pc.dispatchEvent(event);
          });
        });
      }

      return origSetRemoteDescription.apply(pc, arguments);
    };
  }
}

function shimCallbacksAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }

  const prototype = window.RTCPeerConnection.prototype;
  const origCreateOffer = prototype.createOffer;
  const origCreateAnswer = prototype.createAnswer;
  const setLocalDescription = prototype.setLocalDescription;
  const setRemoteDescription = prototype.setRemoteDescription;
  const addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer = function createOffer(successCallback, failureCallback) {
    const options = arguments.length >= 2 ? arguments[2] : arguments[0];
    const promise = origCreateOffer.apply(this, [options]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
    const options = arguments.length >= 2 ? arguments[2] : arguments[0];
    const promise = origCreateAnswer.apply(this, [options]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  let withCallback = function (description, successCallback, failureCallback) {
    const promise = setLocalDescription.apply(this, [description]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.setLocalDescription = withCallback;

  withCallback = function (description, successCallback, failureCallback) {
    const promise = setRemoteDescription.apply(this, [description]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.setRemoteDescription = withCallback;

  withCallback = function (candidate, successCallback, failureCallback) {
    const promise = addIceCandidate.apply(this, [candidate]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.addIceCandidate = withCallback;
}

function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    const mediaDevices = navigator.mediaDevices;

    const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);

    navigator.mediaDevices.getUserMedia = constraints => {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }.bind(navigator);
  }
}

function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({}, constraints, {
      video: utils.compactObject(constraints.video)
    });
  }

  return constraints;
}

function shimRTCIceServerUrls(window) {
  if (!window.RTCPeerConnection) {
    return;
  } // migrate from non-spec RTCIceServer.url to RTCIceServer.urls


  const OrigPeerConnection = window.RTCPeerConnection;

  window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
    if (pcConfig && pcConfig.iceServers) {
      const newIceServers = [];

      for (let i = 0; i < pcConfig.iceServers.length; i++) {
        let server = pcConfig.iceServers[i];

        if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
          utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
          server = JSON.parse(JSON.stringify(server));
          server.urls = server.url;
          delete server.url;
          newIceServers.push(server);
        } else {
          newIceServers.push(pcConfig.iceServers[i]);
        }
      }

      pcConfig.iceServers = newIceServers;
    }

    return new OrigPeerConnection(pcConfig, pcConstraints);
  };

  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype; // wrap static methods. Currently just generateCertificate.

  if ('generateCertificate' in OrigPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get() {
        return OrigPeerConnection.generateCertificate;
      }

    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {
          receiver: this.receiver
        };
      }

    });
  }
}

function shimCreateOfferLegacy(window) {
  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;

  window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
    if (offerOptions) {
      if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
      }

      const audioTransceiver = this.getTransceivers().find(transceiver => transceiver.receiver.track.kind === 'audio');

      if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
        if (audioTransceiver.direction === 'sendrecv') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('sendonly');
          } else {
            audioTransceiver.direction = 'sendonly';
          }
        } else if (audioTransceiver.direction === 'recvonly') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('inactive');
          } else {
            audioTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
        this.addTransceiver('audio');
      }

      if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
      }

      const videoTransceiver = this.getTransceivers().find(transceiver => transceiver.receiver.track.kind === 'video');

      if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
        if (videoTransceiver.direction === 'sendrecv') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('sendonly');
          } else {
            videoTransceiver.direction = 'sendonly';
          }
        } else if (videoTransceiver.direction === 'recvonly') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('inactive');
          } else {
            videoTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
        this.addTransceiver('video');
      }
    }

    return origCreateOffer.apply(this, arguments);
  };
}

function shimAudioContext(window) {
  if (typeof window !== 'object' || window.AudioContext) {
    return;
  }

  window.AudioContext = window.webkitAudioContext;
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.compactObject = compactObject;
exports.deprecated = deprecated;
exports.detectBrowser = detectBrowser;
exports.disableLog = disableLog;
exports.disableWarnings = disableWarnings;
exports.extractVersion = extractVersion;
exports.filterStats = filterStats;
exports.log = log;
exports.walkStats = walkStats;
exports.wrapPeerConnectionEvent = wrapPeerConnectionEvent;
let logDisabled_ = true;
let deprecationWarnings_ = true;
/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */

function extractVersion(uastring, expr, pos) {
  const match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
} // Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).


function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }

  const proto = window.RTCPeerConnection.prototype;
  const nativeAddEventListener = proto.addEventListener;

  proto.addEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }

    const wrappedCallback = e => {
      const modifiedEvent = wrapper(e);

      if (modifiedEvent) {
        if (cb.handleEvent) {
          cb.handleEvent(modifiedEvent);
        } else {
          cb(modifiedEvent);
        }
      }
    };

    this._eventMap = this._eventMap || {};

    if (!this._eventMap[eventNameToWrap]) {
      this._eventMap[eventNameToWrap] = new Map();
    }

    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);

    return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
  };

  const nativeRemoveEventListener = proto.removeEventListener;

  proto.removeEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }

    if (!this._eventMap[eventNameToWrap].has(cb)) {
      return nativeRemoveEventListener.apply(this, arguments);
    }

    const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);

    this._eventMap[eventNameToWrap].delete(cb);

    if (this._eventMap[eventNameToWrap].size === 0) {
      delete this._eventMap[eventNameToWrap];
    }

    if (Object.keys(this._eventMap).length === 0) {
      delete this._eventMap;
    }

    return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get() {
      return this['_on' + eventNameToWrap];
    },

    set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }

      if (cb) {
        this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
      }
    },

    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
  }

  logDisabled_ = bool;
  return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}
/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */


function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
  }

  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if (typeof window === 'object') {
    if (logDisabled_) {
      return;
    }

    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}
/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */


function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }

  console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}
/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */


function detectBrowser(window) {
  // Returned result object.
  const result = {
    browser: null,
    version: null
  }; // Fail early if it's not a browser

  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  const {
    navigator
  } = window;

  if (navigator.mozGetUserMedia) {
    // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia || window.isSecureContext === false && window.webkitRTCPeerConnection && !window.RTCIceGatherer) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    // Chrome 74 removed webkitGetUserMedia on http as well so we need the
    // more complicated fallback to webkitRTCPeerConnection.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
    // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
    // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
    result.supportsUnifiedPlan = window.RTCRtpTransceiver && 'currentDirection' in window.RTCRtpTransceiver.prototype;
  } else {
    // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}
/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */


function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}
/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */


function compactObject(data) {
  if (!isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce(function (accumulator, key) {
    const isObj = isObject(data[key]);
    const value = isObj ? compactObject(data[key]) : data[key];
    const isEmptyObject = isObj && !Object.keys(value).length;

    if (value === undefined || isEmptyObject) {
      return accumulator;
    }

    return Object.assign(accumulator, {
      [key]: value
    });
  }, {});
}
/* iterates the stats graph recursively. */


function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }

  resultSet.set(base.id, base);
  Object.keys(base).forEach(name => {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(id => {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}
/* filter getStats for a sender/receiver track. */


function filterStats(result, track, outbound) {
  const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  const filteredResult = new Map();

  if (track === null) {
    return filteredResult;
  }

  const trackStats = [];
  result.forEach(value => {
    if (value.type === 'track' && value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(trackStat => {
    result.forEach(stats => {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}

/***/ }),

/***/ "./node_modules/wildemitter/wildemitter.js":
/*!*************************************************!*\
  !*** ./node_modules/wildemitter/wildemitter.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/*
WildEmitter.js is a slim little event emitter by @henrikjoreteg largely based
on @visionmedia's Emitter from UI Kit.

Why? I wanted it standalone.

I also wanted support for wildcard emitters like this:

emitter.on('*', function (eventName, other, event, payloads) {

});

emitter.on('somenamespace*', function (eventName, payloads) {

});

Please note that callbacks triggered by wildcard registered events also get
the event name as the first argument.
*/
module.exports = WildEmitter;

function WildEmitter() {}

WildEmitter.mixin = function (constructor) {
  var prototype = constructor.prototype || constructor;
  prototype.isWildEmitter = true; // Listen on the given `event` with `fn`. Store a group name if present.

  prototype.on = function (event, groupName, fn) {
    this.callbacks = this.callbacks || {};
    var hasGroup = arguments.length === 3,
        group = hasGroup ? arguments[1] : undefined,
        func = hasGroup ? arguments[2] : arguments[1];
    func._groupName = group;
    (this.callbacks[event] = this.callbacks[event] || []).push(func);
    return this;
  }; // Adds an `event` listener that will be invoked a single
  // time then automatically removed.


  prototype.once = function (event, groupName, fn) {
    var self = this,
        hasGroup = arguments.length === 3,
        group = hasGroup ? arguments[1] : undefined,
        func = hasGroup ? arguments[2] : arguments[1];

    function on() {
      self.off(event, on);
      func.apply(this, arguments);
    }

    this.on(event, group, on);
    return this;
  }; // Unbinds an entire group


  prototype.releaseGroup = function (groupName) {
    this.callbacks = this.callbacks || {};
    var item, i, len, handlers;

    for (item in this.callbacks) {
      handlers = this.callbacks[item];

      for (i = 0, len = handlers.length; i < len; i++) {
        if (handlers[i]._groupName === groupName) {
          //console.log('removing');
          // remove it and shorten the array we're looping through
          handlers.splice(i, 1);
          i--;
          len--;
        }
      }
    }

    return this;
  }; // Remove the given callback for `event` or all
  // registered callbacks.


  prototype.off = function (event, fn) {
    this.callbacks = this.callbacks || {};
    var callbacks = this.callbacks[event],
        i;
    if (!callbacks) return this; // remove all handlers

    if (arguments.length === 1) {
      delete this.callbacks[event];
      return this;
    } // remove specific handler


    i = callbacks.indexOf(fn);

    if (i !== -1) {
      callbacks.splice(i, 1);

      if (callbacks.length === 0) {
        delete this.callbacks[event];
      }
    }

    return this;
  }; /// Emit `event` with the given args.
  // also calls any `*` handlers


  prototype.emit = function (event) {
    this.callbacks = this.callbacks || {};
    var args = [].slice.call(arguments, 1),
        callbacks = this.callbacks[event],
        specialCallbacks = this.getWildcardCallbacks(event),
        i,
        len,
        item,
        listeners;

    if (callbacks) {
      listeners = callbacks.slice();

      for (i = 0, len = listeners.length; i < len; ++i) {
        if (!listeners[i]) {
          break;
        }

        listeners[i].apply(this, args);
      }
    }

    if (specialCallbacks) {
      len = specialCallbacks.length;
      listeners = specialCallbacks.slice();

      for (i = 0, len = listeners.length; i < len; ++i) {
        if (!listeners[i]) {
          break;
        }

        listeners[i].apply(this, [event].concat(args));
      }
    }

    return this;
  }; // Helper for for finding special wildcard event handlers that match the event


  prototype.getWildcardCallbacks = function (eventName) {
    this.callbacks = this.callbacks || {};
    var item,
        split,
        result = [];

    for (item in this.callbacks) {
      split = item.split('*');

      if (item === '*' || split.length === 2 && eventName.slice(0, split[0].length) === split[0]) {
        result = result.concat(this.callbacks[item]);
      }
    }

    return result;
  };
};

WildEmitter.mixin(WildEmitter);

/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/***/ ((module) => {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {},
    seed = 0,
    i = 0,
    prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */


function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */


function yeast() {
  var now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
} //
// Map each character to its index.
//


for (; i < length; i++) map[alphabet[i]] = i; //
// Expose the `yeast`, `encode` and `decode` functions.
//


yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

/***/ }),

/***/ "?1bcf":
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./src/Hello/hello.ux?uxType=page ***!
  \****************************************/

var $app_style$ = __webpack_require__(/*! !../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./hello.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/Hello/hello.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../node_modules/babel-loader/lib/index.js?cwd=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld&cacheDirectory&plugins[]=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld/babel.config.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./hello.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld&cacheDirectory&plugins[]=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Users/zacharypowell/Documents/Code/sample/quickapp-helloworld/babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/Hello/hello.ux?uxType=page")

$app_define$('@app-component/hello', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./hello.ux?uxType=page& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/Hello/hello.ux?uxType=page&")

     $app_module$.exports.style = $app_style$
})
$app_bootstrap$('@app-component/hello',{ packagerVersion: "1.9.10" })
})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();