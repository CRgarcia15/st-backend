//DEPENDENCIES
const router = require("express").Router()
const { Project, Assingments } = require('../models')

//CREATE ASSINGMENT
router.post("/", (req, res) => {
    Assingments.create(req.body)
        .then((createAssingment) => {
            res.status(200).json(createAssingment)
        })
        .catch((err) => {
            res.status(400).json({
                message: "An error occured, could not create a new assingment."
            })
            console.log(err) //still displaying "Assingment validation failed, figure out what is happening"
        })
})

//UPDATE AN ASSINGMENT
router.put("/:id", (req, res) => {
    Assingments.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedAssingment) => {
            res.status(200).json(updatedAssingment)
        })
        .catch((err) => {
            res.status(400).json({
                message: "An error occured, could not update assingment"
            })
        })
})

//REQUESTING ALL ASSIGNMENTS FROM ONE PROJECT
router.get("/assingments", async(req, res) => {
    const Assingments = await Assingments.find({ projectId: req.project._id })
    if(!Assingments){
        res.status(404)
        res.json({"message": "Assingments not found"})
        return
    }
    res.json(Assingments)
    console.log("showing all assingments")
})

//REQUESTING ONE ASSINGMENT 
router.get("/:id", (req, res) => {
    Assingments.findOne({_id: req.params.id}).then((foundAssingment) => {
        if(!foundAssingment) {
            res.status(404)
            res.json({"message": "Assingments not found"})
            return
        }
        res.json(foundAssingment)
    })
})

//DELETE ASSINGMENT 
router.delete("/:id", (req, res) => {
    Assingments.findByIdAndDelete(req.params.id).then(res.status(303))
    console.log("deleting selected assingment")
})

//EXPORTS
module.exports = router;