const { Router } = require('express')

const { register, login, logout, googleLogIn, googleRegister, firebaseAuth} = require('../controllers/auth')
const {checkSchema} = require("express-validator");
const registerValidation = require("./schemas/auth/register");
const logInValidation = require("./schemas/auth/logIn");
const  loginGoogleValidation= require("./schemas/auth/logInGoogle");
const singUpValidation = require("./schemas/auth/singUp")
const {validate} = require("../middlewares/validator");
const {validateGoogleLogInToken, validateGoogleRegisterToken, validateFirebaseToken} = require("../middlewares/thirdPartyAuthValidator");

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
router.post('/register', [checkSchema(registerValidation), validate], register)

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
router.post('/login', [checkSchema(logInValidation), validate],login)

router.post('/logout', logout)


/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User token login
 * /api/auth/google/login:
 *   post:
 *     summary: Retrieve a token app .
 *     tags: [Auth]
 *     description: Retrieve token user using google token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: Google token.
 *                 example: eyJhbGciOiJSUzI1NiIsImtpZCI6ImEz...
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
router.post('/google/login', [checkSchema(loginGoogleValidation), validate, validateGoogleLogInToken], googleLogIn)

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User token login
 * /api/auth/google/register:
 *   post:
 *     summary: Retrieve a token app .
 *     tags: [Auth]
 *     description: Retrieve token user using google token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: Google token.
 *                 example: eyJhbGciOiJSUzI1NiIsImtpZCI6ImEz...
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
router.post('/google/register', [checkSchema(loginGoogleValidation), validate, validateGoogleRegisterToken], googleRegister)

router.post('/external', [checkSchema(singUpValidation), validate, validateFirebaseToken], firebaseAuth)

module.exports = router
