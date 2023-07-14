//aca creo las "clase"("Schema"(esquema)) "users" de los documentos de MongoDB.
const {Schema} = require("mongoose");
const connection = require('../../config/database/mongo/connection');


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
    userName: {
      type: String,
      unique: true, //-->ver si esto está bien que sea asi, pq el email podria ser el identificador
      required: true,
    },
    description: {
      type: String,
    },
    roles: [
      {
        type: Object,
        required: true,
      },
    ],
    stack: [
      {
        type: Object,
        required: true,
      },
    ],
    socialsMedia: {
      type: Object,
    },
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
    },
    lastConnection: {
      type: Date,
      default: new Date(),
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = connection.model("User", userSchema);
