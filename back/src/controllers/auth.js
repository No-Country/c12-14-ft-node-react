const userRepository = require('../repositories/user')
const AuthServices = require('../services/auth.service')
const {serialize} = require('cookie')
const {response} = require("express");

const register = async (req, res = response) => {
  const {userName, email, password} = req.body
  const authServices = new AuthServices()

  try {

    const hash = await authServices.encryptPassword(password)
    const newUser = await userRepository.create({
      userName: userName,
      email: email,
      password: hash,
    })

    res.status(200).json({msg: 'User created', newUser})
  } catch (error) {
    res.status(500).json({
      msg: 'Error in register',
      error: error.message,
    })
  }
}

const login = async (req, res = response) => {
  const { userName, email, password } = req.body
  const authServices = new AuthServices()

  try {
    let user

    if (userName) {
      if (userName.length !== 0)
        user = await userRepository.findUserByUsername(userName)
    }else
      user = await userRepository.findUserByEmail(email)


    if (!user) {
      return res.status(400).json({
        msg: 'User does not exist',
      })
    }

    const isMatch = await authServices.comparePassword(password, user.password)

    if (!isMatch) {
      return res.status(400).json({
        msg: 'Incorrect password',
      })
    } else {
      const token = await authServices.generateJWT({
        id: user.id,
      })

      const serialized = serialize('devCollabToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'production',
        sameSite: 'none',
        maxAge: 60 * 60 * 24,
      })

      res.setHeader('Set-Cookie', serialized)

      res.status(200).json({
        msg: 'Login success',
        session: 'created',
        token,
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Error in login',
      error: error.message,
    })
  }
}

const logout = async (req, res = response) => {
  try {
    // const token = req.cookies.devCollabToken;
    const token = req.body.devCollabToken
    if (token) {
      const authServices = new AuthServices()
      try {
        authServices.verifyJWT(token)
        const serialized = serialize('devCollabToken', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'production',
          sameSite: 'none',
          maxAge: 0,
        })
        res.setHeader('Set-Cookie', serialized)
        res.status(200).json({
          msg: 'Logout success',
          session: 'destroyed',
        })
      } catch (error) {}
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Error in logout',
      error: error.message,
    })
  }
}

const googleLogIn = async (req, res = response) => {

  const authServices = new AuthServices()

  const token = await authServices.generateJWT({
    id: req.body.user,
  })

  const serialized = serialize('devCollabToken', token, {
    httpOnly: true,
    sameSite: 'none',
    maxAge: 60 * 60 * 24,
  })

  res.setHeader('Set-Cookie', serialized)

  res.status(200).json({
    msg: 'Login success',
    session: 'created',
    token,
  })

}

const googleRegister = async (req, res = response) => {

  const authServices = new AuthServices()

  try {

    const hash = await authServices.encryptPassword(req.body.password)
    const newUser = await userRepository.create({
      userName: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.picture,
      googleAuth:true
    })

    const token = await authServices.generateJWT({
      id: newUser.id,
    })

    const serialized = serialize('devCollabToken', token, {
      httpOnly: true,
      sameSite: 'none',
      maxAge: 60 * 60 * 24,
    })

    res.setHeader('Set-Cookie', serialized)


    res.status(200).json({msg: 'User created', newUser,session: 'created',
      token,})
  } catch (error) {
    res.status(500).json({
      msg: 'Error in register',
      error: error.message,
    })
  }

}


const githubGetAccess = (req, res= response) =>{

  res.redirect(`${process.env.GITHUB_URL}/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT}`);

}



const githubCallback = async (req, res = response) =>{

  const authServices = new AuthServices()

  try {

    if(!req.body.id) {
      const hash = await authServices.encryptPassword(req.body.password)

      const newUser = await userRepository.create({
        userName: req.body.username,
        email: req.body.email,
        password: hash,
        photo: req.body.picture,
        gitHubAuth: true
      })
    }

    const token = await authServices.generateJWT({
      id: req.body.id || newUser.id,
    })

    const serialized = serialize('devCollabToken', token, {
      httpOnly: true,
      sameSite: 'none',
      maxAge: 60 * 60 * 24,
    })

    res.setHeader('Set-Cookie', serialized)


    res.status(200).json({msg: 'User created',session: 'created',
      token,})
  } catch (error) {
    res.status(500).json({
      msg: 'Error in register',
      error: error.message,
    })
  }

}

module.exports = {
  register,
  login,
  logout,
  googleLogIn,
  googleRegister,
  githubGetAccess,
  githubCallback
}
