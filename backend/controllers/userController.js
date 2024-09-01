const userService = require('../services/userService');

exports.signup = async (req, res) => {
    try {
        const { token, user } = await userService.signup(req.body);
        res.status(201).json({ token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, user } = await userService.login(email, password);
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
