'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  security: {
    enable: false
  },
  static: {
    enable: true,
    package: 'egg-static',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
};
