const categoryModel = require('../models/Category');
const BaseRepository = require('./contracts/BaseRepository');

class CategoryRepository extends BaseRepository {

  constructor(categoryModel) {
    super(categoryModel);
  }

}

module.exports = new CategoryRepository(categoryModel);
