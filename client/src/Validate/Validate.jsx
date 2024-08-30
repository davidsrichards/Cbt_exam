import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

////////////////////////////// validate login

const verifyLogin = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("username required");
  } else if (!values.password) {
    error.password = toast.error("password required");
  }
  return error;
};

// verify login

export const validateLogin = (values) => {
  const error = verifyLogin({}, values);
  return error;
};

////////////////////////////// validate username

const verifyUsername = (errors = {}, values) => {
  if (!values.username) {
    errors.username = toast.error("username required");
  }
  return errors;
};
// validate username
export const validateUsername = (values) => {
  const errors = verifyUsername({}, values);
  return errors;
};

/// protect rout

export const ProtectQuiz = ({ children }) => {
  const user = useSelector((state) => state.user.username);
  const { username } = useSelector((state) => state.user.googleInformation);
  if (user === "" && username === "")
    return <Navigate to={"/"} replace={true}></Navigate>;
  return children;
};

///////// verify reset password

const verifyResetPassword = (errors = {}, values) => {
  if (!values.password) {
    errors.password = toast.error("password required");
  } else if (values.confirm && values.confirm !== values.password) {
    errors.confirm = toast.error("password not match");
  } else if (values.password.length < 4) {
    errors.exist = toast.error("Password must be min of 4 Characters");
  } else if (!values.confirm) {
    errors.confirm = toast.error("confirm your password");
  }
  return errors;
};

// validate

export const validateResetPassword = (values) => {
  const errors = verifyResetPassword({}, values);
  return errors;
};
