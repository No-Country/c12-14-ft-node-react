//aca creo las "clase"("Schema"(esquema)) "users" de los documentos de MongoDB.
const { Schema } = require('mongoose')
const connection = require('../../config/database/mongo/connection')

//a continuacion instancio la clase "User"
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
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
      default: 'user', //-->ver si esto esta bien q sea asi, pq el mail podria ser el identificador
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    roles: [
      {
        type: Object,
        required: true,
      },
    ],
    stack: [
      {
        //--> un array de strings
        type: Object,
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
    isActive: {
      type: Boolean,
      default: true,
    },
    googleAuth: {
      type: Boolean,
      default: false,
    },
    gitHubAuth: {
      type: Boolean,
      default: false,
    },
    LinkedInAuth: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

userSchema.methods.toJSON = function () {
  const { password, googleAuth, gitHubAuth, LinkedInAuth, ...user } =
    this.toObject()
  return user
}

module.exports = connection.model('User', userSchema)
