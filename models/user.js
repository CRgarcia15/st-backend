//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMA
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  project: [{type: Schema.Types.ObjectId, ref: 'project'}]
 })

//EXPORT
const User = mongoose.model('User', userSchema)
 module.exports = User