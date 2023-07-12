const { Router } = require("express");
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  forgotPassword,
} = require("../controllers/user");

const router = new Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.patch("/forgot-password", forgotPassword);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
