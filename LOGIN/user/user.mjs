import { Router } from "express";
import { User } from "../../userSchema/userSchema.mjs";
import { comparePassword } from "../../HASHING/hashing-password.mjs";
import * as controller from "./user-controller.mjs";
/////////////

const loginRout = Router();

////////////

// login

loginRout.post("/api/user/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const findUser = await User.findOne({
      firstname: username,
    });
    if (!findUser || !comparePassword(password, findUser.password))
      return res.status(400).json("Invalid Credentials");

    res.status(200).json(findUser);
  } catch (error) {
    return res.status(404).send(error);
  }
});

///// generateOTP

loginRout
  .route("/api/user/generateOTP")
  .get(controller.authenticateByUsername, controller.generateOTP);

// verify OTP

loginRout.route("/api/user/verifyOTP").get(controller.verifyOTP);

// reset password

loginRout
  .route("/api/user/resetPassword")
  .put(controller.authenticateByUsername, controller.resetPassword);

//

loginRout.route("/api/user/get/:username").get(controller.getUserByUsername);

// update profile

loginRout.route("/api/user/update/:username").put(controller.updateUser);

export default loginRout;
