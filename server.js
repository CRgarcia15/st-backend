// DEPENDENCIES
const express = require('express')
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require('cors')

// ROUTES
const userRoutes = require('./controllers/user')
const projectRoutes = require('./controllers/projects')

// MIDDLEWARE
const authMiddleware = require('./middleware/auth')
const defineCurrentUser = require('./middleware/defineCurrentUser')

const app = express()

// EXPRESS MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: '*' }))
app.use(defineCurrentUser)

// HOME ROUTE
app.get("/", (req, res) => {
    res.send("You are in the home page")
})

// API ROUTES
app.use("/user", userRoutes)
app.use("/project", authMiddleware.validateJWT, projectRoutes)

// CATCH-ALL 404 ROUTE
app.use((req, res) => {
    res.status(404).send("404 | page not found")
})

// MONGO CONNECTION
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
})
    .catch(err => console.error(err))

// PORT LISTENER
const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
