//aca creo las "clase"("Schema"(esquema)) "users" de los documentos de MongoDB.
const { Schema, model } = require("mongoose");

//a continuacion instancio la clase "User"
const userSchema = new Schema({
  mailLogueado: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHashiado: {
    type: String,
  },
  userName: {
    type: String,
    unique: true, //-->ver si esto esta bien q sea asi, pq el mail podria ser el identificador
    required: true, 
  },
  description: {
    type: String,
  },
  roles: [{ //--> un array de strings 
    type: String,
    required: true, 
  }],
  senority: {
    type: String,
    required: true, 
  },
  stack: [{ //--> un array de strings 
    type: String,
    required: true, 
  }],
  redesSociales: {
    type: Object
  },
  proyectosAdministrados:{
    type: Array
  },
  proyectosColaborando:{
    type: Array
  },
  foto:{
    type: String
  },
  ultimaConexion:{
    type: Date
  }





  // //bills es una lista de elementos, en lo que cada elemento es un Objecto del tipo "ObjectID" que se refiere a documentos de Bill.
  // bills: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Bill",
  //   },
  // ],
});

model("User", userSchema);

module.exports = model("User", userSchema);
