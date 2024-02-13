const bcrypt = require("bcrypt");
const db = require("../../database/models/index");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../../dbConfig/config");

const User = db.db.users;
const UsersRoles = db.db.users_roles;

const signup = async (req, res) => {
  try {
    console.log("in try block of sign up")
    const { firstName, lastName, email, phone_no, hashedPassword, age, address, gender, date_of_birth, zip } = req.body;
    const data = {
      firstName,
      lastName,
      email,
      phone_no,
      hashedPassword: await bcrypt.hash(hashedPassword, 10),
      age,
      address,
      gender,
      date_of_birth,
      zip
    };
    const user = await User.create(data);
    if (user) {
      console.log("user", JSON.stringify(user, null, 2));
      return res.status(201).send(user);
    } else {
      console.log("inside of the else in try block");
      return res.status(409).send({ error: "Authentication failed. Email or contact already exist." });
    }
  } catch (error) {
    console.log("error from catch block of sign up controller", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    console.log("inside of the login function try block")
    const { email, hashedPassword } = req.body;
    console.log("request body is: ", req.body);
    const user = await User.findOne({
      where: {
        email: email
      }
    });
    if (user) {
      const isSame = await bcrypt.compare(hashedPassword, user.hashedPassword);
      if (isSame) {
        let token = jwt.sign({ id: user.id }, APP_SECRET, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user after cookie", JSON.stringify(user, null, 2));
        console.log(token);
        return res.status(201).send(user);
      } else {
        return res.status(401).send({ error: "Authentication failed. Password is not correct" });
      }
    } else {
      return res.status(401).send({ error: "Authentication failed. User does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie('jwt');
    return res.status(200).json({ message: 'Logout successfully' });
  } catch (error) {
    console.error("error in logout user: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    console.log("sdkjnckjsdnc", req.query);
    const userIdToDelete = req.query.id;
    console.log("userIdToDelete from delete function is: ", userIdToDelete);
    const userToDelete = await User.findByPk(userIdToDelete);
    if (!userToDelete) {
      return res.status(404).json({ error: 'User not found' });
    }
    await UsersRoles.destroy({ where: { userId: userIdToDelete } });
    await userToDelete.destroy();
    res.clearCookie('jwt');
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
const updateUser = async (req, res) => {
  console.log("edit user function from user controller file");
  try {
    console.log("request query is: ", req.query);
    const userIdToUpdate = req.query.id;
    console.log("userIdToDelete from delete is: ", userIdToUpdate);
    const userToUpdate = await User.findByPk(userIdToUpdate);
    if (!userToUpdate) {
      return res.status(404).json({ error: 'User not found' });
    }
    const updatedUserData = req.body;
    await userToUpdate.update(updatedUserData);
    return res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

const getAllUsers = async (req, res) => {
  try {
    console.log("hello from get all users");
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    console.error("error in getting all users: ", error);
    res.status(500).json({ error: "Internal Server Error in getting all users." })
  }
}

const getUserById = async (req, res) => {
  try {
    const userId = req.query.id;
    const user = await User.findOne(
      {
        where: {
          id: userId
        }
      }
    )
    if (user) {
      return res.status(200).json(user);
    }
    else {
      return res.status(401).json({ error: "User not found." });
    }
  } catch (error) {
    console.error("error found in getting a single user: ", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
}

module.exports = {
  signup,
  login,
  logoutUser,
  deleteUser,
  updateUser,
  getAllUsers,
  getUserById,
};