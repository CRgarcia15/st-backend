//DEPENDENCIES
const express = require('express')
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const userRoutes =  require("./controllers/user")
const projectRoutes = require("./controllers/projects")
const authMiddleware = require('./middleware/auth')
const cors = require('cors')
const defineCurrentUser = require('./middleware/defineCurrentUser')

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin:'*'}))
app.use(defineCurrentUser)

//ROUTES
app.get("/", (req, res) => {
    res.send("You are in the home page")
})

//ROUTES
app.use("/user", userRoutes)
app.use("/project", authMiddleware.validateJWT, projectRoutes)

//ERROR HANDALING / 404
app.get("*", (req, res) => {
    res.status(404).send("404 | page not found")
})

//PORT THAT IS BEING USED
const PORT = process.env.PORT

//LISTENER
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})