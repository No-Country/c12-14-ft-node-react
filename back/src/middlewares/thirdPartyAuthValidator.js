const googleAuthService = require('../services/googleAuth')
const userRepository = require('../repositories/user')
const {response} = require("express");

const validateGoogleLogInToken =  async (req, res = response,next) =>{

  const gAuth = new googleAuthService();

  const payload = await gAuth.validateToken(req.body.token);

  if (!payload.valid)
    return res.status(401)
      .send({message: "Invalid Token"});

  const user = await userRepository.findUserByEmail(payload.payload.email);

  if(!user)
    return res.status(401)
      .send({message: "User not found"});

  if (!user.isActive)
    return res.status(401)
      .send({message: "User not found"});

  if (!user.googleAuth)
    return res.status(401)
      .send({message: "User not able to login with google"});

  req.body.user = user.id;

  return next();

}


const validateGoogleRegisterToken =  async (req, res = response,next) =>{

  const gAuth = new googleAuthService();

  const payload = await gAuth.validateToken(req.body.token);

  if (!payload.valid)
    return res.status(401)
      .send({message: "Invalid Token"});

  const user = await userRepository.findUserByEmail(payload.payload.email);

  if(user)
    return res.status(401)
      .send({message: "User found, please sign in"});

  req.body.email = payload.payload.email;
  req.body.username = payload.payload.name;
  req.body.password = payload.payload.picture+process.env.BYPASS || 'bYp4ss';
  req.body.picture = payload.payload.picture;

  return next();

}

module.exports = {
  validateGoogleLogInToken,
  validateGoogleRegisterToken,
}

