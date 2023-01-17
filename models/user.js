//DEPENDENCIES
const mongoose = require("mongoose")

//SCHEMA
 const userSchema = new mongoose.Schema({
    name: {type: String, required: false},
    username: {type: String, required: true},
    password: {type: String, required: true}
 })

//EXPORT
 module.exports = mongoose.model('User', userSchema)

// this should be a one-to-many realationship with projects. 
//Having an id of user linked to each project created by said user.