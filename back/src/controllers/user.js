const { response } = require("express");
const userRepository = require("../repositories/user");
const AuthServices = require("../services/auth.service");

const getUsers = async (req, res = response) => {
  await userRepository
    .all()
    .then((data) => {
      res.status(200).json({ msg: "User found", user: data });
    })
    .catch((err) => {
      res.status(500).json({ msg: "User find error", error: err.message });
    });
};

const getUser = async (req, res = response) => {
  const { id } = req.params;

  await userRepository
    .findById(id)
    .then((data) => {
      res.status(200).json({ msg: "User found", user: data });
    })
    .catch((err) => {
      res.status(500).json({ msg: "User find error", error: err.message });
    });
};

const updateUser = async (req, res = response) => {
  const { id } = req.params;
  await userRepository
    .UpdateById(id, req.body)
    .then((data) => {
      res.status(200).json({ msg: "User updated", user: data });
    })
    .catch((err) => {
      res.status(500).json({ msg: "User update error", error: err.message });
    });
};

const deleteUser = async (req, res = response) => {
  const { id } = req.params;

  await userRepository
    .deleteById(id)
    .then((data) => {
      res.status(200).json({ msg: "User deleted", user: data });
    })
    .catch((err) => {
      res.status(500).json({ msg: "User delete error", error: err.message });
    });
};

const forgotPassword = async (req, res = response) => {
  const { email, password } = req.body;
  const auth = new AuthServices();
  const hash = await auth.encryptPassword(password);

  await userRepository
    .changePassword(email, hash)
    .then((data) => {
      res.status(200).json({ msg: "Password changed", user: data });
    })
    .catch((err) => {
      res.status(500).json({ msg: "User not exits", error: err.message });
    });
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  forgotPassword,
};
