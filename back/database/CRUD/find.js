require("../../config/mongoDB"); //--> me conecto a la DB
const User = require("../models/User");
const Project = require("../models/Project");

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

/////////// FUNCIONES DE BUSQUEDA /////////// devuelven documentos

//esta funcion filtra por projectId
async function getProjectById(projectStrngId) {
  try {
    console.log("hola");
    const projectObjectId = await ObjectId(projectStrngId);
    console.log(projectObjectId)
    console.log(projectObjectId);
    const query = { title: { _id: projectObjectId } };
    const projects = await Project.findOne(query);
    if (project) {
      return project;
    } else {
      return null; //--> termina devolviendo un [], en lugar de null, no se pq..
    }
  } catch (err) {
    return false; // si ocurre un error tira false.. no error.
  }
}

//esta funcion filtra por palabras en los titulos de los Projects
async function getProjectsByTitle(titleFounded) {
  try {
    const query = { title: { $regex: `.*${titleFounded}.*`, $options: "i" } };
    const projects = await Project.find(query);
    if (projects) {
      return projects;
    } else {
      return null; //--> termina devolviendo un [], en lugar de null, no se pq..
    }
  } catch (err) {
    return false; // si ocurre un error tira false.. no error.
  }
}

//esta funcion filtra por categoria
async function getProjectsByCategory(category) {
  try {
    const query = { category: { $regex: `${category}`, $options: "i" } };
    const projects = await Project.find(query);
    if (projects) {
      return projects;
    } else {
      return null; //--> termina devolviendo un [], en lugar de null, no se pq..
    }
  } catch (err) {
    return false; // si ocurre un error tira false.. no error.
  }
}

////esta funcion filtra los Projects donde el userId, se encuentra en los admins.
async function getProjectsByUserAsAdmin(userStringID) {
  try {
    const query = { admins: { $in: [userStringID] } };
    const project = await Project.find(query);
    if (project) {
      return project;
    } else {
      return null; //--> termina devolviendo un [], en lugar de null, no se pq..
    }
  } catch (err) {
    return null; // si ocurre un error tira null.. no error.
  }
}

////esta funcion filtra los Projects donde el userId, se encuentra en los collaborators
async function getProjectsByUserAsCollaborator(userStringID) {
  try {
    const query = { collaborators: { $in: [userStringID] } };
    const project = await Project.find(query);
    if (project) {
      return project;
    } else {
      return null; //--> termina devolviendo un [], en lugar de null, no se pq..
    }
  } catch (err) {
    return null; // si ocurre un error tira null.. no error.
  }
}

/////////// FUNCIONES DE CHECKEO /////////// devuelven true/false segun corresponda

//esta funcion devuelve true si el usuario existe
async function checkUserExistenceByMail(mail) {
  try {
    const user = await User.findOne({ mail: mail.toLowerCase() });
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return null; // si ocurre un error tira null.. no error.
  }
}

module.exports = {
  getProjectById,
  checkUserExistenceByMail,
  getProjectsByTitle,
  getProjectsByCategory,
  getProjectsByUserAsAdmin,
  getProjectsByUserAsCollaborator,
};
