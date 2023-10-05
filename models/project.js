//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMAS 
const projectSchema = new mongoose.Schema({
   projectName: {type: String, required: true},
   dueDate: {type: Date},
   user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
   }
},{toJSON: {virtuals: true}})

// Virtual
projectSchema.virtual('assingments', {
   ref: 'Assaignments',
   localField: 'projectName',
   foreignField: 'projects'
})

projectSchema.methods.createdBy = function () {
   return `Created by ${this.user.username}`
}

//EXPORTS
const Project = mongoose.model("Project", projectSchema);
module.exports = Project