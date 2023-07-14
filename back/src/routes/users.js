const { Router } = require("express");
const {checkSchema} = require("express-validator");
const userCreateSchema = require('./schemas/user');

const {validate} = require("../middlewares/validator");
const {
  getUsers,
  getUser,
  setUsers,
  updateUser,
  deleteUser,
  forgotPassword,
} = require("../controllers/user");

const router = new Router();

router.get("/",  getUsers);

router.get("/:id", getUser);
router.patch("/forgot-password", forgotPassword);
router.post("/",[checkSchema(userCreateSchema), validate], setUsers);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
