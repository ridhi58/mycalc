const session = require('express-session')




module.exports = session({
    name: "mySession",
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    proxy: true,
    cookie: {
        maxAge: 100000 * 60,
        sameSite: 'strict',
        httpOnly: true,
        secure: false

    }
})

