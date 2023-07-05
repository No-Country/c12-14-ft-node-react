//aca creo las "clase"("Schema"(esquema)) "users" de los documentos de MongoDB.
const { Schema, model } = require("mongoose");

//a continuacion instancio la clase "User"
const projectSchema = new Schema({
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
      type: String
    },
  ],
  collaborators: [
    {
      type: String
    },
  ],
  hidden:{
    type:Boolean,
    default:false
  }

  // //bills es una lista de elementos, en lo que cada elemento es un Objecto del tipo "ObjectID" que se refiere a documentos de Bill.
  // bills: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Bill",
  //   },
  // ],
});

module.exports = model("Project", projectSchema);
