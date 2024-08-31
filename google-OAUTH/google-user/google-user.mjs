import express from "express";
import passport from "passport";
import dotenv from "dotenv";
import "../google-OAUTH.mjs";
dotenv.config();

const googleRout = express.Router();

///// URLS

/* const failureMessage = "/google/login/error"; */
const successRedirect =
  "https://quiz-application-j057.onrender.com/google/login/success" ||
  "http://localhost:4000/google/login/success";
const failureRedirect = "https://quiz-application-j057.onrender.com";

/// verification

googleRout.get(
  "/api/user/google/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

//// CALLBACK

googleRout.get(
  process.env.GOOGLE_CALLBACK_URL || process.env.GOOGLE_RENDER_CALLBACK_URL,
  passport.authenticate("google", {
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
  }),
  (req, res) => {
    res.send("Thank you for signing in");
  }
);

googleRout.get("/api/user/google/status", (req, res) => {
  return req.user
    ? res.status(201).json(req.user)
    : res.status(401).send("Please log in first");
});

export default googleRout;
