const singUpSchema = {

  token:{
    notEmpty:{
      errorMessage: 'El token es requerido',
      bail:true
    },
    custom:{

    }
  }
};

module.exports = singUpSchema;
