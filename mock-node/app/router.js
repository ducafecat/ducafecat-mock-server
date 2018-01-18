'use strict';

// function register(app, path, method, method, fun) {
//   const { router, controller } = app;
//   router.get(path, controller.mock.index);
// }

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/home/add', controller.home.add);
  // require('./router/mock')(app);
  // router.get('/mock', controller.mock.index);
  // app.router.get(/mock/i, controller.mock.index);
  // router.get('/mock/59802015a1d30433d84f1a02/v1/base/permissionGroups/:id', controller.mock.index);
  // router.get('/mock/59802015a1d30433d84f1a02/v2/base/permissionGroups/:id', controller.mock.index);
  // router.register('/v1/base/permissionGroups/:id', [ 'get' ], controller.mock.index, { prefix: '/mock/59802015a1d30433d84f1a02' });
  router.register('/mock/59802015a1d30433d84f1a02/v1/base/permissionGroups/:id', [ 'post' ], controller.mock.index);
};
