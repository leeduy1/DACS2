const router = require('express').Router()
const User = require("../models/Users")

// Register
router.post('/signup', async(req,res) => {
    const {name, phoneNumber, email, password} = req.body
    try {
        const user = await User.create({name,phoneNumber,email,password})
        res.json(user)
    } catch (e) {
        // if(e.code == 11000) return res.status(400).send('Email already exitsts')
        res.status(400).send(e.message)
    }
})

router.post('/login', async(req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findByCredentials(email,password)
        res.json(user)
        return user
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.get('/', async(req,res) => {
    const {email} = req.body
    try {
        const user = await User.findOne(email)
        res.status(200).json(user)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports = router