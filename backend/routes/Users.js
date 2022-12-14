require("dotenv").config()

const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const { validateRegister } = require("../models/UserValidator")

router.post("/register", async (req, res) => {
    try {
        const { error, value } = validateRegister(req.body)

        if(error) {
            return res.status(400).send(error.message)
        } else {
            const salt = await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(req.body.password, salt)

            const user = new User({
                email: req.body.email,
                username: req.body.username,
                password: hashedPassword
            })

            const newUser = await user.save()
            newUser.password = req.body.password
            res.status(201).json(newUser)
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post("/login", async (req, res) => {
    const user = await User.findOne({ username: req.body.username })
    if (user == null)
        return res.status(400).send("Cannot find user")
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign(user.id, process.env.ACCESS_TOKEN_SECRET)
            res.status(200).json({ token: token })
        } else {
            res.status(400).send("Wrong password")
        } 
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router