const userModel = require("../models/User");
const BaseRepository = require("./contracts/BaseRepository");

class UserRepository extends BaseRepository {
  constructor(userModel) {
    super(userModel);
    this.userModel = userModel;
  }

  async findUserByEmail(email) {
    const user = await this.userModel.findOne({ mail: email });
    return user;
  }

  async findUserByUsername(username) {
    const user = await this.userModel.findOne({ userName: username });
    return user;
  }
}

module.exports = new UserRepository(userModel);
