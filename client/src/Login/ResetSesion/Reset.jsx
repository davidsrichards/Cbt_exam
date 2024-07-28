import style from "./Recovery.module.css";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validateResetPassword } from "../../Validate/Validate";
import { resetPassword } from "../../Helper/ServerHelper";

function ResetPassword() {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm: "",
    },
    validate: validateResetPassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        let resetPromise = resetPassword({
          username: username,
          password: values.password,
        });
        toast.promise(resetPromise, {
          loading: <div>Validating...</div>,
          success: <div>Password Reset</div>,
          error: <div>could not reset password</div>,
        });
        resetPromise
          .then(() => {
            navigate("/");
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
      <div className="container mx-auto shade">
        <Toaster position="center-top" reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center h-screen ">
          <div className={`${style.textbox} w-[25rem] shade overflow-hidden`}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Hello {username}</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Specify New Password
              </span>
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className={`${style.glass} flex flex-col w-full gap-4 p-4`}>
                <input
                  {...formik.getFieldProps("password")}
                  type="text"
                  placeholder="new password"
                  className="box p-2"
                />
                <input
                  {...formik.getFieldProps("confirm")}
                  type="text"
                  placeholder="confirm password"
                  className="box p-2"
                />
                <button
                  type="submit"
                  className={`${style.btn} w-full transition-all duration-300 ease-in-out`}
                >
                  Verify
                </button>
                <div
                  className="
              text-center py-4"
                >
                  <span className="text-gray-500 flex items-center justify-center gap-4">
                    Verified?
                    <Link to={"/"} className="text-red-500">
                      Sign In
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
