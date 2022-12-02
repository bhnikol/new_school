const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const account = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    image: {
        type: String
    },
    age: {
        type: Number
    }
}, {
    timestamps: true,
    collection: 'account'
}
);

module.exports = mongoose.model('account', account);