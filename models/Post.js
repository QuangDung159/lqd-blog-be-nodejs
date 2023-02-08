const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post_title: {
        type: String,
        trim: true,
        required: [true, 'Title is required']
    },
    post_content: {
        type: String,
        trim: true,
        required: [true, 'Content is required']
    },
    post_panel_image: {
        type: String,
        trim: true,
        required: [true, 'Panel image is required']
    },
    post_summary: {
        type: String,
        trim: true,
    },
    post_created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post_updated_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post_status: {
        type: Boolean,
        default: false
    },
    post_is_deleted: {
        type: Boolean,
        default: false
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
    },
    post_likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

postSchema.virtual('comments', {
    ref: 'Comment',
    foreignField: 'post',
    localField: '_id'
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;