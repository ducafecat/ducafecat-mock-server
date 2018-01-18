'use strict';

const Controller = require('egg').Controller;

class MockController extends Controller {
  async index() {
    this.ctx.body = {
      '_matchedRoute': this.ctx._matchedRoute
    };
  }
}

module.exports = MockController;
