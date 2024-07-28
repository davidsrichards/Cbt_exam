import { useEffect } from "react";
import NavigationBar from "../../Login/Navigation/Navigation";
import SideBar from "../../Login/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function DashBoard() {
  const { username } = useSelector((state) => state.user);

  return (
    <>
      <>
        <div className="grid lg:grid-cols-12 w-full h-scree transition duration-300 ease-in-out">
          <SideBar username={username} />
          <NavigationBar username={username} />
          <div className="relative lg:col-span-8 md:col-span-6 lg:col-start-4 lg:col-end-12 top-[4rem] transition duration-300 ease-in-out">
            {" "}
            <Outlet />
          </div>
        </div>
      </>
    </>
  );
}

export default DashBoard;
