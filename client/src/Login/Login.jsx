import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
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
  const [isText, setIsText] = useState(false);
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

      loginPromise
        .then(() => {
          dispatch(addUserName(values.username));
          return navigate("/google/login/success");
        })
        .catch(() => {
          return;
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
  }

  // refresh browser

  return (
    <div className="w-full flex items-center justify-center  bg-secondary">
      <form
        className="h-screen flex items-center justify-center lg:w-1/2 w-full sm:p-4 p-2"
        onSubmit={formik.handleSubmit}
      >
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <div className="bg-[#fff] flex flex-col gap-8 p-12 w-full">
          <div className="self-center">
            <span className="key">C</span>&nbsp;{" "}
            <span className="middle">M</span>
            &nbsp;
            <span className="key">P</span>
          </div>
          <div className="flex items-center justify-between">
            <h1 className=" uppercase btn  select-none text-nowrap">Sign In</h1>
            <Link
              to={"/admin-login"}
              className="uppercase btn underline select-none text-nowrap"
            >
              Admin
            </Link>
          </div>
          <div className="flex flex-col gap-6 border-b-[0.8px] border-slate-400 pb-6">
            <input
              {...formik.getFieldProps("username")}
              type="text"
              className="text-field p-3 outline-none ring-[0.6px] ring-slate-500 rounded-md w-full"
              placeholder="username"
            />
            <div className="relative w-full">
              {!isText && (
                <IoMdEye
                  className="absolute right-4 top-[1rem] text-[1.3rem]"
                  onClick={() => setIsText(true)}
                />
              )}
              {isText && (
                <IoMdEyeOff
                  className="absolute right-4 top-[1rem] text-[1.3rem]"
                  onClick={() => setIsText(false)}
                />
              )}
              <input
                {...formik.getFieldProps("password")}
                type={isText ? "text" : "password"}
                className="text-field p-3 outline-none ring-[0.6px] ring-slate-500 rounded-md w-full"
                placeholder="password"
              />
            </div>
            <button
              type="submit"
              className="bg-primary uppercase p-[0.5rem] text-[#fff] rounded-md transition-all duration-300 ease-in-out hover:bg-[#28608d]"
            >
              Sign In
            </button>
          </div>
          <div className="flex sm:items-center sm:justify-between sm:flex-row flex-col">
            <Link
              to={"/registration"}
              className="uppercase btn underline select-none text-nowrap"
            >
              dont have an account?
            </Link>
            <Link
              to={"/recover"}
              className="uppercase btn underline select-none text-nowrap"
            >
              forget your password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
