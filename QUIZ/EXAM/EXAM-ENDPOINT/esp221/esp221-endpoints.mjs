import { Router } from "express";
import * as controller from "./esp221-controller.mjs";
const esp221Rout = Router();

// get
esp221Rout.route("/api/user/esp221").get(controller.getQuestions);

// post

esp221Rout.route("/api/user/esp221").post(controller.postquestions);

// export

// post result

esp221Rout.route("/api/user/esp221/result").post(controller.postresult);
export default esp221Rout;
