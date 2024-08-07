import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { resetAdminQuestions } from "../../../REDOX/Features/AdminQuestionSlice/AdminQuestionSlice";

function AdminNavItmes() {
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);
  return (
    <ul
      role="list"
      className="divide-y first:pb-0 last:pb-0 text-[1.4rem] bg-gray-800 text-gray-400 absolute top-20 right-4 border p-6 w-[20rem] rounded-sm"
    >
      <li className="p-4 w-full  flex items-center justify-between  hover:bg-gray-700 transition duration-300 ease-in-out">
        <NavLink to={"cmp211-admin-question"}>CMP221</NavLink>
      </li>
      {/*  */}
      <li className="p-4 w-full  flex items-center justify-between  hover:bg-gray-700 transition duration-300 ease-in-out">
        <NavLink to={"cmp222-admin-question"}>CMP222</NavLink>
      </li>
      {/*  */}
      <li className="p-4 w-full  flex items-center justify-between  hover:bg-gray-700 transition duration-300 ease-in-out">
        <NavLink to={"cmp223-admin-question"}>CMP223</NavLink>
      </li>
      {/*  */}
      <li className="p-4 w-full  flex items-center justify-between  hover:bg-gray-700 transition duration-300 ease-in-out">
        <NavLink to={"gst222-admin-question"}>GST222</NavLink>
      </li>
      {/*  */}
      <li
        className={`p-4 w-full hover:bg-gray-700 transition duration-300 ease-in-out`}
      >
        <NavLink to={"/"} onClick={() => dispatch(resetAdminQuestions())}>
          Log Out
        </NavLink>
      </li>
    </ul>
  );
}

export default AdminNavItmes;
