const Login = require('./../model/login')
const express = require('express')
const router = new express.Router()
const auth = require('./auth')
const session = require('./session')

router.post('/user', async (req, res) => {
    console.log("register")
    const user = new Login(req.body)
    try {
        await user.save()
        await user.generateAuthToken()
        res.send(user)
    }
    catch (e) {
        console.log(e)
    }
})


router.use(session)
router.post('/login', async (req, res) => {
    console.log("login called")
    try {
        const user = await Login.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        req.session.user = token
        res.cookie("cookie-key", "cookie-value", {
            maxAge: 10000 * 60
        })
        res.send({ user, token })
    }
    catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.post('/logout', auth, async (req, res) => {
    try {
        console.log("logout called")
        req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token)

        await req.user.save()
        req.session.destroy(function (err) {
        })
        res.clearCookie('mySession')
        res.clearCookie('cookie-key')
        res.status(200).send()
    }
    catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})
module.exports = router