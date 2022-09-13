const User = require('../../models/user-module');

const UserController = {
  async createUser(req, res) {
    const data = req.body;
    try {
      const newUser = await User.create(data)
      return res.status(200).json(newUser);
    } catch(err) {return res.status(400).json(err)}
  }
}

module.exports = UserController;