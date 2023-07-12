const stackModel = require('../models/Stack');
const BaseRepository = require('./contracts/BaseRepository');

class StackRepository extends BaseRepository {

  constructor(stackModel) {
    super(stackModel);
  }

}

module.exports = new StackRepository(stackModel);
