require("../../config/mongoDB"); //--> me conecto a la DB
const User = require("../../src/models/User");
const Project = require("../../src/models/Project");

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

/////////// FUNCIONES DE BUSQUEDA /////////// --> Devuelven Documentos segun distintos criterios

//esta funcion filtra por projectId
async function getProjectById(projectStrngId) {
  try {
    const projectObjectId = new ObjectId(projectStrngId);
    const query = { _id: projectObjectId };
    const project = await Project.findOne(query);
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

//esta funcion devuelve la propiedad hidden de un proyecto

async function getHiddenStatusOfProject(projectStrngId) {
  try {
    const projectObjectId = new ObjectId(projectStrngId);
    const query = { _id: projectObjectId };
    const project = await Project.findOne(query);
    if (project) {
      return project.hidden;
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

//esta funcion devuelve true si el usuario es admin de un proyecto (se reciben ambos Id como parametros)
async function checkUserAsAdmin(userId, projectId) {
  try {
    const proyect = await getProjectById(projectId);
    if (!proyect) {
      throw new Error("proyect not found, in Function:checkUserAsAdmin ");
    }
    return proyect.admins.includes(userId);
  } catch (err) {
    console.log(err);
    return null; // si ocurre un error tira null.. no error.
  }
}

//esta funcion devuelve true si el usuario es colaborator de un proyecto (se reciben ambos Id como parametros)
async function checkUserAsCollaborator(userId, projectId) {
  try {
    const proyect = await getProjectById(projectId);
    if (!proyect) {
      throw new Error(
        "proyect not found, in Function:checkUserAsCollaborator "
      );
    }
    return proyect.collaborators.includes(userId);
  } catch (err) {
    console.log(err);
    return null; // si ocurre un error tira null.. no error.
  }
}

module.exports = {
  getProjectById,
  getHiddenStatusOfProject,
  checkUserExistenceByMail,
  getProjectsByTitle,
  getProjectsByCategory,
  getProjectsByUserAsAdmin,
  getProjectsByUserAsCollaborator,
  checkUserAsAdmin,
  checkUserAsCollaborator,
};
