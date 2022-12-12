const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


const info = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: true
    },
    deletedAt: {type: Date},
    deleted: {type: Boolean}
}, {
    timestamps: true,
}
);

//plugin
mongoose.plugin(slug);
info.plugin(mongooseDelete, { deletedAt : true , overrideMethods: true });

module.exports = mongoose.model('info', info);
