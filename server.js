//DEPENDENCIES
const express = require('express')
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const userRoutes =  require("./controllers/user")
const projectRoutes = require("./controllers/projects")
const cors = require('cors')

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin:'*'}))

//ROUTES
app.get("/", (req, res) => {
    res.send("You are in the home page")
})

//PROJECT ROUTE
app.use("/projects", projectRoutes)

//LOGIN ROUTE
app.use("/user", userRoutes)

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