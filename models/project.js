//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMAS 
const projectSchema = new mongoose.Schema({
   projectName: {type: String, required: true},
   dueDate: {type: Date, default: Date.now},
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
},{toJSON: {virtuals: true}}, {toObject: {virtuals: true}})

// Virtual
projectSchema.virtual('assingments', {
   ref: 'Project',
   localField: '_id',
   foreignField: 'project'
  }, { toJSON: { virtuals: true} })

projectSchema.methods.createdBy = function () {
   return `Created by ${this.user.username}`
}

//EXPORTS
const Project = mongoose.model("Project", projectSchema, "Project");
module.exports = Project