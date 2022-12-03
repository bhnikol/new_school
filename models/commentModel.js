const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const comment = new Schema(
  {
    parent_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
      default: null,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "account",
      required: true,
    },
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },
    content: {
      type: String,
    },
    deletedAt: { type: Date },
    deleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

comment.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });
module.exports = mongoose.model("comment", comment);
