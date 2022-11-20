//DEPENDENCIES
const router = require("express").Router()
const { User } = require("../models")

//CREATE NEW USER
router.post("/", async (req, res) => {
    // const {fullName, username, password} = req.body
    // const createdUser = await new User({
    //     fullName,
    //     username,
    //     password
    // }).save()

    // res.json(createdUser)
    User.create(req.body)
    .then((createdUser) => {
        res.status(200).json(createdUser)
    })

    .catch((err) => {
        res.status(400).json({
            message: "An error occured, could not create a new sprint."
        })
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

//EXPORTS
module.exports = router;