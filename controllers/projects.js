//DEPENDENCIES
const router = require("express").Router()
const Project = require('../models/projects')
const Assingments = require('../models/assignments')


//GET ALL PROJECT ASSOCIATED TO OWNER 
router.get("/", async (req, res) => {
    const project = await Project.find({ ownerId: req.user._id })//.populate('ownerId')
    if (!project) {
        res.status(404)
        res.json({ 'message': 'NO projects were found' })
    }
    res.status(200)
    res.json(project)
})

//GET ONE PROJECT
router.get("/:id", async (req, res) => {
   const project = await Project.find({ _id: req.params.id }).populate('assingment');

   if (!project) {
    res.status(404)
    return res.json({ 'message': 'Project not found'})
   }

   res.status(200)
   res.json(project)
})

//CREATE NEW PROJECT
router.post("/create", async (req, res) => {
    const { projectName } = req.body;
    const projectCheck = await Project.findOne({ projectName })
    if (projectCheck) {
        res.status(422)
        res.json({ 'message': 'This project already exists' })
        return;
    }
    const project = await new Project({
        projectName
        //ownerId: req.user._id
    }).save()
        .catch((err) => {
            res.status(400).json({
                message: "An error occured, could not create a new project."
            })
            console.log(err)
        })
    res.status(200)
    res.json(project)    
})

//UPDATE ONE PROJECT
router.put("/:id", (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedProject) => {
            res.status(200).json(updatedProject)
        })
        .catch((err) => {
            res.status(400).json({
                message: "An error occured, could not update the project."
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