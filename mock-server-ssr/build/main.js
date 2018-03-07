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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  appName: 'mockServer',
  appMiniName: 'M',
  whiteList: ['/login'],
  apiBaseURL: '/api',
  server: {
    mongodb: 'mongodb://hans:123@localhost/mock-server',
    jwtSecret: 'shared-secret',
    jwtExpire: '14 days'
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var codeMap = {
  '-1': 'fail',
  '200': 'success',
  '401': 'token expired',
  '500': 'server error',
  '10001': 'params error'
};

var utilFn = {
  resuccess: function resuccess(data) {
    return {
      code: 200,
      success: true,
      message: codeMap['200'],
      data: data || null
    };
  },
  refail: function refail(message, code, data) {
    return {
      code: code || -1,
      success: false,
      message: message || codeMap[code],
      data: data || null
    };
  }
};

var UtilFunMiddleware = function () {
  function UtilFunMiddleware() {
    _classCallCheck(this, UtilFunMiddleware);
  }

  _createClass(UtilFunMiddleware, null, [{
    key: 'util',
    value: function util(ctx, next) {
      ctx.set('X-Request-Id', ctx.req.id);
      ctx.util = utilFn;
      return next();
    }

    // static ipFilter (ctx, next) {
    //   if (ipFilter(ctx.ip, blackIPs, {strict: false})) {
    //     ctx.body = utilFn.refail('请求频率太快，已被限制访问')
    //     return
    //   }
    //   return next()
    // }

  }, {
    key: 'mockFilter',
    value: function mockFilter(ctx, next) {
      var pathNode = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default()('/mock/:projectId(.{24})/:mockURL*').exec(ctx.path);

      if (!pathNode) ctx.throw(404);

      ctx.pathNode = {
        projectId: pathNode[1],
        mockURL: '/' + (pathNode[2] || '')
      };

      return next();
    }
  }]);

  return UtilFunMiddleware;
}();

/* harmony default export */ exports["a"] = UtilFunMiddleware;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("path-to-regexp");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__group__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_group__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mock_count__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_group__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_project__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__user__["a"]; });
/* unused harmony reexport Mock */
/* unused harmony reexport UserProject */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__project__["a"]; });
/* unused harmony reexport ProjectGroup */
/* unused harmony reexport MockCount */
/* unused harmony reexport UserGroup */
/* unused harmony reexport Group */
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:19:57 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-06 14:22:55
 */













__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = global.Promise;
__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* default */].server.mongodb, {
  // useMongoClient: true,
  poolSize: 20
}, function (err) {
  /* istanbul ignore if */
  if (err) {
    console.error('connect to %s error: ', __WEBPACK_IMPORTED_MODULE_1__utils_config__["a" /* default */].server.mongodb, err.message);
    process.exit(1);
  }
});



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:21:18 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-06 14:29:58
 */




var gravatar = ['//img.souche.com/20161230/png/58f22ad636a0f33bad8762688f78d425.png', '//img.souche.com/20161230/png/6cdcda90c2f86ba1f45393cf5b26e324.png', '//img.souche.com/20161230/png/f9d10bb683d940dd14dc1b1344e89568.png', '//img.souche.com/20161230/png/8bb4f0fd45ed6ae26533eadd85f0f7ea.png', '//img.souche.com/20161230/png/0795744371fd5869af6cab796bdacb95.png', '//img.souche.com/20161230/png/bc836261fbb654dda6b653e428014279.png', '//img.souche.com/20161230/png/fd9f8aecab317e177655049a49b64d02.png'];

var UserProxy = function () {
  function UserProxy() {
    _classCallCheck(this, UserProxy);
  }

  _createClass(UserProxy, null, [{
    key: 'newAndSave',
    value: function newAndSave(name, password, nickName, headImg) {
      var user = new __WEBPACK_IMPORTED_MODULE_1__models__["a" /* User */]();
      var len = gravatar.length;

      user.name = name;
      user.password = password;
      user.nick_name = nickName || __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.now();
      user.head_img = headImg || gravatar[__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.random(0, len - 1)];

      return user.save();
    }
  }, {
    key: 'update',
    value: function update(user) {
      return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* User */].update({
        _id: user.id
      }, {
        $set: {
          nick_name: user.nick_name,
          head_img: user.head_img,
          password: user.password
        }
      });
    }
  }, {
    key: 'getByName',
    value: function getByName(userName) {
      return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* User */].findOne({ name: userName });
    }
  }, {
    key: 'getById',
    value: function getById(userId) {
      return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* User */].findById(userId);
    }
  }, {
    key: 'find',
    value: function find(query, opt) {
      return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* User */].find(query, {}, opt);
    }
  }]);

  return UserProxy;
}();

/* harmony default export */ exports["a"] = UserProxy;

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mock server',
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_restc__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_restc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_restc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middleware_utilFun__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return mockRouter; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return apiRouter; });





// import mock from './../controllers/mock'

// import c2k from 'koa2-connect'
// import proxy from 'http-proxy-middleware'
// import cfg from './../../utils/config'

var mockRouter = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a({ prefix: '/mock' });
// .all('*', utilFun.mockFilter, restc.koa2(), mock.getMockAPI)

var apiRouter = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a({ prefix: '/api' }).post('/u/login', __WEBPACK_IMPORTED_MODULE_2__controllers__["a" /* user */].login).post('/u/register', __WEBPACK_IMPORTED_MODULE_2__controllers__["a" /* user */].register).get('/u/profile', __WEBPACK_IMPORTED_MODULE_2__controllers__["a" /* user */].profile);



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mkdirp__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mkdirp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mkdirp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_pino_logger__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_pino_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_pino_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pino_multi_stream__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pino_multi_stream___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_pino_multi_stream__);
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-07 16:08:06 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-07 17:27:08
 */









var streamOpt = { flags: 'a', encoding: 'utf8' };
var date = __WEBPACK_IMPORTED_MODULE_4_moment___default()().format('YYYY-MM-DD');
var logDir = __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(__dirname, '../logs');
var streams = [{ level: 'info', stream: process.stdout }, { level: 'error', stream: process.stderr }];

/* istanbul ignore if */
if (false) {
  if (!fs.existsSync(logDir)) mkdirp.sync(logDir);

  streams = [{
    level: 'info',
    stream: fs.createWriteStream('logs/' + date + '-info.log', streamOpt)
  }, {
    level: 'error',
    stream: fs.createWriteStream('logs/' + date + '-error.log', streamOpt)
  }];
}

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_5_koa_pino_logger___default()({
  name: 'Mock Server',
  level:  false ? 'silent' : /* istanbul ignore next */'info',
  genReqId: function genReqId(req) {
    return req.headers['x-request-id'] || __WEBPACK_IMPORTED_MODULE_1_uuid___default.a.v4();
  }
}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_pino_multi_stream__["multistream"])(streams));
/* WEBPACK VAR INJECTION */}.call(exports, "utils"))

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("@koa/cors");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("koa-body");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("koa-jwt");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("koa-onerror");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("koa-proxies");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("koa2-validator");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user__["a"]; });
/* unused harmony reexport mock */
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:19:27 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:19:27 
 */






/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:19:33 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:19:33 
 */

var mock = {
  getMockAPI: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      var html;
      return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              html = "\n    <ul>\n      <li><a href=\"/page/helloworld\">/page/helloworld</a></li>\n      <li><a href=\"/page/404\">/page/404</a></li>\n    </ul>\n  ";

              ctx.body = html;

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getMockAPI(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return getMockAPI;
  }()
};

/* unused harmony default export */ var _unused_webpack_default_export = mock;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proxys__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_mix__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_fields_table__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_config__ = __webpack_require__(2);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 13:40:55 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-07 17:17:42
 */








/**
 * 用户控制器
 *
 * @export
 * @class UserController
 */

var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: 'register',

    /**
     * 用户注册
     *
     * @static
     * @param {any} ctx
     * @memberof UserController
     */
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var name, password, newPassword, user;
        return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = ctx.checkBody('name').notEmpty().len(4, 20).value;
                password = ctx.checkBody('password').notEmpty().len(6, 20).value;

                if (!ctx._validationErrors.length) {
                  _context.next = 5;
                  break;
                }

                ctx.body = ctx.util.refail(null, 10001, ctx._validationErrors);
                return _context.abrupt('return');

              case 5:
                newPassword = __WEBPACK_IMPORTED_MODULE_4__utils_mix__["a" /* default */].bhash(password);
                _context.next = 8;
                return __WEBPACK_IMPORTED_MODULE_3__proxys__["a" /* UserProxy */].newAndSave(name, newPassword);

              case 8:
                user = _context.sent;

                ctx.body = ctx.util.resuccess();

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function register(_x) {
        return _ref.apply(this, arguments);
      }

      return register;
    }()

    /**
     * 用户登录
     *
     * @static
     * @param {any} ctx
     * @memberof UserController
     */

  }, {
    key: 'login',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
        var name, password, user, verifyPassword;
        return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                name = ctx.checkBody('name').notEmpty().value;
                password = ctx.checkBody('password').notEmpty().value;

                if (!ctx._validationErrors.length) {
                  _context2.next = 5;
                  break;
                }

                ctx.body = ctx.util.refail(null, 10001, ctx._validationErrors);
                return _context2.abrupt('return');

              case 5:
                _context2.next = 7;
                return __WEBPACK_IMPORTED_MODULE_3__proxys__["a" /* UserProxy */].getByName(name);

              case 7:
                user = _context2.sent;

                if (user) {
                  _context2.next = 11;
                  break;
                }

                ctx.body = ctx.util.refail('用户不存在');
                return _context2.abrupt('return');

              case 11:
                verifyPassword = __WEBPACK_IMPORTED_MODULE_4__utils_mix__["a" /* default */].bcompare(password, user.password);

                if (verifyPassword) {
                  _context2.next = 15;
                  break;
                }

                ctx.body = ctx.util.refail('用户名或密码错误');
                return _context2.abrupt('return');

              case 15:

                user.token = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.sign({ uid: user._id }, __WEBPACK_IMPORTED_MODULE_6__utils_config__["a" /* default */].server.jwtSecret, {
                  expiresIn: __WEBPACK_IMPORTED_MODULE_6__utils_config__["a" /* default */].server.jwtExpire
                });

                ctx.body = ctx.util.resuccess(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.pick(user, __WEBPACK_IMPORTED_MODULE_5__models_fields_table__["a" /* default */].user));

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function login(_x2) {
        return _ref2.apply(this, arguments);
      }

      return login;
    }()

    /**
     * 离线 用户信息
     *
     * @static
     * @param {any} ctx
     * @memberof UserController
     */

  }, {
    key: 'profile',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(ctx) {
        var user;
        return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__proxys__["a" /* UserProxy */].getById(ctx.state.user.uid);

              case 2:
                user = _context3.sent;

                if (user) {
                  _context3.next = 6;
                  break;
                }

                ctx.body = ctx.util.refail('用户不存在');
                return _context3.abrupt('return');

              case 6:

                ctx.body = ctx.util.resuccess(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.pick(user, __WEBPACK_IMPORTED_MODULE_5__models_fields_table__["a" /* default */].user));

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function profile(_x3) {
        return _ref3.apply(this, arguments);
      }

      return profile;
    }()
  }]);

  return UserController;
}();

/* harmony default export */ exports["a"] = UserController;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-07 14:11:44 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-07 14:12:29
 */

/* harmony default export */ exports["a"] = {
  group: ['_id', 'name'],
  projectExtend: ['_id', 'is_workbench'],
  user: ['_id', 'name', 'nick_name', 'head_img', 'token'],
  mock: ['_id', 'url', 'method', 'description', 'mode', 'parameters', 'response_model'],
  project: ['_id', 'name', 'url', 'description', 'swagger_url', 'members', 'extend', 'group']
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:19:51 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:19:51 
 */



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    unique: true
  },
  create_at: {
    type: Date,
    default: Date.now
  }
});

schema.index({ user: 1, create_at: -1 });
schema.index({ name: 1 }, { unique: true });

/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Group', schema);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:06 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:06 
 */



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var schema = new Schema({
  project_group: {
    type: Schema.Types.ObjectId,
    ref: 'ProjectGroup'
  },
  request: {
    base: {
      group: String,
      method: String,
      url: String,
      description: String
    },
    parameters: [{
      key: String,
      value: String,
      description: String,
      type: { type: String, default: 'string' },
      must: { type: String, default: 'yes' },
      isEdit: { type: Boolean, default: true },
      isChecked: { type: Boolean, default: false }
    }],
    headers: [{
      key: String,
      value: String,
      description: String,
      type: { type: String, default: 'string' },
      must: { type: String, default: 'yes' },
      isEdit: { type: Boolean, default: true },
      isChecked: { type: Boolean, default: false }
    }],
    body: {
      type: String,
      kvData: [{
        key: String,
        value: String,
        description: String,
        type: { type: String, default: 'string' },
        must: { type: String, default: 'yes' },
        isEdit: { type: Boolean, default: true },
        isChecked: { type: Boolean, default: false }
      }],
      rawType: String,
      rawData: String,
      rawDataMD: String
    }
  },
  response: {
    body: String,
    bodyMD: String,
    mockjs: String,
    headers: [{
      key: String,
      value: String,
      description: String,
      type: { type: String, default: 'string' },
      must: { type: String, default: 'yes' },
      isEdit: { type: Boolean, default: true },
      isChecked: { type: Boolean, default: false }
    }]
  },
  create_at: {
    type: Date,
    default: Date.now
  }
});

schema.index({ project_group: 1, create_at: -1 });

/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Mock', schema);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:01 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:01 
 */



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var schema = new Schema({
  mock: {
    type: Schema.Types.ObjectId,
    ref: 'Mock'
  },
  count: Number,
  create_at: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'mock_counts'
});

schema.index({ mock: 1, create_at: -1 });

module.exports = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('MockCount', schema);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:15 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:15 
 */



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User'
  },
  group: {
    type: ObjectId,
    ref: 'Group'
  },
  name: String,
  url: String,
  description: {
    type: String,
    default: ''
  },
  swagger_url: {
    type: String,
    default: ''
  },
  members: [{
    type: ObjectId,
    ref: 'User',
    default: []
  }],
  create_at: {
    type: Date,
    default: Date.now
  }
});

schema.index({ user: 1, members: 1, create_at: -1 });

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Project', schema);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:10 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:10 
 */



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var schema = new Schema({
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  name: {
    type: String,
    unique: true
  },
  create_at: {
    type: Date,
    default: Date.now
  }
});

schema.index({ project: 1, create_at: -1 });

/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('ProjectGroup', schema);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:33 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:33 
 */



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
var schema = new Schema({
  nick_name: String,
  head_img: String,
  name: String,
  password: String,
  create_at: {
    type: Date,
    default: Date.now
  }
});

schema.index({ name: 1 }, { unique: true });

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', schema);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:22 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:22 
 */



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  },
  create_at: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'user_group'
});

schema.index({ group: 1, user: 1 }, { unique: true });

/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('UserGroup', schema);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:20:27 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:20:27 
 */



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  is_workbench: { // 工作台
    type: Boolean,
    default: false
  },
  create_at: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'user_project'
});

schema.index({ project: 1, user: 1 }, { unique: true });

/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('UserProject', schema);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user__["a"]; });
/* unused harmony reexport ProjectProxy */
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:19:16 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:19:16 
 */






/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(6);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:21:08 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:21:08 
 */




var ProjectProxy = function () {
  function ProjectProxy() {
    _classCallCheck(this, ProjectProxy);
  }

  _createClass(ProjectProxy, null, [{
    key: 'newAndSave',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(docs) {
        var projects;
        return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Project */].insertMany(docs);

              case 2:
                projects = _context.sent;
                return _context.abrupt('return', projects);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function newAndSave(_x) {
        return _ref.apply(this, arguments);
      }

      return newAndSave;
    }()
  }, {
    key: 'findByName',
    value: function findByName(name) {
      return __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Project */].findOne({ name: name });
    }
  }, {
    key: 'findOne',
    value: function findOne(query) {
      return __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Project */].findOne(query);
    }
  }, {
    key: 'find',
    value: function find(query) {
      return __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Project */].find(query, {});
    }
  }, {
    key: 'updateById',
    value: function updateById(id, doc) {
      return __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Project */].update({ _id: id }, { $set: doc });
    }
  }, {
    key: 'del',
    value: function del(query) {
      return __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Project */].remove(query);
    }
  }]);

  return ProjectProxy;
}();

/* unused harmony default export */ var _unused_webpack_default_export = ProjectProxy;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_beautify_js_lib_beautify__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_beautify_js_lib_beautify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_beautify_js_lib_beautify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prettify_markdown__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prettify_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prettify_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcryptjs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bcryptjs__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





/**
 * 工具函数
 * 
 * @export
 * @class MixUtil
 */

var MixUtil = function () {
  function MixUtil() {
    _classCallCheck(this, MixUtil);
  }

  _createClass(MixUtil, null, [{
    key: 'formatJson',

    /**
     * 格式化json
     *
     * @static
     * @param {any} str
     * @returns
     * @memberof MixUtil
     */
    value: function formatJson(str) {
      str = str.trim();
      if (str === '') {
        return str;
      }
      try {
        return __WEBPACK_IMPORTED_MODULE_0_js_beautify_js_lib_beautify___default.a.js_beautify(str, { indent_size: 2 });
        // let obj = JSON.parse(str)
        // return JSON.stringify(obj, null, 4)
      } catch (err) {
        return str;
      }
    }

    /**
     * 格式化 markdown
     *
     * @static
     * @param {any} str
     * @returns
     * @memberof MixUtil
     */

  }, {
    key: 'formatMarkdown',
    value: function formatMarkdown(str) {
      str = str.trim();
      if (str === '') {
        return str;
      }
      return __WEBPACK_IMPORTED_MODULE_1_prettify_markdown___default()(str);
    }

    /**
     * 删除确认
     *
     * @static
     * @returns
     * @memberof MixUtil
     */

  }, {
    key: 'delConfirm',
    value: function delConfirm() {
      var msg = '您真的确定要删除吗？\n\n请确认！';
      return confirm(msg);
    }

    /**
     * 加密字符串
     * 
     * @static
     * @param {any} str 
     * @returns 
     * @memberof MixUtil
     */

  }, {
    key: 'bhash',
    value: function bhash(str) {
      return __WEBPACK_IMPORTED_MODULE_2_bcryptjs___default.a.hashSync(str, 8);
    }

    /**
     * 对比原字符串与经过加密的字符串是否相同
     * 
     * @static
     * @param {any} str 
     * @param {any} hash 
     * @returns 
     * @memberof MixUtil
     */

  }, {
    key: 'bcompare',
    value: function bcompare(str, hash) {
      return __WEBPACK_IMPORTED_MODULE_2_bcryptjs___default.a.compareSync(str, hash);
    }

    /**
     * 安全的 decodeURIComponent
     * 
     * @static
     * @param {any} str 
     * @returns 
     * @memberof MixUtil
     */

  }, {
    key: 'safeDecodeURIComponent',
    value: function safeDecodeURIComponent(str) {
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }

    /**
     * 解析出 params 对象
     *
     * /user/nick (/user/:name) => { name: 'nick' }
     *
     * @param String restURL /user/:name
     * @param String fullURL /user/nick
     */

  }, {
    key: 'params',
    value: function params(restURL, fullURL) {
      var _this = this;

      var params = {};
      var paramNames = [];
      var api = pathToRegexp(restURL, paramNames);
      var captures = fullURL.match(api);

      if (!captures) return {};

      captures.slice(1).forEach(function (value, i) {
        /* istanbul ignore else */
        if (paramNames[i]) {
          params[paramNames[i].name] = _this.safeDecodeURIComponent(value);
        }
      });

      return params;
    }
  }]);

  return MixUtil;
}();

/* harmony default export */ exports["a"] = MixUtil;

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("bcryptjs");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("js-beautify/js/lib/beautify");

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("koa-pino-logger");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("mkdirp");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("moment");

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("pino-multi-stream");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("prettify-markdown");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("restc");

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("uuid");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_proxies__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_proxies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_proxies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_body__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa2_validator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa2_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa2_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_onerror__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_onerror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_onerror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_jwt__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_koa_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__koa_cors__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__koa_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_path_to_regexp__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_path_to_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__middleware_utilFun__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_logger__ = __webpack_require__(10);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('process.env.NODE_ENV => ' + "development");

            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(8);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context2.next = 11;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 11;
            return builder.build();

          case 11:

            __WEBPACK_IMPORTED_MODULE_6_koa_onerror___default()(app);
            // validator(app)

            // 中间件
            app.use(__WEBPACK_IMPORTED_MODULE_5_koa2_validator___default()())
            // .use(restc.koa2())
            .use(__WEBPACK_IMPORTED_MODULE_13__utils_logger__["a" /* default */]).use(__WEBPACK_IMPORTED_MODULE_12__middleware_utilFun__["a" /* default */].util).use(__WEBPACK_IMPORTED_MODULE_8__koa_cors___default()({ credentials: true, maxAge: 2592000 })).use(__WEBPACK_IMPORTED_MODULE_7_koa_jwt___default()({ secret: __WEBPACK_IMPORTED_MODULE_11__utils_config__["a" /* default */].server.jwtSecret }).unless(function (ctx) {
              if (/^\/api/.test(ctx.path)) {
                return __WEBPACK_IMPORTED_MODULE_9_path_to_regexp___default()(['/api/u/login', '/api/u/register']).test(ctx.path);
              }
              return true;
            })).use(__WEBPACK_IMPORTED_MODULE_4_koa_body___default()({ multipart: true })).use(__WEBPACK_IMPORTED_MODULE_10__routers__["a" /* mockRouter */].routes()).use(__WEBPACK_IMPORTED_MODULE_10__routers__["a" /* mockRouter */].allowedMethods()).use(__WEBPACK_IMPORTED_MODULE_10__routers__["b" /* apiRouter */].routes()).use(__WEBPACK_IMPORTED_MODULE_10__routers__["b" /* apiRouter */].allowedMethods());

            // http status 404 改 200
            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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

            // 代理
            // app.use(proxy(/^\/api\//, {
            //     target: 'https://www.easy-mock.com/mock/5a7bac516347684a0857e274/mserver',
            //     changeOrigin: true,
            //     rewrite: path => path.replace('/api', ''),
            //     logs: true
            //   }))

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 16:
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





// import restc from 'restc'











start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map