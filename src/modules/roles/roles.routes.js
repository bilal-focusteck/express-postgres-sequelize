//importing modules
const express = require('express');
const rolesController = require('./roles.controller');
const { createRole, deleteRoleById, getAllRoles } = rolesController


const router = express.Router()

// creating role end point
router.post('/create-role', createRole)
// getting all roles end point
router.get('/get-all-roles', getAllRoles)
// deleting role end point
router.delete('/delete-role', deleteRoleById)
module.exports = router