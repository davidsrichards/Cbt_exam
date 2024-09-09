import { Router } from "express";
import * as controller from "./gst111-controller.mjs";
const gst111Rout = Router();

// get
gst111Rout.route("/api/user/gst111").get(controller.getQuestions);

// post

gst111Rout.route("/api/user/gst111").post(controller.postquestions);

// export

// post result

gst111Rout.route("/api/user/gst111/result").post(controller.postresult);
export default gst111Rout;
