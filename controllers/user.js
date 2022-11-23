//DEPENDENCIES
const router = require("express").Router()
const { User } = require("../models")

// get all user (just for development purposes)
router.get("/", async (req, res) => {
    const user = await User.find()
    res.json(user)
})

//CREATE NEW USER
router.post("/", async (req, res) => {
    User.create(req.body)
    .then((createdUser) => {
        res.status(200).json(createdUser)
    })

    .catch((err) => {
        res.status(400).json({
            message: "An error occured, could not create a new user."
        })
    })
})

//UPDATE AN USER
router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedUser) => {
            res.status(200).json(updatedUser)
        })
        .catch((err) => {
            res.status(400).json({
                message: "An error occured, could not update your user profile."
            })
        })
    console.log("User is being updated")
})

//DELETE USER
router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id).then(res.status(303))
    console.log("user is being deleted")
})

//EXPORTS
module.exports = router;