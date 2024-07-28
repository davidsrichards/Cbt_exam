import { CiMenuBurger } from "react-icons/ci";
import NavItems from "./NavigationItem";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
<CgProfile />;
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
<LiaTimesSolid />;
import { useSelector } from "react-redux";
import { FetchUserInfo } from "../../QUIZ/DashBoard/FetchUserInfo/FetchUserInfo";

function NavigationBar({ username }) {
  const user = useSelector((state) => state.user.username);

  const [{ userInfo, serverError, isLoading }] = FetchUserInfo(user);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="bg-[#f0f0f0] hover:bg-[#aaa] h-[5rem] fixed w-full left-0 z-10 top-0">
      <div className={`lg:hidden block ${!isVisible ? "block " : "hidden "} `}>
        <CiMenuBurger
          className=" group/item absolute top-8 right-14 text-[1.8rem] cursor-pointer "
          onClick={() => setIsVisible((prev) => !prev)}
        />
        <div className="">{isVisible && <NavItems />}</div>
      </div>
      {/*  */}
      <div
        className={` cursor-pointer lg:hidden block    ${
          isVisible ? "block " : "hidden "
        } `}
      >
        <LiaTimesSolid
          className="group/item absolute top-8 right-14 text-[1.8rem] cursor-pointer"
          onClick={() => setIsVisible((prev) => !prev)}
        />
        <div className="">{isVisible && <NavItems />}</div>
      </div>

      {/* admin name */}
      <span className="absolute lg:top-8 lg:right-40 lg:block hidden uppercase font-semibold">
        {username}
      </span>
      {/*  */}
      <span className="absolute top-8 left-40 lg:hidden block uppercase font-semibold">
        {username}
      </span>
      <Link to={"profile"}>
        <img
          src={
            userInfo?.profile ||
            "https://th.bing.com/th/id/R.b2b34517339101a111716be1c203f354?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0"
          }
          alt=""
          className="w-[4rem] h-[4rem] object-cover absolute top-3 left-14 rounded-full cursor-pointer hover:scale-110 lg:hidden block transition-all duration-500 ease-in-out"
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
          className="w-[4rem] h-[4rem] object-cover  absolute top-3 right-14 lg:block hidden rounded-full cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </Link>
    </nav>
  );
}

export default NavigationBar;
/*
 */
