import Login from "../Login/Login";
import Registration from "../REGISTRATION/Registration/Registration";
import LoginSuccess from "../Login/LoginSuccess/LoginSuccess";
import { Route, Routes } from "react-router-dom";
import Quiz from "../QUIZ/StartQuiz/Quiz/Quiz";
import Result from "../QUIZ/Result/Result";
import AdminRegistration from "../QUIZ/ADMIN/POST/Registration/Registration";
import AdminLogin from "../QUIZ/ADMIN/POST/Login/Login";
import AdminMainQuestion from "../QUIZ/ADMIN/POST/PUSH/Main/Main";
import AdminPost from "../QUIZ/ADMIN/POST/PUSH/Main/AdminPost/AdminPost";
import { ProtectQuiz } from "../Validate/Validate";
import Username from "../Login/ResetSesion/Username";
import GenerateOTP from "../Login/ResetSesion/GenerateOTP";
import ResetPassword from "../Login/ResetSesion/Reset";
import DashBoard from "../QUIZ/DashBoard/DashBoard";
import UserProfile from "../QUIZ/DashBoard/UserProfile/UserProfile";

function MainComponenet() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/google/login/success" element={<DashBoard />}>
          <Route path="quiz" element={<Quiz />} />
          <Route path="result" element={<Result />} />
          <Route path="profile" element={<UserProfile />} />
          <Route index element={<LoginSuccess />} />
        </Route>
        <Route path="/generate" element={<GenerateOTP />} />
        <Route path="/recover" element={<Username />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/admin-registration" element={<AdminRegistration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-main" element={<AdminMainQuestion />} />
        <Route path="/admin-post" element={<AdminPost />} />
      </Routes>
    </>
  );
}

export default MainComponenet;
