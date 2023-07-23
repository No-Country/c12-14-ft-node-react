console.log("prueba mailer class")
const { createUser, createProject } = require('./database/CRUD/create')
const find = require('./database/CRUD/find')
const update = require('./database/CRUD/update')
const MailerService = require('../back/src/services/mailer.service')

const mailerService = new MailerService()

const mail = {
  to: ['castellanofacundo@gmail.com'],
  subject: 'mailer class',
  html: `<b> Hola desde UVA TEAM</b> </br> </hr>
        Espero tengas un buen dia,
        saludos cordiales.`,
}

mailerService.sendMail(mail)

//creo un usuario
// createUser({
//   mail: "Facu1@gmail.com",
//   password: "jfgfdsfoudasduasviofduasoipfvuawspoifvadsuvoi",
//   userName: "Facu2lDevCollab",
//   description: "hola soy Facu, e intento hacer backend..",
//   rols: [{rol:"backend",senority:"senior"}, {rol:"frontend", senority:"semi-senior"}],
//   stack: ["javascript", "node.js", "mongoDB", "python"],
//   socialsMedia: {
//     instagram: "mi instagram",
//     linkedin: " mi linkedin",
//     github: "mi github",
//   },
//   adminProjects: ["00000000000001","00000000000002","00000000000003"],
//   collaboratorProjects: [
//     "123456789132450",
//     "123456789132451",
//     "123456789132452",
//   ],
//   photo: "milink/a/mi/foto",
// });

//creo un proyecto
// createProject({
//   title: "cuerpos de agua sanos",
//   category: "ecologico",
//   description: "El proyecto se trata de ...",
//   technologies: ["javascript", "react.js", "node.js"],
//   languaje: ["ingles", "español"],
//   requiredRols: [
//     { rol: "backend", senority: "junior", totales: 2, ocupados: 1 },
//     { rol: "backend", senority: "senior", totales: 1, ocupados: 0 },
//     { rol: "frontend", senority: "junior", totales: 1, ocupados: 0 },
//     {
//       rol: "devops",
//       senority: "semi-senior",
//       totales: 1,
//       ocupados: 0,
//     },
//   ],
//   isRequiredRolsCompleted: false,
//   status: "no inicializado",
//   timeOfProject: 5184000,
//   startDate: 1639872000,
//   progressState: 0.35,
//   connectionLinks: [
//     { name: "discord", link: "https://discord.gg/proyecto1" },
//     { name: "slack", link: "https://slack.com/proyecto1" },
//   ],
//   admins: ["312ab8948vd79ca1289"],
//   collaborators: [
//     "312c89487b9e1290",
//     "3b1294c87b9e1291",
//     "31e28c948b791292",
//     "312b89e4879c29c3",
//     "3128b9e4879129c4",
//   ],
// });

// //verifico funcionn que checkea exisitencia de usuarios
// async function verificoUsuariosPorMail() {
//   console.log("verifico usuario existente y no exisitente");
//   console.log(
//     "exisitente devuelve: ",
//     await find.checkUserExistenceByMail("facu1@gmail.com")
//   );
//   console.log(
//     "No existente devuelve: ",
//     await find.checkUserExistenceByMail("asdasd@gmail.com")
//   );
// }
// verificoUsuariosPorMail()

// async function verificoBusquedaPorTitulo() {
//   console.log("verifico por titulo");
//   console.log(
//     "'proyecto' devuelve: ",
//     await find.getProjectsByTitle('yecto')
//   );
//   // console.log(
//   //   "'juan' devuelve: ",
//   //   await find.getProjectsByTitle('juan')
//   // );
//   // const proyecto1 = await find.getProjectsByTitle('juan')
//   // console.log("proyecto1: ",proyecto1)
// }
// verificoBusquedaPorTitulo()

// async function verificoBusquedaPorCateogria() {
//   console.log("verifico por categoria");
//   console.log(
//     "'educacion' devuelve: ",
//     await find.getProjectsByCategory("educacion")
//   );
//   console.log("'' devuelve: ", await find.getProjectsByCategory(""));
// }
// verificoBusquedaPorCateogria();

// async function verificoUsuarioComoAdmin() {
//   console.log(
//     "'312ab8948vd79ca12237' devuelve: ",
//     await find.getProjectsByUserAsAdmin("312ab8948vd79ca12237")
//   );
// }
// verificoUsuarioComoAdmin();

// async function verificoUsuarioComoCollaborator() {
//   console.log(
//     "'312b89e4879c29cqwe3' devuelve: ",
//     await find.getProjectsByUserAsCollaborator('312b89e4879c29cqwe3')
//   );
// }
// verificoUsuarioComoCollaborator();

// async function buscarProyectoPorId() {
//   console.log(
//     "'64a563ba598d8c6b69092054' devuelve: ",
//     await find.getProjectById('64a563ba598d8c6b61092054')
//   );
// }
// buscarProyectoPorId()

// async function corroborarAdmin() {
//   console.log(
//     await find.checkUserAsAdmin("312ab8948vd79ca1289","64a56ac6d753a0bd17a2b4c4"),
//     await find.checkUserAsAdmin("312b89e4879c29cqwe3","64a56ac6d753a0bd17a2b4c4"),
//     await find.checkUserAsAdmin("312ab8948vd79ca1290","64a56ac6d753a0bd17a2b4c4")
//   );
// }
// corroborarAdmin()

// async function corroborarColaborador() {
//   console.log(
//     await find.checkUserAsCollaborator("312ab8948vd79ca1289","64a56ac6d753a0bd17a2b4c4"),
//     await find.checkUserAsCollaborator("312b89e4879c29cqwe3","64a56ac6d753a0bd17a2b4c4"),
//     await find.checkUserAsCollaborator("312ab8948vd79ca1290","64a56ac6d753a0bd17a2b4c4")
//   );
// }

// corroborarColaborador()

// async function AgregarAdminAProyecto(){
//   const projectId = "64a56ade0c5e82017b3cd89f"
//   const userAdminId = "312ab8948vd79ca12237"
//   const userToAddId = "sergey"

//   console.log(
//     await update.addAdminToProject(projectId, userAdminId,userToAddId)
//   )
// }

// AgregarAdminAProyecto()

// async function AgregarCollaboratorAProyecto() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const userToAddId = "facu";

//   console.log(
//     await update.addCollaboratorToProject(projectId, userAdminId, userToAddId)
//   );
// }

// AgregarCollaboratorAProyecto();

// async function AgregarTecnologiaAlProyecto() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const Tech = "PAint";

//   console.log(await update.addTechToProject(projectId, userAdminId, Tech));
// }

// AgregarTecnologiaAlProyecto();

// async function AgregarIdiomaAlProyecto() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const languaje = "ArAmEo";

//   console.log(await update.addLanguajeToProject(projectId, userAdminId, languaje));
// }

// AgregarIdiomaAlProyecto();

// AgregarTecnologiaAlProyecto();

// async function setearStatusProyecto() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const status = "Arrancando..";

//   console.log(await update.setStatusProject(projectId, userAdminId, status));
// }

// setearStatusProyecto();

// async function setearTiempoProyecto() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const status = "5000";

//   console.log(await update.setTimeOfProject(projectId, userAdminId, status));
// }

// setearTiempoProyecto();

// async function setearFechaInicio() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const status = "150000";

//   console.log(await update.setStartDateOfProject(projectId, userAdminId, status));
// }

// setearFechaInicio();

// async function setearProgresso() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const progress = "0.78";

//   console.log(await update.setProgressOfProject(projectId, userAdminId, progress));
// }

// setearProgresso();

// async function AgregarLikDeConeccionProyecto() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const nameLink = "github";
//   const urlLink = "https://github/facu/234135134123412"

//   console.log(
//     await update.addConecctionLinkToProject(projectId, userAdminId, nameLink,urlLink)
//   );
// }

// AgregarLikDeConeccionProyecto();

// async function AgregarroRequerido() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const rol = "dev dios";
//   const senority = "dios";
//   const quantityRequired = 1;

//   console.log(
//     await update.addRequiredRolToProject(
//       projectId,
//       userAdminId,
//       rol,
//       senority,
//       quantityRequired,

//     )
//   );
// }
// AgregarroRequerido();

// async function setearTitulo() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const title = "CUeRpos De Agua deContminados (rios,lagos,lagunas)";

//   console.log(await update.setTitleProject(projectId, userAdminId, title));
// }
// setearTitulo()

// async function setearCategoria() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const category = "hidraulica";

//   console.log(await update.setCategoryProject(projectId, userAdminId, category));
// }
// setearCategoria()

// async function setearDescription() {
//   const projectId = "64a56ade0c5e82017b3cd89f";
//   const userAdminId = "312ab8948vd79ca12237";
//   const description = "este es un gran proyecto que atenta a mejorar la calidad del agua...";

//   console.log(await update.setDescriptionProject(projectId, userAdminId, description));
// }
// setearDescription()

// async function setPasswordUsuario() {
//   const userId = "64a4be1a3e7bce02d30430cf";
//   const newPass = "Nuevo Password actualizado";

//   console.log(await update.setUserPassword(userId, newPass));
// }
// setPasswordUsuario()

// async function setdescripcionUsuario() {
//   const userId = "64a4be1a3e7bce02d30430cf";
//   const description = "Esta es mi descripcion actualizada";

//   console.log(await update.setUserDescription(userId, description));
// }
// setdescripcionUsuario()

// async function agregarStackAlUsuario() {
//   const userId = "64a4be1a3e7bce02d30430cf";
//   const stack = "paint";

//   console.log(await update.addStackToUser(userId, stack));
// }

// agregarStackAlUsuario();

// async function agregarProjectoAlAminProjectDelUsuario() {
//   const userId = "64a4be1a3e7bce02d30430cf";
//   const projectId = "64a4be1a3e7bce02d30430d0";

//   console.log(await update.addProjectToUserAdminProjects(userId, projectId));
// }

// agregarProjectoAlAminProjectDelUsuario();

// async function agregarProjectoAlCollaboratorProjectDelUsuario() {
//   const userId = "64a4be1a3e7bce02d30430cf";
//   const projectId = "el id de unprojecto q estoy colaborando.";

//   console.log(await update.addProjectToUserCollaboratorProjects(userId, projectId));
// }
// agregarProjectoAlCollaboratorProjectDelUsuario()

// async function setearNuevaUrlImagenUsuario() {
//   const userId = "64a4be1a3e7bce02d30430cf";
//   const ImageUrl = "esta/es/una/nueva/ruta/de/imagen";

//   console.log(await update.setPhotoToUser(userId, ImageUrl ));
// }
// setearNuevaUrlImagenUsuario()

// async function actualizarUltimaConeccionUsuario() {
//   const userId = "64a4be1a3e7bce02d30430cf";
//   console.log(await update.updateLastConnectionToUser(userId));
// }
// actualizarUltimaConeccionUsuario()
