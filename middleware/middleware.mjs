import { User } from "../userSchema/userSchema.mjs";

export const authenticate = async (req, res, next) => {
  const { email } = req.body;
  try {
    const findUser = await User.findOne({ email });
    if (findUser) return res.status(400).send("user exist");
    req.email = email;
    next();
  } catch (error) {
    return res.status(401).send(error);
  }
};

/// generate OTP

export const generateOtp = (req, res, next) => {
  req.app.locals = {
    OTP: null,
    resetSession: false,
  };
  next();
};
