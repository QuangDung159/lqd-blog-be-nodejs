const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    album_desc: {
        type: String,
    },
    album_name: {
        type: String,
        trim: true,
        required: [true, 'Album name is required']
    },
    album_created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    album_status: {
        type: Boolean,
        default: false,
    },
    album_is_deleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;