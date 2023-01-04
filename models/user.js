//DEPENDENCIES
const mongoose = require("mongoose")

//SCHEMA
 const userSchema = new mongoose.Schema({
    name: {type: String, required: false},
    username: {type: String, required: true},
    password: {type: String, required: true}
 })

 userSchema.virtual('project', {
   ref: "Project",
   localField: "_id",
   foreignField: "project"
 })

//EXPORT
 module.exports = mongoose.model('User', userSchema)