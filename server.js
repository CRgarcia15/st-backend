//DEPENDENCIES
const express = require('express')
const app = express()

//MIDDLEWARE
app.use(express.json())

//ROUTES
app.get("/", (req, res) => {
    res.send("You are in the home page")
})

//connection to the sprint's controller
app.use("/sprints", require("./controllers/sprint"))

app.get("*", (req, res) => {
    res.status(404).send("404 | page not found")
})

const PORT = process.env.PORT || 7000

//LISTENER
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})