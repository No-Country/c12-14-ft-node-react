const {Router} = require('express');
const {
  getStacks,
  createStack,
  updateStack,
  deleteStack
} = require('../controllers/stack');

const router = new Router();


router.get('/' , getStacks);
router.post('/', createStack);
router.patch('/:id',updateStack)
router.delete('/:id', deleteStack);

module.exports = router;