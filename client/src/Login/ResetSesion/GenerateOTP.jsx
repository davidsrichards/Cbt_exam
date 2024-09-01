import style from "./Recovery.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { GenerateOTP, sendMail, verifyOTP } from "../../Helper/ServerHelper";
import { useSelector } from "react-redux";
import { FetchUserInfo } from "../../QUIZ/DashBoard/FetchUserInfo/FetchUserInfo";

function GeenrateOTP() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);
  const [{ userInfo, serverError, isLoading }] = FetchUserInfo(username);
  const [codes, setCode] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });

  const inputRefs = useRef([
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]);

  const handleChange = (index, value) => {
    setCode((prev) => ({ ...prev, [`code${index + 1}`]: value }));
    if (value !== "" && index < 3) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  // hadle backspace

  const handleBackSpace = (index) => {
    if (index > 0 && codes[`code${index}`] === "") {
      setCode((prev) => ({
        ...prev,
        [`code${index}`]: "",
        [`code${index - 1}`]: "",
      }));
      inputRefs.current[index - 1].current.focus();
    }
  };

  // generate otp

  const generateOtp = async () => {
    let response = GenerateOTP({ username }, userInfo?.email);
    toast.promise(response, {
      loading: <div>sending OTP...</div>,
      success: <div>email sent successfully</div>,
      error: <div>could not sent</div>,
    });
  };

  useEffect(() => {
    generateOtp();
  }, [username]);

  // verify OTP

  // HANDLE SUBMIT

  const onSubmit = async (e) => {
    e.preventDefault();
    let OTP = "";
    Object.values(codes).map((code) => {
      OTP += code;
    });

    try {
      let generatePromise = verifyOTP({ code: OTP });
      toast.promise(generatePromise, {
        loading: <div>Loading...</div>,
        success: <div>Verified...</div>,
        error: <div>Invalid OTP...</div>,
      });

      generatePromise
        .then(() => {
          return navigate("/reset");
        })
        .catch((err) => {
          return err;
        });
    } catch (error) {
      return error;
    }
  };

  // RESEND OTP

  const resendOTP = async () => {
    generateOtp();
  };

  return (
    <>
      {" "}
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center h-screen  border-green-500">
          <div
            className={`${style.textbox} shade border-blue-500 mx-auto border-2 p-2 bg-[#fff]`}
          >
            <div className="title flex flex-col items-center">
              <h4 className="text-3xl font-bold">Enter OTP</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                check you email.
              </span>
            </div>
            <form
              action=""
              className="pt-10 w-full flex flex-col items-center justify-center"
              onSubmit={onSubmit}
            >
              <div className={`${style.glass} p-3 border-pink-400`}>
                <div className="input text-center justify-center flex flex-col w-full pb-6 p-4 ">
                  {" "}
                  <span className="py-4 text-sm text-left text-gray-500">
                    please enter{" "}
                    <span className="font-semibold text-black">4</span> Digits
                    sent to your email address
                  </span>
                  <div className=" inline-block space-x-4 ">
                    {Object.keys(codes).map((code, index) => (
                      <input
                        key={code}
                        value={codes[code]}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace") {
                            handleBackSpace(index);
                          }
                        }}
                        ref={inputRefs.current[index]}
                        type="text"
                        className=" border-2 w-[3rem] h-[3rem] rounded-md text-center font-mono font-bold text-[2rem]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="
        text-center mt-8 w-full"
              >
                <button type="submit" className={`${style.btn}`}>
                  Verify
                </button>
              </div>
            </form>
            <span className="text-gray-500 pb-2">
              Cant get OTP?
              <button className={`${style.btn}`} onClick={resendOTP}>
                Resend OTP
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeenrateOTP;
