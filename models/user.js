//DEPENDENCIES
const mongoose = require("mongoose")

//SCHEMA
 const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
 })

 //EXPORT
 module.exports = mongoose.model('User', userSchema);