const { json } = require('express');
const Photo = require('../models/Photo');
const { checkAuthorOwnPhoto } = require('../services/photoServices');
const { resBuilder } = require('../utils/helper');

const getAll = async (req, res, next) => {
    try {
        const allPhoto = await Photo.find({})
            .populate('photo_created_by', 'user_name')
            .sort([['createdAt', -1]]);
        const response = resBuilder('success', { photos: allPhoto, result: allPhoto.length }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const getOne = async (req, res, next) => {
    try {
        const { photoId } = req.params;
        const photo = await Photo.findById(photoId)
            .populate('photo_created_by', 'name');
        if (!photo) {
            const err = new Error('Photo not found');
            err.statusCode = 404;
            next(err);
            return;
        }

        const response = resBuilder('success', { photo, result: 1 }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const createOne = async (req, res, next) => {
    try {
        const { userId } = req.user;
        let photo = await Photo.create({
            ...req.body, photo_created_by: userId
        });
        photo = await photo.populate('photo_created_by', 'user_name');
        const response = resBuilder('success', { photo, result: 1 }, 'Create photo successfully');
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
};

const updateOne = async (req, res, next) => {
    try {
        const photoId = req.params.photoId;

        // check photo exist
        const photo = await Photo.findById(photoId);
        if (!photo) {
            const err = new Error('Photo not found');
            err.statusCode = 400
            next(err);
            return;
        }

        // check current user own photo
        const { userId } = req.user;
        const isOwnPhoto = checkAuthorOwnPhoto(userId, photo);
        if (isOwnPhoto) {
            const err = new Error('Cannot update photo of other author');
            err.statusCode = 403
            next(err);
            return;
        }

        // process update photo
        const photoUpdated = await Photo.findOneAndUpdate({ _id: photoId }, {
            ...req.body
        }, {
            new: true,
            runValidators: true
        }).populate('photo_created_by', 'user_name');

        const response = resBuilder('success', { photo: photoUpdated, result: 1 }, 'Update photo successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const deleteOne = async (req, res, next) => {
    try {
        const photoId = req.params.photoId;

        // check photo exist
        const photo = await Photo.findById(photoId);
        if (!photo) {
            const err = new Error('Photo not found');
            err.statusCode = 400
            next(err);
            return;
        }

        // check current user own photo
        const { userId } = req.user;
        const isOwnPhoto = checkAuthorOwnPhoto(userId, photo);
        if (isOwnPhoto) {
            const err = new Error('Cannot delete photo of other author');
            err.statusCode = 403
            next(err);
            return;
        }

        // delete
        await Photo.deleteOne({ _id: photoId });
        const response = resBuilder('success', { result: 1 }, 'Remove photo successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const getByAuthor = async (req, res, next) => {
    try {
        const authorId = req.body.photo_created_by;
        const listPhoto = await Photo.find({
            photo_created_by: authorId
        });
        const response = resBuilder('success', { listPhoto, result: listPhoto.length }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const massCreate = async (req, res, next) => {
    try {
        const listPhoto = req.body.listPhoto;
        const { userId } = req.user;
        listPhoto.forEach((item) => {
            Photo.create({
                ...item, photo_created_by: userId
            })
        });
        const response = resBuilder('success', {}, 'Success');
        res.status(201).json(response);
    } catch (error) {
        console.log('error :>> ', error);
        res.json(error);
    }
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne, getByAuthor, massCreate };