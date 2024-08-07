import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
<CgProfile />;
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import AdminNavItmes from "./AdminNavItems";
import { useDispatch } from "react-redux";
import { resetAdminQuestions } from "../../../REDOX/Features/AdminQuestionSlice/AdminQuestionSlice";
<LiaTimesSolid />;

function AdminNavigationBar() {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="bg-[#f0f0f0] hover:bg-[#aaa] h-[5rem] fixed w-full left-0 z-10 top-0">
      <div className={`lg:hidden block ${!isVisible ? "block " : "hidden "} `}>
        <CiMenuBurger
          className=" group/item absolute top-8 right-14 text-[1.8rem] cursor-pointer "
          onClick={() => {
            setIsVisible((prev) => !prev);
            dispatch(resetAdminQuestions());
          }}
        />
        <div className="">{isVisible && <AdminNavItmes />}</div>
      </div>
      {/*  */}
      <div
        className={` cursor-pointer lg:hidden block    ${
          isVisible ? "block " : "hidden "
        } `}
      >
        <LiaTimesSolid
          className="group/item absolute top-8 right-14 text-[1.8rem] cursor-pointer"
          onClick={() => {
            setIsVisible((prev) => !prev);
            dispatch(resetAdminQuestions());
          }}
        />
        <div className="">{isVisible && <AdminNavItmes />}</div>
      </div>
    </nav>
  );
}

export default AdminNavigationBar;
/*
 */
