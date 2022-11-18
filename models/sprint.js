//DEPENDENCIES
const mongoose = require("mongoose")

//SCHEMA
 const sprintSchema = new mongoose.Schema({
    sprintName: {type: String, required: true},
    dueDate: {type: String, required: false}, //this format is YYYY/MM/DD
    assignments: [
      {title: {type: String, required: true}},
      {description: {type: String, required: true}},
      {completed: {type: Boolean, required: true}}
    ]
 })

 //EXPORT
 module.exports = mongoose.model('Sprint', sprintSchema);