const projectModel = require("../models/Project");
const BaseRepository = require("./contracts/BaseRepository");

class ProjectRepository extends BaseRepository {
  constructor(projectModel) {
    super(projectModel);
  }
}

module.exports = new ProjectRepository(projectModel);
