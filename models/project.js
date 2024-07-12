//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMAS 
const projectSchema = new mongoose.Schema({
   projectName: {type: String, required: true, unique: true},
   dueDate: {type: Date, default: Date.now, required: false},
   owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   }
})

//EXPORT
const Project = mongoose.model("Project", projectSchema);
module.exports = Project