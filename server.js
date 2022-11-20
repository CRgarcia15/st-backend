//DEPENDENCIES
const express = require('express')
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()

const userRoutes =  require("./controllers/user")
//MIDDLEWARE
app.use(express.json())

//ROUTES
app.get("/", (req, res) => {
    res.send("You are in the home page")
})

//SPRINT ROUTE
app.use("/sprints", require("./controllers/sprint"))

//LOGIN ROUTE
app.use("/login", userRoutes)

//ERROR HANDALING / 404
app.get("*", (req, res) => {
    res.status(404).send("404 | page not found")
})

//PORT THAT IS BEING USED
const PORT = process.env.PORT || 7000

//LISTENER
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})