import LoadingQuestion from "../../../Hooks/ApiData/LoadingQuestion/LoadingQuestion";
import SignUpOrSignIn from "../../../../SignUp/SignUpOrSignIn";
import { useNavigate } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { validateLogin } from "../../../../Validate/Validate";
import { adminLogin } from "../PUSH/Main/AdminPost/AdminHelperFunction/AdminHelperFunction";

function AdminLogin() {
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
      try {
        let loginPromise = adminLogin(values);
        toast.promise(loginPromise, {
          loading: <div>Checking...</div>,
          success: <div>Successful</div>,
          error: <div>Invalid Credentials</div>,
        });
        loginPromise
          .then(() => {
            return navigate("/admin-main");
          })
          .catch((err) => {
            return err;
          });
      } catch (error) {
        return error;
      }
    },
  });

  return (
    <>
      <div className="bg-[url(https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-center bg-cover bg-fixed rounded-lg  h-screen w-full flex items-center justify-center overflow-auto">
        <Toaster position="center-top" reverseOrder={false}></Toaster>
        <form
          action=""
          method="POST"
          className="w-full bg-transparent"
          onSubmit={formik.handleSubmit}
        >
          <div className="grid grid-cols-1 transition justify-items-center container mx-auto  sm:w-1/2   m-4 w-full  p-2">
            <h1 className="text-[2rem] pb-6 text-blue-400 font-bold">
              Admin Sign In
            </h1>

            <div className="w-full space-y-3">
              <label htmlFor="" className="text-white  text-[1.2rem]">
                User Name
              </label>
              <input
                {...formik.getFieldProps("username")}
                type="text"
                className="p-4 text-slate-500 bg-neutral-200 font-serif rounded-sm ring-2 ring-white w-full transition delay-100 hover:transition hover:ring-blue-500 outline-none"
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
                className="p-4 text-slate-500 bg-slate-200 font-serif rounded-sm ring-2 ring-white w-full transition  delay-100  hover:ring-blue-400 outline-none"
              />
            </div>
            {/*  */}
            <button
              type="submit"
              className="mt-6 w-full p-3 delay-1000 rounded-sm text-[1.2rem] font-bold bg-blue-400 hover:bg-blue-600 transition-all duration-100 ease-in-out text-white"
            >
              Submit
            </button>
            {/*  */}
          </div>
        </form>

        {/*  */}
        <div className="absolute -top-10 left-10">
          <SignUpOrSignIn
            to="/"
            action={<FaHouseUser className="text-[2rem]" />}
          />
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
