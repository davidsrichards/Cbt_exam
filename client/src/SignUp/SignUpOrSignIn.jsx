import { NavLink } from "react-router-dom";

function SignUpOrSignIn({ question, action, to }) {
  return (
    <>
      <NavLink
        to={to}
        className=" flex w-full  mt-20 items-center justify-center  text-white gap-4 font-bold text-[1.6rem] underline"
      >
        <span>{question}</span> <span>{action}</span>
      </NavLink>
    </>
  );
}

export default SignUpOrSignIn;
