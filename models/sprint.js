//DEPENDENCIES
const mongoose = require("mongoose")

//SCHEMA
 const sprintSchema = new mongoose.Schema({
    name: {type: String, required: true},
    dueDate: {type: String, required: false},
    admin: {type: Boolean, default: true},
    category: {
        type: String,
        required: true,
        enum: ["Personal", "Team Project"]
    }
 })

 //EXPORT
 module.exports = mongoose.model('Sprint', sprintSchema);