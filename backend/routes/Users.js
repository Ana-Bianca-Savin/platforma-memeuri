require("dotenv").config()

const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

router.get("/", async (req, res) => {  // TEST
        const users = await User.find()
        res.json(users)
})

router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const user = new User({
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword
        })
        try {
            const newUser = await user.save()
            newUser.password = req.body.password
            res.status(201).json(newUser)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
    
})

router.post("/login", async (req, res) => {
    const user = await User.findOne({ username: req.body.username }) //(user => user.username == req.body.username)
    if (user == null)
        return res.status(400).send("Cannot find user")    // eroarile de nu exista mail sau parola nu sunt date bine
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign(user.username, "e1f3d34567fab5d71aaffecd619306ad5f7e1c6adcef173048ad58c6f9a16d7c")
            res.status(200).json({ accessToken: accessToken })
        } else {
            res.status(400).send("Wrong password")
        } 
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router