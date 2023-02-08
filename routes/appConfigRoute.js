const express = require('express');
const { getDownloadUrl } = require('../controllers/appConfigRoute');

const Router = express.Router();

Router.route('/apk-download-url').get(getDownloadUrl);

module.exports = Router;