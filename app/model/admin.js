module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Admin = app.model.define('t_admin', {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    username: STRING,
    password: STRING,
    mobile: STRING,
    created_at: DATE,
    updated_at: DATE,
  });

  return Admin;
};
