import { Router } from "express";
import * as controller from "./cmp222-controller.mjs";

const cmp222Rout = Router();

// get
cmp222Rout.route("/api/user/cmp222").get(controller.getQuestions);

// post

cmp222Rout.route("/api/user/cmp222").post(controller.postquestions);

// export

// post result

cmp222Rout.route("/api/user/cmp222/result").post(controller.postresult);
export default cmp222Rout;
