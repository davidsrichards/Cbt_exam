import SignUpOrSignIn from "../../SignUp/SignUpOrSignIn";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { UserRegistration } from "../../Helper/ServerHelper";
import { useNavigate, Link } from "react-router-dom";
function Registration() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let registerPromise = UserRegistration(values);
      toast.promise(registerPromise, {
        loading: <div>Verifying Credentials</div>,
        success: <div>Registration Successful</div>,
        error: <div>Could not Register</div>,
      });

      registerPromise.then(() => {
        return navigate("/");
      });
    },
  });
  return (
    <>
      <div>
        <div className="bg-[url(https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-center bg-cover bg-fixed rounded-lg overflow-auto">
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
              {/*  */}
              <div className="w-full space-y-2">
                <label htmlFor="" className="text-white text-[1.2rem]">
                  <span className="sm:block hidden"> Name of student</span>{" "}
                  <span className="sm:hidden block">First Name</span>
                </label>
                {/*  */}
                <div className="w-full grid sm:grid-cols-2 sm:gap-2 gap-4">
                  {/*  */}
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

                  {/*  */}

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

              {/*  */}

              <div className="w-full space-y-2">
                <label htmlFor="" className="text-white text-[1.2rem]">
                  <span className="sm:block hidden">Password</span>{" "}
                  <span className="sm:hidden block">Password</span>
                </label>
                {/*  */}

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

              {/*  */}
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

              {/*  */}
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
              {/*  */}
              <button
                type="submit"
                className=" bg-blue-400 hover:bg-blue-600 w-full p-3 text-[1.3rem] font-bold rounded-lg mt-3 transition-all duration-500 ease-in-out text-white"
              >
                Submit
              </button>
              <div className="bg-neutral-50 p-4 sm:w-full rounded-md">
                <div className="w-full text-blue-400 flex justify-between font-bold">
                  <span>Already have an Account?</span>
                  <Link to={"/"}>Sign In</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
