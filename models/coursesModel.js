const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


const course = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    slug: { type: String, slug: 'name', unique: true },
    videoId: {
        type: String
    },
    deletedAt: {type: Date},
    deleted: {type: Boolean}
}, {
    timestamps: true,
}
);

//plugin
mongoose.plugin(slug);
course.plugin(mongooseDelete, { deletedAt : true , overrideMethods: true });

module.exports = mongoose.model('course', course);