const express = require("express")
const router = express.Router()
const MEME = require("../models/MEMES")
const jwt = require("jsonwebtoken")
const { validateMEMES } = require("../models/MEMESValidator")

// GET all memes
router.get("/", async (req, res) => {
    try {
        const memes = await MEME.find()
        res.json(memes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// GET 1 meme by  id
router.get("/:id", getMeme, (req, res) => {
    res.send(res.meme) // res.json(res.meme)
})

// POST a meme
router.post("/", async (req, res) => {
    try {
        const authHeader = req.headers["authorization"]
        const tokenAuth = authHeader && authHeader.split(" ")[1]
        if (tokenAuth == null)
            return res.status(401).json({ message: "The user should be logged in to create a meme"})

        const { error, value} = validateMEMES(req.body)

        if(error) {
            return res.status(400).send(error.message)
        } else {
            let decodedTokenOut
            jwt.verify(tokenAuth, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
                if (err)
                    return res.status(403).json({ message: "You can modify only your memes" })
                decodedTokenOut = decodedToken
            })

            const meme = new MEME({
                Description: req.body.Description,
                owner: decodedTokenOut
            })
            const newMeme = await meme.save()
            res.status(201).json(newMeme)
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// PATCH for modifying a meme by id
router.patch("/:id", getMeme, async (req, res) => {
    const authHeader = req.headers["authorization"]
    const tokenAuth = authHeader && authHeader.split(" ")[1]
        if (tokenAuth == null)
            return res.status(401).json({ message: "The user should be logged in to create a meme"})

    const { error, value} = validateMEMES(req.body)

    if (error) {
        return res.status(400).send(error.message)
    } else {
        let decodedTokenOut
        jwt.verify(tokenAuth, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if (err)
                return res.status(403).json({ message: "You can modify only your memes" })
            decodedTokenOut = decodedToken
        })
        if (res.meme.owner == decodedTokenOut)
            res.meme.Description = req.body.Description
        else
            return res.status(403).json({ message: "You can modify only your memes" })
    }
    try {
        //await MEME.updateOne({ _id: req.params.id }, { Description: req.body.Description }) this also works
        const updatedMeme = await res.meme.save()
        res.status(200).json(updatedMeme)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// DELETE a meme by id
router.delete("/:id", getMeme, async (req, res) => {
    try {
        await res.meme.remove()
        res.json({ message: "Deleted meme" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// function for finding a meme by id
async function getMeme(req, res, next) {
    let meme
    try {
        meme = await MEME.findById(req.params.id)
    } catch (err) {
        if(meme == null)
            return res.status(404).json({ message: "Cannot find MEME" })
        else
            return res.status(500).json({ message: err.message })
    }

    res.meme = meme
    next()
}

module.exports = router