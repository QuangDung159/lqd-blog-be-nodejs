const express = require('express');
const { createOne, updateOne, deleteOne } = require('../controllers/commentController');
const verifyToken = require('../middlewares/verifyToken');

const Router = express.Router();

Router.route('/').post(verifyToken, createOne);
Router.route('/:commentId').put(verifyToken, updateOne).delete(verifyToken, deleteOne);

module.exports = Router;