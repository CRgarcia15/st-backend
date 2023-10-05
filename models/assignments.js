//DEPENDENCIES
const mongoose = require("mongoose")
const projects = require("./project")
const Schema = mongoose.Schema

//SCHEMA
const assingmentSchema = new Schema({
   
    title: {type: String, required: true},
    description: {type: String, required: true},
     projectId: {
        type: Schema.Types.ObjectId,
        ref: "projects",
        required : true
    }
})

//EXPORT
const Assingment = mongoose.model("Assingments", assingmentSchema)
module.exports = Assingment