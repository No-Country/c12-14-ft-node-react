const swaggerDefinition = {
  openapi: '3.1.0',
  info: {
    title: `Express API for ${process.env.APP_NAME}`,
    version: '0.1.0',
    description:
      'This is a REST API application made with Express. ',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: `${process.env.APP_NAME || 'app'} Team Contact`,
      url: `${process.env.APP_CONTACT} || https://github.com/No-Country/c12-14-ft-node-react`,
    },
  },
  servers: [
    {
      url: `http://${process.env.APP_DOMAIN ||'localhost'}:${process.env.PORT || 3000}`,
      description: `${process.env.APP_DOMAIN } Server`,
    },
  ],
  components:{
    securitySchemes:{
      bearerAuth:{
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  },
  security:[{
    bearerAuth: []
  }],
};

module.exports = swaggerDefinition;
