//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMA
const userSchema = new Schema({
  name: {type: String, required: false},
  username: {type: String, required: true},
  password: {type: String, required: true},
    //an array of projects that user has created
    projects: [{
      type: Schema.Types.ObjectId,
      ref: "Projects"
    }]
 })

//EXPORT
 module.exports = mongoose.model('User', userSchema)