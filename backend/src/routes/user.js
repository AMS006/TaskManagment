const express = require("express")
const { signIn, signUp, getUserDetails } = require("../controllers/user")
const { isAuthorized } = require("../middleware/isAuthorized")

const router = express.Router()

router.post('/signin',signIn)

router.post('/signup',signUp)

router.get('/',isAuthorized,getUserDetails)

module.exports = router