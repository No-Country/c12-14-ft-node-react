const { response, request } = require('express')
const projectRepository = require('../repositories/project')

const getProjects = async (req = request, res = response) => {
  try {
    const { limit, page, getPages } = req.query
    const data = await projectRepository.allPagination(
      +limit,
      +page,
      +getPages
    )
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
}
