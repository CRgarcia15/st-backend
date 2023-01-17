//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMA
const assingmentSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project"
        //this is ralating the project the assingment is for.
    },
    title: {type: String, required: true},
    description: {type: String, required: true}
})

//EXPORT
module.exports = mongoose.model("Assingments", assingmentSchema)