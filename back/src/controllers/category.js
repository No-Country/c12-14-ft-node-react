const { response, request } = require('express')
const categoryRepository = require('../repositories/category')

const getCategories = async (req = request , res = response) => {
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

module.exports = {
  getCategories,
  createCategory
}