import generateOtp from "otp-generator";
import { User } from "../../userSchema/userSchema.mjs";
import { hashPassword } from "../../HASHING/hashing-password.mjs";
import nodeMailer from "nodemailer";
import Mailgen from "mailgen";
import dotenv from "dotenv";

dotenv.config();

// authenticate user by username

export async function authenticateByUsername(req, res, next) {
  const { username } = req.method === "GET" ? req.query : req.body;
  try {
    const existedUser = await User.findOne({ firstname: username });
    if (!existedUser) return res.status(404).send("user not found");
    next();
  } catch (error) {
    return res.status(404).send(error);
  }
}

// get user

export const getUserByUsername = async (req, res) => {
  const { username } = req.params;
  try {
    const findUser = await User.findOne({ firstname: username });
    if (!findUser) return res.status(404).send("user not found");
    return res.status(200).json(findUser);
  } catch (error) {
    return res.status(404).send(error);
  }
};

// generate otp

export async function generateOTP(req, res) {
  req.app.locals.OTP = await generateOtp.generate(4, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  return res.status(201).send(req.app.locals.OTP);
}

// verify OTP

export async function verifyOTP(req, res) {
  const { code } = req.query;
  const OTP = req.app.locals.OTP;
  try {
    if (code !== OTP) {
      return res.status(400).send("Invalid OTP ");
    } else {
      req.app.locals.OTP = null;
      req.app.locals.resetSession = true;
      res.status(200).send("Verification Successfull");
    }
  } catch (error) {
    return res.status(400).send(error);
  }
}

/// reset password

export async function resetPassword(req, res) {
  let { username, password } = req.body;
  try {
    if (!req.app.locals.resetSession)
      return res.status(401).send("Session Expired");
    password = hashPassword(password);
    const updatedUser = await User.updateOne(
      { firstname: username },
      { password }
    );

    if (updatedUser)
      return res.status(201).send("password updated successfully");
  } catch (error) {
    return res.status(401).send(error);
  }
}

// update user

export async function updateUser(req, res) {
  const { firstname, lastname, email, phone, profile } = req.body;
  const { username } = req.params;
  console.log("query is ", username);
  console.log(firstname);
  try {
    const findUser = await User.findOne({ firstname: username });
    if (!findUser) return res.status(404).send("user not found");
    const updatedUser = await User.updateOne(
      { firstname: username },
      { firstname, lastname, email, phone, profile }
    );
    console.log(findUser);
    if (updatedUser) return res.status(201).send("Updated Successfully");
  } catch (error) {
    console.log(error);
    return res.status(401).send(error);
  }
}

// send mail

export async function sendEmail(req, res) {
  const { name, email, intro, outro } = req.body;
  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };
  let transporter = nodeMailer.createTransport(config);
  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Dash",
      link: "https://quiz-application-j057.onrender.com",
    },
  });
  let response = {
    body: {
      name,
      intro,
      outro,
    },
  };

  let mail = MailGenerator.generate(response);
  let message = {
    from: process.env.EMAIL,
    to: email,
    subject: "OTP",
    html: mail,
  };
  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json("email sent successful");
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
}
