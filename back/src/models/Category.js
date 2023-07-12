//aca creo las "clase"("Schema"(esquema)) "users" de los documentos de MongoDB.
const {Schema} = require("mongoose");
const connection = require('../../config/database/mongo/connection');

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
  }
},{
  versionKey: false,
  timestamps: true
});


module.exports = connection.model("Category", categorySchema);
