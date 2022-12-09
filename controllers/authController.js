const User = require('../models/User');
const { resBuilder } = require('../utils/helper');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ user_email: req.body.user_email });
        if (!user) {
            // user not exist
            const err = new Error('User not exist');
            err.statusCode = 400;
            next(err);
            return;
        }
        if (bcrypt.compareSync(req.body.user_password, user.user_password)) {
            const token = jwt.sign({ userId: user._id.toString() }, process.env.APP_SECRET);
            const response = resBuilder('success', { userName: user.user_name, token, _id: user._id.toString() }, 'Login successfully');
            res.status(201).json(response);
        } else {
            // password doesn't match
            const err = new Error(`Password doesn't match`);
            err.statusCode = 400;
            next(err);
        }
    } catch (error) {
        next(error);
    }
};

const register = async (req, res, next) => {
    try {
        console.log('req.body :>> ', req.body);
        const user = await User.create(req.body);
        const token = jwt.sign({ userId: user._id.toString() }, process.env.APP_SECRET);
        const response = resBuilder('success', { userName: user.user_name, token }, 'Register successfully');
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
};

const getCurrentUser = async (req, res, next) => {
    try {
        const data = { user: null };
        if (req.user) {
            const user = await User.findOne({ _id: req.user.userId });
            data.user = { userName: user.user_name };
        }
        const response = resBuilder('success', data, 'Success');
        res.status(200).json(response);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { login, register, getCurrentUser }