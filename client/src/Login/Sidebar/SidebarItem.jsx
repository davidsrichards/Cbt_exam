import { Link, NavLink } from "react-router-dom";

function SidebarItems({ to, value }) {
  return (
    <>
      <ul className="grid  w-full transition duration-500 ease-in-out">
        <NavLink to={to}>
          <li className="hover:bg-gray-700 cursor-pointer p-4 w-full transition duration-500 ease-in-out">
            {value}
          </li>
        </NavLink>
      </ul>
    </>
  );
}

export default SidebarItems;
