const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    emailId: {
        type: String,
        require: true
    },
    num: {
        type: Number,
        require: true
    },
    password1: {
        type: String,
        require: true
    },
    password2: {
        type: String,
        require: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;