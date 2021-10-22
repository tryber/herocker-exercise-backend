const { User } = require('../models');

module.exports = async (_req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
};