//////////////////

import mongoose from "mongoose";

///////////////////////////

const newUser = new mongoose.Schema({
  firstname: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  lastname: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },

  phone: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  profile: {
    type: mongoose.Schema.Types.String,
  },
});

////////////////////

export const User = mongoose.model("Users", newUser);
