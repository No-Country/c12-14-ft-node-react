//aca creo las "clase"("Schema"(esquema)) "users" de los documentos de MongoDB.
const { Schema } = require('mongoose')
const connection = require('../../config/database/mongo/connection')

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: [
      {
        //--> un array de strings
        type: String,
        required: true,
      },
    ],
    languaje: [
      {
        //--> un array de strings
        type: String,
        required: true,
      },
    ],
    requiredRols: [
      {
        //--> un array de objetos
        type: Object,
        required: true,
      },
    ],
    isRequiredRolsCompleted: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      required: true,
    },
    timeOfProject: {
      type: Number,
    },
    startDate: {
      type: Number,
    },
    progressState: {
      type: Number,
    },
    connectionLinks: [
      {
        type: Object,
      },
    ],
    admins: [
      {
        type: String,
      },
    ],
    collaborators: [
      {
        type: String,
      },
    ],
    postulants: {
      type: Array,
      default: [],
      // aca se define la estructura del objeto dentro del array
      items: [{
        postulantId: String,
        rol: String,
        senority: String
      }]
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
)

module.exports = connection.model('Projects', projectSchema)
