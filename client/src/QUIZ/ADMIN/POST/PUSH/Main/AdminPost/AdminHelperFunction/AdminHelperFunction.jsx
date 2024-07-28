import axios from "axios";
import { NavLink } from "react-router-dom";
/// base url
const BASE_URL = "/api/user/admin/login";
export const AdminHelperFunction = async (url, result) => {
  const data = await axios.post(url, result).catch((err) => console.log(err));
  if (data) console.log(data);
};

// empty admin post

export const Emptypost = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-[1.3rem]">Looks like you have nothing here</h1>
      <div className="flex items-center justify-between w-full">
        <NavLink to={"/admin-main"} className={"text-blue-400"}>
          Add Questions
        </NavLink>
        <NavLink to={"/"} className={"text-blue-400"}>
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

/// login

export async function adminLogin(credentials) {
  try {
    const { data } = await axios.post(`${BASE_URL}`, credentials);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
