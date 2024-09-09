import { Router } from "express";
import * as controller from "./gst113-controller.mjs";
const gst113Rout = Router();

// get
gst113Rout.route("/api/user/gst113").get(controller.getQuestions);

// post

gst113Rout.route("/api/user/gst113").post(controller.postquestions);

// export

// post result

gst113Rout.route("/api/user/gst113/result").post(controller.postresult);
export default gst113Rout;
