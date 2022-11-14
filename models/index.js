require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(
    // mongoose url here
    {
        useNewURlParser: true,
        useUnifiedTopolofy: true
    }
)

module.exports.User = require("./user");