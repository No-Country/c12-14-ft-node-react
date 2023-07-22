const {response} = require("express");
const AuthService = require('../services/auth.service')
const moment = require("moment");


const validateJWT = (req, res = response, next) => {

  const token = req.header('Authorization')

  if (!token)
    return res.status(403)
      .send({message: "Authorization missing"});

  const authServices = new AuthService();

  const validToken = authServices.verifyJWT(token.split(" ")[1]);

  if (!validToken)
    return res.status(401)
      .send({message: "Unauthorized"});

  if (token.exp <= moment().unix())
    return res.status(401)
      .send({message: "Unauthorized"});

  req.body.user = validToken.id;
  return next();


}


module.exports = {
  validateJWT
}
