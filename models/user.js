//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMA
 const userSchema = new Schema({
    name: {type: String, required: false},
    username: {type: String, required: true},
    password: {type: String, required: true},
    projects: [{
      type: Schema.Types.ObjectId,
      ref: "Projects"
      //an array of projects that user has created
    }]
 })

//EXPORT
 module.exports = mongoose.model('User', userSchema)

// this should be a one-to-many realationship with projects. 
//Having an id of user linked to each project created by said user.