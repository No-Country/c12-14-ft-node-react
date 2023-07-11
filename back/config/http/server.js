const express = require("express");
const cors = require("cors");

const mainRoutes = require("../../src/routes/main");
const userRoutes = require("../../src/routes/users");
const projectRoutes = require("../../src/routes/project");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use("/", mainRoutes);
    this.app.use("/api", mainRoutes);
    this.app.use("/api/users", userRoutes);
    this.app.use("/api/projects", projectRoutes);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`[server-info]:Server up at http://127.0.0.1:${this.port}`);
    });
  }
}

module.exports = Server;
