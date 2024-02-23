const db = require("../../database/models/index");
const invites = db.db.invites;

module.exports = {
  async createInvite(req, res) {
    try {
      const { userId } = req.body;

      if (!userId || !req.body.inviteData) {
        return res.status(400).json({ error: 'Incomplete data in request body.' });
      }

      const newInvite = await invites.create({ userId, ...req.body.inviteData });

      return res.status(201).json(newInvite);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getInviteForUser(req, res) {
    try {
      const { userId } = req.params;

      if (!userId) {
        return res.status(400).json({ error: 'userId parameter is required.' });
      }

      const userInvite = await invites.findOne({
        where: { userId: userId }
      });

      return res.status(200).json(userInvite);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};
