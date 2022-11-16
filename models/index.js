require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(
    "mongodb+srv://Crgarcia15:prkXlySkbbhMSRmu@cluster0.kczzd.mongodb.net/test",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

module.exports.Sprint = require("./sprint")