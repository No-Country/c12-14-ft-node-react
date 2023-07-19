const { Router } = require("express");

const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  forgotPassword,
} = require("../controllers/user");
const {checkSchema} = require("express-validator");
const updateValidation = require("./schemas/users/update");
const deleteValidation = require("./schemas/users/delete");
const getOneValidation = require("./schemas/users/getOne");
const {validate} = require("../middlewares/validator");

/**
 * @swagger
 * components:
 *   schemas:
 *     create:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The user ID.
 *         email:
 *           type: string
 *           description: The user's email.
 *         userName:
 *           type: string
 *           description: The user's nickname.
 *         lastConnection:
 *           type: dateTime
 *         hidden:
 *           type: boolean
 *         createdAt:
 *           type: dateTime
 *         updatedAt:
 *           type: string
 *       example:
 *         id: 64b1ea33bda94284caf3be19
 *         email: name@mail.com
 *         userName: elMaNotas
 *         lastConnection: 2020-03-10T04:05:06.157Z
 *         hidden: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 *
 */


const router = new Router();



/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /api/users:
 *   get:
 *     summary: Retrieve a list of  users.
 *     tags: [Users]
 *     description: Retrieve a list of users from JSONPlaceholder.
 *     responses:
 *       200:
 *         description: A list of users.
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
router.get("/",  getUsers);

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The specific user managing API
 * /api/users/{id}:
 *   get:
 *     summary: Retrieve a list of  users.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *           description: The user id
 *     description: Retrieve a list of users from JSONPlaceholder.
 *     responses:
 *       200:
 *         description: A list of users.
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
 *                         type: dateTime
 *                         example: 2023-07-15T00:37:07.299Z
 *
 */
router.get("/:id", [checkSchema(getOneValidation), validate], getUser);



router.patch("/forgot-password", forgotPassword);


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The specific user managing API
 * /api/users/{id}:
 *   patch:
 *     summary: Retrieve a list of  users.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *           description: The user id
 *     description: Retrieve a list of users from JSONPlaceholder.
 *     responses:
 *       200:
 *         description: A list of users.
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
 *                         type: dateTime
 *                         example: 2023-07-15T00:37:07.299Z
 *
 */
router.patch("/:id",[checkSchema(updateValidation), validate], updateUser);

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The specific user managing API
 * /api/users/{id}:
 *   delete:
 *     summary: Delete an a user.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *           description: The user id
 *     description: Retrieve a list of users from JSONPlaceholder.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: User deleted
 *                 user:
 *                   type: boolean
 *
 *
 */
router.delete("/:id", [checkSchema(deleteValidation), validate], deleteUser);

module.exports = router;
