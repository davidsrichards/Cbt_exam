import mongoose from "mongoose";

const { Schema } = mongoose;

/////////////////////////////

const QuizSchema = new Schema({
  questions: {
    type: Schema.Types.Array,
    default: [],
  },
  answers: {
    type: Schema.Types.Array,
    default: [],
  },
  AtTime: {
    type: Date,
    default: Date.now,
  },
});

export const GST113 = mongoose.model("GST113", QuizSchema);
