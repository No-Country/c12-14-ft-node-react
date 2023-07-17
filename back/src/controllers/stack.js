const { response, request } = require('express')
const stackRepository = require('../repositories/stack')

const getStacks = async (req = request, res = response) => {
  await stackRepository
    .all()
    .then((data) => {
      res.status(200).json({ msg: 'Stack found', stack: data })
    })
    .catch((err) => {
      res.status(500).json({ msg: 'Stack find error', error: err.message })
    })
}

const createStack = async (req = request, res = response) => {
  await stackRepository
    .create(req.body)
    .then((data) => {
      res.status(201).json({ msg: 'Stack successfully created', user: data })
    })
    .catch((err) => {
      res.status(500).json({ msg: 'Stack error', error: err.message })
    })
}

const updateStack = async (req = request, res = response) => {
  try {
    const { id } = req.params
    const newStack = await stackRepository.UpdateById(id, req.body)
    if (newStack) {
      res.status(200).send({ msg: 'Stack Updated', Stack: newStack })
    } else {
      res.status(404).send({ msg: 'Stack Not Found' })
    }
  } catch (err) {
    res.status(500).send({ msg: 'Stack update error', error: err.message })
  }
}

const deleteStack = async (req = request, res = response) => {
  try {
    const taskState = await stackRepository.deleteById(req.params.id)
    res
      .status(200)
      .send({ msg: 'Category deleted', 'Task completed': taskState })
  } catch (err) {
    res.status(500).send({ msg: 'Stack delete error', error: err.message })
  }
}

const lookStack = async (req = request, res = response) => {
  try {
    const stackLooked = req.params.stack
    const stacks = await stackRepository.filterSubstring(stackLooked)
    res.send({ msg: 'Stacks founded', stacks: stacks })
  } catch (err) {
    res.status(500).send({ msg: 'Stack missing error', error: err.message })
  }
}

module.exports = {
  getStacks,
  createStack,
  updateStack,
  deleteStack,
  lookStack,
}
