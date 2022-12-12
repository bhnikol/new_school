const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;


const answer = new Schema(
    {
      question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions",
        default: null,
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: true,
      },
      user_name: {
        type: String,
        ref: "account"
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
  
  answer.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });
  module.exports = mongoose.model("answer", answer);