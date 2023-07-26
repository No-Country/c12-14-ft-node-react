const { Router } = require('express')
const {
  getProjects,
  getProject,
  createProjects,
  updateProject,
  deleteProject,
  getProjectsFilteredByTechAndCat,
  getProjectByTitle,
  getProjectByCategory,
  getProjectByTechnology,
  postulantDesition,
  sentMailToProjectOwner
  
} = require('../controllers/project')

const router = new Router()

router.get('/', getProjects)
router.get('/:id', getProject)
router.get('/filter/categories-stacks', getProjectsFilteredByTechAndCat) // --> enviar un body como este -> {"categories":["Ecologia","Sociales"],"technologies":["javascript","figma"]}
router.get('/filter/title/:title', getProjectByTitle)
router.get('/filter/category/:category', getProjectByCategory)
router.get('/filter/technology/:technology', getProjectByTechnology)

//ruta para aceptar/rechazar postulantes
router.get('/postulant/accept-reject', postulantDesition)

//
router.patch('/postulant', sentMailToProjectOwner)
router.post('/', createProjects)
router.patch('/:id', updateProject)
router.delete('/:id', deleteProject)

module.exports = router
