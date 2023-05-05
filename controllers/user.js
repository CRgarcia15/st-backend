//DEPENDENCIES
const router = require("express").Router()
const { User } = require("../models")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validateJWT} = require ("../middleware/auth")

//get all user (just for development purposes)
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
        password: await bcrypt.hash(password, 12)
    }).save()

    //Creates user with JWT token
    const payload = {
        id: createdUser._id,
        username: createdUser.username
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d'})

    res.json({'token': token})
})

//USER LOGIN
router.post("/login", async (req, res) => {
    const { username, password } = req.body
 
    const user = await User.findOne({ username })
    if (!user) {
        res.status(403).json({'message': 'Invalid Credentials'})
        return
    }

    const isValidPassword =  await bcrypt.compare(password, user.password);
        if(!isValidPassword){
            res.status(422)
            res.json({'message': 'Invalid Credentials'})
            console.log(password)
            console.log(user)
            console.log(isValidPassword)
            return;
        }

    const payload = {
        id: user._id,
        username: user.username
    }

    const token =  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d'})

    res.json({'token' : token})
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