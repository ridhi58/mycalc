const Login = require('./../model/login')
const jwt = require('jsonwebtoken')


const auth = async (req, res, next) => {
    try {

        const token = req.session.user

        const decode = jwt.verify(token, process.env.JWT_TOKEN)

        const user = await Login.findOne({ _id: decode._id, 'tokens.token': token })
        console.log("hit1")
        if (!user) {
            console.log("no user")
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    }
    catch (error) {
        res.status(400).send({ error })
    }
}

module.exports = auth