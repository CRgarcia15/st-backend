//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMA
const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
 })

//EXPORT
 module.exports = mongoose.model('User', userSchema)