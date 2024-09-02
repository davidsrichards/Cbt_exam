import SignUpOrSignIn from "../../SignUp/SignUpOrSignIn";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { UserRegistration } from "../../Helper/ServerHelper";
import { useNavigate, Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { validateUserEmail } from "../../Validate/Validate";
function Registration() {
  const [isText, setIsText] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
    },
    validate: validateUserEmail,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let registerPromise = UserRegistration(values);
      toast.promise(registerPromise, {
        loading: <div>Verifying Credentials</div>,
        success: <div>Registration Successful</div>,
        error: <div>email already exist</div>,
      });

      registerPromise.then(() => {
        return navigate("/");
      });
    },
  });
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <form
          className="h-screen flex items-center justify-center lg:w-1/2 w-full sm:p-4 p-2"
          onSubmit={formik.handleSubmit}
        >
          <Toaster position="top-center" reverseOrder={false}></Toaster>
          <div className="bg-[#fff] flex flex-col gap-8 p-4 px-12 w-full">
            <div className="self-center">
              <span className="key">C</span>&nbsp;{" "}
              <span className="middle">M</span>
              &nbsp;
              <span className="key">P</span>
            </div>
            <h1 className="uppercase btn  select-none text-nowrap">Sign Up</h1>
            <div className="flex flex-col gap-6 border-b-[0.8px] border-slate-400 pb-6">
              <input
                {...formik.getFieldProps("firstname")}
                type="text"
                className="text-field p-3 outline-none ring-[0.6px] ring-slate-500 rounded-md w-full"
                placeholder="username"
                required
              />

              {/*  */}
              {/* <input
                {...formik.getFieldProps("lastname")}
                type="text"
                className="text-field p-3 outline-none ring-[0.6px] ring-slate-500 rounded-md w-full"
                placeholder="lastname"
                required
              /> */}

              {/*  */}
              <input
                {...formik.getFieldProps("email")}
                type="email"
                className="text-field p-3 outline-none ring-[0.6px] ring-slate-500 rounded-md w-full"
                placeholder="email"
                required
              />

              {/*  */}
              <input
                {...formik.getFieldProps("password")}
                type="text"
                className="text-field p-3 outline-none ring-[0.6px] ring-slate-500 rounded-md w-full"
                placeholder="password"
                required
              />
              {/*  */}
              <input
                {...formik.getFieldProps("phone")}
                type="text"
                className="text-field p-3 outline-none ring-[0.6px] ring-slate-500 rounded-md w-full"
                placeholder="phone"
              />
              {/* * */}
              <button className="bg-primary uppercase p-[0.5rem] text-[#fff] rounded-md transition-all duration-300 ease-in-out hover:bg-[#28608d]">
                Sign Up
              </button>
            </div>

            <Link
              to={"/"}
              className="uppercase btn underline select-none text-nowrap"
            >
              already have an account?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
