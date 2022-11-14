//DEPENDENCIES
const mongoose = require("mongoose")

//SCHEMA
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    company: {type: String, required: false},

})

//EXPORT 
module.exports = mongoose.model("User", userSchema);