/* GOOGLE_CLIENT_ID=23132053156-ghvrhpcj2bi4k4gk5pbb6fju1u3i4oqi.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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 */

/* 
send mail */

/* let config = {
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
      name: "mailgen",
      link: "https://mailgen.mjs",
    },
  });
  let reponse = {
    body: {
      name: "Dave",
      intro: "your bill has arrive",
      table: {
        data: [
          {
            item: "Nodemailer stack book",
            description: "A Backend stack application",
            price: "$10.99",
          },
        ],
      },
      outro: "looking forward to do more businness",
    },
  };

  let mail = MailGenerator.generate(reponse);
  let message = {
    from: process.env.EMAIL,
    to: email,
    subject: "place order",
    html: mail,
  };
  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json("you should receive an email");
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
} */

/// testing email

// test account
/* 
export async function sendTestingEmail(req, res) {
    let testAccount = await nodeMailer.createTestAccount();
    // transporter
    let transporter = nodeMailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });
    // send mail with defined transport object
    let message = {
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    };
  
    transporter
      .sendMail(message)
      .then((info) => {
        return res.status(201).json({
          msg: "you should receie an Email",
          info: info.messageId,
          preview: nodeMailer.getTestMessageUrl(info),
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  } */

/*     import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addUserName,
  pushGoogleInformationAction,
  resetUsernameAction,
} from "../REDOX/Features/UserSlice/UserSlice";
import { validateLogin } from "../Validate/Validate";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { LoginWithGoogle, UserLogin } from "../Helper/ServerHelper";
import { useEffect, useState } from "react";
import { resetAllAction } from "../QUIZ/Hooks/FetchQuestions/FetchQuestions";
import { resetResultAction } from "../QUIZ/Result/ResultHelperFunction/ResultHelperFunction";
import SignUpOrSignIn from "../SignUp/SignUpOrSignIn";
import axios from "axios";

function Login() {
  const [googleData, setGoogleData] = useState({ username: "", email: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: validateLogin,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let loginPromise = UserLogin(values);
      // handle errors
      toast.promise(loginPromise, {
        loading: <div>Checking...</div>,
        success: <div>Successfull</div>,
        error: <div>Invalid Credentials</div>,
      });

      loginPromise.then(() => {
        dispatch(addUserName(values.username));
        return navigate("/google/login/success");
      });
    },
  });

  // reset username

  useEffect(() => {
    dispatch(resetUsernameAction());
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }, []);

  // login with google

  async function loginWithGoogle() {
    window.open("/api/user/google/login");
    async function getUserInformation() {
      try {
        const response = await LoginWithGoogle();
        if (response && response.data) {
          console.log(response.data);
          dispatch(
            pushGoogleInformationAction({
              username: response.data.fullName,
              email: response.data.email,
            })
          );
        }
      } catch (error) {
        return error;
      }
    }
    getUserInformation();
  } */

// refresh browser

/* return (
    <div className="student-login">
      <div className="fixed -top-10 right-10">
        <SignUpOrSignIn question={"Admin"} to={"/admin-login"} />
      </div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <form
        action=""
        method="POST"
        className="w-full bg-transparent mt-[7rem]"
        onSubmit={formik.handleSubmit}
      >
        <div className="grid grid-cols-1 transition justify-items-center container mx-auto  lg:w-1/2 lg:p-0 p-4 m-4 w-full">
          <h1 className="text-[1.4rem] mt-[8rem] font-bold sm:pb-0  pb-6 text-white">
            Sign In to Your Account
          </h1>

          <div className="w-full space-y-3">
            <label htmlFor="" className="text-white  text-[1.2rem]">
              User Name
            </label>
            <input
              {...formik.getFieldProps("username")}
              type="text"
              className="p-3 text-black bg-neutral-200 font-serif rounded-sm ring-2 ring-white w-full transition delay-100 hover:transition hover:ring-blue-500 outline-none"
            />
          </div>

      
          <div className="w-full space-y-3">
            <label htmlFor="" className="text-white  text-[1.2rem]">
              Password
            </label>
            <input
              {...formik.getFieldProps("password")}
              type="password"
              className="p-3 text-black bg-slate-200 font-serif rounded-sm ring-2 ring-white w-full transition  delay-100  hover:ring-blue-400 outline-none in"
            />
          </div>
         
          <button
            type="submit"
            className="mt-6 w-full p-3 rounded-sm text-[1.2rem] font-bold bg-blue-400 text-white hover:bg-blue-600 transition-all duration-500 ease-in-out"
          >
            Submit
          </button>
        
          <div className="flex items-center justify-center text-white w-full mt-6"></div>
        </div>
      </form>
    
      <div className="text-white gap-4 mt-6 transition justify-items-center container mx-auto  lg:w-1/2  p-2 m-4  bg-neutral-50 rounded-md">
     
        <div className="flex items-center justify-between w-full mt-8 text-[1.1rem] font-normal text-slate-200 pb-4">
          <div className="flex items-center flex-nowrap">
            <input
              type="checkBox"
              className="w-[3rem] h-[18px]  accent-blue-400"
            />
            <span className="text-blue-400 font-bold text-nowrap">
              Remember me
            </span>
          </div>
          <Link to={"/recover"}>
            <p className="text-blue-400 cursor-pointer font-bold text-nowrap">
              Forget password?
            </p>
          </Link>
        </div>
        <div className="grid ">
          <button
            className="group/item flex items-center ring-1 ring-slate-200 w-full h-[2.5rem] justify-center rounded-md shadow-sm gap-3 text-[1.2rem] hover:ring-blue-400 transition-all duration-300 ease-in-out bg-blue-400 hover:bg-blue-600 text-white"
            onClick={loginWithGoogle}
            disabled
          >
            <FcGoogle />

            <p>Google</p>
          </button>
        </div>
        <div className="w-full text-blue-400 flex justify-between col-span-2 container p-4 font-bold">
          <span className="text-nowrap">Dont have an Account?</span>
          <Link className="hover:text-pink-400" to={"/registration"}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
 */

/* 
<div>
<div className="student-registration">
  <Toaster position="top-center" reverseOrder={false}></Toaster>
  <form
    action=""
    className="w-full mt-4"
    onSubmit={formik.handleSubmit}
  >
    <div className="w-full grid grid-cols-1 container mx-auto sm:p-12 p-2 gap-6 justify-items-center">
      <h1 className="text-blue-400 font-bold text-[2rem]">
        Registration Form
      </h1>
     
      <div className="w-full space-y-2">
        <label htmlFor="" className="text-white text-[1.2rem]">
          <span className="sm:block hidden"> Name of student</span>
          <span className="sm:hidden block">First Name</span>
        </label>
        
        <div className="w-full grid sm:grid-cols-2 sm:gap-2 gap-4">
         
          <div>
            <input
              {...formik.getFieldProps("firstname")}
              type="text"
              placeholder="First Name"
              className="p-2 bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
              required
            />
          </div>
          <label
            htmlFor=""
            className="sm:hidden block text-white  text-[1.2rem]"
          >
            Last Name
          </label>

         

          <div>
            <input
              {...formik.getFieldProps("lastname")}
              required
              type="text"
              placeholder="Last Name"
              className="p-2 bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
            />
          </div>
        </div>
      </div>



      <div className="w-full space-y-2">
        <label htmlFor="" className="text-white text-[1.2rem]">
          <span className="sm:block hidden">Password</span>{" "}
          <span className="sm:hidden block">Password</span>
        </label>
    
        <div className="w-full space-y-3">
          <input
            {...formik.getFieldProps("password")}
            required
            type="password"
            placeholder="Password"
            className="p-2  bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
          />
        </div>
      </div>


      <div className="w-full space-y-3">
        <label htmlFor="" className="text-white  text-[1.2rem]">
          Email
        </label>
        <input
          {...formik.getFieldProps("email")}
          required
          type="email"
          className="p-2  bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
        />
      </div>

     
      <div className="w-full space-y-3">
        <label htmlFor="" className="text-white  text-[1.2rem]">
          Phone Number
        </label>
        <input
          {...formik.getFieldProps("phone")}
          required
          type="text"
          className="p-2  bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
        />
      </div>
      
      <button
        type="submit"
        className=" bg-blue-400 hover:bg-blue-600 w-full p-3 text-[1.3rem] font-bold rounded-lg mt-3 transition-all duration-500 ease-in-out text-white"
      >
        Submit
      </button>
      <div className="bg-neutral-50 p-4 sm:w-full rounded-md">
        <div className="w-full text-blue-400 flex justify-between font-bold gap-4">
          <span>Already have an Account?</span>
          <Link to={"/"}>Sign In</Link>
        </div>
      </div>
    </div>
  </form>
</div>
</div> */
