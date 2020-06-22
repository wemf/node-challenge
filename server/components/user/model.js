const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const model = mongoose.model('User', mySchema);
module.exports = model;