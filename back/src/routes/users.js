const { Router } = require("express");
const {
  getUsers,
  getUser,
  setUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const router = new Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", setUsers);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
