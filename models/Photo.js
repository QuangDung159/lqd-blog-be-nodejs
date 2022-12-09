const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    photo_desc: {
        type: String,
    },
    photo_name: {
        type: String,
        trim: true,
        required: [true, 'Photo name is required']
    },
    photo_url: {
        type: String,
        trim: true,
        required: [true, 'Photo url is required'],
    },
    photo_thumbnail_url: {
        type: String,
        trim: true,
        required: [true, 'Photo thumbnail is required'],
    },
    photo_created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    photo_status: {
        type: Boolean,
        default: false,
    },
    photo_is_deleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;