const { Router } = require('express')
const { register, login, logout, verify } = require('../controllers/auth')
const {checkSchema} = require("express-validator");
const userCreateSchema = require("./schemas/user");
const logInCreateSchema = require("./schemas/logIn");
const {validate} = require("../middlewares/validator");

const router = new Router()

router.post('/register', [checkSchema(userCreateSchema), validate], register)
router.post('/login', [checkSchema(logInCreateSchema), validate],login)
router.post('/logout', logout)
router.post('/verify', verify)

router.post('/loginwithgoogle', login)
router.post('/registerwithgoogle', register)

module.exports = router
