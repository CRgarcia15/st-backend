//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMAS 
const assingmentSchema = new Schema ({
   title: {type: String},
   description: {type: String},
   ProjectBelong: {
      type: Schema.Types.ObjectId,
      ref: "Porject"
   }
})

//EXPORTS
const Project = mongoose.model("Assingments", assingmentSchema);
module.exports = Project