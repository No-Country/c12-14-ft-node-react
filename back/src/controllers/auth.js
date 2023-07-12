const user = require("../repositories/user");
const userRepository = require("../repositories/user");
const AuthServices = require("../services/auth.service");

const register = async (req, res = response) => {
  const { username, mail, password, phonenumber } = req.body;
  const authServices = new AuthServices();

  try {
    const userEmail = await userRepository.findUserByEmail(mail);
    const userName = await userRepository.findUserByUsername(username);

    if (userEmail || userName) {
      return res.status(400).json({
        msg: "User already exists",
      });
    }

    const hash = await authServices.encryptPassword(password);
    const newUser = await userRepository.create({
      userName: username,
      mail: mail,
      password: hash,
    });

    res.status(200).json({ msg: "User created", newUser });
  } catch (error) {
    res.status(500).json({
      msg: "Error in register",
      error: error.message,
    });
  }
};

const login = async (req, res = response) => {
  const { username, mail, password } = req.body;
  const authServices = new AuthServices();

  try {
    let user;
    if (username.length === 0) {
      user = await userRepository.findUserByEmail(mail);
    } else {
      user = await userRepository.findUserByUsername(username);
    }

    if (!user) {
      return res.status(400).json({
        msg: "User does not exist",
      });
    }

    const isMatch = await authServices.comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        msg: "Incorrect password",
      });
    }

    res.status(200).json({
      msg: "Login success",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error in login",
      error: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};
