const Album = require('../models/Album');
const Post = require('../models/Post');
const { checkAuthorOwnPost } = require('../services/postServices');
const { resBuilder } = require('../utils/helper');

const getAll = async (req, res, next) => {
    try {
        const allPost = await Post.find({})
            .populate('post_created_by', 'user_name')
            .populate('album', 'album_name album_desc')
            .sort([['createdAt', -1]]);

        // let total = 0;
        // json.r.forEach((item) => {
        //     if (item.PaymentMethod === 'MoMo') {
        //         total += +item.Amount
        //     }
        // });

        // console.log('total :>> ', total);
        const response = resBuilder('success', { posts: allPost, result: allPost.length }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const getOne = async (req, res, next) => {
    try {
        const { postId } = req.params;
        const post = await Post.findById(postId)
            .populate('post_created_by', 'user_name')
            .populate('album', 'album_name album_desc')
            .populate({
                path: 'comments',
                select: 'content createdAt',
                populate: {
                    path: 'replies',
                    populate: {
                        path: 'user',
                        select: 'user_name'
                    },
                    select: 'content'
                }
            })
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    select: 'user_name'
                },
                select: 'content'
            });
        if (!post) {
            const err = new Error('Post not found');
            err.statusCode = 404;
            next(err);
            return;
        }

        const response = resBuilder('success', { post, result: 1 }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const createOne = async (req, res, next) => {
    try {
        const { userId } = req.user;
        console.log('userId :>> ', userId);
        let post = await Post.create({
            ...req.body, post_created_by: userId
        });
        post = await (await post.populate('post_created_by', 'user_name')).populate('album', 'album_name album_desc');
        const response = resBuilder('success', { post, result: 1 }, 'Create post successfully');
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
};

const updateOne = async (req, res, next) => {
    try {
        const postId = req.params.postId;

        // check post exist
        const post = await Post.findById(postId);
        if (!post) {
            const err = new Error('Post not found');
            err.statusCode = 400
            next(err);
            return;
        }

        // check current user own post
        const { userId } = req.user;
        const isOwnPost = checkAuthorOwnPost(userId, post);
        if (isOwnPost) {
            const err = new Error('Cannot update post of other author');
            err.statusCode = 403
            next(err);
            return;
        }

        // process update post
        const postUpdated = await Post.findOneAndUpdate({ _id: postId }, {
            ...req.body
        }, {
            new: true,
            runValidators: true
        })
            .populate('post_created_by', 'user_name')
            .populate('album', 'album_name album_desc');

        const response = resBuilder('success', { post: postUpdated, result: 1 }, 'Update post successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const deleteOne = async (req, res, next) => {
    try {
        const postId = req.params.postId;

        // check post exist
        const post = await Post.findById(postId).populate('post_created_by', 'post_desc post_title').populate('album', 'album_name');
        if (!post) {
            const err = new Error('Post not found');
            err.statusCode = 400
            next(err);
            return;
        }

        // check current user own post
        const { userId } = req.user;
        const isOwnPost = checkAuthorOwnPost(userId, post);
        if (isOwnPost) {
            const err = new Error('Cannot delete post of other author');
            err.statusCode = 403
            next(err);
            return;
        }

        // delete
        await Post.deleteOne({ _id: postId });
        const response = resBuilder('success', { result: 1 }, 'Remove post successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const getByAuthor = async (req, res, next) => {
    try {
        const authorId = req.params.post_created_by;
        const listPost = await Post.find({
            post_created_by: authorId
        })
            .populate('post_created_by', 'user_name')
            .populate('album', 'album_name album_desc');
        const response = resBuilder('success', { posts: listPost, result: listPost.length }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const getByAlbum = async (req, res, next) => {
    try {
        const albumId = req.params.albumId;
        const listPost = await Post.find({
            album: albumId
        })
            .populate('post_created_by', 'user_name')
            .populate('album', 'album_name album_desc');
        let album = await Album.findById(albumId);
        const response = resBuilder('success', {
            posts: listPost, album, result: listPost.length
        }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const massCreate = async (req, res, next) => {
    try {
        const listPost = req.body.listPost;
        const { userId } = req.user;
        listPost.forEach((item) => {
            Post.create({
                ...item, post_created_by: userId
            })
        });
        const response = resBuilder('success', {}, 'Success');
        res.status(201).json(response);
    } catch (error) {
        console.log('error :>> ', error);
        res.json(error);
    }
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne, getByAuthor, massCreate, getByAlbum };