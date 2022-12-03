const mongoose = require("mongoose");
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
    },
    answer: {
      type: Array,
      default: [],
    },
    deletedAt: { type: Date },
    deleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

question.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });
module.exports = mongoose.model("question", question);