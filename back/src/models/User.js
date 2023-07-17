//aca creo las "clase"("Schema"(esquema)) "users" de los documentos de MongoDB.
const { Schema } = require('mongoose')
const connection = require('../../config/database/mongo/connection')

//a continuacion instancio la clase "User"
const userSchema = new Schema(
  {
    mail: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    userName: {
      type: String,
      unique: true, //-->ver si esto esta bien q sea asi, pq el mail podria ser el identificador
      required: true,
    },
    type: {
      type: String,
      unique: false,
      default: "user", //-->ver si esto esta bien q sea asi, pq el mail podria ser el identificador
      required: true,
    },
    description: {
      type: String,
    },
    rols: [
      {
        //--> un array de strings
        type: Object,
        required: true,
      },
    ],
    stack: [
      {
        //--> un array de strings
        type: String,
        required: true,
      },
    ],
    socialsMedia: [
      {
        type: Object,
      },
    ],
    adminProjects: [
      {
        type: String,
      },
    ],
    collaboratorProjects: [
      {
        type: String,
      },
    ],
    photo: {
      type: String,
      default: '',
    },
    lastConnection: {
      type: Date,
      default: new Date(),
    },
    hidden: {
      type: Boolean,
      default: false,
    },

    // //bills es una lista de elementos, en lo que cada elemento es un Objecto del tipo "ObjectID" que se refiere a documentos de Bill.
    // bills: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Bill",
    //   },
    // ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = connection.model('User', userSchema)
