const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
class AuthServices {
  constructor() {}

  async encryptPassword(password) {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    return await bcrypt.hash(password, salt)
  }

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash)
  }

  async generateJWT(user) {
    const { id, username, email, photo } = user
    const payload = { id, username, email, photo }
    return jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '24h',
    })
  }

  async verifyJWT(token) {
    const user = jwt.verify(token, process.env.SECRET_KEY)
    return {
      user,
    }
  }
}

module.exports = AuthServices
