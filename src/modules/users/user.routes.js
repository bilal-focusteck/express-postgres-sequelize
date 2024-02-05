//importing modules
const express = require('express');
const userController = require('./user.controller');
const userAuth = require('../../middlewares/userAuth');
const { signup, login } = userController


const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signUp', userAuth.saveUser, signup)

//login route
router.post('/login', login)

module.exports = router