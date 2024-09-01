import "./Input.css";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

function Input() {
  const [isText, setIsText] = useState(false);
  return (
    <div className="w-full h-screen flex items-center justify-center  bg-secondary p-8 ">
      <div className="bg-[#fff] flex flex-col gap-8 p-12 w-full">
        <div className="self-center">
          <span className="key">F</span>&nbsp; <span className="middle">P</span>
          &nbsp;
          <span className="key">N</span>
        </div>
        <h1 className="sign text-[1.8rem]">Sign In</h1>
        <div className="flex flex-col gap-6 border-b-[0.8px] border-slate-400 pb-6">
          <input
            type="text"
            className="text-field p-3 outline-none ring-[0.6px] ring-slate-500 rounded-md w-full"
            placeholder="Email address"
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
              type={isText ? "text" : "password"}
              className="text-field p-3 outline-none ring-[0.6px] ring-slate-500 rounded-md w-full"
              placeholder="password"
            />
          </div>
          <button className="bg-primary uppercase p-[0.5rem] text-[#fff] rounded-md transition-all duration-300 ease-in-out hover:bg-[#28608d]">
            Sign In
          </button>
        </div>
        <Link className="uppercase btn underline select-none">
          forget your password?
        </Link>
      </div>
    </div>
  );
}

export default Input;
