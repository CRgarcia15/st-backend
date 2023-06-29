//DEPENDENCIES
const mongoose = require("mongoose")
const projects = require("./projects")
const Schema = mongoose.Schema

//SCHEMA
const assingmentSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "projects",
        required : true
    },
    title: {type: String, required: true},
    description: {type: String, required: true}
})

//EXPORT
const Assingment = mongoose.model("Assingments", assingmentSchema)
module.exports = Assingment