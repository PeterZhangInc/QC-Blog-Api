'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {

  async index() {
    const {ctx} = this;
    ctx.body = await ctx.service.article.findAll()
  }


  async create() {
    const { ctx } = this;
    const rule = {
      title: 'string',
      summary: 'string',
      content: 'string'
    };

    ctx.validate(rule, ctx.request.body);
    ctx.body = await ctx.service.article.create(ctx.request.body);
    ctx.status = 201;
  }

  async update() {
    const { ctx } = this;
    console.log(ctx.params)
    const rule = {
      title: 'string',
      summary: 'string',
      content: 'string'
    };

    ctx.validate(rule, ctx.request.body);
    ctx.body = await ctx.service.article.update(ctx.params.id, ctx.request.body)
    ctx.status = 204;
  }

  async show() {
    const { ctx } = this;
    ctx.body = await ctx.service.article.findById(ctx.params.id);
  }

  async destroy() {
    const { ctx } = this;
    ctx.body = await ctx.service.article.delete(ctx.params.id);
  }
}

module.exports = ArticleController;
