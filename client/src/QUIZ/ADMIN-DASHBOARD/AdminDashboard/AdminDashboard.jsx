import { Outlet } from "react-router-dom";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminNavigationBar from "../AdminNavigationBar/AdminNavigationBar";

function AdminDashBoard() {
  return (
    <>
      <>
        <div className="grid lg:grid-cols-12 w-full h-scree transition duration-300 ease-in-out">
          <AdminSidebar />
          <AdminNavigationBar />
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

export default AdminDashBoard;
