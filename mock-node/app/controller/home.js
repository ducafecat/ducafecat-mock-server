'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async add() {
    // const { router, controller } = this.ctx.app;
    // router.get('/mock/59802015a1d30433d84f1a02/v1/base/permissionGroups/:id', controller.mock.index);
    this.ctx.body = 'add ok';
  }
}

module.exports = HomeController;
