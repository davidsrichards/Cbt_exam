import { Router } from "express";
import * as controller from "./cmp211controller.mjs";

const cmp211Rout = Router();

// get
cmp211Rout.route("/api/user/cmp221").get(controller.getQuestions);

// post

cmp211Rout.route("/api/user/cmp221").post(controller.postquestions);

// export

// post result

cmp211Rout.route("/api/user/cmp221/result").post(controller.postresult);
export default cmp211Rout;
