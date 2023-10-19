//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMA
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  }, {toJSON: {virtuals: true}})

//Virtual
 userSchema.virtual('Project', {
  ref: "User",
  localField: "_id", 
  foreignField: 'projects'
 }, { toJSON: { virtuals: true} })

//EXPORT
const User = mongoose.model('User', userSchema, "User")
 module.exports = User