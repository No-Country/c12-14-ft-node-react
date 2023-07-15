const { Router } = require('express')
const { register, login, logout, verify } = require('../controllers/auth')
const {checkSchema} = require("express-validator");
const userCreateSchema = require("./schemas/user");
const logInCreateSchema = require("./schemas/logIn");
const {validate} = require("../middlewares/validator");

const router = new Router()

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication
 * /api/auth/register:
 *   post:
 *     summary: Register users into the app.
 *     tags: [Auth]
 *     description: Register users into the app.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: name@mail.com
 *               userName:
 *                 type: string
 *                 description: The user's nickname.
 *                 example: elMaNotas
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: New user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: User found
 *                 user:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The user ID.
 *                         example: 64b1ea33bda94284caf3be19
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: name@mail.com
 *                       userName:
 *                         type: string
 *                         description: The user's nickname.
 *                         example: elMaNotas
 *                       lastConnection:
 *                         type: dateTime
 *                         example: 2023-07-15T00:37:07.299Z
 *                       hidden:
 *                         type: boolean
 *                       createdAt:
 *                         type: dateTime
 *                         example: 2023-07-15T00:37:07.299Z
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-07-15T00:37:07.299Z
 *
 */
router.post('/register', [checkSchema(userCreateSchema), validate], register)

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User token login
 * /api/auth/login:
 *   post:
 *     summary: Retrieve a token.
 *     tags: [Auth]
 *     description: Retrieve token user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: name@mail.com
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login token app.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: User found
 *                 session:
 *                   type: string
 *                   example: created
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 */
router.post('/login', [checkSchema(logInCreateSchema), validate],login)

router.post('/logout', logout)

router.post('/verify', verify)

router.post('/loginwithgoogle', login)
router.post('/registerwithgoogle', register)

module.exports = router
