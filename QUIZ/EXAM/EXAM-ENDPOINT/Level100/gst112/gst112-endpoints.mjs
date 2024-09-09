import { Router } from "express";
import * as controller from "./gst112-controller.mjs";
const gst112Rout = Router();

// get
gst112Rout.route("/api/user/gst112").get(controller.getQuestions);

// post

gst112Rout.route("/api/user/gst112").post(controller.postquestions);

// export

// post result

gst112Rout.route("/api/user/gst112/result").post(controller.postresult);
export default gst112Rout;
