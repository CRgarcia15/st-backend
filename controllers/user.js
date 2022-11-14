//DEPENDENCIES
const router = require("express").Router()
// require the model for the user

//Home route to Users
router.get("/", (res, req) => {
    //get the user info and sprints from required models
})

router.get("/:id", (req, res) => {
    //get one sprint when clicked on one
})

router.post("/", (req, res) => {
    //create a sprint using the model
})

router.put("/:id", (req, res) => {
    //update the project selected
})

router.delete("/:id", (res, req) => {
    Sprint.findByIdAndDelete(req.params.id).then(res.statusCode(303))
})

//EXPORTS
module.exports = router;