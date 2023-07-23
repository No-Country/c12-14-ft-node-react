const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class AuthServices {
  constructor() {}

  async encryptPassword(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return  await bcrypt.hash(password, salt);
  }

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  async generateJWT(user) {
    const { id } = user;
    const payload = { id };
    return jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
  }

  verifyJWT(token) {
    try {
      return jwt.verify(token, process.env.SECRET_KEY);

    }catch (err){
      return false
    }
  }
}

module.exports = AuthServices;
