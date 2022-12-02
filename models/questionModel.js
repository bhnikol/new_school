const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


const question = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    answer: 
    {
        type: Array
    },
    correct:
    {
        type: String
    },
    exam:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:"exam",
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
question.plugin(mongooseDelete, { deletedAt : true , overrideMethods: true });

module.exports = mongoose.model('question', question);