const {Router} = require('express');
const {
  getProjects,
  getProject,
  setProjects,
  updateProject,
  deleteProject
} = require('../controllers/project');

const router = new Router();


router.get('/' , getProjects);
router.get('/:id', getProject);
router.post('/', setProjects);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);


module.exports = router;
