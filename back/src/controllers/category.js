const { response, request } = require('express')
const categoryRepository = require('../repositories/category')

const getCategories = async (req = request, res = response) => {
  await categoryRepository
    .all()
    .then((data) => {
      res.status(200).json({ msg: 'Category found', category: data })
    })
    .catch((err) => {
      res.status(500).json({ msg: 'Category find error', error: err.message })
    })
}

const createCategory = async (req, res = response) => {
  await categoryRepository
    .create(req.body)
    .then((data) => {
      res.status(201).json({ msg: 'Category successfully created', user: data })
    })
    .catch((err) => {
      res.status(500).json({ msg: 'Category error', error: err.message })
    })
}

const updateCategory = async (req = request, res = response) => {
  try {
    const { id } = req.params
    const newCategory = await categoryRepository.UpdateById(id, req.body)
    if(newCategory){
      res.status(200).send({ msg: 'Category Updated', Category: newCategory })
    } else {
      res.status(404).send({ msg: 'Category Not Found'})
    }
    
  } catch (err) {
    res.status(500).send({ msg: 'Category update error', error: err.message })
  }
}

//para mi el deleteById, deberia devolver null o false si no encuentra el objeto. pq si no encuentra nada devuelve true y el taskState queda true, cuando no hizo nada.
const deleteCategory = async (req = request, res = response) => {
  try {
    const taskState = await categoryRepository.deleteById(req.params.id)
    res
      .status(200)
      .send({ msg: 'Category deleted', 'Task completed': taskState })
  } catch (err) {
    res.status
  }
}

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
}
