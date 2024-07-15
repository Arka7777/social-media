const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }


})

const Recipe = mongoose.model('recipe', recipeSchema)

module.exports = Recipe