'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {

  // 创建
  async create() {
    const { ctx } = this;
    ctx.body = await ctx.service.admin.create();
    ctx.status = 201;
  }


}

module.exports = AdminController;
