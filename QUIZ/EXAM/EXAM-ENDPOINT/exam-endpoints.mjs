import { Router } from "express";
import cmp211Rout from "./cmp211/cmp211.mjs";
import cmp222Rout from "./cmp222/cmp222-endpoints.mjs";
import cmp223Rout from "./cmp223/cmp222/cmp223-endpoints.mjs";
import gst222Rout from "./gst222/gst222-endpoints.mjs";
import cmp225Rout from "./cmp225/cmp225-endpoints.mjs";
import cmp224Rout from "./cmp224/cmp224-endpoints.mjs";
import gst111Rout from "./Level100/gst111/gst111-endpoints.mjs";
import gst112Rout from "./Level100/gst112/gst112-endpoints.mjs";
import gst113Rout from "./Level100/gst113/gst113-endpoints.mjs";
import gst121Rout from "./Level100/gst121/gst121-endpoints.mjs";
import esp221Rout from "./esp221/esp221-endpoints.mjs";

const examRout = Router();

examRout.use(cmp211Rout);
examRout.use(cmp222Rout);
examRout.use(cmp223Rout);
examRout.use(cmp224Rout);
examRout.use(cmp225Rout);
examRout.use(esp221Rout);
examRout.use(gst222Rout);
examRout.use(gst111Rout);
examRout.use(gst112Rout);
examRout.use(gst113Rout);
examRout.use(gst121Rout);

export default examRout;
