import { Router } from "express";
import cmp211Rout from "./cmp211/cmp211.mjs";
import cmp222Rout from "./cmp222/cmp222-endpoints.mjs";
import cmp223Rout from "./cmp223/cmp222/cmp223-endpoints.mjs";
import gst222Rout from "./gst222/gst222-endpoints.mjs";
import cmp225Rout from "./cmp225/cmp225-endpoints.mjs";

const examRout = Router();

examRout.use(cmp211Rout);
examRout.use(cmp222Rout);
examRout.use(cmp223Rout);
examRout.use(cmp225Rout);
examRout.use(gst222Rout);

export default examRout;
