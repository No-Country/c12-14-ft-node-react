console.log("ejecutando create.js");

const mongoose = require("mongoose");
const User = require("../models/User");
require("../connection");

//const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId;
//const { Schema, Types: { ObjectId } } = require('mongoose');

//funcion para crear un nuevo usuario.
async function createUser(mailLogueado,passwordHashiado,userName,description,roles,senority,stack,redesSociales,proyectosAdministrados,proyectosColaborando,fotoPath) {
  try {
    const user = new User({
      mailLogueado:mailLogueado.toLowerCase(),
      passwordHashiado,
      userName: userName.toLowerCase(),
      description: description.toLowerCase(),
      roles,
      senority,
      stack,
      redesSociales:redesSociales,
      proyectosAdministrados,
      proyectosColaborando,
      foto:fotoPath
    });
    await user.save();
    return true;
  } catch (err) {
    console.log("ha ocurrido el siguiente error en la funcion createUser.");
    console.log(err);
    return null;
  }
}

module.exports = {
  createUser,
};
