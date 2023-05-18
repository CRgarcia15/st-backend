//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMAS 
const projectSchema = new mongoose.Schema({
   projectName: {type: String, required: true},
   dueDate: {type: String, default: "No due date", required: false},
   ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   },
   assingments: [{
      type: Schema.Types.ObjectId,
      ref: 'Assingments'
   }]
})

//EXPORTS
module.exports = mongoose.model("Project", projectSchema);