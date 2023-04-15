const mongoose = require('mongoose');

const CategorySchema = new mongoose.Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("Category", CategorySchema)