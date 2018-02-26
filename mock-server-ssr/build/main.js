require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    // script: [
    //   { src: 'jquery/dist/jquery.min.js' }
    // ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** plugins
  */
  plugins: ['~plugins/index'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** router middleware
  */
  router: {
    middleware: 'currentRoute'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa2_connect__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa2_connect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa2_connect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_proxy_middleware__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_proxy_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_http_proxy_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_mock__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_config__ = __webpack_require__(34);






var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();
router.use('/mock', __WEBPACK_IMPORTED_MODULE_3__controllers_mock__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_3__controllers_mock__["a" /* default */].allowedMethods());

// 代理proxy 转发所有本地的 /api 请求
router.get(/^\/api(\/|\/\w+)?$/, __WEBPACK_IMPORTED_MODULE_1_koa2_connect___default()(__WEBPACK_IMPORTED_MODULE_2_http_proxy_middleware___default()(__WEBPACK_IMPORTED_MODULE_4__utils_config__["a" /* default */].proxy)));

/* harmony default export */ exports["a"] = router;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var mock = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();

mock.get('/one', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var html;
    return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            html = '\n    <ul>\n      <li><a href="/page/helloworld">/page/helloworld</a></li>\n      <li><a href="/page/404">/page/404</a></li>\n    </ul>\n  ';

            ctx.body = html;

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ exports["a"] = mock;

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routers__ = __webpack_require__(3);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(2);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context2.next = 10;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 10;
            return builder.build();

          case 10:

            // 加载路由中间件
            app.use(__WEBPACK_IMPORTED_MODULE_3__routers__["a" /* default */].routes()).use(__WEBPACK_IMPORTED_MODULE_3__routers__["a" /* default */].allowedMethods());

            // http status 404 改 200
            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_itcast_project_mock_server_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





start();

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var _ = __webpack_require__(9);

var loggerInstance;

var defaultProvider = {
    log: console.log,
    debug: console.log,    // use .log(); since console does not have .debug()
    info: console.info,
    warn: console.warn,
    error: console.error
};

// log level 'weight'
var LEVELS = {
    debug: 10,
    info: 20,
    warn: 30,
    error: 50,
    silent: 80
};

module.exports = {
    // singleton
    getInstance: function() {
        if (!loggerInstance) {
            loggerInstance = new Logger();
        }

        return loggerInstance;
    },
    getArrow: getArrow
};

function Logger() {
    var logLevel;
    var provider;

    var api = {
        log: log,
        debug: debug,
        info: info,
        warn: warn,
        error: error,
        setLevel: function(v) {
            if (isValidLevel(v)) {
                logLevel = v;
            }
        },
        setProvider: function(fn) {
            if (fn && isValidProvider(fn)) {
                provider = fn(defaultProvider);
            }
        }
    };

    init();

    return api;

    function init() {
        api.setLevel('info');
        api.setProvider(function() {
            return defaultProvider;
        });
    }

    // log will log messages, regardless of logLevels
    function log() {
        provider.log(_interpolate.apply(null, arguments));
    }

    function debug() {
        if (_showLevel('debug')) {
            provider.debug(_interpolate.apply(null, arguments));
        }
    }

    function info() {
        if (_showLevel('info')) {
            provider.info(_interpolate.apply(null, arguments));
        }
    }

    function warn() {
        if (_showLevel('warn')) {
            provider.warn(_interpolate.apply(null, arguments));
        }
    }

    function error() {
        if (_showLevel('error')) {
            provider.error(_interpolate.apply(null, arguments));
        }
    }

    /**
     * Decide to log or not to log, based on the log levels 'weight'
     * @param  {String}  showLevel [debug, info, warn, error, silent]
     * @return {Boolean}
     */
    function _showLevel(showLevel) {
        var result = false;
        var currentLogLevel = LEVELS[logLevel];

        if (currentLogLevel && (currentLogLevel <= LEVELS[showLevel])) {
            result = true;
        }

        return result;
    }

    // make sure logged messages and its data are return interpolated
    // make it possible for additional log data, such date/time or custom prefix.
    function _interpolate() {
        var fn = _.spread(util.format);
        var result = fn(_.slice(arguments));

        return result;
    }

    function isValidProvider(fnProvider) {
        var result = true;

        if (fnProvider && !_.isFunction(fnProvider)) {
            throw new Error('[HPM] Log provider config error. Expecting a function.');
        }

        return result;
    }

    function isValidLevel(levelName) {
        var validLevels = _.keys(LEVELS);
        var isValid = _.includes(validLevels, levelName);

        if (!isValid) {
            throw new Error('[HPM] Log level error. Invalid logLevel.');
        }

        return isValid;
    }
}

/**
 * -> normal proxy
 * => router
 * ~> pathRewrite
 * ≈> router + pathRewrite
 */
function getArrow(originalPath, newPath, originalTarget, newTarget) {
    var arrow = ['>'];
    var isNewTarget = (originalTarget !== newTarget); // router
    var isNewPath = (originalPath !== newPath); // pathRewrite

    if (isNewPath && !isNewTarget) {arrow.unshift('~');} else if (!isNewPath && isNewTarget) {arrow.unshift('=');} else if (isNewPath && isNewTarget) {arrow.unshift('≈');} else {arrow.unshift('-');}

    return arrow.join('');
}


/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("url");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("util");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var common   = exports,
    url      = __webpack_require__(11),
    extend   = __webpack_require__(12)._extend,
    required = __webpack_require__(31);

var upgradeHeader = /(^|,)\s*upgrade\s*($|,)/i,
    isSSL = /^https|wss/,
    cookieDomainRegex = /(;\s*domain=)([^;]+)/i;

/**
 * Simple Regex for testing if protocol is https
 */
common.isSSL = isSSL;
/**
 * Copies the right headers from `options` and `req` to
 * `outgoing` which is then used to fire the proxied
 * request.
 *
 * Examples:
 *
 *    common.setupOutgoing(outgoing, options, req)
 *    // => { host: ..., hostname: ...}
 *
 * @param {Object} Outgoing Base object to be filled with required properties
 * @param {Object} Options Config object passed to the proxy
 * @param {ClientRequest} Req Request Object
 * @param {String} Forward String to select forward or target
 * 
 * @return {Object} Outgoing Object with all required properties set
 *
 * @api private
 */

common.setupOutgoing = function(outgoing, options, req, forward) {
  outgoing.port = options[forward || 'target'].port ||
                  (isSSL.test(options[forward || 'target'].protocol) ? 443 : 80);

  ['host', 'hostname', 'socketPath', 'pfx', 'key',
    'passphrase', 'cert', 'ca', 'ciphers', 'secureProtocol'].forEach(
    function(e) { outgoing[e] = options[forward || 'target'][e]; }
  );

  outgoing.method = req.method;
  outgoing.headers = extend({}, req.headers);

  if (options.headers){
    extend(outgoing.headers, options.headers);
  }

  if (options.auth) {
    outgoing.auth = options.auth;
  }
  
  if (options.ca) {
      outgoing.ca = options.ca;
  }

  if (isSSL.test(options[forward || 'target'].protocol)) {
    outgoing.rejectUnauthorized = (typeof options.secure === "undefined") ? true : options.secure;
  }


  outgoing.agent = options.agent || false;
  outgoing.localAddress = options.localAddress;

  //
  // Remark: If we are false and not upgrading, set the connection: close. This is the right thing to do
  // as node core doesn't handle this COMPLETELY properly yet.
  //
  if (!outgoing.agent) {
    outgoing.headers = outgoing.headers || {};
    if (typeof outgoing.headers.connection !== 'string'
        || !upgradeHeader.test(outgoing.headers.connection)
       ) { outgoing.headers.connection = 'close'; }
  }


  // the final path is target path + relative path requested by user:
  var target = options[forward || 'target'];
  var targetPath = target && options.prependPath !== false
    ? (target.path || '')
    : '';

  //
  // Remark: Can we somehow not use url.parse as a perf optimization?
  //
  var outgoingPath = !options.toProxy
    ? (url.parse(req.url).path || '')
    : req.url;

  //
  // Remark: ignorePath will just straight up ignore whatever the request's
  // path is. This can be labeled as FOOT-GUN material if you do not know what
  // you are doing and are using conflicting options.
  //
  outgoingPath = !options.ignorePath ? outgoingPath : '';

  outgoing.path = common.urlJoin(targetPath, outgoingPath);

  if (options.changeOrigin) {
    outgoing.headers.host =
      required(outgoing.port, options[forward || 'target'].protocol) && !hasPort(outgoing.host)
        ? outgoing.host + ':' + outgoing.port
        : outgoing.host;
  }
  return outgoing;
};

/**
 * Set the proper configuration for sockets,
 * set no delay and set keep alive, also set
 * the timeout to 0.
 *
 * Examples:
 *
 *    common.setupSocket(socket)
 *    // => Socket
 *
 * @param {Socket} Socket instance to setup
 * 
 * @return {Socket} Return the configured socket.
 *
 * @api private
 */

common.setupSocket = function(socket) {
  socket.setTimeout(0);
  socket.setNoDelay(true);

  socket.setKeepAlive(true, 0);

  return socket;
};

/**
 * Get the port number from the host. Or guess it based on the connection type.
 *
 * @param {Request} req Incoming HTTP request.
 *
 * @return {String} The port number.
 *
 * @api private
 */
common.getPort = function(req) {
  var res = req.headers.host ? req.headers.host.match(/:(\d+)/) : '';

  return res ?
    res[1] :
    common.hasEncryptedConnection(req) ? '443' : '80';
};

/**
 * Check if the request has an encrypted connection.
 *
 * @param {Request} req Incoming HTTP request.
 *
 * @return {Boolean} Whether the connection is encrypted or not.
 *
 * @api private
 */
common.hasEncryptedConnection = function(req) {
  return Boolean(req.connection.encrypted || req.connection.pair);
};

/**
 * OS-agnostic join (doesn't break on URLs like path.join does on Windows)>
 *
 * @return {String} The generated path.
 *
 * @api private
 */

common.urlJoin = function() {
    //
    // We do not want to mess with the query string. All we want to touch is the path.
    //
  var args = Array.prototype.slice.call(arguments),
      lastIndex = args.length - 1,
      last = args[lastIndex],
      lastSegs = last.split('?'),
      retSegs;

  args[lastIndex] = lastSegs.shift();

  //
  // Join all strings, but remove empty strings so we don't get extra slashes from
  // joining e.g. ['', 'am']
  //
  retSegs = [
    args.filter(Boolean).join('/')
        .replace(/\/+/g, '/')
        .replace('http:/', 'http://')
        .replace('https:/', 'https://')
  ];

  // Only join the query string if it exists so we don't have trailing a '?'
  // on every request

  // Handle case where there could be multiple ? in the URL.
  retSegs.push.apply(retSegs, lastSegs);

  return retSegs.join('?')
};

/**
 * Rewrites or removes the domain of a cookie header
 *
 * @param {String|Array} Header
 * @param {Object} Config, mapping of domain to rewritten domain.
 *                 '*' key to match any domain, null value to remove the domain.
 *
 * @api private
 */
common.rewriteCookieDomain = function rewriteCookieDomain(header, config) {
  if (Array.isArray(header)) {
    return header.map(function (headerElement) {
      return rewriteCookieDomain(headerElement, config);
    });
  }
  return header.replace(cookieDomainRegex, function(match, prefix, previousDomain) {
    var newDomain;
    if (previousDomain in config) {
      newDomain = config[previousDomain];
    } else if ('*' in config) {
      newDomain = config['*'];
    } else {
      //no match, return previous domain
      return match;
    }
    if (newDomain) {
      //replace domain
      return prefix + newDomain;
    } else {
      //remove domain
      return '';
    }
  });
};

/**
 * Check the host and see if it potentially has a port in it (keep it simple)
 *
 * @returns {Boolean} Whether we have one or not
 *
 * @api private
 */
function hasPort(host) {
  return !!~host.indexOf(':');
};


/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("https");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

//
// We store our EE objects in a plain object whose properties are event names.
// If `Object.create(null)` is not supported we prefix the event names with a
// `~` to make sure that the built-in object properties are not overridden or
// used as an attack vector.
// We also assume that `Object.create(null)` is available when the event name
// is an ES6 Symbol.
//
var prefix = typeof Object.create !== 'function' ? '~' : false;

/**
 * Representation of a single EventEmitter function.
 *
 * @param {Function} fn Event handler to be called.
 * @param {Mixed} context Context for function execution.
 * @param {Boolean} [once=false] Only emit once
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() { /* Nothing to set */ }

/**
 * Hold the assigned EventEmitters by name.
 *
 * @type {Object}
 * @private
 */
EventEmitter.prototype._events = undefined;

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var events = this._events
    , names = []
    , name;

  if (!events) return names;

  for (name in events) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return a list of assigned event listeners.
 *
 * @param {String} event The events that should be listed.
 * @param {Boolean} exists We only need to know if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events && this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Emit an event to all registered event listeners.
 *
 * @param {String} event The name of the event.
 * @returns {Boolean} Indication if we've emitted an event.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events || !this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if ('function' === typeof listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} [context=this] The context of the function.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events) this._events = prefix ? {} : Object.create(null);
  if (!this._events[evt]) this._events[evt] = listener;
  else {
    if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [
      this._events[evt], listener
    ];
  }

  return this;
};

/**
 * Add an EventListener that's only called once.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} [context=this] The context of the function.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events) this._events = prefix ? {} : Object.create(null);
  if (!this._events[evt]) this._events[evt] = listener;
  else {
    if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [
      this._events[evt], listener
    ];
  }

  return this;
};

/**
 * Remove event listeners.
 *
 * @param {String} event The event we want to remove.
 * @param {Function} fn The listener that we need to find.
 * @param {Mixed} context Only remove listeners matching this context.
 * @param {Boolean} once Only remove once listeners.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events || !this._events[evt]) return this;

  var listeners = this._events[evt]
    , events = [];

  if (fn) {
    if (listeners.fn) {
      if (
           listeners.fn !== fn
        || (once && !listeners.once)
        || (context && listeners.context !== context)
      ) {
        events.push(listeners);
      }
    } else {
      for (var i = 0, length = listeners.length; i < length; i++) {
        if (
             listeners[i].fn !== fn
          || (once && !listeners[i].once)
          || (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }
    }
  }

  //
  // Reset the array, or remove it completely if we have no more listeners.
  //
  if (events.length) {
    this._events[evt] = events.length === 1 ? events[0] : events;
  } else {
    delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners or only the listeners for the specified event.
 *
 * @param {String} event The event want to remove all listeners for.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  if (!this._events) return this;

  if (event) delete this._events[prefix ? prefix + event : event];
  else this._events = prefix ? {} : Object.create(null);

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var HPM  = __webpack_require__(21);

module.exports = function(context, opts) {
    return new HPM(context, opts);
};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var _      = __webpack_require__(9);
var url    = __webpack_require__(11);
var logger = __webpack_require__(10).getInstance();

module.exports = {
    createConfig: createConfig
};

function createConfig(context, opts) {
    // structure of config object to be returned
    var config = {
        context: undefined,
        options: {}
    };

    // app.use('/api', proxy({target:'http://localhost:9000'}));
    if (isContextless(context, opts)) {
        config.context = '/';
        config.options = _.assign(config.options, context);
    }
    // app.use('/api', proxy('http://localhost:9000'));
    // app.use(proxy('http://localhost:9000/api'));
    else if (isStringShortHand(context)) {
        var oUrl   = url.parse(context);
        var target = [oUrl.protocol, '//', oUrl.host].join('');

        config.context = oUrl.pathname || '/';
        config.options = _.assign(config.options, {target: target}, opts);

        if (oUrl.protocol === 'ws:' || oUrl.protocol === 'wss:') {
            config.options.ws = true;
        }
    // app.use('/api', proxy({target:'http://localhost:9000'}));
    } else {
        config.context = context;
        config.options = _.assign(config.options, opts);
    }

    configureLogger(config.options);

    if (!config.options.target) {
        throw new Error('[HPM] Missing "target" option. Example: {target: "http://www.example.org"}');
    }

    // Legacy option.proxyHost
    config.options = mapLegacyProxyHostOption(config.options);

    // Legacy option.proxyTable > option.router
    config.options = mapLegacyProxyTableOption(config.options);

    return config;
}

/**
 * Checks if a String only target/config is provided.
 * This can be just the host or with the optional path.
 *
 * @example
 *      app.use('/api', proxy('http://localhost:9000'));
        app.use(proxy('http://localhost:9000/api'));
 *
 * @param  {String}  context [description]
 * @return {Boolean}         [description]
 */
function isStringShortHand(context) {
    if (_.isString(context)) {
        return (url.parse(context).host) ? true : false;
    }
}

/**
 * Checks if a Object only config is provided, without a context.
 * In this case the all paths will be proxied.
 *
 * @example
 *     app.use('/api', proxy({target:'http://localhost:9000'}));
 *
 * @param  {Object}  context [description]
 * @param  {*}       opts    [description]
 * @return {Boolean}         [description]
 */
function isContextless(context, opts) {
    return (_.isPlainObject(context) && _.isEmpty(opts));
}

function mapLegacyProxyHostOption(options) {
    // set options.headers.host when option.proxyHost is provided
    if (options.proxyHost) {
        logger.warn('*************************************');
        logger.warn('[HPM] Deprecated "option.proxyHost"');
        logger.warn('      Use "option.changeOrigin" or "option.headers.host" instead');
        logger.warn('      "option.proxyHost" will be removed in future release.');
        logger.warn('*************************************');

        options.headers = options.headers || {};
        options.headers.host = options.proxyHost;
    }

    return options;
}

// Warn deprecated proxyTable api usage
function mapLegacyProxyTableOption(options) {
    if (options.proxyTable) {
        logger.warn('*************************************');
        logger.warn('[HPM] Deprecated "option.proxyTable"');
        logger.warn('      Use "option.router" instead');
        logger.warn('      "option.proxyTable" will be removed in future release.');
        logger.warn('*************************************');

        options.router = _.clone(options.proxyTable);
        _.omit(options, 'proxyTable');
    }

    return options;
}

function configureLogger(options) {
    if (options.logLevel) {
        logger.setLevel(options.logLevel);
    }

    if (options.logProvider) {
        logger.setProvider(options.logProvider);
    }
}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

var _ = __webpack_require__(9);
var url = __webpack_require__(11);
var isGlob = __webpack_require__(32);
var micromatch = __webpack_require__(33);

module.exports = {
    match: matchContext
};

function matchContext(context, uri, req) {

    // single path
    if (isStringPath(context)) {
        return matchSingleStringPath(context, uri);
    }

    // single glob path
    if (isGlobPath(context)) {
        return matchSingleGlobPath(context, uri);
    }

    // multi path
    if (Array.isArray(context)) {
        if (context.every(isStringPath)) {
            return matchMultiPath(context, uri);
        }
        if (context.every(isGlobPath)) {
            return matchMultiGlobPath(context, uri);
        }

        throw new Error('[HPM] Invalid context. Expecting something like: ["/api", "/ajax"] or ["/api/**", "!**.html"]');
    }

    // custom matching
    if (_.isFunction(context)) {
        var pathname = getUrlPathName(uri);
        return context(pathname, req);
    }

    throw new Error('[HPM] Invalid context. Expecting something like: "/api" or ["/api", "/ajax"]');
}

/**
 * @param  {String} context '/api'
 * @param  {String} uri     'http://example.org/api/b/c/d.html'
 * @return {Boolean}
 */
function matchSingleStringPath(context, uri) {
    var pathname = getUrlPathName(uri);
    return pathname.indexOf(context) === 0;
}

function matchSingleGlobPath(pattern, uri) {
    var pathname = getUrlPathName(uri);
    var matches = micromatch(pathname, pattern);
    return matches && (matches.length > 0);
}

function matchMultiGlobPath(patternList, uri) {
    return matchSingleGlobPath(patternList, uri);
}

/**
 * @param  {String} context ['/api', '/ajax']
 * @param  {String} uri     'http://example.org/api/b/c/d.html'
 * @return {Boolean}
 */
function matchMultiPath(contextList, uri) {
    for (var i = 0; i < contextList.length; i++) {
        var context = contextList[i];
        if (matchSingleStringPath(context, uri)) {
            return true;
        }
    }
    return false;
}

/**
 * Parses URI and returns RFC 3986 path
 *
 * @param  {String} uri from req.url
 * @return {String}     RFC 3986 path
 */
function getUrlPathName(uri) {
    return uri && url.parse(uri).pathname;
}

function isStringPath(context) {
    return _.isString(context) && !isGlob(context);
}

function isGlobPath(context) {
    return isGlob(context);
}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var _      = __webpack_require__(9);
var logger = __webpack_require__(10).getInstance();

module.exports = {
    init: init,
    getHandlers: getProxyEventHandlers
};

function init(proxy, opts) {
    var handlers = getProxyEventHandlers(opts);

    _.forIn(handlers, function(handler, eventName) {
        proxy.on(eventName, handlers[eventName]);
    });

    logger.debug('[HPM] Subscribed to http-proxy events: ', _.keys(handlers));
}

function getProxyEventHandlers(opts) {
    // https://github.com/nodejitsu/node-http-proxy#listening-for-proxy-events
    var proxyEvents = ['error', 'proxyReq', 'proxyReqWs', 'proxyRes', 'open', 'close'];
    var handlers = {};

    _.forEach(proxyEvents, function(event) {
        // all handlers for the http-proxy events are prefixed with 'on'.
        // loop through options and try to find these handlers
        // and add them to the handlers object for subscription in init().
        var eventName = _.camelCase('on ' + event);
        var fnHandler = _.get(opts, eventName);

        if (_.isFunction(fnHandler)) {
            handlers[event] = fnHandler;
        }
    });

    // add default error handler in absence of error handler
    if (!_.isFunction(handlers.error)) {
        handlers.error = defaultErrorHandler;
    }

    // add default close handler in absence of close handler
    if (!_.isFunction(handlers.close)) {
        handlers.close = logClose;
    }

    return handlers;
};

function defaultErrorHandler(err, req, res) {
    var host = (req.headers && req.headers.host);
    var code = err.code;

    if (res.writeHead && !res.headersSent) {
        if (/HPE_INVALID/.test(code)) {
            res.writeHead(502);
        } else {
            switch(code) {
                case 'ECONNRESET':
                case 'ENOTFOUND':
                case 'ECONNREFUSED':
                    res.writeHead(504);
                    break;
                default: res.writeHead(500);
            }
        }
    }

    res.end('Error occured while trying to proxy to: ' + host + req.url);
}

function logClose(req, socket, head) {
    // view disconnected websocket connections
    logger.info('[HPM] Client disconnected');
}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var _              = __webpack_require__(9);
var httpProxy      = __webpack_require__(24);
var configFactory  = __webpack_require__(18);
var handlers       = __webpack_require__(20);
var contextMatcher = __webpack_require__(19);
var PathRewriter   = __webpack_require__(22);
var Router         = __webpack_require__(23);
var logger         = __webpack_require__(10).getInstance();
var getArrow       = __webpack_require__(10).getArrow;

module.exports = HttpProxyMiddleware;

function HttpProxyMiddleware(context, opts) {
    // https://github.com/chimurai/http-proxy-middleware/issues/57
    var wsUpgradeDebounced  = _.debounce(handleUpgrade);
    var wsInitialized       = false;
    var config              = configFactory.createConfig(context, opts);
    var proxyOptions        = config.options;

    // create proxy
    var proxy = httpProxy.createProxyServer({});
    logger.info('[HPM] Proxy created:', config.context, ' -> ', proxyOptions.target);

    var pathRewriter = PathRewriter.create(proxyOptions.pathRewrite); // returns undefined when "pathRewrite" is not provided

    // attach handler to http-proxy events
    handlers.init(proxy, proxyOptions);

    // log errors for debug purpose
    proxy.on('error', logError);

    // https://github.com/chimurai/http-proxy-middleware/issues/19
    // expose function to upgrade externally
    middleware.upgrade = wsUpgradeDebounced;

    return middleware;

    function middleware(req, res, next) {
        if (shouldProxy(config.context, req)) {
            var activeProxyOptions = prepareProxyRequest(req);
            proxy.web(req, res, activeProxyOptions);
        } else {
            next();
        }

        if (proxyOptions.ws === true) {
            // use initial request to access the server object to subscribe to http upgrade event
            catchUpgradeRequest(req.connection.server);
        }
    }

    function catchUpgradeRequest(server) {
        // subscribe once; don't subscribe on every request...
        // https://github.com/chimurai/http-proxy-middleware/issues/113
        if (!wsInitialized) {
            server.on('upgrade', wsUpgradeDebounced);
            wsInitialized = true;
        }
    }

    function handleUpgrade(req, socket, head) {
        // set to initialized when used externally
        wsInitialized = true;

        if (shouldProxy(config.context, req)) {
            var activeProxyOptions = prepareProxyRequest(req);
            proxy.ws(req, socket, head, activeProxyOptions);
            logger.info('[HPM] Upgrading to WebSocket');
        }
    }

    /**
     * Determine whether request should be proxied.
     *
     * @private
     * @return {Boolean}
     */
    function shouldProxy(context, req) {
        var path = (req.originalUrl || req.url);
        return contextMatcher.match(context, path, req);
    }

    /**
     * Apply option.router and option.pathRewrite
     * Order matters:
          Router uses original path for routing;
          NOT the modified path, after it has been rewritten by pathRewrite
     */
    function prepareProxyRequest(req) {
        // https://github.com/chimurai/http-proxy-middleware/issues/17
        // https://github.com/chimurai/http-proxy-middleware/issues/94
        req.url = (req.originalUrl || req.url);

        // store uri before it gets rewritten for logging
        var originalPath = req.url;
        var newProxyOptions = _.assign({}, proxyOptions);

        // Apply in order:
        // 1. option.router
        // 2. option.pathRewrite
        __applyRouter(req, newProxyOptions);
        __applyPathRewrite(req, pathRewriter);

        // debug logging for both http(s) and websockets
        if (proxyOptions.logLevel === 'debug') {
            var arrow = getArrow(originalPath, req.url, proxyOptions.target, newProxyOptions.target);
            logger.debug('[HPM] %s %s %s %s', req.method, originalPath, arrow, newProxyOptions.target);
        }

        return newProxyOptions;
    }

    // Modify option.target when router present.
    function __applyRouter(req, options) {
        var newTarget;

        if (options.router) {
            newTarget = Router.getTarget(req, options);

            if (newTarget) {
                logger.debug('[HPM] Router new target: %s -> "%s"', options.target, newTarget);
                options.target = newTarget;
            }
        }
    }

    // rewrite path
    function __applyPathRewrite(req, pathRewriter) {
        if (pathRewriter) {
            var path = pathRewriter(req.url, req);

            if (typeof path === 'string') {
                req.url =  path;
            } else {
                logger.info('[HPM] pathRewrite: No rewritten path found. (%s)', req.url);
            }
        }
    }

    function logError(err, req, res) {
        var hostname = (req.headers && req.headers.host) || (req.hostname || req.host);     // (websocket) || (node0.10 || node 4/5)
        var target = proxyOptions.target.host || proxyOptions.target;
        var errReference = 'https://nodejs.org/api/errors.html#errors_common_system_errors'; // link to Node Common Systems Errors page

        logger.error('[HPM] Error occurred while trying to proxy request %s from %s to %s (%s) (%s)', req.url, hostname, target, err.code, errReference);
    }
};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var _      = __webpack_require__(9);
var logger = __webpack_require__(10).getInstance();

module.exports = {
    create: createPathRewriter
};

/**
 * Create rewrite function, to cache parsed rewrite rules.
 *
 * @returns {function} Function to rewrite paths; This function should accept `path` (request.url) as parameter
 */
function createPathRewriter(rewriteConfig) {
    var rulesCache;

    if (!isValidRewriteConfig(rewriteConfig)) {
        return;
    }

    if (_.isFunction(rewriteConfig)) {
        var customRewriteFn = rewriteConfig;
        return customRewriteFn;
    } else {
        rulesCache = parsePathRewriteRules(rewriteConfig);
        return rewritePath;
    }

    function rewritePath(path) {
        var result = path;

        _.forEach(rulesCache, function(rule) {
            if (rule.regex.test(path)) {
                result = result.replace(rule.regex, rule.value);
                logger.debug('[HPM] Rewriting path from "%s" to "%s"', path, result);
                return false;
            }
        });

        return result;
    }
}

function isValidRewriteConfig(rewriteConfig) {
    if (_.isFunction(rewriteConfig)) {
        return true;
    } else if (!_.isEmpty(rewriteConfig) && _.isPlainObject(rewriteConfig)) {
        return true;
    } else if (_.isUndefined(rewriteConfig) ||
               _.isNull(rewriteConfig) ||
               _.isEqual(rewriteConfig, {})) {
        return false;
    } else {
        throw new Error('[HPM] Invalid pathRewrite config. Expecting object with pathRewrite config or a rewrite function');
    }
}

function parsePathRewriteRules(rewriteConfig) {
    var rules = [];

    if (_.isPlainObject(rewriteConfig)) {
        _.forIn(rewriteConfig, function(value, key) {
            rules.push({
                regex: new RegExp(key),
                value: rewriteConfig[key]
            });
            logger.info('[HPM] Proxy rewrite rule created: "%s" ~> "%s"', key, rewriteConfig[key]);
        });
    }

    return rules;
}



/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var _      = __webpack_require__(9);
var logger = __webpack_require__(10).getInstance();

module.exports = {
    getTarget: getTarget
};

function getTarget(req, config) {
    var newTarget;
    var router = config.router;

    if (_.isPlainObject(router)) {
        newTarget = getTargetFromProxyTable(req, router);
    } else if (_.isFunction(router)) {
        newTarget = router(req);
    }

    return newTarget;
}

function getTargetFromProxyTable(req, table) {
    var result;
    var host = req.headers.host;
    var path = req.url;

    var hostAndPath = host + path;

    _.forIn(table, function(value, key) {
        if (containsPath(key)) {

            if (hostAndPath.indexOf(key) > -1) {    // match 'localhost:3000/api'
                result = table[key];
                logger.debug('[HPM] Router table match: "%s"', key);
                return false;
            }
        } else {

            if (key === host) {                     // match 'localhost:3000'
                result = table[key];
                logger.debug('[HPM] Router table match: "%s"', host);
                return false;
            }

        }

    });

    return result;
}

function containsPath(v) {
    return v.indexOf('/') > -1;
}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

/*!
 * Caron dimonio, con occhi di bragia
 * loro accennando, tutte le raccoglie;
 * batte col remo qualunque s’adagia 
 *
 * Charon the demon, with the eyes of glede,
 * Beckoning to them, collects them all together,
 * Beats with his oar whoever lags behind
 *          
 *          Dante - The Divine Comedy (Canto III)
 */

module.exports = __webpack_require__(25);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

 // Use explicit /index.js to help browserify negociation in require '/lib/http-proxy' (!)
var ProxyServer = __webpack_require__(26).Server;


/**
 * Creates the proxy server.
 *
 * Examples:
 *
 *    httpProxy.createProxyServer({ .. }, 8000)
 *    // => '{ web: [Function], ws: [Function] ... }'
 *
 * @param {Object} Options Config object passed to the proxy
 *
 * @return {Object} Proxy Proxy object with handlers for `ws` and `web` requests
 *
 * @api public
 */


function createProxyServer(options) {
  /*
   *  `options` is needed and it must have the following layout:
   *
   *  {
   *    target : <url string to be parsed with the url module>
   *    forward: <url string to be parsed with the url module>
   *    agent  : <object to be passed to http(s).request>
   *    ssl    : <object to be passed to https.createServer()>
   *    ws     : <true/false, if you want to proxy websockets>
   *    xfwd   : <true/false, adds x-forward headers>
   *    secure : <true/false, verify SSL certificate>
   *    toProxy: <true/false, explicitly specify if we are proxying to another proxy>
   *    prependPath: <true/false, Default: true - specify whether you want to prepend the target's path to the proxy path>
   *    ignorePath: <true/false, Default: false - specify whether you want to ignore the proxy path of the incoming request>
   *    localAddress : <Local interface string to bind for outgoing connections>
   *    changeOrigin: <true/false, Default: false - changes the origin of the host header to the target URL>
   *    preserveHeaderKeyCase: <true/false, Default: false - specify whether you want to keep letter case of response header key >
   *    auth   : Basic authentication i.e. 'user:password' to compute an Authorization header.
   *    hostRewrite: rewrites the location hostname on (301/302/307/308) redirects, Default: null.
   *    autoRewrite: rewrites the location host/port on (301/302/307/308) redirects based on requested host/port. Default: false.
   *    protocolRewrite: rewrites the location protocol on (301/302/307/308) redirects to 'http' or 'https'. Default: null.
   *  }
   *
   *  NOTE: `options.ws` and `options.ssl` are optional.
   *    `options.target and `options.forward` cannot be
   *    both missing
   *  }
   */

  return new ProxyServer(options);
}


ProxyServer.createProxyServer = createProxyServer;
ProxyServer.createServer      = createProxyServer;
ProxyServer.createProxy       = createProxyServer;




/**
 * Export the proxy "Server" as the main export.
 */
module.exports = ProxyServer;



/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var httpProxy = module.exports,
    extend    = __webpack_require__(12)._extend,
    parse_url = __webpack_require__(11).parse,
    EE3       = __webpack_require__(16),
    http      = __webpack_require__(14),
    https     = __webpack_require__(15),
    web       = __webpack_require__(27),
    ws        = __webpack_require__(29);

httpProxy.Server = ProxyServer;

/**
 * Returns a function that creates the loader for
 * either `ws` or `web`'s  passes.
 *
 * Examples:
 *
 *    httpProxy.createRightProxy('ws')
 *    // => [Function]
 *
 * @param {String} Type Either 'ws' or 'web'
 * 
 * @return {Function} Loader Function that when called returns an iterator for the right passes
 *
 * @api private
 */

function createRightProxy(type) {

  return function(options) {
    return function(req, res /*, [head], [opts] */) {
      var passes = (type === 'ws') ? this.wsPasses : this.webPasses,
          args = [].slice.call(arguments),
          cntr = args.length - 1,
          head, cbl;

      /* optional args parse begin */
      if(typeof args[cntr] === 'function') {
        cbl = args[cntr];

        cntr--;
      }

      if(
        !(args[cntr] instanceof Buffer) &&
        args[cntr] !== res
      ) {
        //Copy global options
        options = extend({}, options);
        //Overwrite with request options
        extend(options, args[cntr]);

        cntr--;
      }

      if(args[cntr] instanceof Buffer) {
        head = args[cntr];
      }

      /* optional args parse end */

      ['target', 'forward'].forEach(function(e) {
        if (typeof options[e] === 'string')
          options[e] = parse_url(options[e]);
      });

      if (!options.target && !options.forward) {
        return this.emit('error', new Error('Must provide a proper URL as target'));
      }

      for(var i=0; i < passes.length; i++) {
        /**
         * Call of passes functions
         * pass(req, res, options, head)
         *
         * In WebSockets case the `res` variable
         * refer to the connection socket
         * pass(req, socket, options, head)
         */
        if(passes[i](req, res, options, head, this, cbl)) { // passes can return a truthy value to halt the loop
          break;
        }
      }
    };
  };
}
httpProxy.createRightProxy = createRightProxy;

function ProxyServer(options) {
  EE3.call(this);

  options = options || {};
  options.prependPath = options.prependPath === false ? false : true;

  this.web = this.proxyRequest           = createRightProxy('web')(options);
  this.ws  = this.proxyWebsocketRequest  = createRightProxy('ws')(options);
  this.options = options;

  this.webPasses = Object.keys(web).map(function(pass) {
    return web[pass];
  });

  this.wsPasses = Object.keys(ws).map(function(pass) {
    return ws[pass];
  });

  this.on('error', this.onError, this);

}

__webpack_require__(12).inherits(ProxyServer, EE3);

ProxyServer.prototype.onError = function (err) {
  //
  // Remark: Replicate node core behavior using EE3
  // so we force people to handle their own errors
  //
  if(this.listeners('error').length === 1) {
    throw err;
  }
};

ProxyServer.prototype.listen = function(port, hostname) {
  var self    = this,
      closure = function(req, res) { self.web(req, res); };

  this._server  = this.options.ssl ?
    https.createServer(this.options.ssl, closure) :
    http.createServer(closure);

  if(this.options.ws) {
    this._server.on('upgrade', function(req, socket, head) { self.ws(req, socket, head); });
  }

  this._server.listen(port, hostname);

  return this;
};

ProxyServer.prototype.close = function(callback) {
  var self = this;
  if (this._server) {
    this._server.close(done);
  }

  // Wrap callback to nullify server after all open connections are closed.
  function done() {
    self._server = null;
    if (callback) {
      callback.apply(null, arguments);
    }
  };
};

ProxyServer.prototype.before = function(type, passName, callback) {
  if (type !== 'ws' && type !== 'web') {
    throw new Error('type must be `web` or `ws`');
  }
  var passes = (type === 'ws') ? this.wsPasses : this.webPasses,
      i = false;

  passes.forEach(function(v, idx) {
    if(v.name === passName) i = idx;
  })

  if(i === false) throw new Error('No such pass');

  passes.splice(i, 0, callback);
};
ProxyServer.prototype.after = function(type, passName, callback) {
  if (type !== 'ws' && type !== 'web') {
    throw new Error('type must be `web` or `ws`');
  }
  var passes = (type === 'ws') ? this.wsPasses : this.webPasses,
      i = false;

  passes.forEach(function(v, idx) {
    if(v.name === passName) i = idx;
  })

  if(i === false) throw new Error('No such pass');

  passes.splice(i++, 0, callback);
};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

var http   = __webpack_require__(14),
    https  = __webpack_require__(15),
    web_o  = __webpack_require__(28),
    common = __webpack_require__(13);

web_o = Object.keys(web_o).map(function(pass) {
  return web_o[pass];
});

/*!
 * Array of passes.
 *
 * A `pass` is just a function that is executed on `req, res, options`
 * so that you can easily add new checks while still keeping the base
 * flexible.
 */


module.exports = {

  /**
   * Sets `content-length` to '0' if request is of DELETE type.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  deleteLength: function deleteLength(req, res, options) {
    if((req.method === 'DELETE' || req.method === 'OPTIONS')
       && !req.headers['content-length']) {
      req.headers['content-length'] = '0';
      delete req.headers['transfer-encoding'];
    }
  },

  /**
   * Sets timeout in request socket if it was specified in options.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  timeout: function timeout(req, res, options) {
    if(options.timeout) {
      req.socket.setTimeout(options.timeout);
    }
  },

  /**
   * Sets `x-forwarded-*` headers if specified in config.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  XHeaders: function XHeaders(req, res, options) {
    if(!options.xfwd) return;

    var encrypted = req.isSpdy || common.hasEncryptedConnection(req);
    var values = {
      for  : req.connection.remoteAddress || req.socket.remoteAddress,
      port : common.getPort(req),
      proto: encrypted ? 'https' : 'http'
    };

    ['for', 'port', 'proto'].forEach(function(header) {
      req.headers['x-forwarded-' + header] =
        (req.headers['x-forwarded-' + header] || '') +
        (req.headers['x-forwarded-' + header] ? ',' : '') +
        values[header];
    });

    req.headers['x-forwarded-host'] = req.headers['host'] || '';
  },

  /**
   * Does the actual proxying. If `forward` is enabled fires up
   * a ForwardStream, same happens for ProxyStream. The request
   * just dies otherwise.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  stream: function stream(req, res, options, _, server, clb) {

    // And we begin!
    server.emit('start', req, res, options.target || options.forward);

    if(options.forward) {
      // If forward enable, so just pipe the request
      var forwardReq = (options.forward.protocol === 'https:' ? https : http).request(
        common.setupOutgoing(options.ssl || {}, options, req, 'forward')
      );

      // error handler (e.g. ECONNRESET, ECONNREFUSED)
      // Handle errors on incoming request as well as it makes sense to
      var forwardError = createErrorHandler(forwardReq, options.forward);
      req.on('error', forwardError);
      forwardReq.on('error', forwardError);

      (options.buffer || req).pipe(forwardReq);
      if(!options.target) { return res.end(); }
    }

    // Request initalization
    var proxyReq = (options.target.protocol === 'https:' ? https : http).request(
      common.setupOutgoing(options.ssl || {}, options, req)
    );

    // Enable developers to modify the proxyReq before headers are sent
    proxyReq.on('socket', function(socket) {
      if(server) { server.emit('proxyReq', proxyReq, req, res, options); }
    });

    // allow outgoing socket to timeout so that we could
    // show an error page at the initial request
    if(options.proxyTimeout) {
      proxyReq.setTimeout(options.proxyTimeout, function() {
         proxyReq.abort();
      });
    }

    // Ensure we abort proxy if request is aborted
    req.on('aborted', function () {
      proxyReq.abort();
    });

    // handle errors in proxy and incoming request, just like for forward proxy
    var proxyError = createErrorHandler(proxyReq, options.target);
    req.on('error', proxyError);
    proxyReq.on('error', proxyError);

    function createErrorHandler(proxyReq, url) {
      return function proxyError(err) {
        if (req.socket.destroyed && err.code === 'ECONNRESET') {
          server.emit('econnreset', err, req, res, url);
          return proxyReq.abort();
        }

        if (clb) {
          clb(err, req, res, url);
        } else {
          server.emit('error', err, req, res, url);
        }
      }
    }

    (options.buffer || req).pipe(proxyReq);

    proxyReq.on('response', function(proxyRes) {
      if(server) { server.emit('proxyRes', proxyRes, req, res); }
      for(var i=0; i < web_o.length; i++) {
        if(web_o[i](req, res, proxyRes, options)) { break; }
      }

      // Allow us to listen when the proxy has completed
      proxyRes.on('end', function () {
        server.emit('end', req, res, proxyRes);
      });

      proxyRes.pipe(res);
    });

    //proxyReq.end();
  }

};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var url    = __webpack_require__(11),
    common = __webpack_require__(13);


var redirectRegex = /^201|30(1|2|7|8)$/;

/*!
 * Array of passes.
 *
 * A `pass` is just a function that is executed on `req, res, options`
 * so that you can easily add new checks while still keeping the base
 * flexible.
 */

module.exports = { // <--

  /**
   * If is a HTTP 1.0 request, remove chunk headers
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   *
   * @api private
   */
  removeChunked: function removeChunked(req, res, proxyRes) {
    if (req.httpVersion === '1.0') {
      delete proxyRes.headers['transfer-encoding'];
    }
  },

  /**
   * If is a HTTP 1.0 request, set the correct connection header
   * or if connection header not present, then use `keep-alive`
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   *
   * @api private
   */
  setConnection: function setConnection(req, res, proxyRes) {
    if (req.httpVersion === '1.0') {
      proxyRes.headers.connection = req.headers.connection || 'close';
    } else if (req.httpVersion !== '2.0' && !proxyRes.headers.connection) {
      proxyRes.headers.connection = req.headers.connection || 'keep-alive';
    }
  },

  setRedirectHostRewrite: function setRedirectHostRewrite(req, res, proxyRes, options) {
    if ((options.hostRewrite || options.autoRewrite || options.protocolRewrite)
        && proxyRes.headers['location']
        && redirectRegex.test(proxyRes.statusCode)) {
      var target = url.parse(options.target);
      var u = url.parse(proxyRes.headers['location']);

      // make sure the redirected host matches the target host before rewriting
      if (target.host != u.host) {
        return;
      }

      if (options.hostRewrite) {
        u.host = options.hostRewrite;
      } else if (options.autoRewrite) {
        u.host = req.headers['host'];
      }
      if (options.protocolRewrite) {
        u.protocol = options.protocolRewrite;
      }

      proxyRes.headers['location'] = u.format();
    }
  },
  /**
   * Copy headers from proxyResponse to response
   * set each header in response object.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   * @param {Object} Options options.cookieDomainRewrite: Config to rewrite cookie domain
   *
   * @api private
   */
  writeHeaders: function writeHeaders(req, res, proxyRes, options) {
    var rewriteCookieDomainConfig = options.cookieDomainRewrite,
        preserveHeaderKeyCase = options.preserveHeaderKeyCase,
        rawHeaderKeyMap,
        setHeader = function(key, header) {
          if (header == undefined) return;
          if (rewriteCookieDomainConfig && key.toLowerCase() === 'set-cookie') {
            header = common.rewriteCookieDomain(header, rewriteCookieDomainConfig);
          }
          res.setHeader(String(key).trim(), header);
        };

    if (typeof rewriteCookieDomainConfig === 'string') { //also test for ''
      rewriteCookieDomainConfig = { '*': rewriteCookieDomainConfig };
    }

    // message.rawHeaders is added in: v0.11.6
    // https://nodejs.org/api/http.html#http_message_rawheaders
    if (preserveHeaderKeyCase && proxyRes.rawHeaders != undefined) {
      rawHeaderKeyMap = {};
      for (var i = 0; i < proxyRes.rawHeaders.length; i += 2) {
        var key = proxyRes.rawHeaders[i];
        rawHeaderKeyMap[key.toLowerCase()] = key;
      }
    }

    Object.keys(proxyRes.headers).forEach(function(key) {
      var header = proxyRes.headers[key];
      if (preserveHeaderKeyCase && rawHeaderKeyMap) {
        key = rawHeaderKeyMap[key] || key;
      }
      setHeader(key, header);
    });
  },

  /**
   * Set the statusCode from the proxyResponse
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   *
   * @api private
   */
  writeStatusCode: function writeStatusCode(req, res, proxyRes) {
    // From Node.js docs: response.writeHead(statusCode[, statusMessage][, headers])
    if(proxyRes.statusMessage) {
      res.writeHead(proxyRes.statusCode, proxyRes.statusMessage);
    } else {
      res.writeHead(proxyRes.statusCode);
    }
  }

};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var http   = __webpack_require__(14),
    https  = __webpack_require__(15),
    common = __webpack_require__(13);

/*!
 * Array of passes.
 *
 * A `pass` is just a function that is executed on `req, socket, options`
 * so that you can easily add new checks while still keeping the base
 * flexible.
 */

/*
 * Websockets Passes
 *
 */


module.exports = {
  /**
   * WebSocket requests must have the `GET` method and
   * the `upgrade:websocket` header
   *
   * @param {ClientRequest} Req Request object
   * @param {Socket} Websocket
   *
   * @api private
   */

  checkMethodAndHeader : function checkMethodAndHeader(req, socket) {
    if (req.method !== 'GET' || !req.headers.upgrade) {
      socket.destroy();
      return true;
    }

    if (req.headers.upgrade.toLowerCase() !== 'websocket') {
      socket.destroy();
      return true;
    }
  },

  /**
   * Sets `x-forwarded-*` headers if specified in config.
   *
   * @param {ClientRequest} Req Request object
   * @param {Socket} Websocket
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  XHeaders : function XHeaders(req, socket, options) {
    if(!options.xfwd) return;

    var values = {
      for  : req.connection.remoteAddress || req.socket.remoteAddress,
      port : common.getPort(req),
      proto: common.hasEncryptedConnection(req) ? 'wss' : 'ws'
    };

    ['for', 'port', 'proto'].forEach(function(header) {
      req.headers['x-forwarded-' + header] =
        (req.headers['x-forwarded-' + header] || '') +
        (req.headers['x-forwarded-' + header] ? ',' : '') +
        values[header];
    });
  },

  /**
   * Does the actual proxying. Make the request and upgrade it
   * send the Switching Protocols request and pipe the sockets.
   *
   * @param {ClientRequest} Req Request object
   * @param {Socket} Websocket
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */
  stream : function stream(req, socket, options, head, server, clb) {
    common.setupSocket(socket);

    if (head && head.length) socket.unshift(head);


    var proxyReq = (common.isSSL.test(options.target.protocol) ? https : http).request(
      common.setupOutgoing(options.ssl || {}, options, req)
    );

    // Enable developers to modify the proxyReq before headers are sent
    if (server) { server.emit('proxyReqWs', proxyReq, req, socket, options, head); }

    // Error Handler
    proxyReq.on('error', onOutgoingError);
    proxyReq.on('response', function (res) {
      // if upgrade event isn't going to happen, close the socket
      if (!res.upgrade) socket.end();
    });

    proxyReq.on('upgrade', function(proxyRes, proxySocket, proxyHead) {
      proxySocket.on('error', onOutgoingError);

      // Allow us to listen when the websocket has completed
      proxySocket.on('end', function () {
        server.emit('close', proxyRes, proxySocket, proxyHead);
      });

      // The pipe below will end proxySocket if socket closes cleanly, but not
      // if it errors (eg, vanishes from the net and starts returning
      // EHOSTUNREACH). We need to do that explicitly.
      socket.on('error', function () {
        proxySocket.end();
      });

      common.setupSocket(proxySocket);

      if (proxyHead && proxyHead.length) proxySocket.unshift(proxyHead);

      //
      // Remark: Handle writing the headers to the socket when switching protocols
      // Also handles when a header is an array
      //
      socket.write(
        Object.keys(proxyRes.headers).reduce(function (head, key) {
          var value = proxyRes.headers[key];

          if (!Array.isArray(value)) {
            head.push(key + ': ' + value);
            return head;
          }

          for (var i = 0; i < value.length; i++) {
            head.push(key + ': ' + value[i]);
          }
          return head;
        }, ['HTTP/1.1 101 Switching Protocols'])
        .join('\r\n') + '\r\n\r\n'
      );

      proxySocket.pipe(socket).pipe(proxySocket);

      server.emit('open', proxySocket);
      server.emit('proxySocket', proxySocket);  //DEPRECATED.
    });

    return proxyReq.end(); // XXX: CHECK IF THIS IS THIS CORRECT

    function onOutgoingError(err) {
      if (clb) {
        clb(err, req, socket);
      } else {
        server.emit('error', err, req, socket);
      }
      socket.end();
    }
  }
};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Inject raw response, so we can know if middleware has responsed.
 */
function makeInjectedResponse(koaCtx, /*markHandled,*/ whenEnded) {
    var res = koaCtx.res;
    res.on('close', whenEnded).on('finish', whenEnded);
    var dummyRes = Object.create(res);
    [
        'setHeader',
        'writeHead',
        'write',
        'end'
    ].forEach(function (name) {
        dummyRes[name] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            res[name].apply(res, args);
            // koa2.0 initial assign statusCode to 404, reset to 200
            if (res.statusCode === 404) {
                res.statusCode = 200;
            }
            // markHandled();
        };
    });
    [
        'statusCode',
        'statusMessage'
    ].forEach(function (name) {
        dummyRes.__defineSetter__(name, function (value) {
            res[name] = value;
            // markHandled();
        });
    });
    return dummyRes;
}
/**
 * The middleware function does include the `next` callback so only resolve
 * the Promise when it's called. If it's never called, the middleware stack
 * completion will stall
 */
function handler(ctx, connectMiddleware) {
    return new Promise(function (resolve, reject) {
        // let hasHandled = false;
        // (req, res)
        var args = [
            ctx.req,
            makeInjectedResponse(ctx, 
            // () => {
            //   // hasHandled = true;
            // },
            function () {
                resolve(false);
            })
        ];
        var assumeSync = true;
        // (req, res, next) or (err, req, res, next)
        if (connectMiddleware.length >= 3) {
            args.push(function (err) {
                if (err)
                    reject(err);
                else
                    resolve(true);
            });
            assumeSync = false;
        }
        // (err, req, res, next)
        if (connectMiddleware.length >= 4) {
            args.unshift(null);
        }
        connectMiddleware.apply(void 0, args);
        /**
         * If the middleware function does not declare receiving the `next` callback
         * assume that it's synchronous.
         */
        if (assumeSync /*&& !hasHandled*/) {
            resolve(true);
        }
    });
}
/**
 * Returns a Koa middleware function that varies its async logic based on if the
 * given middleware function declares at least 3 parameters, i.e. includes
 * the `next` callback function
 */
function koaConnect(connectMiddleware) {
    var _this = this;
    return function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
        var goNext, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ctx.respond = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, handler(ctx, connectMiddleware)];
                case 2:
                    goNext = _a.sent();
                    if (goNext) {
                        ctx.respond = true;
                        return [2 /*return*/, next()];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    ctx.respond = true;
                    throw err_1;
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
}
module.exports = koaConnect;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("is-glob");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("micromatch");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  'appName': 'mockServer',
  'appMiniName': 'M',
  'whiteList': ['/login'],
  'apiBaseURL': 'api',
  'proxy': {
    target: 'https://www.easy-mock.com/mock/5a7bac516347684a0857e274/mserver',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
};

/***/ }
/******/ ]);
//# sourceMappingURL=main.map