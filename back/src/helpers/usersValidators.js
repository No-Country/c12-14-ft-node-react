const userRepository = require('../repositories/user')

const checkEmailNotInUse =  async (email = '') =>{

  const existe = await userRepository.findUserByEmail(email);

  if(existe)
    throw new Error('Email already taken ');


}

const checkUserNameNotInUse =  async (userName = '') =>{

  const existe = await userRepository.findUserByUsername(userName);

  if(existe)
    throw new Error('User name already taken');


}

//TODO: Stack validation



module.exports = {
  checkEmailNotInUse,
  checkUserNameNotInUse,
}

