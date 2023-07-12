const userModel = require("../models/User");
const BaseRepository = require("./contracts/BaseRepository");

class UserRepository extends BaseRepository {
  constructor(userModel) {
    super(userModel);
  }

  async create(data) {
    data.pass = bycrypt(data.pass, 545);
    return super.create(data);
  }
}

module.exports = new UserRepository(userModel);
