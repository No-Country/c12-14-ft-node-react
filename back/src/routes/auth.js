const { Router } = require('express')
const { register, login, logout, verify } = require('../controllers/auth')

const router = new Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.post('/verify', verify)

router.post('/loginwithgoogle', login)
router.post('/registerwithgoogle', register)

module.exports = router
