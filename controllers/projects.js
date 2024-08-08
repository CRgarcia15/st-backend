//DEPENDENCIES
const router = require("express").Router()
const Project = require('../models/project')
const jwt = require('jsonwebtoken')
const {validateJWT} = require ("../middleware/auth")

//GET ONE PROJECT
router.get("/:id", async (req, res) => {
   const project = await Project.find({ _id: req.params.id })

   if (!project) {
    res.status(404)
    return res.json({ 'message': 'Project not found'})
   }

   res.status(200)
   res.json(project)
})

//GET ALL PROJECT ASSOCIATED TO USER 
router.get("/:id/home", validateJWT, async (req, res) => {  

    const projectGet = await Project.find()
 
     const userToken = req.headers.authorization.split(' ')[1]
     const tokenDecode  = jwt.decode(userToken)
     const userinfo = tokenDecode._id
     const owner = userinfo
 
     for (i = 0; i = projectGet.length; i++){
             if (projectGet.owner !== owner) {
                 return projectGet
             }
         console.log(projectGet);
     }
 
 
    /* const foundUser = await User.find().populate('Project', 'projectName')
     
     if (!foundUser) {
             res.status(404)
             res.json({ 'message': 'No projects were found' })
         }
 
     res.status(200).json({foundUser}) */
 })
 
//CREATE NEW PROJECT
router.post("/create", validateJWT, async (req, res) => {

    const userToken = req.headers.authorization.split(' ')[1]
    const tokenDecode  = jwt.decode(userToken)
    const userinfo = tokenDecode._id
    const owner = userinfo

    const { projectName, dueDate } = req.body;
     
    const projectCheck = await Project.findOne({ projectName })
    
    if (projectCheck) {;
        res.status(422)
        res.json({ 'message': 'This project already exists' })
        return;
    }

    const project = await new Project(
        { 
         projectName, 
         dueDate,
         owner
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