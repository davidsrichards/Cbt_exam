import style from "./Recovery.module.css";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { validateUsername } from "../../Validate/Validate";
import { getUser } from "../../Helper/ServerHelper";
import { useDispatch } from "react-redux";
import { addUserName } from "../../REDOX/Features/UserSlice/UserSlice";
function Username() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: validateUsername,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let userPromise = getUser(values);
      toast.promise(userPromise, {
        loading: <div>Checking...</div>,
        error: <div>User not found...</div>,
      });
      userPromise.then(() => {
        dispatch(addUserName(values.username));
        return navigate("/generate");
      });
    },
  });
  return (
    <>
      <div className="shade w-full sm:p-0 p-2">
        <Toaster position="center-top" reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center h-screen p-4">
          <div
            className={`${style.textbox} shade mx-auto bg-[#fff]  border-2 p-2 flex items-center justify-center`}
          >
            <div className="title flex flex-col items-center  w-full">
              <h4 className="text-3xl font-bold">Hello Again</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500 text-nowrap ">
                Specify User name
              </span>
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className={`${style.glass} flex flex-col w-full gap-4 p-12`}>
                <input
                  {...formik.getFieldProps("username")}
                  type="text"
                  placeholder="username"
                  className="box p-2 w-full"
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
                    Not a member?
                    <Link to={"/registration"} className="text-red-500">
                      Register now
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

export default Username;
