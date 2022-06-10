const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    category: {
        type: String,
        enum: ["c", "c++", "java"]
    },
    year: Number
}, { timestamps: true })

module.exports = mongoose.model('books', bookSchema);