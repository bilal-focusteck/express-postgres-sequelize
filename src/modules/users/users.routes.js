//importing modules
const express = require('express');
const userController = require('./users.controller');
const userAuth = require('../../middlewares/userAuth');
const { signup, login, logoutUser, deleteUser, updateUser, getAllUsers, getUserById } = userController


const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signUp', userAuth.saveUser, signup)

//login route
router.post('/login', login)

// logout User
router.post('/logout', logoutUser);

// list of all users
router.get('/get-all-users', getAllUsers);

// get a single user by id
router.get('/get-user-by-id', getUserById);

//delete user route
router.delete('/delete-user', deleteUser)

// updating user's information
router.patch('/update-user', userAuth.verifyToken, updateUser);

module.exports = router