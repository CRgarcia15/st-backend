//DEPENDENCIES
const mongoose = require("mongoose")

//SCHEMA
 const PersonalSprintSchema = new mongoose.Schema({
    sprintName: {type: String, required: true},
    dueDate: {type: String, required: false},
    sprintPeriods: {type: String, required: true}
 })

 //EXPORT
 module.exports = mongoose.model('PersonalSprint', personalSprintSchema);