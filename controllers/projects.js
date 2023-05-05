//DEPENDENCIES
const router = require("express").Router()
const { Project, Assingments } = require('../models')


//GET ALL PROJECT
router.get("/", async (req, res) => {
    const project = await Project.find()
    res.json(project)
    console.log("showing all projects")
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

//REQUESTING ALL ASSIGNMENTS FOR ONE PROJECT
router.get("/assingments", async(req, res) => {
    const Assingments = await Assingments.find()
    if(!Assingments){
        res.status(404)
        res.json({"message": "Assingments not found"})
        return
    }
    res.json(Assingments)
    console.log("showing all assingments")
})

//REQUESTING ONE ASSINGMENT 
router.get("/assingments/:id", (req, res) => {
    Assingments.findOne({_id: req.params.id}).then((foundAssingment) => {
        if(!foundAssingment) {
            res.status(404)
            res.json({"message": "Assingments not found"})
            return
        }
        res.json(foundAssingment)
    })
})

//EXPORTS
module.exports = router;