import { Router } from "express";
import * as controller from "./gst121-controller.mjs";
const gst121Rout = Router();

// get
gst121Rout.route("/api/user/gst121").get(controller.getQuestions);

// post

gst121Rout.route("/api/user/gst121").post(controller.postquestions);

// export

// post result

gst121Rout.route("/api/user/gst121/result").post(controller.postresult);
export default gst121Rout;
