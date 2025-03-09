const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'nodejs-expressjs-backend-boilerplate API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/parthshah04/nodejs-expressjs-backend-boilerplate/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
