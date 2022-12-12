const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const info_commentModel = new Schema(
  {
    info_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
      default: null,
    },
    user_name: {
      type: String,
      ref: "account",
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

info_commentModel.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });
module.exports = mongoose.model("info_commentModel", info_commentModel);
