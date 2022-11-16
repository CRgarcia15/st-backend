//DEPENDENCIES
const router = require("express").Router()
const { Sprint } = require('../models')

//Get all sprints
router.get("/", async (req, res) => {
    const sprint = await Sprint.find()
    res.json(sprint)
})

//Get one sprint
router.get("/:id", (req, res) => {
    Sprint.findOne({_id: req.params.id}).then((foundSprint) => {
        res.json(foundSprint)
    })
})

//Create new sprint
router.post("/", (req, res) => {
    Sprint.create(req.body)
        .then((createSprint) => {
            res.status(200).json(createSprint)
        })

        .catch((err) => {
            res.status(400).json({
                message: "An error occured, could not create a new sprint."
            })
        })
})

//Delete a project
router.delete(":/id", (req, res) => {
    Sprint.findByIdAndDelete(req.params.id).then(res.status(303))
})

//exports
module.exports = router;