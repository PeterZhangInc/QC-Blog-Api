module.exports = {
  sequelize: {
    dialect: 'mysql',
    database: 'qc_blog',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    define: {
      freezeTableName: true,
      underscored: true
    }
  }
};
