//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMAS 
const projectSchema = new mongoose.Schema({
   projectName: {type: String, required: true},
   dueDate: {type: String, default: "No due date", required: false},
   ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User"
      //this is realating the project to it owner (user who created it)
   },
   assingments: [{
      type: Schema.Types.ObjectId,
      ref: "Assingments"
      //this is an array of assingments for the project
   }]
})

//EXPORTS
module.exports = mongoose.model("Project", projectSchema);