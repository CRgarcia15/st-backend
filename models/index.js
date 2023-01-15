//DEPENDENCIES
require("dotenv").config()
const mongoose = require("mongoose")

//MONGO CONNECTION
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log('DB Connected'))
    .catch(err => console.error(err))

module.exports.Project = require("./projects")
module.exports.User = require("./user")