import { FcGoogle } from "react-icons/fc";
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
  }

  // refresh browser

  return (
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
              className="p-4 text-black bg-neutral-200 font-serif rounded-sm ring-2 ring-white w-full transition delay-100 hover:transition hover:ring-blue-500 outline-none"
            />
          </div>

          {/*  */}
          <div className="w-full space-y-3">
            <label htmlFor="" className="text-white  text-[1.2rem]">
              Password
            </label>
            <input
              {...formik.getFieldProps("password")}
              type="password"
              className="p-4 text-black bg-slate-200 font-serif rounded-sm ring-2 ring-white w-full transition  delay-100  hover:ring-blue-400 outline-none in"
            />
          </div>
          {/*  */}
          <button
            type="submit"
            className="mt-6 w-full p-3 rounded-sm text-[1.2rem] font-bold bg-blue-400 text-white hover:bg-blue-600 transition-all duration-500 ease-in-out"
          >
            Submit
          </button>
          {/*  */}

          {/*  */}
          <div className="flex items-center justify-center text-white w-full mt-6"></div>
        </div>
      </form>
      {/*  */}

      {/*  */}
      <div className="text-white gap-4 mt-6 transition justify-items-center container mx-auto  lg:w-1/2  p-2 m-4  bg-neutral-50 rounded-md">
        {/*  */}
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
