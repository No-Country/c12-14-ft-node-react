const {response} = require('express');
const userRepository = require('../repositories/user');
const getUsers = async (req, res = response) => {

  await userRepository.all().then((data) => {

    res.status(200)
      .json({msg: 'User found', user: data});

  }).catch(err => {
    res.status(500).json({msg: 'User find error', error: err.message});
  });


}

const getUser = async (req, res = response) => {

  const {id} = req.params;

  await userRepository.findById(id).then((data) => {

    res.status(200)
      .json({msg: 'User found', user: data});

  }).catch(err => {
    res.status(500).json({msg: 'User find error', error: err.message});
  });
}

const setUsers = async (req, res = response) => {

  await userRepository.create(req.body).then((data) => {

    res.status(201)
      .json({msg: 'User successfully created', user: data});

  }).catch(err => {
    res.status(500).json({msg: 'User error', error: err.message});
  });

}

const updateUser = async (req, res = response) => {
  const {id} = req.params;
  await userRepository.UpdateById(id, req.body).then((data) => {

    res.status(200)
      .json({msg: 'User updated', user: data});

  }).catch(err => {
    res.status(500).json({msg: 'User update error', error: err.message});
  });

}
const deleteUser = async (req, res = response) => {
  const {id} = req.params;

  await userRepository.deleteById(id).then((data) => {

    res.status(200)
      .json({msg: 'User deleted', user: data});

  }).catch(err => {
    res.status(500).json({msg: 'User delete error', error: err.message});
  });

}


module.exports = {
  getUsers,
  setUsers,
  getUser,
  updateUser,
  deleteUser
}
