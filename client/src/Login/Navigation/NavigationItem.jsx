import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { GlobalResetAllActions } from "../../QUIZ/GLOBAL/ResetAll/ResetAll";

function NavItems() {
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);

  return (
    <ul
      role="list"
      className=" bg-[#206c4a] divide-y first:pb-0 last:pb-0 text-[1.2rem] bg-primary bg-opacity-80 text-white absolute top-20 right-2 border p-6 w-[16rem] rounded-sm"
    >
      <li className="p-3 w-full  flex items-center justify-between  hover:bg-gray-700 transition duration-300 ease-in-out">
        <Link to={"cmp211-init"}>CMP221</Link>
      </li>
      {/*  */}
      <li className="p-3 w-full  flex items-center justify-between  hover:bg-gray-700 transition duration-300 ease-in-out">
        <Link to={"cmp222-init"}>CMP222</Link>
      </li>
      {/*  */}
      <li className="p-3 w-full  flex items-center justify-between  hover:bg-gray-700 transition duration-300 ease-in-out">
        <Link to={"cmp223-init"}>CMP223</Link>
      </li>
      {/*  */}
      <li className="p-3 w-full  flex items-center justify-between  hover:bg-gray-700 transition duration-300 ease-in-out">
        <Link to={"cmp225-init"}>CMP225</Link>
      </li>
      {/*  */}
      <li className="p-3 w-full  flex items-center justify-between  hover:bg-gray-700 transition duration-300 ease-in-out">
        <Link to={"gst222-init"}>GST222</Link>
      </li>
      {/*  */}
      <li className="p-3 w-full  flex items-center justify-between  hover:bg-gray-700 transition duration-300 ease-in-out">
        <Link to={"profile"}>Profile</Link>
        <FaAngleDown
          onClick={() => setVisible((prev) => !prev)}
          className={` rotate-${
            isVisible ? "180" : "0"
          } transition duration-300 ease-in-out`}
        />
      </li>
      {/*  */}
      <li
        className={`${
          isVisible ? "block" : "hidden"
        } p-3 w-full hover:bg-gray-700 transition duration-300 ease-in-out`}
      >
        <Link to={"/"} onClick={() => GlobalResetAllActions(dispatch)}>
          Log Out
        </Link>
      </li>
    </ul>
  );
}

export default NavItems;
