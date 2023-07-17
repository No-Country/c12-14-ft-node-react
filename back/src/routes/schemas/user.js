const {
  checkEmailNotInUse,
  checkUserNameNotInUse
} = require('../../helpers/usersValidations')

const userCreateSchema = {
  email: {
    notEmpty:{
      errorMessage: 'El correo es requerido',
    },
    isEmail: {
      errorMessage: 'No es una dirección de correo valida',
    },
    custom: {
      options: checkEmailNotInUse,
      errorMessage: 'El email ya esta en uso',
    }
  },
  userName:{
    notEmpty:{
      errorMessage: 'El nombre de usuario es requerido',
    },
    custom:{
      options:checkUserNameNotInUse,
      errorMessage: 'El nombre de usuario ya esta en uso',

    }
  },
  password:{
    notEmpty:{
      errorMessage: 'La contraseña es requerida',
    },
  }
};

module.exports = userCreateSchema
