const BaseRepository = require('./contracts/BaseRepository')
const projectModel = require('../models/Project')
const Logger = require('../utils/logger')

class ProjectRepository extends BaseRepository {
  constructor(projectModel) {
    super(projectModel)
  }

  async filterCrossTechAndCat({ categories, technologies }) {
    try {
      console.log("entre en la funcion de  project repository")
      console.log(categories)
      console.log(technologies)
      let criteriaArray

      if (categories.length > 0 && technologies.length > 0) {
        console.log("entre en 0")
        criteriaArray = [
          { category: { $in: categories } },
          { technologies: { $in: technologies } },
        ]

        return await projectModel.find({ $and: criteriaArray })

      } else if (categories.length > 0 && technologies.length == 0) {
        console.log("entre en 1")
        criteriaArray = { category: { $in: categories } }

      } else if (categories.length == 0 && technologies.length > 0) {
        console.log("entre en 2")
        criteriaArray = { technologies: { $in: technologies } }
      }

      return await projectModel.find( criteriaArray )

    } catch (err) {
      console.log(err)
      Logger.error(
        `[${this.model.collection.collectionName}]: Operation error ${err.message}`
      )
      throw new Error(err)
    }
  }

  async filterByTitle(myTitle = '') {
    try {
      const criteria = { title: { $regex: `.*${myTitle}.*`, $options: 'i' } }
      return await projectModel.find(criteria)
    } catch (err) {
      console.log(err)
      Logger.error(
        `[${this.model.collection.collectionName}]: Operation error ${err.message}`
      )
      throw new Error(err)
    }
  }

  async filterByCategory(myCategory = '') {
    try {
      const criteria = {
        category: { $regex: `.*${myCategory}.*`, $options: 'i' },
      }
      return await projectModel.find(criteria)
    } catch (err) {
      console.log(err)
      Logger.error(
        `[${this.model.collection.collectionName}]: Operation error ${err.message}`
      )
      throw new Error(err)
    }
  }

  async filterByTechnology(myTech = '') {
    try {
      const criteria = { technologies: { $in: myTech.toLocaleLowerCase() } }
      return await projectModel.find(criteria)
    } catch (err) {
      console.log(err)
      Logger.error(
        `[${this.model.collection.collectionName}]: Operation error ${err.message}`
      )
      throw new Error(err)
    }
  }
}

module.exports = new ProjectRepository(projectModel)
