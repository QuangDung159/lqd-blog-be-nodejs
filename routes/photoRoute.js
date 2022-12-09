const express = require('express');
const { getAll, getOne, createOne, updateOne, deleteOne, getByAuthor, massCreate } = require('../controllers/photoController');
const verifyToken = require('../middlewares/verifyToken');

const Router = express.Router();

Router.route('/').get(getAll).post(verifyToken, createOne);
Router.route('/mass_create').post(verifyToken, massCreate);
Router.route('/:photoId').put(verifyToken, updateOne).delete(verifyToken, deleteOne).get(getOne);
Router.route('/created_by').post(getByAuthor);

module.exports = Router;