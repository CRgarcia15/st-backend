//DEPENDENCIES
const mongoose = require("mongoose")

//SCHEMA
 const sprintSchema = new mongoose.Schema({
    sprintName: {type: String, required: true},
    dueDate: {type: String, required: false},
    sprintPeriods: //look at the video again, this should be an array.
 })

 //EXPORT
 module.exports = mongoose.model('Sprint', sprintSchema);