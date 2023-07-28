const express = require('express')
const cors = require('cors')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerOptions = require('../docs/swagger/options')

const mainRoutes = require('../../src/routes/main')
const userRoutes = require('../../src/routes/users')
const projectRoutes = require('../../src/routes/project')
const authRoutes = require('../../src/routes/auth.js')
const categoryRoutes = require('../../src/routes/category')
const stackRoutes = require('../../src/routes/stack')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middlewares()
    this.routes()
  }

  routes() {
    this.app.use('/', mainRoutes)
    this.app.use('/api', mainRoutes)
    this.app.use('/api/users', userRoutes)
    this.app.use('/api/auth', authRoutes)
    this.app.use('/api/categories', categoryRoutes)
    this.app.use('/api/projects', projectRoutes)
    this.app.use('/api/stacks', stackRoutes)

    this.app.use(
      '/api/doc',
      swaggerUi.serve,
      swaggerUi.setup(swaggerJSDoc(swaggerOptions))
    )
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `[server-info]:Server up at http://${process.env.APP_DOMAIN}:${this.port}`
      )
    })
  }
}

module.exports = Server
