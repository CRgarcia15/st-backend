//DEPENDENCIES
require("dotenv").config()
const mongoose = require("mongoose")

//MONGO CONNECTION
mongoose.connect(
    "mongodb+srv://Crgarcia15:prkXlySkbbhMSRmu@cluster0.qm7082a.mongodb.net/test",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

module.exports.Sprint = require("./sprint")