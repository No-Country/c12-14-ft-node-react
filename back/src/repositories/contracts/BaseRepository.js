const Logger = require('../../utils/logger')

class BaseRepository {
  constructor(model) {
    this.model = model
  }

  async all() {
    return await this.model
      .find()
      .then((data) => {
        Logger.info(`[${this.model.collection.collectionName}]: Operation ok`)
        return data
        Logger.info(`[${this.model.collection.collectionName}]: Operation ok`)
        return data
      })
      .catch((err) => {
        Logger.error(
          `[${this.model.collection.collectionName}]: Operation error ${err.message}`
        )
        throw new Error(err)
      })
  }

  async create(data) {
    return await this.model
      .create(data)
      .then((dataCreated) => {
        Logger.info(
          `[${this.model.collection.collectionName}]: Operation saved successfully`
        )
        return dataCreated
      })
      .catch((err) => {
        Logger.error(
          `[${this.model.collection.collectionName}]: Operation error ${err.message}`
        )
        throw new Error(err)
      })
  }

  async findById(id) {
    return await this.model
      .findById(id)
      .then((data) => {
        Logger.info(`[${this.model.collection.collectionName}]: Operation ok`)
        return data
      })
      .catch((err) => {
        Logger.error(
          `[${this.model.collection.collectionName}]: Operation error ${err.message}`
        )
        throw new Error(err)
      })
      .then((dataUpdated) => {
        Logger.info(`[${this.model.collection.collectionName}]: Operation ok`)
        return dataUpdated
      })
      .catch((err) => {
        Logger.error(
          `[${this.model.collection.collectionName}]: Operation error ${err.message}`
        )
        throw new Error(err)
      })
  }

  async deleteById(id) {
    return await this.model
      .findByIdAndDelete(id)
      .then((data) => {
        Logger.info(`[${this.model.collection.collectionName}]: Operation ok`)
        return data ? true : false
      })
      .catch((err) => {
        Logger.error(
          `[${this.model.collection.collectionName}]: Operation error ${err.message}`
        )
        throw new Error(err)
      })
  }
}

module.exports = BaseRepository
