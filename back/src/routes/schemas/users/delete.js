const {
  checkUserRegisteredById,
} = require('../../../helpers/usersValidations')

const deleteSchema = {
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

module.exports = deleteSchema;
