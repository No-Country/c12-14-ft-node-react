const mongoose = require("mongoose");
const express = require("express");


const app = express()


//settings
const PORT = 4000

app.get("/",(req,res)=>{
  res.send("hola mundo")
})




app.listen(PORT,()=>{console.log(`escuchando el puerto ${PORT}`)})