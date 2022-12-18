const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Name required']
    },
    user_email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Email required']
    },
    user_password: {
        type: String,
        trim: true,
        required: [true, 'Password required'],
        minLength: [6, 'Password must be at least 6']
    },
    user_type: {
        type: String,
        trim: true,
        default: 'viewer' // admin
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    this.user_password = bcrypt.hashSync(this.user_password, 10);
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;