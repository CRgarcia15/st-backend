//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMAS 
const projectSchema = new mongoose.Schema({
   projectName: {type: String, required: true},
   dueDate: {type: String, default: "No due date", required: false},
   //this is realating the project to it owner (user who created it)
   ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User"
   },
    //this is an array of assingments for the project
   assingments: [{
      type: Schema.Types.ObjectId,
      ref: "Assingments"
   }]
})

//EXPORTS
module.exports = mongoose.model("Project", projectSchema);

//added something to line 8 and line 56 in projects route, make sure it works