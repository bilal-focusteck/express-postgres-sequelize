//importing modules
const express = require('express');
const users_rolesController = require('./invites.controller');
const { createUsersRoles, getAllUsersRoles } = users_rolesController


const router = express.Router()

// creating role end point
router.post('/create-user-role', createUsersRoles)
// getting all roles end point
router.get('/get-all-users-roles', getAllUsersRoles)
module.exports = router