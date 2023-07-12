const {Router} = require('express');
const {
  getCategories,
  createCategory
} = require('../controllers/category');

const router = new Router();


router.get('/' , getCategories);
router.post('/', createCategory);

module.exports = router;