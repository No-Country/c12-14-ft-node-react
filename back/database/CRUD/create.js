console.log("ejecutando create.js");

const mongoose = require("mongoose");
const User = require("../models/User");
const Project = require("../models/Project");
require("../../config/mongoDB");

//const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId;
//const { Schema, Types: { ObjectId } } = require('mongoose');

//funcion para crear un nuevo usuario.
async function createUser({
  mail,
  password,
  userName,
  description,
  rols,
  stack,
  socialsMedia,
  adminProjects,
  collaboratorProjects,
  photo,
}) {
  try {
    const user = new User({
      mail: mail.toLowerCase(),
      password,
      userName: userName.toLowerCase(),
      description: description.toLowerCase(),
      rols,
      stack,
      socialsMedia: socialsMedia,
      adminProjects,
      collaboratorProjects,
      photo,
    });
    await user.save();
    return true;
  } catch (err) {
    console.log("ha ocurrido el siguiente error en la funcion createUser.");
    console.log(err);
    return null;
  }
}

//funcion para crear un nuevo proyecto.
async function createProject({
  title,
  category,
  description,
  technologies,
  languaje,
  requiredRols,
  isRequiredRolsCompleted,
  status,
  timeOfProject,
  startDate,
  progressState,
  connectionLinks,
  admins,
  collaborators,
}) {
  try {
    const project = new Project({
      title: title.toLowerCase(),
      category,
      description,
      technologies,
      languaje,
      requiredRols,
      isRequiredRolsCompleted,
      status,
      timeOfProject,
      startDate,
      progressState,
      connectionLinks,
      admins,
      collaborators,
    });
    await project.save();
    return true;
  } catch (err) {
    console.log("ha ocurrido el siguiente error en la funcion createUser.");
    console.log(err);
    return null;
  }
}

module.exports = {
  createUser,
  createProject,
};
