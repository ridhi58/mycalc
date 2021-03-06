const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema(
    {
        name: { type: String, },
        email: { type: String, unique: true },
        password: { type: String },
        tokens: [
            {
                token: {
                    type: String,
                    required: true
                }
            }

        ]
    }
)
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})
userSchema.methods.generateAuthToken = async function () {
    try {
        const user = this
        const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_TOKEN)
        user.tokens = user.tokens.concat({ token })
        await user.save()

        return token
    }
    catch (e) {
        console.log(e)
    }
}



userSchema.statics.findByCredentials = async function (email, password) {
    try {
        const user = await Login.findOne({ email })

        if (!user) {
            throw new Error("no user")
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new Error("unable to login")
        }
        return user
    }
    catch (e) {
        console.log(e)
    }

}
const Login = mongoose.model('Calculator', userSchema)
module.exports = Login