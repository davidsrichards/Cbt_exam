// importing modules
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import regRout from "./users/users.mjs";
import quizRouts from "./QUIZ/endPoints/endPoints.mjs";
import examRout from "./QUIZ/EXAM/EXAM-ENDPOINT/exam-endpoints.mjs";
import loginRout from "./LOGIN/user/user.mjs";
import getRout from "./getUser-endpoint/getUser-endpoint.mjs";
import adminRout from "./AdminRegistration/AdminEndPoints/admin-endpoint.mjs";
import adminLoginRout from "./AdminLogin/admin-login-endpoint.mjs";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import googleRout from "./google-OAUTH/google-user/google-user.mjs";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* const base = path.resolve("./client", "dist", "index.html"); */

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser("daverich"));

////////////////

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`start listening on port : ${port}`);
      console.log("Connected to Database");
    });
  })
  .catch((err) => console.log(err));

///////////////

app.use(
  session({
    saveUninitialized: false,
    resave: true,
    cookie: {
      maxAge: 60000 * 60,
    },
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);
app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("tiny"));

//////////////////////////////////////

app.use(googleRout);
app.use(getRout);
app.use(regRout);
app.use(loginRout);
app.use(quizRouts);
app.use(examRout);
app.use(googleRout);
app.use(adminRout);
app.use(adminLoginRout);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

///////////////
