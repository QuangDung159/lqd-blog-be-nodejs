const { json } = require('express');
const Reply = require('../models/Reply');
const { resBuilder } = require('../utils/helper');

const createOne = async (req, res, next) => {
    try {
        const { userId } = req.user;
        let reply = await Reply.create({
            ...req.body, user: userId
        });
        reply = await Reply.populate('user', 'user_name');
        const response = resBuilder('success', { reply, result: 1 }, 'Submit reply successfully');
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
};

const updateOne = async (req, res, next) => {
    try {
        const replyId = req.params.replyId;
        
        // check reply exist
        const reply = await Reply.findById(replyId);
        if (!reply) {
            const err = new Error('Reply not found');
            err.statusCode = 400
            next(err);
            return;
        }

        // check current user own photo
        // const { userId } = req.user;
        // const isOwnPhoto = checkAuthorOwnPhoto(userId, photo);
        // if (isOwnPhoto) {
        //     const err = new Error('Cannot update photo of other author');
        //     err.statusCode = 403
        //     next(err);
        //     return;
        // }

        // process update reply
        const replyUpdated = await Reply.findOneAndUpdate({ _id: replyId }, {
            ...req.body
        }, {
            new: true,
            runValidators: true
        }).populate('user', 'user_name').populate('comment', '_id content');

        const response = resBuilder('success', { reply: replyUpdated, result: 1 }, 'Update reply successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const deleteOne = async (req, res, next) => {
    try {
        const replyId = req.params.replyId;

        // check reply exist
        const reply = await Reply.findById(replyId);
        if (!reply) {
            const err = new Error('Reply not found');
            err.statusCode = 400
            next(err);
            return;
        }

        // check current user own comment
        // const { userId } = req.user;
        // const isOwnPhoto = checkAuthorOwnPhoto(userId, photo);
        // if (isOwnPhoto) {
        //     const err = new Error('Cannot delete photo of other author');
        //     err.statusCode = 403
        //     next(err);
        //     return;
        // }

        // delete
        await Reply.deleteOne({ _id: replyId });
        const response = resBuilder('success', { result: 1 }, 'Remove reply successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

module.exports = { createOne, updateOne, deleteOne };