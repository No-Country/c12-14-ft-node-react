const { Router } = require('express')
const {
  getStacks,
  createStack,
  updateStack,
  deleteStack,
  lookStack,
} = require('../controllers/stack')

const router = new Router()

router.get('/', getStacks)
router.get('/:stack', lookStack)
router.post('/', createStack) 
router.patch('/:id', updateStack)
router.delete('/:id', deleteStack)

module.exports = router
