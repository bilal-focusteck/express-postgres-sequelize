const db = require("../../database/models/index");
const users_rolesModel = db.db.users_rolesModel;

module.exports = {
  async createUsersRoles(req, res) {
    try {
      if (!req.body.userId && !req.body.roleId) {
        return res.status(401).json({ error: 'Incomplete data in request body.' });
      }
      else {
        const users_rolesData = req.body;
        console.log("hello one:== ", users_rolesData)
        const newRole = await users_rolesModel.create(users_rolesData);
        return res.status(201).json(newRole);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async getAllUsersRoles(req, res) {
    try {
      const allUsersRoles = await users_rolesModel.findAll();
      return res.status(200).json(allUsersRoles);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}