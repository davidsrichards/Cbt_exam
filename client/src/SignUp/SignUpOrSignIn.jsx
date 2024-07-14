import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";

function SignUpOrSignIn({ question, action, to }) {
  return (
    <>
      <NavLink
        to={to}
        className=" flex w-full  mt-20 items-center justify-center text-[1.3rem] text-pink-400 gap-4 font-bold"
      >
        <span>{question}</span> <span>{action}</span>
      </NavLink>
    </>
  );
}

export default SignUpOrSignIn;
