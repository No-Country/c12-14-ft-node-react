const {response} = require('express');
const  user= require('../models/User');
const Logger = require('../utils/logger')
const getUsers = ( req, res = response) => {

    res.json({msg: 'Hello user controller'});

}

const  setUsers = async ( req, res = response) => {

  const {password, userName, mail} = req.body;

  const  usuario = await user.create({
    password: password,
    userName: userName,
    mail: mail
  }).then(() =>{
    Logger.info('[Users]: Operation saved successfully');
    res.status(201).json({msg: 'Hello user post controller'});

  })
    .catch(err => Logger.error(`[Users]: Operation error ${err.message}`));




  // return result;

}


module.exports = {
  getUsers,
  setUsers,
}
