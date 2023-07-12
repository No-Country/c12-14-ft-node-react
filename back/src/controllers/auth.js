const user = require("../repositories/user");
const userRepository = require("../repositories/user");
const AuthServices = require("../services/auth.service");
const { serialize } = require("cookie");

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
    } else {
      console.log(user);
      const token = await authServices.generateJWT({
        id: user.id,
        username: user.userName,
        mail: user.mail,
      });

      const serialized = serialize("devCollabToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "production",
        sameSite: "none",
        maxAge: 60 * 60 * 24,
      });

      res.setHeader("Set-Cookie", serialized);

      res.status(200).json({
        msg: "Login success",
        session: "created",
        token,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Error in login",
      error: error.message,
    });
  }
};

const logout = async (req, res = response) => {
  try {
    // const token = req.cookies.devCollabToken;
    const token = req.body.devCollabToken;
    if (token) {
      const authServices = new AuthServices();
      try {
        authServices.verifyJWT(token);
        const serialized = serialize("devCollabToken", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "production",
          sameSite: "none",
          maxAge: 0,
        });
        res.setHeader("Set-Cookie", serialized);
        res.status(200).json({
          msg: "Logout success",
          session: "destroyed",
        });
      } catch (error) {}
    }
  } catch (error) {
    res.status(500).json({
      msg: "Error in logout",
      error: error.message,
    });
  }
};

const verify = async (req, res = response) => {
  try {
    // const token = req.cookies.devCollabToken;
    const token = req.body.devCollabToken;
    if (token) {
      const authServices = new AuthServices();
      const {
        user: { id, username, mail },
      } = await authServices.verifyJWT(token);
      res.status(200).json({
        msg: "User verified",
        user: {
          id,
          username,
          mail,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Error in verify",
      error: error.message,
    });
  }
};

module.exports = {
  register,
  login,
  verify,
  logout,
};
