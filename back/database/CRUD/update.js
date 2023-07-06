require("../../config/mongoDB"); //--> me conecto a la DB

const User = require("../models/User");
const Project = require("../models/Project");
const find = require("./find"); // -->importo el modulo find para

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

/////////// FUNCIONES QUE MODOFICAN DOCUMENTOS PROJECTS ///////////

//agrego un usuario como admin de un proyecto
async function addAdminToProject(projectId, userAdminId, userToAddId) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }

    const update = { $push: { admins: userToAddId } };
    const result = await Project.updateOne({ _id: projectId }, update);

    console.log("result: ", result);
    if (result.modifiedCount > 0) {
      return true; // El admin fue agregado exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//agrego un usuario como Colaborador de un proyecto
async function addCollaboratorToProject(projectId, userAdminId, userToAddId) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }

    const update = { $push: { collaborators: userToAddId } };
    const result = await Project.updateOne({ _id: projectId }, update);

    if (result.modifiedCount > 0) {
      return true; // El Colaborador fue agregado exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//agrego una tecnologia a un proyecto
async function addTechToProject(projectId, userAdminId, technologyToAdd) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }

    const update = { $push: { technologies: technologyToAdd.toLowerCase() } };
    const result = await Project.updateOne({ _id: projectId }, update);

    if (result.modifiedCount > 0) {
      return true; // la Tecnologia se agrego exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//agrego una lenguaje(idioma) a un proyecto
async function addLanguajeToProject(projectId, userAdminId, languajeToAdd) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }

    const update = { $push: { languaje: languajeToAdd.toLowerCase() } };
    const result = await Project.updateOne({ _id: projectId }, update);

    console.log("result: ", result);
    if (result.modifiedCount > 0) {
      return true; // la Tecnologia se agrego exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//agrego un link a connectionLinks
async function addConecctionLinkToProject(
  projectId,
  userAdminId,
  nameLink,
  urlLink
) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }
    const name = nameLink.toLowerCase();
    const url = urlLink.toLowerCase();
    const linkToAdd = {};
    linkToAdd["name"] = name;
    linkToAdd["link"] = url;
    console.log(linkToAdd);
    const update = { $push: { connectionLinks: linkToAdd } };
    const result = await Project.updateOne({ _id: projectId }, update);

    if (result.modifiedCount > 0) {
      return true; // el link de conneccion se agrego exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//agrego un link a connectionLinks
async function addRequiredRolToProject(
  projectId,
  userAdminId,
  rolToaAdd,
  senorityToAdd,
  quantityRequiredToAdd,
  quantityOccupiedToAdd = 0
) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }
    const rol = rolToaAdd.toLowerCase();
    const senority = senorityToAdd.toLowerCase();
    const quantityRequired = +quantityRequiredToAdd;
    const quantityOccupied = +quantityOccupiedToAdd;
    const positionToAdd = {};
    positionToAdd["rol"] = rol;
    positionToAdd["senority"] = senority;
    positionToAdd["quantityRequired"] = quantityRequired;
    positionToAdd["quantityOccupied"] = quantityOccupied;
    console.log(positionToAdd);
    const update = { $push: { requiredRols: positionToAdd } };
    const result = await Project.updateOne({ _id: projectId }, update);

    if (result.modifiedCount > 0) {
      return true; // el rol requerido se agrego exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//Seteo el status del proyecto
async function setStatusProject(projectId, userAdminId, status) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }

    const update = { $set: { status: status.toLowerCase() } };
    const result = await Project.updateOne({ _id: projectId }, update);

    if (result.modifiedCount > 0) {
      return true; // la Tecnologia se agrego exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//Seteo el title del proyecto
async function setTitleProject(projectId, userAdminId, title) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }

    const update = { $set: { title: title.toLowerCase() } };
    const result = await Project.updateOne({ _id: projectId }, update);

    if (result.modifiedCount > 0) {
      return true; // El titulo se modifico exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//Seteo la categoria del proyecto
async function setCategoryProject(projectId, userAdminId, category) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }

    const update = { $set: { category: category.toLowerCase() } };
    const result = await Project.updateOne({ _id: projectId }, update);

    if (result.modifiedCount > 0) {
      return true; // La categoria se modifico exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//Seteo la description del proyecto
async function setDescriptionProject(projectId, userAdminId, description) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }

    const update = { $set: { description: description.toLowerCase() } };
    const result = await Project.updateOne({ _id: projectId }, update);

    if (result.modifiedCount > 0) {
      return true; // La categoria se modifico exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//Seteo el tiempo duracion estimado del proyecto
async function setTimeOfProject(projectId, userAdminId, time) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }

    const update = { $set: { timeOfProject: +time } };
    const result = await Project.updateOne({ _id: projectId }, update);

    if (result.modifiedCount > 0) {
      return true; // la Tecnologia se agrego exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//Seteo la fecha de comienzo (tiempo Unix) lo guardo como tipo number
async function setStartDateOfProject(projectId, userAdminId, startDateToSet) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }

    const update = { $set: { startDate: +startDateToSet } };
    const result = await Project.updateOne({ _id: projectId }, update);

    if (result.modifiedCount > 0) {
      return true; // la Tecnologia se agrego exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

//Seteo el progreso del proyecto (0<= progreso <= 1) lo guardo como tipo number
async function setProgressOfProject(projectId, userAdminId, currentProgress) {
  const progress = +currentProgress;
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }
    if (progress >= 0 && progress <= 1) {
      const update = { $set: { progressState: progress } };
      const result = await Project.updateOne({ _id: projectId }, update);

      if (result.modifiedCount > 0) {
        return true; // la Tecnologia se agrego exitosamente
      } else {
        return false; // No se encontró el proyecto o no se realizó ninguna modificación
      }
    } else {
      throw new Erro("el tiempo tiene que se entre 0 y 1 ");
    }
  } catch (err) {
    console.log(err);
  }
}

//armo un toogle para Hidden
async function toggleHiddenOfProject(projectId, userAdminId) {
  try {
    const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
    if (!adminValidation) {
      throw new Error("Error en la validacion del Admin");
    }
    const hiddenCurrent = await find.getHiddenStatusOfProject(projectId);
    const update = { $set: { hidden: !hiddenCurrent } };
    const result = await Project.updateOne({ _id: projectId }, update);

    if (result.modifiedCount > 0) {
      return true; // la Tecnologia se agrego exitosamente
    } else {
      return false; // No se encontró el proyecto o no se realizó ninguna modificación
    }
  } catch (err) {
    console.log(err);
  }
}

// /////////// FUNCIONES QUE MODOFICAN DOCUMENTOS USER /////////
// //Seteo el title del proyecto
// async function setUserPassword(usertId, oldPass, newPass) {
//   try {
//     const adminValidation = await find.checkUserAsAdmin(userAdminId, projectId);
//     if (!adminValidation) {
//       throw new Error("Error en la validacion del Admin");
//     }

//     const update = { $set: { title: title.toLowerCase() } };
//     const result = await Project.updateOne({ _id: projectId }, update);

//     if (result.modifiedCount > 0) {
//       return true; // El titulo se modifico exitosamente
//     } else {
//       return false; // No se encontró el proyecto o no se realizó ninguna modificación
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

module.exports = {
  addAdminToProject,
  addCollaboratorToProject,
  addTechToProject,
  addLanguajeToProject,
  setStatusProject,
  setTimeOfProject,
  setStartDateOfProject,
  setProgressOfProject,
  toggleHiddenOfProject,
  addConecctionLinkToProject,
  addRequiredRolToProject,
  setTitleProject,
  setCategoryProject,
  setDescriptionProject,
};
