module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Article = app.model.define('t_articles', {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    title: STRING,
    summary: STRING,
    content: TEXT,
    is_top: INTEGER,
    enable: INTEGER,
    source: STRING,
    publish_at: DATE,
    updated_at: DATE,
    created_at: DATE,
  });

  return Article;
};
