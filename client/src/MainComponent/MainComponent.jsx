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
import Username from "../Login/ResetSesion/Username";
import GenerateOTP from "../Login/ResetSesion/GenerateOTP";
import ResetPassword from "../Login/ResetSesion/Reset";
import DashBoard from "../QUIZ/DashBoard/DashBoard";
import UserProfile from "../QUIZ/DashBoard/UserProfile/UserProfile";
import Cmp211 from "../QUIZ/CMP211/Cmp211";
import Cmp211Results from "../QUIZ/CMP211/Cmp211Result/Cmp211Result";
import Cmp222 from "../QUIZ/CMP222/Cmp222";
import Cmp222Results from "../QUIZ/CMP222/Cmp222Result/Cmp222Result";
import Cmp211AdminQuestion from "../QUIZ/ADMIN/ADMINS/CMP211ADMIN/Cmp211AdminQuestion/Cmp211AdminQuestion";
import Cmp211AdminPost from "../QUIZ/ADMIN/ADMINS/CMP211ADMIN/Cmp211AdminPost/Cpm211AdminPost";
import AdminDashBoard from "../QUIZ/ADMIN-DASHBOARD/AdminDashboard/AdminDashboard";
import Cmp222AdminPost from "../QUIZ/ADMIN/ADMINS/CMP222Admin/Cmp222Adminpost/Cmp222AdminQuestion/Cmp222Adminpost";
import Cmp222AdminQuestion from "../QUIZ/ADMIN/ADMINS/CMP222Admin/Cmp222AdminQuestion/Cmp222AdminQuestion";
import Cmp223 from "../QUIZ/CMP223/Cmp223";
import Cmp223Results from "../QUIZ/CMP223/Cmp223Result/Cmp223Result";
import Cmp211Initial from "../QUIZ/CMP211/Cmp211Initial/Cmp211Initital";
import Cmp222Initial from "../QUIZ/CMP222/Cmp222Initial/Cmp222Initial";
import Cmp223Initial from "../QUIZ/CMP223/Cmp223Initial/Cmp223Initial";
import Cmp223AdminPost from "../QUIZ/ADMIN/ADMINS/CMP223Admin/Cmp223AdminQuestion/Cmp223Adminpost";
import Cmp223AdminQuestion from "../QUIZ/ADMIN/ADMINS/CMP223Admin/Cmp223Adminpost/Cmp223AdminQuestion";
import Gst222 from "../QUIZ/GST222/GST222";
import Gst222Results from "../QUIZ/GST222/GST222Result/GST222Result";
import Gst222Initial from "../QUIZ/GST222/GST222Initial/GST222Initial";
import GlobalTimer from "../QUIZ/GLOBAL/GlobalTimer/GlobalTimer";
import Gst222AdminQuestion from "../QUIZ/ADMIN/ADMINS/GST222ADMIN/Gst222Adminpost/Gst222AdminQuestion";
import Gst222AdminPost from "../QUIZ/ADMIN/ADMINS/GST222ADMIN/Gst222AdminQuestion/Gst222Adminpost";
import { ProtectQuiz } from "../Validate/Validate";

function MainComponenet() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/google/login/success"
          element={
            
              <DashBoard />
            
          }
        >
          <Route path="quiz" element={<Quiz />} />
          <Route path="result" element={<Result />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="cmp211" element={<Cmp211 />} />
          <Route path="cmp211-init" element={<Cmp211Initial />} />
          <Route path="cmp211-result" element={<Cmp211Results />} />
          <Route path="cmp222" element={<Cmp222 />} />
          <Route path="cmp222-init" element={<Cmp222Initial />} />
          <Route path="cmp222-result" element={<Cmp222Results />} />
          <Route path="cmp223" element={<Cmp223 />} />
          <Route path="cmp223-init" element={<Cmp223Initial />} />
          <Route path="cmp223-result" element={<Cmp223Results />} />
          <Route path="gst222" element={<Gst222 />} />
          <Route path="gst222-init" element={<Gst222Initial />} />
          <Route path="gst222-result" element={<Gst222Results />} />
        </Route>
        <Route path="/generate" element={<GenerateOTP />} />
        <Route path="/recover" element={<Username />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/admin-registration" element={<AdminRegistration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashBoard />}>
          <Route
            path="cmp211-admin-question"
            element={<Cmp211AdminQuestion />}
          />

          <Route path="cmp211-admin-post" element={<Cmp211AdminPost />} />
          <Route
            path="cmp222-admin-question"
            element={<Cmp222AdminQuestion />}
          />
          <Route path="cmp222-admin-post" element={<Cmp222AdminPost />} />
          <Route
            path="cmp223-admin-question"
            element={<Cmp223AdminQuestion />}
          />
          <Route path="cmp223-admin-post" element={<Cmp223AdminPost />} />
          <Route
            path="gst222-admin-question"
            element={<Gst222AdminQuestion />}
          />
          <Route path="gst222-admin-post" element={<Gst222AdminPost />} />
        </Route>
        <Route path="/admin-post" element={<AdminPost />} />
        <Route path="/timer" element={<GlobalTimer />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default MainComponenet;
