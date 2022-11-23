//DEPENDENCIES
const mongoose = require("mongoose")

//SCHEMAS 
const projectSchema = new mongoose.Schema({
   projectName: {type: String, required: true},
   dueDate: {type: String, required: false}, //this format is YYYY/MM/DD
   assingments: [{type: String}]
})

 //EXPORTS
 module.exports = mongoose.model('Project', projectSchema);