//importing modules
const express = require("express");
const db = require("../database/models/index");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../dbConfig/config")
//Assigning db.users (user model)to User variable
const User = db.db.users;

const saveUser = async (req, res, next) => {
  try {
    const emailcheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    const phonecheck = await User.findOne({
      where: {
        phone_no: req.body.phone_no,
      },
    });
    if (emailcheck || phonecheck) {
      // return res.status(409).send({ error: "Authentication failed. Email or contact already exist." });
      return res.status(409).json({ status: "error", statusCode: 409, error: "Authentication failed. Email or contact already exist." });
    }
    else {
      next();
    }
  } catch (error) {
    console.log("catch error form saveUser middleware is: ", error);
  }
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ status: "error", statusCode: 401, error: 'Unauthorized: No token provided' });
  }

  try {
    jwt.verify(token, APP_SECRET);
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ status: "error", statusCode: 401, error: 'Unauthorized: Token expired' });
    }
    else {
      return res.status(401).json({ status: "error", statusCode: 401, error: 'Unauthorized: Invalid token' });
    }
  }
};
module.exports = {
  saveUser,
  verifyToken
};