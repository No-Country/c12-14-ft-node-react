
const logInGoogleSchema = {
  token:{
    notEmpty:{
      errorMessage: 'Token requerido',
      bail: true
    },
  },
};

module.exports = logInGoogleSchema;
