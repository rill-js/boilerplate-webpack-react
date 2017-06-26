require("source-map-support").install({ hookRequire: true })
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("rill");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@rill/react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(22);
// Entry to server only api.



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()().use(__WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* default */]));

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()());

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__other__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__404__ = __webpack_require__(26);





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()().get('/', __WEBPACK_IMPORTED_MODULE_1__home__["a" /* default */]).get('/other', __WEBPACK_IMPORTED_MODULE_2__other__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_3__404__["a" /* default */]));

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rill_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rill_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__rill_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__(29);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()().get('/*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__rill_react__["wrap"])(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* default */], function (_ref) {
  var res = _ref.res;

  // Preload required files.
  res.append('Link', '</polyfill.js>; rel=preload; as=script;');
  res.append('Link', '</index.js>; rel=preload; as=script;');
  res.append('Link', '</index.css>; rel=preload; as=style;');
})));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@rill/compress");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@rill/etag");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@rill/expose");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@rill/fresh");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@rill/helmet");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@rill/logger");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@rill/polyfill");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@rill/progress");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@rill/static");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("ms");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile__ = __webpack_require__(23);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()().get('/profile/view', __WEBPACK_IMPORTED_MODULE_1__profile__["a" /* view */]));

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = view;
function view(_ref) {
  var res = _ref.res;

  res.body = {
    name: 'Dylan Piercey'
  };
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rill_fresh__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rill_etag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__rill_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__rill_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__rill_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__rill_progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__rill_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__rill_expose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__rill_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__controllers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wrappers__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views__ = __webpack_require__(10);

















/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_rill___default()().use(__WEBPACK_IMPORTED_MODULE_2__rill_helmet___default()(global.SECURITY)).use(__WEBPACK_IMPORTED_MODULE_3__rill_fresh___default()()).use(__WEBPACK_IMPORTED_MODULE_4__rill_etag___default()()).use(__WEBPACK_IMPORTED_MODULE_5__rill_compress___default()()).get('/polyfill.js', __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default()()).get(__WEBPACK_IMPORTED_MODULE_7__rill_static___default()('build/public', { gzip: true, cache: __WEBPACK_IMPORTED_MODULE_0_ms___default()('30 days') + '; immutable' })).use(__WEBPACK_IMPORTED_MODULE_8__rill_progress___default()({ spinner: false, color: '#009fe2' })).use(__WEBPACK_IMPORTED_MODULE_9__rill_logger___default()()).use(__WEBPACK_IMPORTED_MODULE_10__rill_expose___default()()).use(__WEBPACK_IMPORTED_MODULE_11__rill_react___default()()).at('/api/*', !undefined && __WEBPACK_IMPORTED_MODULE_12__api__["a" /* default */]).at('/app/*', __WEBPACK_IMPORTED_MODULE_13__controllers__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_14__wrappers__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_15__views__["a" /* default */]).listen({ port: 8081 }));

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);






var Ticker = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Ticker, _Component);

  function Ticker() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Ticker);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  Ticker.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._interval = setInterval(function () {
      _this2.setState({ time: new Date() });
    }, 1000);
  };

  Ticker.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this._interval);
  };

  Ticker.prototype.render = function render() {
    var state = this.state;

    if (!state) return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      null,
      'Loading...'
    );
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      null,
      this.state.time.toLocaleString()
    );
  };

  return Ticker;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Ticker);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);



var _this = this;


/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var req = _ref.req,
        res = _ref.res,
        locals = _ref.locals;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            locals.title = '404 Page';
            res.body = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              null,
              'Page not found at ',
              req.pathname,
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                { href: '/' },
                'Go home'
              )
            );

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_logo_jpg__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_logo_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_logo_jpg__);



var _this = this;



/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var res = _ref.res,
        locals = _ref.locals;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            locals.title = 'Home Page';
            res.body = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_3__assets_logo_jpg___default.a }),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                { href: '/other' },
                'Go to the other page'
              )
            );

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_ticker__ = __webpack_require__(25);



var _this = this;




/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var res = _ref.res,
        locals = _ref.locals;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            locals.title = 'Other Page';
            res.body = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              null,
              'It is currently ',
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__partials_ticker__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                { href: '/' },
                'Go back'
              )
            );

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_page_css__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_css_page_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_css_page_css__);







var Page = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Page, _Component);

  function Page() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Page);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  Page.prototype.render = function render() {
    var context = this.context,
        props = this.props;
    var locals = context.locals;


    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'html',
      { lang: 'en' },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'head',
        null,
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('meta', { charSet: 'utf-8' }),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'title',
          null,
          locals.title
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('meta', { name: 'description', content: locals.description }),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('link', { rel: 'stylesheet', href: '/index.css' })
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'body',
        null,
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'div',
          { id: 'root' },
          props.children
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('script', { src: '/polyfill.js' }),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('script', { src: '/index.js' })
      )
    );
  };

  return Page;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(true);
// imports


// module
exports.push([module.i, "body{background:#eee}", "", {"version":3,"sources":["/Users/dylanpiercey/Development/github/boilerplate-webpack-react/page.css"],"names":[],"mappings":"AACA,KACE,eAAiB,CAClB","file":"page.css","sourcesContent":["/* Global page styles */\nbody {\n  background: #EEE;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "/3NpIv72ycp.jpg";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDUxNWM3MjMyZTQ3MTg0Njk3NGEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb250cm9sbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL3ZpZXdzL2luZGV4LmpzIiwid2VicGFjazovLy9hcHAvd3JhcHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvY29tcHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9ldGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZnJlc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvc3RhdGljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXNcIiIsIndlYnBhY2s6Ly8vYXBpL2NvbnRyb2xsZXJzL2luZGV4LmpzIiwid2VicGFjazovLy9hcGkvY29udHJvbGxlcnMvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9hcHAvcGFydGlhbHMvdGlja2VyLmpzIiwid2VicGFjazovLy9hcHAvdmlld3MvNDA0LmpzIiwid2VicGFjazovLy9hcHAvdmlld3MvaG9tZS5qcyIsIndlYnBhY2s6Ly8vYXBwL3ZpZXdzL290aGVyLmpzIiwid2VicGFjazovLy9hcHAvd3JhcHBlcnMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvY3NzL3BhZ2UuY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvbG9nby5qcGciXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDUxNWM3MjMyZTQ3MTg0Njk3NGEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJpbGxcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9yZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3JlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEVudHJ5IHRvIHNlcnZlciBvbmx5IGFwaS5cbmltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBjb250cm9sbGVycyBmcm9tICcuL2NvbnRyb2xsZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIoKVxuICAudXNlKGNvbnRyb2xsZXJzKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwaS9pbmRleC5qcyIsImltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29udHJvbGxlcnMvaW5kZXguanMiLCJpbXBvcnQgcm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lJ1xuaW1wb3J0IG90aGVyUGFnZSBmcm9tICcuL290aGVyJ1xuaW1wb3J0IG5vdEZvdW5kIGZyb20gJy4vNDA0J1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIoKVxuICAuZ2V0KCcvJywgaG9tZVBhZ2UpXG4gIC5nZXQoJy9vdGhlcicsIG90aGVyUGFnZSlcbiAgLmdldChub3RGb3VuZClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvdmlld3MvaW5kZXguanMiLCJpbXBvcnQgcm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAnQHJpbGwvcmVhY3QnXG5pbXBvcnQgcGFnZVdyYXBwZXIgZnJvbSAnLi9wYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIoKVxuICAuZ2V0KCcvKicsIHdyYXAocGFnZVdyYXBwZXIsICh7IHJlcyB9KSA9PiB7XG4gICAgLy8gUHJlbG9hZCByZXF1aXJlZCBmaWxlcy5cbiAgICByZXMuYXBwZW5kKCdMaW5rJywgJzwvcG9seWZpbGwuanM+OyByZWw9cHJlbG9hZDsgYXM9c2NyaXB0OycpXG4gICAgcmVzLmFwcGVuZCgnTGluaycsICc8L2luZGV4LmpzPjsgcmVsPXByZWxvYWQ7IGFzPXNjcmlwdDsnKVxuICAgIHJlcy5hcHBlbmQoJ0xpbmsnLCAnPC9pbmRleC5jc3M+OyByZWw9cHJlbG9hZDsgYXM9c3R5bGU7JylcbiAgfSkpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3dyYXBwZXJzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvY29tcHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9jb21wcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9ldGFnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZXRhZ1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9leHBvc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9leHBvc2VcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZnJlc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9mcmVzaFwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9oZWxtZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9oZWxtZXRcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3BvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcHJvZ3Jlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9wcm9ncmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9zdGF0aWNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9zdGF0aWNcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtc1wiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgKiBhcyBwcm9maWxlQ3RybCBmcm9tICcuL3Byb2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcigpXG4gIC5nZXQoJy9wcm9maWxlL3ZpZXcnLCBwcm9maWxlQ3RybC52aWV3KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwaS9jb250cm9sbGVycy9pbmRleC5qcyIsImV4cG9ydCBmdW5jdGlvbiB2aWV3ICh7IHJlcyB9KSB7XG4gIHJlcy5ib2R5ID0ge1xuICAgIG5hbWU6ICdEeWxhbiBQaWVyY2V5J1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBpL2NvbnRyb2xsZXJzL3Byb2ZpbGUuanMiLCJpbXBvcnQgbXMgZnJvbSAnbXMnXG5pbXBvcnQgcm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgaGVsbWV0IGZyb20gJ0ByaWxsL2hlbG1ldCdcbmltcG9ydCBmcmVzaCBmcm9tICdAcmlsbC9mcmVzaCdcbmltcG9ydCBldGFnIGZyb20gJ0ByaWxsL2V0YWcnXG5pbXBvcnQgY29tcHJlc3MgZnJvbSAnQHJpbGwvY29tcHJlc3MnXG5pbXBvcnQgcG9seWZpbGwgZnJvbSAnQHJpbGwvcG9seWZpbGwnXG5pbXBvcnQgc2VydmUgZnJvbSAnQHJpbGwvc3RhdGljJ1xuaW1wb3J0IHByb2dyZXNzIGZyb20gJ0ByaWxsL3Byb2dyZXNzJ1xuaW1wb3J0IGxvZ2dlciBmcm9tICdAcmlsbC9sb2dnZXInXG5pbXBvcnQgZXhwb3NlIGZyb20gJ0ByaWxsL2V4cG9zZSdcbmltcG9ydCByZWFjdCBmcm9tICdAcmlsbC9yZWFjdCdcbmltcG9ydCBhcGlDdHJscyBmcm9tICcuLi9hcGknXG5pbXBvcnQgYXBwQ3RybHMgZnJvbSAnLi9jb250cm9sbGVycydcbmltcG9ydCB3cmFwcGVycyBmcm9tICcuL3dyYXBwZXJzJ1xuaW1wb3J0IHZpZXdzIGZyb20gJy4vdmlld3MnXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcigpXG4gIC51c2UoaGVsbWV0KGdsb2JhbC5TRUNVUklUWSkpXG4gIC51c2UoZnJlc2goKSlcbiAgLnVzZShldGFnKCkpXG4gIC51c2UoY29tcHJlc3MoKSlcbiAgLmdldCgnL3BvbHlmaWxsLmpzJywgcG9seWZpbGwoKSlcbiAgLmdldChzZXJ2ZSgnYnVpbGQvcHVibGljJywgeyBnemlwOiB0cnVlLCBjYWNoZTogYCR7bXMoJzMwIGRheXMnKX07IGltbXV0YWJsZWAgfSkpXG4gIC51c2UocHJvZ3Jlc3MoeyBzcGlubmVyOiBmYWxzZSwgY29sb3I6ICcjMDA5ZmUyJyB9KSlcbiAgLnVzZShsb2dnZXIoKSlcbiAgLnVzZShleHBvc2UoKSlcbiAgLnVzZShyZWFjdCgpKVxuICAuYXQoJy9hcGkvKicsICFwcm9jZXNzLmJyb3dzZXIgJiYgYXBpQ3RybHMpXG4gIC5hdCgnL2FwcC8qJywgYXBwQ3RybHMpXG4gIC5nZXQod3JhcHBlcnMpXG4gIC5nZXQodmlld3MpXG4gIC5saXN0ZW4oeyBwb3J0OiA4MDgxIH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2luZGV4LmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lOiBuZXcgRGF0ZSgpIH0pXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzXG4gICAgaWYgKCFzdGF0ZSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgIHJldHVybiA8ZGl2Pnt0aGlzLnN0YXRlLnRpbWUudG9Mb2NhbGVTdHJpbmcoKX08L2Rpdj5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9wYXJ0aWFscy90aWNrZXIuanMiLCJleHBvcnQgZGVmYXVsdCBhc3luYyAoeyByZXEsIHJlcywgbG9jYWxzIH0pID0+IHtcbiAgbG9jYWxzLnRpdGxlID0gJzQwNCBQYWdlJ1xuICByZXMuYm9keSA9IChcbiAgICA8ZGl2PlxuICAgICAgUGFnZSBub3QgZm91bmQgYXQge3JlcS5wYXRobmFtZX1cbiAgICAgIDxiciAvPlxuICAgICAgPGEgaHJlZj0nLyc+R28gaG9tZTwvYT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC92aWV3cy80MDQuanMiLCJpbXBvcnQgbG9nb0ltZyBmcm9tICcuLi9hc3NldHMvbG9nby5qcGcnXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyByZXMsIGxvY2FscyB9KSA9PiB7XG4gIGxvY2Fscy50aXRsZSA9ICdIb21lIFBhZ2UnXG4gIHJlcy5ib2R5ID0gKFxuICAgIDxkaXY+XG4gICAgICA8aW1nIHNyYz17bG9nb0ltZ30gLz5cbiAgICAgIDxhIGhyZWY9Jy9vdGhlcic+R28gdG8gdGhlIG90aGVyIHBhZ2U8L2E+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvdmlld3MvaG9tZS5qcyIsImltcG9ydCBUaWNrZXIgZnJvbSAnLi4vcGFydGlhbHMvdGlja2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyByZXMsIGxvY2FscyB9KSA9PiB7XG4gIGxvY2Fscy50aXRsZSA9ICdPdGhlciBQYWdlJ1xuICByZXMuYm9keSA9IChcbiAgICA8ZGl2PlxuICAgICAgSXQgaXMgY3VycmVudGx5IDxUaWNrZXIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGEgaHJlZj0nLyc+R28gYmFjazwvYT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC92aWV3cy9vdGhlci5qcyIsImltcG9ydCAnLi4vYXNzZXRzL2Nzcy9wYWdlLmNzcydcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjb250ZXh0LCBwcm9wcyB9ID0gdGhpc1xuICAgIGNvbnN0IHsgbG9jYWxzIH0gPSBjb250ZXh0XG5cbiAgICByZXR1cm4gPGh0bWwgbGFuZz0nZW4nPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcgLz5cbiAgICAgICAgPHRpdGxlPntsb2NhbHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2xvY2Fscy5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvaW5kZXguY3NzJyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgaWQ9J3Jvb3QnPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPHNjcmlwdCBzcmM9Jy9wb2x5ZmlsbC5qcycgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9Jy9pbmRleC5qcycgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvd3JhcHBlcnMvcGFnZS5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7YmFja2dyb3VuZDojZWVlfVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHlsYW5waWVyY2V5L0RldmVsb3BtZW50L2dpdGh1Yi9ib2lsZXJwbGF0ZS13ZWJwYWNrLXJlYWN0L3BhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLEtBQ0UsZUFBaUIsQ0FDbEJcIixcImZpbGVcIjpcInBhZ2UuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBwYWdlIHN0eWxlcyAqL1xcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI0VFRTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2Fzc2V0cy9jc3MvcGFnZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIvM05wSXY3MnljcC5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9hc3NldHMvbG9nby5qcGdcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7QUNoRUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVkE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQWhCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFjQTtBQUNBOztBQXBCQTtBQUNBO0FBREE7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=