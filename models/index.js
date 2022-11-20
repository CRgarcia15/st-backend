//DEPENDENCIES
require("dotenv").config()
const mongoose = require("mongoose")

//MONGO CONNECTION
mongoose.connect(
    "mongodb+srv://Crgarcia15:prkXlySkbbhMSRmu@sprinttrack.hngys8v.mongodb.net/test",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

module.exports.Sprint = require("./sprint")
module.exports.User = require("./user")