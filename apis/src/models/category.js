const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    parent: String,
}, {
    timestamps: true,
});

const Task = mongoose.model('category', TaskSchema)

module.exports = Task