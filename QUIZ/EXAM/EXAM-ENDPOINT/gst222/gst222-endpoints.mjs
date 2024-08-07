import { Router } from "express";
import * as controller from "./gst222-controller.mjs";

const gst222Rout = Router();

// get
gst222Rout.route("/api/user/gst222").get(controller.getQuestions);

// post

gst222Rout.route("/api/user/gst222").post(controller.postquestions);

// export

// post result

gst222Rout.route("/api/user/gst222/result").post(controller.postresult);
export default gst222Rout;
