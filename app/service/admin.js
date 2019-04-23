const bcrypt = require('bcrypt');
const Service = require('egg').Service;

class AdminService extends Service {

  async create() {
    const param = {
      username: 'peterzhang',
      password: bcrypt.hashSync('051028', 10),
      mobile: '19939295875'
    }
    return await this.ctx.model.Admin.create(param);
  }

  async findByUsername(username) {
    return await this.ctx.model.Admin.findOne({
      where: {
        username: username
      }
    })
  }

  async findByMobile(mobile) {
    return await this.ctx.model.Admin.findOne({
      where: {
        mobile: mobile
      }
    })
  }
}

module.exports = AdminService;
