const BaseRepository = require('./contracts/BaseRepository')
const projectModel = require('../models/Project')
const Logger = require('../utils/logger')

class ProjectRepository extends BaseRepository {
  constructor(projectModel) {
    super(projectModel)
  }

  async allPagination(limit, page, getPages = 0) {
    try {
      const documentToReturn = await projectModel
        .find()
        .limit(+limit)
        .skip((+page - 1) * limit)
        .sort({ createdAt: -1 })

      if (getPages) {
        const totalDocuments = await projectModel.find().count()
        const totalPages = Math.ceil(totalDocuments / limit)
        return {
          totalPages: totalPages,
          documentsCurrentPage: documentToReturn,
        }
      }
      return { documentsCurrentPage: documentToReturn }
    } catch (err) {
      console.log(err)
      Logger.error(
        `[${this.model.collection.collectionName}]: Operation error ${err.message}`
      )
      throw new Error(err)
    }
  }

  async filterCrossTechAndCat({
    categories,
    technologies,
    limit,
    page,
    getPages,
  }) {
    try {
      const limitAsNumber = +limit
      const pageAsNumber = +page
      const getPagesBoolean = +getPages
      let criteriaArray

      if (categories.length > 0 && technologies.length > 0) {
        criteriaArray = [
          { category: { $in: categories } },
          { technologies: { $in: technologies } },
        ]

        const documentToReturn = await projectModel
          .find({ $and: criteriaArray })
          .limit(limitAsNumber)
          .skip((pageAsNumber - 1) * limitAsNumber)
          .sort({ createdAt: -1 })

        if (getPagesBoolean) {
          const totalDocuments = await projectModel
            .find({ $and: criteriaArray })
            .count()
          console.log('totalDocuments: ', totalDocuments)
          const totalPages = Math.ceil(totalDocuments / limitAsNumber)
          console.log('totalPages: ', totalPages)
          return {
            totalPages: totalPages,
            documentsCurrentPage: documentToReturn,
          }
        }
        return { documentsCurrentPage: documentToReturn }
      } else if (categories.length > 0 && technologies.length == 0) {
        criteriaArray = { category: { $in: categories } }
      } else if (categories.length == 0 && technologies.length > 0) {
        criteriaArray = { technologies: { $in: technologies } }
        console.log(getPagesBoolean, typeof getPagesBoolean)
      }

      const documentToReturn = await projectModel
        .find(criteriaArray)
        .limit(limitAsNumber)
        .skip((pageAsNumber - 1) * limitAsNumber)
        .sort({ createdAt: -1 })

      if (getPagesBoolean) {
        const totalDocuments = await projectModel.find(criteriaArray).count()
        console.log('totalDocuments: ', totalDocuments)
        const totalPages = Math.ceil(totalDocuments / limitAsNumber)
        console.log('totalPages: ', totalPages)
        return {
          totalPages: totalPages,
          documentsCurrentPage: documentToReturn,
        }
      }
      return { documentsCurrentPage: documentToReturn }
    } catch (err) {
      console.log(err)
      Logger.error(
        `[${this.model.collection.collectionName}]: Operation error ${err.message}`
      )
      throw new Error(err)
    }
  }

  async filterByTitle(myTitle = '', limit, page, getPages = 0) {
    try {
      const limitAsNumber = +limit
      const pageAsNumber = +page
      const getPagesBoolean = +getPages
      const criteria = { title: { $regex: `.*${myTitle}.*`, $options: 'i' } }

      const documentToReturn = await projectModel
        .find(criteria)
        .limit(limitAsNumber)
        .skip((pageAsNumber - 1) * limitAsNumber)
        .sort({ createdAt: -1 })

      if (getPagesBoolean) {
        const totalDocuments = await projectModel.find(criteria).count()
        console.log('totalDocuments: ', totalDocuments)
        const totalPages = Math.ceil(totalDocuments / limitAsNumber)
        console.log('totalPages: ', totalPages)
        return {
          totalPages: totalPages,
          documentsCurrentPage: documentToReturn,
        }
      }
      return { documentsCurrentPage: documentToReturn }
    } catch (err) {
      console.log(err)
      Logger.error(
        `[${this.model.collection.collectionName}]: Operation error ${err.message}`
      )
      throw new Error(err)
    }
  }

  async filterByCategory(myCategory = '', limit, page, getPages = 0) {
    try {
      const limitAsNumber = +limit
      const pageAsNumber = +page
      const getPagesBoolean = +getPages

      const criteria = {
        category: { $regex: `.*${myCategory}.*`, $options: 'i' },
      }
      const documentsToReturn = await projectModel
        .find(criteria)
        .limit(limitAsNumber)
        .skip((pageAsNumber - 1) * limitAsNumber)
        .sort({ createdAt: -1 })

      if (getPagesBoolean) {
        const totalDocuments = await projectModel.find(criteria).count()
        const totalPages = Math.ceil(totalDocuments / limitAsNumber)
        return {
          totalPages: totalPages,
          documentsCurrentPage: documentsToReturn,
        }
      }
      return { documentsCurrentPage: documentsToReturn }
    } catch (err) {
      console.log(err)
      Logger.error(
        `[${this.model.collection.collectionName}]: Operation error ${err.message}`
      )
      throw new Error(err)
    }
  }

  async filterByTechnology(myTech = '', limit, page, getPages = 0) {
    try {
      const limitAsNumber = +limit
      const pageAsNumber = +page
      const getPagesBoolean = +getPages
      const criteria = { technologies: { $in: myTech.toLocaleLowerCase() } }
      const documentsToReturn = await projectModel
        .find(criteria)
        .limit(limitAsNumber)
        .skip((pageAsNumber - 1) * limitAsNumber)
        .sort({ createdAt: -1 })

      if (getPagesBoolean) {
        const totalDocuments = await projectModel.find(criteria).count()
        const totalPages = Math.ceil(totalDocuments / limitAsNumber)
        return {
          totalPages: totalPages,
          documentsCurrentPage: documentsToReturn,
        }
      }
      return { documentsCurrentPage: documentsToReturn }
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
