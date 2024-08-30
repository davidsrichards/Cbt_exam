import { useEffect } from "react";
import NavigationBar from "../../Login/Navigation/Navigation";
import SideBar from "../../Login/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startTimerAction } from "../../REDOX/Features/TimerSlice/TimerSlice";

function DashBoard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.username);

  useEffect(() => {
    dispatch(startTimerAction(false));
  }, []);

  // print google information

  const { username } = useSelector((state) => state.user.googleInformation);

  return (
    <>
      <>
        <div className="grid lg:grid-cols-12 w-full h-scree transition duration-300 ease-in-out">
          <SideBar username={user || username} />
          <NavigationBar username={user || username} />
          <div className="relative lg:col-span-8 md:col-span-6 lg:col-start-4 lg:col-end-12 top-[4rem] transition duration-300 ease-in-out">
            {" "}
            <div className="h-screen flex items-center justify-center">
              <Outlet />
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default DashBoard;
