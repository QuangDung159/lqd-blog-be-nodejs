const { json } = require('express');
const Album = require('../models/Album');
const { checkAuthorOwnAlbum } = require('../services/albumServices');
const { resBuilder } = require('../utils/helper');

const getDownloadUrl = async (req, res, next) => {
    try {
        const downloadUrl = 'https://www.mediafire.com/file/i7y1wagnroy3iii/flutter-travel-app.apk';
        const response = resBuilder('success', { downloadUrl, result: 1 }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

module.exports = { getDownloadUrl };