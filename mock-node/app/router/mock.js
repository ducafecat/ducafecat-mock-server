'use strict';

module.exports = app => {
    const { router, controller } = app;
    router.get('/mock/59802015a1d30433d84f1a02/v1/base/permissionGroups/:id', controller.mock.index);
};
