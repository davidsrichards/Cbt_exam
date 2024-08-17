import { Router } from "express";
import * as controller from "./cmp225-controller.mjs";
const cmp225Rout = Router();

// get
cmp225Rout.route("/api/user/cmp225").get(controller.getQuestions);

// post

cmp225Rout.route("/api/user/cmp225").post(controller.postquestions);

// export

// post result

cmp225Rout.route("/api/user/cmp225/result").post(controller.postresult);
export default cmp225Rout;
