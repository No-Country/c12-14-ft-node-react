const singUpSchema = {

  token:{
    notEmpty:{
      errorMessage: 'El token es requerido',
      bail:true
    },
  }
};

module.exports = singUpSchema;
