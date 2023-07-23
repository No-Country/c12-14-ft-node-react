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

const checkEmailRegistered =  async (email = '') =>{

  const existe = await userRepository.findUserByEmail(email);

  if(!existe)
    throw new Error("Email doesn't exist ");


}

const checkUserNameRegistered =  async (userName = '') =>{

  const existe = await userRepository.findUserByUsername(userName);

  if(!existe)
    throw new Error("User name doesn't exist");


}

const checkUserRegisteredById =  async (id = '') =>{

  const existe = await userRepository.findById(id);

  if(!existe)
    throw new Error("User doesn't exist");


}

//TODO: Stack validation



module.exports = {
  checkEmailNotInUse,
  checkUserNameNotInUse,
  checkEmailRegistered,
  checkUserNameRegistered,
  checkUserRegisteredById,
}

