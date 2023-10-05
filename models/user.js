//DEPENDENCIES
const mongoose = require("mongoose")
const projects = require("./project")
const Schema = mongoose.Schema

//SCHEMA
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
 }, {toJSON: {virtuals: true}})

//Virtual
 userSchema.virtual('project', {
  ref: "Project",
  localField: "_id",
  foreignField: 'user'
 })

//EXPORT
const User = mongoose.model('User', userSchema)
 module.exports = User