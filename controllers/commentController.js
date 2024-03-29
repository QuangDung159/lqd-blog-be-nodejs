const { json } = require('express');
const Comment = require('../models/Comment');
const ReplyController = require('../controllers/replyController');
const { resBuilder, checkIsOwn } = require('../utils/helper');

const createOne = async (req, res, next) => {
    try {
        const { userId } = req.user;
        let comment = await Comment.create({
            ...req.body, user: userId
        });
        comment = await (await comment.populate('user', 'user_name')).populate('post', '');
        const response = resBuilder('success', { comment, result: 1 }, 'Submit comment successfully');
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
};

const updateOne = async (req, res, next) => {
    try {
        const commentId = req.params.commentId;

        // check comment exist
        const comment = await Comment.findById(commentId);
        if (!comment) {
            const err = new Error('Comment not found');
            err.statusCode = 400
            next(err);
            return;
        }

        // process update comment
        const commentUpdated = await Comment.findOneAndUpdate({ _id: commentId }, {
            ...req.body
        }, {
            new: true,
            runValidators: true
        }).populate('user', 'user_name').populate('post', '_id');

        const response = resBuilder('success', { comment: commentUpdated, result: 1 }, 'Update comment successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const deleteOne = async (req, res, next) => {
    try {
        const commentId = req.params.commentId;

        // check comment exist
        const comment = await Comment.findById(commentId).populate({
            path: 'replies'
        }).populate('user');
        if (!comment) {
            const err = new Error('Comment not found');
            err.statusCode = 400
            next(err);
            return;
        }

        const replies = comment.replies;

        // check current user own comment
        const { userId } = req.user;
        const isOwn = checkIsOwn(userId, comment.user);
        if (!isOwn) {
            const err = new Error('Cannot delete comment of other user');
            err.statusCode = 403
            next(err);
            return;
        }

        // delete comment
        const deleteCommentRes = await Comment.deleteOne({ _id: commentId });

        if (deleteCommentRes.deletedCount === 1) {
            // delete replies
            replies.forEach((item) => {
                ReplyController.deleteOne({
                    params: {
                        replyId: item._id.toString()
                    }
                }, {}, () => { })
            });
        }

        const response = resBuilder('success', { result: 1 }, 'Remove comment successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

module.exports = { createOne, updateOne, deleteOne };