const swaggerDefinition = {
  openapi: '3.1.0',
  info: {
    title: 'Express API for devCollab',
    version: '0.1.0',
    description:
      'This is a REST API application made with Express. ',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: `${process.env.APP_NAME || 'app'} Contact`,
      url: 'https://jsonplaceholder.typicode.com',
    },
  },
  servers: [
    {
      url: `http://${process.env.APP_DOMAIN ||'localhost'}:${process.env.PORT || 3000}`,
      description: 'Development server',
    },
  ],
};

module.exports = swaggerDefinition;
