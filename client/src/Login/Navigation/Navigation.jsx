import { CiMenuBurger } from "react-icons/ci";
import NavItems from "./NavigationItem";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
<CgProfile />;
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
<LiaTimesSolid />;
import { useDispatch, useSelector } from "react-redux";
import { FetchUserInfo } from "../../QUIZ/DashBoard/FetchUserInfo/FetchUserInfo";
import GlobalTimer from "../../QUIZ/GLOBAL/GlobalTimer/GlobalTimer";
import {
  endTimerAction,
  getTimersAction,
  openQuizAction,
  resetTimerAction,
  startTimerAction,
} from "../../REDOX/Features/TimerSlice/TimerSlice";

function NavigationBar({ username }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.username);
  const { timer, started, ended } = useSelector((state) => state.timerslice);

  const [{ userInfo, serverError, isLoading }] = FetchUserInfo(user);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (started) {
      if (timer > 0) {
        const interval = setInterval(() => {
          dispatch(getTimersAction());
        }, 1000);
        return () => {
          clearInterval(interval);
        };
      }
    }
  }, [started]);

  useEffect(() => {
    if (timer === 0) {
      dispatch(startTimerAction(false));
    }
  }, [timer]);

  const minutes = Math.floor((timer % 900) / 60);
  const seconds = timer % 60;

  // opened
  const { opened } = useSelector((state) => state.timerslice);

  // hide items

  window.addEventListener("dblclick", () => {
    if (opened) {
      dispatch(openQuizAction(false));
    }
  });

  return (
    <nav className="bg-[#fff] h-[5rem] fixed w-full left-0 z-10 top-0">
      {started && (
        <div
          className={`absolute top-6 lg:left-[50%] sm:left-[45%] left-[41%] font-mono font-bold text-[1.2rem] bg-[#fff]  p-[8px] rounded-md px-3 time  ${
            minutes < 3 ? "text-red-600" : "text-[#4e8d71]"
          }`}
        >
          {minutes < 10 ? "0" + minutes : minutes} :{" "}
          {seconds < 10 ? "0" + seconds : seconds}
        </div>
      )}
      <div className={`lg:hidden block ${!opened ? "block " : "hidden "} `}>
        <CiMenuBurger
          className=" group/item absolute top-8 right-14 text-[1.8rem] cursor-pointer hover:text-[#2e9265]"
          onClick={() => dispatch(openQuizAction(!opened))}
        />
        <div className="">{opened && <NavItems />}</div>
      </div>
      {/*  */}
      <div
        className={` cursor-pointer lg:hidden block    ${
          opened ? "block " : "hidden "
        } `}
      >
        <LiaTimesSolid
          className="group/item absolute top-8 right-14 text-[1.8rem] cursor-pointer hover:text-[#0dff92]"
          onClick={() => dispatch(openQuizAction(!opened))}
        />
        <div className="">{opened && <NavItems />}</div>
      </div>

      {/* admin name */}
      <span className="absolute lg:top-8 lg:right-40 lg:block hidden uppercase font-semibold">
        {username}
      </span>
      {/*  */}
      <span className="absolute top-8 left-40 lg:hidden block uppercase font-semibold">
        {started ? "" : username}
      </span>
      <Link to={"profile"}>
        <img
          src={
            userInfo?.profile ||
            "https://th.bing.com/th/id/R.b2b34517339101a111716be1c203f354?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0"
          }
          alt=""
          className="w-[3.5rem] h-[3.5rem] object-cover absolute top-3 left-14 rounded-full cursor-pointer hover:scale-110 lg:hidden block transition-all duration-500 ease-in-out"
        />
      </Link>
      {/*  */}
      <Link to={"profile"}>
        <img
          src={
            userInfo?.profile ||
            "https://th.bing.com/th/id/R.b2b34517339101a111716be1c203f354?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0"
          }
          alt=""
          className="w-[3.5rem] h-[3.5rem] object-cover  absolute top-3 right-14 lg:block hidden rounded-full cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </Link>
    </nav>
  );
}

export default NavigationBar;
/*
 */
