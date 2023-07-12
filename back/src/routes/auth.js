const { Router } = require("express");
const { register, login } = require("../controllers/auth");

const router = new Router();

router.get("/register", register);
router.get("/login", login);

module.exports = router;
