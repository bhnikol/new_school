const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const question = new Schema(
  {
      user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "account",
      required: true,
    },
    content: {
      type: String,
    }
    
  ,
    slug:{ type: String, slug: 'content', unique: true },
    deletedAt: { type: Date },
    deleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);
mongoose.plugin(slug);

question.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });
module.exports = mongoose.model("question", question);
