const userModel = require("../../modules/users/users.model");
const rolesModel = require("../../modules/roles/roles.model");
const users_rolesModel = require("../../modules/users_roles/users_roles.model");
const invitesModel = require("../../modules/invites/invites.model");
const allModels = [
  userModel,
  rolesModel,
  users_rolesModel,
  invitesModel
]
module.exports = {
  allModels,
}