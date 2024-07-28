import express from "express";
import passport from "passport";
import "../google-OAUTH.mjs";

const googleRout = express.Router();

///// URLS

const failureMessage = "/google/login/error";
const successRedirect = "/google/login/success";

/// verification

googleRout.get(
  "/api/user/google/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

//// CALLBACK

googleRout.get(
  "/api/user/googleCallback",
  passport.authenticate("google", {
    failureMessage: failureMessage,
    successRedirect: successRedirect,
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
