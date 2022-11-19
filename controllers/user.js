//DEPENDENCIES
const router = require("express").Router()
const { User } = require("../models")

//CREATE NEW USER
router.post("/", (req, res) => {
    User.create(req.body)
    .then((createUser) => {
        res.status(200).json(createUser)
    })
})

//UPDATE AN USER
router.put("/:id", (req, res) => {
    User.findbyIdAndUpdate(req.params.id, req.body)
        .then((updatedUser) => {
            res.status(200).json(updatedUser)
        })
        .catch((err) => {
            res.status(400).json({
                message: "An error occured, could not edit user."
            })
        })
})