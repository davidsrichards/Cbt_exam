import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import style from "../../../Login/ResetSesion/Recovery.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchUserInfo } from "../FetchUserInfo/FetchUserInfo";
import { useState } from "react";
import { updateuserInformation } from "../../../Helper/ServerHelper";
import { ConvertToBase64 } from "./ConvertToBase64";

function UserProfile() {
  const [file, setFile] = useState();

  const { username } = useSelector((state) => state.user);

  const [{ userInfo, serverError, isLoading }] = FetchUserInfo(username);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: userInfo?.firstname || "",
      lastname: userInfo?.lastname || "",
      email: userInfo?.email || "",
      phone: userInfo?.phone || "",
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, {
        profile: file || "",
      });
      let updatePromise = updateuserInformation(username, values);
      toast.promise(updatePromise, {
        loading: <div>Updating...</div>,
        success: <div>Updated</div>,
        error: <div>Could not updates</div>,
      });
      updatePromise.then(() => {
        return navigate("/");
      });
    },
  });

  const updaload = async (e) => {
    const base64 = await ConvertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <>
      <div className="container mx-auto shade">
        <Toaster position="center-top" reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center ">
          <div className={`${style.textbox} shade overflow-hidden w-full`}>
            <div className="title flex flex-col items-center">
              <label htmlFor="profile">
                <img
                  src={
                    file ||
                    userInfo?.profile ||
                    "https://th.bing.com/th/id/OIP.1Flt_xDh6sbOvnGclxG0LwAAAA?pid=ImgDet&w=179&h=179&c=7&dpr=1.5"
                  }
                  alt=""
                  className="w-[10rem] h-[10rem] rounded-full object-cover cursor-pointer"
                />
                <input
                  onChange={updaload}
                  type="file"
                  id="profile"
                  name="profile"
                  className="hidden"
                  disabled
                />
              </label>
              <h4 className="text-4xl font-bold py-4">{userInfo?.firstname}</h4>
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className={`${style.glass} flex flex-col w-full gap-4 p-4`}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    {...formik.getFieldProps("firstname")}
                    type="text"
                    placeholder="username"
                    className="box p-2"
                  />
                  <input
                    {...formik.getFieldProps("lastname")}
                    type="text"
                    placeholder="lastname"
                    className="box p-2"
                  />
                </div>
                {/*  */}
                <div className="grid ">
                  <input
                    {...formik.getFieldProps("email")}
                    type="email"
                    placeholder="email"
                    className="box p-2"
                  />
                </div>
                <div className="grid ">
                  <input
                    {...formik.getFieldProps("phone")}
                    type="text"
                    placeholder="mobile"
                    className="box p-2"
                  />
                </div>
                {/*  */}
                <button
                  type="submit"
                  className={`${style.btn} w-full transition-all duration-300 ease-in-out`}
                >
                  Update
                </button>
                <div
                  className="
              text-center py-4"
                ></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
