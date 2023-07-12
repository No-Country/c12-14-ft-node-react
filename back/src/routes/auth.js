const { Router } = require("express");
const { register, login, verify } = require("../controllers/auth");

const router = new Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify", verify);

module.exports = router;
