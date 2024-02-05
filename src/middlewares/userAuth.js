//importing modules
const express = require("express");
const db = require("../database/models/index");
//Assigning db.users (user model)to User variable
const User = db.db.users;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
const saveUser = async (req, res, next) => {
  //search the database to see if user exist
  try {
    //checking if email already exist
    const emailcheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    //checking if phone_no already exist
    const phonecheck = await User.findOne({
      where: {
        phone_no: req.body.phone_no,
      },
    });

    //if email exist in the database respond with a status of 409
    if (emailcheck || phonecheck) {
      return res.status(409).send({ error: "Authentication failed. Email or contact already exist." });
    }
    else {
      next();
    }

  } catch (error) {
    // console.error(error);
    console.log("catch error form saveUser middleware is: ", error);
  }
};

//exporting module
module.exports = {
  saveUser,
};