//DEPENDENCIES
const router = require("express").Router()
const { User } = require("../models")
const bcrypt = require('bcryptjs')

// get all user (just for development purposes)
router.get("/", async (req, res) => {
    const user = await User.find()
    res.json(user)
    console.log("Showing all Users")
})
 //CREATE NEW USER WITH HASHED PASSWORD
router.post("/", async (req, res) =>{
    const { fullName, username, password } = req.body
    const createdUser = await new User({
        fullName,
        username,
        password: await bcrypt.hash(password, 10)
    }).save()
    
    res.json(createdUser)
    console.log("attempting to create user")
})

//CREATE NEW USER
// router.post("/", async (req, res) => {
//    User.create(req.body)
//     .then((createdUser) => {
//         res.status(200).json(createdUser)
//     })
//     .catch((err) => {
//         res.status(400).json({
//             message: "An error occured, could not create a new user."
//         })
//     })
// })

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