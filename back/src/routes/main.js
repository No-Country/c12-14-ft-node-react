const {Router} = require('express');

const router = new Router();

router.get('/', ( req, res ) => {

  res.json({msg: 'DevColab running'});

});


module.exports = router;
