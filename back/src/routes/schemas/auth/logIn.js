// const {
//   checkEmailRegistered,
//   checkUserNameRegistered
// } = require('../../../helpers/usersValidations')

const logInSchema = {
  // email: {
  //   notEmpty:{
  //     errorMessage: 'El correo es requerido',
  //   },
  //   isEmail: {
  //     errorMessage: 'No es una dirección de correo valida',
  //   },
  //   custom: {
  //     options: checkEmailRegistered,
  //     errorMessage: 'El email ya esta en uso',
  //   }
  // },
  // userName:{
  //   notEmpty:{
  //     errorMessage: 'El nombre de usuario es requerido',
  //   },
  //   custom:{
  //     options:checkUserNameRegistered,
  //     errorMessage: 'El nombre de usuario ya esta en uso',
  //
  //   }
  // },
  password:{
    notEmpty:{
      errorMessage: 'La contraseña es requerida',
    },
  }
};

module.exports = logInSchema;
