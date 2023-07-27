const googleAuthService = require('../services/googleAuth')
const userRepository = require('../repositories/user')
const {response} = require("express");
const {default: axios} = require("axios");

const validateGoogleLogInToken = async (req, res = response, next) => {

  const gAuth = new googleAuthService();

  const payload = await gAuth.validateToken(req.body.token);

  if (!payload.valid)
    return res.status(401)
      .send({message: "Invalid Token"});

  const user = await userRepository.findUserByEmail(payload.payload.email);

  if (!user)
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


const validateGoogleRegisterToken = async (req, res = response, next) => {

  const gAuth = new googleAuthService();

  const payload = await gAuth.validateToken(req.body.token);

  if (!payload.valid)
    return res.status(401)
      .send({message: "Invalid Token"});

  const user = await userRepository.findUserByEmail(payload.payload.email);

  if (user)
    return res.status(401)
      .send({message: "User found, please sign in"});

  req.body.email = payload.payload.email;
  req.body.username = payload.payload.name;
  req.body.password = payload.payload.picture + process.env.BYPASS || 'bYp4ss';
  req.body.picture = payload.payload.picture;

  return next();

}

const validateGithubAuth = async (req, res = reponse, next) => {

  try {
    const ghToken = await axios.post(`${process.env.GITHUB_URL}/login/oauth/access_token`, {
      client_id: process.env.GITHUB_CLIENT,
      client_secret: process.env.GITHUB_SECRET,
      code: req.query.code
    }, {
      headers: {
        Accept: "application/json"
      }
    });

    if (ghToken.data.error)
      return res.status(401)
        .send({message: "Invalid Token"})


    const userInfo = await axios.get(`https://api.github.com/user`, {
      headers: {
        Accept: "application/json",
        Authorization: `${ghToken.data.token_type} ${ghToken.data.access_token}`
      }
    });

    req.body.email = userInfo.data.email || `${userInfo.data.name}.${userInfo.data.login}@temporaryUva.com`;
    req.body.username = userInfo.data.name + '-' + userInfo.data.login;

    const user = await userRepository.findOneBy({$or: [{email: req.body.email },{userName: req.body.username}]});

    if(user)
      req.body.id = user.id
    else{
      req.body.password = `${userInfo.data.avatar_url}${process.env.BYPASS || 'bYp4ss'}`;
      req.body.picture = userInfo.data.avatar_url;
    }



    next();
  } catch (e) {

    console.log(e.message)

    return res.status(401)
      .send({message: "Invalid Token"})

  }


}

module.exports = {
  validateGoogleLogInToken,
  validateGoogleRegisterToken,
  validateGithubAuth,
}

