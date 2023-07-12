const bcrypt = require("bcrypt");

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
}

module.exports = AuthServices;
