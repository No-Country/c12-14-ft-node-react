const userModel = require("../models/User");
const BaseRepository = require("./contracts/BaseRepository");

class UserRepository extends BaseRepository {
  constructor(userModel) {
    super(userModel);
  }

  async findUserByEmail(email) {
    return await this.model.findOne({ email: email });
  }

  async findUserByUsername(username) {
    return  await this.model.findOne({ userName: username });
  }

  async changePassword(email, newPassword) {
    const user = await this.model.findOne({ email: email });
    user.password = newPassword;
    await user.save();
    return user;
  }
}

module.exports = new UserRepository(userModel);
