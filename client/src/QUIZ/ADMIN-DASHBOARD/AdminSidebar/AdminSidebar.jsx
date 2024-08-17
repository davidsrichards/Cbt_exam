import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SidebarItems from "../../../Login/Sidebar/SidebarItem";
import { resetAdminQuestions } from "../../../REDOX/Features/AdminQuestionSlice/AdminQuestionSlice";

function AdminSidebar({ username }) {
  const [showCourse, setShowCourse] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#2f4050] hover:bg-[#384860] text-white h-screen w-0 lg:h-screen lg:w-64 overflow-auto fixed top-0 left-0 transition-all duration-500 ease-in-out z-50">
      {/* Navigation Header */}
      <div className="flex items-center justify-between p-4">
        <span className="text-xl font-semibold uppercase flex gap-4">
          WELCOME <span>{username}</span>
        </span>
      </div>

      {/* Admin Menu */}
      <nav className="mt-4">
        <ul>
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center justify-between">
            <Link to={"institution"}>Select Course</Link>
            <FaAngleDown
              className={`${
                showCourse ? " rotate-180" : " rotate-0"
              } transition duration-300 ease-in-out`}
              onClick={() => setShowCourse((prev) => !prev)}
            />
          </li>
          <div className={`${showCourse ? "block" : "hidden"} font-serif`}>
            <li>
              <SidebarItems to={"cmp211-admin-question"} value={"CMP221"} />
            </li>
            <li>
              <SidebarItems to={"cmp222-admin-question"} value={"CMP222"} />
            </li>
            <li>
              <SidebarItems to={"cmp223-admin-question"} value={"CMP 223"} />
            </li>
            <li>
              <SidebarItems to={"cmp225-admin-question"} value={"CMP 225"} />
            </li>
            <li>
              <SidebarItems to={"gst222-admin-question"} value={"GST 222"} />
            </li>
          </div>
          {/*  */}
          <li className={`relative -top-2 transition duration-500 ease-in-out`}>
            <ul className="grid  w-full transition duration-500 ease-in-out cla">
              <Link to={"/"} onClick={() => dispatch(resetAdminQuestions())}>
                <li className="hover:bg-gray-700 cursor-pointer p-4 w-full transition duration-500 ease-in-out">
                  Log out
                </li>
              </Link>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminSidebar;
