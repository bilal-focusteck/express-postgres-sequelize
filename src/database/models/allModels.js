const userModel = require("../../modules/users/users.model");
const rolesModel = require("../../modules/roles/roles.model");
const users_rolesModel = require("../../modules/users_roles/users_roles.model");
const allModels = [
  userModel,
  rolesModel,
  users_rolesModel
]
module.exports = {
  allModels,
}