import { Router } from "express";
import * as controller from "./cmp224-controller.mjs";

const cmp224Rout = Router();

// get
cmp224Rout.route("/api/user/cmp224").get(controller.getQuestions);

// post

cmp224Rout.route("/api/user/cmp224").post(controller.postquestions);

// export

// post result

cmp224Rout.route("/api/user/cmp224/result").post(controller.postresult);
export default cmp224Rout;
