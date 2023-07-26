const { response, request } = require('express')
const projectRepository = require('../repositories/project')
const userRepository = require('../repositories/user')
const MailService = require('../services/mailer.service')
const mailService = new MailService()

const getProjects = async (req = request, res = response) => {
  try {
    const { limit, page, getPages } = req.query
    const data = await projectRepository.allPagination(+limit, +page, +getPages)
    res.send({ msg: 'data founded', ...data })
  } catch (err) {
    res.status(500).send({ msg: 'Project missing error', error: err.message })
  }
}

const getProject = async (req, res = response) => {
  const { id } = req.params

  await projectRepository
    .findById(id)
    .then((data) => {
      res.status(200).json({ msg: 'Project found', project: data })
    })
    .catch((err) => {
      res.status(500).json({ msg: 'Project find error', error: err.message })
    })
}

const createProjects = async (req, res = response) => {
  await projectRepository
    .create(req.body)
    .then((data) => {
      res
        .status(201)
        .json({ msg: 'Project successfully created', project: data })
    })
    .catch((err) => {
      res.status(500).json({ msg: 'Project error', error: err.message })
    })
}

const updateProject = async (req, res = response) => {
  const { id } = req.params
  await projectRepository
    .UpdateById(id, req.body)
    .then((data) => {
      res.status(200).json({ msg: 'Project updated', project: data })
    })
    .catch((err) => {
      res.status(500).json({ msg: 'Project update error', error: err.message })
    })
}

const deleteProject = async (req, res = response) => {
  const { id } = req.params
  await projectRepository
    .deleteById(id)
    .then((data) => {
      res.status(200).json({ msg: 'Project deleted', project: data })
    })
    .catch((err) => {
      res.status(500).json({ msg: 'Project delete error', error: err.message })
    })
}

//filtro de proyectos por categorias y tecnologias (filtra con AND-->trae el que cumpla con todo)
const getProjectsFilteredByTechAndCat = async (
  req = request,
  res = response
) => {
  try {
    const { limit, page, getPages } = req.query
    const categories = req.body.categories
    const technologies = req.body.technologies
    const data = await projectRepository.filterCrossTechAndCat({
      categories,
      technologies,
      limit,
      page,
      getPages,
    })

    res.send({ msg: 'Projects founded', ...data })
  } catch (err) {
    res.status(500).send({ msg: 'Project missing error', error: err.message })
  }
}

//filtro de proyectos por titulo
const getProjectByTitle = async (req = request, res = response) => {
  try {
    const { limit, page, getPages } = req.query

    const { title } = req.params
    const data = await projectRepository.filterByTitle(
      title,
      limit,
      page,
      getPages
    )
    res.send({ msg: 'Projects founded', ...data })
  } catch (err) {
    res.status(500).send({ msg: 'Project missing error', error: err.message })
  }
}

//filtro de proyectos por titulo
const getProjectByCategory = async (req = request, res = response) => {
  try {
    const { limit, page, getPages } = req.query
    const { category } = req.params
    const data = await projectRepository.filterByCategory(
      category,
      limit,
      page,
      getPages
    )
    res.send({ msg: 'Projects founded', ...data })
  } catch (err) {
    res.status(500).send({ msg: 'Project missing error', error: err.message })
  }
}

//filtro de proyectos por titulo
const getProjectByTechnology = async (req = request, res = response) => {
  try {
    const { limit, page, getPages } = req.query
    const { technology } = req.params
    const data = await projectRepository.filterByTechnology(
      technology,
      limit,
      page,
      getPages
    )
    res.send({ msg: 'Projects founded', ...data })
  } catch (err) {
    res.status(500).send({ msg: 'Project missing error', error: err.message })
  }
}

// esta funcion es para ruta del boton aceptar/rechazar dentro del mail enviado.
const postulantDesition = async (req = request, res = response) => {
  try {
    const { projectId, postulantId, desition } = req.query

    const data = await projectRepository.acceptRejectPostulant(
      projectId,
      postulantId,
      desition
    )
    const project = await projectRepository.findById(projectId)
    const postulant = await userRepository.findById(postulantId)

    const projectData = {
      title: project.title,
      id: projectId,
    }

    const postulantData = {
      firstname: postulant.firstName,
      lastname: postulant.lasttName,
      email: postulant.email,
    }

    if (desition) {
      await mailService.sendAcceptedConfirmation({
        projectData,
        postulantData,
      })

      //habria q mandarle un mail de que fue aceptado
      res.redirect(
        'https://previews.123rf.com/images/mahmud7/mahmud71709/mahmud7170900011/85202177-grunge-green-accepted-rubber-seal-stamp-on-white-background.jpg'
      )
    } else {

      await mailService.sendRejectedConfirmation({
        projectData,
        postulantData,
      })
      //habria que mandarle un mail que fue rechazado
      res.redirect(
        'https://media.istockphoto.com/id/533935463/es/foto/rechazado.webp?s=2048x2048&w=is&k=20&c=vT3raukmOIiVqRScTGKevsfqwcbmTKK--Qo3Ti2MW_I='
      )
    }
  } catch (err) {
    res.status(500).send({ msg: 'Project missing error', error: err.message })
  }
}

//esta funcion agrega un postulante, a un proyecto y mando el mail al dueño del proyecto

const sentMailToProjectOwner = async (req = request, res = response) => {
  try {
    const { projectId, postulantId, rol } = req.body
    const project = await projectRepository.findById(projectId)
    const adminMail = project.admins[0].email
    const postulant = await userRepository.findById(postulantId)

    const projectData = {
      projectId: projectId,
      title: project.title,
      adminMail: adminMail,
    }
    const postulantData1 = {
      id: postulantId,
      rol: rol.rol,
      senority: rol.senority,
    }
    const postulantData2 = {
      id: postulantId,
      firstName: postulant.firstName,
      lastName: postulant.lastName,
      socialsMedia: postulant.socialsMedia,
      rol: rol,
    }

    await projectRepository.addPostulant({
      projectId,
      postulantData: postulantData1,
    })
    await mailService.sendPostulationToProjectOwner({
      to: adminMail,
      projectData,
      postulantData: postulantData2,
    })

    res.send({ msg: 'Mail sended' })
  } catch (err) {
    res.status(500).send({ msg: 'Project missing error', error: err.message })
  }
}

module.exports = {
  getProjects,
  createProjects,
  getProject,
  updateProject,
  deleteProject,
  getProjectsFilteredByTechAndCat,
  getProjectByTitle,
  getProjectByCategory,
  getProjectByTechnology,
  postulantDesition,
  sentMailToProjectOwner,
}
