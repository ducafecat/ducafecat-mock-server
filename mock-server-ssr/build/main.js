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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(30);
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  appName: 'mockServer',
  appMiniName: 'M',
  whiteList: ['/login'],
  apiBaseURL: '/api',
  proxy: {
    target: 'https://www.easy-mock.com/mock/5a7bac516347684a0857e274/mserver',
    changeOrigin: true,
    rewrite: function rewrite(path) {
      return path.replace('/api', '');
    },
    logs: true
  },
  server: {
    mongodb: 'mongodb://localhost/mock-server',
    jwt: {
      expire: '14 days',
      secret: 'shared-secret'
    }
  }
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__group__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_group__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mock_count__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_group__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_project__ = __webpack_require__(22);
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(4);
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
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_restc__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_restc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_restc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middleware_utilFun__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return mockRouter; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return apiRouter; });





// import mock from './../controllers/mock'

// import c2k from 'koa2-connect'
// import proxy from 'http-proxy-middleware'
// import cfg from './../../utils/config'

var mockRouter = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a({ prefix: '/mock' }).all('*', __WEBPACK_IMPORTED_MODULE_3__middleware_utilFun__["a" /* default */].mockFilter, __WEBPACK_IMPORTED_MODULE_1_restc___default.a.koa2(), __WEBPACK_IMPORTED_MODULE_2__controllers__["a" /* mock */].getMockAPI);

var apiRouter = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a({ prefix: '/api' }).get('/u/register', __WEBPACK_IMPORTED_MODULE_2__controllers__["b" /* user */].register);



/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa-body");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa-proxies");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__user__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__mock__["a"]; });
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:19:27 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:19:27 
 */






/***/ },
/* 13 */
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

/* harmony default export */ exports["a"] = mock;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proxys__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_mix__ = __webpack_require__(25);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 13:40:55 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-03-06 14:25:45
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
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var name, password, user;
        return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = 'hans';
                password = '12312321321';
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_1__proxys__["a" /* UserProxy */].newAndSave(name, password);

              case 4:
                user = _context.sent;

                ctx.body = ctx.util.resuccess();

              case 6:
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
  }]);

  return UserController;
}();

/* harmony default export */ exports["a"] = UserController;

/***/ },
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user__["a"]; });
/* unused harmony reexport ProjectProxy */
/*
 * @Author: hans.taozhiwei 
 * @Date: 2018-03-06 14:19:16 
 * @Last Modified by:   hans.taozhiwei 
 * @Last Modified time: 2018-03-06 14:19:16 
 */






/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(5);


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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_beautify_js_lib_beautify__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_beautify_js_lib_beautify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_beautify_js_lib_beautify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prettify_markdown__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prettify_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prettify_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcryptjs__ = __webpack_require__(26);
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

/* unused harmony default export */ var _unused_webpack_default_export = MixUtil;

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("bcryptjs");

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("js-beautify/js/lib/beautify");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("path-to-regexp");

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("prettify-markdown");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("restc");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_proxies__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_proxies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_proxies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_body__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__middleware_utilFun__ = __webpack_require__(2);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__Users_hans_Documents_project_MockServer_mock_server_ssr_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(6);

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

            // 中间件
            app.use(__WEBPACK_IMPORTED_MODULE_7__middleware_utilFun__["a" /* default */].util).use(__WEBPACK_IMPORTED_MODULE_4_koa_body___default()({ multipart: true })).use(__WEBPACK_IMPORTED_MODULE_5__routers__["a" /* mockRouter */].routes()).use(__WEBPACK_IMPORTED_MODULE_5__routers__["a" /* mockRouter */].allowedMethods()).use(__WEBPACK_IMPORTED_MODULE_5__routers__["b" /* apiRouter */].routes()).use(__WEBPACK_IMPORTED_MODULE_5__routers__["b" /* apiRouter */].allowedMethods());

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
            // app.use(proxy(/^\/api\//, cfg.proxy))

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

/***/ }
/******/ ]);
//# sourceMappingURL=main.map