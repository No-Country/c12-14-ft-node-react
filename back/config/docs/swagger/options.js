const swaggerDefinition = require('./definition');

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/routes/*.js'],
};

module.exports = options;
