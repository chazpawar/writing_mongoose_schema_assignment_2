// Import Mongoose
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            minlength: 5,
        },
        content: {
            type: String,
            required: true,
            minlength: 5,
        },
        author: {
            type: String,
            default: 'Anonymous',
        },
        tags: {
            type: [String],
            enum: ['tech', 'coding'],
        },
        category: {
            type: String,
            default: 'general',
        },
        likes: {
            type: [String], // Array of user IDs or similar identifiers
        },
        comments: [
            {
                username: { type: String, required: true },
                message: { type: String, required: true },
                commentedAt: { type: Date, default: Date.now },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
