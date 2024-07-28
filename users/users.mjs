////////////////

import { Router } from "express";
import { User } from "../userSchema/userSchema.mjs";
import { hashPassword } from "../HASHING/hashing-password.mjs";
import { authenticate } from "../middleware/middleware.mjs";

const regRout = Router();

///////// post request

regRout.post("/api/user/new", authenticate, async (req, res) => {
  const { body } = req;
  try {
    body.password = hashPassword(body.password);
    console.log(body.password);
    const newUser = new User(body);
    const savedUser = await newUser.save();
    if (savedUser)
      return res.status(201).send({ msg: "Registration Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(401).send({ error });
  }
});

export default regRout;
