const bcrypt = require("bcrypt");
const db = require("../../database/models/index");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../../dbConfig/config");

// Assigning users to the variable User
const User = db.db.users;

//signing a user up
//hashing users password before its saved to the database with bcrypt
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
      // let token = jwt.sign({ id: user.id }, APP_SECRET, {
      //   expiresIn: 1 * 24 * 60 * 60 * 1000,
      // });

      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log("user", JSON.stringify(user, null, 2));
      //send users details
      return res.status(201).send(user);
    } else {
      console.log("inside of the else in try block");
      return res.status(409).send({ error: "Authentication failed. Email or contact already exist." });
    }
  } catch (error) {
    console.log("error from catch block of sign up controller", error);
  }
};

const login = async (req, res) => {
  try {
    console.log("inside of the login function")
    const { email, hashedPassword } = req.body;
    console.log("request body is: ", req.body);

    //find a user by their email
    const user = await User.findOne({
      where: {
        email: email
      }
    });
    console.log("user found: ", user);

    //if user email is found, compare password with bcrypt
    if (user) {
      const isSame = await bcrypt.compare(hashedPassword, user.hashedPassword);

      //if password is the same
      //generate token with the user's id and the secretKey in the env file

      if (isSame) {
        let token = jwt.sign({ id: user.id }, APP_SECRET, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        //if password matches wit the one in the database
        //go ahead and generate a cookie for the user
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user after cookie", JSON.stringify(user, null, 2));
        console.log(token);
        //send user data
        return res.status(201).send(user);
      } else {
        return res.status(401).send("Authentication 1 failed.");
      }
    } else {
      return res.status(401).send("Authentication failed. User does not exist");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signup,
  login,
};