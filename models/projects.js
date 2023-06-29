//DEPENDENCIES
const mongoose = require("mongoose")
const user = require('./user')
const assingments = require('./assignments')
const Schema = mongoose.Schema

//SCHEMAS 
const projectSchema = new mongoose.Schema({
   projectName: {type: String, required: true},
   dueDate: {type: String, default: "No due date", required: false},
   ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'user'
   },
   assingments: [{
      type: Schema.Types.ObjectId,
      ref: 'Assingments'
   }]
})

//EXPORTS
const Project = mongoose.model("Project", projectSchema);
module.exports = Project