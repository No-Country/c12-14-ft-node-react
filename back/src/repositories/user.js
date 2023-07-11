const userModel = require('../models/User');
const BaseRepository = require('./contracts/BaseRepository');

class UserRepository extends BaseRepository {

  constructor(userModel) {
    super(userModel);
  }


}

module.exports = new UserRepository(userModel);
