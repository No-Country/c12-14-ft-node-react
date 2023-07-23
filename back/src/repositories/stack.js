const stackModel = require('../models/Stack')
const BaseRepository = require('./contracts/BaseRepository')

class StackRepository extends BaseRepository {
  constructor(stackModel) {
    super(stackModel)
  }

  async filterSubstring(stackLooked) {
    try {
      return await stackModel.find(
        {
          stackName: { $regex: `.*${stackLooked}.*`, $options: 'i' },
        },
        { _id: 0, id: '$_id', stackName: 1 } // no me traigo el _id, sino que quiero un parametro id con el valor de _id
      )
    } catch (err) {
      Logger.error(
        `[${this.model.collection.collectionName}]: Operation error ${err.message}`
      )
      throw new Error(err)
    }
  }
}

module.exports = new StackRepository(stackModel)
