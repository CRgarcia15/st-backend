//DEPENDENCIES
const router = require("express").Router()
const  { User }  = require("../models")
const  Project  = require("../models/project")
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
router.post("/signup", async (req, res) =>{
    const { username, password } = req.body
    const user = await new User({
        username,
        password: await bcrypt.hash(password, 12)
    }).save()

    const payload = {
        _id: user._id,
        username: user.username
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d'})
    res.json(token)
    console.log(token)
    console.log(user)
})

//USER LOGIN
router.post("/login", async (req, res) => {
    const { username, password } = req.body
 
    const user = await User.findOne({ username })
    if (!user) {
        res.status(422);
        res.json({'message': 'Invalid Credentials'});
        return;
    }

    const validPassword =  await bcrypt.compare(password, user.password);
        if(!validPassword){
            res.status(422)
            res.json({'message': 'Invalid Credentials'})
            return;
        }

    const payload = {
        _id: user._id,
        username: user.username
    }
    const token =  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d'})
    res.status(200).json(token) 
})

//UPDATE AN USER
router.put("/:id", validateJWT, (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, ({ new: true }))
        .then((updatedUser) => {
            res.status(200).json(updatedUser)
        })
        .catch((err) => {
            res.status(400).json({
                message: "An error occured, could not update your user profile."
            })
        })
    console.log("User is updated")
})

//DELETE USER
router.delete("/:id", validateJWT, (req, res) => {
    User.findByIdAndDelete(req.params.id).then(res.status(303).json({'Message':'User is deleted'}))
    console.log("user is being deleted")
})

//EXPORTS
module.exports = router;