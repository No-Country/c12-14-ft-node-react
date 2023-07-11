const { response } = require("express");
const userRepository = require("../repositories/project");

const getProjects = async (req, res = response) => {
  await userRepository
    .all()
    .then((data) => {
      res.status(200).json({ msg: "Projects found", user: data });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Projects find error", error: err.message });
    });
};

const getProject = async (req, res = response) => {
  const { id } = req.params;

  await userRepository
    .findById(id)
    .then((data) => {
      res.status(200).json({ msg: "Project found", user: data });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Project find error", error: err.message });
    });
};

const setProjects = async (req, res = response) => {
  await userRepository
    .create(req.body)
    .then((data) => {
      res.status(201).json({ msg: "Project successfully created", user: data });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Project error", error: err.message });
    });
};

const updateProject = async (req, res = response) => {
  const { id } = req.params;
  await userRepository
    .UpdateById(id, req.body)
    .then((data) => {
      res.status(200).json({ msg: "Project updated", user: data });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Project update error", error: err.message });
    });
};
const deleteProject = async (req, res = response) => {
  const { id } = req.params;

  await userRepository
    .deleteById(id)
    .then((data) => {
      res.status(200).json({ msg: "Project deleted", user: data });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Project delete error", error: err.message });
    });
};

module.exports = {
  getProjects,
  setProjects,
  getProject,
  updateProject,
  deleteProject,
};
