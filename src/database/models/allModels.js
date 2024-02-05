const userModel = require("../../modules/users/users.model");
const rolesModel = require("../../modules/roles/roles.model");
const allModels = [
  userModel,
  rolesModel,
]
module.exports = {
  allModels,
}