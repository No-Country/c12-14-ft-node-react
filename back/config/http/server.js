const express = require("express");
const mainRoutes = require('../../src/routes/main');
const cors = require('cors');

class Server{

  constructor() {

    this.app = express();
    this.port = process.env.PORT || 3000;
    this.midelwares();
    this.routes();


  }
  routes(){


    this.app.use('/', mainRoutes);
  }

  midelwares() {
    this.app.use(cors());

    // this.app.use(express.json());

  }
  listen(){

    this.app.listen(  this.port, ()=> {
      console.log(`[server-info]:Server up at http://127.0.0.1:${this.port}`)
    });
  }


}

module.exports= Server;
