import mongoose from "mongoose";

const { Schema } = mongoose;

/////////////////////////////

const ResultSchema = new Schema({
  results: {
    type: Array,
    default: [],
  },
  attempt: {
    type: Number,
    default: 0,
  },
  point: {
    type: Number,
    default: 0,
  },
  achieved: {
    type: String,
    default: "",
  },
  AtTime: {
    type: Date,
    default: Date.now,
  },
});

export const GST113RESULT = mongoose.model("GST113RESULT", ResultSchema);
