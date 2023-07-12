const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class AuthServices {
  constructor() {}

  async encryptPassword(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  async comparePassword(password, hash) {
    const result = await bcrypt.compare(password, hash);
    return result;
  }

  async generateJWT(user) {
    const { id, username, mail } = user;
    const payload = { id, username, mail };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
    return token;
  }

  async verifyJWT(token) {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    return {
      user,
    };
  }
}

module.exports = AuthServices;
