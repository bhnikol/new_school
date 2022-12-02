const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


const exam = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    topic:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:"topic",
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
exam.plugin(mongooseDelete, { deletedAt : true , overrideMethods: true });

module.exports = mongoose.model('exam', exam);