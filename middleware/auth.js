const jwt = require('jsonwebtoken')

//This function takes care of the token validation 
function validateJWT(req, res, next) {
    const authHeader =  req.headers.authorization
    if(!authHeader) {
        res.json({'message': ' Invalid Credentials'})
        return
    }

    try{
        const token = authHeader.split(' ')[1]
        const validToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = validToken
        next()
    } catch (error) {
        console.log(error)
        res.status(422)
        res.json({'message': 'Invalid Credentials'})
        return
    }
}

module.exports = { validateJWT }