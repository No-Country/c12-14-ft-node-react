const projectRepository = require('../repositories/project')

const projectId = "64b04ca3a3dc481ff029a077"
const postulantId = "9041909123901290"
const postulantRol = "frontend"
const postulantSenority ="jr"
const desition = "aceptar"


projectRepository.acceptRejectPostulant(projectId,postulantId,postulantRol,postulantSenority,desition)  