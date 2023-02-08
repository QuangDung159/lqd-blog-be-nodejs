const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

commentSchema.virtual('replies', {
    ref: 'Reply',
    foreignField: 'comment',
    localField: '_id'
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;