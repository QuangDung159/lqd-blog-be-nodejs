const { json } = require('express');
const Album = require('../models/Album');
const { checkAuthorOwnAlbum } = require('../services/albumServices');
const { resBuilder } = require('../utils/helper');

const getAll = async (req, res, next) => {
    try {
        const allAlbum = await Album.find({})
            .populate('album_created_by', 'user_name')
            .sort([['createdAt', -1]]);
        const response = resBuilder('success', { albums: allAlbum, result: allAlbum.length }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const getOne = async (req, res, next) => {
    try {
        const { albumId } = req.params;
        const album = await Album.findById(albumId)
            .populate('album_created_by', 'name');
        if (!album) {
            const err = new Error('Album not found');
            err.statusCode = 404;
            next(err);
            return;
        }

        const response = resBuilder('success', { album, result: 1 }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const createOne = async (req, res, next) => {
    try {
        const { userId } = req.user;
        let album = await Album.create({
            ...req.body, album_created_by: userId
        });
        album = await album.populate('album_created_by', 'user_name');
        const response = resBuilder('success', { album, result: 1 }, 'Create album successfully');
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
};

const updateOne = async (req, res, next) => {
    try {
        const albumId = req.params.albumId;

        // check album exist
        const album = await Album.findById(albumId);
        if (!album) {
            const err = new Error('Album not found');
            err.statusCode = 400
            next(err);
            return;
        }

        // check current user own album
        const { userId } = req.user;
        const isOwnAlbum = checkAuthorOwnAlbum(userId, album);
        if (!isOwnAlbum) {
            const err = new Error('Cannot update album of other author');
            err.statusCode = 403
            next(err);
            return;
        }

        // process update album
        const albumUpdated = await Album.findOneAndUpdate({ _id: albumId }, {
            ...req.body
        }, {
            new: true,
            runValidators: true
        }).populate('album_created_by', 'user_name');

        const response = resBuilder('success', { album: albumUpdated, result: 1 }, 'Update album successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const deleteOne = async (req, res, next) => {
    try {
        const albumId = req.params.albumId;

        // check album exist
        const album = await Album.findById(albumId);
        if (!album) {
            const err = new Error('Album not found');
            err.statusCode = 400
            next(err);
            return;
        }

        // check current user own album
        const { userId } = req.user;
        const isOwnAlbum = checkAuthorOwnAlbum(userId, album);
        if (!isOwnAlbum) {
            const err = new Error('Cannot delete album of other author');
            err.statusCode = 403
            next(err);
            return;
        }

        // delete
        await Album.deleteOne({ _id: albumId });
        const response = resBuilder('success', { result: 1 }, 'Remove album successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const getByAuthor = async (req, res, next) => {
    try {
        const authorId = req.body.album_created_by;
        const listAlbum = await Album.find({
            album_created_by: authorId
        });
        const response = resBuilder('success', { listAlbum, result: listAlbum.length }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne, getByAuthor };