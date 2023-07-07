const Express = require("express");

class Server{

  constructor() {

    this.app = Express();
    this.port = process.env.PORT || 3000;
    // this.routes =


  }

  getApp(){
    return this.app;
  }

  listen(){

    this.app.listen( ()=> {
      console.log(`[server-info]:Server up at http://127.0.0.1:${this.port}`)
    });
  }


}

module.exports= Server;
