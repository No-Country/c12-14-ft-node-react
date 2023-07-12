const {Router} = require('express');
const {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory
} = require('../controllers/category');

const router = new Router();


router.get('/' , getCategories);
router.post('/', createCategory);
router.delete('/:id', deleteCategory);
router.patch('/:id', updateCategory);

module.exports = router;