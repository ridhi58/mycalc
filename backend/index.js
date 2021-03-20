const express = require('express')
const dotenv = require('dotenv')
const corsAllow = require('./src/config/corsAllow')
const cookieParser = require('cookie-parser')
dotenv.config()
require('./src/db/mongo')
const loginRoute = require('./src/route/loginRoute')



const app = express()
app.use(express.json())
app.use(corsAllow)
app.use(cookieParser())
app.use(loginRoute)





const Port = process.env.PORT || 5000

app.listen(Port, () => {
    console.log("connected on port" + Port)
})