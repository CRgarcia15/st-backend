//DEPENDENCIES
const mongoose = require("mongoose")

//SCHEMAS

//Schema for assingments
const assmntPeriod = new mongoose.Schema({
   title: {type: String, required: true},
   description: {type: String, required: true},
   completed: {type: Boolean, required: true}
})

//Schema for the complete sprints
 const sprintSchema = new mongoose.Schema({
    sprintName: {type: String, required: true},
    dueDate: {type: String, required: false}, //this format is YYYY/MM/DD
    assignments: assmntPeriod
 })

 //EXPORT
 module.exports = mongoose.model('Sprint', sprintSchema);