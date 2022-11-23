//DEPENDENCIES
const router = require("express").Router()
const { Project } = require('../models')

//GET ALL PROJECT
router.get("/", async (req, res) => {
    const project = await Project.find()
    res.json(project)
    console.log("showing all project")
})

//GET ONE PROJECT
router.get("/:id", (req, res) => {
    Project.findOne({_id: req.params.id}).then((foundProject) => {
        res.json(foundProject)
    })
})

//CREATE NEW PROJECT
router.post("/", (req, res) => {
    Project.create(req.body)
        .then((createProject) => {
            res.status(200).json(createProject)
        })

        .catch((err) => {
            res.status(400).json({
                message: "An error occured, could not create a new project."
            })
        })
})

//UPDATE ONE PROJECT
router.put("/:id", (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedProject) => {
            res.status(200).json(updatedProject)
        })
        .catch((err) => {
            res.status(400).json({
                message: "An error occured, could not edit the project."
            })
        })
})

//DELETE A PROJECT
router.delete("/:id", (req, res) => {
    Project.findByIdAndDelete(req.params.id).then(res.status(303))
    console.log("deleting selected project")
})

//EXPORTS
module.exports = router;