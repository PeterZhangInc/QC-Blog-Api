'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/login', controller.home.login);

  router.resources('admin', '/api/admin', controller.admin);
  router.resources('article', '/api/article', controller.article);
};
