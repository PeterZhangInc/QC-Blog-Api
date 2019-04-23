'use strict';

const bcrypt = require('bcrypt');
const Controller = require('egg').Controller;

class HomeController extends Controller {

  //登录
  async login() {
    const { ctx, app} = this
    const rule = {
      username: 'string',
      password: 'string'
    }

    ctx.validate(rule, ctx.request.body)
    const req  = ctx.request.body;
    let username = req.username
    let password = req.password

    let user = null
    if ((/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(username))) {
      user = await ctx.service.admin.findByMobile(username);
    } else {
      user = await ctx.service.admin.findByUsername(username);
    }

    if (user && bcrypt.compareSync(password, user.password)) {
      ctx.status = 200;
      ctx.body = app.jwt.sign(user.toJSON(), app.config.jwt.secret)
    } else {
      ctx.status = 401;
      ctx.body = '用户名或密码错误';
    }
  }
}

module.exports = HomeController;
