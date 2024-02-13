const db = require("../../database/models/index");
const roles = db.db.roles;
const UsersRoles = db.db.users_roles;

module.exports = {
  async createRole(req, res) {
    try {
      const roleData = req.body;
      const newRole = await roles.create(roleData);
      return res.status(201).json(newRole);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async deleteRoleById(req, res) {
    try {
      console.log("delete role by id provided in request query: ", req.query);
      const roleIdToDelete = req.query.id;
      console.log("roleIdToDelete from delete function is: ", roleIdToDelete);
      const roleToDelete = await roles.findByPk(roleIdToDelete);
      console.log("role to delete", roleToDelete);
      if (!roleToDelete) {
        return res.status(404).json({ error: 'Role does not exist' });
      }
      await UsersRoles.destroy({ where: { roleId: roleIdToDelete } });
      await roleToDelete.destroy();
      res.clearCookie('jwt');
      return res.status(200).json({ message: 'Role deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async getAllRoles(req, res) {
    try {
      const allRoles = await roles.findAll();
      return res.status(200).json(allRoles);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}