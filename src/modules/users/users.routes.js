//importing modules
const express = require('express');
const userController = require('./users.controller');
const userAuth = require('../../middlewares/userAuth');
const { signup, login, deleteUser, updateUser } = userController


const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signUp', userAuth.saveUser, signup)
//login route
router.post('/login', login)
//delete user route
router.delete('/delete-user', userAuth.verifyToken, deleteUser)
// updating user's information
router.patch('/update-user', userAuth.verifyToken, updateUser);
module.exports = router