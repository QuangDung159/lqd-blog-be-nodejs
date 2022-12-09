const express = require('express');
const { getAll, getOne, createOne, updateOne, deleteOne, getByAuthor, getByAlbum } = require('../controllers/postController');
const verifyToken = require('../middlewares/verifyToken');

const Router = express.Router();

Router.route('/').get(getAll).post(verifyToken, createOne);
Router.route('/:postId').put(verifyToken, updateOne).delete(verifyToken, deleteOne).get(getOne);
Router.route('/created_by').post(getByAuthor);
Router.route('/album/:albumId').get(getByAlbum);

module.exports = Router;