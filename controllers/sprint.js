//DEPENDENCIES
const router = require("express").Router()
const { Sprint } = require('../models')

//GET ALL SPRINTS
router.get("/", async (req, res) => {
    const sprint = await Sprint.find()
    res.json(sprint)
    console.log("showing all sprints")
})

//GET ONE SPRINT
router.get("/:id", (req, res) => {
    Sprint.findOne({_id: req.params.id}).then((foundSprint) => {
        res.json(foundSprint)
    })
})

//CREATE NEW SPRINT
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

//UPDATE ONE SPRINT
router.put("/:id", (req, res) => {
    Sprint.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedSprint) => {
            res.status(200).json(updatedSprint)
        })
        .catch((err) => {
            res.status(400).json({
                message: "An error occured, could not edit the sprint."
            })
        })
})

//DELETE A PROJECT
router.delete("/:id", (req, res) => {
    Sprint.findByIdAndDelete(req.params.id).then(res.status(303))
    console.log("deleting selected sprint")
})

//EXPORTS
module.exports = router;