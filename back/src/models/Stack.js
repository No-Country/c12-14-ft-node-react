const {Schema} = require("mongoose");
const connection = require('../../config/database/mongo/connection');

const stackSchema = new Schema({
  stackName: {
    type: String,
    required: true,
  }
},{
  versionKey: false,
  timestamps: true
});


module.exports = connection.model("Stack", stackSchema);
