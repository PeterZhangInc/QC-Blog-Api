const Service = require('egg').Service;

class ArticleService extends Service {

  //单个查询
  async findById(id) {
     return await this.ctx.model.Article.findByPk(id);
  }

  //获取列表
  async findAll() {
    let req = this.ctx.request.body
    let page = req.page || 1;
    let limit = req.limit || 15;
    let offset = (page - 1) * limit;

    return await this.ctx.model.Article.findAll({
      where: { enable: 1 },
      order: [['is_top', 'DESC'], ['id', 'DESC']],
      offset: offset,
      limit: limit
    });
  }

  // 添加文章
  async create(option) {
    //发布时间
    option['publish_at'] = option['publish_at'] || new Date();
    return await this.ctx.model.Article.create(option)
  }

  // 更新文章
  async update(id, option) {
    delete option['id'];
    return await this.ctx.model.Article.update(option, {
      where: {
        id: id
      }
    });
  }

  //禁用 或删除文章
  async delete(id) {
    return await this.ctx.model.Article.update({
      enable: 0
    }, {
      where: {
        id: id
      }
    })
  }

}

module.exports = ArticleService;
