const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    }
}, {
    timestamps: true
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;