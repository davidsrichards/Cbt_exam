import { Router } from "express";
import * as controller from "./cmp223-controller.mjs";

const cmp223Rout = Router();

// get
cmp223Rout.route("/api/user/cmp223").get(controller.getQuestions);

// post

cmp223Rout.route("/api/user/cmp223").post(controller.postquestions);

// export

// post result

cmp223Rout.route("/api/user/cmp223/result").post(controller.postresult);
export default cmp223Rout;
