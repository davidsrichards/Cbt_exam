import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SidebarItems from "./SidebarItem";

function SideBar({ username }) {
  const [showCourse, setShowCourse] = useState(false);
  const dispatch = useDispatch();
  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <div className="bg-primary  text-white h-screen w-0 lg:h-screen lg:w-64 overflow-auto fixed top-0 left-0 transition-all duration-500 ease-in-out z-50">
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
              <SidebarItems to={"cmp211-init"} value={"CMP 221"} />
            </li>
            <li>
              <SidebarItems to={"cmp222-init"} value={"CMP 222"} />
            </li>
            <li>
              <SidebarItems to={"cmp223-init"} value={"CMP 223"} />
            </li>
            <li>
              <SidebarItems to={"cmp225-init"} value={"CMP 225"} />
            </li>
            <li>
              <SidebarItems to={"gst222-init"} value={"GST 222"} />
            </li>
          </div>
          <li className="p-4 hover:bg-gray-700 cursor-pointer  flex items-center justify-between">
            <Link to={"profile"}>Profile</Link>
            <FaAngleDown
              className={`${
                profileVisible ? " rotate-180" : " rotate-0"
              } transition duration-300 ease-in-out`}
              onClick={() => setProfileVisible((prev) => !prev)}
            />
          </li>
          <li
            className={`${
              profileVisible ? "block" : "hidden"
            } relative -top-2 transition duration-500 ease-in-out`}
          >
            <ul className="grid  w-full transition duration-500 ease-in-out cla">
              <Link to={"/"} onClick={() => dispatch(resetAllAction())}>
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

export default SideBar;
