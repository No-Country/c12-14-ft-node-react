const {
  checkUserRegisteredById,
} = require('../../../helpers/usersValidations')

const updateSchema = {
  id:{
    notEmpty:{
      errorMessage: 'El id es requerido',
      bail:true,
    },
    isMongoId:  {
      errorMessage: 'No es un id valido',
      bail: true,
    },
    custom:{
      options:checkUserRegisteredById,
      errorMessage: 'El usuario no existe',
    }
  }
};

module.exports = updateSchema;
